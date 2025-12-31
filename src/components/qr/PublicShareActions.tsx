'use client';

import { useEffect, useState } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { Toast } from '@/components/ui/Toast';

type Props = {
	targetUrl: string;
};

export default function PublicShareActions({ targetUrl }: Props) {
	const [toast, setToast] = useState({
		show: false,
		message: '',
		variant: 'info' as 'info' | 'success' | 'error' | 'warning',
	});

	const [canNativeShare, setCanNativeShare] = useState(false);

	useEffect(() => {
		setCanNativeShare(
			typeof navigator !== 'undefined' && typeof navigator.share === 'function'
		);
	}, []);

	const copyLink = () => {
		navigator.clipboard.writeText(window.location.href);
		setToast({
			show: true,
			message: 'Link copied to clipboard.',
			variant: 'success',
		});
	};

	const shareLink = async () => {
		if (!canNativeShare) {
			setToast({
				show: true,
				message: 'Sharing isn\'t supported on this device. You can copy the link instead.',
				variant: 'info',
			});
			return;
		}

		try {
			await navigator.share({
				title: 'QR Vault',
				url: window.location.href,
			});
		} catch (err: any) {
			if (err?.name === 'AbortError') return;
			setToast({
				show: true,
				message: 'Unable to open share options on this device.',
				variant: 'warning',
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

			<div className='flex flex-col gap-3 sm:flex-row sm:justify-center'>
				{/* Visit link */}
				<a
					href={targetUrl}
					target='_blank'
					rel='noopener noreferrer'
					className={buttonVariants({
						size: 'sm',
						className: 'w-full sm:w-auto',
					})}>
					Visit link
				</a>

				{/* Share (native share sheet where supported) */}
				{canNativeShare ? (
					<button
						type='button'
						className={buttonVariants({
							size: 'sm',
							variant: 'secondary',
							className: 'w-full sm:w-auto',
						})}
						onClick={shareLink}>
						Share
					</button>
				) : null}

				{/* Copy share link */}
				<button
					type='button'
					className={buttonVariants({
						size: 'sm',
						variant: 'outline',
						className: 'w-full sm:w-auto',
					})}
					onClick={copyLink}>
					Copy share link
				</button>
			</div>
		</>
	);
}
