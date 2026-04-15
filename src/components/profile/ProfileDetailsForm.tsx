'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { dispatchProfileUpdated } from '@/lib/profile-events';

const MIN_DISPLAY_NAME_LENGTH = 2;
const MAX_DISPLAY_NAME_LENGTH = 60;
const MAX_BIO_LENGTH = 160;
const MAX_LOCATION_LENGTH = 50;

type ProfileDetailsFormProps = {
	readonly initialName: string;
	readonly email: string;
	readonly onNameChange: (name: string) => void;
};

type ProfileResponse = {
	profile?: {
		id: string;
		name: string;
		email: string;
		bio: string | null;
		location: string | null;
	};
	error?: string;
};

type Feedback = {
	type: 'success' | 'error';
	message: string;
};

async function readProfileResponse(res: Response): Promise<ProfileResponse> {
	try {
		return (await res.json()) as ProfileResponse;
	} catch {
		return {
			error: res.ok ? undefined : 'Profile request failed.',
		};
	}
}

function trimText(value: string) {
	return value.trim();
}

export function ProfileDetailsForm({
	initialName,
	email,
	onNameChange,
}: ProfileDetailsFormProps) {
	const router = useRouter();
	const [name, setName] = useState(initialName);
	const [savedName, setSavedName] = useState(initialName);
	const [bio, setBio] = useState('');
	const [savedBio, setSavedBio] = useState('');
	const [location, setLocation] = useState('');
	const [savedLocation, setSavedLocation] = useState('');
	const [accountFeedback, setAccountFeedback] = useState<Feedback | null>(null);
	const [profileFeedback, setProfileFeedback] = useState<Feedback | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isSavingAccount, setIsSavingAccount] = useState(false);
	const [isSavingProfile, setIsSavingProfile] = useState(false);

	useEffect(() => {
		let cancelled = false;

		async function loadProfile() {
			setIsLoading(true);

			try {
				const res = await fetch('/api/profile', {
					headers: { Accept: 'application/json' },
				});
				const data = await readProfileResponse(res);

				if (!res.ok || !data.profile) {
					throw new Error(data.error || 'Could not load profile details.');
				}

				if (cancelled) return;

				const nextName = data.profile.name || initialName;
				const nextBio = data.profile.bio ?? '';
				const nextLocation = data.profile.location ?? '';

				setName(nextName);
				setSavedName(nextName);
				setBio(nextBio);
				setSavedBio(nextBio);
				setLocation(nextLocation);
				setSavedLocation(nextLocation);
				onNameChange(nextName);
			} catch (error) {
				if (cancelled) return;

				setProfileFeedback({
					type: 'error',
					message:
						error instanceof Error
							? error.message
							: 'Could not load profile details.',
				});
			} finally {
				if (!cancelled) setIsLoading(false);
			}
		}

		loadProfile();

		return () => {
			cancelled = true;
		};
	}, [initialName, onNameChange]);

	const accountDirty = trimText(name) !== savedName;
	const profileDirty =
		trimText(bio) !== savedBio || trimText(location) !== savedLocation;
	const busy = isLoading || isSavingAccount || isSavingProfile;
	const displayNameCount = name.length;
	const bioCount = bio.length;
	const locationCount = location.length;

	const saveAccountDetails = async () => {
		const nextName = trimText(name);
		setAccountFeedback(null);

		if (
			nextName.length < MIN_DISPLAY_NAME_LENGTH ||
			nextName.length > MAX_DISPLAY_NAME_LENGTH
		) {
			setAccountFeedback({
				type: 'error',
				message: `Display name must be between ${MIN_DISPLAY_NAME_LENGTH} and ${MAX_DISPLAY_NAME_LENGTH} characters.`,
			});
			return;
		}

		setIsSavingAccount(true);

		try {
			const res = await fetch('/api/profile', {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name: nextName }),
			});
			const data = await readProfileResponse(res);

			if (!res.ok || !data.profile) {
				throw new Error(data.error || 'Could not save account details.');
			}

			const saved = data.profile.name;
			setName(saved);
			setSavedName(saved);
			onNameChange(saved);
			dispatchProfileUpdated({ name: saved });
			router.refresh();
			setAccountFeedback({
				type: 'success',
				message: 'Account details saved.',
			});
		} catch (error) {
			setAccountFeedback({
				type: 'error',
				message:
					error instanceof Error
						? error.message
						: 'Could not save account details.',
			});
		} finally {
			setIsSavingAccount(false);
		}
	};

	const saveProfileInfo = async () => {
		const nextBio = trimText(bio);
		const nextLocation = trimText(location);
		setProfileFeedback(null);

		if (nextBio.length > MAX_BIO_LENGTH) {
			setProfileFeedback({
				type: 'error',
				message: `Bio must be ${MAX_BIO_LENGTH} characters or less.`,
			});
			return;
		}

		if (nextLocation.length > MAX_LOCATION_LENGTH) {
			setProfileFeedback({
				type: 'error',
				message: `Location must be ${MAX_LOCATION_LENGTH} characters or less.`,
			});
			return;
		}

		setIsSavingProfile(true);

		try {
			const res = await fetch('/api/profile', {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					bio: nextBio,
					location: nextLocation,
				}),
			});
			const data = await readProfileResponse(res);

			if (!res.ok || !data.profile) {
				throw new Error(data.error || 'Could not save profile info.');
			}

			const savedBioValue = data.profile.bio ?? '';
			const savedLocationValue = data.profile.location ?? '';
			setBio(savedBioValue);
			setSavedBio(savedBioValue);
			setLocation(savedLocationValue);
			setSavedLocation(savedLocationValue);
			router.refresh();
			setProfileFeedback({
				type: 'success',
				message: 'Profile info saved.',
			});
		} catch (error) {
			setProfileFeedback({
				type: 'error',
				message:
					error instanceof Error ? error.message : 'Could not save profile info.',
			});
		} finally {
			setIsSavingProfile(false);
		}
	};

	return (
		<>
			<section className='space-y-4'>
				<div>
					<h3 className='text-lg font-semibold'>Account details</h3>
					<p className='text-sm text-base-content/70'>
						Update how your name appears across QRpilot.
					</p>
				</div>

				<div className='grid gap-4 md:grid-cols-2'>
					<div className='form-control'>
						<label className='label' htmlFor='display-name'>
							<span className='label-text'>Display name</span>
						</label>
						<input
							id='display-name'
							type='text'
							className='input input-bordered input-sm'
							value={name}
							minLength={MIN_DISPLAY_NAME_LENGTH}
							maxLength={MAX_DISPLAY_NAME_LENGTH}
							onChange={(event) => setName(event.target.value)}
							disabled={busy}
						/>
						<label className='label'>
							<span className='label-text-alt text-base-content/60'>
								{displayNameCount}/{MAX_DISPLAY_NAME_LENGTH} characters
							</span>
						</label>
					</div>

					<div className='form-control'>
						<label className='label' htmlFor='profile-email'>
							<span className='label-text'>Email</span>
						</label>
						<input
							id='profile-email'
							type='email'
							className='input input-bordered input-sm'
							value={email}
							disabled
							readOnly
						/>
						<label className='label'>
							<span className='label-text-alt text-base-content/60'>
								Email editing is not enabled for this account.
							</span>
						</label>
					</div>
				</div>

				<div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
					{accountFeedback ? (
						<p
							className={`text-sm ${
								accountFeedback.type === 'success'
									? 'text-success'
									: 'text-error'
							}`}
							role={accountFeedback.type === 'error' ? 'alert' : 'status'}>
							{accountFeedback.message}
						</p>
					) : (
						<p className='text-sm text-base-content/60'>
							Display names are trimmed before saving.
						</p>
					)}
					<button
						type='button'
						className='btn btn-primary btn-sm sm:self-end'
						onClick={saveAccountDetails}
						disabled={busy || !accountDirty}>
						{isSavingAccount ? 'Saving...' : 'Save account details'}
					</button>
				</div>
			</section>

			<section className='space-y-4'>
				<div>
					<h3 className='text-lg font-semibold'>Profile info</h3>
					<p className='text-sm text-base-content/70'>
						Add a little context to your profile.
					</p>
				</div>

				<div className='grid gap-4 md:grid-cols-2'>
					<div className='form-control md:col-span-2'>
						<label className='label' htmlFor='profile-bio'>
							<span className='label-text'>Bio</span>
						</label>
						<textarea
							id='profile-bio'
							className='textarea textarea-bordered min-h-24 resize-y'
							value={bio}
							maxLength={MAX_BIO_LENGTH}
							onChange={(event) => setBio(event.target.value)}
							disabled={busy}
							placeholder='A short note about you or how you use QRpilot.'
						/>
						<label className='label'>
							<span className='label-text-alt text-base-content/60'>
								{bioCount}/{MAX_BIO_LENGTH} characters
							</span>
						</label>
					</div>

					<div className='form-control'>
						<label className='label' htmlFor='profile-location'>
							<span className='label-text'>Location</span>
						</label>
						<input
							id='profile-location'
							type='text'
							className='input input-bordered input-sm'
							value={location}
							maxLength={MAX_LOCATION_LENGTH}
							onChange={(event) => setLocation(event.target.value)}
							disabled={busy}
							placeholder='City, country'
						/>
						<label className='label'>
							<span className='label-text-alt text-base-content/60'>
								{locationCount}/{MAX_LOCATION_LENGTH} characters
							</span>
						</label>
					</div>
				</div>

				<div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
					{profileFeedback ? (
						<p
							className={`text-sm ${
								profileFeedback.type === 'success'
									? 'text-success'
									: 'text-error'
							}`}
							role={profileFeedback.type === 'error' ? 'alert' : 'status'}>
							{profileFeedback.message}
						</p>
					) : (
						<p className='text-sm text-base-content/60'>
							Bio and location are optional.
						</p>
					)}
					<button
						type='button'
						className='btn btn-primary btn-sm sm:self-end'
						onClick={saveProfileInfo}
						disabled={busy || !profileDirty}>
						{isSavingProfile ? 'Saving...' : 'Save profile info'}
					</button>
				</div>
			</section>
		</>
	);
}
