'use client';

import { type ChangeEvent, type FormEvent, useCallback, useRef } from 'react';
import { QRCode as ClientQRCode } from '@/components/ui/shadcn-io/qr-code';
import { QrCardActions } from '@/components/qr/QrCardActions';

type Qr = {
	id: string;
	targetUrl: string;
	label: string | null;
	category: string;
	createdAt: string;
};

const CATEGORY_BADGE_CLASSES: Record<string, string> = {
	personal: 'badge-primary',
	work: 'badge-secondary',
	club: 'badge-accent',
	church: 'badge-info',
	other: 'badge-ghost',
	education: 'badge-success',
	event: 'badge-warning',
	marketing: 'badge-error',
	health: 'badge-primary',
	finance: 'badge-secondary',
	travel: 'badge-accent',
	entertainment: 'badge-info',
	technology: 'badge-success',
	food: 'badge-warning',
	non_profit: 'badge-error',
};

type QrCardProps = {
	qr: Qr;
	isEditing: boolean;
	editLabel: string;
	editUrl: string;
	savingEdit: boolean;
	editCategory: string;
	onStartEdit: () => void;
	onCancelEdit: () => void;
	onChangeLabel: (value: string) => void;
	onChangeUrl: (value: string) => void;
	onChangeCategory: (value: string) => void;
	onSubmitEdit: (e: FormEvent<HTMLFormElement>) => void;
	onDelete: () => void;
	onVisit: () => void;
	onCopy: () => void;
};

export function QrCard({
	qr,
	isEditing,
	editLabel,
	editCategory,
	editUrl,
	savingEdit,
	onStartEdit,
	onCancelEdit,
	onChangeLabel,
	onChangeUrl,
	onChangeCategory,
	onSubmitEdit,
	onDelete,
	onVisit,
	onCopy,
}: QrCardProps) {
	const qrRenderRef = useRef<HTMLDivElement | null>(null);

	const getSafeFileBase = useCallback(() => {
		const base = (qr.label ?? `qr-${qr.id}`).trim() || `qr-${qr.id}`;
		return base
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^a-z0-9-_]/g, '')
			.slice(0, 40);
	}, [qr.id, qr.label]);

	const resolveQrImageDataUrl = useCallback(async (): Promise<string> => {
		const root = qrRenderRef.current;
		if (!root) throw new Error('QR not available');

		// Prefer SVG if available
		const svg = root.querySelector('svg');
		if (svg) {
			const serializer = new XMLSerializer();
			const svgText = serializer.serializeToString(svg);
			const svgBlob = new Blob([svgText], {
				type: 'image/svg+xml;charset=utf-8',
			});
			const url = URL.createObjectURL(svgBlob);

			try {
				const img = new Image();
				img.decoding = 'async';
				// Important for Safari + blob URLs
				img.src = url;

				await new Promise<void>((resolve, reject) => {
					img.onload = () => resolve();
					img.onerror = () => reject(new Error('Failed to load SVG'));
				});

				const size = 1024;
				const canvas = document.createElement('canvas');
				canvas.width = size;
				canvas.height = size;
				const ctx = canvas.getContext('2d');
				if (!ctx) throw new Error('Canvas not supported');

				// white background
				ctx.fillStyle = '#FFFFFF';
				ctx.fillRect(0, 0, size, size);
				ctx.drawImage(img, 0, 0, size, size);

				return canvas.toDataURL('image/png');
			} finally {
				URL.revokeObjectURL(url);
			}
		}

		// Fallback to canvas if the QR component renders as canvas
		const canvas = root.querySelector('canvas') as HTMLCanvasElement | null;
		if (canvas) {
			return canvas.toDataURL('image/png');
		}

		throw new Error('Unable to export QR (no svg/canvas found)');
	}, []);

	const onDownloadPng = useCallback(async () => {
		try {
			const dataUrl = await resolveQrImageDataUrl();
			const a = document.createElement('a');
			a.href = dataUrl;
			a.download = `${getSafeFileBase()}.png`;
			a.rel = 'noopener';
			document.body.appendChild(a);
			a.click();
			a.remove();
		} catch (err) {
			console.error(err);
		}
	}, [getSafeFileBase, resolveQrImageDataUrl]);

	const onPrint = useCallback(async () => {
		// Open synchronously (before any await) so browsers treat it as user-initiated.
		const w = window.open('', '_blank');
		if (!w) return;

		let blobUrl: string | null = null;

		const navigateWithHtml = (html: string) => {
			const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
			blobUrl = URL.createObjectURL(blob);
			// Use location.replace so the blank tab doesn't stay in history.
			w.location.replace(blobUrl);
		};

		// Quick placeholder so the user doesn’t see a blank tab.
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

		try {
			const dataUrl = await resolveQrImageDataUrl();
			const title = qr.label ?? 'QR Code';
			const safeTitle = title.replace(/</g, '&lt;');
			const safeUrl = qr.targetUrl.replace(/</g, '&lt;');

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
		<img src="${dataUrl}" alt="QR Code" />
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

			// Best effort cleanup of the blob URL from the opener.
			setTimeout(() => {
				if (blobUrl) URL.revokeObjectURL(blobUrl);
			}, 30_000);
		} catch (err) {
			console.error(err);
			navigateWithHtml(`<!doctype html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Print failed</title>
	<style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;padding:24px}</style>
</head>
<body>
	<p>Sorry — we couldn’t prepare this QR for printing.</p>
	<p>Please close this tab and try again.</p>
</body>
</html>`);

			setTimeout(() => {
				if (blobUrl) URL.revokeObjectURL(blobUrl);
			}, 30_000);
		}
	}, [qr.label, qr.targetUrl, resolveQrImageDataUrl]);

	return (
		<div className='card bg-base-100 shadow-md p-4 flex flex-col items-center gap-3'>
			<div className='p-2 bg-base-200 rounded-xl' ref={qrRenderRef}>
				<ClientQRCode
					data={qr.targetUrl}
					className='size-36 rounded bg-white p-3 shadow'
				/>
			</div>

			{isEditing ? (
				<form onSubmit={onSubmitEdit} className='w-full flex flex-col gap-2'>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Label</span>
						</label>
						<input
							type='text'
							className='input input-bordered input-sm w-full'
							value={editLabel}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								onChangeLabel(e.target.value)
							}
						/>
					</div>

					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Category</span>
						</label>
						<select
							className='select select-bordered select-sm w-full'
							value={editCategory}
							onChange={(e) => onChangeCategory(e.target.value)}
							required>
							{Object.keys(CATEGORY_BADGE_CLASSES)
								.sort()
								.map((key) => (
									<option key={key} value={key}>
										{key.replaceAll('_', ' ')}
									</option>
								))}
						</select>
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Target URL</span>
						</label>
						<input
							type='url'
							className='input input-bordered input-sm w-full'
							value={editUrl}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								onChangeUrl(e.target.value)
							}
							required
						/>
					</div>

					<div className='flex gap-2 justify-end mt-2'>
						<button
							type='button'
							className='btn btn-ghost btn-xs'
							onClick={onCancelEdit}
							disabled={savingEdit}>
							Cancel
						</button>
						<button
							type='submit'
							className='btn btn-primary btn-xs'
							disabled={savingEdit}>
							{savingEdit ? 'Saving…' : 'Save'}
						</button>
					</div>
				</form>
			) : (
				<>
					<div className='w-full flex justify-end'>
						<QrCardActions
							onEdit={onStartEdit}
							onDelete={onDelete}
							onVisit={onVisit}
							onCopy={onCopy}
							onDownloadPng={onDownloadPng}
							onPrint={onPrint}
							createdAt={qr.createdAt}
						/>
					</div>

					<div className='text-center w-full'>
						<p
							className='font-medium text-sm wrap-break-word min-h-5'
							aria-hidden={!qr.label}>
							{qr.label ?? '\u00A0'}
						</p>
						<p
							className='text-xs text-base-content/60 truncate w-full mt-1 mb-1'
							title={qr.targetUrl}>
							{qr.targetUrl}
						</p>
						<div className='flex items-center justify-between mt-2 w-full'>
							<span
								className={`badge badge-soft ${
									CATEGORY_BADGE_CLASSES[qr.category] ?? 'badge-outline'
								}`}>
								{qr.category}
							</span>

							<span className='text-[10px] text-base-content/40'>
								{qr.createdAt
									? new Date(qr.createdAt).toLocaleDateString('en-GB')
									: '—'}
							</span>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
