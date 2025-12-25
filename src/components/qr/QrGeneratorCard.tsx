// src/components/qr/QrGeneratorCard.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@/lib/auth-client';
import jsPDF from 'jspdf';
import { checkGuestQrLimit } from '@/lib/guest-use';
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

const CALLBACK_URL = '/qr';

async function makeCanvasFromSvg(svgId: string) {
	const container = document.getElementById(svgId);
	if (!container) return null;

	const svg = container.querySelector('svg');
	if (!svg) return null;

	const serializer = new XMLSerializer();
	const svgString = serializer.serializeToString(svg);
	const svgBlob = new Blob([svgString], {
		type: 'image/svg+xml;charset=utf-8',
	});
	const url = URL.createObjectURL(svgBlob);
	const img = new Image();

	const canvas = document.createElement('canvas');
	canvas.width = CANVAS_SIZE;
	canvas.height = CANVAS_SIZE;

	await new Promise<void>((resolve) => {
		img.onload = () => {
			const ctx = canvas.getContext('2d');
			if (!ctx) return resolve();

			ctx.fillStyle = 'white';
			ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
			ctx.drawImage(img, 0, 0, CANVAS_SIZE, CANVAS_SIZE);

			URL.revokeObjectURL(url);
			resolve();
		};
		img.src = url;
	});

	return canvas;
}

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

	const enforceGuestLimit = (nextValue: string) => {
		// Logged-in users are always allowed
		if (session) return true;

		const limit = checkGuestQrLimit(nextValue);

		if (!limit.allowed) {
			setSaveMessage(limit.message ?? GUEST_LIMIT_MESSAGE);
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

	const downloadPng = async () => {
		if (!enforceGuestLimit(value)) {
			return;
		}

		const canvas = await makeCanvasFromSvg('qr-svg');
		if (!canvas) return;

		const pngUrl = canvas.toDataURL('image/png');
		const link = document.createElement('a');
		link.href = pngUrl;
		link.download = 'qr-code.png';
		link.click();
	};

	const downloadPdf = async () => {
		if (!enforceGuestLimit(value)) {
			return;
		}

		const canvas = await makeCanvasFromSvg('qr-svg');
		if (!canvas) return;
		const pdf = new jsPDF({
			orientation: 'portrait',
			unit: 'pt',
			format: 'a4',
		});

		const pageWidth = pdf.internal.pageSize.getWidth();
		const pageHeight = pdf.internal.pageSize.getHeight();
		const x = (pageWidth - PDF_QR_SIZE) / 2;
		const y = (pageHeight - PDF_QR_SIZE) / 2;

		const pngData = canvas.toDataURL('image/png');
		pdf.addImage(pngData, 'PNG', x, y, PDF_QR_SIZE, PDF_QR_SIZE);
		pdf.save('qr-code.pdf');
	};

	const saveQr = async () => {
		setIsSaving(true);
		setShowToast(false);
		setSaveMessage(null);
		setShowAuthActions(false);

		try {
			// If the user is not logged in, guide them to login instead of calling the API
			if (!session) {
				setSaveMessage(MUST_LOGIN_TO_SAVE_MESSAGE);
				setShowAuthActions(true);
				setShowToast(true);
				return;
			}

			const res = await fetch('/api/qrs', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					targetUrl: value,
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
				setShowToast(true);
				return;
			}

			setShowAuthActions(false);
			setSaveMessage('Saved ✔');
			setShowToast(true);
		} catch (err) {
			console.error('Error saving QR', err);
			setSaveMessage('Failed to save');
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
					<CategorySelect value={category} onChange={setCategory} />
				</div>
				<div className='flex flex-col items-center gap-4'>
					{qrValue ? <QrPreview data={qrValue} /> : <QrPlaceholder />}

					<div className='flex flex-wrap gap-2 justify-center'>
						<button className='btn btn-primary btn-sm' onClick={downloadPng}>
							Download PNG
						</button>
						<button className='btn btn-secondary btn-sm' onClick={downloadPdf}>
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
						variant='info'
						positionClassName='toast-top toast-center'
						onClose={() => setShowToast(false)}
						actions={
							showAuthActions && (
								<div className='flex gap-2'>
									<button
										type='button'
										className='btn btn-outline btn-xs'
										onClick={() =>
											router.push(
												`/login?callbackURL=${encodeURIComponent(CALLBACK_URL)}`
											)
										}>
										Log in
									</button>
									<button
										type='button'
										className='btn btn-primary btn-xs'
										onClick={() =>
											router.push(
												`/signup?callbackURL=${encodeURIComponent(
													CALLBACK_URL
												)}`
											)
										}>
										Sign up
									</button>
								</div>
							)
						}
					/>
				</div>
			</div>
		</div>
	);
}
