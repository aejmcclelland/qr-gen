import { expect, test } from '../fixtures/test';

test.describe('dashboard', () => {
	test('authenticated user can reach the dashboard', async ({ authedPage }) => {
		const page = authedPage;

		await page.goto('/dashboard');

		await expect(page).toHaveURL(/\/dashboard$/);
		await expect(
			page.getByRole('heading', { name: 'Your QR control centre' }),
		).toBeVisible();
		await expect(
			page.getByRole('region', { name: 'QR library stats' }),
		).toContainText('Total QR codes');
		await expect(
			page.getByRole('heading', { name: 'Recent QR codes' }),
		).toBeVisible();
		await expect(
			page.getByRole('region', { name: 'Quick actions' }),
		).toContainText('Create QR');
	});
});

