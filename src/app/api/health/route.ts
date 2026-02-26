import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
export const runtime = 'nodejs';

async function postToSlack(text: string) {
	const slack = process.env.SLACK_WEBHOOK_URL;
	if (!slack) return;

	try {
		await fetch(slack, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ text }),
		});
	} catch (e) {
		console.error('[health] Slack notification failed', e);
	}
}
// GET /api/health - DB check (keeps Supabase awake)
export async function GET(req: NextRequest) {
	try {
		const secretFromEnv = process.env.HEALTH_API_SECRET;

		if (!secretFromEnv) {
			console.error('[health] Missing HEALTH_API_SECRET env var');
			return NextResponse.json(
				{ ok: false, error: 'Server misconfigured' },
				{ status: 500 }
			);
		}

		// Prefer header auth (keeps secrets out of URLs/logs)
		const secretFromHeader = req.headers.get('x-cron-secret');

		// Backwards compatible: allow ?secret=... as well
		const secretFromQuery = req.nextUrl.searchParams.get('secret');

		const providedSecret = secretFromHeader ?? secretFromQuery;

		// Only send success notifications when explicitly requested by the scheduler
		// (avoids spam if hit /api/health manually).
		const notifySuccess =
			req.headers.get('x-cron-notify') === '1' ||
			req.nextUrl.searchParams.get('notify') === '1';

		if (!providedSecret || providedSecret !== secretFromEnv) {
			return NextResponse.json(
				{ ok: false, error: 'Unauthorized' },
				{ status: 401 }
			);
		}

		// Write a lightweight row so Supabase registers DB activity
		await prisma.keepalive.create({
			data: { source: 'github-action' },
		});

		// Prune rows older than 30 days (keeps table small)
		const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

		await prisma.keepalive.deleteMany({
			where: {
				ranAt: {
					lt: new Date(Date.now() - THIRTY_DAYS_MS),
				},
			},
		});

		if (notifySuccess) {
			await postToSlack(
				`✅ *qrpilot health check OK*\n• env: ${
					process.env.VERCEL ? 'vercel' : 'local'
				}\n• time: ${new Date().toISOString()}`
			);
		}

		return NextResponse.json(
			{
				ok: true,
				status: 'healthy',
				ts: new Date().toISOString(),
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error('[health] DB check failed', error);

		await postToSlack(
			` *qrpilot health check failed*\n• env: ${
				process.env.VERCEL ? 'vercel' : 'local'
			}\n• time: ${new Date().toISOString()}\n• error: ${
				(error as Error)?.message ?? String(error)
			}`
		);

		return NextResponse.json(
			{ ok: false, status: 'unhealthy', ts: new Date().toISOString() },
			{ status: 500 }
		);
	}
}
