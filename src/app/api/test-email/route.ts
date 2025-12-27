import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mailer';

export const runtime = 'nodejs';

export async function GET() {
	try {
		await sendMail({
			to: 'aejmcclelland@gmail.com',
			subject: 'QrVault test email',
			text: 'If you received this, Maileroo is working 🎉',
			html: `<p><strong>If you received this, Maileroo is working 🎉</strong></p>`,
		});

		return NextResponse.json({ ok: true });
	} catch (error) {
		console.error('[test-email] failed', error);
		return NextResponse.json(
			{ ok: false, error: (error as Error).message },
			{ status: 500 }
		);
	}
}
