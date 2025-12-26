// src/lib/prisma.ts
import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client';

const globalForPrisma = globalThis as unknown as {
	prisma?: PrismaClient;
};

function createPrismaClient() {
	const connectionString = process.env.DATABASE_URL;
	if (!connectionString) throw new Error('DATABASE_URL is not set');

	// Safe log: proves deployed code path (no password)
	const u = new URL(connectionString);
	console.log('[prisma] init (adapter-pg)', {
		host: u.hostname,
		port: u.port,
		user: u.username,
		vercel: Boolean(process.env.VERCEL),
	});

	const pool = new pg.Pool({
		connectionString,
		ssl: { rejectUnauthorized: false },
	});

	const adapter = new PrismaPg(pool);
	return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
	globalForPrisma.prisma = prisma;
}
