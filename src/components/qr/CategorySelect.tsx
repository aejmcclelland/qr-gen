'use client';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

type CategorySelectProps = {
	value: string;
	onChange: (value: string) => void;
};

export const CATEGORY_OPTIONS = [
	{ value: 'personal', label: 'Personal' },
	{ value: 'work', label: 'Work' },
	{ value: 'club', label: 'Sport Club' },
	{ value: 'church', label: 'Church' },
	{ value: 'education', label: 'Education' },
	{ value: 'event', label: 'Event' },
	{ value: 'marketing', label: 'Marketing' },
	{ value: 'health', label: 'Health' },
	{ value: 'finance', label: 'Finance' },
	{ value: 'travel', label: 'Travel' },
	{ value: 'entertainment', label: 'Entertainment' },
	{ value: 'technology', label: 'Technology' },
	{ value: 'food', label: 'Food & Beverage' },
	{ value: 'non_profit', label: 'Non-Profit' },
	{ value: 'other', label: 'Other' },
];

export function CategorySelect({ value, onChange }: CategorySelectProps) {
	return (
		<Select value={value} onValueChange={onChange}>
			<SelectTrigger className='w-full'>
				<SelectValue placeholder='Select a category' />
			</SelectTrigger>
			<SelectContent className='max-h-60 overflow-y-auto rounded-md bg-neutral text-neutral-content shadow-lg p-2'>
				<SelectGroup>
					<SelectLabel>Category</SelectLabel>
					{CATEGORY_OPTIONS.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
