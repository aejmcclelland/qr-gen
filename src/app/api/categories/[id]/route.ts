import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthedUserId } from '@/lib/getAuthedUserId';
import { MAX_CATEGORY_NAME_LENGTH } from '@/lib/categories';
import { ensureUserCategoriesInitialized } from '@/lib/category-service';
import {
	parsePatchCategoryBody,
	updateUserCategory,
	type ParsePatchCategoryBodyResult,
	type UpdateUserCategoryResult,
} from '@/lib/category-update';

type ParsePatchCategoryBodyError = Exclude<
	ParsePatchCategoryBodyResult,
	{ type: 'success' }
>;

function invalidCategoryNameResponse() {
	return NextResponse.json(
		{
			error: `Category name must be between 1 and ${MAX_CATEGORY_NAME_LENGTH} characters.`,
		},
		{ status: 400 },
	);
}

function categoryInUseError(qrCount: number) {
	return qrCount === 1
		? 'This category is used by 1 QR code. Change that QR code before disabling it.'
		: `This category is used by ${qrCount} QR codes. Change those QR codes before disabling it.`;
}

function mapParseCategoryBodyResult(result: ParsePatchCategoryBodyError) {
	switch (result.type) {
		case 'invalid_json':
			return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
		case 'missing_updates':
			return NextResponse.json(
				{ error: 'Provide a name or isActive value.' },
				{ status: 400 },
			);
		case 'invalid_name':
			return invalidCategoryNameResponse();
	}
}

function mapUpdateCategoryResult(result: UpdateUserCategoryResult) {
	switch (result.type) {
		case 'success':
			return NextResponse.json(
				{
					category: result.category,
					updatedQrCodes: result.updatedQrCodes,
				},
				{ status: 200 },
			);
		case 'not_found':
			return NextResponse.json({ error: 'Not found' }, { status: 404 });
		case 'collision':
			return NextResponse.json(
				{ error: 'You already have a category with that name.' },
				{ status: 409 },
			);
		case 'preset_rename_forbidden':
			return NextResponse.json(
				{ error: 'Preset categories can be enabled or disabled, not renamed.' },
				{ status: 403 },
			);
		case 'in_use':
			return NextResponse.json(
				{
					error: categoryInUseError(result.qrCount),
					qrCount: result.qrCount,
				},
				{ status: 409 },
			);
	}
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

		const parsedBody = await parsePatchCategoryBody(req);
		if (parsedBody.type !== 'success') {
			return mapParseCategoryBodyResult(parsedBody);
		}

		const result = await updateUserCategory({
			categoryId: id,
			userId,
			data: parsedBody.data,
		});

		return mapUpdateCategoryResult(result);
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
