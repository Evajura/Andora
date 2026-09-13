import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import {
  COOKIE_CONSENT_CHANGED_EVENT,
  COOKIE_CONSENT_VERSION,
  COOKIE_PREFERENCES_EVENT,
  COOKIE_PREFERENCES_STORAGE_KEY,
  createConsentId,
  getCookiePreferences,
  logCookiePreferences,
  type CookiePreferences,
} from '../lib/cookiePreferences';
const globalPrivacyControlEnabled = () =>
  typeof navigator !== 'undefined' &&
  (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;

const makePreferences = (consentId: string, analytics: boolean, advertising: boolean): CookiePreferences => ({
  consentId,
  necessary: true,
  analytics,
  advertising,
  version: COOKIE_CONSENT_VERSION,
  updatedAt: new Date().toISOString(),
});

function Toggle({ checked, disabled = false, label, onChange }: {
  checked: boolean;
  disabled?: boolean;
  label: string;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <button type="button" role="switch" aria-checked={checked} aria-label={label} disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative h-6 w-11 flex-shrink-0 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${checked ? 'bg-primary' : 'bg-gray-300'} ${disabled ? 'cursor-not-allowed opacity-70' : ''}`}>
      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${checked ? 'translate-x-5' : 'translate-x-0.5'}`} />
    </button>
  );
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  const gpcEnabled = globalPrivacyControlEnabled();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = getCookiePreferences();
    if (saved) {
      setAnalytics(saved.analytics);
      setAdvertising(saved.advertising);
    } else {
      setVisible(true);
    }

    const openPreferences = () => {
      const current = getCookiePreferences();
      setAnalytics(current?.analytics ?? false);
      setAdvertising(current?.advertising ?? false);
      setShowDetails(true);
      setVisible(true);
    };
    window.addEventListener(COOKIE_PREFERENCES_EVENT, openPreferences);
    return () => window.removeEventListener(COOKIE_PREFERENCES_EVENT, openPreferences);
  }, []);

  useEffect(() => {
    if (visible) panelRef.current?.focus();
  }, [visible, showDetails]);

  const save = (nextAnalytics: boolean, nextAdvertising: boolean) => {
    const preferences = makePreferences(
      getCookiePreferences()?.consentId ?? createConsentId(),
      nextAnalytics,
      gpcEnabled ? false : nextAdvertising,
    );
    try {
      window.localStorage.setItem(COOKIE_PREFERENCES_STORAGE_KEY, JSON.stringify(preferences));
    } catch {
      // Respect the choice for this page even when browser storage is unavailable.
    }
    setAnalytics(nextAnalytics);
    setAdvertising(preferences.advertising);
    setVisible(false);
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_CHANGED_EVENT, { detail: preferences }));
    void logCookiePreferences({ ...preferences, globalPrivacyControl: gpcEnabled }).catch(() => {
      // Consent remains saved locally if the optional central log is unavailable.
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-5" role="region" aria-label="Cookie preferences">
      <div ref={panelRef} tabIndex={-1} className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl outline-none sm:p-6">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-full bg-blue-50 p-2 text-primary" aria-hidden="true"><Cookie size={21} /></div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-lg font-bold text-gray-900">Your cookie choices</h2>
              {getCookiePreferences() && (
                <button type="button" onClick={() => setVisible(false)} className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Close cookie preferences"><X size={20} /></button>
              )}
            </div>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              We use necessary storage to operate this site. With your permission, we may also use analytics and advertising cookies. You can change your choice at any time.{' '}
              <Link to="/privacy-policy#cookies" className="font-semibold text-primary underline underline-offset-2">Learn more</Link>
            </p>
            <p className="mt-2 text-xs leading-5 text-gray-500">
              We record an anonymous consent ID, your cookie choices, the consent version, and the date of your choice. We do not record your name, email address, health information, IP address, or browsing activity.
            </p>

            {showDetails && (
              <div className="mt-5 divide-y divide-gray-200 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between gap-4 p-4">
                  <div><h3 className="text-sm font-semibold text-gray-900">Strictly necessary</h3><p className="mt-1 text-xs leading-5 text-gray-600">Security, navigation, and remembering your consent choice.</p></div>
                  <Toggle checked label="Strictly necessary cookies are always active" disabled />
                </div>
                <div className="flex items-center justify-between gap-4 p-4">
                  <div><h3 className="text-sm font-semibold text-gray-900">Analytics</h3><p className="mt-1 text-xs leading-5 text-gray-600">Helps us understand site usage and improve performance.</p></div>
                  <Toggle checked={analytics} label="Allow analytics cookies" onChange={setAnalytics} />
                </div>
                <div className="flex items-center justify-between gap-4 p-4">
                  <div><h3 className="text-sm font-semibold text-gray-900">Advertising</h3><p className="mt-1 text-xs leading-5 text-gray-600">{gpcEnabled ? 'Disabled because your browser is sending a Global Privacy Control signal.' : 'Measures campaigns and supports relevant advertising.'}</p></div>
                  <Toggle checked={advertising} label="Allow advertising cookies" onChange={setAdvertising} disabled={gpcEnabled} />
                </div>
              </div>
            )}

            <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
              {!showDetails && <button type="button" onClick={() => setShowDetails(true)} className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Customize</button>}
              {showDetails && <button type="button" onClick={() => save(analytics, advertising)} className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Save choices</button>}
              <button type="button" onClick={() => save(false, false)} className="rounded-lg border-2 border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Reject all</button>
              <button type="button" onClick={() => save(true, true)} className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Accept all</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
