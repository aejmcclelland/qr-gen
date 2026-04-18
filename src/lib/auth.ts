import { prisma } from '@/lib/prisma';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { mailer } from '@/lib/mailer';

const LOCAL_PORT = process.env.PORT ?? '3000';
const AUTH_FALLBACK_URL =
	process.env.BETTER_AUTH_URL?.trim() || 'http://localhost:3000';

function toOrigin(value?: string) {
	if (!value?.trim()) return null;

	try {
		return new URL(value).origin;
	} catch {
		return null;
	}
}

const TRUSTED_ORIGINS = Array.from(
	new Set(
		[
			`http://localhost:${LOCAL_PORT}`,
			`http://127.0.0.1:${LOCAL_PORT}`,
			'http://localhost:3000',
			'http://127.0.0.1:3000',
			'https://qrpilot.app',
			'https://www.qrpilot.app',
			process.env.PLAYWRIGHT_BASE_URL,
			AUTH_FALLBACK_URL,
		]
			.map(toOrigin)
			.filter((origin): origin is string => Boolean(origin)),
	),
);

const AUTH_ALLOWED_HOSTS = TRUSTED_ORIGINS.map((origin) => new URL(origin).host);

export const auth = betterAuth({
	baseURL: {
		allowedHosts: AUTH_ALLOWED_HOSTS,
		fallback: AUTH_FALLBACK_URL,
		protocol: 'auto',
	},
	database: prismaAdapter(prisma, {
		provider: 'postgresql',
	}),
	emailAndPassword: {
		enabled: true,

		sendResetPassword: async ({ user, url }) => {
			// url is the full reset link Better Auth generated (includes token)
			await mailer({
				to: user.email,
				subject: 'Reset your QrPilot password',
				html: `
        <p>Click the link below to reset your password:</p>
        <p><a href="${url}">Reset password</a></p>
        <p>If you didn’t request this, you can ignore this email.</p>
      `,
			});
		},
	},
	trustedOrigins: TRUSTED_ORIGINS,
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			accessType: 'offline',
			prompt: 'select_account consent',
		},
	},
});
