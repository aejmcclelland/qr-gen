'use client';

import { type ChangeEvent, type FormEvent } from 'react';
import { QRCode as ClientQRCode } from '@/components/ui/shadcn-io/qr-code';
import { QrCardActions } from '@/components/qr/QrCardActions';

type Qr = {
	id: string;
	targetUrl: string;
	label: string | null;
	category: string;
	createdAt: string;
};

const CATEGORY_BADGE_CLASSES: Record<string, string> = {
	personal: 'badge-primary',
	work: 'badge-secondary',
	club: 'badge-accent',
	church: 'badge-info',
	other: 'badge-ghost',
	education: 'badge-success',
	event: 'badge-warning',
	marketing: 'badge-error',
	health: 'badge-primary',
	finance: 'badge-secondary',
	travel: 'badge-accent',
	entertainment: 'badge-info',
	technology: 'badge-success',
	food: 'badge-warning',
	non_profit: 'badge-error',
};

type QrCardProps = {
	qr: Qr;
	isEditing: boolean;
	editLabel: string;
	editUrl: string;
	savingEdit: boolean;
	onStartEdit: () => void;
	onCancelEdit: () => void;
	onChangeLabel: (value: string) => void;
	onChangeUrl: (value: string) => void;
	onSubmitEdit: (e: FormEvent<HTMLFormElement>) => void;
	onDelete: () => void;
	onVisit: () => void;
	onCopy: () => void;
};

export function QrCard({
	qr,
	isEditing,
	editLabel,
	editUrl,
	savingEdit,
	onStartEdit,
	onCancelEdit,
	onChangeLabel,
	onChangeUrl,
	onSubmitEdit,
	onDelete,
	onVisit,
	onCopy,
}: QrCardProps) {
	return (
		<div className='card bg-base-100 shadow-md p-4 flex flex-col items-center gap-3'>
			<div className='p-2 bg-base-200 rounded-xl'>
				<ClientQRCode
					data={qr.targetUrl}
					className='size-36 rounded bg-white p-3 shadow'
				/>
			</div>

			{isEditing ? (
				<form onSubmit={onSubmitEdit} className='w-full flex flex-col gap-2'>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Label</span>
						</label>
						<input
							type='text'
							className='input input-bordered input-sm w-full'
							value={editLabel}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								onChangeLabel(e.target.value)
							}
						/>
					</div>

					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Target URL</span>
						</label>
						<input
							type='url'
							className='input input-bordered input-sm w-full'
							value={editUrl}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								onChangeUrl(e.target.value)
							}
							required
						/>
					</div>

					<div className='flex gap-2 justify-end mt-2'>
						<button
							type='button'
							className='btn btn-ghost btn-xs'
							onClick={onCancelEdit}
							disabled={savingEdit}>
							Cancel
						</button>
						<button
							type='submit'
							className='btn btn-primary btn-xs'
							disabled={savingEdit}>
							{savingEdit ? 'Saving…' : 'Save'}
						</button>
					</div>
				</form>
			) : (
				<>
					<div className='w-full flex justify-end'>
						<QrCardActions
							onEdit={onStartEdit}
							onDelete={onDelete}
							onVisit={onVisit}
							onCopy={onCopy}
							createdAt={qr.createdAt}
						/>
					</div>

					<div className='text-center w-full'>
						{qr.label && (
							<p className='font-medium text-sm wrap-break-word'>{qr.label}</p>
						)}
						<p
							className='text-xs text-base-content/60 truncate w-full mt-1 mb-1'
							title={qr.targetUrl}>
							{qr.targetUrl}
						</p>
						<div className='flex items-center justify-between mt-2 w-full'>
							<span
								className={`badge badge-soft ${
									CATEGORY_BADGE_CLASSES[qr.category] ?? 'badge-outline'
								}`}>
								{qr.category}
							</span>

							<span className='text-[10px] text-base-content/40'>
								{new Date(qr.createdAt).toLocaleDateString('en-GB')}
							</span>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
