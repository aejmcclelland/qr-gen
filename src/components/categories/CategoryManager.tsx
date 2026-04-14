'use client';

import { useState, type SyntheticEvent } from 'react';
import { Toast } from '@/components/ui/Toast';
import { Trash2 } from 'lucide-react';
import {
	MAX_CATEGORY_NAME_LENGTH,
	sortUserCategories,
	type UserCategory,
} from '@/lib/categories';

type CategoryManagerProps = {
	initialCategories: UserCategory[];
};

type ToastState = {
	show: boolean;
	message: string;
	variant: 'info' | 'success' | 'error' | 'warning';
};

async function readApiError(res: Response) {
	try {
		const data = await res.json();
		if (typeof data?.error === 'string') return data.error;
		if (typeof data?.message === 'string') return data.message;
	} catch {
		// Fall through to the status-based message.
	}

	return `Request failed (${res.status})`;
}

export function CategoryManager({ initialCategories }: CategoryManagerProps) {
	const [categories, setCategories] = useState<UserCategory[]>(() =>
		sortUserCategories(initialCategories),
	);
	const [newName, setNewName] = useState('');
	const [editingId, setEditingId] = useState<string | null>(null);
	const [editingName, setEditingName] = useState('');
	const [saving, setSaving] = useState(false);
	const [updatingId, setUpdatingId] = useState<string | null>(null);
	const [deletingId, setDeletingId] = useState<string | null>(null);
	const [confirmDelete, setConfirmDelete] = useState<UserCategory | null>(null);
	const [toast, setToast] = useState<ToastState>({
		show: false,
		message: '',
		variant: 'info',
	});

	const showToast = (
		message: string,
		variant: ToastState['variant'] = 'info',
	) => {
		setToast({ show: true, message, variant });
	};

	const upsertCategory = (category: UserCategory) => {
		setCategories((prev) =>
			sortUserCategories(
				prev.some((item) => item.id === category.id)
					? prev.map((item) => (item.id === category.id ? category : item))
					: [...prev, category],
			),
		);
	};

	const handleCreate = async (event: SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSaving(true);

		try {
			const res = await fetch('/api/categories', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name: newName }),
			});

			if (!res.ok) throw new Error(await readApiError(res));

			const data = (await res.json()) as { category: UserCategory };
			upsertCategory(data.category);
			setNewName('');
			showToast('Category created.', 'success');
		} catch (error) {
			showToast(
				error instanceof Error ? error.message : 'Failed to create category.',
				'error',
			);
		} finally {
			setSaving(false);
		}
	};

	const startRename = (category: UserCategory) => {
		setEditingId(category.id);
		setEditingName(category.name);
	};

	const cancelRename = () => {
		setEditingId(null);
		setEditingName('');
	};

	const handleRename = async (
		event: SyntheticEvent<HTMLFormElement>,
		categoryId: string,
	) => {
		event.preventDefault();
		setSaving(true);

		try {
			const res = await fetch(`/api/categories/${categoryId}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name: editingName }),
			});

			if (!res.ok) throw new Error(await readApiError(res));

			const data = (await res.json()) as {
				category: UserCategory;
				updatedQrCodes: number;
			};

			upsertCategory(data.category);
			cancelRename();
			showToast(
				data.updatedQrCodes > 0
					? `Category renamed. ${data.updatedQrCodes} QR code${
							data.updatedQrCodes === 1 ? '' : 's'
					  } updated.`
					: 'Category renamed.',
				'success',
			);
		} catch (error) {
			showToast(
				error instanceof Error ? error.message : 'Failed to rename category.',
				'error',
			);
		} finally {
			setSaving(false);
		}
	};

	const handleToggleActive = async (category: UserCategory) => {
		const nextActive = !category.isActive;

		if (!nextActive && category.qrCount > 0) {
			showToast(
				category.qrCount === 1
					? 'This category is used by 1 QR code. Change that QR code before disabling it.'
					: `This category is used by ${category.qrCount} QR codes. Change those QR codes before disabling it.`,
				'warning',
			);
			return;
		}

		setUpdatingId(category.id);

		try {
			const res = await fetch(`/api/categories/${category.id}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ isActive: nextActive }),
			});

			if (!res.ok) throw new Error(await readApiError(res));

			const data = (await res.json()) as {
				category: UserCategory;
			};

			upsertCategory(data.category);
			showToast(
				nextActive
					? 'Category enabled in dropdowns.'
					: 'Category hidden from dropdowns.',
				'success',
			);
		} catch (error) {
			showToast(
				error instanceof Error
					? error.message
					: 'Failed to update category visibility.',
				'error',
			);
		} finally {
			setUpdatingId(null);
		}
	};

	const handleDeleteRequest = (category: UserCategory) => {
		if (category.isPreset) {
			showToast('Preset categories can be disabled, not deleted.', 'warning');
			return;
		}

		if (category.qrCount > 0) {
			showToast(
				category.qrCount === 1
					? 'This category is used by 1 QR code. Change that QR code before deleting it.'
					: `This category is used by ${category.qrCount} QR codes. Change those QR codes before deleting it.`,
				'warning',
			);
			return;
		}

		setConfirmDelete(category);
		showToast(
			`Are you sure you want to delete "${category.name}"? It cannot be undone.`,
			'warning',
		);
	};

	const handleConfirmDelete = async () => {
		if (!confirmDelete) return;

		setDeletingId(confirmDelete.id);

		try {
			const res = await fetch(`/api/categories/${confirmDelete.id}`, {
				method: 'DELETE',
			});

			if (!res.ok) throw new Error(await readApiError(res));

			setCategories((prev) =>
				prev.filter((item) => item.id !== confirmDelete.id),
			);
			showToast('Category deleted.', 'success');

			if (editingId === confirmDelete.id) cancelRename();
			setConfirmDelete(null);
		} catch (error) {
			showToast(
				error instanceof Error ? error.message : 'Failed to delete category.',
				'error',
			);
		} finally {
			setDeletingId(null);
		}
	};

	const closeToast = () => {
		setToast((prev) => ({ ...prev, show: false }));
		setConfirmDelete(null);
	};

	return (
		<section className='card border border-base-content/10 bg-base-100 shadow-xl'>
			<Toast
				show={toast.show}
				message={toast.message}
				variant={toast.variant}
				positionClassName='toast-top toast-center'
				autoCloseMs={confirmDelete ? 10000 : 3000}
				onClose={closeToast}
				actions={
					confirmDelete ? (
						<div className='flex gap-2'>
							<button
								type='button'
								className='btn btn-error btn-xs'
								onClick={handleConfirmDelete}
								disabled={deletingId === confirmDelete.id}>
								{deletingId === confirmDelete.id
									? 'Deleting...'
									: 'Delete permanently'}
							</button>
							<button
								type='button'
								className='btn btn-ghost btn-xs'
								onClick={closeToast}
								disabled={deletingId === confirmDelete.id}>
								Cancel
							</button>
						</div>
					) : null
				}
			/>

			<div className='card-body gap-6'>
				<div className='space-y-2'>
					<h1 className='text-3xl font-bold tracking-tight'>Categories</h1>
					<p className='max-w-2xl text-sm leading-6 text-base-content/65'>
						Enable the categories you want in QR dropdowns. Categories already
						used by QR codes must be changed before they can be disabled or
						deleted.
					</p>
				</div>

				<form
					onSubmit={handleCreate}
					className='flex flex-col gap-3 sm:flex-row sm:items-end'>
					<div className='form-control w-full'>
						<label className='label' htmlFor='new-category-name'>
							<span className='label-text'>New category</span>
						</label>
						<input
							id='new-category-name'
							type='text'
							className='input input-bordered w-full'
							value={newName}
							onChange={(event) => setNewName(event.target.value)}
							placeholder='Client work'
							maxLength={MAX_CATEGORY_NAME_LENGTH}
						/>
					</div>

					<button
						type='submit'
						className='btn btn-primary sm:w-auto'
						disabled={saving}>
						{saving ? 'Saving...' : 'Add category'}
					</button>
				</form>

				<div className='divider my-0' />

				{categories.length === 0 ? (
					<div className='rounded-2xl border border-dashed border-base-content/20 bg-base-200/40 p-6'>
						<h2 className='text-lg font-semibold'>No categories yet</h2>
						<p className='mt-2 text-sm leading-6 text-base-content/65'>
							Add a category to build the dropdown list you want to use.
						</p>
					</div>
				) : (
					<ul className='space-y-3'>
						{categories.map((category) => {
							const isEditing = editingId === category.id;

							return (
								<li
									key={category.id}
									className='rounded-2xl border border-base-content/10 bg-base-200/50 p-4'>
									{isEditing ? (
										<form
											onSubmit={(event) =>
												handleRename(event, category.id)
											}
											className='flex flex-col gap-3 sm:flex-row sm:items-center'>
											<input
												type='text'
												className='input input-bordered input-sm w-full'
												value={editingName}
												onChange={(event) =>
													setEditingName(event.target.value)
												}
												maxLength={MAX_CATEGORY_NAME_LENGTH}
												aria-label={`Rename ${category.name}`}
											/>
											<div className='flex gap-2 sm:shrink-0'>
												<button
													type='button'
													className='btn btn-ghost btn-sm'
													onClick={cancelRename}
													disabled={saving}>
													Cancel
												</button>
												<button
													type='submit'
													className='btn btn-primary btn-sm'
													disabled={saving}>
													{saving ? 'Saving...' : 'Save'}
												</button>
											</div>
										</form>
									) : (
										<div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
											<div className='min-w-0'>
												<div className='flex flex-wrap items-center gap-2'>
													<p className='truncate text-base font-semibold'>
														{category.name}
													</p>
													<span className='badge badge-sm badge-outline'>
														{category.isPreset ? 'Preset' : 'Custom'}
													</span>
													{category.isActive ? null : (
														<span className='badge badge-sm badge-ghost'>
															Hidden
														</span>
													)}
												</div>
												<p className='mt-1 text-xs text-base-content/55'>
													{category.qrCount === 1
														? 'Used by 1 QR code'
														: `Used by ${category.qrCount} QR codes`}
												</p>
											</div>
											<div className='flex flex-wrap items-center gap-2 sm:shrink-0'>
												<label className='flex items-center gap-2 text-sm'>
													<span>Enabled</span>
													<input
														type='checkbox'
														className='toggle toggle-primary toggle-sm'
														checked={category.isActive}
														onChange={() => handleToggleActive(category)}
														disabled={updatingId === category.id}
													/>
												</label>
												{category.isPreset ? null : (
													<>
														<button
															type='button'
															className='btn btn-outline btn-sm'
															onClick={() => startRename(category)}
															disabled={
																deletingId === category.id ||
																updatingId === category.id
															}>
															Rename
														</button>
														<button
															type='button'
															className='btn btn-error btn-outline btn-sm btn-square'
															onClick={() => handleDeleteRequest(category)}
															disabled={
																deletingId === category.id ||
																updatingId === category.id
															}
															aria-label={`Delete ${category.name}`}>
															<Trash2 className='h-4 w-4' />
														</button>
													</>
												)}
											</div>
										</div>
									)}
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</section>
	);
}
