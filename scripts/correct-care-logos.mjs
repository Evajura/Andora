// Owner-approved conventional image edit. Source photos and Desktop originals stay intact.
import sharp from 'sharp';
import { mkdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const scratch = join(root, 'tmp/brand-reference');
await mkdir(scratch, { recursive: true });
const scenes = [
  { id: 'post-surgery-visit', source: 'exec-94874a2d-f447-4743-b9ab-34c7104faf39.png', crop: { left: 425, top: 350, width: 410, height: 240 }, quads: [ [[708, 400], [766, 386], [775, 447], [715, 461]], [[492, 515], [512, 510], [519, 534], [498, 539]] ] },
  { id: 'planned-respite', source: 'exec-c7247864-6c00-47ce-8b90-51663f4a576a.png', crop: { left: 740, top: 370, width: 190, height: 190 }, quads: [ [[805, 434], [864, 426], [860, 480], [805, 489]] ] },
];

for (const scene of scenes) {
  await sharp(join(root, 'public/care-scenes', `${scene.id}.png`))
    .extract(scene.crop).resize({ width: 950 }).png()
    .toFile(join(scratch, `${scene.id}-before-detail.png`));
}
const logoFile = join(root, 'assets/brand/andora-official-house-mark.png');
await sharp(await readFile(logoFile)).trim().resize({ width: 500 })
  .flatten({ background: '#eeeae1' }).png().toFile(join(scratch, 'supplied-logo-proof.png'));

// A real logo on a small sewn patch, perspective-mapped to the garment.
// No lettering is regenerated or approximated with a font.
const patchSize = 512;
const logo = await sharp(logoFile).trim().resize({ width: 416, height: 382, fit: 'inside' }).png().toBuffer();
const logoMeta = await sharp(logo).metadata();
const fabric = Buffer.from(`<svg width="512" height="512"><rect x="3" y="3" width="506" height="506" rx="20" fill="#d4cec0" stroke="#888579" stroke-width="5"/><rect x="15" y="15" width="482" height="482" rx="13" fill="#e6e0d3" stroke="#b5b0a3" stroke-width="2" stroke-dasharray="5 4"/></svg>`);
const patch = await sharp(fabric).composite([{ input: logo, left: Math.round((512 - logoMeta.width) / 2), top: Math.round((512 - logoMeta.height) / 2) }]).ensureAlpha().raw().toBuffer();

// Invert a bilinear quadrilateral map at each subpixel to keep the artwork exact.
function warpPatch(quad) {
  const [a, b, c, d] = quad;
  const left = Math.floor(Math.min(...quad.map(p => p[0]))) - 1;
  const top = Math.floor(Math.min(...quad.map(p => p[1]))) - 1;
  const width = Math.ceil(Math.max(...quad.map(p => p[0]))) - left + 1;
  const height = Math.ceil(Math.max(...quad.map(p => p[1]))) - top + 1;
  const data = Buffer.alloc(width * height * 4);
  const e = [b[0] - a[0], b[1] - a[1]], f = [d[0] - a[0], d[1] - a[1]];
  const g = [a[0] - b[0] + c[0] - d[0], a[1] - b[1] + c[1] - d[1]];
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const sum = [0, 0, 0, 0];
    for (const oy of [0.25, 0.75]) for (const ox of [0.25, 0.75]) {
      const px = left + x + ox - a[0], py = top + y + oy - a[1];
      let u = 0.5, v = 0.5;
      for (let i = 0; i < 6; i++) {
        const rx = e[0] * u + f[0] * v + g[0] * u * v - px;
        const ry = e[1] * u + f[1] * v + g[1] * u * v - py;
        const ux = e[0] + g[0] * v, uy = e[1] + g[1] * v;
        const vx = f[0] + g[0] * u, vy = f[1] + g[1] * u;
        const det = ux * vy - uy * vx;
        u -= (rx * vy - ry * vx) / det;
        v -= (ux * ry - uy * rx) / det;
      }
      if (u < 0 || u > 1 || v < 0 || v > 1) continue;
      const sx = Math.min(511, Math.floor(u * patchSize));
      const sy = Math.min(511, Math.floor(v * patchSize));
      const at = (sy * patchSize + sx) * 4;
      const alpha = patch[at + 3] / 255;
      const shade = 0.94 + 0.06 * u;
      for (let channel = 0; channel < 3; channel++) sum[channel] += patch[at + channel] * alpha * shade / 4;
      sum[3] += alpha / 4;
    }
    const out = (y * width + x) * 4;
    if (sum[3]) for (let ch = 0; ch < 3; ch++) data[out + ch] = Math.round(sum[ch] / sum[3]);
    data[out + 3] = Math.round(sum[3] * 255);
  }
  return { input: data, raw: { width, height, channels: 4 }, left, top };
}

const originalDir = process.argv[2];
if (!originalDir) throw new Error('Pass the directory containing the two untouched generated originals.');
for (const scene of scenes) {
  const destination = join(root, 'public/care-scenes', `${scene.id}.png`);
  await sharp(join(originalDir, scene.source)).composite(scene.quads.map(warpPatch)).png().toFile(destination);
  await sharp(destination).extract(scene.crop).resize({ width: 950 }).png()
    .toFile(join(scratch, `${scene.id}-after-detail.png`));
  console.log(`Corrected with supplied artwork: ${destination}`);
}
