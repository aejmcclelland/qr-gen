// src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
	return (
		<main className='min-h-dvh bg-base-200 px-4 py-10 flex items-center justify-center'>
			<div className='w-full max-w-md'>
				<div className='card bg-base-100 shadow-xl'>
					<div className='card-body items-center text-center gap-3'>
						<h1 className='text-lg font-semibold'>Page not found</h1>
						<p className='text-sm text-base-content/70'>
							That link doesn’t exist or may have moved.
						</p>

						<div className='mt-2 flex flex-col gap-2 w-full'>
							<Link href='/' className='btn btn-primary btn-sm w-full'>
								Back to QrPilot
							</Link>
							<a
								href='https://qrpilot.app'
								target='_blank'
								rel='noopener noreferrer'
								className='text-xs text-base-content/60 hover:text-base-content hover:underline text-center'>
								Learn more at QrPilot.app
							</a>
						</div>
					</div>
				</div>

				<p className='text-center text-xs text-base-content/50 mt-4'>
					Powered by QrPilot.app
				</p>
			</div>
		</main>
	);
}
