// src/lib/getAuthedUserId.ts
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/auth';
import { getSessionUserId } from '@/lib/getSessionUserId';

export async function getAuthedUserId(
	req: NextRequest
): Promise<string | null> {
	const sessionResult = await auth.api.getSession({ headers: req.headers });

	try {
		return getSessionUserId(sessionResult);
	} catch {
		return null;
	}
}
