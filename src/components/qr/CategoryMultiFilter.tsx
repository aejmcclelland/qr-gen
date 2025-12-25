'use client';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { CATEGORY_OPTIONS } from '@/components/qr/CategorySelect';

type CategoryMultiFilterProps = {
	value: string[]; // selected category values
	onChange: (value: string[]) => void;
};

const CATEGORY_BUTTON_CLASSES: Record<string, string> = {
	personal: 'btn-primary',
	work: 'btn-secondary',
	club: 'btn-accent',
	church: 'btn-primary',
	education: 'btn-secondary',
	event: 'btn-accent',
	marketing: 'btn-primary',
	health: 'btn-secondary',
	finance: 'btn-neutral',
	travel: 'btn-primary',
	entertainment: 'btn-accent',
	technology: 'btn-secondary',
	food: 'btn-accent',
	non_profit: 'btn-neutral',
	other: 'btn-neutral',
};

export function CategoryMultiFilter({
	value,
	onChange,
}: CategoryMultiFilterProps) {
	const toggleCategory = (categoryValue: string) => {
		if (value.includes(categoryValue)) {
			onChange(value.filter((v) => v !== categoryValue));
		} else {
			onChange([...value, categoryValue]);
		}
	};

	const clearAll = () => onChange([]);

	const buttonLabel =
		value.length === 0
			? 'All categories'
			: value.length === 1
			? CATEGORY_OPTIONS.find((c) => c.value === value[0])?.label ??
			  '1 selected'
			: `${value.length} categories`;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' className='w-full justify-between'>
					<span>{buttonLabel}</span>
					<span className='text-xs opacity-70'>▼</span>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className='w-64 bg-base-200 p-3 max-h-64 overflow-y-auto'>
				<div className='flex flex-col gap-2'>
					{/* All button */}
					<button
						type='button'
						onClick={clearAll}
						className={`btn btn-xs btn-block ${
							value.length === 0 ? 'btn-primary' : 'btn-ghost'
						}`}>
						All
					</button>

					{/* Category buttons */}
					{CATEGORY_OPTIONS.map((cat) => {
						const selected = value.includes(cat.value);
						const colour = CATEGORY_BUTTON_CLASSES[cat.value] ?? 'btn-primary';

						return (
							<button
								key={cat.value}
								type='button'
								onClick={() => toggleCategory(cat.value)}
								aria-pressed={selected}
								aria-label={cat.label}
								className={`btn btn-xs btn-block ${
									selected ? colour : 'btn-ghost'
								}`}>
								{cat.label}
							</button>
						);
					})}
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
