// src/scripts/portfolio-screenshots.ts
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { chromium, type Page } from '@playwright/test';

// Configure these via env when you want prod shots
const BASE_URL = process.env.QRPILOT ?? 'http://localhost:3000';

// Where screenshots will be saved (served from /public)
const OUT_DIR = 'public/portfolio/qrpilot-app';

type Shot = {
	name: string;
	path: string;
	selector?: string; // optional: element-only screenshot
};

async function getIds(prisma: any) {
	// Adjust to match your schema field names
	const publicQr = await prisma.qrcodes.findFirst({
		where: { isPublic: true },
		orderBy: { updatedAt: 'desc' },
		select: { id: true },
	});

	const privateQr = await prisma.qrcodes.findFirst({
		where: { isPublic: false },
		orderBy: { updatedAt: 'desc' },
		select: { id: true },
	});

	if (!publicQr?.id) throw new Error('No public QR found. Seed one first.');

	// If you don't have a private QR (or it isn't accessible in the app), fall back to the public QR for the /qr detail screenshot.
	const safePrivateId = privateQr?.id ?? publicQr.id;

	return { publicId: publicQr.id, privateId: safePrivateId };
}

async function loginIfNeeded(page: Page) {
	const email = process.env.SHOTS_EMAIL;
	const password = process.env.SHOTS_PASSWORD;

	if (!email || !password) {
		console.log('[login] No SHOTS_EMAIL/SHOTS_PASSWORD set — skipping login');
		return;
	}

	// Use the same callbackURL pattern your app uses when redirecting from protected routes.
	await page.goto(`${BASE_URL}/login?callbackURL=/qr`, { waitUntil: 'domcontentloaded' });
	console.log(`[login] url=${page.url()}`);

	// Try multiple strategies because DaisyUI/Tailwind forms often don't have <label for="..."> wired up.
	const emailCandidates = [
		page.getByLabel(/email/i),
		page.getByPlaceholder(/email/i),
		page.locator('input[type="email"]'),
		page.locator('input[name="email"]'),
		page.locator('input[id*="email" i]'),
	];

	const passwordCandidates = [
		page.getByLabel(/password/i),
		page.getByPlaceholder(/password/i),
		page.locator('input[type="password"]'),
		page.locator('input[name="password"]'),
		page.locator('input[id*="password" i]'),
	];

	let emailInput: any = null;
	for (const c of emailCandidates) {
		if ((await c.count()) > 0) {
			emailInput = c.first();
			break;
		}
	}

	let passwordInput: any = null;
	for (const c of passwordCandidates) {
		if ((await c.count()) > 0) {
			passwordInput = c.first();
			break;
		}
	}

	if (!emailInput || !passwordInput) {
		console.log('[login] Could not find login inputs — saving debug screenshot');
		await page.screenshot({
			path: `${OUT_DIR}/00-login--MISSING-FIELDS.png`,
			animations: 'disabled',
			caret: 'hide',
			fullPage: false,
			scale: 'device',
		});
		throw new Error('Login form inputs not found. Update selectors in loginIfNeeded().');
	}

	await emailInput.fill(email);
	await passwordInput.fill(password);

	// Submit the credentials form (avoid clicking "Continue with Google" etc.)
	// Prefer a submit button that belongs to the form containing the password input.
	const form = page.locator('form', { has: passwordInput });
	const submitBtn = form.locator('button[type="submit"], input[type="submit"]').first();

	if ((await submitBtn.count()) > 0) {
		await Promise.all([
			page.waitForNavigation({ waitUntil: 'domcontentloaded' }).catch(() => null),
			submitBtn.click(),
		]);
	} else {
		// Fallback: pressing Enter in the password field often submits the form.
		await Promise.all([
			page.waitForNavigation({ waitUntil: 'domcontentloaded' }).catch(() => null),
			passwordInput.press('Enter'),
		]);
	}

	// Give the app a beat to redirect / hydrate.
	await page.waitForTimeout(400);
	console.log(`[login] after submit url=${page.url()}`);

	if (page.url().includes('accounts.google.com')) {
		await page.screenshot({
			path: `${OUT_DIR}/00-login--OAUTH-REDIRECT.png`,
			animations: 'disabled',
			caret: 'hide',
			fullPage: false,
			scale: 'device',
		});
		throw new Error('Login submission redirected to Google OAuth. Ensure the script submits the credentials form (not the Google button).');
	}

	// If still on /login, capture the state (bad creds / validation / captcha / etc.)
	if (page.url().includes('/login')) {
		await page.screenshot({
			path: `${OUT_DIR}/00-login--AFTER-SUBMIT.png`,
			animations: 'disabled',
			caret: 'hide',
			fullPage: false,
			scale: 'device',
		});
		console.log('[login] Still on /login after submit — check creds or validation UI');
	}

	// Success criterion: authenticated pages should be reachable.
	// Some flows may land on / after login; that's fine as long as session is set.
	await page.goto(`${BASE_URL}/profile`, { waitUntil: 'domcontentloaded' });
	if (page.url().includes('/login')) {
		await page.screenshot({
			path: `${OUT_DIR}/00-login--FAILED.png`,
			animations: 'disabled',
			caret: 'hide',
			fullPage: false,
			scale: 'device',
		});
		throw new Error('Login failed: /profile redirected to /login. Check demo credentials and login UI.');
	}
	console.log('[login] Success — /profile reachable');

	// Optional: ensure we end up on the vault after login.
	await page.goto(`${BASE_URL}/qr`, { waitUntil: 'domcontentloaded' });
}

async function preparePage(page: Page) {
	// Remove screenshot noise:
	// - stop animations
	// - hide caret
	// - hide toasts, skeleton loaders, dev banners, etc.
	await page.addStyleTag({
		content: `
      * { caret-color: transparent !important; }
      [data-testid="toast"], .toast, .sonner-toaster, .react-hot-toast { display: none !important; }
      .skeleton, [aria-busy="true"] { animation: none !important; transition: none !important; }
    `,
	});
}

async function snap(page: Page, s: Shot) {
	const res = await page.goto(`${BASE_URL}${s.path}`, { waitUntil: 'domcontentloaded' });
	const status = res?.status();
	console.log(`[snap] ${s.name} -> ${page.url()} (${status})`);

	// If we hit a 404/500 etc, save a debug screenshot and keep going
	if (status && status >= 400) {
		await page.screenshot({
			path: `${OUT_DIR}/${s.name}--ERROR-${status}.png`,
			animations: 'disabled',
			caret: 'hide',
			fullPage: false,
			scale: 'device',
		});
	}
	if (status && status >= 400) {
		return;
	}

	await preparePage(page);

	// Small settle time for layout shifts (fonts, hydration, etc.)
	await page.waitForTimeout(300);

	if (s.selector) {
		const locator = page.locator(s.selector);
		await locator.waitFor({ state: 'visible', timeout: 10000 });
		await locator.screenshot({
			path: `${OUT_DIR}/${s.name}.png`,
			animations: 'disabled',
			caret: 'hide',
			scale: 'device',
		});
		return;
	}

	await page.screenshot({
		path: `${OUT_DIR}/${s.name}.png`,
		animations: 'disabled',
		caret: 'hide',
		fullPage: false,
		scale: 'device',
	});
}

async function resolveFirstQrDetailPath(page: Page) {
	// Ensure we're on the vault so links are present
	await page.goto(`${BASE_URL}/qr`, { waitUntil: 'domcontentloaded' });
	await page.waitForTimeout(300);

	// Grab candidate hrefs from links that look like /q/<id>
	const hrefs = await page
		.locator('a[href^="/q/"]')
		.evaluateAll((els) =>
			els
				.map((e) => e.getAttribute('href'))
				.filter(Boolean)
		) as string[];

	// Pick the first href that matches /q/<id>
	const match = hrefs.find((h) => /^\/q\/[^/?#]+$/.test(h));
	return match ?? null;
}

async function main() {
	const { prisma } = await import('@/lib/prisma');
	const { publicId, privateId } = await getIds(prisma);

	console.log('publicId value:', publicId);
	console.log('publicId type:', typeof publicId);

	const browser = await chromium.launch();

	// Desktop authenticated context
	const desktopContext = await browser.newContext({
		viewport: { width: 1440, height: 900 },
		deviceScaleFactor: 2,
	});
	const page = await desktopContext.newPage();

	page.on('console', (msg) => {
		// Only print warnings/errors to keep output clean
		if (['warning', 'error'].includes(msg.type())) {
			console.log(`[browser:${msg.type()}] ${msg.text()}`);
		}
	});
	page.on('pageerror', (err) => {
		console.log(`[browser:pageerror] ${err.message}`);
	});

	await loginIfNeeded(page);

	// Capture auth state so we can reuse it for mobile shots
	const authState = await desktopContext.storageState();

	const detailPath = await resolveFirstQrDetailPath(page);
	if (!detailPath) {
		console.log('[detail] Could not find a /q/:id link on the dashboard; falling back to the prisma-selected publicId');
	}

	const shots: Shot[] = [
		{ name: '01-vault-dashboard', path: '/qr' },
		{ name: '02-create-qr', path: '/qr/new' },
		{ name: '03-qr-detail', path: detailPath ?? `/q/${publicId}` },
		{ name: '05-profile', path: '/profile' },
	];

	// Sanity check: if auth is working, /profile should not bounce us back to /login.
	await page.goto(`${BASE_URL}/profile`, { waitUntil: 'domcontentloaded' });
	if (page.url().includes('/login')) {
		await page.screenshot({
			path: `${OUT_DIR}/00-auth--PROFILE-REDIRECTED.png`,
			animations: 'disabled',
			caret: 'hide',
			fullPage: false,
			scale: 'device',
		});
		throw new Error('Auth sanity check failed: /profile redirected to /login.');
	}

	for (const s of shots) {
		await snap(page, s);
		// eslint-disable-next-line no-console
		console.log(`Saved ${s.name}.png`);
	}

	// Desktop public (logged-out) context for share page + login
	const publicContext = await browser.newContext({
		viewport: { width: 1440, height: 900 },
		deviceScaleFactor: 2,
	});
	const publicPage = await publicContext.newPage();

	await snap(publicPage, { name: '04-public-share-page', path: `/q/${publicId}` });
	console.log('Saved 04-public-share-page.png');

	await snap(publicPage, { name: '06-login', path: '/login' });
	console.log('Saved 06-login.png');

	// Mobile (authenticated) for create screen
	const mobileAuthContext = await browser.newContext({
		viewport: { width: 390, height: 844 },
		deviceScaleFactor: 2,
		storageState: authState,
	});
	const mobileAuthPage = await mobileAuthContext.newPage();
	await snap(mobileAuthPage, { name: '07-mobile-create-qr', path: '/qr/new' });
	console.log('Saved 07-mobile-create-qr.png');

	// Mobile (public/logged-out) for share screen
	const mobilePublicContext = await browser.newContext({
		viewport: { width: 390, height: 844 },
		deviceScaleFactor: 2,
	});
	const mobilePublicPage = await mobilePublicContext.newPage();
	await snap(mobilePublicPage, { name: '08-mobile-public-share', path: `/q/${publicId}` });
	console.log('Saved 08-mobile-public-share.png');

	await browser.close();
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
