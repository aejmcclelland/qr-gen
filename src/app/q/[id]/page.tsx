// src/app/q/[id]/page.tsx
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { QRCode } from '@/components/ui/shadcn-io/qr-code';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/dist/client/link';

export default async function PublicQrPage({
	params,
}: {
	params: { id: string };
}) {
	const qr = await prisma.qrcodes.findUnique({
		where: { id: params.id },
		select: {
			label: true,
			targetUrl: true,
		},
	});

	if (!qr) notFound();

	return (
		<main className='min-h-screen flex items-center justify-center bg-base-200 p-6'>
			<div className='card bg-base-100 shadow-xl p-6 items-center gap-4'>
				{/* Render your UI QR component */}
				<QRCode
					className='size-48 rounded border bg-white p-4 shadow-xs'
					data={qr.targetUrl}
					foreground='#111'
				/>

				{qr.label && <h1 className='text-lg font-semibold'>{qr.label}</h1>}

				{/* Optional: button that opens the link */}
				<Link
					href={qr.targetUrl}
					target='_blank'
					rel='noopener noreferrer'
					className={buttonVariants({ size: 'sm' })}>
					Visit link
				</Link>
			</div>
		</main>
	);
}
