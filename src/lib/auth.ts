import { prisma } from '@/lib/prisma';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { mailer } from '@/lib/mailer';

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: 'postgresql',
	}),
	emailAndPassword: {
		enabled: true,

		sendResetPassword: async ({ user, url }) => {
			// url is the full reset link Better Auth generated (includes token)
			await mailer({
				to: user.email,
				subject: 'Reset your QrVault password',
				html: `
        <p>Click the link below to reset your password:</p>
        <p><a href="${url}">Reset password</a></p>
        <p>If you didn’t request this, you can ignore this email.</p>
      `,
			});
		},
	},
	trustedOrigins: ['http://localhost:3000', 'https://qrvault.one'],
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			accessType: 'offline',
			prompt: 'select_account consent',
		},
	},
});
