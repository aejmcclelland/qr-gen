'use client';

import { authClient } from '@/lib/auth-client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ForgotPage() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [sent, setSent] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [secondsLeft, setSecondsLeft] = useState<number>(5);

	useEffect(() => {
		if (!sent) return;

		const interval = setInterval(() => {
			setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
		}, 1000);

		const timer = setTimeout(() => {
			router.push('/login');
		}, 5000);

		return () => {
			clearTimeout(timer);
			clearInterval(interval);
		};
	}, [sent, router]);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			await authClient.requestPasswordReset({
				email,
				redirectTo: `${window.location.origin}/reset-password`,
			});
			setSent(true);
		} catch {
			setError('Failed to send reset email');
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className='min-h-screen w-full overflow-x-hidden'>
			<div className='mx-auto w-full max-w-lg px-4 sm:px-6 pt-10 pb-24'>
				<div className='card bg-base-100 shadow-xl'>
					<div className='card-body p-6 space-y-4'>
						<div className='space-y-1'>
							<h1 className='card-title text-2xl'>Forgot password</h1>
							<p className='text-sm text-base-content/70'>
								Enter your email and we’ll send you a secure reset link.
							</p>
						</div>

						{sent ? (
							<>
								<div className='alert alert-success'>
									<span>
										If an account exists for that email, a reset link has been sent.
									</span>
								</div>
								<div className='text-sm text-base-content/70 space-y-1'>
									<p>
										Check your inbox (and spam/junk). If it doesn’t arrive within a few minutes,
										you can request another.
									</p>
									<p className='text-xs text-base-content/60'>
										Redirecting to login in {secondsLeft}s…
									</p>
								</div>
								<div className='card-actions justify-end pt-2'>
									<Link href='/login' className='btn btn-primary btn-sm'>
										Back to login
									</Link>
								</div>
							</>
						) : (
							<form onSubmit={handleSubmit} className='space-y-3'>
								<label className='form-control'>
									<div className='label'>
										<span className='label-text'>Email</span>
									</div>
									<input
										type='email'
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder='you@example.com'
										className='input input-bordered w-full'
										autoComplete='email'
									/>
								</label>

								<button
									type='submit'
									className='btn btn-primary w-full'
									disabled={loading}>
									{loading ? 'Sending…' : 'Send reset link'}
								</button>

								{error ? (
									<div className='alert alert-error'>
										<span>{error}</span>
									</div>
								) : null}

								<div className='pt-1 text-sm text-base-content/70'>
									<Link href='/login' className='link link-primary'>
										Back to login
									</Link>
								</div>
							</form>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
