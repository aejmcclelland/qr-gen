export const AVATAR_UPDATED_EVENT = 'qrpilot-avatar-updated';

export type AvatarUpdatedDetail = {
	avatarUrl: string | null;
};

export function dispatchAvatarUpdated(avatarUrl: string | null) {
	if (typeof window === 'undefined') return;

	window.dispatchEvent(
		new CustomEvent<AvatarUpdatedDetail>(AVATAR_UPDATED_EVENT, {
			detail: { avatarUrl },
		}),
	);
}
