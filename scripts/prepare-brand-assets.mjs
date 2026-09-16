// Web-sized derivatives of owner-supplied artwork. Never recreate the logo.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = join(root, 'public/brand');
await mkdir(output, { recursive: true });
const logo = await sharp(join(root, 'assets/brand/andora-official-house-mark.png')).trim().png().toBuffer();
await sharp(logo).resize({ width: 800 }).png().toFile(join(output, 'andora-private-duty-home-health.png'));
const { width, height } = await sharp(logo).metadata();
// Isolate the existing house-and-hands symbol for small browser/app icons.
const symbol = await sharp(logo).extract({ left: Math.floor(width * 0.24), top: 0, width: Math.floor(width * 0.52), height: Math.round(height * 0.60) }).png().toBuffer();
for (const size of [48, 180, 192]) {
  await sharp(symbol).flatten({ background: '#ffffff' }).resize({ width: size - 10, height: size - 10, fit: 'contain', background: '#ffffff' })
    .extend({ top: 5, bottom: 5, left: 5, right: 5, background: '#ffffff' })
    .png()
    .toFile(join(output, `andora-icon-${size}.png`));
}
const socialLogo = await sharp(logo).resize({ width: 560, height: 440, fit: 'inside' }).png().toBuffer();
const socialMeta = await sharp(socialLogo).metadata();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#f5f7fb' } })
  .composite([{ input: socialLogo, left: Math.round((1200 - socialMeta.width) / 2), top: Math.round((630 - socialMeta.height) / 2) }])
  .png().toFile(join(output, 'andora-social.png'));
console.log('Prepared official website logo, icons, and social preview.');
