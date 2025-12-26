// prisma.config.ts
import { config as dotenvConfig } from 'dotenv';

// Use .env.production only in production, otherwise default to .env.local
const envFile =
	process.env.NODE_ENV === 'production' ? '.env.production' : '.env.local';

dotenvConfig({ path: envFile });

import { defineConfig, env } from 'prisma/config';

export default defineConfig({
	schema: 'prisma/schema.prisma',
	migrations: {
		path: 'prisma/migrations',
	},
	datasource: {
		url: env('DIRECT_URL'),
	},
});
