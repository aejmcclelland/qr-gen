import Link from 'next/link';
import {
	List,
	PlusCircle,
	Tags,
	type LucideIcon,
	UserRound,
} from 'lucide-react';

type QuickAction = {
	label: string;
	description: string;
	href: string;
	icon: LucideIcon;
	toneClassName: string;
	badgeClassName: string;
};

const QUICK_ACTIONS: QuickAction[] = [
	{
		label: 'Create QR',
		description: 'Start a new saved code.',
		href: '/qr/new',
		icon: PlusCircle,
		toneClassName: 'bg-primary/15 text-primary',
		badgeClassName: 'badge-primary',
	},
	{
		label: 'View all QR codes',
		description: 'Browse and filter your library.',
		href: '/qr',
		icon: List,
		toneClassName: 'bg-secondary/15 text-secondary',
		badgeClassName: 'badge-secondary',
	},
	{
		label: 'Manage categories',
		description: 'Control your dropdown options.',
		href: '/categories',
		icon: Tags,
		toneClassName: 'bg-accent/15 text-accent',
		badgeClassName: 'badge-accent',
	},
	{
		label: 'Edit profile',
		description: 'Update account details.',
		href: '/profile',
		icon: UserRound,
		toneClassName: 'bg-neutral/15 text-base-content',
		badgeClassName: 'badge-neutral',
	},
];

export function DashboardQuickActions() {
	return (
		<section
			className='grid gap-3 sm:grid-cols-2 lg:grid-cols-4'
			aria-label='Quick actions'>
			{QUICK_ACTIONS.map((action) => {
				const Icon = action.icon;

				return (
					<Link
						key={action.href}
						href={action.href}
						className='group rounded-lg border border-base-content/10 bg-base-100 p-4 shadow-sm transition-colors hover:border-primary/40'>
						<div className='flex h-full flex-col gap-4'>
							<div className='flex items-start justify-between gap-3'>
								<span
									className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${action.toneClassName}`}>
									<Icon className='h-5 w-5' aria-hidden='true' />
								</span>
								<span className={`badge badge-sm ${action.badgeClassName}`}>
									Open
								</span>
							</div>
							<div className='space-y-1'>
								<h2 className='text-base font-semibold text-base-content'>
									{action.label}
								</h2>
								<p className='text-sm leading-5 text-base-content/60'>
									{action.description}
								</p>
							</div>
						</div>
					</Link>
				);
			})}
		</section>
	);
}
