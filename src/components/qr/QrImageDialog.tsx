'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import {
	canShareFiles,
	canvasToBlob,
	resolveQrCanvasFromElement,
	shareFiles,
} from '@/lib/qrExport';

type QrImageDialogProps = {
	readonly rootElement: HTMLElement;
	readonly filename: string;
	readonly label: string;
	readonly onClose: () => void;
};

export function QrImageDialog({
	rootElement,
	filename,
	label,
	onClose,
}: QrImageDialogProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const titleId = useId();
	const [image, setImage] = useState<{ file: File; url: string } | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [message, setMessage] = useState<string | null>(null);
	const [busy, setBusy] = useState(false);

	useEffect(() => {
		const dialog = dialogRef.current;
		dialog?.showModal();
		let cancelled = false;
		let objectUrl: string | undefined;

		async function prepareImage() {
			try {
				const canvas = await resolveQrCanvasFromElement(rootElement);
				const blob = await canvasToBlob(canvas);
				if (cancelled) return;
				const file = new File([blob], `${filename}.png`, { type: 'image/png' });
				objectUrl = URL.createObjectURL(file);
				setImage({ file, url: objectUrl });
			} catch {
				if (!cancelled) {
					setError('Could not prepare the QR image. Close and try again.');
				}
			}
		}

		void prepareImage();

		return () => {
			cancelled = true;
			dialog?.close();
			// Let a download already started from this preview finish reading its file.
			if (objectUrl) {
				const url = objectUrl;
				window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
			}
		};
	}, [rootElement, filename]);

	const supportsShare = image && canShareFiles([image.file]);
	const supportsCopy =
		typeof ClipboardItem !== 'undefined' &&
		typeof navigator.clipboard?.write === 'function' &&
		(typeof ClipboardItem.supports !== 'function' || ClipboardItem.supports('image/png'));

	async function shareImage() {
		if (!image) return;
		setError(null);
		setMessage(null);
		setBusy(true);
		try {
			// Prepare the file before the tap so the phone can open its share sheet immediately.
			await shareFiles({ files: [image.file] });
		} catch (error) {
			if (!(error instanceof DOMException && error.name === 'AbortError')) {
				setError('Could not share the image. Use Download PNG to save it.');
			}
		} finally {
			setBusy(false);
		}
	}

	async function copyImage() {
		if (!image) return;
		setError(null);
		setMessage(null);
		setBusy(true);
		try {
			await navigator.clipboard.write([
				new ClipboardItem({ 'image/png': image.file }),
			]);
			setMessage('Image copied. Paste it into your message.');
		} catch {
			setError('Could not copy the image. Use Download PNG to save it.');
		} finally {
			setBusy(false);
		}
	}

	return createPortal(
		<dialog
			ref={dialogRef}
			className='modal'
			aria-labelledby={titleId}
			onCancel={onClose}
			onClick={(event) => {
				if (event.target === event.currentTarget) onClose();
			}}>
			<div className='modal-box max-h-[90dvh] max-w-md overflow-y-auto space-y-4'>
				<div className='flex items-start justify-between gap-3'>
					<h2 id={titleId} className='text-lg font-semibold wrap-anywhere'>
						{label}
					</h2>
					<button type='button' className='btn btn-ghost btn-sm' onClick={onClose}>
						Close
					</button>
				</div>
				{image ? (
					<>
						<div className='mx-auto w-fit max-w-full rounded-lg bg-white p-4'>
							<Image
								src={image.url}
								alt='QR code preview'
								width={1024}
								height={1024}
								unoptimized
								className='aspect-square h-auto w-64 max-w-full'
							/>
						</div>
						<div className='flex flex-wrap justify-center gap-2'>
							<a
								href={image.url}
								download={image.file.name}
								className='btn btn-primary btn-sm'>
								Download PNG
							</a>
							{supportsShare ? (
								<button
									type='button'
									className='btn btn-outline btn-sm'
									disabled={busy}
									onClick={shareImage}>
									Share image
								</button>
							) : null}
							{supportsCopy ? (
								<button
									type='button'
									className='btn btn-outline btn-sm'
									disabled={busy}
									onClick={copyImage}>
									Copy image
								</button>
							) : null}
						</div>
						{supportsShare ? (
							<p className='text-sm text-base-content/70'>
								Choose WhatsApp or another app from Share image.
							</p>
						) : null}
						{!supportsShare && !supportsCopy ? (
							<p className='text-sm text-base-content/70'>
								Download the image to attach it to a message.
							</p>
						) : null}
					</>
				) : null}
				{!image && !error ? (
					<p role='status' className='text-sm'>Preparing image…</p>
				) : null}
				{error ? <p role='alert' className='text-sm text-error'>{error}</p> : null}
				{message ? <p role='status' className='text-sm text-success'>{message}</p> : null}
			</div>
		</dialog>,
		document.body,
	);
}
