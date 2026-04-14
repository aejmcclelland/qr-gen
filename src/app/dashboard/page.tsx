import Link from 'next/link';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { getSessionUserId } from '@/lib/getSessionUserId';
import { prisma } from '@/lib/prisma';
import { formatCategoryLabel } from '@/lib/categories';
import { ensureUserCategoriesInitialized } from '@/lib/category-service';

export const dynamic = 'force-dynamic';

type DashboardQr = {
	id: string;
	label: string | null;
	category: string;
	targetUrl: string;
};

function formatDisplayValue(targetUrl: string) {
	return targetUrl.replace(/^https?:\/\//, '');
}

async function getDashboardData(userId: string) {
	const [totalQrCodes, enabledCategoryCount, recentQrs] = await Promise.all([
		prisma.qrcodes.count({
			where: { userId },
		}),
		prisma.category.count({
			where: { userId, isActive: true },
		}),
		prisma.qrcodes.findMany({
			where: { userId },
			orderBy: { createdAt: 'desc' },
			take: 5,
			select: {
				id: true,
				label: true,
				category: true,
				targetUrl: true,
			},
		}),
	]);

	return {
		totalQrCodes,
		categoryCount: enabledCategoryCount,
		recentQrs: recentQrs satisfies DashboardQr[],
	};
}

export default async function DashboardPage() {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session?.user) redirect('/login?callbackURL=/dashboard');

	const userId = getSessionUserId(session);
	await ensureUserCategoriesInitialized(userId);
	const { totalQrCodes, categoryCount, recentQrs } =
		await getDashboardData(userId);

	return (
		<div className='min-h-screen bg-base-200 overflow-x-hidden'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 pb-24 sm:px-6 lg:gap-10 lg:px-8 lg:py-16 lg:pb-24'>
				<section className='rounded-4xl border border-base-content/10 bg-base-100 px-6 py-8 shadow-xl shadow-black/10 sm:px-8'>
					<div className='max-w-3xl space-y-5'>
						<div className='space-y-2'>
							<p className='text-sm font-medium uppercase tracking-[0.2em] text-base-content/55'>
								Dashboard
							</p>
							<h1 className='text-3xl font-bold tracking-tight text-base-content sm:text-4xl'>
								Welcome back
							</h1>
							<p className='max-w-2xl text-base leading-7 text-base-content/70 sm:text-lg'>
								Create new QR codes, manage saved ones, and keep your library
								organised from one place.
							</p>
						</div>

						<div className='flex flex-col gap-3 sm:flex-row'>
							<Link href='/qr/new' className='btn btn-primary'>
								Create a QR Code
							</Link>
							<Link href='/qr' className='btn btn-outline'>
								View Saved QR Codes
							</Link>
						</div>
					</div>
				</section>

				<section className='grid gap-4 md:grid-cols-3'>
					<div className='card border border-base-content/10 bg-base-100 shadow-sm'>
						<div className='card-body gap-2'>
							<p className='text-sm font-medium text-base-content/60'>
								Total QR Codes
							</p>
							<p className='text-3xl font-semibold text-base-content'>
								{totalQrCodes}
							</p>
							<p className='text-sm text-base-content/60'>
								Saved in your library
							</p>
						</div>
					</div>

					<div className='card border border-base-content/10 bg-base-100 shadow-sm'>
						<div className='card-body gap-2'>
							<p className='text-sm font-medium text-base-content/60'>
								Enabled categories
							</p>
							<p className='text-3xl font-semibold text-base-content'>
								{categoryCount}
							</p>
							<p className='text-sm text-base-content/60'>
								Visible in your QR forms
							</p>
						</div>
					</div>

					<Link
						href='/qr/new'
						className='card border border-base-content/10 bg-base-100 shadow-sm transition-colors hover:border-primary/40'>
						<div className='card-body gap-2'>
							<p className='text-sm font-medium text-base-content/60'>
								Quick start
							</p>
							<p className='text-3xl font-semibold text-primary'>New QR</p>
							<p className='text-sm text-base-content/60'>
								Create and save a new code
							</p>
						</div>
					</Link>
				</section>

				<section className='grid gap-6 lg:grid-cols-[1.45fr_0.85fr]'>
					<div className='card border border-base-content/10 bg-base-100 shadow-lg shadow-black/10'>
						<div className='card-body gap-6'>
							<div className='space-y-2'>
								<h2 className='text-2xl font-semibold text-base-content'>
									Recent QR Codes
								</h2>
								<p className='text-sm leading-6 text-base-content/60'>
									Your latest saved QR codes appear here for quick access.
								</p>
							</div>

							{recentQrs.length > 0 ? (
								<>
									<div className='space-y-3'>
										{recentQrs.map((qr: DashboardQr) => (
											<div
												key={qr.id}
												className='rounded-2xl border border-base-content/10 bg-base-200/50 px-4 py-4 transition-colors hover:border-base-content/20'>
												<div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
													<div className='min-w-0 max-w-full space-y-2 overflow-hidden'>
														<p className='block max-w-full truncate text-base font-medium text-base-content'>
															{qr.label?.trim() || 'Untitled QR Code'}
														</p>
														<p className='block max-w-full text-sm break-all text-base-content/60 sm:truncate'>
															{formatDisplayValue(qr.targetUrl)}
														</p>
													</div>
													<span className='badge badge-neutral badge-sm border-base-content/10'>
														{formatCategoryLabel(qr.category)}
													</span>
												</div>
											</div>
										))}
									</div>

									<div>
										<Link href='/qr' className='btn btn-outline btn-sm'>
											View all saved QR Codes
										</Link>
									</div>
								</>
							) : (
								<div className='rounded-2xl border border-dashed border-base-content/20 bg-base-200/40 p-6 sm:p-8'>
									<div className='max-w-md space-y-4'>
										<div className='space-y-2'>
											<h3 className='text-xl font-semibold text-base-content'>
												No QR codes yet
											</h3>
											<p className='text-sm leading-7 text-base-content/65'>
												You have not created any QR codes yet. Start by creating
												your first one.
											</p>
										</div>

										<Link href='/qr/new' className='btn btn-primary btn-sm'>
											Create your first QR Code
										</Link>
									</div>
								</div>
							)}
						</div>
					</div>

					<aside className='card border border-base-content/10 bg-base-100 shadow-sm'>
						<div className='card-body gap-5'>
							<div className='space-y-2'>
								<h2 className='text-xl font-semibold text-base-content'>
									Quick Actions
								</h2>
								<p className='text-sm leading-6 text-base-content/60'>
									Jump straight into the parts of QrPilot you use most.
								</p>
							</div>

							<div className='flex flex-col gap-3'>
								<Link href='/qr/new' className='btn btn-primary w-full'>
									Create a QR Code
								</Link>
								<Link href='/qr' className='btn btn-outline w-full'>
									View Saved QR Codes
								</Link>
								<Link href='/categories' className='btn btn-outline w-full'>
									Manage Categories
								</Link>
							</div>
						</div>
					</aside>
				</section>

				<section className='card border border-base-content/10 bg-base-100 shadow-sm'>
					<div className='card-body gap-6'>
						<div className='space-y-2'>
							<h2 className='text-2xl font-semibold text-base-content'>
								Keep your QR library organised
							</h2>
							<p className='max-w-3xl text-sm leading-7 text-base-content/65 sm:text-base'>
								As your library grows, categories make it easier to find and
								reuse the right QR code.
							</p>
						</div>

						<div className='grid gap-3 sm:grid-cols-2'>
							<div className='rounded-2xl border border-base-content/10 bg-base-200/50 px-4 py-4 text-sm font-medium text-base-content'>
								Group QR codes by purpose
							</div>
							<div className='rounded-2xl border border-base-content/10 bg-base-200/50 px-4 py-4 text-sm font-medium text-base-content'>
								Find saved codes more quickly
							</div>
						</div>

						<div>
							<Link href='/categories' className='btn btn-outline'>
								Manage categories
							</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
