import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { createReviewLink } from '@/lib/review/createReviewLink';
import { createReviewLinkSchema } from '@/lib/validators/review';
import { getAuthedUserId } from '@/lib/getAuthedUserId';

export async function POST(req: NextRequest) {
	try {
		const userId = await getAuthedUserId(req);

		if (!userId) {
			return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
		}

		let body: unknown;
		try {
			body = await req.json();
		} catch {
			return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
		}

		const parsed = createReviewLinkSchema.parse(body);
		const reviewLink = await createReviewLink(parsed);

		return NextResponse.json(reviewLink, { status: 201 });
	} catch (error) {
		if (error instanceof ZodError) {
			return NextResponse.json(
				{
					error: 'Invalid review link payload',
					issues: error.issues,
				},
				{ status: 400 },
			);
		}

		if (error instanceof Error && error.message === 'REVIEW_LINK_SLUG_EXISTS') {
			return NextResponse.json(
				{
					error: 'DUPLICATE_REVIEW_LINK',
					message: 'A review link with this slug already exists.',
				},
				{ status: 409 },
			);
		}

		console.error('Error creating review link', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 },
		);
	}
}
