// src/components/qr/QrForm.tsx
'use client';
type QrFormProps = {
	label: string;
	value: string;
	onLabelChange: (value: string) => void;
	onValueChange: (value: string) => void;
};

export function QrForm({
	label,
	value,
	onLabelChange,
	onValueChange,
}: QrFormProps) {
	return (
		<>
			<fieldset className='fieldset rounded-box w-full'>
				<label className='label mt-1 mb-1' htmlFor='qr-target-url'>
					Target URL
				</label>
				<input
					id='qr-target-url'
					type='url'
					className='input w-full'
					value={value}
					onChange={(e) => onValueChange(e.target.value)}
					placeholder='Paste your link here'
				/>
				<label className='label mb-1' htmlFor='qr-label'>
					Label (optional)
				</label>
				<input
					id='qr-label'
					type='text'
					className='input w-full'
					value={label}
					onChange={(e) => onLabelChange(e.target.value)}
					placeholder='e.g. Personal, Document link, etc.'
				/>
			</fieldset>
		</>
	);
}
