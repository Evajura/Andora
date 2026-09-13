import { Helmet } from 'react-helmet-async';
import { isLocalPreview } from '../lib/localPreview';
import { brand } from '../lib/brand';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  noindex?: boolean;
  type?: 'website' | 'article';
}

const SITE_URL = brand.url;
const OG_IMAGE = `${SITE_URL}${brand.socialImage}`;

export default function SEO({ title, description, canonical, noindex = false, type = 'website' }: SEOProps) {
  const fullUrl = `${SITE_URL}${canonical}`;
  const parent = canonical.startsWith('/resources/') ? { name: 'Family guides', path: '/resources' } : canonical.startsWith('/services/') ? { name: 'Services', path: '/services' } : null;
  const crumbs = [{ name: 'Home', path: '/' }, ...(parent ? [parent] : []), { name: title.split(' | ')[0], path: canonical }];
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.name, item: `${SITE_URL}${crumb.path}` })) };

  return (
    <Helmet>
      <title>{title}</title>
      {canonical !== '/' && !noindex && <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>}
      <meta name="description" content={description} />
      <meta name="robots" content={noindex || isLocalPreview ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={brand.name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:alt" content={brand.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  );
}
