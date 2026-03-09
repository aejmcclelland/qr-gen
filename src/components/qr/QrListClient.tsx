'use client';

import { useCallback, useState, type SyntheticEvent } from 'react';
import { Toast } from '@/components/ui/Toast';
import { QrCard } from '@/components/qr/QrCard';
import ConfirmDeleteModal from '@/components/qr/ConfirmDeleteModal';
import { BulkActionBar } from '@/components/qr/BulkActionBar';
import type { QrClient } from '@/lib/qr-mapper';
import { CheckSquare } from 'lucide-react';

async function readErrorPayload(
	res: Response
): Promise<{ code?: string; message: string }> {
	const contentType = res.headers.get('content-type') || '';

	// Prefer machine-readable JSON when available
	if (contentType.includes('application/json')) {
		try {
			const data = await res.json();
			return {
				code: typeof data?.code === 'string' ? data.code : undefined,
				message:
					typeof data?.message === 'string'
						? data.message
						: typeof data?.error === 'string'
						? data.error
						: `Request failed (${res.status})`,
			};
		} catch {
			return { message: `Request failed (${res.status})` };
		}
	}

	// Fallback to text for non-JSON errors
	try {
		const text = await res.text();
		return { message: text || `Request failed (${res.status})` };
	} catch {
		return { message: `Request failed (${res.status})` };
	}
}

type Props = {
	readonly initialQrs: QrClient[];
	activeCategories: string[];
};

export default function QrListClient({  initialQrs,  activeCategories }: Props) {
	const [qrs, setQrs] = useState<QrClient[]>(initialQrs);
	const [deletingId, setDeletingId] = useState<string | null>(null);
	const [editingId, setEditingId] = useState<string | null>(null);
	const [editLabel, setEditLabel] = useState('');
	const [editUrl, setEditUrl] = useState('');
	const [editCategory, setEditCategory] = useState('');
	const [savingEdit, setSavingEdit] = useState(false);

	const [toast, setToast] = useState<{
		show: boolean;
		message: string;
		variant: 'info' | 'success' | 'error' | 'warning';
	}>({
		show: false,
		message: '',
		variant: 'info',
	});

	const [isSelecting, setIsSelecting] = useState(false);
	const [selectedIds, setSelectedIds] = useState<Set<string>>(() => new Set());
	const [isBulkDeleting, setIsBulkDeleting] = useState(false);
	const [confirmOpen, setConfirmOpen] = useState(false);
	const [isBulkDownloading, setIsBulkDownloading] = useState(false);

	const handleDelete = async (id: string) => {
		if (!confirm('Delete this QR code?')) return;

		setDeletingId(id);
		try {
			const res = await fetch(`/api/qrs/${id}`, {
				method: 'DELETE',
			});

			if (!res.ok) throw new Error('Failed to delete');

			setQrs((prev) => prev.filter((qr) => qr.id !== id));

			// If this QR was selected, remove it from the selection.
			setSelectedIds((prev) => {
				if (!prev.has(id)) return prev;
				const next = new Set(prev);
				next.delete(id);

				// If nothing is selected after deletion, exit selection mode.
				if (next.size === 0) {
					setIsSelecting(false);
				}

				return next;
			});

			setToast({
				show: true,
				message: 'QR code deleted.',
				variant: 'success',
			});
		} catch (err) {
			console.error(err);
			setToast({
				show: true,
				message: 'Failed to delete QR code.',
				variant: 'error',
			});
		} finally {
			setDeletingId(null);
		}
	};
	const startEdit = (qr: QrClient) => {
		setEditingId(qr.id);
		setEditLabel(qr.label ?? '');
		setEditCategory(qr.category);
		setEditUrl(qr.targetUrl);
	};
	const cancelEdit = () => {
		setEditingId(null);
		setEditLabel('');
		setEditCategory('');
		setEditUrl('');
	};

	const startSelecting = useCallback((initialId?: string) => {
		setIsSelecting(true);
		if (initialId) {
			setSelectedIds(() => new Set([initialId]));
		}
	}, []);

	const toggleSelected = useCallback((id: string) => {
		setSelectedIds((prev) => {
			const next = new Set(prev);
			if (next.has(id)) next.delete(id);
			else next.add(id);

			// If nothing is selected, exit selection mode.
			if (next.size === 0) {
				setIsSelecting(false);
			}

			return next;
		});
	}, []);

	const clearSelection = useCallback(() => {
		setIsSelecting(false);
		setSelectedIds(() => new Set());
	}, []);

	// Move visibleQrs before toggleSelectAll
	const visibleQrs =
		activeCategories.length === 0
			? qrs
			: qrs.filter((qr) => activeCategories.includes(qr.category));

	const toggleSelectAll = useCallback(
		(nextSelectAll: boolean) => {
			if (!nextSelectAll) {
				clearSelection();
				return;
			}

			// Ensure selection mode is active
			setIsSelecting(true);

			// Select all currently visible QR ids (respects active category filters)
			setSelectedIds(() => new Set(visibleQrs.map((qr) => qr.id)));
		},
		[clearSelection, visibleQrs]
	);

	const bulkDeleteSelected = useCallback(async () => {
		const ids = Array.from(selectedIds);
		if (ids.length === 0) {
			setToast({
				show: true,
				message: 'Select at least one QR to delete.',
				variant: 'warning',
			});
			return;
		}

		setIsBulkDeleting(true);
		try {
			const results = await Promise.all(
				ids.map(async (id) => {
					const res = await fetch(`/api/qrs/${id}`, { method: 'DELETE' });
					return { id, ok: res.ok };
				})
			);

			const failed = results.filter((r) => !r.ok).map((r) => r.id);
			if (failed.length > 0) {
				throw new Error(
					failed.length === 1
						? 'Failed to delete 1 QR code.'
						: `Failed to delete ${failed.length} QR codes.`
				);
			}

			setQrs((prev) => prev.filter((qr) => !selectedIds.has(qr.id)));
			setToast({
				show: true,
				message:
					ids.length === 1
						? 'QR code deleted.'
						: `${ids.length} QR codes deleted.`,
				variant: 'success',
			});

			setConfirmOpen(false);
			clearSelection();
		} catch (err) {
			console.error(err);
			setToast({
				show: true,
				message:
					err instanceof Error
						? err.message
						: 'Failed to delete selected QR codes.',
				variant: 'error',
			});
		} finally {
			setIsBulkDeleting(false);
		}
	}, [clearSelection, selectedIds]);

	const bulkDownloadSelected = useCallback(async () => {
		const ids = Array.from(selectedIds);

		// Client-side guard: this endpoint is ZIP-only (2+)
		if (ids.length < 2) {
			setToast({
				show: true,
				message:
					ids.length === 0
						? 'Select at least two QR codes to download as a ZIP.'
						: 'To download one QR, use the Download option on the QR card menu.',
				variant: 'info',
			});
			return;
		}

		setIsBulkDownloading(true);

		try {
			const res = await fetch('/api/qrs/download', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ ids }),
			});

			if (!res.ok) {
				const err = await readErrorPayload(res);

				// Machine-readable handling
				if (err.code === 'BULK_MIN_2') {
					setToast({
						show: true,
						message: err.message,
						variant: 'info',
					});
					return;
				}

				throw new Error(err.message || 'Download failed');
			}

			// Success path: ONLY read the body as a blob (do not call res.json() first)
			const blob = await res.blob();
			const url = URL.createObjectURL(blob);

			const a = document.createElement('a');
			a.href = url;
			a.download = 'qrpilot-qrs.zip';

			document.body.appendChild(a);
			a.click();
			a.remove();

			setTimeout(() => URL.revokeObjectURL(url), 2000);

			setToast({
				show: true,
				message: `${ids.length} QRs downloaded.`,
				variant: 'success',
			});
		} catch (err) {
			console.error(err);
			setToast({
				show: true,
				message:
					err instanceof Error ? err.message : 'Failed to download QR codes.',
				variant: 'error',
			});
		} finally {
			setIsBulkDownloading(false);
		}
	}, [selectedIds]);

	const handleEditSubmit = async (
		e: SyntheticEvent<HTMLFormElement>,
		id: string
	) => {
		e.preventDefault();
		setSavingEdit(true);

		try {
			const res = await fetch(`/api/qrs/${id}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					label: editLabel || null,
					targetUrl: editUrl,
					category: editCategory,
				}),
			});

			if (!res.ok) throw new Error('Failed to update');

				const updated = (await res.json()) as QrClient;

			setQrs((prev) =>
				prev.map((qr) => (qr.id === id ? { ...qr, ...updated } : qr))
			);

			setToast({
				show: true,
				message: 'QR code updated.',
				variant: 'success',
			});

			cancelEdit();
		} catch (err) {
			console.error('Error updating QR', err);
			setToast({
				show: true,
				message: 'Failed to update QR code.',
				variant: 'error',
			});
		} finally {
			setSavingEdit(false);
		}
	};
	if (visibleQrs.length === 0) {
		return (
			<div className='card bg-base-100 shadow-xl p-6'>
				<h2 className='card-title text-xl mb-2'>Your QR Codes</h2>
				<p className='text-sm text-base-content/70'>
					You haven&apos;t saved any QR codes yet.
				</p>
			</div>
		);
	}

	const togglePublic = async (id: string, next: boolean) => {
		// optimistic update
		setQrs((prev) =>
			prev.map((q) => (q.id === id ? { ...q, isPublic: next } : q))
		);

		try {
			const res = await fetch(`/api/qrs/${id}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ isPublic: next }),
			});

			if (!res.ok) throw new Error('Failed to update visibility');

			setToast({
				show: true,
				message: next ? 'Public QR page enabled.' : 'Public QR page disabled.',
				variant: 'success',
			});
		} catch {
			// rollback if failed
			setQrs((prev) =>
				prev.map((q) => (q.id === id ? { ...q, isPublic: !next } : q))
			);

			setToast({
				show: true,
				message: 'Could not update visibility. Please try again.',
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
				onClose={() =>
					setToast((prev) => ({
						...prev,
						show: false,
					}))
				}
			/>
			<div className='flex items-center justify-between mb-3'>
				<h2 className='text-lg font-semibold'>Your QR Codes</h2>
				{!isSelecting ? (
					<button
						type='button'
						className='btn btn-neutral btn-sm rounded-full gap-2'
						onClick={() => startSelecting()}>
						<CheckSquare className='w-4 h-4 text-primary' />
						Select
					</button>
				) : null}
			</div>

			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 pb-24 min-w-0'>
				{visibleQrs.map((qr) => (
					<div key={qr.id} className='min-w-0 w-full'>
						<QrCard
							qr={qr}
							isEditing={editingId === qr.id}
							editLabel={editLabel}
							editUrl={editUrl}
							editCategory={editCategory}
							savingEdit={savingEdit}
							isSelecting={isSelecting}
							isSelected={selectedIds.has(qr.id)}
							onToggleSelect={() => toggleSelected(qr.id)}
							onEnterSelectMode={() => startSelecting(qr.id)}
							onStartEdit={() => startEdit(qr)}
							onTogglePublic={togglePublic}
							onCancelEdit={cancelEdit}
							onChangeLabel={setEditLabel}
							onChangeUrl={setEditUrl}
							onChangeCategory={setEditCategory}
							onSubmitEdit={(e: SyntheticEvent<HTMLFormElement>) =>
								handleEditSubmit(e, qr.id)
							}
							onDelete={() => handleDelete(qr.id)}
						/>
					</div>
				))}
			</div>
			<ConfirmDeleteModal
				open={confirmOpen}
				count={selectedIds.size}
				isDeleting={isBulkDeleting}
				onCancel={() => setConfirmOpen(false)}
				onConfirm={bulkDeleteSelected}
			/>
			{isSelecting ? (
				<BulkActionBar
					selectedCount={selectedIds.size}
					isDeleting={isBulkDeleting}
					onCancel={clearSelection}
					onToggleSelectAll={toggleSelectAll}
					totalCount={visibleQrs.length}
					isDownloading={isBulkDownloading}
					onDownload={bulkDownloadSelected}
					onDelete={() => {
						if (selectedIds.size === 0) {
							setToast({
								show: true,
								message: 'Select at least one QR to delete.',
								variant: 'warning',
							});
							return;
						}
						setConfirmOpen(true);
					}}
					// Optional: wire later
					// onDownload={() => ...}
				/>
			) : null}
		</>
	);
}
