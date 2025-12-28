// src/lib/qrExport.ts
'use client';

/**
 * Export helpers for QR codes rendered as either SVG or Canvas.
 * Works well with shadcn-io QRCode component (SVG in most cases).
 */

export type QrCanvasOptions = {
	size?: number; // output size in px (square)
	background?: string; // canvas background fill (use white for print/JPG)
};

const DEFAULT_SIZE = 1024;
const DEFAULT_BG = '#FFFFFF';

function escapeHtml(input: string) {
	return input
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

/**
 * Render the QR inside `rootEl` to a canvas.
 * - Prefers SVG if present (higher fidelity)
 * - Falls back to existing <canvas> if that's how it's rendered
 */
export async function resolveQrCanvasFromElement(
	rootEl: HTMLElement,
	opts: QrCanvasOptions = {}
): Promise<HTMLCanvasElement> {
	const size = opts.size ?? DEFAULT_SIZE;
	const background = opts.background ?? DEFAULT_BG;

	// Prefer SVG
	const svg = rootEl.querySelector('svg');
	if (svg) {
		const serializer = new XMLSerializer();
		const svgText = serializer.serializeToString(svg);

		const svgBlob = new Blob([svgText], {
			type: 'image/svg+xml;charset=utf-8',
		});
		const blobUrl = URL.createObjectURL(svgBlob);

		try {
			const img = new Image();
			img.decoding = 'async';
			img.crossOrigin = 'anonymous';
			img.src = blobUrl;

			await new Promise<void>((resolve, reject) => {
				img.onload = () => resolve();
				img.onerror = () => reject(new Error('Failed to load SVG'));
			});

			const canvas = document.createElement('canvas');
			canvas.width = size;
			canvas.height = size;

			const ctx = canvas.getContext('2d');
			if (!ctx) throw new Error('Canvas not supported');

			ctx.fillStyle = background;
			ctx.fillRect(0, 0, size, size);
			ctx.drawImage(img, 0, 0, size, size);

			return canvas;
		} finally {
			URL.revokeObjectURL(blobUrl);
		}
	}

	// Fallback: existing canvas
	const existingCanvas = rootEl.querySelector('canvas') as HTMLCanvasElement | null;
	if (existingCanvas) {
		// Copy it into a fresh canvas at the desired output size
		const canvas = document.createElement('canvas');
		canvas.width = size;
		canvas.height = size;

		const ctx = canvas.getContext('2d');
		if (!ctx) throw new Error('Canvas not supported');

		ctx.fillStyle = background;
		ctx.fillRect(0, 0, size, size);
		ctx.drawImage(existingCanvas, 0, 0, size, size);

		return canvas;
	}

	throw new Error('Unable to export QR (no svg/canvas found)');
}

export function canvasToDataUrlPng(canvas: HTMLCanvasElement): string {
	return canvas.toDataURL('image/png');
}

export function canvasToDataUrlJpg(canvas: HTMLCanvasElement, quality = 0.92): string {
	return canvas.toDataURL('image/jpeg', quality);
}

export function canvasToBlob(
	canvas: HTMLCanvasElement,
	type: 'image/png' | 'image/jpeg' = 'image/png',
	quality = 0.92
): Promise<Blob> {
	return new Promise((resolve, reject) => {
		canvas.toBlob(
			(blob) => {
				if (!blob) return reject(new Error('Failed to encode image'));
				resolve(blob);
			},
			type,
			type === 'image/jpeg' ? quality : undefined
		);
	});
}

export function isWebShareSupported() {
	return typeof navigator !== 'undefined' && typeof navigator.share === 'function';
}

function canShareFiles(files: File[]) {
	const nav = navigator as unknown as {
		canShare?: (data: { files: File[] }) => boolean;
	};
	// If canShare isn't present, we optimistically assume support.
	return typeof nav?.canShare === 'function' ? nav.canShare({ files }) : true;
}

export async function shareFiles(params: {
	files: File[];
	title?: string;
	text?: string;
	url?: string;
}) {
	if (!isWebShareSupported()) throw new Error('Web Share not supported');

	const data: ShareData = {
		title: params.title,
		text: params.text,
		url: params.url,
		files: params.files,
	};

	if (params.files?.length && !canShareFiles(params.files)) {
		throw new Error('This browser cannot share files');
	}

	await navigator.share(data);
}

export function downloadDataUrl(dataUrl: string, filename: string) {
	const a = document.createElement('a');
	a.href = dataUrl;
	a.download = filename;
	a.rel = 'noopener';
	document.body.appendChild(a);
	a.click();
	a.remove();
}

export function downloadCanvasAsPng(canvas: HTMLCanvasElement, filenameBase: string) {
	downloadDataUrl(canvasToDataUrlPng(canvas), `${filenameBase}.png`);
}

export function downloadCanvasAsJpg(
	canvas: HTMLCanvasElement,
	filenameBase: string,
	quality = 0.92
) {
	downloadDataUrl(canvasToDataUrlJpg(canvas, quality), `${filenameBase}.jpg`);
}

/**
 * Opens a calm print preview tab (no auto-print). User taps Print.
 * Uses a Blob URL to avoid document.write().
 */
export function openPrintPreview(params: {
	dataUrl: string;
	title: string;
	url: string;
}) {
	const w = window.open('', '_blank');
	if (!w) return;

	let blobUrl: string | null = null;

	const navigateWithHtml = (html: string) => {
		const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
		blobUrl = URL.createObjectURL(blob);
		w.location.replace(blobUrl);
	};

	// placeholder
	navigateWithHtml(`<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Preparing print…</title>
  <style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;padding:24px}</style>
</head>
<body>
  <p>Preparing your QR for printing…</p>
</body>
</html>`);

	const safeTitle = escapeHtml(params.title || 'QR Code');
	const safeUrl = escapeHtml(params.url || '');

	navigateWithHtml(`<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${safeTitle}</title>
  <style>
    @page { margin: 12mm; }
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
    .wrap { display: grid; place-items: center; gap: 12px; }
    img { width: 240px; height: 240px; image-rendering: pixelated; }
    .h1 { font-size: 16px; font-weight: 600; margin: 0; text-align: center; }
    .p { font-size: 12px; margin: 0; text-align: center; color: #444; word-break: break-word; }
    .actions { display: flex; gap: 10px; justify-content: center; margin-top: 10px; }
    .btn { appearance: none; border: 0; padding: 10px 14px; border-radius: 10px; background: #111; color: #fff; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px; }
    .btn:active { transform: translateY(1px); }
    .btn-ghost { background: transparent; color: #111; border: 1px solid #ccc; }
    @media print { .actions { display: none; } }
  </style>
</head>
<body>
  <div class="wrap">
    <p class="h1">${safeTitle}</p>
    <img src="${params.dataUrl}" alt="QR Code" />
    <p class="p">${safeUrl}</p>
  </div>
  <div class="actions">
    <button class="btn" type="button" onclick="window.print()">
      <svg style="opacity:.8" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M6 7V3h12v4h-2V5H8v2H6Zm0 14v-5H4a2 2 0 0 1-2-2v-5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v5a2 2 0 0 1-2 2h-2v5H6Zm2-2h8v-6H8v6Zm12-7a1 1 0 0 0 1-1a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1Z"/>
      </svg>
      Print
    </button>
    <button class="btn btn-ghost" type="button" onclick="window.close()">Close</button>
  </div>
</body>
</html>`);

	// cleanup
	setTimeout(() => {
		if (blobUrl) URL.revokeObjectURL(blobUrl);
	}, 30_000);
}
