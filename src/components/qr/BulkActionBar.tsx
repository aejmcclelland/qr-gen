'use client';

import { useEffect, useMemo, useState } from 'react';

type BulkActionBarProps = {
	selectedCount: number;
	totalCount: number;
	isDeleting?: boolean;
	isDownloading?: boolean;
	onCancel: () => void;
	onDelete: () => void;
	onDownload?: () => void;
	onToggleSelectAll: (nextSelectAll: boolean) => void;
};

export function BulkActionBar({
	selectedCount,
	totalCount,
	isDeleting = false,
	isDownloading = false,
	onCancel,
	onDelete,
	onDownload,
	onToggleSelectAll,
}: BulkActionBarProps) {
	// Used only for a nice “slide up + fade in” after first paint.
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const t = window.setTimeout(() => setMounted(true), 0);
		return () => window.clearTimeout(t);
	}, []);

	const allSelected = useMemo(
		() => totalCount > 0 && selectedCount === totalCount,
		[selectedCount, totalCount]
	);

	const busy = isDeleting || isDownloading;

	// Always render when parent renders; only animate in/out via classes.
	return (
		<div
			className={
				'fixed left-1/2 bottom-32 z-50 -translate-x-1/2 pointer-events-none ' +
				'transition-all duration-200 ease-out ' +
				(mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')
			}
			aria-live='polite'>
			<div className='pointer-events-auto'>
				<div className='card bg-base-100 shadow-xl border border-base-200'>
					<div className='card-body py-3 px-4'>
						<div className='flex items-center gap-3 flex-wrap'>
							{/* Status */}
							<span className='text-sm font-medium whitespace-nowrap'>
								{selectedCount > 0
									? `${selectedCount} selected`
									: 'Select QR codes'}
							</span>

							{/* Actions */}
							<div className='flex items-center gap-2'>
								<button
									type='button'
									className='btn btn-neutral btn-sm'
									onClick={() => onToggleSelectAll(!allSelected)}
									disabled={totalCount === 0 || busy}>
									{allSelected ? 'Deselect all' : 'Select all'}
								</button>

								{onDownload ? (
									<button
										type='button'
										className='btn btn-ghost btn-sm'
										onClick={onDownload}
										disabled={selectedCount === 0 || busy}>
										{isDownloading ? 'Downloading…' : 'Download'}
									</button>
								) : null}

								<button
									type='button'
									className='btn btn-error btn-sm'
									onClick={onDelete}
									disabled={selectedCount === 0 || busy}>
									{isDeleting ? 'Deleting…' : 'Delete'}
								</button>

								<button
									type='button'
									className='btn btn-outline btn-sm'
									onClick={onCancel}
									disabled={busy}>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
