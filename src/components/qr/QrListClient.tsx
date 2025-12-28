'use client';

import { useCallback, useState, type FormEvent } from 'react';
import { Toast } from '@/components/ui/Toast';
import { QrCard } from '@/components/qr/QrCard';

import SelectionToolbar from '@/components/qr/SelectionToolbar';
import ConfirmDeleteModal from '@/components/qr/ConfirmDeleteModal';

type Qr = {
	id: string;
	targetUrl: string;
	label: string | null;
	category: string;
	createdAt: string;
};

type Props = {
	initialQrs: Qr[];
	activeCategories: string[];
};

export default function QrListClient({ initialQrs, activeCategories }: Props) {
	const [qrs, setQrs] = useState<Qr[]>(initialQrs);
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
	const startEdit = (qr: Qr) => {
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
				message: ids.length === 1 ? 'QR code deleted.' : `${ids.length} QR codes deleted.`,
				variant: 'success',
			});

			setConfirmOpen(false);
			clearSelection();
		} catch (err) {
			console.error(err);
			setToast({
				show: true,
				message: err instanceof Error ? err.message : 'Failed to delete selected QR codes.',
				variant: 'error',
			});
		} finally {
			setIsBulkDeleting(false);
		}
	}, [clearSelection, selectedIds]);

	const visibleQrs =
		activeCategories.length === 0
			? qrs
			: qrs.filter((qr) => activeCategories.includes(qr.category));

	const handleEditSubmit = async (
		e: FormEvent<HTMLFormElement>,
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

			const updated = (await res.json()) as Qr;

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

			<div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
				{visibleQrs.map((qr) => (
					<QrCard
						key={qr.id}
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
						onCancelEdit={cancelEdit}
						onChangeLabel={setEditLabel}
						onChangeUrl={setEditUrl}
						onChangeCategory={setEditCategory}
						onSubmitEdit={(e) => handleEditSubmit(e, qr.id)}
						onDelete={() => handleDelete(qr.id)}
						onVisit={() => {
							window.open(qr.targetUrl, '_blank', 'noopener,noreferrer');
						}}
						onCopy={() => {
							navigator.clipboard.writeText(qr.targetUrl);
							setToast({
								show: true,
								message: 'URL copied to clipboard.',
								variant: 'success',
							});
						}}
					/>
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
				<SelectionToolbar
					count={selectedIds.size}
					isDeleting={isBulkDeleting}
					onCancel={clearSelection}
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
				/>
			) : null}
		</>
	);
}
