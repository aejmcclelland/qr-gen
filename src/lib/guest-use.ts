export type GuestUsage = {
  firstValue: string;
  locked: boolean;
};

const STORAGE_KEY = 'qr-gen-guest-usage';

export function checkGuestQrLimit(currentValue: string): {
  allowed: boolean;
  message?: string;
} {
  if (typeof window === 'undefined') {
    return { allowed: true };
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);

  // First-ever QR for a guest
  if (!raw) {
    const usage: GuestUsage = {
      firstValue: currentValue,
      locked: false,
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
    return { allowed: true };
  }

  let usage: GuestUsage | null = null;
  try {
    usage = JSON.parse(raw) as GuestUsage;
  } catch {
    usage = {
      firstValue: currentValue,
      locked: false,
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
    return { allowed: true };
  }

  // Allowed: re-download the same QR
  if (!usage.locked && usage.firstValue === currentValue) {
    return { allowed: true };
  }

  // If this is the first different QR, lock further usage
  if (!usage.locked && usage.firstValue !== currentValue) {
    usage.locked = true;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
    return {
      allowed: false,
      message:
        'You have used your free guest QR. Please log in or sign up to generate more QR codes.',
    };
  }

  // Already locked: only allow if it's still the original QR
  if (usage.locked && usage.firstValue === currentValue) {
    return { allowed: true };
  }

  return {
    allowed: false,
    message:
      'Free guest limit reached. Please log in or sign up to create more QR codes.',
  };
}
