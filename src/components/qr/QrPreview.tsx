// src/components/qr/QrPreview.tsx
'use client';

import { QRCode } from '@/components/ui/shadcn-io/qr-code/index';

type QrPreviewProps = {
	data: string;
};

export function QrPreview({ data }: QrPreviewProps) {
	return (
		<div className='p-4 bg-base-200 rounded-xl'>
			<QRCode
				id='qr-svg'
				data={data}
				className='size-48 rounded bg-white p-4 shadow'
			/>
		</div>
	);
}
