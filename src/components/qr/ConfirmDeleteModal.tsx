'use client';

type ConfirmDeleteModalProps = {
	open: boolean;
	count: number;
	isDeleting?: boolean;
	onConfirm: () => void;
	onCancel: () => void;
};

export default function ConfirmDeleteModal({
	open,
	count,
	isDeleting = false,
	onConfirm,
	onCancel,
}: ConfirmDeleteModalProps) {
	if (!open) return null;

	const title = count === 1 ? 'Delete 1 QR code?' : `Delete ${count} QR codes?`;
	const body =
		count === 1
			? 'This will permanently remove the selected QR code from your saved list.'
			: 'This will permanently remove the selected QR codes from your saved list.';

	return (
		<div className='modal modal-open' role='dialog' aria-modal='true'>
			<div className='modal-box'>
				<h3 className='font-bold text-lg'>{title}</h3>
				<p className='py-3 text-sm text-base-content/70'>{body}</p>

				<div className='modal-action'>
					<button
						type='button'
						className='btn btn-ghost'
						onClick={onCancel}
						disabled={isDeleting}>
						Cancel
					</button>

					<button
						type='button'
						className='btn btn-error'
						onClick={onConfirm}
						disabled={isDeleting || count === 0}>
						{isDeleting ? 'Deleting…' : 'Delete'}
					</button>
				</div>
			</div>

			{/* backdrop */}
			<button
				type='button'
				className='modal-backdrop'
				onClick={onCancel}
				aria-label='Close'
				disabled={isDeleting}
			/>
		</div>
	);
}
