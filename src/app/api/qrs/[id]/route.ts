// src/app/api/qrs/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthedUserId } from '@/lib/getAuthedUserId';


// GET /api/qrs/:id - fetch a single QR for the current user
export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;

	try {
		const userId = await getAuthedUserId(req);

		if (!userId) {
			return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
		}

		const qr = await prisma.qrcodes.findFirst({
			where: { id, userId },
		});

		if (!qr) {
			return NextResponse.json({ error: 'Not found' }, { status: 404 });
		}

		return NextResponse.json(qr, { status: 200 });
	} catch (error) {
		console.error('Error fetching QR', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}

// PATCH /api/qrs/:id - update label/category/targetUrl for the current user's QR
export async function PATCH(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;

	try {
		const userId = await getAuthedUserId(req);

		if (!userId) {
			return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
		}

		// Ensure the QR belongs to this user
		const existing = await prisma.qrcodes.findFirst({
			where: { id, userId },
		});

		if (!existing) {
			return NextResponse.json({ error: 'Not found' }, { status: 404 });
		}

		const body = await req.json();
		const { targetUrl, label, category, isPublic } = body as {
			targetUrl?: string;
			label?: string;
			category?: string;
			isPublic?: boolean;
		};

		const updated = await prisma.qrcodes.update({
			where: { id },
			data: {
				...(typeof isPublic === 'boolean' ? { isPublic } : {}),
				...(targetUrl !== undefined && { targetUrl }),
				...(label !== undefined && { label }),
				...(category !== undefined && { category }),
				updatedAt: new Date(),
			},
		});

		return NextResponse.json(updated, { status: 200 });
	} catch (error: any) {
		console.error('Error updating QR', error);
		if (error?.code === 'P2025') {
			return NextResponse.json({ error: 'Not found' }, { status: 404 });
		}
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}

// DELETE /api/qrs/:id - delete a QR for the current user
export async function DELETE(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;

	try {
		const userId = await getAuthedUserId(req);

		if (!userId) {
			return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
		}

		// Ensure the QR belongs to this user
		const existing = await prisma.qrcodes.findFirst({
			where: { id, userId },
		});

		if (!existing) {
			return NextResponse.json({ error: 'Not found' }, { status: 404 });
		}

		await prisma.qrcodes.delete({
			where: { id },
		});

		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error: any) {
		console.error('Error deleting QR', error);
		if (error?.code === 'P2025') {
			return NextResponse.json({ error: 'Not found' }, { status: 404 });
		}
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}
