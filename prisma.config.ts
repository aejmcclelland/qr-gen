// prisma.config.ts
import { config as dotenvConfig } from 'dotenv'
import { defineConfig, env } from 'prisma/config'

// Prisma CLI reliably loads `.env` by default, but we also support `.env.local` for local dev.
// In production, prefer `.env.production` if present.
if (process.env.NODE_ENV === 'production') {
  dotenvConfig({ path: '.env.production' })
} else {
  // Load .env first, then .env.local (without overriding already-set vars)
  dotenvConfig({ path: '.env' })
  dotenvConfig({ path: '.env.local' })
}

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  // For Prisma CLI (migrate/generate) use DIRECT_URL (direct DB or session pooler).
  datasource: {
    url: env('DIRECT_URL'),
  },
})
