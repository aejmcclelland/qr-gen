'use client';

import { useState } from 'react';
import QrListClient from '@/components/qr/QrListClient';
import { CategoryMultiFilter } from '@/components/qr/CategoryMultiFilter';
import type { QrClient } from '@/lib/qr-mapper';

type QrListSectionProps = {
	initialQrs: QrClient[];
};

export function QrListSection({ initialQrs }: QrListSectionProps) {
	const [activeCategories, setActiveCategories] = useState<string[]>([]);

	return (
		<section className='space-y-4'>
			<div className='mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
				<section className='pt-10'>
					<h1 className='text-3xl font-bold'>Your QR Codes</h1>
				</section>

				<div className='w-full sm:w-64'>
					<CategoryMultiFilter
						value={activeCategories}
						onChange={setActiveCategories}
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
