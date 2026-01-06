// src/lib/getSessionUserId.ts
export function getSessionUserId(session: any): string {
	const id = session?.user?.id ?? session?.session?.userId ?? session?.userId;

	if (!id) throw new Error('Session missing user id');
	return id;
}
