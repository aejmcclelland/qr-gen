import { prisma } from '@/lib/prisma';
import type { CreateReviewLinkInput } from '@/lib/validators/review';

export async function createReviewLink({
	slug,
	businessName,
	notifyEmail,
	isActive = true,
	destinations,
}: CreateReviewLinkInput) {
	const normalizedSlug = slug.trim().toLowerCase();
	const normalizedBusinessName = businessName?.trim() || null;
	const normalizedNotifyEmail = notifyEmail?.trim() || null;

	try {
		return await prisma.reviewLink.create({
			data: {
				slug: normalizedSlug,
				businessName: normalizedBusinessName,
				notifyEmail: normalizedNotifyEmail,
				isActive,
				destinations: {
					create: destinations.map((destination, index) => ({
						platformKey: destination.platformKey.trim(),
						label: destination.label.trim(),
						reviewUrl: destination.reviewUrl,
						isActive: destination.isActive ?? true,
						sortOrder: destination.sortOrder ?? index,
					})),
				},
			},
			select: {
				id: true,
				slug: true,
				businessName: true,
				notifyEmail: true,
				isActive: true,
				destinations: {
					orderBy: { sortOrder: 'asc' },
					select: {
						id: true,
						platformKey: true,
						label: true,
						reviewUrl: true,
						isActive: true,
						sortOrder: true,
					},
				},
			},
		});
	} catch (error) {
		if ((error as { code?: string })?.code === 'P2002') {
			throw new Error('REVIEW_LINK_SLUG_EXISTS');
		}
		throw error;
	}
}
