import {
	expect,
	expectSignedIn,
	expectToast,
	getQrs,
	test,
	uniqueName,
} from '../fixtures/test';

test.describe('target URL preservation', () => {
	test('case-sensitive target URLs are preserved and not lowercased', async ({
		authedPage,
	}) => {
		const page = authedPage;
		const label = uniqueName('E2E case URL');
		const targetUrl =
			'https://example.com/CaseSensitive/LandingPage?Campaign=SpringLaunch&Token=AbCd123XyZ';

		await page.goto('/qr/new');
		await expectSignedIn(page);
		await page.getByLabel('Target URL').fill(targetUrl);
		await page.getByLabel('Label (optional)').fill(label);
		await page.getByRole('button', { name: 'Save to account' }).click();
		await expectToast(page, 'Saved');

		await page.goto('/qr');
		const card = page.getByTestId('qr-card').filter({ hasText: label });
		await expect(card).toContainText(label);
		await expect(card).toContainText(targetUrl);

		await page.reload();
		await expect(card).toContainText(targetUrl);

		const savedQr = (await getQrs(page)).find((qr) => qr.label === label);
		expect(savedQr?.targetUrl).toBe(targetUrl);
		expect(savedQr?.targetUrl).not.toBe(targetUrl.toLowerCase());
	});
});
