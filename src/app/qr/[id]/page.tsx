import { headers } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import { QrDetailClient } from '@/components/qr/QrDetailClient';
import { auth } from '@/lib/auth';
import { getSessionUserId } from '@/lib/getSessionUserId';
import { prisma } from '@/lib/prisma';
import { mapQrToClient } from '@/lib/qr-mapper';

export const dynamic = 'force-dynamic';

type QrDetailPageProps = {
	params: Promise<{ id: string }>;
};

export default async function QrDetailPage({ params }: QrDetailPageProps) {
	const { id } = await params;
	const session = await auth.api.getSession({ headers: await headers() });

	if (!session?.user) {
		redirect(`/login?callbackURL=${encodeURIComponent(`/qr/${id}`)}`);
	}

	const userId = getSessionUserId(session);
	const qr = await prisma.qrcodes.findFirst({
		where: { id, userId },
	});

	if (!qr) {
		notFound();
	}

	return <QrDetailClient initialQr={mapQrToClient(qr)} />;
}
