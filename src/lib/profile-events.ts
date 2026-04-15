export const PROFILE_UPDATED_EVENT = 'qrpilot-profile-updated';

export type ProfileUpdatedDetail = {
	name: string;
};

export function dispatchProfileUpdated(detail: ProfileUpdatedDetail) {
	if (typeof window === 'undefined') return;

	window.dispatchEvent(
		new CustomEvent<ProfileUpdatedDetail>(PROFILE_UPDATED_EVENT, {
			detail,
		}),
	);
}
