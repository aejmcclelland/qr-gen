// src/app/q/[id]/page.tsx
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { QRCode } from '@/components/ui/shadcn-io/qr-code';
import PublicShareActions from '@/components/qr/PublicShareActions';

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const qr = await prisma.qrcodes.findUnique({
		where: { id },
		select: { label: true },
	});

	return {
		title: qr?.label ?? 'QR Code',
		openGraph: {
			title: qr?.label ?? 'QR Code',
		},
	};
}

export default async function PublicQrPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const qr = await prisma.qrcodes.findUnique({
		where: { id },
		select: { label: true, targetUrl: true },
	});

	if (!qr) notFound();

	return (
		<main className='min-h-screen bg-base-200 mt-16 px-10 py-10'>
			<div className='mx-auto w-full max-w-md'>
				<div className='card bg-base-100 shadow-xl'>
					<div className='card-body items-center gap-4'>
						<QRCode
							className='size-56 sm:size-64 rounded-lg border bg-white p-4 shadow-xs'
							data={qr.targetUrl}
							foreground='#111'
						/>

						{qr.label ? (
							<h1 className='text-center text-lg font-semibold'>{qr.label}</h1>
						) : null}

						<p className='text-center text-sm text-base-content/70 break-all'>
							{qr.targetUrl}
						</p>

						{/* Client component: visit + copy with toast */}
						<PublicShareActions targetUrl={qr.targetUrl} />
					</div>
				</div>
				<div className='text-center text-sm text-base-content/70 mt-4'>
					Generated with{' '}
					<a
						href='https://qrvault.one'
						target='_blank'
						rel='noopener noreferrer'
						className='text-primary hover:underline'>
						QRVault.one
					</a>
				</div>
			</div>
		</main>
	);
}
