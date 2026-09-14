'use client';

import { useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PlusCircle, List, LayoutDashboard, type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { authClient, useSession } from '@/lib/auth-client';
import { AccountMenu } from './AccountMenu';

type NavbarProps = {
	readonly initialSession: typeof authClient.$Infer.Session | null;
};

type NavItem = {
	href: string;
	label: string;
	icon: LucideIcon;
};

const publicNavItems: NavItem[] = [
	{ href: '/qr/new', label: 'New QR', icon: PlusCircle },
];
const authenticatedNavItems: NavItem[] = [
	{ href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
	...publicNavItems,
	{ href: '/qr', label: 'My QRs', icon: List },
];

const subscribeToHydration = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

function useNavbarSession(initialSession: NavbarProps['initialSession']) {
	const { data, isPending, isRefetching } = useSession();
	const hydrated = useSyncExternalStore(
		subscribeToHydration,
		getClientSnapshot,
		getServerSnapshot,
	);

	useEffect(() => {
		// Better Auth seeds its store only once; no store writes during render.
		authClient.hydrateSession(initialSession);
	}, [initialSession]);

	// SSR and hydration always use the same prop, even if the client store is
	// already populated. After hydration, null is a valid signed-out session.
	return !hydrated || (isPending && !isRefetching) ? initialSession : data;
}

export function Navbar({ initialSession }: NavbarProps) {
	const pathname = usePathname();
	const session = useNavbarSession(initialSession);
	const user = session?.user;
	const brandHref = user ? '/dashboard' : '/';
	const navItems = user ? authenticatedNavItems : publicNavItems;
	const signInHref =
		pathname && pathname !== '/' && pathname !== '/login' && pathname !== '/signup'
			? `/login?callbackURL=${encodeURIComponent(pathname)}`
			: '/login';

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
                ${pathname === item.href ? 'bg-base-200' : ''}
              `}>
									<Icon className='h-6 w-6' />
									<span className='hidden sm:inline text-xs'>{item.label}</span>
								</Link>
							);
						})}
					</div>
				</div>

				<div className='flex-none shrink-0 flex items-center gap-1 sm:gap-2'>
					{user ? (
						<AccountMenu
							// A new session profile clears any old event overrides.
							key={JSON.stringify([user.id, user.name, user.image])}
							user={user}
						/>
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
