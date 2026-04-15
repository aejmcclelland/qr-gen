import { prisma } from '@/lib/prisma';
import {
	cleanCategoryName,
	createCategorySlug,
	MAX_CATEGORY_NAME_LENGTH,
	toUserCategoryPayload,
	type UserCategory,
} from '@/lib/categories';

export type PatchCategoryBody =
	| {
			name: string;
			isActive?: boolean;
	  }
	| {
			name?: undefined;
			isActive: boolean;
	  };

export type ParsePatchCategoryBodyResult =
	| { type: 'success'; data: PatchCategoryBody }
	| { type: 'invalid_json' }
	| { type: 'missing_updates' }
	| { type: 'invalid_name' };

export type UpdateUserCategoryResult =
	| { type: 'success'; category: UserCategory; updatedQrCodes: number }
	| { type: 'not_found' }
	| { type: 'collision' }
	| { type: 'preset_rename_forbidden' }
	| { type: 'in_use'; qrCount: number };

function parseCategoryName(input: unknown) {
	if (typeof input !== 'string') return null;

	const name = cleanCategoryName(input);
	if (!name) return null;
	if (name.length > MAX_CATEGORY_NAME_LENGTH) return null;

	return name;
}

export async function parsePatchCategoryBody(
	req: Request,
): Promise<ParsePatchCategoryBodyResult> {
	let body: unknown;

	try {
		body = await req.json();
	} catch {
		return { type: 'invalid_json' };
	}

	const payload =
		body && typeof body === 'object'
			? (body as { name?: unknown; isActive?: unknown })
			: {};
	const hasName = payload.name !== undefined;
	const isActive =
		typeof payload.isActive === 'boolean' ? payload.isActive : undefined;
	const hasActive = isActive !== undefined;

	if (!hasName && !hasActive) {
		return { type: 'missing_updates' };
	}

	const name = hasName ? parseCategoryName(payload.name) : undefined;
	if (hasName && !name) {
		return { type: 'invalid_name' };
	}

	if (name) {
		return {
			type: 'success',
			data: isActive === undefined ? { name } : { name, isActive },
		};
	}

	if (isActive === undefined) {
		return { type: 'missing_updates' };
	}

	return { type: 'success', data: { isActive } };
}

export async function updateUserCategory({
	categoryId,
	userId,
	data,
}: {
	categoryId: string;
	userId: string;
	data: PatchCategoryBody;
}): Promise<UpdateUserCategoryResult> {
	const name = data.name;
	const slug = name ? createCategorySlug(name) : null;
	const isActive = data.isActive;
	const hasActive = isActive !== undefined;

	return prisma.$transaction(async (tx) => {
		const existing = await tx.category.findFirst({
			where: { id: categoryId, userId },
		});

		if (!existing) return { type: 'not_found' };

		const usedQrCount = await tx.qrcodes.count({
			where: {
				userId,
				category: existing.slug,
			},
		});

		if (hasActive && isActive === false && usedQrCount > 0) {
			return { type: 'in_use', qrCount: usedQrCount };
		}

		if (name && existing.isPreset) {
			return { type: 'preset_rename_forbidden' };
		}

		if (name && slug) {
			const collision = await tx.category.findFirst({
				where: {
					userId,
					slug,
					NOT: { id: categoryId },
				},
				select: { id: true },
			});

			if (collision) return { type: 'collision' };
		}

		const updated = await tx.category.update({
			where: { id: categoryId },
			data: {
				...(name && slug ? { name, slug } : {}),
				...(hasActive ? { isActive } : {}),
			},
		});

		const updatedQrCodes =
			name && slug && existing.slug !== slug
				? await tx.qrcodes.updateMany({
						where: {
							userId,
							category: existing.slug,
						},
						data: {
							category: slug,
							updatedAt: new Date(),
						},
					})
				: { count: 0 };

		return {
			type: 'success',
			category: toUserCategoryPayload({
				...updated,
				qrCount: usedQrCount,
			}),
			updatedQrCodes: updatedQrCodes.count,
		};
	});
}
