// src/app/q/[id]/page.tsx
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { QRCode } from '@/components/ui/shadcn-io/qr-code';
import PublicShareActions from '@/components/qr/PublicShareActions';

// Ensure public QR pages always reflect the latest DB state (e.g., isPublic toggles)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const qr = await prisma.qrcodes.findUnique({
		where: { id },
		select: { label: true, isPublic: true },
	});

	if (!qr || !qr.isPublic) {
		return {
			title: 'QR Code',
			openGraph: { title: 'QR Code' },
			robots: { index: false, follow: false },
		};
	}

	return {
		title: qr.label ?? 'QR Code',
		openGraph: {
			title: qr.label ?? 'QR Code',
		},
		// Optional: avoid search engines indexing random public QR pages
		robots: {
			index: false,
			follow: false,
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
		select: { label: true, targetUrl: true, isPublic: true },
	});

	if (!qr || !qr.isPublic) {
		notFound();
	}
	return (
		<main className='min-h-screen bg-base-200 mt-16 pt-12 px-4 pb-10 sm:px-6'>
			<div className='mx-auto w-full max-w-md'>
				<div className='card bg-base-100 shadow-xl'>
					<div className='card-body items-center gap-4'>
						{/* Tiny header */}
						<div className='text-center'>
							<p className='text-lg font-semibold leading-tight'>
								{qr.label ?? 'QR Code'}
							</p>
						</div>

						{/* Wrap QR in a stable element so the client can export it */}
						<div id='public-qr-root' className='rounded-lg'>
							<QRCode
								className='size-56 sm:size-64 rounded-lg border bg-white p-4 shadow-xs'
								data={qr.targetUrl}
								foreground='#111'
							/>
						</div>

						<p className='text-center text-sm text-base-content/70 break-all'>
							{qr.targetUrl}
						</p>

						{/* Client actions: visit + copy + download PNG */}
						<PublicShareActions
							targetUrl={qr.targetUrl}
							qrRootId='public-qr-root'
							label={qr.label ?? null}
						/>
					</div>
				</div>

				<div className='text-center text-sm text-base-content/70 mt-4'>
					Generated with{' '}
					<a
						href='https://qrpilot.app'
						target='_blank'
						rel='noopener noreferrer'
						className='text-primary hover:underline'>
						QRPilot
					</a>
				</div>
			</div>
		</main>
	);
}
