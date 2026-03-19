'use client';

import { signUp, signIn } from '@/lib/auth-client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type BetterAuthResponse = {
	error?: string | { message?: string } | null;
};

export default function SignupForm() {
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
		const name = formData.get('name') as string;

		const rawResult = await signUp.email({
			email,
			password,
			name,
			callbackURL,
		});

		const result = rawResult as BetterAuthResponse;

		if (result.error) {
			const msg =
				typeof result.error === 'string'
					? result.error
					: result.error?.message ?? 'Sign up failed. Please try again.';
			setError(msg);
			return;
		}

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
			<fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-full max-w-sm border p-4'>
				<legend className='fieldset-legend'>Sign up</legend>

				<label className='label'>Name</label>
				<input
					name='name'
					type='text'
					placeholder='Name'
					className='input input-bordered w-full'
					required
				/>

				<label className='label'>Email</label>
				<input
					name='email'
					type='email'
					placeholder='Email'
					className='input input-bordered w-full'
					required
				/>

				<label className='label'>Password</label>
				<input
					name='password'
					type='password'
					placeholder='Password'
					className='input input-bordered w-full'
					required
				/>

				{error && <p className='text-error text-sm mt-2'>{error}</p>}

				<button className='btn btn-primary mt-4 w-full' type='submit'>
					Sign Up
				</button>

				<button
					type='button'
					className='btn btn-outline mt-2 w-full'
					onClick={handleGoogleSignup}>
					Continue with Google
				</button>

				<Link
					href={`/login?callbackURL=${encodeURIComponent(callbackURL)}`}
					className='link link-primary block text-center mt-4'>
					Already have an account? Log in
				</Link>
			</fieldset>
		</form>
	);
}
