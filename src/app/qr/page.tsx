// src/app/qr/page.tsx

import { prisma } from '@/lib/prisma';
import { QrListSection } from '@/components/qr/QrListSection';
import { mapQrsToClient, type QrClient } from '@/lib/qr-mapper';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getSessionUserId } from '@/lib/getSessionUserId';
import { ensureUserCategoriesInitialized } from '@/lib/category-service';

export const dynamic = 'force-dynamic';

export default async function QrListPage() {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session?.user) redirect('/login?callbackURL=/qr');

	const userId = getSessionUserId(session);
	await ensureUserCategoriesInitialized(userId);

	const dbQrs = await prisma.qrcodes.findMany({
		where: { userId },
		orderBy: { createdAt: 'desc' },
		take: 50,
	});

	const qrs: QrClient[] = mapQrsToClient(dbQrs);

	return (
		<div className='min-h-screen bg-base-200 overflow-x-hidden'>
			<div className='mx-auto max-w-5xl min-w-0 px-4 py-10 pb-32'>
				<QrListSection initialQrs={qrs} />
			</div>
		</div>
	);
}
