'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
	QrCode,
	PlusCircle,
	List,
	User,
	LogOut,
	LayoutDashboard,
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

	const initials = session?.user?.name
		? session.user.name
				.split(' ')
				.map((p) => p[0])
				.join('')
				.slice(0, 2)
				.toUpperCase()
		: (session?.user?.email?.[0]?.toUpperCase() ?? '?');

	return (
		<header className='fixed top-4 left-0 right-0 z-40 flex justify-center px-4'>
			<nav
				className='
          bg-base-100/60
          border border-base-300
          rounded-full
          shadow-lg
          px-4
          py-1.5
          flex
          items-center
          gap-4
            backdrop-blur-xs
          w-full
          max-w-3xl
        '>
				<div className='flex-none'>
					<Link
						href={brandHref}
						className='
              flex items-center gap-2
              rounded-full px-2 py-1
              hover:bg-base-200
              transition-colors
            '>
						<span className='inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10'>
							<Image
								src='/qrpilot-app/portfolio/jumbo-qrpilot.svg'
								alt='QrPilot logo'
								width={48}
								height={48}
								className='h-14 w-14 object-contain'
							/>
						</span>
						<span className='font-semibold text-sm sm:text-base leading-none'>
							QrPilot
						</span>
					</Link>
				</div>

				<div className='flex-1 flex justify-center'>
					<div className='flex items-center gap-2'>
						{navItems.map((item) => {
							const Icon = item.icon;

							return (
								<Link
									key={item.href}
									href={item.href}
									className={`
                btn btn-ghost btn-xs rounded-full px-3
                flex items-center gap-1
                ${item.isActive(pathname) ? 'bg-base-200' : ''}
              `}>
									<Icon className='h-3 w-3' />
									<span className='hidden sm:inline text-xs'>{item.label}</span>
								</Link>
							);
						})}
					</div>
				</div>

				<div className='flex-none flex items-center gap-2'>
					{session?.user ? (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<button className='btn btn-ghost btn-xs rounded-full px-2 flex items-center gap-2'>
									<div className='h-7 w-7 rounded-full bg-primary text-primary-content flex items-center justify-center text-xs font-semibold'>
										{initials}
									</div>
									<span className='hidden sm:inline text-xs'>
										{session.user.name ?? 'Account'}
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
							className='btn btn-primary btn-xs rounded-full px-3'>
							Sign in
						</Link>
					)}
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
