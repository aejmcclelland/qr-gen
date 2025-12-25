import prisma from '@/lib/prisma';

async function main() {
	const codes = await prisma.qrcodes.findMany();
	console.log('Existing QR codes:', codes);
}

main()
	.catch((err) => {
		console.error('Error running test script:', err);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
