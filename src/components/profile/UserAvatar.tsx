'use client';

import { useState } from 'react';

type UserAvatarProps = {
	readonly src?: string | null;
	readonly initials: string;
	readonly alt: string;
	readonly sizeClassName?: string;
	readonly textClassName?: string;
};

export function UserAvatar({
	src,
	initials,
	alt,
	sizeClassName = 'h-16 w-16',
	textClassName = 'text-xl',
}: UserAvatarProps) {
	const avatarSrc = src?.trim() || null;
	const [imageStatus, setImageStatus] = useState({
		src: avatarSrc,
		failed: false,
	});

	if (imageStatus.src !== avatarSrc) {
		setImageStatus({ src: avatarSrc, failed: false });
	}

	const imageFailed = imageStatus.src === avatarSrc && imageStatus.failed;

	return (
		<div
			className={`${sizeClassName} overflow-hidden rounded-full bg-primary text-primary-content`}>
			{avatarSrc && !imageFailed ? (
				<img
					src={avatarSrc}
					alt={alt}
					className='h-full w-full object-cover'
					onError={() => setImageStatus({ src: avatarSrc, failed: true })}
				/>
			) : (
				<div
					className={`flex h-full w-full items-center justify-center font-semibold ${textClassName}`}>
					{initials}
				</div>
			)}
		</div>
	);
}
