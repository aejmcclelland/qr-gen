'use client';

import { type ChangeEvent, type FormEvent, useCallback, useEffect, useRef } from 'react';
import { QRCode as ClientQRCode } from '@/components/ui/shadcn-io/qr-code';
import { QrCardActions } from '@/components/qr/QrCardActions';
import { useQrExport } from '@/hooks/useQrExport';

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
	isSelecting: boolean;
	isSelected: boolean;
	onToggleSelect: () => void;
	onEnterSelectMode: () => void;
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
	isSelecting,
	isSelected,
	onToggleSelect,
	onEnterSelectMode,
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

	const { downloadPng, downloadJpg, print, share } = useQrExport({
		rootRef: qrRenderRef,
		label: qr.label,
		id: qr.id,
		targetUrl: qr.targetUrl,
	});

	const onDownloadPng = useCallback(async () => {
		try {
			await downloadPng();
		} catch (err) {
			console.error(err);
		}
	}, [downloadPng]);

	const onDownloadJpg = useCallback(async () => {
		try {
			await downloadJpg(0.92);
		} catch (err) {
			console.error(err);
		}
	}, [downloadJpg]);

	const onPrint = useCallback(async () => {
		try {
			await print();
		} catch (err) {
			console.error(err);
		}
	}, [print]);

	const onShare = useCallback(async () => {
		try {
			await share();
		} catch (err) {
			console.error(err);
		}
	}, [share]);

	const longPressTimerRef = useRef<number | null>(null);
	const longPressTriggeredRef = useRef(false);

	const lastPointerTypeRef = useRef<string | null>(null);

	const haptic = useCallback((ms = 10) => {
		// Light haptic feedback on supported devices (mostly Android).
		if (typeof navigator === 'undefined') return;
		// Prefer touch interactions.
		if (lastPointerTypeRef.current && lastPointerTypeRef.current !== 'touch') return;
		if (typeof (navigator as any).vibrate === 'function') {
			(navigator as any).vibrate(ms);
		}
	}, []);

	const clearLongPress = useCallback(() => {
		if (longPressTimerRef.current) {
			window.clearTimeout(longPressTimerRef.current);
			longPressTimerRef.current = null;
		}
	}, []);

	useEffect(() => {
		return () => {
			clearLongPress();
		};
	}, [clearLongPress]);

	const handlePointerDown = useCallback((e: React.PointerEvent) => {
		lastPointerTypeRef.current = e.pointerType;
		// Only arm long-press when not already selecting and not editing
		if (isSelecting || isEditing) return;

		// Prevent iOS Safari from selecting text / showing the copy callout on long-press.
		// Only do this for touch so we don't break normal desktop interactions.
		if (e.pointerType === 'touch') {
			e.preventDefault();
		}

		longPressTriggeredRef.current = false;
		clearLongPress();

		longPressTimerRef.current = window.setTimeout(() => {
			longPressTriggeredRef.current = true;
			haptic(12);
			onEnterSelectMode();
		}, 520);
	}, [clearLongPress, isEditing, isSelecting, onEnterSelectMode, haptic]);

	const handlePointerUp = useCallback(() => {
		clearLongPress();
	}, [clearLongPress]);

	const handleCardClick = useCallback(() => {
		// When selecting, tapping the card toggles selection.
		if (isSelecting) {
			haptic(8);
			onToggleSelect();
			return;
		}
	}, [isSelecting, onToggleSelect, haptic]);

	return (
		<div
			className={`card bg-base-100 shadow-md p-4 flex flex-col items-center gap-3 relative select-none touch-manipulation ${
				isSelecting && isSelected ? 'ring ring-primary ring-offset-2 ring-offset-base-100' : ''
			}`}
			onPointerDown={handlePointerDown}
			onPointerUp={handlePointerUp}
			onPointerCancel={handlePointerUp}
			onPointerLeave={handlePointerUp}
			onClick={handleCardClick}
			role={isSelecting ? 'button' : undefined}
			tabIndex={isSelecting ? 0 : undefined}
			onContextMenu={(e) => e.preventDefault()}
		>
			<button
				type='button'
				className={`absolute top-3 left-3 z-10 ${
					isSelecting ? 'transition-opacity duration-200 opacity-100' : 'hidden'
				}`}
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					haptic(8);
					onToggleSelect();
				}}
				aria-label={isSelected ? 'Deselect QR' : 'Select QR'}
				aria-hidden={!isSelecting}
			>
				<input
					type='checkbox'
					className='checkbox checkbox-primary'
					checked={isSelected}
					readOnly
				/>
			</button>
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
					{!isSelecting ? (
						<div className='w-full flex justify-end'>
							<QrCardActions
								onEdit={onStartEdit}
								onDelete={onDelete}
								onVisit={onVisit}
								onCopy={onCopy}
								onDownloadPng={onDownloadPng}
								onDownloadJpg={onDownloadJpg}
								onPrint={onPrint}
								onShare={onShare}
								onSelect={onEnterSelectMode}
								createdAt={qr.createdAt}
							/>
						</div>
					) : null}

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
