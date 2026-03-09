import { prisma } from '@/lib/prisma';

type CreateSubmissionInput = {
	slug: string;
	rating: number;
	message?: string;
	userAgent?: string;
	ipHash?: string;
};

export async function createSubmission({
	slug,
	rating,
	message,
	userAgent,
	ipHash,
}: CreateSubmissionInput) {
	const reviewLink = await prisma.reviewLink.findUnique({
		where: { slug },
		select: {
			id: true,
			slug: true,
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

	if (!reviewLink) {
		throw new Error('REVIEW_LINK_NOT_FOUND');
	}

	if (!reviewLink.isActive) {
		throw new Error('REVIEW_LINK_INACTIVE');
	}

	const submission = await prisma.reviewSubmission.create({
		data: {
			reviewLinkId: reviewLink.id,
			rating,
			message: message ?? null,
			userAgent: userAgent ?? null,
			ipHash: ipHash ?? null,
		},
		select: {
			id: true,
			rating: true,
			message: true,
			createdAt: true,
		},
	});

	return {
		...submission,
		reviewLink: {
			slug: reviewLink.slug,
			destinations: reviewLink.destinations,
		},
	};
}
