'use client';

import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
	// If you're on the same domain as the API, you can omit this or use NEXT_PUBLIC_BETTER_AUTH_URL
	baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL ?? 'http://localhost:3000',
});

export const { signIn, signUp, useSession, signOut } = authClient;
