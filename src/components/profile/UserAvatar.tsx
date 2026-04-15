'use client';

import { useEffect, useState } from 'react';

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
	const [imageFailed, setImageFailed] = useState(false);

	useEffect(() => {
		setImageFailed(false);
	}, [avatarSrc]);

	return (
		<div
			className={`${sizeClassName} overflow-hidden rounded-full bg-primary text-primary-content`}>
			{avatarSrc && !imageFailed ? (
				<img
					src={avatarSrc}
					alt={alt}
					className='h-full w-full object-cover'
					onError={() => setImageFailed(true)}
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
