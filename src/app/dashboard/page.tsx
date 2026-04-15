import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { DashboardCategoryShortcuts } from '@/components/dashboard/DashboardCategoryShortcuts';
import { DashboardQuickActions } from '@/components/dashboard/DashboardQuickActions';
import {
	DashboardRecentQrs,
	type RecentDashboardQr,
} from '@/components/dashboard/DashboardRecentQrs';
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { auth } from '@/lib/auth';
import { getSessionUserId } from '@/lib/getSessionUserId';
import { prisma } from '@/lib/prisma';
import { formatCategoryLabel } from '@/lib/categories';
import {
	ensureUserCategoriesInitialized,
	getUserCategoriesWithUsage,
} from '@/lib/category-service';

export const dynamic = 'force-dynamic';

type DashboardQr = {
	id: string;
	label: string | null;
	category: string;
	targetUrl: string;
	createdAt: Date;
	isPublic: boolean;
};

type DashboardCategory = {
	name: string;
	slug: string;
};

function mapRecentQrs(
	qrs: DashboardQr[],
	categories: DashboardCategory[],
): RecentDashboardQr[] {
	const categoryNameBySlug = new Map(
		categories.map((category) => [category.slug, category.name] as const),
	);

	return qrs.map((qr) => ({
		id: qr.id,
		label: qr.label,
		categoryLabel:
			categoryNameBySlug.get(qr.category) ?? formatCategoryLabel(qr.category),
		targetUrl: qr.targetUrl,
		createdAt: qr.createdAt,
		isPublic: qr.isPublic,
	}));
}

async function getDashboardData(userId: string) {
	const [totalQrCodes, publicQrCodes, recentQrs, categories] =
		await Promise.all([
			prisma.qrcodes.count({
				where: { userId },
			}),
			prisma.qrcodes.count({
				where: { userId, isPublic: true },
			}),
			prisma.qrcodes.findMany({
				where: { userId },
				orderBy: { createdAt: 'desc' },
				take: 6,
				select: {
					id: true,
					label: true,
					category: true,
					targetUrl: true,
					createdAt: true,
					isPublic: true,
				},
			}),
			getUserCategoriesWithUsage(userId),
		]);

	const categoryShortcuts = categories
		.filter((category) => category.isActive && category.qrCount > 0)
		.sort(
			(a, b) =>
				b.qrCount - a.qrCount ||
				a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }),
		)
		.slice(0, 6);

	return {
		totalQrCodes,
		publicQrCodes,
		privateQrCodes: totalQrCodes - publicQrCodes,
		totalCategories: categories.length,
		recentQrs: mapRecentQrs(recentQrs, categories),
		categoryShortcuts,
	};
}

export default async function DashboardPage() {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session?.user) redirect('/login?callbackURL=/dashboard');

	const userId = getSessionUserId(session);
	await ensureUserCategoriesInitialized(userId);

	const {
		totalQrCodes,
		publicQrCodes,
		privateQrCodes,
		totalCategories,
		recentQrs,
		categoryShortcuts,
	} = await getDashboardData(userId);

	return (
		<div className='min-h-screen bg-base-200 overflow-x-hidden'>
			<div className='mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 pb-24 sm:px-6 lg:px-8 lg:py-16'>
				<header className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<div className='space-y-2'>
						<p className='text-sm font-medium uppercase text-base-content/55'>
							Dashboard
						</p>
						<h1 className='text-3xl font-bold tracking-tight text-base-content sm:text-4xl'>
							Your QR control centre
						</h1>
						<p className='max-w-2xl text-sm leading-6 text-base-content/65 sm:text-base'>
							See what you have, jump back into recent QR codes, and manage the
							categories that keep your library usable.
						</p>
					</div>
				</header>

				<DashboardStats
					totalQrCodes={totalQrCodes}
					publicQrCodes={publicQrCodes}
					privateQrCodes={privateQrCodes}
					totalCategories={totalCategories}
				/>
				<DashboardQuickActions />
				<DashboardRecentQrs qrs={recentQrs} />
				<DashboardCategoryShortcuts
					categories={categoryShortcuts}
					totalQrCodes={totalQrCodes}
				/>
			</div>
		</div>
	);
}
