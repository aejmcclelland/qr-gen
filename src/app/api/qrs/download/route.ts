// src/app/api/qrs/download/route.ts

import { NextRequest, NextResponse } from 'next/server';
import JSZip from 'jszip';
import QRCode from 'qrcode';
import { prisma } from '@/lib/prisma';
import { getAuthedUserId } from '@/lib/getAuthedUserId';

// Route segment config: this must be dynamic + node runtime
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

type Body = {
	ids: string[];
};

function jsonError(status: number, code: string, message: string) {
  return NextResponse.json({ code, message }, { status });
}

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
		const userId = await getAuthedUserId(req);

		if (!userId) {
			return jsonError(
				401,
				'UNAUTHORISED',
				'You must be logged in to download QR codes.'
			);
		}

		let body: Body | null = null;
		try {
			body = (await req.json()) as Body;
		} catch {
			return jsonError(400, 'BAD_BODY', 'Invalid request body.');
		}

		const ids = Array.isArray(body?.ids) ? body.ids.filter(Boolean) : [];

		if (ids.length < 2) {
			return jsonError(
				400,
				'BULK_MIN_2',
				ids.length === 0
					? 'No QR codes selected.'
					: 'Bulk download requires 2 or more QR codes. Use the single download option from the QR menu.'
			);
		}
		// Fetch only QRs belonging to this user
		const qrs = await prisma.qrcodes.findMany({
			where: {
				id: { in: ids },
				userId,
			},
			select: {
				id: true,
				targetUrl: true,
				label: true,
				category: true,
			},
		});

		if (qrs.length === 0) {
			return jsonError(404, 'NOT_FOUND', 'No matching QR codes were found.');
		}

		// If someone passed ids they don't own, just return what they do own.
		// make this strict later by checking qrs.length === ids.length.

		// ZIP response
		const zip = new JSZip();

		const usedNames = new Map<string, number>();

		for (const qr of qrs) {
			const pngBuffer = await QRCode.toBuffer(qr.targetUrl, {
				type: 'png',
				width: 1024,
				margin: 2,
			});

			const rawBase = safeFilename(qr.label ?? '') || safeFilename(qr.targetUrl) || qr.id;
			const count = (usedNames.get(rawBase) ?? 0) + 1;
			usedNames.set(rawBase, count);
			const filename = count === 1 ? `${rawBase}.png` : `${rawBase}-${count}.png`;

			zip.file(filename, pngBuffer);
		}

		const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });
		const zipBody = new Uint8Array(zipBuffer);

		return new NextResponse(zipBody, {
			status: 200,
			headers: {
				'Content-Type': 'application/zip',
				'Content-Disposition': `attachment; filename="qrpilot-qrs.zip"`,
				'Cache-Control': 'no-store',
			},
		});
	} catch (error) {
		console.error('Bulk download error', error);
		return jsonError(500, 'INTERNAL_ERROR', 'Internal server error');
	}
}
