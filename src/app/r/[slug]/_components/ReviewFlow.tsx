'use client';

import { useState } from 'react';
import { Toast } from '@/components/ui/Toast';
import { Stars } from './Stars';

type ReviewDestination = {
	id: string;
	platformKey: string;
	label: string;
	reviewUrl: string;
};

type ReviewFlowProps = {
	slug: string;
	businessName: string | null;
	destinations: ReviewDestination[];
};

type SubmitResponse = {
	ok?: boolean;
	error?: string;
};

function getDestinationLabel(destination: ReviewDestination) {
	const trimmedLabel = destination.label.trim();
	if (trimmedLabel) return trimmedLabel;

	return destination.platformKey
		.split(/[-_]/g)
		.filter(Boolean)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(' ');
}

async function readError(res: Response) {
	try {
		const data = (await res.json()) as SubmitResponse;
		return data.error ?? 'Could not submit review.';
	} catch {
		return 'Could not submit review.';
	}
}

export function ReviewFlow({
	slug,
	businessName,
	destinations,
}: ReviewFlowProps) {
	const businessLabel = businessName?.trim() || 'this business';
	const hasDestinations = destinations.length > 0;
	const [destinationOpened, setDestinationOpened] = useState(false);

	const [rating, setRating] = useState<number | null>(null);
	const [message, setMessage] = useState('');
	const [step, setStep] = useState<
		'rating' | 'feedback' | 'public' | 'privateThanks'
	>('rating');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [toast, setToast] = useState<{
		show: boolean;
		message: string;
		variant: 'info' | 'success' | 'error' | 'warning';
	}>({
		show: false,
		message: '',
		variant: 'info',
	});

	const resetFlow = () => {
		setMessage('');
		setRating(null);
		setStep('rating');
	};

	const submit = async (nextRating: number, nextMessage?: string) => {
		setIsSubmitting(true);

		try {
			const res = await fetch(`/api/review/${slug}/submit`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					rating: nextRating,
					message: nextMessage,
				}),
			});

			if (!res.ok) {
				throw new Error(await readError(res));
			}

			return true;
		} catch (error) {
			setToast({
				show: true,
				message:
					error instanceof Error ? error.message : 'Could not submit review.',
				variant: 'error',
			});
			return false;
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleRatingSelect = (nextRating: number) => {
		setRating(nextRating);
	};

	const handleRatingContinue = async () => {
		if (!rating) {
			setToast({
				show: true,
				message: 'Please choose a rating first.',
				variant: 'warning',
			});
			return;
		}

		if (rating >= 4) {
			const ok = await submit(rating);
			if (ok) {
				setStep('public');
			}
			return;
		}

		setStep('feedback');
	};

	const handleFeedbackSubmit = async (nextMessage?: string) => {
		if (!rating) {
			setToast({
				show: true,
				message: 'Please choose a rating first.',
				variant: 'warning',
			});
			return;
		}

		const ok = await submit(rating, nextMessage);
		if (ok) {
			setStep('privateThanks');
		}
	};

	const renderDestinationButtons = (variant: 'primary' | 'secondary') => {
		if (!hasDestinations) {
			return (
				<div className='rounded-box bg-base-200 px-4 py-3 text-sm text-base-content/70'>
					No public review sites are configured for {businessLabel} yet.
				</div>
			);
		}

		const buttonClassName =
			variant === 'primary'
				? 'btn btn-primary w-full'
				: 'btn btn-secondary w-full';

		return (
			<div className='mx-auto flex w-full max-w-sm flex-col gap-3'>
				{destinations.map((destination) => (
					<a
						key={destination.id}
						href={destination.reviewUrl}
						target='_blank'
						rel='noopener noreferrer'
						className={buttonClassName}>
						Leave a {getDestinationLabel(destination)} review
					</a>
				))}
			</div>
		);
	};

	return (
		<>
			<Toast
				show={toast.show}
				message={toast.message}
				variant={toast.variant}
				positionClassName='toast-top toast-center'
				onClose={() => setToast((prev) => ({ ...prev, show: false }))}
			/>

			<div className='card-body gap-6'>
				<div className='text-center space-y-2'>
					<p className='text-sm uppercase tracking-[0.2em] text-base-content/50'>
						QRPilot Reviews
					</p>
					<h1 className='text-3xl font-semibold text-balance'>
						How was your experience with {businessLabel}?
					</h1>
					<p className='text-sm text-base-content/70'>
						Your feedback helps {businessLabel} improve.
					</p>
				</div>

				{step === 'rating' ? (
					<div className='space-y-4'>
						<Stars
							value={rating}
							onChange={handleRatingSelect}
							disabled={isSubmitting}
						/>
						<p className='text-center text-sm text-base-content/60'>
							Choose a rating to get started.
						</p>

						{rating ? (
							<>
								<p className='text-center text-sm font-medium text-base-content/70'>
									You selected {rating}/5
								</p>

								<div className='flex flex-col gap-2 sm:flex-row'>
										<button
											type='button'
											className='btn btn-primary flex-1'
											onClick={() => void handleRatingContinue()}
											disabled={isSubmitting}>
											{isSubmitting ? 'Saving...' : 'Continue'}
										</button>

									<button
										type='button'
										className='btn btn-ghost flex-1'
										onClick={resetFlow}
										disabled={isSubmitting}>
										Clear selection
									</button>
								</div>
							</>
						) : null}
					</div>
				) : null}

				{step === 'feedback' ? (
					<div className='space-y-4'>
							<div className='text-center'>
								<p className='text-lg font-medium'>
									Tell us what we could do better.
								</p>
								<p className='text-sm text-base-content/70'>
									Anything you share here goes privately to the team at {businessLabel}.
								</p>
								<p className='text-xs text-base-content/50'>
									This will not be shown on public review sites.
								</p>
							</div>

						<div className='rounded-box bg-base-200 px-4 py-3 text-sm text-base-content/70'>
							Your rating: <span className='font-medium'>{rating}/5</span>
						</div>

						<textarea
							className='textarea textarea-bordered min-h-32 w-full'
							placeholder='Tell us what could have been better'
							value={message}
							onChange={(event) => setMessage(event.target.value)}
							disabled={isSubmitting}
							maxLength={1000}
						/>

						<div className='flex flex-col gap-2 sm:flex-row'>
							<button
								type='button'
								className='btn btn-outline flex-1'
								onClick={() => setStep('rating')}
								disabled={isSubmitting}>
								Change rating
							</button>
							<button
								type='button'
								className='btn btn-primary flex-1'
								onClick={() => void handleFeedbackSubmit(message)}
								disabled={isSubmitting}>
								{isSubmitting ? 'Sending...' : 'Send feedback'}
							</button>
								<button
									type='button'
									className='btn btn-ghost flex-1'
									onClick={() => {
										setMessage('');
										void handleFeedbackSubmit(undefined);
									}}
									disabled={isSubmitting}>
									Skip private feedback
								</button>
						</div>

						<div className='rounded-box bg-base-200/80 px-5 py-5 text-center space-y-4 sm:px-6 sm:py-6'>
								<div className='space-y-2'>
									<p className='text-xs font-medium uppercase tracking-[0.18em] text-base-content/45'>
										Optional public review
									</p>
									<p className='text-sm text-base-content/65'>
										If you&apos;d prefer to share your experience publicly instead,
										you can also use one of these review sites.
									</p>
								</div>
							<div className='pt-2'>
								{renderDestinationButtons('secondary')}
							</div>
						</div>
					</div>
				) : null}

				{step === 'public' ? (
					<div className='space-y-5 text-center'>
							<div className='space-y-2'>
								<p className='text-lg font-medium'>
									{destinationOpened
										? 'Your review site has opened.'
										: 'Thanks for the great rating.'}
								</p>
								<p className='text-sm text-base-content/70'>
									{destinationOpened
										? "It opened in a new tab. You can finish your review there, then close this page when you're done."
										: "Choose where you'd like to share your review publicly."}
								</p>
							</div>

							{destinationOpened ? (
								<div className='rounded-box bg-base-200/80 px-5 py-4 space-y-2 sm:px-6'>
									<p className='text-sm text-base-content/65'>
										If you&apos;d rather use a different review site, you can still
										choose another option below.
									</p>
								</div>
							) : null}

						<div className='pt-2'>
							<div onClick={() => setDestinationOpened(true)}>
								{renderDestinationButtons('secondary')}
							</div>
						</div>

						<div className='pt-2'>
							<button
								type='button'
								className='btn btn-ghost btn-sm'
								onClick={resetFlow}>
								Start again
							</button>
						</div>
					</div>
				) : null}

				{step === 'privateThanks' ? (
					<div className='space-y-4 text-center'>
						<div className='space-y-2'>
							<p className='text-lg font-medium'>Thanks for your feedback.</p>
							<p className='text-sm text-base-content/70'>
								Your private feedback has been sent to {businessLabel}.
							</p>
							<p className='text-xs text-base-content/50'>
								You can close this page, or choose a public review site below.
							</p>
						</div>

						<div className='rounded-box bg-base-200/80 px-5 py-5 space-y-4 sm:px-6 sm:py-6'>
								<div className='space-y-2'>
									<p className='text-xs font-medium uppercase tracking-[0.18em] text-base-content/45'>
										Optional public review
									</p>
									<p className='text-sm text-base-content/70'>
										If you&apos;d still like to share your experience publicly, you
										can use one of these review sites.
									</p>
								</div>
							<div className='pt-2'>
								{renderDestinationButtons('secondary')}
							</div>
						</div>
					</div>
				) : null}
			</div>
		</>
	);
}
