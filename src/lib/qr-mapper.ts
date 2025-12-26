// src/lib/qr-mapper.ts
import type { qrcodes } from '../../generated/prisma/client';

export type QrClient = {
	id: string;
	targetUrl: string;
	label: string | null;
	category: string;
	createdAt: string; // already formatted for client
};

const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
	hour: '2-digit',
	minute: '2-digit',
	second: '2-digit',
	hour12: false,
};

const FORMAT_LOCALE = 'en-GB'; // keep you in day/month/year land

export function mapQrToClient(qr: qrcodes): QrClient {
	return {
		id: qr.id,
		targetUrl: qr.targetUrl,
		label: qr.label,
		category: qr.category,
		createdAt: qr.createdAt.toLocaleString(FORMAT_LOCALE, DATE_FORMAT_OPTIONS),
	};
}

export function mapQrsToClient(qrs: qrcodes[]): QrClient[] {
	return qrs.map(mapQrToClient);
}
