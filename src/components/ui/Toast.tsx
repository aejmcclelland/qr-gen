'use client';

import { useEffect } from 'react';
import type { ReactNode } from 'react';

type ToastVariant = 'info' | 'success' | 'error' | 'warning';

const variantClass: Record<ToastVariant, string> = {
	info: 'alert-info',
	success: 'alert-success',
	error: 'alert-error',
	warning: 'alert-warning',
};

type ToastProps = {
	message: string;
	variant?: ToastVariant;
	show: boolean;
	onClose?: () => void;
	// DaisyUI positions: toast-top toast-end/toast-start etc.
	positionClassName?: string;
	actions?: ReactNode; // optional extra buttons (e.g. Log in / Sign up)
	autoCloseMs?: number;
};

export function Toast({
	message,
	variant = 'info',
	show,
	onClose,
	positionClassName = 'mt-4 toast-top toast-center',
	actions,
	autoCloseMs = 3000,
}: ToastProps) {
	useEffect(() => {
		if (!show || !onClose) return;
		const timer = setTimeout(() => {
			onClose();
		}, autoCloseMs);
		return () => clearTimeout(timer);
	}, [show, onClose, autoCloseMs]);
	if (!show) return null;
	return (
		<div className={`toast ${positionClassName} z-50`}>
			<div className={`alert shadow ${variantClass[variant]}`}>
				<div className='flex items-center gap-2'>
					<span className='text-sm'>{message}</span>
					{actions}
				</div>
				{onClose && (
					<button
						type='button'
						className='btn btn-ghost btn-xs'
						onClick={onClose}>
						✕
					</button>
				)}
			</div>
		</div>
	);
}
