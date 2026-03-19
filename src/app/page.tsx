import Link from 'next/link';

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

const features = [
	{
		title: 'Generate',
		description:
			'Create QR codes quickly for websites, menus, contact pages, forms, and more.',
	},
	{
		title: 'Organise',
		description:
			'Group your QR codes by category so they stay easy to find and manage.',
	},
	{
		title: 'Manage',
		description:
			'Keep your codes stored in one place instead of recreating them every time.',
	},
	{
		title: 'Reuse',
		description:
			'Come back to saved QR codes whenever you need to print, share, or update your workflow.',
	},
] as const;

const useCases = [
	'Menus and table links',
	'Review requests',
	'Wi-Fi sharing',
	'Contact and profile links',
	'Events and handouts',
	'Portfolio and business materials',
] as const;

const valuePoints = [
	'Create in seconds',
	'Organise by purpose',
	'Reuse anytime',
] as const;

function MockQrSquare() {
	const cells = [
		true,
		true,
		false,
		true,
		false,
		true,
		false,
		true,
		false,
		true,
		false,
		true,
		true,
		false,
		false,
		true,
		false,
		true,
		true,
		false,
		false,
		true,
		false,
		true,
		true,
	];

	return (
		<div className='grid h-16 w-16 shrink-0 grid-cols-5 gap-1 rounded-2xl border border-base-content/10 bg-base-300 p-2 shadow-inner shadow-black/10'>
			{cells.map((filled, index) => (
				<div
					key={index}
					className={
						filled
							? 'rounded-[2px] bg-base-content/80'
							: 'rounded-[2px] bg-base-100/80'
					}
				/>
			))}
		</div>
	);
}

export default function HomePage() {
	return (
		<div className='min-h-screen bg-base-200'>
			<div className='mx-auto flex max-w-6xl flex-col gap-20 px-4 py-12 sm:px-6 sm:py-16 lg:gap-24 lg:px-8 lg:py-24'>
				<section className='grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16'>
					<div className='space-y-8'>
						<div className='flex items-center gap-3'>
							<img
								src='/qrpilot-app/portfolio/jumbo-qrpilot.svg'
								alt='QrPilot logo'
								width={44}
								height={44}
								className='h-11 w-11 rounded-xl object-contain'
							/>
							<div>
								<p className='text-sm font-medium uppercase tracking-[0.2em] text-base-content/60'>
									QrPilot
								</p>
							</div>
						</div>

						<div className='space-y-4'>
							<h1 className='max-w-2xl text-4xl font-bold tracking-tight text-base-content sm:text-5xl lg:text-6xl'>
								Generate, organise and manage QR codes in one place
							</h1>
							<p className='max-w-2xl text-base leading-8 text-base-content/70 sm:text-lg'>
								QrPilot helps you create QR codes, keep them organised,
								and reuse them whenever you need them &mdash; whether for
								business, events, menus, links, or everyday sharing.
							</p>
						</div>

						<div className='flex flex-col gap-3 sm:flex-row'>
							<Link href='/qr/new' className='btn btn-primary btn-lg'>
								Generate a QR Code
							</Link>
							<Link href='/qr' className='btn btn-outline btn-lg'>
								View Saved QR Codes
							</Link>
						</div>

						<div className='grid gap-3 pt-2 sm:grid-cols-3'>
							{valuePoints.map((point) => (
								<div
									key={point}
									className='rounded-2xl border border-base-content/10 bg-base-100/60 px-4 py-3 text-sm font-medium text-base-content/75 shadow-sm'
								>
									{point}
								</div>
							))}
						</div>
					</div>

					<div className='w-full'>
						<div className='card border border-base-content/10 bg-base-100 shadow-2xl shadow-black/20'>
							<div className='card-body gap-6 p-5 sm:p-6'>
								<div className='flex items-center justify-between gap-4'>
									<div>
										<p className='text-sm font-semibold text-base-content'>
											QR library preview
										</p>
										<p className='text-sm text-base-content/60'>
											See how saved QR codes can be organised and reused in
											QrPilot.
										</p>
									</div>
									<span className='badge badge-primary badge-outline'>
										Demo
									</span>
								</div>

								<div className='space-y-4'>
									{previewItems.map((item) => (
										<div
											key={item.name}
											className='flex items-center gap-4 rounded-2xl border border-base-content/10 bg-base-200/70 p-4'
										>
											<MockQrSquare />
											<div className='min-w-0 flex-1 space-y-2'>
												<div className='flex flex-wrap items-center gap-2'>
													<h3 className='text-base font-semibold text-base-content'>
														{item.name}
													</h3>
													<span className='badge badge-neutral badge-sm border-base-content/10'>
														{item.category}
													</span>
												</div>
												<p className='truncate text-sm text-base-content/60'>
													{item.detail}
												</p>
											</div>
										</div>
									))}
								</div>

								<p className='text-sm text-base-content/60'>
									Log in to view and manage your own saved QR codes.
								</p>

								<div className='rounded-2xl border border-base-content/10 bg-base-200/60 p-4'>
									<div className='flex items-center justify-between gap-3'>
										<div>
											<p className='text-sm font-medium text-base-content'>
												Keep your QR library tidy
											</p>
											<p className='text-sm text-base-content/60'>
												Sort by purpose and find what you need quickly.
											</p>
										</div>
										<div className='stats border border-base-content/10 bg-base-100 shadow-sm'>
											<div className='stat px-4 py-3'>
												<div className='stat-title text-xs'>Categories</div>
												<div className='stat-value text-2xl text-primary'>
													3
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='space-y-8'>
					<div className='max-w-2xl space-y-3'>
						<h2 className='text-3xl font-bold tracking-tight text-base-content sm:text-4xl'>
							Everything you need to work with QR codes
						</h2>
						<p className='text-base leading-7 text-base-content/65 sm:text-lg'>
							Built for people who need more than a one-off QR generator.
						</p>
					</div>

					<div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
						{features.map((feature) => (
							<div
								key={feature.title}
								className='card border border-base-content/10 bg-base-100 shadow-lg shadow-black/10'
							>
								<div className='card-body gap-4'>
									<div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary'>
										<span className='text-lg font-semibold'>
											{feature.title.slice(0, 1)}
										</span>
									</div>
									<div className='space-y-2'>
										<h3 className='text-xl font-semibold text-base-content'>
											{feature.title}
										</h3>
										<p className='text-sm leading-7 text-base-content/70'>
											{feature.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className='space-y-8'>
					<div className='max-w-3xl space-y-3'>
						<h2 className='text-3xl font-bold tracking-tight text-base-content sm:text-4xl'>
							Made for real-world use
						</h2>
						<p className='text-base leading-7 text-base-content/65 sm:text-lg'>
							QrPilot is useful anywhere you need quick access, repeat
							sharing, or organised QR code management.
						</p>
					</div>

					<div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
						{useCases.map((useCase) => (
							<div
								key={useCase}
								className='rounded-2xl border border-base-content/10 bg-base-100 px-5 py-5 text-base font-medium text-base-content shadow-md shadow-black/10'
							>
								{useCase}
							</div>
						))}
					</div>
				</section>

				<section className='rounded-[2rem] border border-base-content/10 bg-base-100 px-6 py-10 shadow-2xl shadow-black/15 sm:px-8 lg:px-12 lg:py-14'>
					<div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
						<div className='max-w-2xl space-y-3'>
							<h2 className='text-3xl font-bold tracking-tight text-base-content sm:text-4xl'>
								Start building your QR library today
							</h2>
							<p className='text-base leading-7 text-base-content/65 sm:text-lg'>
								Create your first QR code, keep it organised, and make it
								easier to reuse whenever you need it.
							</p>
						</div>

						<div className='flex flex-col gap-3 sm:flex-row lg:shrink-0'>
							<Link href='/qr/new' className='btn btn-primary btn-lg'>
								Generate a QR Code
							</Link>
							<Link href='/qr' className='btn btn-outline btn-lg'>
								View Saved QR Codes
							</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
