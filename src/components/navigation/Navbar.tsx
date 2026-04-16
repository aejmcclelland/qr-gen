'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
	QrCode,
	PlusCircle,
	List,
	User,
	LogOut,
	LayoutDashboard,
	Tags,
} from 'lucide-react';
import Image from 'next/image';
import { useSession, signOut } from '@/lib/auth-client';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { LucideIcon } from 'lucide-react';
import {
	AVATAR_UPDATED_EVENT,
	type AvatarUpdatedDetail,
} from '@/lib/avatar-events';
import {
	PROFILE_UPDATED_EVENT,
	type ProfileUpdatedDetail,
} from '@/lib/profile-events';
import { UserAvatar } from '@/components/profile/UserAvatar';

type NavItem = {
	href: string;
	label: string;
	icon: LucideIcon;
	isActive: (pathname: string) => boolean;
};

export function Navbar() {
	const pathname = usePathname();
	const router = useRouter();
	const { data: session } = useSession();
	const isLoggedIn = Boolean(session?.user);
	const sessionAvatarUrl = session?.user?.image?.trim() || null;
	const sessionDisplayName = session?.user?.name?.trim() || 'Account';
	const [avatarUrl, setAvatarUrl] = useState<string | null>(sessionAvatarUrl);
	const [displayName, setDisplayName] = useState(sessionDisplayName);
	const brandHref = isLoggedIn ? '/dashboard' : '/';
	const signInHref =
		pathname &&
		pathname !== '/' &&
		pathname !== '/login' &&
		pathname !== '/signup'
			? `/login?callbackURL=${encodeURIComponent(pathname)}`
			: '/login';
	const navItems: NavItem[] = isLoggedIn
		? [
				{
					href: '/dashboard',
					label: 'Dashboard',
					icon: LayoutDashboard,
					isActive: (currentPath) => currentPath === '/dashboard',
				},
				{
					href: '/qr/new',
					label: 'New QR',
					icon: PlusCircle,
					isActive: (currentPath) => currentPath === '/qr/new',
				},
				{
					href: '/qr',
					label: 'My QRs',
					icon: List,
					isActive: (currentPath) => currentPath === '/qr',
				},
			]
		: [
				{
					href: '/qr/new',
					label: 'New QR',
					icon: PlusCircle,
					isActive: (currentPath) => currentPath === '/qr/new',
				},
			];

	const initials =
		displayName && displayName !== 'Account'
			? displayName
					.split(' ')
					.map((p) => p[0])
					.join('')
					.slice(0, 2)
					.toUpperCase()
			: (session?.user?.email?.[0]?.toUpperCase() ?? '?');

	useEffect(() => {
		setAvatarUrl(sessionAvatarUrl);
	}, [sessionAvatarUrl]);

	useEffect(() => {
		setDisplayName(sessionDisplayName);
	}, [sessionDisplayName]);

	useEffect(() => {
		function handleAvatarUpdated(event: Event) {
			const detail = (event as CustomEvent<AvatarUpdatedDetail>).detail;
			setAvatarUrl(detail?.avatarUrl?.trim() || null);
		}

		function handleProfileUpdated(event: Event) {
			const detail = (event as CustomEvent<ProfileUpdatedDetail>).detail;
			setDisplayName(detail?.name?.trim() || 'Account');
		}

		globalThis.addEventListener(AVATAR_UPDATED_EVENT, handleAvatarUpdated);
		globalThis.addEventListener(PROFILE_UPDATED_EVENT, handleProfileUpdated);

		return () => {
			globalThis.removeEventListener(AVATAR_UPDATED_EVENT, handleAvatarUpdated);
			globalThis.removeEventListener(
				PROFILE_UPDATED_EVENT,
				handleProfileUpdated,
			);
		};
	}, []);

	return (
		<header className='fixed top-4 left-0 right-0 z-40 flex justify-center px-4'>
			<nav
				className='
          bg-base-100/60
          border border-base-300
          rounded-full
          shadow-lg
          px-2 sm:px-4
          py-1.5
          flex
          items-center
          gap-2 sm:gap-4
          backdrop-blur-xs
          w-full
          max-w-3xl
          min-w-0
        '>
				<div className='flex-none min-w-0'>
					<Link
						href={brandHref}
						className='
              flex items-center gap-1 sm:gap-2
              rounded-full px-1 sm:px-2 py-1
              hover:bg-base-200
              transition-colors
              min-w-0
            '>
						<span className='inline-flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full '>
							<Image
								src='/jumbo-qrpilot-small.svg'
								alt='QrPilot logo'
								width={64}
								height={64}
								className='h-10 w-10 sm:h-14 sm:w-14 object-contain'
							/>
						</span>
						<span className='hidden sm:inline font-semibold text-sm sm:text-base leading-none'>
							QrPilot
						</span>
					</Link>
				</div>

				<div className='flex-1 min-w-0 flex justify-center'>
					<div className='flex items-center gap-2'>
						{navItems.map((item) => {
							const Icon = item.icon;

							return (
								<Link
									key={item.href}
									href={item.href}
									title={item.label}
									aria-label={item.label}
									className={`
                btn btn-ghost btn-xs rounded-full px-2 sm:px-3
                flex items-center gap-1
                min-w-0
                ${item.isActive(pathname) ? 'bg-base-200' : ''}
              `}>
									<Icon className='h-6 w-6' />
									<span className='hidden sm:inline text-xs'>{item.label}</span>
								</Link>
							);
						})}
					</div>
				</div>

				<div className='flex-none shrink-0 flex items-center gap-1 sm:gap-2'>
					{session?.user ? (
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
								{session.user.email && (
									<div className='px-2 pb-2 text-xs text-base-content/70 break-all'>
										{session.user.email}
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
					) : (
						<Link
							href={signInHref}
							className='btn btn-primary btn-xs rounded-full px-2 sm:px-3'>
							Sign in
						</Link>
					)}
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
