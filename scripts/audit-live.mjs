import { readFile, writeFile, mkdir } from 'node:fs/promises';
const site = 'https://www.andorahealth.com';
const sitemap = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
urls.push(site + '/andora-audit-page-that-does-not-exist');
const results = [];
for (let i = 0; i < urls.length; i += 4) {
  results.push(...await Promise.all(urls.slice(i, i + 4).map(async url => {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
      const html = await response.text();
      return { url, status: response.status, finalUrl: response.url, bytes: Buffer.byteLength(html), title: html.match(/<title[^>]*>(.*?)<\/title>/)?.[1], initialH1Count: (html.match(/<h1\b/gi) || []).length, emptyReactRoot: /<div id="root"><\/div>/.test(html), canonical: html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/)?.[1] ?? null, description: html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/)?.[1] };
    } catch (error) { return { url, error: error.message }; }
  })));
}
await mkdir(new URL('../docs/', import.meta.url), { recursive: true });
await writeFile(new URL('../docs/live-seo-snapshot-2026-09-10.json', import.meta.url), JSON.stringify({ checkedAt: new Date().toISOString(), scope: 'Public HTTP responses only; not Google indexing or ranking measurements', results }, null, 2));
console.log(JSON.stringify(results.map(({url,status,emptyReactRoot,error}) => ({url,status,emptyReactRoot,error}))));
