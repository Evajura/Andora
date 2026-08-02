export const COOKIE_PREFERENCES_EVENT = 'andora:open-cookie-preferences';
export const COOKIE_CONSENT_CHANGED_EVENT = 'andora:cookie-consent-changed';
export const COOKIE_PREFERENCES_STORAGE_KEY = 'andora-cookie-preferences';
export const COOKIE_CONSENT_VERSION = 2;

export type CookiePreferences = {
  consentId: string;
  necessary: true;
  analytics: boolean;
  advertising: boolean;
  version: number;
  updatedAt: string;
};

export type ConsentLogEntry = CookiePreferences & {
  globalPrivacyControl: boolean;
};

export function createConsentId() {
  return window.crypto.randomUUID();
}

export async function logCookiePreferences(entry: ConsentLogEntry) {
  const endpoint = import.meta.env.VITE_CONSENT_LOG_ENDPOINT;
  if (!endpoint) return;

  // Google Apps Script web apps do not return browser CORS headers. `no-cors`
  // delivers the record while deliberately preventing access to the response.
  await fetch(endpoint, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(entry),
    keepalive: true,
  });
}

export function getCookiePreferences(): CookiePreferences | null {
  try {
    const saved = window.localStorage.getItem(COOKIE_PREFERENCES_STORAGE_KEY);
    if (!saved) return null;
    const preferences = JSON.parse(saved) as CookiePreferences;
    return preferences.version === COOKIE_CONSENT_VERSION ? preferences : null;
  } catch {
    return null;
  }
}
