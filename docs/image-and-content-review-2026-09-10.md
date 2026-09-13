# Image, content, and brand review — September 10, 2026

Status: **local draft only**. Review at http://127.0.0.1:4173/. Nothing has been pushed, publicly deployed, or submitted to Google Business Profile by this work.

## Service imagery

Created 14 original illustrative care scenes and 2 requested edits with the built-in image-generation tool. All 16 are saved as PNG originals under `public/care-scenes/`; web pages use smaller WebP derivatives. These are not photographs of actual staff or clients. The website discloses the illustrative imagery and provides descriptive alt text.

| Page/placement | Saved asset or retained image | Change |
| --- | --- | --- |
| Services: 24/7; advanced-care hero | `evening-handoff.png` | Female caregivers coordinate at dusk; plum/olive scrubs |
| Services: specialized care | `specialized-support.png` | Daily-routine support at home |
| Skilled nursing: wound care | Existing `home-post-surgical.png` | Moved the requested wound-related photo here |
| Skilled nursing: post-surgery | `recovery-assistance.png` | New recovery-support scene |
| Personal care: hygiene | `personal-hygiene.png` | Older woman in a closed robe at home |
| Personal care: mobility | `walker-support.png` | Standing walker assistance |
| Homepage, personal care, respite: companionship | `garden-companionship.png` | Shared lively garden scene; female caregiver |
| Advanced care: overnight | `nighttime-nursing.png` | Nighttime setting; female nurse in plum |
| Advanced care: dementia/Alzheimer's | `memory-support.png` | Familiar photographs and engagement; merged into one card |
| Advanced care: live-in | `groceries-doorstep.png` | Female caregiver collecting groceries |
| Post-hospital: surgery | `post-surgery-visit.png` | Female caregiver, sage scrubs, corrected official logo |
| Post-hospital: stroke | `stroke-recovery.png` | Everyday support with an adaptive cup; not portrayed as therapy |
| Post-hospital: wound care | `incision-dressing.png` | Non-graphic incision dressing close-up; not a wound-staging lesson |
| Respite hero | `respite-family-departure.png` | Family leaves while loved one/caregiver wave |
| Respite: temporary relief | `temporary-relief.png` | Entirely different people and activity |
| Respite: planned visit | `planned-respite.png` | Both people look at calendar; corrected official logo |
| Respite: urgent request | `urgent-respite-call.png` | Stressed family member calling; availability not guaranteed |

The owner-approved skilled-nursing and personal-care overview images, meal-preparation image, and medication images were retained. Original site files were not deleted.

Image prompt sets: `care-image-prompts-2026-09-10.json` and `care-image-edit-prompts-2026-09-10.json` in this folder. Generated originals also remain in the tool's output directory.

After image generation reached its limit, the owner explicitly approved normal image editing for the two incorrect scrub logos. `scripts/correct-care-logos.mjs` uses Sharp to place the actual supplied artwork on small perspective-matched patches; it does not regenerate lettering. The original generated images remain unchanged in the tool output directory. Logo source and naming standards: `brand-standard-2026-09-10.md`.

## Layout changes

- Services overview: six image-led cards in a two-column desktop grid; three key features shown per card and a clear service link. Corrected the specialized-care link.
- Detail card images: consistent 3:2 display ratio.
- Advanced care: combined dementia and Alzheimer's into one cognitive-support card; three-column desktop card layout.
- Respite: the final repeated people photo is replaced with an accessible HTML sample calendar showing assessment and a conditional start-of-care step. It explicitly is not a booking or a promised start date.
- Homepage: added a garden-companionship feature with a relevant service link.

## Two new original family guides

1. `/resources/overnight-vs-24-hour-home-care-houston`
2. `/resources/respite-care-planning-houston`

The Resources page now links six guides. The new drafts use practical family questions, direct opening answers, Houston-area logistics, clear service links, article metadata, and an official further-reading source. No invented patient stories, pricing, rankings, or clinical results. Owner/editorial review is still required before release.

The supplied 123 Consulting Solutions SEO/AEO training deck informed this approach. Its generic examples and claims were not copied as Andora facts. No claim is made that these drafts have measured search volume, improved rankings, or earned AI citations.

## Materials inspected

- Desktop Marketing: Andora Brochure.pdf and official logo artwork.
- Desktop Business images: LOGO.png and relevant asset filenames. Files are not treated as proof that pictured people are actual employees/clients or that image-use permissions exist.
- Google Drive: 123 Consulting Solutions SEO AEO Deck.pptx; relevant Blog Articles folder metadata. The email-sequence library and unrelated personal/clinical files were not used.

Desktop/Drive originals were not edited. The brochure's old phone number was not adopted. No public Google changes have been made; proposed profile edits remain in `google-business-proposed-changes-2026-09-10.md`.

## Verification and release boundary

Completed local checks:

- TypeScript application check: passed in the verified temporary review workspace after correcting partial file copies.
- Local browser and server bundles: compiled; 20 sitemap routes plus the 404 page prerendered.
- `scripts/check-seo.mjs`: passed 21 pages, 506 internal links, 80 image elements, and 30 structured-data blocks. Also checks unique titles/descriptions, one H1/canonical, local noindex, the public/legal names, official favicon reference, and absence of the wrong logo/old phone.
- Chrome desktop review: Services overview, all five service detail pages, Resources, both new guides, and the homepage loaded. No observed failed loaded images or horizontal overflow; local noindex remained in place. The combined memory-care card and sample respite calendar were present.
- Visually inspected the corrected header/footer identity, two edited logo patches, respite hero/calendar, and all generated source images.
- Refreshed the owner's in-app Skilled Nursing preview at its existing 421px width: correct logo/name, no horizontal overflow, no observed failed loaded images. This is a narrow-screen spot check, not a complete mobile test suite.
- One `git diff --check` run passed, but a concurrent run reported truncated-file/EOF whitespace symptoms on both edited and untouched files. Do not treat workspace Git reads as consistently verified. Resolve the filesystem behavior before a release checkpoint; the successfully typechecked and prerendered local copy is the verified preview. No production build or full accessibility/mobile audit is claimed.

The optional second `--finish-only` build attempt timed out reading a Sucrase dependency before its output steps; the original full local build completed successfully, and the page checks above were run against that completed build. This environment issue does not establish production readiness.

The local preview compiles the same edited pages with deliberate noindex and simulated-form safeguards. It is not production deployment output. Follow `approval-and-release.md` before publishing; production build, live integrations, mobile verification, clinical/service claims, and the proposed video require their appropriate checks and approvals.
