export const FALLBACK_CATEGORY = 'personal';
export const SYSTEM_FALLBACK_CATEGORY = 'uncategorised';

export const MAX_CATEGORY_NAME_LENGTH = 48;

export type CategoryOption = {
	value: string;
	label: string;
};

export type UserCategory = {
	id: string;
	name: string;
	slug: string;
	isActive: boolean;
	isPreset: boolean;
	qrCount: number;
	createdAt: string;
};

export const DEFAULT_CATEGORY_OPTIONS: CategoryOption[] = [
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

export const SYSTEM_FALLBACK_CATEGORY_OPTION: CategoryOption = {
	value: SYSTEM_FALLBACK_CATEGORY,
	label: 'Uncategorised',
};

export function cleanCategoryName(input: string) {
	return input.trim().replace(/\s+/g, ' ');
}

export function normalizeCategoryName(input: string) {
	return cleanCategoryName(input).toLocaleLowerCase('en-GB');
}

export function createCategorySlug(input: string) {
	const cleaned = cleanCategoryName(input);

	const asciiSlug = cleaned
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLocaleLowerCase('en-GB')
		.replace(/&/g, ' and ')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.slice(0, 64);

	if (asciiSlug) return asciiSlug;

	return cleaned
		.toLocaleLowerCase('en-GB')
		.replace(/\s+/g, '-')
		.slice(0, 64);
}

export function cleanCategoryValue(input: string | null | undefined) {
	return cleanCategoryName(input ?? '');
}

export function formatCategoryLabel(value: string) {
	const defaultOption = DEFAULT_CATEGORY_OPTIONS.find(
		(option) => option.value === value,
	);

	if (defaultOption) return defaultOption.label;

	return value
		.split(/[-_\s]+/)
		.filter(Boolean)
		.map((part) => part.charAt(0).toLocaleUpperCase('en-GB') + part.slice(1))
		.join(' ');
}

export function sortUserCategories(categories: UserCategory[]) {
	return [...categories].sort((a, b) =>
		Number(b.isActive) - Number(a.isActive) ||
		Number(b.isPreset) - Number(a.isPreset) ||
		a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }),
	);
}

export function toUserCategoryPayload(category: {
	id: string;
	name: string;
	slug: string;
	isActive?: boolean;
	isPreset?: boolean;
	qrCount?: number;
	createdAt: Date | string;
}): UserCategory {
	return {
		id: category.id,
		name: category.name,
		slug: category.slug,
		isActive: category.isActive ?? true,
		isPreset: category.isPreset ?? false,
		qrCount: category.qrCount ?? 0,
		createdAt:
			category.createdAt instanceof Date
				? category.createdAt.toISOString()
				: category.createdAt,
	};
}
