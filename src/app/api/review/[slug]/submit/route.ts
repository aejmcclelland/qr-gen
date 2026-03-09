import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { createSubmission } from '@/lib/review/createSubmission';
import { reviewSubmissionSchema } from '@/lib/validators/review';

export async function POST(
	req: NextRequest,
	{ params }: { params: Promise<{ slug: string }> },
) {
	const { slug } = await params;

	let body: unknown;
	try {
		body = await req.json();
	} catch {
		return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
	}

	try {
		const parsed = reviewSubmissionSchema.parse(body);
		const userAgent = req.headers.get('user-agent') ?? undefined;

		const submission = await createSubmission({
			slug,
			rating: parsed.rating,
			message: parsed.message,
			userAgent,
		});

		return NextResponse.json(
			{
				ok: true,
				submission,
			},
			{ status: 201 },
		);
	} catch (error) {
		if (error instanceof ZodError) {
			return NextResponse.json(
				{
					error: 'Invalid submission',
					issues: error.issues,
				},
				{ status: 400 },
			);
		}

		if (error instanceof Error) {
			if (error.message === 'REVIEW_LINK_NOT_FOUND') {
				return NextResponse.json(
					{ error: 'Review link not found' },
					{ status: 404 },
				);
			}

			if (error.message === 'REVIEW_LINK_INACTIVE') {
				return NextResponse.json(
					{ error: 'Review link is inactive' },
					{ status: 410 },
				);
			}
		}

		console.error('Error creating review submission', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 },
		);
	}
}
