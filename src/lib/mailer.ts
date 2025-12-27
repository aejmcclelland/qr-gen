//utils/mailer.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: process.env.MAILEROO_HOST,
	port: Number(process.env.MAILEROO_PORT),
	secure: Number(process.env.MAILEROO_PORT) === 465,
	auth: {
		user: process.env.MAILEROO_USER,
		pass: process.env.MAILEROO_PASS,
	},
});

type MailerParams = {
	to: string;
	subject: string;
	text?: string;
	html: string;
};

export async function mailer({ to, subject, html, text }: MailerParams) {
	if (!process.env.MAILEROO_FROM) {
		throw new Error('MAILEROO_FROM not set');
	}

	await transporter.sendMail({
		from: process.env.MAILEROO_FROM,
		to,
		subject,
		text: text ?? 'Please view this email in HTML.',
		html,
	});
}
