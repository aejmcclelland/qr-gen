'use client';

import type { KeyboardEvent } from 'react';
import { Star } from 'lucide-react';

type StarsProps = {
	readonly value: number | null;
	readonly onChange: (value: number) => void;
	readonly disabled?: boolean;
};

const STAR_VALUES = [1, 2, 3, 4, 5] as const;

export function Stars({ value, onChange, disabled = false }: StarsProps) {
	const selectedValue = value ?? 0;

	const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
		if (disabled) return;

		if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
			event.preventDefault();
			onChange(Math.min(selectedValue + 1, 5));
			return;
		}

		if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
			event.preventDefault();
			onChange(Math.max(selectedValue - 1, 1));
			return;
		}

		if (event.key === 'Home') {
			event.preventDefault();
			onChange(1);
			return;
		}

		if (event.key === 'End') {
			event.preventDefault();
			onChange(5);
		}
	};

	return (
		<div
			className='flex items-center justify-center gap-2'
			role='radiogroup'
			aria-label='Star rating'>
			{STAR_VALUES.map((starValue) => {
				const active = selectedValue >= starValue;
				const checked = value === starValue;
				const tabIndex =
					disabled ? -1 : checked || value === null ? 0 : -1;

				return (
					<button
						key={starValue}
						type='button'
						role='radio'
						className='btn btn-ghost btn-circle'
						onClick={() => onChange(starValue)}
						onKeyDown={handleKeyDown}
						disabled={disabled}
						tabIndex={tabIndex}
						aria-label={`Rate ${starValue} ${starValue === 1 ? 'star' : 'stars'}`}
						aria-checked={checked}>
						<Star
							className={`h-8 w-8 ${
								active
									? 'fill-amber-400 text-amber-400'
									: 'fill-transparent text-base-content/30'
							}`}
						/>
					</button>
				);
			})}
		</div>
	);
}
