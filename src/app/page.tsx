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

const libraryGroups = ['Business', 'Personal', 'Work'] as const;

const featureCards = [
	{
		kicker: 'Create fast',
		title: 'Start useful QR codes without friction',
		description:
			'Make QR codes quickly for menus, forms, review links, contact pages and everyday sharing.',
	},
	{
		kicker: 'Keep organised',
		title: 'Store labels and categories together',
		description:
			'Keep your QR library tidy so repeat-use codes stay easy to browse and manage.',
	},
	{
		kicker: 'Reuse anytime',
		title: 'Bring saved codes back when you need them',
		description:
			'Open existing QR codes again for printing, sharing, updating or reusing across different jobs.',
	},
	{
		kicker: 'Stay ready',
		title: 'Avoid rebuilding the same QR twice',
		description:
			'Keep recurring business, event and personal QR codes in one place instead of starting over.',
	},
] as const;

const howItWorksSteps = [
	{
		step: '01',
		title: 'Create',
		description:
			'Generate the QR you need for a menu, link, form, handout or everyday task.',
	},
	{
		step: '02',
		title: 'Save to library',
		description:
			'Keep it labelled and grouped by purpose so it stays easy to find later.',
	},
	{
		step: '03',
		title: 'Reuse anytime',
		description:
			'Open it again when you need to print, share, update or bring it back into use.',
	},
] as const;

const useCases = [
	{
		marker: 'MN',
		title: 'Menus and table links',
		description: 'Keep service-ready menu QR codes available for reprints and table updates.',
	},
	{
		marker: 'RV',
		title: 'Review requests',
		description: 'Save review links once and reuse them across signs, cards and follow-up materials.',
	},
	{
		marker: 'WF',
		title: 'Wi-Fi sharing',
		description: 'Store home, guest or office Wi-Fi QR codes so they are always easy to share again.',
	},
	{
		marker: 'CT',
		title: 'Contact and profile links',
		description: 'Keep profile, vCard and contact-page QR codes ready for networking and handouts.',
	},
	{
		marker: 'EV',
		title: 'Events and handouts',
		description: 'Reuse QR codes for schedules, check-ins, forms and printed event materials.',
	},
	{
		marker: 'PF',
		title: 'Portfolio and business materials',
		description: 'Keep business links, portfolios and landing pages organised for repeat use.',
	},
] as const;

const valuePoints = [
	'Save the first version',
	'Find it by purpose',
	'Bring it back quickly',
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
			<div className='mx-auto flex max-w-6xl flex-col gap-14 px-4 py-12 sm:px-6 sm:py-16 lg:gap-16 lg:px-8 lg:py-24'>
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
							<p className='text-sm font-medium uppercase tracking-[0.2em] text-base-content/60'>
								QrPilot
							</p>
						</div>

						<div className='space-y-4'>
							<h1 className='max-w-2xl text-4xl font-bold tracking-tight text-base-content sm:text-5xl lg:text-6xl'>
								Build your QR code library, not just one-off codes
							</h1>
							<p className='max-w-2xl text-base leading-8 text-base-content/70 sm:text-lg'>
								Most QR tools end at generation. QrPilot is built for what
								happens next: saving the code, organising it by purpose, and
								pulling it back up when menus, review links, Wi-Fi access,
								event handouts or business pages need to go live again.
							</p>
						</div>

						<div className='flex flex-col gap-3 sm:flex-row'>
							<Link href='/qr/new' className='btn btn-primary btn-lg'>
								Generate a QR Code
							</Link>
							<Link
								href='/#how-qrpilot-works'
								className='btn btn-outline btn-lg'>
								See how QrPilot works
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

					<div id='library-preview' className='w-full'>
						<div className='card border border-base-content/10 bg-base-100 shadow-2xl shadow-black/20'>
							<div className='card-body gap-6 p-5 sm:p-6'>
								<div className='flex items-center justify-between gap-4'>
									<div>
										<p className='text-sm font-semibold text-base-content'>
											QR library preview
										</p>
										<p className='text-sm leading-6 text-base-content/60'>
											A saved library keeps repeat-use codes close at hand
											instead of lost in the next tab or document.
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

								<div className='rounded-2xl border border-base-content/10 bg-base-200/60 p-4'>
									<div className='space-y-3'>
										<div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
											<div>
												<p className='text-sm font-medium text-base-content'>
													Built for repeat-use work
												</p>
												<p className='text-sm leading-6 text-base-content/60'>
													Keep useful QR codes grouped, named and ready for the
													next print run, update or handout.
												</p>
											</div>
											<span className='badge badge-primary badge-outline whitespace-nowrap'>
												3 categories
											</span>
										</div>

										<div className='flex flex-wrap gap-2'>
											{libraryGroups.map((group) => (
												<span
													key={group}
													className='badge badge-neutral badge-sm border-base-content/10'
												>
													{group}
												</span>
											))}
										</div>
									</div>
								</div>

								<p className='text-sm text-base-content/60'>
									Log in to view and manage your own saved QR codes.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section
					id='how-qrpilot-works'
					className='grid gap-8 border-y border-base-content/10 py-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-12'
				>
					<div className='max-w-xl space-y-4'>
						<p className='text-sm font-medium uppercase tracking-[0.18em] text-base-content/55'>
							How QrPilot works
						</p>
						<h2 className='text-3xl font-bold tracking-tight text-base-content sm:text-4xl'>
							Three steps from first code to repeat use
						</h2>
						<p className='text-base leading-7 text-base-content/65 sm:text-lg'>
							The process stays simple, but the useful part is what comes
							after creation: keeping the QR somewhere you can actually come
							back to.
						</p>
					</div>

					<div className='grid gap-5 sm:grid-cols-3'>
						{howItWorksSteps.map((step) => (
							<div
								key={step.title}
								className='border-t border-base-content/10 pt-4'
							>
								<div className='space-y-3'>
									<p className='text-xs font-medium uppercase tracking-[0.18em] text-base-content/45'>
										{step.step}
									</p>
									<h3 className='text-lg font-semibold text-base-content'>
										{step.title}
									</h3>
									<p className='text-sm leading-7 text-base-content/65'>
										{step.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>

				<section
					id='why-qrpilot'
					className='grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-12'
				>
					<div className='max-w-xl space-y-4'>
						<p className='text-sm font-medium uppercase tracking-[0.18em] text-base-content/55'>
							Beyond generation
						</p>
						<h2 className='text-3xl font-bold tracking-tight text-base-content sm:text-4xl'>
							The useful part starts after the first QR
						</h2>
						<p className='text-base leading-7 text-base-content/65 sm:text-lg'>
							Generating the code is the quick part. The time-saving part is
							having it labelled, stored and ready when the same job comes
							round again.
						</p>
					</div>

					<div className='grid gap-4 sm:grid-cols-2'>
						{featureCards.map((feature) => (
							<div
								key={feature.title}
								className='card border border-base-content/10 bg-base-100 shadow-lg shadow-black/10'
							>
								<div className='card-body gap-4'>
									<span className='badge badge-primary badge-outline w-fit'>
										{feature.kicker}
									</span>
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

				<section className='rounded-[2rem] border border-base-content/10 bg-base-100 px-6 py-8 shadow-xl shadow-black/10 sm:px-8 sm:py-10 lg:px-10'>
					<div className='grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start'>
						<div className='max-w-xl space-y-4'>
							<p className='text-sm font-medium uppercase tracking-[0.18em] text-base-content/55'>
								Where it earns its place
							</p>
							<h2 className='text-3xl font-bold tracking-tight text-base-content sm:text-4xl'>
								Useful anywhere the same QR needs to come back again
							</h2>
							<p className='text-base leading-7 text-base-content/65 sm:text-lg'>
								Menus, handouts, Wi-Fi cards and review prompts all get easier
								when the QR already exists and stays organised.
							</p>
						</div>

						<div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
							{useCases.map((useCase) => (
								<div
									key={useCase.title}
									className='rounded-2xl border border-base-content/10 bg-base-200/45 p-4'
								>
									<div className='flex items-start gap-4'>
										<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary'>
											{useCase.marker}
										</div>
										<div className='space-y-1'>
											<h3 className='text-base font-semibold text-base-content'>
												{useCase.title}
											</h3>
											<p className='text-sm leading-6 text-base-content/65'>
												{useCase.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className='rounded-[2rem] border border-base-content/10 bg-base-100 px-6 py-10 shadow-2xl shadow-black/15 sm:px-8 lg:px-12 lg:py-14'>
					<div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
						<div className='max-w-2xl space-y-3'>
							<p className='text-sm font-medium uppercase tracking-[0.18em] text-base-content/55'>
								Keep it ready
							</p>
							<h2 className='text-3xl font-bold tracking-tight text-base-content sm:text-4xl'>
								Start your QR library
							</h2>
							<p className='text-base leading-7 text-base-content/65 sm:text-lg'>
								Create a code once, keep it organised, and bring it back when
								you need it again.
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
