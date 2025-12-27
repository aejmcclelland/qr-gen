'use client';

import { useMemo, useState, type FormEvent } from 'react';
import { authClient } from '@/lib/auth-client';

export default function ChangePasswordForm() {
	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	const passwordsMatch = useMemo(
		() => newPassword.length > 0 && newPassword === repeatPassword,
		[newPassword, repeatPassword]
	);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setSuccess(null);
		setError(null);

		if (!currentPassword || !newPassword || !repeatPassword) {
			setError('Please fill in all fields.');
			return;
		}

		if (!passwordsMatch) {
			setError('New passwords do not match.');
			return;
		}

		setLoading(true);
		try {
			// Better Auth client: change password for a logged-in user
			// (If your authClient uses a different method name, update it here.
			await authClient.changePassword({
				currentPassword,
				newPassword,
			});

			setSuccess('Password updated.');
			setCurrentPassword('');
			setNewPassword('');
			setRepeatPassword('');
		} catch (err) {
			setError('Failed to update password.');
		} finally {
			setLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit} className='grid gap-4'>
			<div className='form-control'>
				<input
					type='password'
					className='input input-bordered w-full'
					placeholder='Current password'
					value={currentPassword}
					onChange={(e) => setCurrentPassword(e.target.value)}
					autoComplete='current-password'
				/>
			</div>

			<div className='form-control'>
				<input
					type='password'
					className='input input-bordered w-full'
					placeholder='New password'
					value={newPassword}
					onChange={(e) => setNewPassword(e.target.value)}
					autoComplete='new-password'
				/>
			</div>

			<div className='form-control'>
				<input
					type='password'
					className='input input-bordered w-full'
					placeholder='New password (repeat)'
					value={repeatPassword}
					onChange={(e) => setRepeatPassword(e.target.value)}
					autoComplete='new-password'
				/>
				{repeatPassword.length > 0 && !passwordsMatch ? (
					<p className='mt-2 text-xs text-error'>Passwords don&apos;t match.</p>
				) : null}
			</div>

			<button
				type='submit'
				className='btn btn-primary w-full'
				disabled={loading}>
				{loading ? 'Updating…' : 'Update'}
			</button>

			{error ? <p className='text-sm text-error'>{error}</p> : null}
			{success ? <p className='text-sm text-success'>{success}</p> : null}
		</form>
	);
}
