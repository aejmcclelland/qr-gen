// src/app/qr/new/page.tsx

import { QrGeneratorCard } from '@/components/qr/QrGeneratorCard';

export default function NewQrPage() {
	return (
		<div className='min-h-screen flex justify-center px-4 py-10'>
			<div className='w-full max-w-xl space-y-6'>
				<h1 className='text-3xl font-bold text-center'>
					Generate a New QR Code
				</h1>
				<p className='text-center text-base-content/70'>
					Paste a link below to instantly preview your QR code.
				</p>

				<div className='flex justify-center pb-26'>
					<QrGeneratorCard />
				</div>
			</div>
		</div>
	);
}
