'use client';

import { signIn } from '@/lib/auth-client';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

type BetterAuthResponse = {
	error?: string | { message?: string } | null;
};

export default function LoginForm() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const callbackURL = searchParams.get('callbackURL') ?? '/dashboard';
	const [error, setError] = useState<string | null>(null);

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setError(null);

		const formData = new FormData(e.currentTarget);
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const rawResult = await signIn.email({
			email,
			password,
			callbackURL,
			rememberMe: true,
		});

		const result = rawResult as BetterAuthResponse;

		if (result.error) {
			const msg =
				typeof result.error === 'string'
					? result.error
					: result.error?.message ?? 'Login failed. Please try again.';
			setError(msg);
			return;
		}

		// Just in case Better Auth doesn't redirect for some reason:
		router.push(callbackURL);
	}

	async function handleGoogleSignup() {
		setError(null);

		const rawResult = await signIn.social({
			provider: 'google',
			callbackURL,
			newUserCallbackURL: callbackURL,
		});

		const result = rawResult as BetterAuthResponse;

		if (result.error) {
			const msg =
				typeof result.error === 'string'
					? result.error
					: result.error?.message ?? 'Google sign up failed. Please try again.';
			setError(msg);
		}
	}

	return (
		<form onSubmit={onSubmit}>
			<fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-full w-sm border p-4 mx-auto'>
				<legend className='fieldset-legend'>Login</legend>

				<label className='label'>Email</label>
				<input
					name='email'
					type='email'
					className='input input-bordered w-full'
					placeholder='Email'
					required
				/>

				<label className='label'>Password</label>
				<input
					name='password'
					type='password'
					className='input input-bordered w-full'
					placeholder='Password'
					required
				/>
				<div className='flex justify-end mt-1'>
					<Link
						href={`/forgot-password?callbackURL=${encodeURIComponent(callbackURL)}`}
						className='link link-hover text-sm'>
						Forgot password?
					</Link>
				</div>

				{error && <p className='text-error text-sm mt-2'>{error}</p>}

				<button className='btn btn-neutral mt-4 w-full' type='submit'>
					Login
				</button>

				<button
					type='button'
					className='btn btn-outline mt-2 w-full'
					onClick={handleGoogleSignup}>
					Continue with Google
				</button>

				<Link
					href={`/signup?callbackURL=${encodeURIComponent(callbackURL)}`}
					className='link link-primary block text-center mt-4'>
					Need an account? Sign up
				</Link>
			</fieldset>
		</form>
	);
}
