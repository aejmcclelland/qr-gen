// src/app/api/qrs/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthedUserId } from '@/lib/getAuthedUserId';
import { cleanCategoryValue, FALLBACK_CATEGORY } from '@/lib/categories';

const MAX_QRS = 100;

function normalizeTargetUrl(input?: string) {
	const value = (input ?? '').trim();

	if (!value) return '';

	try {
		return new URL(value).toString();
	} catch {
		return '';
	}
}

// GET /api/qrs - list QR codes for the current user
export async function GET(req: NextRequest) {
	try {
		const userId = await getAuthedUserId(req);

		if (!userId) {
			return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
		}

		const qrs = await prisma.qrcodes.findMany({
			where: { userId },
			orderBy: { createdAt: 'desc' },
			take: MAX_QRS,
		});

		return NextResponse.json(qrs, {
			status: 200,
			headers: { 'Cache-Control': 'no-store' },
		});
	} catch (error) {
		console.error('Error fetching QRs', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 },
		);
	}
}

// POST /api/qrs - create a new QR code for the current user
export async function POST(req: NextRequest) {
	try {
		const userId = await getAuthedUserId(req);

		if (!userId) {
			return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
		}

		let body: { targetUrl?: string; label?: string; category?: string };
		try {
			body = (await req.json()) as {
				targetUrl?: string;
				label?: string;
				category?: string;
			};
		} catch {
			return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
		}

		const { targetUrl, label, category } = body;

		const normalizedTargetUrl = normalizeTargetUrl(targetUrl);

		if (!normalizedTargetUrl) {
			return NextResponse.json({ error: 'Invalid targetUrl' }, { status: 400 });
		}

		// Prevent duplicates for this user
		const existing = await prisma.qrcodes.findFirst({
			where: {
				userId,
				targetUrl: normalizedTargetUrl,
			},
			select: {
				id: true,
				targetUrl: true,
				label: true,
				category: true,
				createdAt: true,
			},
		});

		if (existing) {
			return NextResponse.json(
				{
					error: 'DUPLICATE_QR',
					message:
						'You have already saved this QR. Visit your saved QRs to view it or use a different URL.',
					existing,
				},
				{ status: 409 },
			);
		}

		const cleanedCategory = cleanCategoryValue(category) || FALLBACK_CATEGORY;

		const qr = await prisma.qrcodes.create({
			data: {
				targetUrl: normalizedTargetUrl,
				label,
				category: cleanedCategory,
				userId,
			},
		});

		return NextResponse.json(qr, { status: 201 });
	} catch (error) {
		// If Prisma schema has a unique constraint for (userId, targetUrl), Prisma will throw a P2002 here.
		// Avoid importing Prisma types to keep this file simple.
		const code = (error as any)?.code;
		if (code === 'P2002') {
			return NextResponse.json(
				{
					error: 'DUPLICATE_QR',
					message:
						'You have already saved this QR. Visit your saved QRs to view it or use a different URL.',
				},
				{ status: 409 },
			);
		}

		console.error('Error creating QR', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 },
		);
	}
}
