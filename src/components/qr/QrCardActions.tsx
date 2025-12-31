'use client';

import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

type QrCardActionsProps = {
	onEdit: () => void;
	onDelete: () => void;
	onVisit: () => void;
	onCopy: () => void;
	onDownloadPng: () => void;
	onDownloadJpg: () => void;
	onPrint: () => void;
	// Public share page (/q/[id])
	onOpenPublic?: () => void;
	onCopyPublic?: () => void;
	createdAt?: string;
	showPrint?: boolean;
};

export function QrCardActions({
	onEdit,
	onDelete,
	onVisit,
	onCopy,
	onDownloadPng,
	onDownloadJpg,
	onPrint,
	onOpenPublic,
	onCopyPublic,
	createdAt,
	showPrint = true,
}: QrCardActionsProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button
					type='button'
					className='btn btn-ghost btn-xs'
					aria-label='More actions'>
					⋮
				</button>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				align='end'
				className='w-44 rounded-md bg-neutral text-neutral-content shadow-lg p-2'>
				<h3 className='text-primary'>Open</h3>
				<DropdownMenuItem onClick={onVisit}>Open destination</DropdownMenuItem>
				{onOpenPublic ? (
					<DropdownMenuItem onClick={onOpenPublic}>Open QR page</DropdownMenuItem>
				) : null}

				<div className='dropdown-divider' />
				<h3 className='text-primary'>Copy</h3>
				<DropdownMenuItem onClick={onCopy}>Copy destination URL</DropdownMenuItem>
				{onCopyPublic ? (
					<DropdownMenuItem onClick={onCopyPublic}>Copy QR page link</DropdownMenuItem>
				) : null}

				<div className='dropdown-divider' />
				<h3 className='text-primary'>Download</h3>
				<DropdownMenuItem onClick={onDownloadPng}>Download PNG</DropdownMenuItem>
				<DropdownMenuItem onClick={onDownloadJpg}>Download JPG</DropdownMenuItem>
				{showPrint && <DropdownMenuItem onClick={onPrint}>Print</DropdownMenuItem>}

				<div className='dropdown-divider' />
				<h3 className='text-primary'>Manage</h3>
				<DropdownMenuItem onClick={onEdit}>Edit</DropdownMenuItem>

				<div className='dropdown-divider' />
				<DropdownMenuItem className='text-error' onClick={onDelete}>
					Delete
				</DropdownMenuItem>
				{createdAt && (
					<DropdownMenuItem
						disabled
						className='text-[10px] opacity-20 cursor-default'>
						Added: {new Date(createdAt).toLocaleDateString('en-GB')}
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
