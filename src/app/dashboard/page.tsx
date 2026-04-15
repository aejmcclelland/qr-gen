import Link from 'next/link';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import {
	List,
	PlusCircle,
	Tags,
	type LucideIcon,
	UserRound,
} from 'lucide-react';
import { auth } from '@/lib/auth';
import { getSessionUserId } from '@/lib/getSessionUserId';
import { prisma } from '@/lib/prisma';
import { formatCategoryLabel, type UserCategory } from '@/lib/categories';
import {
	ensureUserCategoriesInitialized,
	getUserCategoriesWithUsage,
} from '@/lib/category-service';

export const dynamic = 'force-dynamic';

type DashboardQr = {
	id: string;
	label: string | null;
	category: string;
	targetUrl: string;
	createdAt: Date;
	isPublic: boolean;
};

type StatCard = {
	label: string;
	value: number;
	helper: string;
	href?: string;
};

type QuickAction = {
	label: string;
	description: string;
	href: string;
	icon: LucideIcon;
	toneClassName: string;
	badgeClassName: string;
};

function formatDisplayValue(targetUrl: string) {
	return targetUrl.replace(/^https?:\/\//, '');
}

function formatDate(date: Date) {
	return new Intl.DateTimeFormat('en-GB', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	}).format(date);
}

function getCategoryLabel(
	category: string,
	categoryBySlug: Map<string, UserCategory>,
) {
	return categoryBySlug.get(category)?.name ?? formatCategoryLabel(category);
}

async function getDashboardData(userId: string) {
	const [totalQrCodes, publicQrCodes, recentQrs, categories] =
		await Promise.all([
			prisma.qrcodes.count({
				where: { userId },
			}),
			prisma.qrcodes.count({
				where: { userId, isPublic: true },
			}),
			prisma.qrcodes.findMany({
				where: { userId },
				orderBy: { createdAt: 'desc' },
				take: 6,
				select: {
					id: true,
					label: true,
					category: true,
					targetUrl: true,
					createdAt: true,
					isPublic: true,
				},
			}),
			getUserCategoriesWithUsage(userId),
		]);

	const categoryShortcuts = categories
		.filter((category) => category.isActive && category.qrCount > 0)
		.sort(
			(a, b) =>
				b.qrCount - a.qrCount ||
				a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }),
		)
		.slice(0, 6);

	return {
		totalQrCodes,
		publicQrCodes,
		privateQrCodes: totalQrCodes - publicQrCodes,
		totalCategories: categories.length,
		recentQrs: recentQrs satisfies DashboardQr[],
		categories,
		categoryShortcuts,
		categoryBySlug: new Map(
			categories.map((category) => [category.slug, category] as const),
		),
	};
}

export default async function DashboardPage() {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session?.user) redirect('/login?callbackURL=/dashboard');

	const userId = getSessionUserId(session);
	await ensureUserCategoriesInitialized(userId);

	const {
		totalQrCodes,
		publicQrCodes,
		privateQrCodes,
		totalCategories,
		recentQrs,
		categoryShortcuts,
		categoryBySlug,
	} = await getDashboardData(userId);

	let publicQrCodeHelper: string;
	if (publicQrCodes === 0) {
		publicQrCodeHelper =
			totalQrCodes === 0
				? 'Create a QR before sharing one.'
				: 'Use the Public toggle on a QR card.';
	} else {
		publicQrCodeHelper = 'Visible on hosted QR pages.';
	}

	const stats: StatCard[] = [
		{
			label: 'Total QR codes',
			value: totalQrCodes,
			helper:
				totalQrCodes === 0
					? 'Create your first saved QR.'
					: 'Saved in your library.',
			href: '/qr',
		},
		{
			label: 'Public QR codes',
			value: publicQrCodes,
			helper: publicQrCodeHelper,
			href: '/qr?visibility=public',
		},
		{
			label: 'Private QR codes',
			value: privateQrCodes,
			helper:
				privateQrCodes === 0 && totalQrCodes > 0
					? 'All saved QR codes are public.'
					: 'Only visible in your account.',
			href: '/qr?visibility=private',
		},
		{
			label: 'Categories',
			value: totalCategories,
			helper:
				totalCategories === 0
					? 'Build your dropdown list.'
					: 'Available in your category library.',
			href: '/categories',
		},
	];

	const quickActions: QuickAction[] = [
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

	return (
		<div className='min-h-screen bg-base-200 overflow-x-hidden'>
			<div className='mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 pb-24 sm:px-6 lg:px-8 lg:py-16'>
				<header className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<div className='space-y-2'>
						<p className='text-sm font-medium uppercase text-base-content/55'>
							Dashboard
						</p>
						<h1 className='text-3xl font-bold tracking-tight text-base-content sm:text-4xl'>
							Your QR control centre
						</h1>
						<p className='max-w-2xl text-sm leading-6 text-base-content/65 sm:text-base'>
							See what you have, jump back into recent QR codes, and manage the
							categories that keep your library usable.
						</p>
					</div>
				</header>

				<section
					className='grid gap-3 sm:grid-cols-2 lg:grid-cols-4'
					aria-label='QR library stats'>
					{stats.map((stat) => {
						const content = (
							<div className='h-full rounded-lg border border-base-content/10 bg-base-100 p-4 shadow-sm transition-colors hover:border-primary/40'>
								<p className='text-sm font-medium text-base-content/60'>
									{stat.label}
								</p>
								<p className='mt-2 text-3xl font-semibold text-base-content'>
									{stat.value}
								</p>
								<p className='mt-2 text-sm leading-5 text-base-content/60'>
									{stat.helper}
								</p>
							</div>
						);

						return stat.href ? (
							<Link key={stat.label} href={stat.href} className='block h-full'>
								{content}
							</Link>
						) : (
							<div key={stat.label}>{content}</div>
						);
					})}
				</section>

				<section
					className='grid gap-3 sm:grid-cols-2 lg:grid-cols-4'
					aria-label='Quick actions'>
					{quickActions.map((action) => {
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

				<section className='rounded-lg border border-base-content/10 bg-base-100 shadow-sm'>
					<div className='flex flex-col gap-5 p-5 sm:p-6'>
						<div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
							<div className='space-y-1'>
								<h2 className='text-2xl font-semibold text-base-content'>
									Recent QR codes
								</h2>
								<p className='text-sm leading-6 text-base-content/60'>
									Resume recent work without hunting through the full library.
								</p>
							</div>
							<Link href='/qr' className='btn btn-outline btn-sm'>
								View all
							</Link>
						</div>

						{recentQrs.length > 0 ? (
							<div className='divide-y divide-base-content/10'>
								{recentQrs.map((qr) => (
									<div
										key={qr.id}
										className='flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between'>
										<div className='min-w-0 space-y-2'>
											<div className='flex min-w-0 flex-wrap items-center gap-2'>
												<p className='max-w-full truncate text-base font-medium text-base-content'>
													{qr.label?.trim() || 'Untitled QR code'}
												</p>
												<span className='badge badge-sm badge-outline'>
													{getCategoryLabel(qr.category, categoryBySlug)}
												</span>
												<span
													className={`badge badge-sm ${
														qr.isPublic ? 'badge-primary' : 'badge-ghost'
													}`}>
													{qr.isPublic ? 'Public' : 'Private'}
												</span>
											</div>
											<p
												className='max-w-full truncate text-sm text-base-content/60'
												title={qr.targetUrl}>
												{formatDisplayValue(qr.targetUrl)}
											</p>
											<p className='text-xs text-base-content/45'>
												Created {formatDate(qr.createdAt)}
											</p>
										</div>
										<Link
											href={`/qr?edit=${encodeURIComponent(qr.id)}`}
											className='btn btn-outline btn-sm sm:shrink-0'>
											View or edit
										</Link>
									</div>
								))}
							</div>
						) : (
							<div className='rounded-lg border border-dashed border-base-content/20 bg-base-200/50 p-5'>
								<div className='max-w-md space-y-3'>
									<h3 className='text-lg font-semibold text-base-content'>
										No QR codes yet
									</h3>
									<p className='text-sm leading-6 text-base-content/65'>
										Create and save your first QR code, then it will appear here
										for quick access.
									</p>
									<Link href='/qr/new' className='btn btn-primary btn-sm'>
										Create a QR code
									</Link>
								</div>
							</div>
						)}
					</div>
				</section>

				<section className='rounded-lg border border-base-content/10 bg-base-100 shadow-sm'>
					<div className='flex flex-col gap-5 p-5 sm:p-6'>
						<div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
							<div className='space-y-1'>
								<h2 className='text-2xl font-semibold text-base-content'>
									Category shortcuts
								</h2>
								<p className='text-sm leading-6 text-base-content/60'>
									Jump straight to the categories that already contain QR codes.
								</p>
							</div>
							<Link href='/categories' className='btn btn-outline btn-sm'>
								Manage categories
							</Link>
						</div>

						{categoryShortcuts.length > 0 ? (
							<div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
								{categoryShortcuts.map((category) => (
									<Link
										key={category.id}
										href={`/qr?category=${encodeURIComponent(category.slug)}`}
										className='rounded-lg border border-base-content/10 bg-base-200/50 p-4 transition-colors hover:border-primary/40'>
										<div className='flex items-start justify-between gap-3'>
											<div className='min-w-0'>
												<p className='truncate text-base font-semibold text-base-content'>
													{category.name}
												</p>
												<p className='mt-1 text-sm text-base-content/60'>
													{category.qrCount === 1
														? '1 QR code'
														: `${category.qrCount} QR codes`}
												</p>
											</div>
											<span className='badge badge-primary badge-sm'>View</span>
										</div>
									</Link>
								))}
							</div>
						) : (
							<div className='rounded-lg border border-dashed border-base-content/20 bg-base-200/50 p-5'>
								<div className='max-w-2xl space-y-3'>
									<h3 className='text-lg font-semibold text-base-content'>
										No category shortcuts yet
									</h3>
									<p className='text-sm leading-6 text-base-content/65'>
										{totalQrCodes === 0
											? 'Create a QR code and choose a category to build useful shortcuts here.'
											: 'Assign categories to your QR codes, then your most useful category links will appear here.'}
									</p>
									<div className='flex flex-col gap-2 sm:flex-row'>
										<Link href='/qr/new' className='btn btn-primary btn-sm'>
											Create QR
										</Link>
										<Link href='/categories' className='btn btn-outline btn-sm'>
											Manage categories
										</Link>
									</div>
								</div>
							</div>
						)}
					</div>
				</section>
			</div>
		</div>
	);
}
