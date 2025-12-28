'use client';

import { useMemo, type RefObject } from 'react';
import {
	resolveQrCanvasFromElement,
	downloadCanvasAsPng,
	downloadCanvasAsJpg,
	canvasToDataUrlPng,
	openPrintPreview,
	canvasToBlob,
	isWebShareSupported,
	canShareFiles,
	shareFiles,
} from '@/lib/qrExport';

function isAppleShareTarget() {
	if (typeof navigator === 'undefined') return false;
	const ua = navigator.userAgent || '';
	// iOS Safari (and iPadOS) are the main culprits for the “caption card” layout when sharing files.
	// We keep this intentionally simple and conservative.
	return /iPhone|iPad|iPod/i.test(ua);
}

function buildShareText(params: { label: string | null; url: string }) {
	const cleanLabel = (params.label ?? '').trim();
	// Keep it short and “message-like”.
	if (cleanLabel) return `QR: ${cleanLabel}\n${params.url}`;
	return params.url;
}

export type ShareResult =
	| { shared: true }
	| { shared: false; fallback: 'copy-url' }
	| { shared: false; fallback: null };

export function useQrExport({
	rootRef,
	label,
	id,
	targetUrl,
}: {
	rootRef: RefObject<HTMLElement | null>;
	label: string | null;
	id: string;
	targetUrl: string;
}) {
	const filename = useMemo(() => {
		const base = (label ?? `qr-${id}`).trim() || `qr-${id}`;
		return base
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^a-z0-9-_]/g, '')
			.slice(0, 40);
	}, [label, id]);

	const exportCanvas = async () => {
		if (!rootRef.current) throw new Error('QR not available');
		return await resolveQrCanvasFromElement(rootRef.current, {
			size: 1024,
			background: '#FFFFFF',
		});
	};

	const downloadPng = async () => {
		const canvas = await exportCanvas();
		downloadCanvasAsPng(canvas, filename);
	};

	const downloadJpg = async (quality = 0.92) => {
		const canvas = await exportCanvas();
		downloadCanvasAsJpg(canvas, filename, quality);
	};

	const print = async () => {
		const canvas = await exportCanvas();
		const dataUrl = canvasToDataUrlPng(canvas);
		openPrintPreview({
			dataUrl,
			title: label ?? 'QR Code',
			url: targetUrl,
		});
	};

	const share = async (): Promise<ShareResult> => {
		if (!isWebShareSupported()) {
			return { shared: false, fallback: 'copy-url' };
		}

		const canvas = await exportCanvas();
		const blob = await canvasToBlob(canvas, 'image/png');

		const file = new File([blob], 'qr-code.png', {
			type: 'image/png',
		});

		if (!canShareFiles([file])) {
			return { shared: false, fallback: 'copy-url' };
		}

		try {
			await shareFiles({
				files: [file],
				text: `QR code for ${targetUrl}`,
			});

			return { shared: true };
		} catch (err: any) {
			if (err?.name === 'AbortError') {
				return { shared: false, fallback: null };
			}
			return { shared: false, fallback: 'copy-url' };
		}
	};
	return { filename, downloadPng, downloadJpg, print, share };
}
