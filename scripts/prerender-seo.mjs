import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const site = 'https://www.andorahealth.com';
const dist = new URL('../dist/', import.meta.url).pathname;
const previewRobots = process.env.VERCEL_ENV === 'preview'
  ? '<meta name="robots" content="noindex, nofollow, noarchive" />'
  : '';
const pages = [
  ['/', 'Andora Home Care | Private Duty Nursing in Houston, TX', 'Licensed private duty nursing and 24-hour home care in Houston. Call (832) 679-3716.'],
  ['/services', 'Home Care Services in Houston | Andora Home Care', 'Explore skilled nursing, personal care, 24/7 care, respite care, and post-hospital recovery in Houston.'],
  ['/services/skilled-nursing', 'Skilled Nursing Care at Home in Houston | Andora', 'Licensed in-home skilled nursing care for Houston families.'],
  ['/services/personal-care', 'Personal Care Services for Elderly in Houston | Andora', 'Compassionate personal care in Houston, including bathing, meals, companionship, and daily-living support.'],
  ['/services/24-7-care', '24/7 Home Care & Dementia Care in Houston | Andora', 'Around-the-clock home care and dementia support for Houston families.'],
  ['/services/post-hospital-recovery', 'Post-Hospital Home Care in Houston | Andora', 'Post-hospital and post-surgery home care support for Houston families.'],
  ['/services/respite-care', 'Respite Care for Family Caregivers in Houston | Andora', 'Flexible respite and companion care for Houston family caregivers.'],
  ['/about', 'About Andora | RN-Led Private Duty Home Care in Houston', 'Learn about Andora’s RN-led private-duty home care approach.'],
  ['/caregivers', 'Careers at Andora Home Care | Houston', 'Explore caregiver, CNA, LVN, and RN opportunities in Houston.'],
  ['/contact', 'Contact Andora Home Care | Houston Consultation', 'Contact Andora to discuss private-duty nursing and in-home support.'],
  ['/resources', 'Home Care Resources & FAQs | Andora Home Care', 'Practical resources for Houston families comparing home care and planning support.'],
  ['/service-areas', 'Houston Home Care Service Areas | Andora Home Care', 'Private-duty nursing, personal care, respite care, and around-the-clock support across Houston and nearby communities.'],
  ['/resources/home-care-vs-home-health', 'Home Care vs. Home Health Care: A Houston Family Guide', 'Understand the difference between personal home care and home health services.'],
  ['/resources/signs-your-loved-one-needs-home-care', 'Signs Your Loved One May Need Home Care Support', 'Practical, non-diagnostic signs for discussing in-home support and safety.'],
  ['/resources/how-to-pay-for-home-care', 'How to Plan and Pay for Home Care in Houston', 'A practical starting point for Houston families comparing home care costs and coverage questions.'],
  ['/privacy-policy', 'Privacy Policy | Andora Home Care', 'Read Andora Home Care’s privacy policy.'],
  ['/terms-and-conditions', 'Terms and Conditions | Andora Home Care', 'Read the terms and conditions for Andora Home Care.'],
];
const base = await readFile(join(dist, 'index.html'), 'utf8');
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const [path, title, description] of pages) {
  const url = `${site}${path}`;
  const schema = path.startsWith('/resources/')
    ? { '@context': 'https://schema.org', '@type': 'Article', headline: title, description, mainEntityOfPage: url, publisher: { '@type': 'Organization', name: 'Andora Home Care', url: site } }
    : { '@context': 'https://schema.org', '@type': 'WebPage', name: title, description, url };
  const head = `<title>${escape(title)}</title><meta name="description" content="${escape(description)}" />${previewRobots}<link rel="canonical" href="${url}" /><meta property="og:title" content="${escape(title)}" /><meta property="og:description" content="${escape(description)}" /><meta property="og:url" content="${url}" /><meta property="og:type" content="website" /><meta property="og:image" content="${site}/Andora_BlackLogo_Variant_PNG@14x.png" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="${escape(title)}" /><meta name="twitter:description" content="${escape(description)}" /><script type="application/ld+json">${JSON.stringify(schema)}</script>`;
  const html = base.replace(/<title>[\s\S]*?<\/title>[\s\S]*?<\/head>/, `${head}</head>`);
  const output = path === '/' ? join(dist, 'index.html') : join(dist, path.slice(1), 'index.html');
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html);
}
