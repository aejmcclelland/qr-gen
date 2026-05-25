'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import {
	Copy,
	ExternalLink,
	Link2,
	Pencil,
	Trash2,
} from 'lucide-react';
import { IsPublicToggle } from '@/components/qr/IsPublicToggle';
import { Toast } from '@/components/ui/Toast';
import { QRCode } from '@/components/ui/shadcn-io/qr-code';
import type { QrClient } from '@/lib/qr-mapper';

type ToastState = {
	show: boolean;
	message: string;
	variant: 'info' | 'success' | 'error' | 'warning';
};

type QrDetailClientProps = {
	initialQr: QrClient;
};

export function QrDetailClient({ initialQr }: QrDetailClientProps) {
	const router = useRouter();
	const [qr, setQr] = useState(initialQr);
	const [isUpdating, setIsUpdating] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [toast, setToast] = useState<ToastState>({
		show: false,
		message: '',
		variant: 'info',
	});

	const title = qr.label?.trim() || 'Untitled QR';
	const createdDate = useMemo(
		() => new Date(qr.createdAt).toLocaleDateString('en-GB'),
		[qr.createdAt],
	);

	const showToast = (message: string, variant: ToastState['variant']) => {
		setToast({ show: true, message, variant });
	};

	const getPublicPageLink = () => {
		const publicPath = `/q/${qr.id}`;

		if (typeof window === 'undefined') {
			return publicPath;
		}

		return `${window.location.origin}${publicPath}`;
	};

	const copyText = async (value: string, successMessage: string) => {
		try {
			await navigator.clipboard.writeText(value);
			showToast(successMessage, 'success');
		} catch {
			showToast('Could not copy. Please try again.', 'error');
		}
	};

	const toggleVisibility = async (nextIsPublic: boolean) => {
		const previousIsPublic = qr.isPublic;
		setQr((current) => ({ ...current, isPublic: nextIsPublic }));
		setIsUpdating(true);

		try {
			const res = await fetch(`/api/qrs/${qr.id}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ isPublic: nextIsPublic }),
			});

			if (!res.ok) {
				throw new Error('Could not update QR visibility');
			}

			showToast(nextIsPublic ? 'QR is now public.' : 'QR is now private.', 'success');
			router.refresh();
		} catch {
			setQr((current) => ({ ...current, isPublic: previousIsPublic }));
			showToast('Could not update visibility.', 'error');
		} finally {
			setIsUpdating(false);
		}
	};

	const deleteQr = async () => {
		const confirmed = window.confirm(
			'Delete this QR code? This will permanently remove it from your library.',
		);

		if (!confirmed) return;

		setIsDeleting(true);

		try {
			const res = await fetch(`/api/qrs/${qr.id}`, { method: 'DELETE' });

			if (!res.ok) {
				throw new Error('Could not delete QR');
			}

			showToast('QR deleted.', 'success');
			router.push('/qr');
			router.refresh();
		} catch {
			setIsDeleting(false);
			showToast('Could not delete QR.', 'error');
		}
	};

	return (
		<main className='min-h-screen bg-base-200 px-4 py-10 sm:px-6'>
			<Toast
				show={toast.show}
				message={toast.message}
				variant={toast.variant}
				onClose={() => setToast((prev) => ({ ...prev, show: false }))}
			/>

			<div className='mx-auto w-full max-w-4xl'>
				<Link href='/qr' className='btn btn-ghost mb-4'>
					Back to library
				</Link>

				<div className='card bg-base-100 shadow-xl'>
					<div className='card-body gap-8'>
						<div className='flex flex-col gap-6 md:flex-row'>
							<div className='flex shrink-0 justify-center md:justify-start'>
								<div className='rounded-lg bg-white p-4 shadow'>
									<QRCode
										data={qr.targetUrl}
										className='size-56 sm:size-64'
										foreground='#111'
									/>
								</div>
							</div>

							<div className='min-w-0 flex-1 space-y-5'>
								<div className='space-y-2'>
									<div className='flex flex-wrap items-center gap-2'>
										<h1 className='text-2xl font-bold leading-tight'>{title}</h1>
										<span
											className={`badge ${
												qr.isPublic ? 'badge-primary' : 'badge-outline'
											}`}>
											{qr.isPublic ? 'Public' : 'Private'}
										</span>
									</div>

									<p className='break-all text-sm text-base-content/70'>
										{qr.targetUrl}
									</p>
								</div>

								<div className='grid gap-3 text-sm sm:grid-cols-2'>
									<div>
										<p className='font-semibold'>Category</p>
										<p className='text-base-content/70'>{qr.category}</p>
									</div>

									<div>
										<p className='font-semibold'>Created</p>
										<p className='text-base-content/70'>{createdDate}</p>
									</div>

									<div>
										<p className='font-semibold'>Status</p>
										<p className='text-base-content/70'>
											{qr.isPublic ? 'Public page enabled' : 'Private to you'}
										</p>
									</div>
								</div>

								<div className='flex items-center gap-3'>
									<IsPublicToggle
										id={`is-public-toggle-${qr.id}`}
										isPublic={qr.isPublic}
										onToggle={toggleVisibility}
										disabled={isUpdating || isDeleting}
									/>
								</div>
							</div>
						</div>

						<div className='flex flex-wrap gap-3'>
							<Link
								href={qr.targetUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='btn btn-primary'>
								<ExternalLink className='h-4 w-4' />
								Visit destination
							</Link>

							<button
								type='button'
								className='btn btn-outline'
								onClick={() =>
									copyText(qr.targetUrl, 'Destination URL copied.')
								}>
								<Copy className='h-4 w-4' />
								Copy destination URL
							</button>

							<button
								type='button'
								className='btn btn-outline'
								onClick={() =>
									copyText(getPublicPageLink(), 'Public page link copied.')
								}>
								<Link2 className='h-4 w-4' />
								Copy public page link
							</button>

							{qr.isPublic ? (
								<Link
									href={`/q/${qr.id}`}
									target='_blank'
									rel='noopener noreferrer'
									className='btn btn-outline'>
									<ExternalLink className='h-4 w-4' />
									Open public page
								</Link>
							) : null}

							<Link href={`/qr?edit=${qr.id}`} className='btn btn-outline'>
								<Pencil className='h-4 w-4' />
								Edit
							</Link>

							<button
								type='button'
								className='btn btn-ghost text-error'
								onClick={deleteQr}
								disabled={isDeleting}>
								<Trash2 className='h-4 w-4' />
								{isDeleting ? 'Deleting...' : 'Delete QR'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
