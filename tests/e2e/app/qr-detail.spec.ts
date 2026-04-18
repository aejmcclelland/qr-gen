import {
	createQr,
	expect,
	expectToast,
	test,
	uniqueName,
} from '../fixtures/test';

test.describe('QR detail editing', () => {
	test('user can edit a created QR and persist changes', async ({
		authedPage,
	}) => {
		const page = authedPage;
		const originalLabel = uniqueName('E2E original QR');
		const updatedLabel = uniqueName('E2E updated QR');
		const originalUrl = 'https://example.com/e2e/edit/original';
		const updatedUrl = 'https://example.com/e2e/edit/updated';
		const qr = await createQr(page, {
			targetUrl: originalUrl,
			label: originalLabel,
		});

		await page.goto(`/qr?edit=${encodeURIComponent(qr.id)}`);

		const qrRow = page.locator(`[id="qr-${qr.id}"]`);
		const card = qrRow.getByTestId('qr-card');
		await expect(card.getByLabel('Label')).toHaveValue(originalLabel);
		await expect(card.getByLabel('Target URL')).toHaveValue(originalUrl);

		await card.getByLabel('Label').fill(updatedLabel);
		await card.getByLabel('Target URL').fill(updatedUrl);
		await card.getByRole('button', { name: 'Save' }).click();

		await expectToast(page, 'QR code updated.');

		await page.goto('/qr');
		const updatedCard = page.getByTestId('qr-card').filter({
			hasText: updatedLabel,
		});
		await expect(updatedCard).toContainText(updatedLabel);
		await expect(updatedCard).toContainText(updatedUrl);
		await expect(page.getByText(originalLabel)).toHaveCount(0);
	});
});
