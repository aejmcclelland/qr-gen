'use client';

import { createAuthClient } from 'better-auth/react';

// Same-origin (recommended for Next.js when the auth routes live in the same app)
export const authClient = createAuthClient();

export const { signIn, signUp, useSession, signOut } = authClient;
