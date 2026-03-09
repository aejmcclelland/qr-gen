import { prisma } from '@/lib/prisma';

export async function getReviewLink(slug: string) {
	return prisma.reviewLink.findUnique({
		where: { slug },
		select: {
			id: true,
			slug: true,
			businessName: true,
			notifyEmail: true,
			isActive: true,
			destinations: {
				where: { isActive: true },
				orderBy: { sortOrder: 'asc' },
				select: {
					id: true,
					platformKey: true,
					label: true,
					reviewUrl: true,
				},
			},
		},
	});
}
