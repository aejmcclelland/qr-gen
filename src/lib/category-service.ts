import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import {
	DEFAULT_CATEGORY_OPTIONS,
	sortUserCategories,
	toUserCategoryPayload,
} from '@/lib/categories';

export async function ensureUserCategoriesInitialized(userId: string) {
	const user = await prisma.user.findUnique({
		where: { id: userId },
		select: { categoryDefaultsSeededAt: true },
	});

	if (!user || user.categoryDefaultsSeededAt) return;

	await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
		const currentUser = await tx.user.findUnique({
			where: { id: userId },
			select: { categoryDefaultsSeededAt: true },
		});

		if (!currentUser || currentUser.categoryDefaultsSeededAt) return;

		const existingCategories = await tx.category.findMany({
			where: { userId },
			select: { slug: true },
		});
		const existingSlugs = new Set(
			existingCategories.map((category) => category.slug),
		);

		const categoriesToCreate = DEFAULT_CATEGORY_OPTIONS.filter(
			(category) => !existingSlugs.has(category.value),
		).map((category) => ({
			userId,
			name: category.label,
			slug: category.value,
			isActive: true,
			isPreset: true,
		}));

		if (categoriesToCreate.length > 0) {
			await tx.category.createMany({
				data: categoriesToCreate,
				skipDuplicates: true,
			});
		}

		await tx.user.update({
			where: { id: userId },
			data: { categoryDefaultsSeededAt: new Date() },
		});
	});
}

export async function getUserCategoriesWithUsage(userId: string) {
	const [categories, usage] = await Promise.all([
		prisma.category.findMany({
			where: { userId },
			orderBy: { name: 'asc' },
		}),
		prisma.qrcodes.groupBy({
			by: ['category'],
			where: { userId },
			_count: { category: true },
		}),
	]);

	const usageBySlug = new Map(
		usage.map((item) => [item.category, item._count.category]),
	);

	return sortUserCategories(
		categories.map((category) =>
			toUserCategoryPayload({
				...category,
				qrCount: usageBySlug.get(category.slug) ?? 0,
			}),
		),
	);
}
