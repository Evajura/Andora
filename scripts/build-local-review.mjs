// Local-only fallback for environments where Vite's development watcher stalls.
// The production build remains Vite + prerender; never deploy this preview output.
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync, mkdirSync, cpSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindConfig from '../tailwind.config.js';

const root = fileURLToPath(new URL('../', import.meta.url));
process.chdir(root);
process.env.VITE_LOCAL_PREVIEW = 'true';
const define = { 'import.meta.env': JSON.stringify({ VITE_LOCAL_PREVIEW: 'true', PROD: true }), 'process.env.NODE_ENV': '"production"' };
mkdirSync(resolve(root, 'dist/assets'), { recursive: true });
// --finish-only is for a review where both JS bundles were just compiled by the
// equivalent esbuild CLI commands because the Node API was stalled. Local only.
if (!process.argv.includes('--finish-only')) {
  const require = createRequire(import.meta.url);
  const viteRequire = createRequire(require.resolve('vite'));
  const { build } = viteRequire('esbuild');
  await build({ entryPoints: ['src/main.tsx'], outfile: 'dist/assets/local-review.js', bundle: true, minify: true, jsx: 'automatic', format: 'esm', loader: { '.html': 'text', '.css': 'empty' }, define });
  console.log('Local browser code compiled.');
  await build({ entryPoints: ['src/entry-server.tsx'], outdir: '.ssr', bundle: true, jsx: 'automatic', packages: 'external', platform: 'node', format: 'esm', loader: { '.html': 'text' }, define });
}
console.log('Preparing local CSS and prerendered pages.');
const css = await postcss([tailwindcss(tailwindConfig), autoprefixer()]).process(readFileSync('src/index.css', 'utf8'), { from: 'src/index.css', to: 'dist/assets/local-review.css' });
writeFileSync('dist/assets/local-review.css', css.css);
cpSync('public', 'dist', { recursive: true });
const template = readFileSync('index.html', 'utf8')
  .replace(/<script\b[^>]*src="\/src\/main\.tsx"[^>]*><\/script>/, '<script type="module" src="/assets/local-review.js"></script>')
  .replace('</head>', '<link rel="stylesheet" href="/assets/local-review.css" />\n</head>');
writeFileSync('dist/index.html', template);
await import('./prerender-seo.mjs');
console.log('Local-only review build complete. Do not publish this output.');
