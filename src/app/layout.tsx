import React from 'react';
import './global.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Analytics } from '@vercel/analytics/next';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';

export default async function DashboardLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	const session = await auth.api.getSession({ headers: await headers() });

	return (
		<html lang='en' data-theme='dracula'>
			<body>
				<Navbar initialSession={session} />
				<main className='w-full overflow-x-hidden pt-12'>{children}</main>
				<Analytics />
			</body>
		</html>
	);
}
