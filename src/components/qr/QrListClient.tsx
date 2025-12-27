'use client';

import { useState, type FormEvent } from 'react';
import { Toast } from '@/components/ui/Toast';
import { QrCard } from '@/components/qr/QrCard';

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

	const handleDelete = async (id: string) => {
		if (!confirm('Delete this QR code?')) return;

		setDeletingId(id);
		try {
			const res = await fetch(`/api/qrs/${id}`, {
				method: 'DELETE',
			});

			if (!res.ok) throw new Error('Failed to delete');

			setQrs((prev) => prev.filter((qr) => qr.id !== id));
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
		</>
	);
}
