import React from 'react';
import './global.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Analytics } from '@vercel/analytics/next';

export default function DashboardLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<html lang='en' data-theme='dracula'>
			<body>
				<Navbar />
				<main className='w-full overflow-x-hidden pt-12'>{children}</main>
				<Analytics />
			</body>
		</html>
	);
}
