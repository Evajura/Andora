import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import privacyPolicyHtml from '../content/privacy-policy.html?raw';
import termsHtml from '../content/terms-and-conditions.html?raw';

type LegalDocumentPageProps = {
  document: 'privacy' | 'terms';
};

const documents = {
  privacy: {
    title: 'Privacy Policy | Andora Private Duty Home Health',
    description:
      'Read how Andora Private Duty Home Health collects, uses, discloses, and safeguards personal information.',
    canonical: '/privacy-policy',
    html: privacyPolicyHtml,
  },
  terms: {
    title: 'Terms and Conditions | Andora Private Duty Home Health',
    description:
      'Review the terms governing use of the Andora Private Duty Home Health website, communications, and text messaging program.',
    canonical: '/terms-and-conditions',
    html: termsHtml,
  },
} as const;

function extractDocumentBody(html: string) {
  const wrap = html.match(/<div class="wrap">([\s\S]*?)<\/div>\s*<\/body>/i)?.[1] ?? html;

  return wrap
    .replace(/<div class="masthead">[\s\S]*?<\/div>/i, '')
    .replace(/<footer>[\s\S]*?<\/footer>/i, '');
}

export default function LegalDocumentPage({ document }: LegalDocumentPageProps) {
  const content = documents[document];
  const documentBody = extractDocumentBody(content.html);

  return (
    <>
      <SEO
        title={content.title}
        description={content.description}
        canonical={content.canonical}
      />

      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-white">
        <div className="container-custom py-10 md:py-14">
          <Link
            to="/"
            className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-blue-800 transition-smooth"
          >
            <ArrowLeft size={16} />
            Back to Andora
          </Link>
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-primary">
            <FileText size={19} aria-hidden="true" />
            Legal
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-10 md:py-16">
        <div className="container-custom">
          <article
            className="legal-document mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10 lg:p-14"
            dangerouslySetInnerHTML={{ __html: documentBody }}
          />
        </div>
      </section>
    </>
  );
}
