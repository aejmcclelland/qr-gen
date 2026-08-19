import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const globalForPrisma = globalThis as unknown as {
	prisma?: PrismaClient;
};

function shouldUseSsl(connectionString: string) {
	if (connectionString.toLowerCase().includes('sslmode=disable')) {
		return false;
	}

	try {
		const { hostname } = new URL(connectionString);
		return !['localhost', '127.0.0.1', '::1'].includes(hostname);
	} catch {
		return true;
	}
}

function createPrismaClient() {
	const connectionString = process.env.DATABASE_URL;
	if (!connectionString) throw new Error('DATABASE_URL is not set');

	const pool = new Pool({
		connectionString,
		ssl: shouldUseSsl(connectionString) ? { rejectUnauthorized: false } : false,
	});

	const adapter = new PrismaPg(pool);
	return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
	globalForPrisma.prisma = prisma;
}
