'use client';

import { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

export default function ResetPasswordPage() {
	return (
		<Suspense
			fallback={
				<div className='max-w-md mx-auto mt-16'>
					<h1 className='text-xl font-semibold mb-4'>Reset your password</h1>
					<p className='text-sm text-base-content/70'>Loading…</p>
				</div>
			}
		>
			<ResetPasswordForm />
		</Suspense>
	);
}

function ResetPasswordForm() {
	const searchParams = useSearchParams();
	const router = useRouter();

	const token = searchParams.get('token');

	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setError(null);

		if (!token) {
			setError('Invalid or missing reset token.');
			return;
		}

		if (password.length < 8) {
			setError('Password must be at least 8 characters.');
			return;
		}

		if (password !== confirm) {
			setError('Passwords do not match.');
			return;
		}

		setLoading(true);

		try {
			await authClient.resetPassword({
				token,
				newPassword: password,
			});

			setSuccess(true);

			// optional delay before redirect
			setTimeout(() => {
				router.push('/login');
			}, 2000);
		} catch (err) {
			setError('Reset link is invalid or has expired.');
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className='max-w-md mx-auto mt-16'>
			<h1 className='text-xl font-semibold mb-4'>Reset your password</h1>

			{success ? (
				<p className='text-success text-sm'>
					Your password has been updated. Redirecting to login…
				</p>
			) : (
				<form onSubmit={handleSubmit} className='space-y-4'>
					<input
						type='password'
						placeholder='New password'
						className='input input-bordered w-full'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

					<input
						type='password'
						placeholder='Confirm new password'
						className='input input-bordered w-full'
						value={confirm}
						onChange={(e) => setConfirm(e.target.value)}
						required
					/>

					<button
						type='submit'
						className='btn btn-primary w-full'
						disabled={loading}
					>
						{loading ? 'Updating…' : 'Update password'}
					</button>

					{error && <p className='text-error text-sm'>{error}</p>}
				</form>
			)}
		</div>
	);
}
