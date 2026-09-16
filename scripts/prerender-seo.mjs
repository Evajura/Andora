import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from '../.ssr/entry-server.js';

const site = 'https://www.andorahealth.com';
const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const sitemap = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => {
  const url = new URL(match[1]);
  if (url.origin !== site) throw new Error('Unexpected sitemap origin: ' + url.origin);
  return url.pathname;
});
if (!paths.includes('/') || new Set(paths).size !== paths.length) {
  throw new Error('Sitemap must contain the home page and unique URLs.');
}
const base = await readFile(join(dist, 'index.html'), 'utf8');
// Remove only fallback SEO elements, preserving Vite's scripts and stylesheets.
const template = base
  .replace(/<title>[\s\S]*?<\/title>/g, '')
  .replace(/<meta\b[^>]*(?:name="(?:description|robots|twitter:[^"]*)"|property="og:[^"]*")[^>]*>/g, '')
  .replace(/<link\b[^>]*rel="canonical"[^>]*>/g, '');
for (const path of [...paths, '/404']) {
  const rendered = render(path);
  if (!rendered.html.includes('<h1') || !rendered.head.includes('<title')) {
    throw new Error('Missing rendered page content or metadata for ' + path);
  }
  let head = rendered.head;
  if (process.env.VERCEL_ENV === 'preview') {
    head = head.replace(/<meta\b[^>]*name="robots"[^>]*>/g, '') +
      '\n<meta name="robots" content="noindex, nofollow, noarchive" />';
  }
  const html = template.replace('</head>', head + '\n</head>')
    .replace('<div id="root"></div>', () => '<div id="root">' + rendered.html + '</div>');
  if (!/<script[^>]*type="module"[^>]*src="\/assets\//.test(html) || !html.includes('rel="stylesheet"')) {
    throw new Error('Build assets missing from ' + path);
  }
  // Vercel cleanUrls serves nested .html files as extensionless URLs.
  const output = path === '/' ? join(dist, 'index.html') : join(dist, path.slice(1) + '.html');
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html);
  console.log('Rendered ' + path);
}
if (process.env.VERCEL_ENV === 'preview' || process.env.VITE_LOCAL_PREVIEW === 'true') {
  await writeFile(join(dist, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
}
console.log('Prerendered ' + paths.length + ' sitemap pages plus a 404 page with full content and metadata.');
