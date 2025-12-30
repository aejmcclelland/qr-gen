// src/app/api/qrs/download/route.ts

import { NextRequest, NextResponse } from 'next/server';
import JSZip from 'jszip';
import QRCode from 'qrcode';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

// Route segment config: this must be dynamic + node runtime
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

type Body = {
	ids: string[];
};

function safeFilename(input: string) {
	return input
		.toLowerCase()
		.replace(/https?:\/\//g, '')
		.replace(/[^a-z0-9-_]+/g, '-')
		.replace(/-+/g, '-')
		.replace(/(^-|-$)/g, '')
		.slice(0, 48);
}

export async function POST(req: NextRequest) {
	try {
		const sessionResult = await auth.api.getSession({ headers: req.headers });
		const session = sessionResult?.session;

		if (!session) {
			return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
		}

		const body = (await req.json()) as Body;
		const ids = Array.isArray(body?.ids) ? body.ids.filter(Boolean) : [];

		if (ids.length < 2) {
			return NextResponse.json(
				{
					error:
						ids.length === 0
							? 'No QR codes selected.'
							: 'Bulk download requires 2 or more QR codes. Use the single download option from the QR menu.',
				},
				{ status: 400 }
			);
		}
		// Fetch only QRs belonging to this user
		const qrs = await prisma.qrcodes.findMany({
			where: {
				id: { in: ids },
				userId: session.userId,
			},
			select: {
				id: true,
				targetUrl: true,
				label: true,
				category: true,
			},
		});

		if (qrs.length === 0) {
			return NextResponse.json({ error: 'Not found' }, { status: 404 });
		}

		// If someone passed ids they don't own, just return what they do own.
		// make this strict later by checking qrs.length === ids.length.

		// ZIP response
		const zip = new JSZip();

		for (const qr of qrs) {
			const pngBuffer = await QRCode.toBuffer(qr.targetUrl, {
				type: 'png',
				width: 1024,
				margin: 2,
			});

			const base =
				safeFilename(qr.label ?? '') || safeFilename(qr.targetUrl) || qr.id;

			zip.file(`${base || qr.id}.png`, pngBuffer);
		}

		const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });
		const zipBody = new Uint8Array(zipBuffer);

		return new NextResponse(zipBody, {
			status: 200,
			headers: {
				'Content-Type': 'application/zip',
				'Content-Disposition': `attachment; filename="qrvault-qrs.zip"`,
				'Cache-Control': 'no-store',
			},
		});
	} catch (error) {
		console.error('Bulk download error', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}
