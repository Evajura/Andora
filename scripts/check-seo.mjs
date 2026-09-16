import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
const titles = new Set();
const descriptions = new Set();
let internalLinks = 0;
let imageCount = 0;
let jsonCount = 0;
const outputPath = path => join(root, path === '/' ? 'index.html' : path.slice(1).replace(/\/$/, '') + '.html');
const metaContent = (html, name) => html.match(new RegExp('<meta[^>]+name="' + name + '"[^>]+content="([^"]*)"'))?.[1];
for (const path of [...paths, '/404']) {
  const html = await readFile(outputPath(path), 'utf8');
  const title = html.match(/<title[^>]*>(.*?)<\/title>/)?.[1];
  const description = metaContent(html, 'description');
  const robots = metaContent(html, 'robots');
  assert(title && description && robots, path + ': missing metadata');
  assert.equal((html.match(/<title\b/g) || []).length, 1, path + ': duplicate titles');
  assert.equal((html.match(/<h1\b/g) || []).length, 1, path + ': expected one H1');
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, path + ': expected one canonical');
  assert(html.includes('href="https://www.andorahealth.com' + (path === '/' ? '/' : path) + '"'), path + ': wrong canonical');
  assert(!titles.has(title), path + ': duplicate title');
  assert(!descriptions.has(description), path + ': duplicate description');
  titles.add(title); descriptions.add(description);
  const preview = html.includes('Local review on this Mac.');
  assert(robots.startsWith(preview || path === '/404' ? 'noindex' : 'index'), path + ': wrong indexing policy');
  assert(/<script[^>]*type="module"[^>]*src="\/assets\//.test(html), path + ': missing browser app');
  assert(html.includes('Andora Private Duty Home Health'), path + ': missing public business name');
  assert(html.includes('Andora Health Services, LLC'), path + ': missing legal entity');
  assert(!html.includes('Andora Home Care'), path + ': inconsistent old public name');
  assert(!html.includes('Andora_BlackLogo_Variant'), path + ': wrong logo still referenced');
  assert(!html.includes('(346) 202-3538'), path + ': old public contact number');
  assert(html.includes('/brand/andora-icon-48.png'), path + ': missing official favicon');
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    const data = JSON.parse(match[1]); assert(data['@type']); jsonCount++;
  }
  for (const match of html.matchAll(/<a\b[^>]*href="([^"#?]+)[^"]*"/g)) {
    const href = match[1];
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const target = href.replace(/\/$/, '') || '/';
    assert(paths.includes(target), path + ': broken internal link ' + href);
    internalLinks++;
  }
  for (const match of html.matchAll(/<img\b([^>]*)>/g)) {
    assert(/\balt="/.test(match[1]), path + ': image missing alt');
    const src = match[1].match(/\bsrc="([^"]+)"/)?.[1];
    if (src?.startsWith('/')) assert((await stat(join(root, decodeURIComponent(src.slice(1))))).isFile(), 'Missing image ' + src);
    imageCount++;
  }
  console.log('PASS ' + path);
}
console.log(JSON.stringify({ sitemapPages: paths.length, testedPagesIncluding404: paths.length + 1, internalLinks, images: imageCount, structuredDataBlocks: jsonCount }));
