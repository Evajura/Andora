# Google Sheets consent log setup

1. Create a Google Sheet dedicated to cookie-consent records. Do not use it for contact forms or health information.
2. Restrict sharing to authorized Andora staff and enable two-step verification for their Google accounts.
3. Open **Extensions → Apps Script**, paste in `scripts/google-apps-script-consent-log.js`, and save.
4. Select **Deploy → New deployment → Web app**. Run it as the spreadsheet owner and allow access to **Anyone** so anonymous website visitors can submit their choice.
5. Copy the deployment URL ending in `/exec`.
6. Set `VITE_CONSENT_LOG_ENDPOINT` to that URL in the website host's environment settings, then rebuild and deploy the site.
7. Submit a test preference and confirm that the `Cookie Consent Log` tab contains a row.

The endpoint accepts anonymous internet requests and may receive spam. Review access and records regularly. For stronger authentication, reliable delivery, retention automation, or higher traffic, place a managed backend in front of Google Sheets instead of posting directly from the browser.
