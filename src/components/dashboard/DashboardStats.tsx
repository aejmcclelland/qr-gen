import Link from 'next/link';

type DashboardStatsProps = {
	readonly totalQrCodes: number;
	readonly publicQrCodes: number;
	readonly privateQrCodes: number;
	readonly totalCategories: number;
};

type DashboardStat = {
	label: string;
	value: number;
	helper: string;
	href: string;
};

function getPublicQrCodeHelper(totalQrCodes: number, publicQrCodes: number) {
	if (publicQrCodes > 0) return 'Visible on hosted QR pages.';

	return totalQrCodes === 0
		? 'Create a QR before sharing one.'
		: 'Use the Public toggle on a QR card.';
}

function getDashboardStats({
	totalQrCodes,
	publicQrCodes,
	privateQrCodes,
	totalCategories,
}: DashboardStatsProps): DashboardStat[] {
	return [
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
			helper: getPublicQrCodeHelper(totalQrCodes, publicQrCodes),
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
}

export function DashboardStats(props: DashboardStatsProps) {
	const stats = getDashboardStats(props);

	return (
		<section
			className='grid gap-3 sm:grid-cols-2 lg:grid-cols-4'
			aria-label='QR library stats'>
			{stats.map((stat) => (
				<Link key={stat.label} href={stat.href} className='block h-full'>
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
				</Link>
			))}
		</section>
	);
}
