import type { ImgHTMLAttributes } from 'react';
import imageManifest from '../lib/imageManifest';
import { careImageDescriptions } from '../lib/careImageDescriptions';

type ImageData = { src: string; srcSet: string; width: number; height: number };
const images: Record<string, ImageData> = imageManifest;

export default function ResponsiveImage({ src = '', alt = '', sizes = '(max-width: 767px) 100vw, 50vw', loading = 'lazy', fetchPriority, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const optimized = images[src];
  const scene = src.startsWith('/care-scenes/') ? careImageDescriptions[src.slice('/care-scenes/'.length).replace(/\.png$/, '')] : undefined;
  return <img src={optimized?.src ?? src} alt={scene ? `Illustrative scene: ${scene}` : alt} data-ai-generated={scene ? 'true' : undefined} srcSet={optimized?.srcSet} width={optimized?.width} height={optimized?.height} sizes={optimized ? sizes : undefined} loading={loading} decoding="async" {...(fetchPriority ? { fetchpriority: fetchPriority } : {})} {...props} />;
}
