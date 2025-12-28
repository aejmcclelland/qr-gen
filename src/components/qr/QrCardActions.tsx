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
	onPrint: () => void;
	createdAt?: string;
};

export function QrCardActions({
	onEdit,
	onDelete,
	onVisit,
	onCopy,
	onDownloadPng,
	onPrint,
	createdAt,
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
				<DropdownMenuItem onClick={onDownloadPng}>Download PNG</DropdownMenuItem>
				<DropdownMenuItem onClick={onPrint}>Print</DropdownMenuItem>
				<DropdownMenuItem onClick={onVisit}>Visit link</DropdownMenuItem>
				<DropdownMenuItem onClick={onCopy}>Copy URL</DropdownMenuItem>
				<DropdownMenuItem onClick={onEdit}>Edit</DropdownMenuItem>
				<DropdownMenuItem className='text-error' onClick={onDelete}>
					Delete
				</DropdownMenuItem>
				{createdAt && (
					<DropdownMenuItem
						disabled
						className='text-[10px] opacity-20 cursor-default'>
						Added: {new Date(createdAt).toLocaleDateString()}
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
