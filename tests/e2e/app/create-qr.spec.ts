import type { Page } from '@playwright/test';
import {
	expect,
	expectSignedIn,
	expectToast,
	test,
	uniqueName,
} from '../fixtures/test';

async function openCreateQrPage(page: Page) {
	await page.goto('/qr/new');
	await expectSignedIn(page);
	await expect(
		page.getByRole('heading', { name: 'Generate a New QR Code' }),
	).toBeVisible();
}

test.describe('create QR', () => {
	test('user can create a QR successfully', async ({ authedPage }) => {
		const page = authedPage;
		const label = uniqueName('E2E saved QR');
		const targetUrl = `https://example.com/e2e/create/${label
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')}`;

		await openCreateQrPage(page);
		await page.getByLabel('Target URL').fill(targetUrl);
		await page.getByLabel('Label (optional)').fill(label);
		await page.getByRole('button', { name: 'Save to account' }).click();

		await expectToast(page, 'Saved');

		await page.goto('/qr');
		await expect(
			page.getByRole('heading', { level: 1, name: 'Your QR Codes' }),
		).toBeVisible();

		const card = page.getByTestId('qr-card').filter({ hasText: label });
		await expect(card).toContainText(label);
		await expect(card).toContainText(targetUrl);
	});

	test('invalid QR submission is blocked', async ({ authedPage }) => {
		const page = authedPage;
		const label = uniqueName('E2E invalid QR');

		await openCreateQrPage(page);
		await page.getByLabel('Target URL').fill('not-a-valid-url');
		await page.getByLabel('Label (optional)').fill(label);
		await page.getByRole('button', { name: 'Save to account' }).click();

		await expectToast(page, 'Invalid targetUrl');

		await page.goto('/qr');
		await expect(
			page.getByText("You haven't saved any QR codes yet."),
		).toBeVisible();
		await expect(page.getByText(label)).toHaveCount(0);
	});
});
