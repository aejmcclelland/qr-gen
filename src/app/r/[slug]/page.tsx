import { notFound } from 'next/navigation';
import { getReviewLink } from '@/lib/review/getReviewLink';
import { ReviewFlow } from '@/app/r/[slug]/_components/ReviewFlow';


export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ReviewPage({
	params,
}: {
	readonly params: Promise<{ readonly slug: string }>;
}) {
	const { slug } = await params;
	const reviewLink = await getReviewLink(slug);

	if (!reviewLink) {
		notFound();
	}

	if (!reviewLink.isActive) {
		return (
			<main className='min-h-dvh bg-base-200 px-4 py-10 flex items-center justify-center'>
				<div className='w-full max-w-md'>
					<div className='card bg-base-100 shadow-xl'>
						<div className='card-body items-center text-center gap-3'>
							<h1 className='text-lg font-semibold'>Review link inactive</h1>
							<p className='text-sm text-base-content/70'>
								This review link is no longer accepting new feedback.
							</p>
						</div>
					</div>
				</div>
			</main>
		);
	}

	return (
		<main className='min-h-dvh bg-base-200 px-4 py-10'>
			<div className='mx-auto max-w-lg'>
				<div className='card bg-base-100 shadow-xl'>
					<ReviewFlow
						slug={reviewLink.slug}
						businessName={reviewLink.businessName}
						destinations={reviewLink.destinations}
					/>
				</div>
			</div>
		</main>
	);
}
