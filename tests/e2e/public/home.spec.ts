import { expect, test } from '../fixtures/test';

test.describe('public homepage', () => {
	test('renders the key nav, hero, and CTA sections', async ({ page }) => {
		await page.goto('/');

		await expect(page.getByRole('navigation')).toBeVisible();
		await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
		await expect(
			page.getByRole('heading', {
				name: 'Build a QR library, not just one-off codes',
			}),
		).toBeVisible();

		await expect(
			page.getByRole('link', { name: 'Generate a QR Code' }).first(),
		).toBeVisible();
		await expect(
			page.getByRole('heading', { name: 'What QrPilot helps you do' }),
		).toBeVisible();
		await expect(
			page.getByRole('heading', { name: 'Start your QR library' }),
		).toBeVisible();
	});
});
