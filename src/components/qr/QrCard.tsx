'use client';

import {
	type ChangeEvent,
	type SyntheticEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { Toast } from '@/components/ui/Toast';
import { QRCode as ClientQRCode } from '@/components/ui/shadcn-io/qr-code';
import { QrCardActions } from '@/components/qr/QrCardActions';
import { useQrExport } from '@/hooks/useQrExport';
import { Copy, ExternalLink, Share } from 'lucide-react';
import { IsPublicToggle } from '@/components/qr/IsPublicToggle';
import type { QrClient } from '@/lib/qr-mapper';
import { CategorySelect } from '@/components/qr/CategorySelect';
import { formatCategoryLabel } from '@/lib/categories';

function isIosSafari() {
	if (typeof navigator === 'undefined') return false;
	const ua = navigator.userAgent || '';
	const isIOS = /iPhone|iPad|iPod/i.test(ua);
	const isWebKit = /WebKit/i.test(ua);
	const isCriOS = /CriOS/i.test(ua);
	const isFxiOS = /FxiOS/i.test(ua);
	return isIOS && isWebKit && !isCriOS && !isFxiOS;
}

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
	readonly qr: QrClient;
	readonly isEditing: boolean;
	readonly editLabel: string;
	readonly editUrl: string;
	readonly savingEdit: boolean;
	readonly editCategory: string;
	readonly isSelecting: boolean;
	readonly isSelected: boolean;
	readonly onToggleSelect: () => void;
	readonly onEnterSelectMode: () => void;
	readonly onStartEdit: () => void;
	readonly onCancelEdit: () => void;
	readonly onChangeLabel: (value: string) => void;
	readonly onChangeUrl: (value: string) => void;
	readonly onChangeCategory: (value: string) => void;
	readonly onSubmitEdit: (e: SyntheticEvent<HTMLFormElement>) => void;
	readonly onDelete: () => void;
	readonly onTogglePublic: (id: string, next: boolean) => void | Promise<void>;
};


export function QrCard ({ 
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
	onTogglePublic,
}: QrCardProps) {
	const qrRenderRef = useRef<HTMLDivElement | null>(null);

	const [toast, setToast] = useState<{
		show: boolean;
		message: string;
		variant: 'info' | 'success' | 'warning' | 'error';
	}>({
		show: false,
		message: '',
		variant: 'info',
	});

	const showToast = useCallback(
		(
			message: string,
			variant: 'info' | 'success' | 'warning' | 'error' = 'info',
		) => {
			// Dedupe: if the same toast is already showing, don't stack/retrigger.
			if (toast.show && toast.message === message && toast.variant === variant)
				return;

			setToast({ show: true, message, variant });

			// Auto-hide after 6s
			globalThis.setTimeout(() => {
				setToast((prev) =>
					prev.message === message ? { ...prev, show: false } : prev,
				);
			}, 6000);
		},
		[toast.show, toast.message, toast.variant],
	);

	const { downloadPng, downloadJpg, print } = useQrExport({
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

	const onPrint = useCallback(() => {
		// Important: don't return a Promise from an onClick handler used by the dropdown.
		// Some UI libs don't await handlers, and Next dev can treat rejections as uncaught.
		void print().catch((err: unknown) => {
			const message =
				err instanceof Error ? err.message : 'Print failed. Please try again.';
			console.warn('[print]', message);
			showToast(message, 'info');
		});
	}, [print, showToast]);

	const onQuickOpen = useCallback(
		(e: React.MouseEvent) => {
			e.preventDefault();
			e.stopPropagation();
			window.open(qr.targetUrl, '_blank', 'noopener,noreferrer');
		},
		[qr.targetUrl],
	);

	const onQuickCopy = useCallback(
		async (e: React.MouseEvent) => {
			e.preventDefault();
			e.stopPropagation();
			try {
				await navigator.clipboard.writeText(qr.targetUrl);
				showToast('Destination URL copied.', 'success');
			} catch {
				showToast('Could not copy the URL. Please try again.', 'error');
			}
		},
		[qr.targetUrl, showToast],
	);

	const onQuickOpenQrPage = useCallback(
		(e: React.MouseEvent) => {
			e.preventDefault();
			e.stopPropagation();

			if (!qr.isPublic) {
				showToast(
					'This QR is private. Toggle Public to open the QR page.',
					'info',
				);
				return;
			}

			window.open(`/q/${qr.id}`, '_blank', 'noopener,noreferrer');
		},
		[qr.id, qr.isPublic, showToast],
	);

	const longPressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const longPressTriggeredRef = useRef(false);

	const lastPointerTypeRef = useRef<string | null>(null);

	const haptic = useCallback((ms = 10) => {
		// Light haptic feedback on supported devices (mostly Android).
		if (typeof navigator === 'undefined') return;
		// Prefer touch interactions.
		if (lastPointerTypeRef.current && lastPointerTypeRef.current !== 'touch')
			return;
		if (typeof (navigator as any).vibrate === 'function') {
			(navigator as any).vibrate(ms);
		}
	}, []);

	const clearLongPress = useCallback(() => {
		if (longPressTimerRef.current) {
			globalThis.clearTimeout(longPressTimerRef.current);
			longPressTimerRef.current = null;
		}
	}, []);

	useEffect(() => {
		return () => {
			clearLongPress();
		};
	}, [clearLongPress]);

	const handlePointerDown = useCallback(
		(e: React.PointerEvent) => {
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

			longPressTimerRef.current = globalThis.setTimeout(() => {
				longPressTriggeredRef.current = true;
				haptic(12);
				onEnterSelectMode();
			}, 520);
		},
		[clearLongPress, isEditing, isSelecting, onEnterSelectMode, haptic],
	);

	const handlePointerUp = useCallback(() => {
		clearLongPress();
	}, [clearLongPress]);

	return (
		<div
			data-testid='qr-card'
			className={`card bg-base-100 shadow-md p-4 flex w-full min-w-0 max-w-full flex-col items-center gap-3 overflow-hidden relative select-none touch-manipulation ${
				isSelecting && isSelected
					? 'ring ring-primary ring-offset-2 ring-offset-base-100'
					: ''
			}`}>
			<Toast
				show={toast.show}
				message={toast.message}
				variant={toast.variant}
				onClose={() => setToast((prev) => ({ ...prev, show: false }))}
			/>

			{!isSelecting && !isEditing ? (
				<button
					type='button'
					className='absolute inset-0 z-10'
					onPointerDown={handlePointerDown}
					onPointerUp={handlePointerUp}
					onPointerCancel={handlePointerUp}
					onPointerLeave={handlePointerUp}
					onContextMenu={(e) => e.preventDefault()}
					aria-label='Hold to select QR'
				/>
			) : null}

			{isSelecting && !isEditing ? (
				<button
					type='button'
					className='absolute inset-0 z-20'
					onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();
						haptic(8);
						onToggleSelect();
					}}
					aria-label={isSelected ? 'Deselect QR' : 'Select QR'}
					aria-pressed={isSelected}
				/>
			) : null}

			<button
				type='button'
				className={`absolute top-3 left-3 z-30 ${
					isSelecting ? 'transition-opacity duration-200 opacity-100' : 'hidden'
				}`}
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					haptic(8);
					onToggleSelect();
				}}
				aria-label={isSelected ? 'Deselect QR' : 'Select QR'}
				aria-hidden={!isSelecting}>
				<input
					type='checkbox'
					className='checkbox checkbox-primary pointer-events-none'
					checked={isSelected}
					readOnly
				/>
			</button>

			<div className='pointer-events-none relative z-20 p-2 bg-base-200 rounded-xl max-w-full' ref={qrRenderRef}>
				<ClientQRCode
					data={qr.targetUrl}
					className='size-36 max-w-full rounded bg-white p-3 shadow'
				/>
			</div>

			{isEditing ? (
				<form onSubmit={onSubmitEdit} className='relative z-30 w-full flex flex-col gap-2'>
					<div className='form-control w-full'>
						<label className='label' htmlFor={`edit-label-${qr.id}`}>
							<span className='label-text'>Label</span>
						</label>
						<input
							id={`edit-label-${qr.id}`}
							type='text'
							className='input input-bordered input-sm w-full'
							value={editLabel}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								onChangeLabel(e.target.value)
							}
						/>
					</div>

					<div className='form-control w-full'>
						<label className='label' id={`edit-category-label-${qr.id}`}>
							<span className='label-text'>Category</span>
						</label>
						<CategorySelect
							value={editCategory}
							onChange={onChangeCategory}
							size='sm'
							ariaLabelledBy={`edit-category-label-${qr.id}`}
							showSuggestedDefaults={false}
							triggerClassName='select select-bordered select-sm w-full'
						/>
					</div>

					<div className='form-control w-full'>
						<label className='label' htmlFor={`edit-url-${qr.id}`}>
							<span className='label-text'>Target URL</span>
						</label>
						<input
							id={`edit-url-${qr.id}`}
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
					{isSelecting ? null : (
						<div className='relative z-30 flex w-full flex-wrap items-center justify-end gap-1'>
							<button
								type='button'
								className='btn btn-ghost btn-xs btn-circle'
								onClick={onQuickOpen}
								aria-label='Open destination'>
								<ExternalLink className='h-4 w-4' />
							</button>

							<button
								type='button'
								className='btn btn-ghost btn-xs btn-circle'
								onClick={onQuickCopy}
								aria-label='Copy destination URL'>
								<Copy className='h-4 w-4' />
							</button>

							<button
								type='button'
								className='btn btn-ghost btn-xs btn-circle'
								onClick={onQuickOpenQrPage}
								aria-label='Open QR page'>
								<Share className='h-4 w-4' />
							</button>

							<QrCardActions
								onEdit={onStartEdit}
								onDelete={onDelete}
								onDownloadPng={onDownloadPng}
								onDownloadJpg={onDownloadJpg}
								onPrint={onPrint}
								createdAt={qr.createdAt}
								showPrint={!isIosSafari()}
							/>
						</div>
					)}
					<div className='relative z-30 mt-2 flex w-full items-start'>
						<IsPublicToggle
							isPublic={qr.isPublic ?? false}
							onToggle={(next: boolean) => onTogglePublic(qr.id, next)}
							disabled={isSelecting || isEditing || savingEdit}
							id={`is-public-toggle-${qr.id}`}
						/>
					</div>
					<div className='pointer-events-none relative z-20 w-full max-w-full min-w-0 overflow-hidden text-center'>
						<p
							className='block min-h-5 min-w-0 max-w-full overflow-hidden text-sm font-medium wrap-anywhere'
							aria-hidden={!qr.label}>
							{qr.label ?? '\u00A0'}
						</p>
						<p
							className='mt-1 mb-1 w-full min-w-0 overflow-hidden text-xs text-base-content/60 wrap-anywhere'
							title={qr.targetUrl}>
							{qr.targetUrl}
						</p>
						<div className='mt-2 flex w-full min-w-0 max-w-full flex-col items-center gap-1 overflow-hidden sm:flex-row sm:items-center'>
							<span
								className={`badge badge-soft max-w-full overflow-hidden text-ellipsis whitespace-nowrap sm:min-w-0 sm:flex-1 ${
									CATEGORY_BADGE_CLASSES[qr.category] ?? 'badge-outline'
								}`}>
								{formatCategoryLabel(qr.category)}
							</span>

							<span className='shrink-0 text-[10px] text-base-content/40 sm:ml-auto'>
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
