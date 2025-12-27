// src/lib/qr-mapper.ts
import type { qrcodes } from '../../generated/prisma/client';

export type QrClient = {
	id: string;
	targetUrl: string;
	label: string | null;
	category: string;
	createdAt: string; // ISO string
};

export function mapQrToClient(qr: qrcodes): QrClient {
	return {
		id: qr.id,
		targetUrl: qr.targetUrl,
		label: qr.label,
		category: qr.category,
		createdAt: qr.createdAt.toISOString(),
	};
}

export function mapQrsToClient(qrs: qrcodes[]): QrClient[] {
	return qrs.map(mapQrToClient);
}
