import { NextRequest, NextResponse } from 'next/server';
import type { UploadApiResponse } from 'cloudinary';
import { getCloudinary } from '@/lib/cloudinary';
import { getAuthedUserId } from '@/lib/getAuthedUserId';
import { prisma } from '@/lib/prisma';

const ACCEPTED_IMAGE_TYPES = new Set([
	'image/jpeg',
	'image/png',
	'image/webp',
	'image/gif',
]);
const MAX_AVATAR_BYTES = 4 * 1024 * 1024;
const CLOUDINARY_AVATAR_FOLDER = 'qrpilot/avatars';

function avatarResponse(
	body: { avatarUrl: string | null; error?: string },
	status = 200,
) {
	return NextResponse.json(body, {
		status,
		headers: { 'Cache-Control': 'no-store' },
	});
}

function cloudinaryIsConfigured() {
	return Boolean(
		process.env.CLOUDINARY_CLOUD_NAME &&
			process.env.CLOUDINARY_API_KEY &&
			process.env.CLOUDINARY_API_SECRET,
	);
}

function uploadAvatar({
	buffer,
	userId,
}: {
	buffer: Buffer;
	userId: string;
}) {
	return new Promise<UploadApiResponse>((resolve, reject) => {
		const stream = getCloudinary().uploader.upload_stream(
			{
				folder: CLOUDINARY_AVATAR_FOLDER,
				public_id: `${userId}-${Date.now()}`,
				resource_type: 'image',
				overwrite: false,
				transformation: [
					{
						width: 512,
						height: 512,
						crop: 'fill',
						gravity: 'face',
					},
				],
			},
			(error, result) => {
				if (error || !result) {
					reject(error ?? new Error('Cloudinary upload failed.'));
					return;
				}

				resolve(result);
			},
		);

		stream.end(buffer);
	});
}

async function deleteAvatarAsset(publicId?: string | null) {
	if (!publicId) return;

	try {
		await getCloudinary().uploader.destroy(publicId, { resource_type: 'image' });
	} catch (error) {
		console.warn('Could not delete previous avatar asset', error);
	}
}

export async function POST(req: NextRequest) {
	try {
		const userId = await getAuthedUserId(req);

		if (!userId) {
			return avatarResponse(
				{ avatarUrl: null, error: 'Unauthorised' },
				401,
			);
		}

		if (!cloudinaryIsConfigured()) {
			return avatarResponse(
				{ avatarUrl: null, error: 'Avatar upload is not configured.' },
				500,
			);
		}

		const formData = await req.formData();
		const file = formData.get('avatar');

		if (!(file instanceof File)) {
			return avatarResponse(
				{ avatarUrl: null, error: 'Choose an image to upload.' },
				400,
			);
		}

		if (!ACCEPTED_IMAGE_TYPES.has(file.type)) {
			return avatarResponse(
				{ avatarUrl: null, error: 'Unsupported image type.' },
				400,
			);
		}

		if (file.size > MAX_AVATAR_BYTES) {
			return avatarResponse(
				{ avatarUrl: null, error: 'Avatar image must be smaller than 4 MB.' },
				400,
			);
		}

		const currentUser = await prisma.user.findUnique({
			where: { id: userId },
			select: { avatarPublicId: true },
		});

		if (!currentUser) {
			return avatarResponse({ avatarUrl: null, error: 'Not found' }, 404);
		}

		const buffer = Buffer.from(await file.arrayBuffer());
		const upload = await uploadAvatar({ buffer, userId });

		try {
			await prisma.user.update({
				where: { id: userId },
				data: {
					avatarUrl: upload.secure_url,
					avatarPublicId: upload.public_id,
					image: upload.secure_url,
					avatarUploadCount: { increment: 1 },
					lastAvatarUpdatedAt: new Date(),
				},
			});
		} catch (error) {
			await deleteAvatarAsset(upload.public_id);
			throw error;
		}

		await deleteAvatarAsset(currentUser.avatarPublicId);

		return avatarResponse({ avatarUrl: upload.secure_url });
	} catch (error) {
		console.error('Error uploading avatar', error);
		return avatarResponse(
			{ avatarUrl: null, error: 'Could not upload avatar.' },
			500,
		);
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const userId = await getAuthedUserId(req);

		if (!userId) {
			return avatarResponse(
				{ avatarUrl: null, error: 'Unauthorised' },
				401,
			);
		}

		const currentUser = await prisma.user.findUnique({
			where: { id: userId },
			select: { avatarPublicId: true },
		});

		if (!currentUser) {
			return avatarResponse({ avatarUrl: null, error: 'Not found' }, 404);
		}

		await prisma.user.update({
			where: { id: userId },
			data: {
				avatarUrl: null,
				avatarPublicId: null,
				image: null,
				lastAvatarUpdatedAt: new Date(),
			},
		});

		await deleteAvatarAsset(currentUser.avatarPublicId);

		return avatarResponse({ avatarUrl: null });
	} catch (error) {
		console.error('Error removing avatar', error);
		return avatarResponse(
			{ avatarUrl: null, error: 'Could not remove avatar.' },
			500,
		);
	}
}
