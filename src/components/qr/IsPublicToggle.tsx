//src/coomponents/qr/IsPublicToggle.tsx
import React from 'react';

type IsPublicToggleProps = {
	readonly isPublic: boolean;
	readonly onToggle: (newValue: boolean) => void;
	readonly disabled?: boolean;
	readonly id?: string;
};

export function IsPublicToggle({
	isPublic,
	onToggle,
	disabled = false,
	id = 'is-public-toggle',
}: IsPublicToggleProps) {
	const checked = !!isPublic;
	return (
		<label className='label cursor-pointer gap-2'>
			<input
				id={id}
				type='checkbox'
				className='
          toggle toggle-sm
          bg-base-200 border-base-200
          checked:bg-primary checked:border-primary
          disabled:opacity-50 disabled:cursor-not-allowed
        '
				style={{ ['--tglbg' as any]: 'hsl(var(--n))' }}
				checked={checked}
				onChange={(e) => onToggle(e.target.checked)}
				disabled={disabled}
				aria-label='Toggle public QR page'
			/>
			<span className='text-sm'>{checked ? 'Public' : 'Private'}</span>
		</label>
	);
}
