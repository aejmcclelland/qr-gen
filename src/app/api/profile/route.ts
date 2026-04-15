import { NextRequest, NextResponse } from 'next/server';
import { getAuthedUserId } from '@/lib/getAuthedUserId';
import { prisma } from '@/lib/prisma';

const MIN_DISPLAY_NAME_LENGTH = 2;
const MAX_DISPLAY_NAME_LENGTH = 60;
const MAX_BIO_LENGTH = 160;
const MAX_LOCATION_LENGTH = 50;

type ProfilePayload = {
	id: string;
	name: string;
	email: string;
	bio: string | null;
	location: string | null;
};

type ProfilePatch = {
	name?: string;
	bio?: string | null;
	location?: string | null;
};

function profileResponse(
	body: { profile?: ProfilePayload; error?: string },
	status = 200,
) {
	return NextResponse.json(body, {
		status,
		headers: { 'Cache-Control': 'no-store' },
	});
}

function cleanOptionalText(value: unknown, maxLength: number) {
	if (value === null) return null;
	if (typeof value !== 'string') return undefined;

	const trimmed = value.trim();
	if (trimmed.length > maxLength) return undefined;

	return trimmed || null;
}

function cleanDisplayName(value: unknown) {
	if (typeof value !== 'string') return null;

	const trimmed = value.trim();
	if (
		trimmed.length < MIN_DISPLAY_NAME_LENGTH ||
		trimmed.length > MAX_DISPLAY_NAME_LENGTH
	) {
		return null;
	}

	return trimmed;
}

function toProfilePayload(profile: ProfilePayload) {
	return {
		id: profile.id,
		name: profile.name,
		email: profile.email,
		bio: profile.bio,
		location: profile.location,
	};
}

function parseProfilePatch(body: unknown):
	| { type: 'success'; data: ProfilePatch }
	| { type: 'error'; message: string } {
	if (!body || typeof body !== 'object') {
		return { type: 'error', message: 'Invalid JSON body' };
	}

	const input = body as Record<string, unknown>;
	const data: ProfilePatch = {};

	if ('name' in input) {
		const name = cleanDisplayName(input.name);
		if (!name) {
			return {
				type: 'error',
				message: `Display name must be between ${MIN_DISPLAY_NAME_LENGTH} and ${MAX_DISPLAY_NAME_LENGTH} characters.`,
			};
		}

		data.name = name;
	}

	if ('bio' in input) {
		const bio = cleanOptionalText(input.bio, MAX_BIO_LENGTH);
		if (bio === undefined) {
			return {
				type: 'error',
				message: `Bio must be ${MAX_BIO_LENGTH} characters or less.`,
			};
		}

		data.bio = bio;
	}

	if ('location' in input) {
		const location = cleanOptionalText(input.location, MAX_LOCATION_LENGTH);
		if (location === undefined) {
			return {
				type: 'error',
				message: `Location must be ${MAX_LOCATION_LENGTH} characters or less.`,
			};
		}

		data.location = location;
	}

	if (!('name' in data) && !('bio' in data) && !('location' in data)) {
		return { type: 'error', message: 'Nothing to update.' };
	}

	return { type: 'success', data };
}

export async function GET(req: NextRequest) {
	try {
		const userId = await getAuthedUserId(req);

		if (!userId) {
			return profileResponse({ error: 'Unauthorised' }, 401);
		}

		const profile = await prisma.user.findUnique({
			where: { id: userId },
			select: {
				id: true,
				name: true,
				email: true,
				bio: true,
				location: true,
			},
		});

		if (!profile) {
			return profileResponse({ error: 'Not found' }, 404);
		}

		return profileResponse({ profile: toProfilePayload(profile) });
	} catch (error) {
		console.error('Error fetching profile', error);
		return profileResponse({ error: 'Internal server error' }, 500);
	}
}

export async function PATCH(req: NextRequest) {
	try {
		const userId = await getAuthedUserId(req);

		if (!userId) {
			return profileResponse({ error: 'Unauthorised' }, 401);
		}

		let body: unknown;
		try {
			body = await req.json();
		} catch {
			return profileResponse({ error: 'Invalid JSON body' }, 400);
		}

		const parsed = parseProfilePatch(body);
		if (parsed.type === 'error') {
			return profileResponse({ error: parsed.message }, 400);
		}

		const profile = await prisma.user.update({
			where: { id: userId },
			data: parsed.data,
			select: {
				id: true,
				name: true,
				email: true,
				bio: true,
				location: true,
			},
		});

		return profileResponse({ profile: toProfilePayload(profile) });
	} catch (error) {
		console.error('Error updating profile', error);
		return profileResponse({ error: 'Internal server error' }, 500);
	}
}
