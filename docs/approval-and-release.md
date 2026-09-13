# Approval and release checkpoint

Current status: LOCAL REVIEW; owner requested publication on September 10, 2026. Release checks are incomplete and nothing has been pushed or publicly deployed by this work.

## Publication readiness check - September 10, 2026

- The owner asked to push the reviewed changes to the main website. This does not resolve the remaining production, service-claim, video and integration checks below, and does not approve the proposed future DBA or Google Business edits.
- The connected GitHub account Evajura has push permission for BIG-PRIMEZ/Andora, but does not have repository admin permission. The default branch is main.
- GitHub's Vercel status for commit 3385e10454005cbdff3582ed116998084c132bfc links to the existing andora project in the abrahams-projects-f60c75e2 team. Verify current access to that project before release; do not create a replacement project or change DNS merely to publish these edits.
- The Chrome Vercel session currently requires sign-in. Existing project settings, production environment variables and rollback access have not been verified.
- The production contact form requires VITE_WEB3FORMS_ACCESS_KEY. Check the configured delivery destination without copying credentials into this document, and arrange an approved non-sensitive test before release.
- A fresh production-build check was started in /private/tmp/andora-production-check.1ElcLx with VITE_LOCAL_PREVIEW=false and VERCEL_ENV=production. It is not a completed or approved production artifact. The local review on port 4173 has not been replaced.

## September 12 access and preservation update

- Owner has messaged the developer about existing hosting-project access and asked to preserve all website changes before starting separate social-media work.
- Vercel is now signed in as evajura. The Andora team has no projects and is on Hobby; the team selector showed no developer team. The existing deployment link returned Not Found for this signed-in account. Current production-project access remains unverified.
- The temporary production check has neither dist nor .ssr output. No successful production build, live form delivery test or publication is recorded.
- Many website images are marked compressed,dataless by macOS. A named Git checkpoint must be verified against file sizes before being treated as complete. Local preview output is still not production output.
- Social-media planning files are kept outside this website repository, in /Users/eva/Documents/Codex/Andora Marketing. No social posts, ad spending, account changes or recurring automation are authorized by the website publication request.

Source changes are saved in this repository. The original business website, GitHub remote, DNS and Google Business Profile have not been changed by this work. The local review address is http://127.0.0.1:4173/ on this Mac only. It is not a public staging domain.

## After owner approval

1. Record exactly which website copy, design, service claims and assets are approved. Save a named local source-control checkpoint or a source backup with a change manifest; exclude credentials and personal data.
2. Finish the video asset and its approval, or explicitly approve a release without video.
3. Verify licensed services, RN oversight claims, hours, service availability, office/address presentation and contact destinations.
4. Run the normal production Vite build and page checks with local-preview mode disabled. The emergency local-review fallback is not production output. Verify indexable production metadata, the sitemap, canonical URLs, real 404 HTTP responses and no accidental preview noindex rules.
5. Verify the production hosting account and project ownership, and test the actual form and calendar destinations with permission. Local simulated confirmation does not establish real email delivery.
6. Obtain explicit publication approval and deploy to the intended existing hosting project. Connect or update the existing domain through the authorized Namecheap DNS account only as needed. Namecheap domain access is not itself website hosting or a code transfer.
7. Preserve the prior live version and its DNS settings for rollback. After release, check public pages and request indexing through the authorized Search Console account.

## Separate Google approval

The proposed Google Business changes are in google-business-proposed-changes-2026-09-10.md. Approve that wording separately before it is saved publicly. Texting numbers, address visibility, live-in care and hours require operational confirmation. Google may review edits; do not promise instant visibility.

## Local preview implementation

The standard production pipeline is retained. A local-only fallback, scripts/build-local-review.mjs, compiles the same React pages and styles with preview safeguards. scripts/preview-local.mjs binds only to 127.0.0.1, rejects non-review builds, sends noindex headers and returns 404 for missing pages.

During this review, build work used /private/tmp/andora-review.36ctSa because the workspace's build tools encountered stale/truncated reads and development-server stalls. This temporary copy is not the authoritative source and can be recreated from this repository. Do not treat it as an approved release or deploy it.

The verified local server currently serves that temporary copy. Copying its full generated output back into this repository encountered an I/O timeout at dist/andora-qr.png. The repository's dist directory may therefore be a mixed/partial build and must not be deployed or treated as the verified preview. Source files remain saved here; rebuild production output from source after resolving the environment issue.
