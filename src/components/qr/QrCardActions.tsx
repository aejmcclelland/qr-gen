'use client';

import Link from 'next/link';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

type QrCardActionsProps = {
	qrId: string;
	onEdit: () => void;
	onDelete: () => void;
	onDownloadPng: () => void;
	onDownloadJpg: () => void;
	onPrint: () => void;
	createdAt?: string;
	showPrint?: boolean;
};

export function QrCardActions({
	qrId,
	onEdit,
	onDelete,
	onDownloadPng,
	onDownloadJpg,
	onPrint,
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
				<div className='px-2 pb-1 text-[11px] font-semibold text-primary'>
					Download
				</div>
				<DropdownMenuItem onClick={onDownloadPng}>
					Download PNG
				</DropdownMenuItem>
				<DropdownMenuItem onClick={onDownloadJpg}>
					Download JPG
				</DropdownMenuItem>
				{showPrint ? (
					<DropdownMenuItem onClick={onPrint}>Print</DropdownMenuItem>
				) : null}

				<div className='my-2 h-px bg-base-100/10' />

				<div className='px-2 pb-1 text-[11px] font-semibold text-primary'>
					Manage
				</div>
				<DropdownMenuItem asChild>
					<Link href={`/qr/${qrId}`}>Manage</Link>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={onEdit}>Edit</DropdownMenuItem>

				<div className='my-2 h-px bg-base-100/10' />

				<DropdownMenuItem className='text-error' onClick={onDelete}>
					Delete
				</DropdownMenuItem>

				{createdAt ? (
					<DropdownMenuItem
						disabled
						className='text-[10px] opacity-30 cursor-default'>
						Added: {new Date(createdAt).toLocaleDateString('en-GB')}
					</DropdownMenuItem>
				) : null}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
