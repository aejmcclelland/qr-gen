'use client';

import { useEffect, useMemo } from 'react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	createCategorySlug,
	DEFAULT_CATEGORY_OPTIONS,
	formatCategoryLabel,
	normalizeCategoryName,
	SYSTEM_FALLBACK_CATEGORY_OPTION,
	type CategoryOption,
	type UserCategory,
} from '@/lib/categories';
import { cn } from '@/lib/utils';
import { useUserCategories } from '@/hooks/useUserCategories';

type CategorySelectProps = {
	value: string;
	onChange: (value: string) => void;
	disabled?: boolean;
	size?: 'sm' | 'default';
	triggerClassName?: string;
	contentClassName?: string;
	ariaLabelledBy?: string;
	loadUserCategories?: boolean;
	showSuggestedDefaults?: boolean;
	preserveCurrentValue?: boolean;
};

export const CATEGORY_OPTIONS = DEFAULT_CATEGORY_OPTIONS;

function userCategoryToOption(category: UserCategory): CategoryOption {
	return {
		value: category.slug,
		label: category.name,
	};
}

function getUserOptionKeys(options: CategoryOption[]) {
	const keys = new Set<string>();

	for (const option of options) {
		keys.add(option.value);
		keys.add(createCategorySlug(option.label));
		keys.add(normalizeCategoryName(option.label));
	}

	return keys;
}

export function CategorySelect({
	value,
	onChange,
	disabled,
	size = 'default',
	triggerClassName,
	contentClassName,
	ariaLabelledBy,
	loadUserCategories = true,
	showSuggestedDefaults = true,
	preserveCurrentValue = true,
}: CategorySelectProps) {
	const { categories: userCategories, isLoaded: userCategoriesLoaded } =
		useUserCategories(loadUserCategories);

	const { userOptions, suggestedOptions, currentOption, fallbackOption } =
		useMemo(() => {
			const userOptions = userCategories
				.filter((category) => category.isActive)
				.map(userCategoryToOption);
			const userOptionKeys = getUserOptionKeys(userOptions);
			const canShowSuggestedDefaults =
				showSuggestedDefaults && (!loadUserCategories || userCategoriesLoaded);
			const suggestedOptions = canShowSuggestedDefaults
				? DEFAULT_CATEGORY_OPTIONS.filter((option) => {
						return (
							!userOptionKeys.has(option.value) &&
							!userOptionKeys.has(createCategorySlug(option.label)) &&
							!userOptionKeys.has(normalizeCategoryName(option.label))
						);
					})
				: [];

			const allValues = new Set([
				...userOptions.map((option) => option.value),
				...suggestedOptions.map((option) => option.value),
			]);

			const currentOption =
				preserveCurrentValue && value && !allValues.has(value)
					? { value, label: formatCategoryLabel(value) }
					: null;
			const fallbackOption =
				!currentOption &&
				userCategoriesLoaded &&
				userOptions.length === 0 &&
				suggestedOptions.length === 0
					? SYSTEM_FALLBACK_CATEGORY_OPTION
					: null;

			return {
				userOptions,
				suggestedOptions,
				currentOption,
				fallbackOption,
			};
		}, [
			loadUserCategories,
			preserveCurrentValue,
			showSuggestedDefaults,
			userCategories,
			userCategoriesLoaded,
			value,
		]);

	useEffect(() => {
		if (fallbackOption && value !== fallbackOption.value) {
			onChange(fallbackOption.value);
		}
	}, [fallbackOption, onChange, value]);

	return (
		<Select value={value} onValueChange={onChange} disabled={disabled}>
			<SelectTrigger
				size={size}
				aria-labelledby={ariaLabelledBy}
				className={cn('w-full bg-base-100', triggerClassName)}>
				<SelectValue placeholder='Select a category' />
			</SelectTrigger>
			<SelectContent
				className={cn(
					'max-h-72 overflow-y-auto rounded-md bg-base-100 text-base-content shadow-lg p-2',
					contentClassName,
				)}>
				{userOptions.length > 0 ? (
					<SelectGroup>
						<SelectLabel>My categories</SelectLabel>
						{userOptions.map((option) => (
							<SelectItem key={option.value} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectGroup>
				) : null}

				{currentOption ? (
					<SelectGroup>
						<SelectLabel>Current category</SelectLabel>
						<SelectItem value={currentOption.value}>
							{currentOption.label}
						</SelectItem>
					</SelectGroup>
				) : null}

				{fallbackOption ? (
					<SelectGroup>
						<SelectLabel>Fallback</SelectLabel>
						<SelectItem value={fallbackOption.value}>
							{fallbackOption.label}
						</SelectItem>
					</SelectGroup>
				) : null}

				{suggestedOptions.length > 0 ? (
					<SelectGroup>
						<SelectLabel>
							{userOptions.length > 0 ? 'Suggested' : 'Suggested categories'}
						</SelectLabel>
						{suggestedOptions.map((option) => (
							<SelectItem key={option.value} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectGroup>
				) : null}
			</SelectContent>
		</Select>
	);
}
