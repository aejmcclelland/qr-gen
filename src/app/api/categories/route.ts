import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthedUserId } from '@/lib/getAuthedUserId';
import {
	cleanCategoryName,
	createCategorySlug,
	MAX_CATEGORY_NAME_LENGTH,
	toUserCategoryPayload,
} from '@/lib/categories';
import {
	ensureUserCategoriesInitialized,
	getUserCategoriesWithUsage,
} from '@/lib/category-service';

function invalidCategoryNameResponse(message: string) {
	return NextResponse.json({ error: message }, { status: 400 });
}

function parseCategoryName(input: unknown) {
	if (typeof input !== 'string') return null;

	const name = cleanCategoryName(input);
	if (!name) return null;
	if (name.length > MAX_CATEGORY_NAME_LENGTH) return null;

	return name;
}

export async function GET(req: NextRequest) {
	try {
		const userId = await getAuthedUserId(req);

		if (!userId) {
			return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
		}

		await ensureUserCategoriesInitialized(userId);

		const categories = await getUserCategoriesWithUsage(userId);

		return NextResponse.json(
			{
				categories,
			},
			{
				status: 200,
				headers: { 'Cache-Control': 'no-store' },
			},
		);
	} catch (error) {
		console.error('Error fetching categories', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 },
		);
	}
}

export async function POST(req: NextRequest) {
	try {
		const userId = await getAuthedUserId(req);

		if (!userId) {
			return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
		}

		await ensureUserCategoriesInitialized(userId);

		let body: { name?: unknown };
		try {
			body = (await req.json()) as { name?: unknown };
		} catch {
			return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
		}

		const name = parseCategoryName(body.name);
		if (!name) {
			return invalidCategoryNameResponse(
				`Category name must be between 1 and ${MAX_CATEGORY_NAME_LENGTH} characters.`,
			);
		}

		const slug = createCategorySlug(name);

		const existing = await prisma.category.findFirst({
			where: { userId, slug },
			select: { id: true },
		});

		if (existing) {
			return NextResponse.json(
				{ error: 'You already have a category with that name.' },
				{ status: 409 },
			);
		}

		const category = await prisma.category.create({
			data: {
				userId,
				name,
				slug,
				isActive: true,
				isPreset: false,
			},
		});

		return NextResponse.json(
			{ category: toUserCategoryPayload(category) },
			{ status: 201 },
		);
	} catch (error) {
		if ((error as { code?: string })?.code === 'P2002') {
			return NextResponse.json(
				{ error: 'You already have a category with that name.' },
				{ status: 409 },
			);
		}

		console.error('Error creating category', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 },
		);
	}
}
