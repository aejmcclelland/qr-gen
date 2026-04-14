import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthedUserId } from '@/lib/getAuthedUserId';
import {
	cleanCategoryName,
	createCategorySlug,
	MAX_CATEGORY_NAME_LENGTH,
	toUserCategoryPayload,
} from '@/lib/categories';
import { ensureUserCategoriesInitialized } from '@/lib/category-service';

function parseCategoryName(input: unknown) {
	if (typeof input !== 'string') return null;

	const name = cleanCategoryName(input);
	if (!name) return null;
	if (name.length > MAX_CATEGORY_NAME_LENGTH) return null;

	return name;
}

export async function PATCH(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const { id } = await params;

	try {
		const userId = await getAuthedUserId(req);

		if (!userId) {
			return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
		}

		await ensureUserCategoriesInitialized(userId);

		let body: { name?: unknown; isActive?: unknown };
		try {
			body = (await req.json()) as { name?: unknown; isActive?: unknown };
		} catch {
			return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
		}

		const hasName = body.name !== undefined;
		const hasActive = typeof body.isActive === 'boolean';

		if (!hasName && !hasActive) {
			return NextResponse.json(
				{ error: 'Provide a name or isActive value.' },
				{ status: 400 },
			);
		}

		const name = hasName ? parseCategoryName(body.name) : null;
		if (hasName && !name) {
			return NextResponse.json(
				{
					error: `Category name must be between 1 and ${MAX_CATEGORY_NAME_LENGTH} characters.`,
				},
				{ status: 400 },
			);
		}

		const slug = name ? createCategorySlug(name) : null;

		const result = await prisma.$transaction(async (tx) => {
			const existing = await tx.category.findFirst({
				where: { id, userId },
			});

			if (!existing) return null;

			const usedQrCount = await tx.qrcodes.count({
				where: {
					userId,
					category: existing.slug,
				},
			});

			if (hasActive && body.isActive === false && usedQrCount > 0) {
				return { inUse: true as const, qrCount: usedQrCount };
			}

			if (name && existing.isPreset) {
				return { presetRename: true as const };
			}

			if (name && slug) {
				const collision = await tx.category.findFirst({
					where: {
						userId,
						slug,
						NOT: { id },
					},
					select: { id: true },
				});

				if (collision) {
					return { collision: true as const };
				}
			}

			const updated = await tx.category.update({
				where: { id },
				data: {
					...(name && slug ? { name, slug } : {}),
					...(hasActive ? { isActive: body.isActive as boolean } : {}),
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
				category: toUserCategoryPayload({
					...updated,
					qrCount: usedQrCount,
				}),
				updatedQrCodes: updatedQrCodes.count,
			};
		});

		if (!result) {
			return NextResponse.json({ error: 'Not found' }, { status: 404 });
		}

		if ('collision' in result) {
			return NextResponse.json(
				{ error: 'You already have a category with that name.' },
				{ status: 409 },
			);
		}

		if ('presetRename' in result) {
			return NextResponse.json(
				{ error: 'Preset categories can be enabled or disabled, not renamed.' },
				{ status: 403 },
			);
		}

		if ('inUse' in result) {
			return NextResponse.json(
				{
					error:
						result.qrCount === 1
							? 'This category is used by 1 QR code. Change that QR code before disabling it.'
							: `This category is used by ${result.qrCount} QR codes. Change those QR codes before disabling it.`,
					qrCount: result.qrCount,
				},
				{ status: 409 },
			);
		}

		return NextResponse.json(result, { status: 200 });
	} catch (error) {
		if ((error as { code?: string })?.code === 'P2002') {
			return NextResponse.json(
				{ error: 'You already have a category with that name.' },
				{ status: 409 },
			);
		}

		console.error('Error updating category', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 },
		);
	}
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const { id } = await params;

	try {
		const userId = await getAuthedUserId(req);

		if (!userId) {
			return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
		}

		await ensureUserCategoriesInitialized(userId);

		const existing = await prisma.category.findFirst({
			where: { id, userId },
		});

		if (!existing) {
			return NextResponse.json({ error: 'Not found' }, { status: 404 });
		}

		if (existing.isPreset) {
			return NextResponse.json(
				{ error: 'Preset categories can be disabled, not deleted.' },
				{ status: 403 },
			);
		}

		const usedQrCount = await prisma.qrcodes.count({
			where: {
				userId,
				category: existing.slug,
			},
		});

		if (usedQrCount > 0) {
			return NextResponse.json(
				{
					error:
						usedQrCount === 1
							? 'This category is used by 1 QR code. Change that QR code before deleting it.'
							: `This category is used by ${usedQrCount} QR codes. Change those QR codes before deleting it.`,
					qrCount: usedQrCount,
				},
				{ status: 409 },
			);
		}

		await prisma.category.delete({
			where: { id },
		});

		return NextResponse.json({ deleted: true }, { status: 200 });
	} catch (error) {
		console.error('Error deleting category', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 },
		);
	}
}
