'use client';

import { useState } from 'react';
import QrListClient from '@/components/qr/QrListClient';
import { CategoryMultiFilter } from '@/components/qr/CategoryMultiFilter';
import type { QrClient } from '@/lib/qr-mapper';

type QrListSectionProps = {
	readonly initialQrs: QrClient[];
};

export function QrListSection({ initialQrs }: QrListSectionProps) {
	const [activeCategories, setActiveCategories] = useState<string[]>([]);
	const availableCategories = Array.from(
		new Set(initialQrs.map((qr) => qr.category)),
	);

	return (
		<section className='space-y-4 min-w-0'>
			<div className='mb-6 flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
				<div className='min-w-0 pt-10'>
					<h1 className='text-3xl font-bold'>Your QR Codes</h1>
				</div>

				<div className='min-w-0 w-full sm:w-64 sm:shrink-0'>
					<CategoryMultiFilter
						value={activeCategories}
						onChange={setActiveCategories}
						availableCategories={availableCategories}
					/>
				</div>
			</div>

			<QrListClient
				initialQrs={initialQrs}
				activeCategories={activeCategories}
			/>
		</section>
	);
}
