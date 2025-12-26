// src/app/api/qrs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

// GET /api/qrs - list QR codes for the current user
export async function GET(req: NextRequest) {
	try {
		const sessionResult = await auth.api.getSession({
			headers: req.headers,
		});

		const session = sessionResult?.session;

		if (!session) {
			return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
		}

		const qrs = await prisma.qrcodes.findMany({
			where: { userId: session.userId },
			orderBy: { createdAt: 'desc' },
			take: 100,
		});

		return NextResponse.json(qrs, { status: 200 });
	} catch (error) {
		console.error('Error fetching QRs', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}

// POST /api/qrs - create a new QR code for the current user
export async function POST(req: NextRequest) {
	try {
		const sessionResult = await auth.api.getSession({
			headers: req.headers,
		});

		const session = sessionResult?.session;

		if (!session) {
			return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
		}

		const body = await req.json();
		const { targetUrl, label, category } = body as {
			targetUrl?: string;
			label?: string;
			category?: string;
		};

		if (!targetUrl) {
			return NextResponse.json(
				{ error: 'targetUrl is required' },
				{ status: 400 }
			);
		}

		const qr = await prisma.qrcodes.create({
			data: {
				targetUrl,
				label,
				category: category ?? 'personal',
				userId: session.userId,
				createdAt: new Date(), //explicitly set in case DB default isn’t applied
			},
		});

		return NextResponse.json(qr, { status: 201 });
	} catch (error) {
		console.error('Error creating QR', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}
