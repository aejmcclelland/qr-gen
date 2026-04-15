'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from '@/lib/auth-client';
import ChangePasswordForm from '@/components/auth/ChangePasswordForm';
import { ProfileAvatarUploader } from '@/components/profile/ProfileAvatarUploader';
import { ProfileDetailsForm } from '@/components/profile/ProfileDetailsForm';

function getInitials(name: string, email?: string | null) {
	const nameInitials = name
		.split(' ')
		.map((part) => part[0])
		.join('')
		.slice(0, 2)
		.toUpperCase();

	return nameInitials || email?.[0]?.toUpperCase() || '?';
}

export default function ProfilePage() {
	const router = useRouter();
	const { data: session } = useSession();
	const sessionDisplayName =
		session?.user?.name || session?.user?.email?.split('@')[0] || 'Your name';
	const [displayName, setDisplayName] = useState(sessionDisplayName);

	useEffect(() => {
		setDisplayName(sessionDisplayName);
	}, [sessionDisplayName]);

	const handleNameChange = useCallback((name: string) => {
		setDisplayName(name);
	}, []);

	// If not logged in, show a prompt to sign in
	if (!session?.user) {
		return (
			<div className='min-h-screen flex items-center justify-center px-4 pb-10'>
				<div className='card bg-base-100 shadow-xl max-w-md w-full'>
					<div className='card-body space-y-4'>
						<h1 className='card-title text-2xl'>Profile</h1>
						<p className='text-sm text-base-content/70'>
							You need to be signed in to view your profile.
						</p>
						<div className='flex gap-2 justify-end'>
							<Link
								href={`/login?callbackURL=${encodeURIComponent('/profile')}`}
								className='btn btn-primary btn-sm'>
								Sign in
							</Link>
							<Link href='/' className='btn btn-ghost btn-sm'>
								Back home
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}

	const { user } = session;
	const avatarUrl = user.image?.trim() || null;
	const initials = getInitials(displayName, user.email);

	return (
		<div className='min-h-screen w-full overflow-x-hidden pb-24'>
			<div className='mx-auto w-full max-w-5xl px-4 sm:px-6 pt-8 pb-24'>
				<header className='mb-6'>
					<h1 className='text-2xl font-bold leading-tight'>My Profile</h1>
				</header>

				<div className='card bg-base-100 shadow-xl'>
					<div className='card-body p-4 sm:p-6 space-y-6'>
						{/* Top row: avatar + basic info */}
						<div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
							<div className='flex flex-col gap-4 lg:flex-row lg:items-center'>
								<ProfileAvatarUploader
									initialAvatarUrl={avatarUrl}
									initials={initials}
									displayName={displayName}
								/>
								<div>
									<h2 className='text-xl font-semibold'>{displayName}</h2>
									<p className='text-sm text-base-content/70 break-all sm:break-normal'>
										{user.email ?? 'No email on file'}
									</p>
								</div>
							</div>

							<div className='flex gap-2'>
								<button
									type='button'
									className='btn btn-outline btn-sm'
									onClick={() => router.push('/qr')}>
									View my QRs
								</button>
							</div>
						</div>

						<div className='divider my-2' />

						<ProfileDetailsForm
							initialName={displayName}
							email={user.email ?? ''}
							onNameChange={handleNameChange}
						/>

						<section className='space-y-4'>
							<h3 className='text-lg font-semibold'>Security</h3>

							<div className='card bg-base-200/60 border border-base-300'>
								<div className='card-body gap-4'>
									<div>
										<h4 className='text-base font-semibold'>Change Password</h4>
										<p className='text-sm text-base-content/70 mt-1'>
											Changing your sign-in password is an easy way to keep your
											account secure.
										</p>
									</div>

									<ChangePasswordForm />

									<p className='text-xs text-base-content/60'>
										Tip: If you signed up with Google, you might not have a
										password set yet. Use “Forgot password?” on the login page
										to create one.
									</p>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
