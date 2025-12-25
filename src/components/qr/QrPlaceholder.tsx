// src/components/qr/AnimatedQrPlaceholder.tsx
'use client';
import Image from 'next/image';
import placeholderImg from '@/public/qr-image.svg';

export function QrPlaceholder() {
	return (
		<Image
			src={placeholderImg}
			alt='QR Placeholder'
			width={200}
			height={200}
			className='mx-auto mb-6 rounded-xl opacity-70'
		/>
	);
}
