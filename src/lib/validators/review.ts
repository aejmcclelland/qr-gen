import { z } from 'zod';

const ratingNumberSchema = z
	.number({ error: 'Rating must be a number' })
	.int('Rating must be a whole number')
	.min(1, 'Rating must be between 1 and 5')
	.max(5, 'Rating must be between 1 and 5');

export const reviewSubmissionSchema = z.object({
	rating: z
		.union([z.number(), z.string()])
		.transform((value) => {
			if (typeof value === 'string') {
				const trimmed = value.trim();
				return trimmed === '' ? Number.NaN : Number(trimmed);
			}
			return value;
		})
		.refine((value) => !Number.isNaN(value), {
			message: 'Rating is required',
		})
		.pipe(ratingNumberSchema),
	message: z
		.string()
		.trim()
		.max(1000, 'Message must be 1000 characters or fewer')
		.transform((value) => (value === '' ? undefined : value))
		.optional(),
});

export const reviewUrlSchema = z
	.url('Review URL must be a valid URL')
	.refine((value) => value.startsWith('https://'), {
		message: 'Review URL must start with https://',
	});

export const reviewDestinationSchema = z.object({
	platformKey: z.string().trim().min(1, 'Platform key is required'),
	label: z.string().trim().min(1, 'Destination label is required'),
	reviewUrl: reviewUrlSchema,
	isActive: z.boolean().optional(),
	sortOrder: z.number().int().optional(),
});

export const createReviewLinkSchema = z.object({
	slug: z
		.string()
		.trim()
		.min(1, 'Slug is required')
		.regex(
			/^[a-z0-9-]+$/,
			'Slug may only contain lowercase letters, numbers, and hyphens',
		),
	businessName: z
		.string()
		.trim()
		.min(1, { message: 'Business name is required' })
		.optional(),
	notifyEmail: z
		.string()
		.trim()
		.pipe(z.email({ message: 'Notify email must be valid' }))
		.optional(),
	isActive: z.boolean().optional(),
	destinations: z
		.array(reviewDestinationSchema)
		.min(1, 'At least one public review destination is required'),
});

export type ReviewSubmissionInput = z.infer<typeof reviewSubmissionSchema>;
export type ReviewDestinationInput = z.infer<typeof reviewDestinationSchema>;
export type CreateReviewLinkInput = z.infer<typeof createReviewLinkSchema>;
