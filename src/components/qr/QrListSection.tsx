'use client';

import { useState } from 'react';
import QrListClient from '@/components/qr/QrListClient';
import { CategoryMultiFilter } from '@/components/qr/CategoryMultiFilter';
import type { QrClient } from '@/lib/qr-mapper';

export type VisibilityFilter = 'all' | 'public' | 'private';

type QrListSectionProps = {
	readonly initialQrs: QrClient[];
	readonly initialActiveCategories?: string[];
	readonly initialEditId?: string;
	readonly initialVisibility?: VisibilityFilter;
};

export function QrListSection({
	initialQrs,
	initialActiveCategories = [],
	initialEditId,
	initialVisibility = 'all',
}: QrListSectionProps) {
	const [activeCategories, setActiveCategories] = useState<string[]>(
		() => initialActiveCategories,
	);
	const [visibilityFilter, setVisibilityFilter] =
		useState<VisibilityFilter>(initialVisibility);
	const availableCategories = Array.from(
		new Set(initialQrs.map((qr) => qr.category)),
	);

	return (
		<section className='space-y-4 min-w-0'>
			<div className='mb-6 flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
				<div className='min-w-0 pt-10'>
					<h1 className='text-3xl font-bold'>Your QR Codes</h1>
				</div>

				<div className='grid min-w-0 w-full gap-2 sm:w-auto sm:grid-cols-[minmax(12rem,16rem)_minmax(10rem,12rem)] sm:shrink-0'>
					<CategoryMultiFilter
						value={activeCategories}
						onChange={setActiveCategories}
						availableCategories={availableCategories}
					/>
					<label className='sr-only' htmlFor='qr-visibility-filter'>
						Filter by visibility
					</label>
					<select
						id='qr-visibility-filter'
						className='select select-bordered w-full'
						value={visibilityFilter}
						onChange={(event) =>
							setVisibilityFilter(event.target.value as VisibilityFilter)
						}>
						<option value='all'>All visibility</option>
						<option value='public'>Public QR codes</option>
						<option value='private'>Private QR codes</option>
					</select>
				</div>
			</div>

			<QrListClient
				initialQrs={initialQrs}
				activeCategories={activeCategories}
				visibilityFilter={visibilityFilter}
				initialEditId={initialEditId}
				onClearCategories={() => setActiveCategories([])}
				onClearVisibility={() => setVisibilityFilter('all')}
			/>
		</section>
	);
}
