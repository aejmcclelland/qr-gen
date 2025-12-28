'use client';

type SelectionToolbarProps = {
	count: number;
	isDeleting?: boolean;
	onCancel: () => void;
	onDelete: () => void;
};

export default function SelectionToolbar({
	count,
	isDeleting = false,
	onCancel,
	onDelete,
}: SelectionToolbarProps) {
	return (
		<div className='fixed inset-x-0 bottom-0 z-40 px-3 pb-3'>
			<div className='mx-auto max-w-3xl'>
				<div className='rounded-2xl bg-base-100/95 backdrop-blur shadow-xl border border-base-300 p-3'>
					<div className='flex items-center justify-between gap-3'>
						<div className='flex items-center gap-2'>
							<span className='badge badge-primary badge-soft'>
								{count}
							</span>
							<span className='text-sm font-medium'>
								selected
							</span>
						</div>

						<div className='flex items-center gap-2'>
							<button
								type='button'
								className='btn btn-ghost btn-sm'
								onClick={onCancel}
								disabled={isDeleting}>
								Cancel
							</button>

							<button
								type='button'
								className='btn btn-error btn-sm'
								onClick={onDelete}
								disabled={isDeleting || count === 0}>
								{isDeleting ? 'Deleting…' : `Delete (${count})`}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
