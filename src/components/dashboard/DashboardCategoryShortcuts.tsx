import Link from 'next/link';

export type DashboardCategoryShortcut = {
	id: string;
	name: string;
	slug: string;
	qrCount: number;
};

type DashboardCategoryShortcutsProps = {
	readonly categories: DashboardCategoryShortcut[];
	readonly totalQrCodes: number;
};

export function DashboardCategoryShortcuts({
	categories,
	totalQrCodes,
}: DashboardCategoryShortcutsProps) {
	return (
		<section className='rounded-lg border border-base-content/10 bg-base-100 shadow-sm'>
			<div className='flex flex-col gap-5 p-5 sm:p-6'>
				<div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
					<div className='space-y-1'>
						<h2 className='text-2xl font-semibold text-base-content'>
							Category shortcuts
						</h2>
						<p className='text-sm leading-6 text-base-content/60'>
							Open active categories that already contain QR codes.
						</p>
					</div>
					<Link href='/categories' className='btn btn-outline btn-sm'>
						Manage categories
					</Link>
				</div>

				{categories.length > 0 ? (
					<div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
						{categories.map((category) => (
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
									<span className='badge badge-primary badge-sm'>Open</span>
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
									? 'Create a QR code and choose a category to start building shortcuts.'
									: 'Shortcuts appear once active categories contain QR codes.'}
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
	);
}
