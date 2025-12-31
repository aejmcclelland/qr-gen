// src/components/qr/PublicShareActions.tsx
'use client';

import { useState } from 'react';
import { Toast } from '@/components/ui/Toast';
import Link from 'next/link';
import { ExternalLink, Copy, Link2, ImageDown } from 'lucide-react';
import {
	resolveQrCanvasFromElement,
	downloadCanvasAsPng,
} from '@/lib/qrExport';

type Props = {
	targetUrl: string;
	qrRootId?: string;
	label?: string | null;
};

export default function PublicShareActions({
	targetUrl,
	qrRootId,
	label,
}: Props) {
	const [toast, setToast] = useState({
		show: false,
		message: '',
		variant: 'info' as 'info' | 'success' | 'error' | 'warning',
	});

	const filenameBase =
		(label ?? 'qr-code')
			.trim()
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^a-z0-9-_]/g, '')
			.slice(0, 40) || 'qr-code';

	const copyDestination = async () => {
		try {
			await navigator.clipboard.writeText(targetUrl);
			setToast({
				show: true,
				message: 'Destination URL copied!',
				variant: 'success',
			});
		} catch {
			setToast({
				show: true,
				message: 'Could not copy destination URL.',
				variant: 'error',
			});
		}
	};

	const copyQrPageLink = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			setToast({
				show: true,
				message: 'QR page link copied!',
				variant: 'success',
			});
		} catch {
			setToast({
				show: true,
				message: 'Could not copy QR page link.',
				variant: 'error',
			});
		}
	};

	const downloadPng = async () => {
		try {
			if (!qrRootId) return;
			const el = document.getElementById(qrRootId);
			if (!el) throw new Error('QR not available');

			const canvas = await resolveQrCanvasFromElement(el, {
				size: 1024,
				background: '#FFFFFF',
			});
			downloadCanvasAsPng(canvas, filenameBase);

			setToast({ show: true, message: 'PNG downloaded!', variant: 'success' });
		} catch {
			setToast({
				show: true,
				message: 'Could not download PNG.',
				variant: 'error',
			});
		}
	};

	return (
		<>
			<Toast
				show={toast.show}
				message={toast.message}
				variant={toast.variant}
				positionClassName='toast-top toast-center'
				onClose={() => setToast((prev) => ({ ...prev, show: false }))}
			/>

			<div className='flex flex-wrap items-center justify-center gap-3 w-full'>
				<Link
					href={targetUrl}
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Visit destination'
					title='Visit destination'
					className='btn btn-circle btn-outline'>
					<ExternalLink className='h-4 w-4' />
				</Link>

				<button
					type='button'
					aria-label='Copy destination URL'
					title='Copy destination URL'
					className='btn btn-circle btn-outline'
					onClick={copyDestination}>
					<Copy className='h-4 w-4' />
				</button>

				<button
					type='button'
					aria-label='Copy QR page link'
					title='Copy QR page link'
					className='btn btn-circle btn-outline'
					onClick={copyQrPageLink}>
					<Link2 className='h-4 w-4' />
				</button>

				{qrRootId ? (
					<button
						type='button'
						aria-label='Download PNG'
						title='Download PNG'
						className='btn btn-circle btn-primary'
						onClick={downloadPng}>
						<ImageDown className='h-4 w-4' />
					</button>
				) : null}
			</div>
		</>
	);
}
