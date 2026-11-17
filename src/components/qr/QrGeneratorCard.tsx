// src/components/qr/QrGeneratorCard.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@/lib/auth-client';
import jsPDF from 'jspdf';
import { checkGuestQrLimit } from '@/lib/guest-use';
import {
	downloadBlob,
	downloadCanvasAsPng,
	resolveQrCanvasFromElement,
} from '@/lib/qrExport';
import { Toast } from '@/components/ui/Toast';
import { QrForm } from '@/components/qr/QrForm';
import { QrPreview } from './QrPreview';
import { QrPlaceholder } from './QrPlaceholder';
import { CategorySelect } from './CategorySelect';

const CANVAS_SIZE = 512;
const PDF_QR_SIZE = 256;

const GUEST_LIMIT_MESSAGE =
	'You have used your free guest QR. Please log in or sign up to generate more.';

const MUST_LOGIN_TO_SAVE_MESSAGE =
	'To save QR codes and access them later, please log in or create a free account.';

const ALREADY_CREATED_THIS_QR_CODE =
	'You’ve already saved a QR for this URL. Open ‘My QRs’ to view it, or enter a different URL.';

const CALLBACK_URL = '/qr';

export function QrGeneratorCard() {
	const [value, setValue] = useState('');
	const [qrValue, setQrValue] = useState('');
	const [label, setLabel] = useState('');
	const [isSaving, setIsSaving] = useState(false);
	const [saveMessage, setSaveMessage] = useState<string | null>(null);
	const router = useRouter();
	const { data: session } = useSession();
	const [showAuthActions, setShowAuthActions] = useState(false);
	const [showToast, setShowToast] = useState(false);
	const [category, setCategory] = useState('personal');

	const [toastVariant, setToastVariant] = useState<
		'info' | 'success' | 'error' | 'warning'
	>('info');

	const enforceGuestLimit = (nextValue: string): boolean => {
		// Logged-in users are always allowed
		if (session) return true;

		const normalized = nextValue.trim();
		const limit = checkGuestQrLimit(normalized);

		if (!limit.allowed) {
			setSaveMessage(limit.message ?? GUEST_LIMIT_MESSAGE);
			setToastVariant('warning');
			setShowAuthActions(true);
			setShowToast(true);
			return false;
		}

		return true;
	};

	useEffect(() => {
		if (!showToast) return;
		const timer = setTimeout(() => setShowToast(false), 5000);
		return () => clearTimeout(timer);
	}, [showToast]);

	const updateValue = (next: string) => {
		setValue(next);

		// Logged-in users → always allow updating the QR
		if (session) {
			setQrValue(next);
			return;
		}
		// Guests → check limit
		if (!enforceGuestLimit(next)) {
			// BLOCK updating QR
			return;
		}
		// Allowed (first QR or same QR) → update QR normally
		setQrValue(next);
	};

	const downloadQr = async (format: 'PNG' | 'PDF') => {
		if (!qrValue || !enforceGuestLimit(value)) {
			return;
		}

		try {
			const preview = document.getElementById('qr-svg');
			if (!preview) throw new Error('QR preview is not available');
			const canvas = await resolveQrCanvasFromElement(preview, {
				size: CANVAS_SIZE,
			});

			if (format === 'PNG') {
				await downloadCanvasAsPng(canvas, 'qr-code');
				return;
			}

			const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
			const x = (pdf.internal.pageSize.getWidth() - PDF_QR_SIZE) / 2;
			const y = (pdf.internal.pageSize.getHeight() - PDF_QR_SIZE) / 2;
			pdf.addImage(canvas, 'PNG', x, y, PDF_QR_SIZE, PDF_QR_SIZE);
			downloadBlob(pdf.output('blob'), 'qr-code.pdf');
		} catch (error) {
			console.error('Error exporting QR', error);
			setSaveMessage(`Could not prepare the ${format} download. Please try again.`);
			setToastVariant('error');
			setShowAuthActions(false);
			setShowToast(true);
		}
	};

	const saveQr = async () => {
		setIsSaving(true);
		setShowToast(false);
		setSaveMessage(null);
		setShowAuthActions(false);
		setToastVariant('info');

		try {
			// If the user is not logged in, guide them to login instead of calling the API
			if (!session) {
				setSaveMessage(MUST_LOGIN_TO_SAVE_MESSAGE);
				setToastVariant('warning');
				setShowAuthActions(true);
				setShowToast(true);
				return;
			}

			const res = await fetch('/api/qrs', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					targetUrl: value.trim(),
					label: label || undefined,
					category,
				}),
			});

			if (!res.ok) {
				if (res.status === 401) {
					setSaveMessage(MUST_LOGIN_TO_SAVE_MESSAGE);
					setShowAuthActions(true);
					setShowToast(true);
					return;
				}

				if (res.status === 409) {
					setSaveMessage(ALREADY_CREATED_THIS_QR_CODE);
					setToastVariant('warning');
					setShowToast(true);
					return;
				}

				let errorMessage = 'Failed to save QR';
				try {
					const data = await res.json();
					if (data?.error && typeof data.error === 'string') {
						errorMessage = data.error;
					}
				} catch {
					// ignore JSON parse errors
				}

				setSaveMessage(errorMessage);
				setToastVariant('error');
				setShowToast(true);
				return;
			}

			setShowAuthActions(false);
			setSaveMessage('Saved ✔');
			setToastVariant('success');
			setShowToast(true);
		} catch (err) {
			console.error('Error saving QR', err);
			setSaveMessage('Failed to save');
			setToastVariant('error');
			setShowToast(true);
		} finally {
			setIsSaving(false);
		}
	};

	return (
		<div className='card bg-base-100 shadow-xl max-w-md w-full'>
			<div className='card-body space-y-4'>
				<h1 className='card-title text-2xl'>QR Code Generator</h1>
				<div className='space-y-1 w-full'>
					<QrForm
						label={label}
						value={value}
						onLabelChange={setLabel}
						onValueChange={updateValue}
					/>
					<div className='form-control w-full'>
						<label className='label mb-1' id='qr-category-label'>
							<span className='label-text'>Category</span>
						</label>
						<CategorySelect
							value={category}
							onChange={setCategory}
							ariaLabelledBy='qr-category-label'
							loadUserCategories={Boolean(session?.user)}
							showSuggestedDefaults={!session?.user}
							preserveCurrentValue={!session?.user}
						/>
					</div>
				</div>
				<div className='flex flex-col items-center gap-4'>
					{qrValue ? <QrPreview data={qrValue} /> : <QrPlaceholder />}

					<div className='flex flex-wrap gap-2 justify-center'>
						<button
							type='button'
							className='btn btn-primary btn-sm'
							disabled={!qrValue}
							onClick={() => void downloadQr('PNG')}>
							Download PNG
						</button>
						<button
							type='button'
							className='btn btn-secondary btn-sm'
							disabled={!qrValue}
							onClick={() => void downloadQr('PDF')}>
							Download PDF
						</button>
						<button
							className='btn btn-accent btn-sm'
							onClick={saveQr}
							disabled={isSaving}>
							{isSaving ? 'Saving...' : 'Save to account'}
						</button>
					</div>

					<Toast
						show={showToast}
						message={saveMessage ?? 'Please log in or sign up to continue.'}
						variant={toastVariant}
						positionClassName='toast-top toast-center'
						onClose={() => setShowToast(false)}
						actions={
							(showAuthActions ||
								saveMessage === ALREADY_CREATED_THIS_QR_CODE) && (
								<div className='flex gap-2'>
									{showAuthActions ? (
										<>
											<button
												type='button'
												className='btn btn-outline btn-xs'
												onClick={() =>
													router.push(
														`/login?callbackURL=${encodeURIComponent(CALLBACK_URL)}`,
													)
												}>
												Log in
											</button>
											<button
												type='button'
												className='btn btn-primary btn-xs'
												onClick={() =>
													router.push(
														`/signup?callbackURL=${encodeURIComponent(CALLBACK_URL)}`,
													)
												}>
												Sign up
											</button>
										</>
									) : null}

									{saveMessage === ALREADY_CREATED_THIS_QR_CODE ? (
										<button
											type='button'
											className='btn btn-primary btn-xs'
											onClick={() => router.push('/qr')}>
											Open My QRs
										</button>
									) : null}
								</div>
							)
						}
					/>
				</div>
			</div>
		</div>
	);
}
