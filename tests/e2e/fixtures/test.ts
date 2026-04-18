import {
	expect,
	test as base,
	type APIResponse,
	type Page,
	type TestInfo,
} from '@playwright/test';
import { randomUUID } from 'node:crypto';
import { prisma } from './db';

type TestUser = {
	email: string;
	name: string;
	password: string;
};

export type CreatedQr = {
	id: string;
	label: string | null;
	targetUrl: string;
	category: string;
	isPublic: boolean;
	createdAt: string;
};

type Fixtures = {
	testUser: TestUser;
	authedPage: Page;
};

function slugify(value: string) {
	return value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '')
		.slice(0, 48);
}

function makeTestUser(testInfo: TestInfo): TestUser {
	const titleSlug = slugify(testInfo.title) || 'test';
	const suffix = randomUUID().slice(0, 8);

	return {
		email: `e2e-${testInfo.workerIndex}-${titleSlug}-${suffix}@example.com`,
		name: `QrPilot E2E ${suffix}`,
		password: `QrPilot-e2e-${randomUUID()}!`,
	};
}

async function assertOk(response: APIResponse, action: string) {
	if (response.ok()) return;

	throw new Error(
		`${action} failed with ${response.status()} ${response.statusText()}: ${await response.text()}`,
	);
}

export async function deleteTestUser(email: string) {
	const user = await prisma.user.findUnique({
		where: { email },
		select: { id: true },
	});

	if (!user) return;

	await prisma.qrcodes.deleteMany({ where: { userId: user.id } });
	await prisma.category.deleteMany({ where: { userId: user.id } });
	await prisma.session.deleteMany({ where: { userId: user.id } });
	await prisma.account.deleteMany({ where: { userId: user.id } });
	await prisma.user.deleteMany({ where: { id: user.id } });
}

export async function signUpWithEmail(page: Page, user: TestUser) {
	const response = await page.context().request.post('/api/auth/sign-up/email', {
		data: {
			email: user.email,
			password: user.password,
			name: user.name,
			callbackURL: '/dashboard',
		},
	});

	await assertOk(response, 'Email sign-up');
}

export async function expectSignedIn(page: Page) {
	await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
}

export async function expectToast(page: Page, text: string | RegExp) {
	await expect(page.getByRole('alert').filter({ hasText: text })).toBeVisible();
}

export async function createQr(
	page: Page,
	{
		targetUrl,
		label,
		category = 'personal',
	}: {
		targetUrl: string;
		label?: string;
		category?: string;
	},
) {
	const response = await page.context().request.post('/api/qrs', {
		data: {
			targetUrl,
			label,
			category,
		},
	});

	await assertOk(response, 'QR creation');
	return (await response.json()) as CreatedQr;
}

export async function getQrs(page: Page) {
	const response = await page.context().request.get('/api/qrs');

	await assertOk(response, 'QR list');
	return (await response.json()) as CreatedQr[];
}

export function uniqueName(prefix: string) {
	return `${prefix} ${randomUUID().slice(0, 8)}`;
}

export const test = base.extend<Fixtures>({
	testUser: async ({}, use, testInfo) => {
		const user = makeTestUser(testInfo);

		await deleteTestUser(user.email);

		try {
			await use(user);
		} finally {
			await deleteTestUser(user.email);
		}
	},

	authedPage: async ({ page, testUser }, use) => {
		await signUpWithEmail(page, testUser);
		await page.goto('/dashboard');
		await expect(
			page.getByRole('heading', { name: 'Your QR control centre' }),
		).toBeVisible();
		await expectSignedIn(page);

		await use(page);
	},
});

export { expect };
