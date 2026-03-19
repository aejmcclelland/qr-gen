import { prisma } from '@/lib/prisma';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { mailer } from '@/lib/mailer';

const TRUSTED_ORIGINS = [
	'http://localhost:3000',
	'https://qrpilot.app',
	'https://www.qrpilot.app',
];

const AUTH_ALLOWED_HOSTS = TRUSTED_ORIGINS.map((origin) => new URL(origin).host);
const AUTH_FALLBACK_URL =
	process.env.BETTER_AUTH_URL?.trim() || 'http://localhost:3000';

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
