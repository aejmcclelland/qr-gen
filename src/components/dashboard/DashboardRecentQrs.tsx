import Link from 'next/link';

export type RecentDashboardQr = {
	id: string;
	label: string | null;
	categoryLabel: string;
	targetUrl: string;
	createdAt: Date;
	isPublic: boolean;
};

type DashboardRecentQrsProps = {
	readonly qrs: RecentDashboardQr[];
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

export function DashboardRecentQrs({ qrs }: DashboardRecentQrsProps) {
	return (
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

				{qrs.length > 0 ? (
					<div className='divide-y divide-base-content/10'>
						{qrs.map((qr) => (
							<div
								key={qr.id}
								className='flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between'>
								<div className='min-w-0 space-y-2'>
									<div className='flex min-w-0 flex-wrap items-center gap-2'>
										<p className='max-w-full truncate text-base font-medium text-base-content'>
											{qr.label?.trim() || 'Untitled QR code'}
										</p>
										<span className='badge badge-sm badge-outline'>
											{qr.categoryLabel}
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
								Create and save your first QR code, then it will appear here for
								quick access.
							</p>
							<Link href='/qr/new' className='btn btn-primary btn-sm'>
								Create a QR code
							</Link>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
