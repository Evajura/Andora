import { Helmet } from 'react-helmet-async';
import { brand } from '../lib/brand';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://www.andorahealth.com/#organization',
    name: brand.name,
    legalName: brand.legalName,
    alternateName: brand.shortName,
    url: 'https://www.andorahealth.com',
    logo: `${brand.url}${brand.logo}`,
    telephone: '+1-832-679-3716',
    email: 'Privatecare@andorahealth.com',
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'Texas HCSSA License',
      value: '024760',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7003 Telford Hollow Trail',
      addressLocality: 'Richmond',
      addressRegion: 'TX',
      postalCode: '77407',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Harris County, Texas' },
      { '@type': 'AdministrativeArea', name: 'Fort Bend County, Texas' },
      { '@type': 'AdministrativeArea', name: 'Montgomery County, Texas' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Home Care Services',
      itemListElement: [
        'Private Duty Nursing',
        'Skilled Nursing Care',
        'Personal Care',
        '24/7 Home Care',
        'Companionship',
        'Respite Care',
        'Dementia Care',
      ].map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
      })),
    },
    description:
      'Licensed private duty nursing and 24-hour home care in Houston. Professional, compassionate caregivers providing skilled nursing, companion care, and personal care services.',
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${brand.url}/#website`, name: brand.name, alternateName: brand.shortName, url: brand.url, publisher: { '@id': `${brand.url}/#organization` } })}</script>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

interface FAQ {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  faqs: FAQ[];
}

export function FAQPageSchema({ faqs }: FAQPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
