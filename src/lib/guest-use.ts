export type GuestUsage = {
	firstValue: string;
	locked: boolean;
};

const STORAGE_KEY = 'qrpilot-guest-usage';

export function checkGuestQrLimit(currentValue: string): {
	allowed: boolean;
	message?: string;
} {
	if (typeof globalThis === 'undefined') {
		return { allowed: true };
	}

	const value = currentValue.trim();

	if (!value) {
		return {
			allowed: false,
			message: 'Please enter a valid URL before generating a QR code.',
		};
	}

	const raw = globalThis.localStorage.getItem(STORAGE_KEY);

	if (!raw) {
		const usage: GuestUsage = {
			firstValue: value,
			locked: false,
		};
		globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
		return { allowed: true };
	}

	let usage: GuestUsage;

	try {
		const parsed = JSON.parse(raw);

		if (
			!parsed ||
			typeof parsed.firstValue !== 'string' ||
			typeof parsed.locked !== 'boolean'
		) {
			throw new Error('Invalid guest usage data');
		}

		usage = parsed;
	} catch {
		usage = {
			firstValue: value,
			locked: false,
		};
		globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
		return { allowed: true };
	}

	if (!usage.locked && usage.firstValue === value) {
		return { allowed: true };
	}

	if (!usage.locked && usage.firstValue !== value) {
		usage.locked = true;
		globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
		return {
			allowed: false,
			message:
				'You have used your free guest QR. Please log in or sign up to generate more QR codes.',
		};
	}

	if (usage.locked && usage.firstValue === value) {
		return { allowed: true };
	}

	return {
		allowed: false,
		message:
			'Free guest limit reached. Please log in or sign up to create more QR codes.',
	};
}
