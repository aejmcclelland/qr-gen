// src/scripts/seed.ts
import prisma from '../lib/prisma';

async function main() {
	const result = await prisma.qrcodes.createMany({
		data: [
			{
				label: 'Test Google Doc',
				category: 'work',
				targetUrl: 'https://docs.google.com/document/d/TEST_DOC_ID',
			},
			{
				label: 'Party Invite',
				category: 'parties',
				targetUrl: 'https://example.com/party',
			},
			{
				label: 'Personal Note',
				category: 'personal',
				targetUrl: 'https://example.com/personal-note',
			},
		],
	});

	console.log(`Inserted ${result.count} QR codes`);
}

main()
	.catch((err) => {
		console.error('Error seeding database:', err);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
