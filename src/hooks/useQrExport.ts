'use client';

import { useMemo } from 'react';
import {
	resolveQrCanvasFromElement,
	downloadCanvasAsPng,
	downloadCanvasAsJpg,
	canvasToDataUrlPng,
	openPrintPreview,
	canvasToBlob,
	isWebShareSupported,
	shareFiles,
} from '@/lib/qrExport';

export function useQrExport({
	rootRef,
	label,
	id,
	targetUrl,
}: {
	rootRef: React.RefObject<HTMLElement | null>;
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

	const share = async () => {
		// Prefer native share sheet on supported devices (mobile)
		if (isWebShareSupported()) {
			const canvas = await exportCanvas();
			const blob = await canvasToBlob(canvas, 'image/png');
			const file = new File([blob], `${filename}.png`, { type: 'image/png' });

			await shareFiles({
				files: [file],
				title: label ?? 'QR Code',
				text: label ? `QR: ${label}\n${targetUrl}` : targetUrl,
			});

			return;
		}
		try {
			await navigator.clipboard.writeText(targetUrl);
		} catch {
			// clipboard may be blocked (non-HTTPS / denied)
		}

		await downloadPng();
	};

	return { filename, downloadPng, downloadJpg, print, share };
}
