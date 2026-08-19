'use client';

import { useEffect, useState } from 'react';
import { sortUserCategories, type UserCategory } from '@/lib/categories';

type UserCategoriesState = {
	enabled: boolean;
	categories: UserCategory[];
	isLoaded: boolean;
};

export function useUserCategories(enabled = true) {
	const [state, setState] = useState<UserCategoriesState>({
		enabled,
		categories: [],
		isLoaded: !enabled,
	});

	if (state.enabled !== enabled) {
		setState({ enabled, categories: [], isLoaded: !enabled });
	}

	useEffect(() => {
		if (!enabled) return;

		let isMounted = true;
		const controller = new AbortController();

		async function loadUserCategories() {
			try {
				const res = await fetch('/api/categories', {
					cache: 'no-store',
					signal: controller.signal,
				});

				if (res.status === 401 || !res.ok) {
					if (isMounted) {
						setState({ enabled, categories: [], isLoaded: true });
					}
					return;
				}

				const data = (await res.json()) as {
					categories?: UserCategory[];
				};

				if (isMounted) {
					setState({
						enabled,
						categories: sortUserCategories(data.categories ?? []),
						isLoaded: true,
					});
				}
			} catch (error) {
				if (
					isMounted &&
					error instanceof DOMException &&
					error.name !== 'AbortError'
				) {
					setState({ enabled, categories: [], isLoaded: true });
				}
			}
		}

		void loadUserCategories();

		return () => {
			isMounted = false;
			controller.abort();
		};
	}, [enabled]);

	return { categories: state.categories, isLoaded: state.isLoaded };
}
