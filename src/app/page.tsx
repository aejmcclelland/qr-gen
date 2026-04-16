import Link from 'next/link';
import Image from 'next/image';

const coreFeatures = [
	{
		title: 'Create and save QR codes',
		description:
			'Make QR codes for menus, forms, review links, Wi-Fi access and everyday sharing, then keep them saved in one place.',
	},
	{
		title: 'Organise with categories',
		description:
			'Group saved QR codes by purpose so business, event, work and personal links stay easy to find.',
	},
	{
		title: 'Share and download easily',
		description:
			'Open saved QR codes again whenever you need to share, print, export or update them without starting over.',
	},
] as const;

const previewItems = [
	{
		name: 'Sunday Menu',
		category: 'Business',
		detail: 'qrpilot.app/menu/sunday',
	},
	{
		name: 'Wi-Fi Access',
		category: 'Personal',
		detail: 'qrpilot.app/wifi/home',
	},
	{
		name: 'Portfolio Link',
		category: 'Work',
		detail: 'qrpilot.app/p/andrew',
	},
] as const;

const libraryGroups = ['Business', 'Personal', 'Work'] as const;

export default function HomePage() {
	return (
		<div className='min-h-screen bg-base-200'>
			<div className='mx-auto flex max-w-6xl flex-col gap-14 px-4 py-12 sm:px-6 sm:py-16 lg:gap-18 lg:px-8 lg:py-24'>
				<section className='grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14'>
					<div className='space-y-6'>
						<div className='space-y-4'>
							<h1 className='max-w-2xl text-4xl font-bold tracking-tight text-base-content sm:text-5xl lg:text-6xl'>
								Build a QR library, not just one-off codes
							</h1>
							<p className='max-w-2xl text-base leading-8 text-base-content/70 sm:text-lg'>
								QrPilot helps you create QR codes, keep them organised by
								category, and bring them back whenever you need to share, print,
								download or reuse them.
							</p>
						</div>

						<div className='flex flex-col gap-3 sm:flex-row'>
							<Link href='/qr/new' className='btn btn-primary btn-lg'>
								Generate a QR Code
							</Link>
							<Link href='#product-preview' className='btn btn-outline btn-lg'>
								See how it works
							</Link>
						</div>
					</div>

					<div className='card border border-base-content/10 bg-base-100 shadow-2xl shadow-black/15'>
						<div className='card-body gap-5 p-5 sm:p-6'>
							<div className='flex items-center justify-between gap-4'>
								<div>
									<p className='text-sm font-semibold text-base-content'>
										QR library preview
									</p>
									<p className='text-sm leading-6 text-base-content/60'>
										Saved QR codes stay ready to open again.
									</p>
								</div>
								<span className='badge badge-primary badge-outline'>Demo</span>
							</div>

							<div className='space-y-4'>
								{previewItems.map((item) => (
									<div
										key={item.name}
										className='flex items-start gap-4 rounded-2xl border border-base-content/10 bg-base-200/70 p-4'>
										<div className='relative h-16 w-16 shrink-0 rounded-xl p-1'>
											<Image
												src='/qr-code-homepage-demo.png'
												alt='Sample QR code preview'
												fill
												sizes='64px'
												className='object-contain'
											/>
										</div>
										<div className='min-w-0 flex-1 space-y-2'>
											<div className='flex flex-wrap items-center gap-2'>
												<h2 className='text-base font-semibold text-base-content'>
													{item.name}
												</h2>
												<span className='badge badge-neutral badge-sm border-base-content/10'>
													{item.category}
												</span>
											</div>
											<p className='text-sm break-all text-base-content/60 sm:truncate'>
												{item.detail}
											</p>
										</div>
									</div>
								))}
							</div>

							<div className='rounded-2xl border border-base-content/10 bg-base-200/60 p-4'>
								<div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
									<div>
										<p className='text-sm font-medium text-base-content'>
											Keep repeat-use QR codes organised
										</p>
										<p className='text-sm leading-6 text-base-content/60'>
											Open menus, Wi-Fi links and shared pages again without
											rebuilding them.
										</p>
									</div>
									<div className='flex flex-wrap gap-2'>
										{libraryGroups.map((group) => (
											<span
												key={group}
												className='badge badge-neutral badge-sm border-base-content/10'>
												{group}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='space-y-6'>
					<div className='max-w-2xl space-y-3'>
						<p className='text-sm font-medium uppercase tracking-[0.18em] text-base-content/55'>
							Core features
						</p>
						<h2 className='text-3xl font-bold tracking-tight text-base-content sm:text-4xl'>
							What QrPilot helps you do
						</h2>
					</div>

					<div className='grid gap-4 md:grid-cols-3'>
						{coreFeatures.map((feature) => (
							<div
								key={feature.title}
								className='card border border-base-content/10 bg-base-100 shadow-lg shadow-black/10'>
								<div className='card-body gap-3'>
									<h3 className='text-lg font-semibold text-base-content'>
										{feature.title}
									</h3>
									<p className='text-sm leading-7 text-base-content/70'>
										{feature.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>

				<section
					id='product-preview'
					className='rounded-4xl border border-base-content/10 bg-base-100 px-6 py-8 shadow-xl shadow-black/10 sm:px-8 sm:py-10 lg:px-10'>
					<div className='grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start'>
						<div className='max-w-xl space-y-4'>
							<p className='text-sm font-medium uppercase tracking-[0.18em] text-base-content/55'>
								Product preview
							</p>
							<h2 className='text-3xl font-bold tracking-tight text-base-content sm:text-4xl'>
								See how the QR library stays usable
							</h2>
							<p className='text-base leading-7 text-base-content/65 sm:text-lg'>
								QrPilot is built for the moments when the same QR needs to stay
								easy to find, update, download and reuse over time.
							</p>
						</div>

						<div className='rounded-3xl border border-base-content/10 bg-base-200/40 p-5'>
							<div className='space-y-4'>
								<div className='flex items-center justify-between gap-3'>
									<p className='text-sm font-semibold text-base-content'>
										Example library workflow
									</p>
									<span className='badge badge-primary badge-outline'>
										Saved + reusable
									</span>
								</div>

								<div className='space-y-3'>
									<div className='rounded-2xl border border-base-content/10 bg-base-100 p-4'>
										<p className='text-sm font-medium text-base-content'>
											Create once
										</p>
										<p className='mt-1 text-sm leading-6 text-base-content/60'>
											Generate a QR code for a menu, review page, event form or
											shared link.
										</p>
									</div>
									<div className='rounded-2xl border border-base-content/10 bg-base-100 p-4'>
										<p className='text-sm font-medium text-base-content'>
											Save and organise
										</p>
										<p className='mt-1 text-sm leading-6 text-base-content/60'>
											Keep it labelled and grouped so it stays easy to find
											later.
										</p>
									</div>
									<div className='rounded-2xl border border-base-content/10 bg-base-100 p-4'>
										<p className='text-sm font-medium text-base-content'>
											Open again when needed
										</p>
										<p className='mt-1 text-sm leading-6 text-base-content/60'>
											Return to the same QR for printing, downloading, sharing
											or updating.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='rounded-4xl border border-base-content/10 bg-base-100 px-6 py-10 shadow-2xl shadow-black/15 sm:px-8 lg:px-12 lg:py-14'>
					<div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
						<div className='max-w-2xl space-y-3'>
							<h2 className='text-3xl font-bold tracking-tight text-base-content sm:text-4xl'>
								Start your QR library
							</h2>
							<p className='text-base leading-7 text-base-content/65 sm:text-lg'>
								Create a QR code, keep it organised, and bring it back whenever
								you need it.
							</p>
						</div>

						<div className='flex flex-col gap-3 sm:flex-row lg:shrink-0'>
							<Link href='/qr/new' className='btn btn-primary btn-lg'>
								Generate a QR Code
							</Link>
							<Link href='/qr' className='btn btn-outline btn-lg'>
								Open the QR Library
							</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
