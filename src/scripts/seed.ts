// src/scripts/seed.ts
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.env' });
dotenvConfig({ path: '.env.local', override: false });

const { prisma } = await import('../lib/prisma');

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
		skipDuplicates: true,
	});

	const reviewLink = await prisma.reviewLink.upsert({
		where: { slug: 'green-harbor-cafe-belfast' },
		update: {
			businessName: 'Green Harbor Cafe',
			notifyEmail: 'reviews@greenharbordcafe.co.uk',
			isActive: true,
		},
		create: {
			slug: 'green-harbor-cafe-belfast',
			businessName: 'Green Harbor Cafe',
			notifyEmail: 'reviews@greenharbordcafe.co.uk',
			isActive: true,
		},
	});

	await prisma.reviewDestination.upsert({
		where: {
			reviewLinkId_platformKey: {
				reviewLinkId: reviewLink.id,
				platformKey: 'google',
			},
		},
		update: {
			label: 'Google',
			reviewUrl:
				'https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4',
			isActive: true,
			sortOrder: 0,
		},
		create: {
			reviewLinkId: reviewLink.id,
			platformKey: 'google',
			label: 'Google',
			reviewUrl:
				'https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4',
			isActive: true,
			sortOrder: 0,
		},
	});

	await prisma.reviewDestination.upsert({
		where: {
			reviewLinkId_platformKey: {
				reviewLinkId: reviewLink.id,
				platformKey: 'tripadvisor',
			},
		},
		update: {
			label: 'Tripadvisor',
			reviewUrl:
				'https://www.tripadvisor.co.uk/UserReviewEdit-g186534-d12345678-Green_Harbor_Cafe-Belfast_Northern_Ireland.html',
			isActive: true,
			sortOrder: 1,
		},
		create: {
			reviewLinkId: reviewLink.id,
			platformKey: 'tripadvisor',
			label: 'Tripadvisor',
			reviewUrl:
				'https://www.tripadvisor.co.uk/UserReviewEdit-g186534-d12345678-Green_Harbor_Cafe-Belfast_Northern_Ireland.html',
			isActive: true,
			sortOrder: 1,
		},
	});

	console.log(`Inserted ${result.count} QR codes`);
	console.log(`Seeded review link: /r/${reviewLink.slug}`);
}

main()
	.catch((err) => {
		console.error('Error seeding database:', err);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
