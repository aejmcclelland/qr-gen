import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { CategoryManager } from '@/components/categories/CategoryManager';
import { auth } from '@/lib/auth';
import { getSessionUserId } from '@/lib/getSessionUserId';
import {
	ensureUserCategoriesInitialized,
	getUserCategoriesWithUsage,
} from '@/lib/category-service';

export const dynamic = 'force-dynamic';

export default async function CategoriesPage() {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session?.user) redirect('/login?callbackURL=/categories');

	const userId = getSessionUserId(session);
	await ensureUserCategoriesInitialized(userId);

	const categories = await getUserCategoriesWithUsage(userId);

	return (
		<div className='min-h-screen bg-base-200 overflow-x-hidden'>
			<div className='mx-auto max-w-4xl px-4 py-12 pb-32 sm:px-6 lg:py-16'>
				<CategoryManager initialCategories={categories} />
			</div>
		</div>
	);
}
