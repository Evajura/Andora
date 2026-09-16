# Andora: local SEO, AEO and GEO review

Date: September 10, 2026. Target: private-pay home care and private-duty nursing in Greater Houston, including Memorial, River Oaks and Downtown. This work is local, not published. The business address remains 7003 Telford Hollow Trail, Richmond, TX 77407; the phone is (832) 679-3716.

## Assessment

Andora has useful service coverage and an existing local content foundation. The public homepage still returns an empty React root before JavaScript renders and its description contains the old phone number. This does not prove Google cannot index it, but it leaves initial content dependent on rendering. The priorities are complete initial page content, faster images and clearer answers that help families compare care. Rankings, actual search traffic and AI citations have not been measured; no numerical SEO score or first-place ranking is claimed.

## Local changes awaiting final verification

| Area | Change | Priority |
| --- | --- | --- |
| Initial HTML | Render real React page content, metadata and structured data at build time; preserve browser scripts and styles | High |
| Image delivery | 27 originals totaling 61,831,451 bytes now have responsive WebP variants totaling 3,821,806 bytes; originals retained | High |
| Discovery | Add service links in the homepage cards and footer, links between guides and services, and article breadcrumbs | High |
| Contact details | Use the confirmed 832 number and the real Richmond office; distinguish service areas from office locations | High |
| Content | Add an original Houston agency-comparison checklist, improve the guide layout, expand service-area planning details | High |
| Clear answers | Opening answer sections, visible FAQs, Article and BreadcrumbList markup; no invented expert reviewers or reviews | Medium |
| Usability | Define missing heading styles, improve button contrast, mobile-menu state, image dimensions, form labels and feedback | Medium |
| Preview safety | Local-only binding, noindex headers and metadata, disallow crawling; contact and booking are simulated, applications paused | High |
| Error handling | Unknown article slugs show the 404 page; local HTTP server returns 404 rather than a successful page response | Medium |

Local preview safety controls must not be enabled for the production build. A future deployment requires checking the real host’s HTTP status codes and indexing settings again.

## Keyword and content opportunities

These are editorial priorities based on service fit and purchase intent, not measured search volume or difficulty. Current ranking and difficulty are **unmeasured for every row**. Search Console and an authorized SEO data source are needed to replace those unknowns.

| Query/topic | Priority | Intent | Destination |
| --- | --- | --- | --- |
| private duty nursing Houston | High | Commercial | Nursing service page |
| private pay home care Houston | High | Commercial | Homepage and payment guide |
| home care Memorial Houston | High | Commercial | Service-area page |
| home care River Oaks Houston | High | Commercial | Service-area page |
| home care Downtown Houston | High | Commercial | Service-area page |
| 24 hour home care Houston | High | Commercial | 24-hour service page |
| overnight caregiver Houston | High | Commercial | 24-hour service page |
| post hospital home care Houston | High | Commercial | Recovery service page |
| respite care Houston | High | Commercial | Respite service page |
| personal care at home Houston | High | Commercial | Personal care page |
| choosing a home care agency Houston | High | Comparison | New family checklist |
| home care cost Houston | High | Comparison | Payment guide; approved rate policy needed |
| home care vs home health Houston | Medium | Informational | Existing comparison guide |
| questions to ask a home care agency | Medium | Informational | New family checklist |
| home care Richmond TX | Medium | Commercial | Service-area page |
| home care Sugar Land | Medium | Commercial | Service-area page |
| how to pay for private home care | Medium | Informational | Payment guide |
| long term care insurance home care | Medium | Informational | Payment guide; insurer verification |
| signs a parent needs home care | Medium | Informational | Existing family guide |
| planning care after hospital discharge | Medium | Informational | Future non-diagnostic planning checklist |

Avoid separate near-identical neighborhood pages. Add a dedicated location page only when there is substantial, accurate local information to help that audience.

## Competitor observations

These are observations of public content, not proof of greater traffic or better rankings.

| Dimension | Andora local work | Homewatch CareGivers Houston | Giving Care Houston |
| --- | --- | --- | --- |
| Content depth | More useful comparison and location-planning content added | Detailed Memorial page covering staffing, communication and care arrangements | Concierge-oriented care positioning and care options |
| Trust content | Actual address, phone and existing license reference; owner verification still needed | Named clinical leadership and review claims displayed | Family-facing service explanations |
| Keyword count/rankings | Not measured | Not measured | Not measured |
| Publishing frequency | Not established | Not measured | Not measured |
| Backlink strength | Not measured | Not measured | Not measured |
| Technical performance score | No comparable field score measured | Not measured | Not measured |
| AI citations/SERP features | Not measured | Not measured | Not measured |

Observed sources: [Memorial care page](https://www.homecarehouston.com/service-areas/memorial/) and [Giving Care Houston](https://givingcarehouston.com/). Their claims about availability, reviews or outcomes have not been independently verified and were not copied to Andora.

## What remains outside this local build

- Verify the exact licensed service categories and operational promises before public release. Confirm clinical review of care-related copy; do not label it nurse-reviewed until reviewed.
- Configure and test the production contact-form destination and Calendly with permission. Local simulated success is not proof of message delivery.
- Connect Search Console, review indexing and query data, and establish qualified enquiry/call tracking with an appropriate privacy review. Check real mobile Core Web Vitals; image size reduction alone is not a passing field result.
- Review Google Business Profile access, categories, service area, address display eligibility, hours and phone consistency. No listing or DNS changes were made here.
- Obtain permission before external outreach or creating business listings. Relevant options include genuine local memberships, professional associations and useful resources that community organizations choose to reference. No backlinks were purchased or created in this work.
- Build an evidence-backed author/about page using approved credentials and genuine, permissioned testimonials. Do not invent proof or imply hospital affiliations.

## Action plan

This week: verify the local preview, approve wording and service scope, test real form delivery, and review Search Console/Business Profile access. These are high-impact dependencies before publication.

Next: expand the payment guide with an approved pricing approach (not a single client’s rate), publish a discharge-planning checklist after clinical review, and pursue a small set of genuine community relationships. Track qualified enquiries and care starts, not just visits. Review measured results after public deployment and indexing; timing and ranking outcomes are not guaranteed.

## Search and AI guidance

Google says established SEO practices remain relevant to AI Overviews and AI Mode; special AI markup is not required and inclusion is not guaranteed. The focus here is accessible content, useful internal links, accurate structured data and clear answers. [Google’s AI features guidance](https://developers.google.com/search/docs/appearance/ai-features)

The marketing claim that one poor backlink automatically cancels all other work is not a sound basis for a strategy. Avoid manipulative paid links and judge opportunities by relevance and genuine audience value. [Google’s spam policies](https://developers.google.com/search/docs/essentials/spam-policies)

## Verification results and remaining limits

- Local-only fallback build completed with the current React content and styles. The normal Vite production pipeline remains in place but did not complete reliably in this environment; it must be validated before deployment. This is not a production-ready release claim.
- Static checks passed for all 18 sitemap pages plus the 404 page: one title, H1 and canonical per page; unique titles and descriptions; appropriate local noindex; browser script present; 25 valid JSON-LD blocks; 441 internal-link instances resolved; 71 image instances had alt attributes and their local files existed.
- Corrected repeated H1 headings in the embedded terms document without changing its legal wording.
- Actual local HTTP requests returned 200 for the homepage and 404 for an unknown URL. The server sends noindex/nofollow/noarchive and no-store headers and binds only to 127.0.0.1.
- Chrome displayed the homepage and revised services page. The homepage now has three service choices without card photos; the services page has a shorter introduction and image-free, two-column cards with three key features each.
- A fictional local contact-form submission displayed "Preview form completed" and "Nothing was sent or saved." Booking was visibly paused. No browser warning/error entries were returned in these checks. Real production message delivery and calendar bookings have not been tested.
- Desktop visuals were inspected. The browser viewport override did not produce the requested mobile width, so a mobile browser pass is still outstanding. Do not describe the site as having passed mobile or Core Web Vitals testing.
- TypeScript application checking passed on both the synchronized review copy and the original checkout. Byte-identical file refreshes corrected the stale-read failures for that check; git diff --check also passed. ESLint was stopped after further slow reads, so a clean normal-checkout lint pass remains a release prerequisite.
- Google manager access was verified. The primary 832 phone number and Memorial/River Oaks service areas are already present. Three inspected service descriptions were empty. Proposed copy is saved separately; no Google edit was published. SMS number, address eligibility, hours and live-in arrangements need owner confirmation.
- Homepage video remains unfinished because the footage download failed and the separate permission request was aborted. No video placeholder was presented as working footage. A voiceover and shot brief are saved in homepage-video-brief.md.

The existing public site, GitHub remote and DNS were not modified. See approval-and-release.md for the approval checkpoint and remaining deployment checks.
