import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { extname, resolve, sep } from 'node:path';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const index = await readFile(resolve(root, 'index.html'), 'utf8');
if (!index.includes('Local review on this Mac.') || !index.includes('noindex')) {
  throw new Error('Build with VITE_LOCAL_PREVIEW=true before starting the local review server.');
}
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.woff2': 'font/woff2' };
const server = createServer(async (req, res) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');
  res.setHeader('Cache-Control', 'no-store');
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); res.end(); return; }
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://127.0.0.1:4173').pathname);
    const relative = pathname === '/' ? 'index.html' : pathname.slice(1).replace(/\/$/, '');
    let path = resolve(root, relative);
    if (!path.startsWith(resolve(root) + sep) || relative.split('/').some(part => part.startsWith('.'))) {
      res.writeHead(403); res.end(); return;
    }
    if (!extname(path)) path += '.html';
    let status = 200;
    try { if (!(await stat(path)).isFile()) throw new Error('Not a file'); }
    catch { path = resolve(root, '404.html'); status = 404; }
    const body = await readFile(path);
    res.writeHead(status, { 'Content-Type': types[extname(path).toLowerCase()] || 'application/octet-stream', 'Content-Length': body.length });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch { res.writeHead(400); res.end('Invalid request'); }
});
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
server.listen(4173, '127.0.0.1', () => console.log('Local review only: http://127.0.0.1:4173/'));
