'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { QrCode, User, LogOut, Tags } from 'lucide-react';
import { signOut, type authClient } from '@/lib/auth-client';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserAvatar } from '@/components/profile/UserAvatar';
import {
	AVATAR_UPDATED_EVENT,
	type AvatarUpdatedDetail,
} from '@/lib/avatar-events';
import {
	PROFILE_UPDATED_EVENT,
	type ProfileUpdatedDetail,
} from '@/lib/profile-events';

type AccountUser = typeof authClient.$Infer.Session.user;

// These endpoints save directly to Prisma, so their events provide immediate
// feedback while the Better Auth session still contains the previous profile.
function useNavbarProfile(user: AccountUser) {
	const [overrides, setOverrides] = useState<{
		image?: string | null;
		name?: string;
	}>({});

	useEffect(() => {
		function handleAvatarUpdated(event: Event) {
			const detail = (event as CustomEvent<AvatarUpdatedDetail>).detail;
			setOverrides((current) => ({
				...current,
				image: detail?.avatarUrl?.trim() || null,
			}));
		}

		function handleProfileUpdated(event: Event) {
			const detail = (event as CustomEvent<ProfileUpdatedDetail>).detail;
			setOverrides((current) => ({
				...current,
				name: detail?.name?.trim() || 'Account',
			}));
		}

		globalThis.addEventListener(AVATAR_UPDATED_EVENT, handleAvatarUpdated);
		globalThis.addEventListener(PROFILE_UPDATED_EVENT, handleProfileUpdated);
		return () => {
			globalThis.removeEventListener(AVATAR_UPDATED_EVENT, handleAvatarUpdated);
			globalThis.removeEventListener(PROFILE_UPDATED_EVENT, handleProfileUpdated);
		};
	}, []);

	return {
		avatarUrl:
			overrides.image === undefined
				? user.image?.trim() || null
				: overrides.image,
		displayName: overrides.name ?? (user.name?.trim() || 'Account'),
	};
}

export function AccountMenu({ user }: { readonly user: AccountUser }) {
	const router = useRouter();
	const { avatarUrl, displayName } = useNavbarProfile(user);
	const initials =
		displayName !== 'Account'
			? displayName
					.split(' ')
					.map((part) => part[0])
					.join('')
					.slice(0, 2)
					.toUpperCase()
			: (user.email?.[0]?.toUpperCase() ?? '?');

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className='btn btn-ghost btn-xs rounded-full px-1.5 sm:px-2 flex items-center gap-1 sm:gap-2'>
					<UserAvatar
						src={avatarUrl}
						initials={initials}
						alt={`${displayName} avatar`}
						sizeClassName='h-6 w-6 sm:h-7 sm:w-7'
						textClassName='text-xs'
					/>
					<span className='hidden sm:inline text-xs'>
						{displayName}
					</span>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='w-52 bg-base-100'>
				<DropdownMenuLabel>Signed in</DropdownMenuLabel>
				{user.email && (
					<div className='px-2 pb-2 text-xs text-base-content/70 break-all'>
						{user.email}
					</div>
				)}
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => router.push('/profile')}>
					<User className='mr-2 h-4 w-4' />
					Profile
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => router.push('/qr')}>
					<QrCode className='text-primary mr-2 h-4 w-4' />
					My QRs
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => router.push('/categories')}>
					<Tags className='text-primary mr-2 h-4 w-4' />
					Categories
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={async () => {
						await signOut({
							fetchOptions: {
								onSuccess: () => {
									router.push('/');
								},
							},
						});
					}}>
					<LogOut className='text-error mr-2 h-4 w-4' />
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
