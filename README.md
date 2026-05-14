

# QRpilot

[![Playwright Tests](https://github.com/aejmcclelland/qr-gen/actions/workflows/playwright.yml/badge.svg)](https://github.com/aejmcclelland/qr-gen/actions/workflows/playwright.yml)

QRpilot is a full-stack QR code management app built as a portfolio project. It is designed for users who want to create, save, organise, share, and manage QR codes from one account rather than generating one-off QR codes each time.

## Features

- User authentication with Better Auth
- Email/password sign-up and sign-in
- Google sign-in support
- Create QR codes from target URLs
- Save QR codes to a personal dashboard
- Edit existing QR code details
- Delete QR codes
- Mark QR codes as public or private
- Public share route for QR codes
- Organise QR codes with categories
- Manage custom categories
- Dashboard overview with recent QR activity and quick actions
- Download/export QR codes
- User profile and avatar support using Cloudinary
- Health endpoint used for database keep-alive checks
- End-to-end testing with Playwright

## Tech stack

- Next.js 16
- React 19
- TypeScript
- PostgreSQL
- Prisma
- Better Auth
- Tailwind CSS 4
- daisyUI
- Cloudinary
- Playwright
- Vercel

## Testing and quality checks

The project includes Playwright end-to-end tests for the main authenticated user flows.

```bash
pnpm build
pnpm test:e2e
```

The E2E tests cover areas such as dashboard access, QR creation, form validation, QR editing, and target URL preservation.

## Environment variables

This project requires environment variables for the database, authentication, OAuth, Cloudinary, and health-check functionality.

Create a local environment file based on `.env.example`:

```bash
cp .env.example .env.local
```

Then add the required values for your local setup.

## Current status

QRpilot is not intended to be a finished commercial SaaS product. It is a working full-stack portfolio project focused on demonstrating real application structure, authentication, database-backed user data, QR management features, testing, and deployment-ready patterns.

## Planned improvements

Future improvements may include public link expiry, revoke/unexpire controls, basic public-link analytics, improved bulk export handling, clearer upgrade/limit flows, and additional audit logging around destructive actions.