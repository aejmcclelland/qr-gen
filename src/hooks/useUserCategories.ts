'use client';

import { useEffect, useState } from 'react';
import { sortUserCategories, type UserCategory } from '@/lib/categories';

export function useUserCategories(enabled = true) {
	const [categories, setCategories] = useState<UserCategory[]>([]);
	const [isLoaded, setIsLoaded] = useState(!enabled);

	useEffect(() => {
		if (!enabled) {
			setCategories([]);
			setIsLoaded(true);
			return;
		}

		let isMounted = true;
		const controller = new AbortController();
		setIsLoaded(false);

		async function loadUserCategories() {
			try {
				const res = await fetch('/api/categories', {
					cache: 'no-store',
					signal: controller.signal,
				});

				if (res.status === 401 || !res.ok) {
					if (isMounted) {
						setCategories([]);
						setIsLoaded(true);
					}
					return;
				}

				const data = (await res.json()) as {
					categories?: UserCategory[];
				};

				if (isMounted) {
					setCategories(sortUserCategories(data.categories ?? []));
					setIsLoaded(true);
				}
			} catch (error) {
				if (
					isMounted &&
					error instanceof DOMException &&
					error.name !== 'AbortError'
				) {
					setCategories([]);
					setIsLoaded(true);
				}
			}
		}

		void loadUserCategories();

		return () => {
			isMounted = false;
			controller.abort();
		};
	}, [enabled]);

	return { categories, isLoaded };
}
