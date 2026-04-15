'use client';

import { useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Camera, Loader2, X } from 'lucide-react';
import { dispatchAvatarUpdated } from '@/lib/avatar-events';
import { UserAvatar } from '@/components/profile/UserAvatar';

const ACCEPTED_IMAGE_TYPES = new Set([
	'image/jpeg',
	'image/png',
	'image/webp',
	'image/gif',
]);
const MAX_AVATAR_BYTES = 4 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES_LABEL = 'JPG, PNG, WebP or GIF';

type ProfileAvatarUploaderProps = {
	readonly initialAvatarUrl?: string | null;
	readonly initials: string;
	readonly displayName: string;
};

type AvatarResponse = {
	avatarUrl: string | null;
	error?: string;
};

type Feedback = {
	type: 'success' | 'error';
	message: string;
};

async function readAvatarResponse(res: Response): Promise<AvatarResponse> {
	try {
		return (await res.json()) as AvatarResponse;
	} catch {
		return {
			avatarUrl: null,
			error: res.ok ? undefined : 'Avatar request failed.',
		};
	}
}

function addCacheBuster(url: string) {
	const separator = url.includes('?') ? '&' : '?';

	return `${url}${separator}v=${Date.now()}`;
}

export function ProfileAvatarUploader({
	initialAvatarUrl,
	initials,
	displayName,
}: ProfileAvatarUploaderProps) {
	const router = useRouter();
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [avatarUrl, setAvatarUrl] = useState(initialAvatarUrl?.trim() || null);
	const [isUploading, setIsUploading] = useState(false);
	const [isRemoving, setIsRemoving] = useState(false);
	const [feedback, setFeedback] = useState<Feedback | null>(null);

	const updateAvatar = (nextAvatarUrl: string | null) => {
		setAvatarUrl(nextAvatarUrl);
		dispatchAvatarUpdated(nextAvatarUrl);
		router.refresh();
	};

	const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) return;

		setFeedback(null);

		if (!ACCEPTED_IMAGE_TYPES.has(file.type)) {
			setFeedback({
				type: 'error',
				message: `Please choose a supported image file: ${ACCEPTED_IMAGE_TYPES_LABEL}.`,
			});
			event.target.value = '';
			return;
		}

		if (file.size > MAX_AVATAR_BYTES) {
			setFeedback({
				type: 'error',
				message: 'Please choose an image smaller than 4 MB.',
			});
			event.target.value = '';
			return;
		}

		const formData = new FormData();
		formData.append('avatar', file);

		setIsUploading(true);

		try {
			const res = await fetch('/api/profile/avatar', {
				method: 'POST',
				body: formData,
			});
			const data = await readAvatarResponse(res);

			if (!res.ok || !data.avatarUrl) {
				throw new Error(data.error || 'Could not upload avatar.');
			}

			const displayUrl = addCacheBuster(data.avatarUrl);
			updateAvatar(displayUrl);
			setFeedback({
				type: 'success',
				message: avatarUrl ? 'Avatar replaced.' : 'Avatar uploaded.',
			});
		} catch (error) {
			setFeedback({
				type: 'error',
				message:
					error instanceof Error ? error.message : 'Could not upload avatar.',
			});
		} finally {
			setIsUploading(false);
			event.target.value = '';
		}
	};

	const handleRemove = async () => {
		setFeedback(null);
		setIsRemoving(true);

		try {
			const res = await fetch('/api/profile/avatar', {
				method: 'DELETE',
			});
			const data = await readAvatarResponse(res);

			if (!res.ok) {
				throw new Error(data.error || 'Could not remove avatar.');
			}

			updateAvatar(null);
			setFeedback({
				type: 'success',
				message: 'Avatar removed.',
			});
		} catch (error) {
			setFeedback({
				type: 'error',
				message:
					error instanceof Error ? error.message : 'Could not remove avatar.',
			});
		} finally {
			setIsRemoving(false);
		}
	};

	const busy = isUploading || isRemoving;

	return (
		<div className='space-y-2'>
			<input
				ref={fileInputRef}
				type='file'
				accept='image/jpeg,image/png,image/webp,image/gif'
				className='hidden'
				onChange={handleFileChange}
				disabled={busy}
				aria-describedby='avatar-upload-help'
			/>

			<div className='relative w-fit'>
				<button
					type='button'
					className={`group relative h-20 w-20 overflow-hidden rounded-full ring-offset-2 ring-offset-base-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
						busy ? 'cursor-wait opacity-80' : 'cursor-pointer'
					}`}
					onClick={() => fileInputRef.current?.click()}
					disabled={busy}
					aria-label={avatarUrl ? 'Replace profile photo' : 'Upload profile photo'}
					aria-describedby='avatar-upload-help'>
					<UserAvatar
						src={avatarUrl}
						initials={initials}
						alt={`${displayName} avatar`}
						sizeClassName='h-20 w-20'
						textClassName='text-2xl'
					/>

					<span
						className={`absolute inset-0 flex items-center justify-center bg-neutral/45 text-neutral-content transition-opacity ${
							isUploading
								? 'opacity-100'
								: 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'
						}`}>
						{isUploading ? (
							<Loader2 className='h-5 w-5 animate-spin' aria-hidden='true' />
						) : (
							<span className='flex items-center gap-1.5 text-xs font-medium'>
								<Camera className='h-4 w-4' aria-hidden='true' />
								<span className='hidden sm:inline'>
									{avatarUrl ? 'Replace' : 'Add photo'}
								</span>
							</span>
						)}
					</span>

					<span className='absolute bottom-0.5 right-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-base-300 bg-base-100 text-base-content shadow-sm transition group-hover:scale-105 group-focus-visible:scale-105'>
						<Camera className='h-3.5 w-3.5' aria-hidden='true' />
					</span>
				</button>

				{avatarUrl ? (
					<button
						type='button'
						className='absolute -right-1 -top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-base-300 bg-base-100 text-base-content shadow-sm transition hover:bg-error hover:text-error-content focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-error focus-visible:ring-offset-2 focus-visible:ring-offset-base-100 disabled:cursor-wait disabled:opacity-70'
						onClick={handleRemove}
						disabled={busy}
						aria-label='Remove profile photo'>
						{isRemoving ? (
							<Loader2 className='h-3.5 w-3.5 animate-spin' aria-hidden='true' />
						) : (
							<X className='h-3.5 w-3.5' aria-hidden='true' />
						)}
					</button>
				) : null}
			</div>

			<p id='avatar-upload-help' className='sr-only'>
				Choose a {ACCEPTED_IMAGE_TYPES_LABEL} image up to 4 MB.
			</p>

			{feedback ? (
				<p
					className={`text-xs ${
						feedback.type === 'success' ? 'text-success' : 'text-error'
					}`}
					role={feedback.type === 'error' ? 'alert' : 'status'}>
					{feedback.message}
				</p>
			) : null}
		</div>
	);
}
