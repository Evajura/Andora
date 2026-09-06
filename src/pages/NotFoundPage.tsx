import { Link } from 'react-router-dom';
import Section from '../components/Section';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return <><SEO title="Page Not Found | Andora Home Care" description="The page you requested could not be found." canonical="/404" /><Section className="pt-28 pb-24"><div className="mx-auto max-w-2xl text-center"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p><h1 className="heading-1 mb-5">We couldn’t find that page.</h1><p className="mb-8 text-lg leading-relaxed text-gray-600">The link may be outdated or the page may have moved.</p><Link to="/" className="inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-white">Return home</Link></div></Section></>;
}
