'use client';

import { authClient } from '@/lib/auth-client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ForgotPage() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [sent, setSent] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!sent) return;

		const timer = setTimeout(() => {
			router.push('/login');
		}, 5000);

		return () => clearTimeout(timer);
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
		<div className='max-w-md mx-auto mt-16'>
			<h1 className='text-xl font-semibold mb-4'>Forgot password</h1>

			{sent ? (
				<p className='text-sm text-success'>
					If an account exists for that email, a reset link has been sent.
					<br />
					<span className='text-base-content/60'>Redirecting to login…</span>
				</p>
			) : (
				<form onSubmit={handleSubmit} className='space-y-4'>
					<input
						type='email'
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder='you@example.com'
						className='input input-bordered w-full'
					/>

					<button
						type='submit'
						className='btn btn-primary w-full'
						disabled={loading}>
						{loading ? 'Sending…' : 'Send reset link'}
					</button>

					{error && <p className='text-sm text-error'>{error}</p>}
				</form>
			)}
		</div>
	);
}