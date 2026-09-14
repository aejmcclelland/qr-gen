import { expect, signUpWithEmail, test } from '../fixtures/test';

test('authenticated navbar is server rendered and stays signed in during session loading', async ({
	page, browser, testUser,
}) => {
	await signUpWithEmail(page, testUser);
	const serverOnlyContext = await browser.newContext({
		storageState: await page.context().storageState(),
		javaScriptEnabled: false,
	});
	try {
		const serverOnlyPage = await serverOnlyContext.newPage();
		await serverOnlyPage.goto('/');
		const nav = serverOnlyPage.getByRole('navigation');
		await expect(nav.getByRole('link', { name: 'Dashboard', exact: true })).toBeVisible();
		await expect(nav.getByRole('button', { name: new RegExp(testUser.name) })).toBeVisible();
		await expect(nav.getByRole('link', { name: 'Sign in' })).toHaveCount(0);
	} finally {
		await serverOnlyContext.close();
	}

	await page.addInitScript(() => {
		const state = window as typeof window & { navbarLoggedOutFlash: boolean };
		state.navbarLoggedOutFlash = false;
		new MutationObserver(() => {
			if (Array.from(document.querySelectorAll('nav a')).some(
				(link) => link.textContent?.trim() === 'Sign in',
			)) state.navbarLoggedOutFlash = true;
		}).observe(document, { childList: true, subtree: true });
	});
	let releaseSession!: () => void;
	const sessionGate = new Promise<void>((resolve) => { releaseSession = resolve; });
	await page.route('**/api/auth/get-session**', async (route) => {
		await sessionGate;
		await route.continue();
	});
	try {
		await page.goto('/');
		const nav = page.getByRole('navigation');
		await expect(nav.getByRole('link', { name: 'Sign in' })).toHaveCount(0);
		// Opening the menu proves hydration finished while the session fetch is held.
		await nav.getByRole('button', { name: new RegExp(testUser.name) }).click();
		await expect(page.getByRole('menu')).toContainText(testUser.email);
		await page.keyboard.press('Escape');
		const sessionResponse = page.waitForResponse('**/api/auth/get-session**');
		releaseSession();
		await sessionResponse;
		await expect(nav.getByRole('link', { name: 'Dashboard', exact: true })).toBeVisible();
		expect(await page.evaluate(() =>
			(window as typeof window & { navbarLoggedOutFlash: boolean }).navbarLoggedOutFlash,
		)).toBe(false);
	} finally {
		releaseSession();
	}
});

test('account routes, active navigation, logout and sign-in callback are preserved', async ({
	authedPage: page, testUser,
}) => {
	const nav = page.getByRole('navigation');
	const brand = nav.getByRole('link', { name: /QrPilot logo/ });
	await expect(brand).toHaveAttribute('href', '/dashboard');
	await expect(nav.getByRole('link', { name: 'Dashboard', exact: true })).toHaveClass(/bg-base-200/);
	for (const [label, path] of [['Profile', '/profile'], ['My QRs', '/qr'], ['Categories', '/categories']]) {
		await nav.getByRole('button', { name: new RegExp(testUser.name) }).click();
		await page.getByRole('menuitem', { name: label, exact: true }).click();
		await expect(page).toHaveURL(new RegExp(`${path}$`));
	}
	await nav.getByRole('link', { name: 'My QRs', exact: true }).click();
	await expect(nav.getByRole('link', { name: 'My QRs', exact: true })).toHaveClass(/bg-base-200/);
	await nav.getByRole('button', { name: new RegExp(testUser.name) }).click();
	await page.getByRole('menuitem', { name: 'Log out' }).click();
	await expect(page).toHaveURL(/\/$/);
	await expect(nav.getByRole('link', { name: 'Sign in' })).toBeVisible();
	await expect(brand).toHaveAttribute('href', '/');
	await expect(nav.getByRole('link', { name: 'Dashboard', exact: true })).toHaveCount(0);
	await nav.getByRole('link', { name: 'New QR', exact: true }).click();
	await expect(nav.getByRole('link', { name: 'New QR', exact: true })).toHaveClass(/bg-base-200/);
	await expect(nav.getByRole('link', { name: 'Sign in' })).toHaveAttribute('href', '/login?callbackURL=%2Fqr%2Fnew');
	await nav.getByRole('link', { name: 'Sign in' }).click();
	await page.getByPlaceholder('Email', { exact: true }).fill(testUser.email);
	await page.getByPlaceholder('Password', { exact: true }).fill(testUser.password);
	await page.getByRole('button', { name: 'Login', exact: true }).click();
	await expect(page).toHaveURL(/\/qr\/new$/);
	await expect(nav.getByRole('link', { name: 'Dashboard', exact: true })).toBeVisible();
	await expect(brand).toHaveAttribute('href', '/dashboard');
});

test('profile name and avatar changes immediately update the navbar', async ({ authedPage: page }) => {
	await page.getByRole('navigation').getByRole('button').click();
	await page.getByRole('menuitem', { name: 'Profile', exact: true }).click();
	const name = 'Updated Pilot';
	const nav = page.getByRole('navigation');
	await expect(page.getByLabel('Display name', { exact: true })).toBeEnabled();
	await page.getByLabel('Display name', { exact: true }).fill(name);
	await page.getByRole('button', { name: 'Save account details' }).click();
	await expect(nav.getByRole('button')).toContainText(name);
	await page.reload();
	await expect(nav.getByRole('button')).toContainText(name);
	await expect(page.getByRole('heading', { name: 'My Profile', exact: true })).toBeVisible();

	// Exercise the uploader and its events without uploading test assets to Cloudinary.
	await page.route('**/api/profile/avatar', (route) => route.fulfill({
		json: { avatarUrl: route.request().method() === 'DELETE' ? null : '/jumbo-qrpilot-small.svg' },
	}));
	await page.locator('input[type="file"]').setInputFiles({
		name: 'avatar.png',
		mimeType: 'image/png',
		buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aD1sAAAAASUVORK5CYII=', 'base64'),
	});
	await expect(nav.getByRole('img', { name: `${name} avatar` })).toBeVisible();
	await expect(nav.getByRole('img', { name: `${name} avatar` })).toHaveAttribute('src', /jumbo-qrpilot-small\.svg.*v=/);
	await page.getByRole('button', { name: 'Replace profile photo', exact: true }).hover();
	await page.getByRole('button', { name: 'Remove photo', exact: true }).click();
	await expect(nav.getByRole('img', { name: `${name} avatar` })).toHaveCount(0);
	await expect(nav.getByRole('button')).toContainText('UP');
	await expect(nav.getByRole('button')).toContainText(name);
});

test('an expired client session replaces the initial authenticated navbar', async ({ page, testUser }) => {
	await signUpWithEmail(page, testUser);
	await page.route('**/api/auth/get-session**', (route) => route.fulfill({ json: null }));
	await page.goto('/');
	const nav = page.getByRole('navigation');
	await expect(nav.getByRole('link', { name: 'Sign in' })).toBeVisible();
	await expect(nav.getByRole('link', { name: 'Dashboard', exact: true })).toHaveCount(0);
	await nav.getByRole('link', { name: 'New QR', exact: true }).click();
	await expect(nav.getByRole('link', { name: 'Sign in' })).toBeVisible();
});
