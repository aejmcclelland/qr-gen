# Authentication

This document is intended for developers working on QRpilot and explains how authentication, session handling and authenticated QR ownership are implemented.

> QRpilot uses Better Auth for email/password and Google sign-in.
> This page describes the current implementation.

## Purpose and access

### Public

- homepage
- guest QR generation
- public QR pages
- public review flow

### Authenticated

- dashboard
- persisted QR codes
- categories
- profile/account management

### QR limits

- Guests can use the homepage, generate a QR at `/qr/new`, and view public QR
  pages at `/q/[id]`.
- A guest can preview and download one QR for a URL in that browser. The guest
  usage marker is stored in local storage under `qrpilot-guest-usage`.
- Guests cannot save QRs to an account. The guest limit is client-side; saved
  QR API routes independently require a valid session.
- The public review flow at `/r/[slug]` does not require an account.

## Sign-in methods

### Email and password

- Sign-up asks for a name, email, and password.
- Sign-in accepts email and password.
- Both flows accept a `callbackURL`, defaulting to `/dashboard`.

### Google

- Google sign-in is offered on both the login and sign-up pages.
- Configuration uses `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
- No magic-link flow is configured in the current Better Auth setup.

### Password reset

- The login page links to a password-reset request.
- Better Auth sends the reset email through the configured Maileroo transport.
- A Google-created account may not have a password yet; the profile page points
  users to “Forgot password?” to create one.

## Session lifecycle

1. `src/app/layout.tsx` reads the request session with
   `auth.api.getSession({ headers: await headers() })`.
2. The layout passes that session to the client `Navbar`.
3. `src/components/navigation/Navbar.tsx` seeds Better Auth’s client session
   store from the server value, then follows client-side session updates.
4. Better Auth serves its endpoints through `/api/auth/[...all]`.
5. Server pages and API routes check the session when they need account access.

- If there is no valid session, the navbar shows guest navigation and a sign-in
  link.
- `/dashboard`, `/qr`, `/qr/[id]`, and `/categories` redirect guests to login
  with a return URL. The profile page displays a sign-in prompt.
- QR API routes return `401` without a session.
- Sessions are stored in PostgreSQL through the Prisma adapter. The schema includes an expiresAt field. QRpilot does not currently override Better Auth’s session-duration configuration, so check the Better Auth version used by the project before relying on a specific expiry interval.
- A logout in another tab updates the navbar without a reload. The navbar follows Better Auth’s client-side session updates rather than assuming the initial server session remains valid.

## QR codes: guest use and account ownership

- Guest-generated QRs are previews/downloads; they are not saved under a user.
- Saving a QR requires a session. The API associates the saved record with the
  authenticated `userId`.
- List, edit, and delete operations scope records to that `userId`.
- A saved QR can be marked public. Its owner remains the account user; a public
  QR page allows viewing without signing in.

## Relevant code

- `src/lib/auth.ts` — Better Auth configuration, PostgreSQL adapter, email and
  Google providers, and reset-email callback.
- `src/lib/auth-client.ts` — browser auth client and session hooks.
- `src/app/api/auth/[...all]/route.ts` — Better Auth HTTP handlers.
- `src/app/layout.tsx` — server-side initial session lookup.
- `src/components/navigation/Navbar.tsx` — initial session hydration and
  signed-in/guest navigation.
- `src/components/navigation/AccountMenu.tsx` — account menu and logout.
- `src/lib/getAuthedUserId.ts` — API-request session lookup.
- `src/lib/getSessionUserId.ts` — extracts the user ID used by server pages.
- `src/lib/guest-use.ts` and `src/components/qr/QrGeneratorCard.tsx` — guest
  QR limit and save/download behaviour.
- `prisma/schema.prisma` — user, session, account, verification, and QR models.

## Playwright coverage

- `tests/e2e/app/navbar.spec.ts`
  - Verifies authenticated server-rendered navigation and guards against a
    signed-out flash during client session hydration.
  - Covers logout, return-to-page sign-in, account navigation, profile updates,
    and logout in another tab.
- `tests/e2e/app/dashboard.spec.ts`
  - Checks that an authenticated user can reach the dashboard.
- `tests/e2e/fixtures/test.ts`
  - Creates unique users through the email sign-up endpoint and cleans up their
    database records.
- `tests/e2e/public/home.spec.ts`
  - Checks that the public homepage and guest navigation render.
- `tests/e2e/app/create-qr.spec.ts`
  - Covers saving a QR while signed in.

The current E2E files do not directly cover Google OAuth, password-reset email
delivery, the guest QR limit, or an unauthenticated redirect from every
protected page.

## Troubleshooting

Start with the checks below when authentication behaviour differs between local development and deployment.

### Google sign-in fails

1. Confirm that `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are set for the
   running environment.
2. Confirm that the Google OAuth redirect configuration matches the deployed app.
3. Confirm the example environment file leaves these values blank.

### Password reset email does not arrive

1. Confrim `MAILEROO_HOST`, `MAILEROO_PORT`, `MAILEROO_USER`, `MAILEROO_PASS`, and
  `MAILEROO_FROM`.
2. Confirm the mailer explicitly errors when `MAILEROO_FROM` is missing.

### Requests behave as signed out

1. confirm cookies/session are still valid,
2. confirm Better Auth session lookup returns a user,
3. confirm the request is reaching the expected origin/host,
4. then inspect protected route behaviour.

### Authentication database errors

1. Confirm `DATABASE_URL` and database connectivity.
2. Confirm the deployed database schema matches the Better Auth models and the
  Prisma adapter’s PostgreSQL configuration.