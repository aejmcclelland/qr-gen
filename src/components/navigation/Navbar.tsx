'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { QrCode, Home, PlusCircle, List } from 'lucide-react';

import { useSession, signOut } from '@/lib/auth-client';
import { User, LogOut } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function isActive(pathname: string, href: string) {
	if (href === '/') return pathname === '/';
	return pathname.startsWith(href);
}

export function Navbar() {
	const pathname = usePathname();
	const router = useRouter();
	const { data: session } = useSession();

	const initials = session?.user?.name
		? session.user.name
				.split(' ')
				.map((p) => p[0])
				.join('')
				.slice(0, 2)
				.toUpperCase()
		: session?.user?.email?.[0]?.toUpperCase() ?? '?';

	return (
		<header className='fixed top-4 left-0 right-0 z-40 flex justify-center px-4'>
			<nav
				className='
          bg-base-100/60
          border border-base-300
          rounded-full
          shadow-lg
          px-4
          py-2
          flex
          items-center
          gap-4
            backdrop-blur-xs
          w-full
          max-w-3xl
        '>
				{/* Brand (Left) */}
				<div className='flex-none'>
					<Link
						href='/'
						className='
              flex items-center gap-1
              rounded-full px-2 py-1
              hover:bg-base-200
			  
              transition-colors
            '>
						<span className='inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10'>
							<QrCode className='h-4 w-4 text-primary' />
						</span>
						<span className='font-semibold text-sm sm:text-base'>QrPilot</span>
					</Link>
				</div>

				{/* Center Navigation */}
				<div className='flex-1 flex justify-center'>
					<div className='flex items-center gap-2'>
						<Link
							href='/'
							className={`
                btn btn-ghost btn-xs rounded-full px-3
                flex items-center gap-1
                ${isActive(pathname, '/') ? 'bg-base-200' : ''}
              `}>
							<Home className='h-3 w-3' />
							<span className='hidden sm:inline text-xs'>Home</span>
						</Link>

						<Link
							href='/qr/new'
							className={`
                btn btn-ghost btn-xs rounded-full px-3
                flex items-center gap-1
                ${isActive(pathname, '/qr/new') ? 'bg-base-200' : ''}
              `}>
							<PlusCircle className='h-3 w-3' />
							<span className='hidden sm:inline text-xs'>New QR</span>
						</Link>

						<Link
							href='/qr'
							className={`
                btn btn-ghost btn-xs rounded-full px-3
                flex items-center gap-1
                ${isActive(pathname, '/qr') ? 'bg-base-200' : ''}
              `}>
							<List className='h-3 w-3' />
							<span className='hidden sm:inline text-xs'>My QRs</span>
						</Link>
					</div>
				</div>

				{/* Auth Area (Right) */}
				{/* Auth Area (Right) */}
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
							<DropdownMenuContent align='end' className='w-52 bg-base-300'>
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
							href={`/login?callbackURL=${encodeURIComponent(pathname || '/')}`}
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
