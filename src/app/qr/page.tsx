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

type QrListPageProps = {
	searchParams?: Promise<{
		category?: string | string[];
		edit?: string | string[];
		visibility?: string | string[];
	}>;
};

function getSingleParam(value: string | string[] | undefined) {
	return Array.isArray(value) ? value[0] : value;
}

function getVisibilityParam(value: string | string[] | undefined) {
	const visibility = getSingleParam(value);

	return visibility === 'public' || visibility === 'private'
		? visibility
		: 'all';
}

export default async function QrListPage({ searchParams }: QrListPageProps) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session?.user) redirect('/login?callbackURL=/qr');

	const userId = getSessionUserId(session);
	await ensureUserCategoriesInitialized(userId);
	const params = searchParams ? await searchParams : {};
	const initialCategory = getSingleParam(params.category);
	const initialEditId = getSingleParam(params.edit);
	const initialVisibility = getVisibilityParam(params.visibility);
	const qrListStateKey = [
		initialCategory ?? 'all-categories',
		initialVisibility,
		initialEditId ?? 'no-edit',
	].join(':');

	const dbQrs = await prisma.qrcodes.findMany({
		where: { userId },
		orderBy: { createdAt: 'desc' },
	});

	const qrs: QrClient[] = mapQrsToClient(dbQrs);

	return (
		<div className='min-h-screen bg-base-200 overflow-x-hidden'>
			<div className='mx-auto max-w-5xl min-w-0 px-4 py-10 pb-32'>
				<QrListSection
					key={qrListStateKey}
					initialQrs={qrs}
					initialActiveCategories={initialCategory ? [initialCategory] : []}
					initialEditId={initialEditId}
					initialVisibility={initialVisibility}
				/>
			</div>
		</div>
	);
}
