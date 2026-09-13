import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import { choosingHomeCare } from '../content/choosingHomeCare';
import { familyArticles } from '../content/familyArticles';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { brand } from '../lib/brand';

type Article = { title: string; description: string; sections: Array<{ heading: string; text: string[]; bullets?: string[] }>; source: { label: string; url: string } };

const medicare = { label: 'Medicare: Home health services coverage', url: 'https://www.medicare.gov/coverage/home-health-services' };
const articles: Record<string, Article> = {
  ...familyArticles,
  'choosing-home-care-agency-houston': choosingHomeCare,
  'home-care-vs-home-health': { title: 'Home Care vs. Home Health Care: A Houston Family Guide', description: 'Understand the difference between personal home care and home health services, and questions Houston families can ask when choosing support.', source: medicare, sections: [
    { heading: 'The terms sound similar, but the services can differ', text: ['Families often use “home care” and “home health care” interchangeably. The right option depends on the support a person needs, the care plan, and the provider’s licensed scope.', 'Personal home care can focus on everyday support such as bathing, dressing, meals, companionship, mobility, and routines. Skilled home health services can involve clinical care ordered by a qualified provider, such as intermittent nursing or therapy, when eligibility requirements are met.'] },
    { heading: 'Questions to ask before choosing care', text: ['A clear conversation early helps a family choose a service level that fits current needs and leaves room for changes.'], bullets: ['What tasks need support now, and which may change soon?', 'Will a clinician be involved in the care plan?', 'What are the agency’s licensed categories and service area?', 'Who is the point of contact after hours?'] },
    { heading: 'A note about coverage', text: ['Coverage rules vary. Medicare has specific eligibility requirements for covered home health services and does not cover every kind of in-home support. Ask a plan, provider, or qualified benefits professional about an individual situation before deciding.', 'This guide is educational information, not medical, legal, or benefits advice.'] },
  ] },
  'signs-your-loved-one-needs-home-care': { title: 'Signs Your Loved One May Need Home Care Support', description: 'Learn practical, non-diagnostic signs that it may be time for a Houston family to discuss in-home care support, safety, and daily routines.', source: { label: 'National Institute on Aging: Aging in Place', url: 'https://www.nia.nih.gov/health/aging-place-growing-older-home' }, sections: [
    { heading: 'Look for changes in everyday routines', text: ['The decision to ask for help often begins with everyday changes, not one dramatic event. Meals, bathing, medication routines, mobility, household tasks, or social connection may become harder to manage consistently.', 'These observations are a starting point for a conversation, not a diagnosis. A person’s doctor or clinical team should guide decisions involving health, symptoms, or treatment.'] },
    { heading: 'Topics worth discussing as a family', text: ['Use specific observations rather than assumptions. The goal is to understand what would make life safer, more comfortable, and more manageable at home.'], bullets: ['Are meals, hydration, personal care, or routines being skipped?', 'Has transportation, mobility, or fall risk become a concern?', 'Is a family caregiver unable to get regular rest?', 'Would companionship or a consistent routine reduce isolation?', 'After a hospital stay, what help did the discharge team recommend?'] },
    { heading: 'When to seek urgent help', text: ['For an emergency or sudden, serious change in condition, call 911 or seek emergency medical care. For non-emergency planning, a care coordinator can help families discuss schedules and questions for providers.', 'When someone is leaving a hospital, a discharge planner can help the family discuss equipment, home health eligibility, and other options.'] },
  ] },
  'how-to-pay-for-home-care': { title: 'How to Plan and Pay for Home Care in Houston', description: 'A practical starting point for Houston families comparing private pay, long-term care insurance, and questions to ask about home care costs.', source: medicare, sections: [
    { heading: 'Start with the care plan, not a guess', text: ['Cost depends on the kind of support, schedule, location, staffing needs, and whether clinical services are involved. Before comparing agencies, write down the routines that need help and the times support is needed.', 'Ask each provider for a clear explanation of what is included, how schedules are staffed, what can affect cost, and who handles billing questions.'] },
    { heading: 'Questions for an insurer or benefits professional', text: ['Coverage and eligibility are individual. A plan administrator, insurer, or qualified benefits professional can explain the details that apply to a specific person.'], bullets: ['Is this service covered under the current plan or long-term care policy?', 'Is prior authorization, an assessment, or a physician order required?', 'Are there limits on hours, provider type, or service category?', 'What documents are needed for reimbursement?', 'What is the out-of-pocket responsibility?'] },
    { heading: 'Make the next step simple', text: ['Andora accepts private pay, long-term care insurance, and workers’ compensation where applicable. Availability and coverage should be confirmed before services begin.', 'Medicare coverage for home health has specific requirements and does not cover every type of in-home support. Review official guidance or speak with the plan directly for current details.'] },
  ] },
};

export default function ResourceArticlePage() {
  const { slug } = useParams();
  const article = slug ? articles[slug] : undefined;
  if (!article) return <NotFoundPage />;
  const path = `/resources/${slug}`;
  const url = `https://www.andorahealth.com${path}`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: article.title, description: article.description,
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: brand.name, url: `${brand.url}/about` },
    publisher: { '@id': `${brand.url}/#organization`, '@type': 'Organization', name: brand.name, url: brand.url },
  };
  return <>
    <SEO title={article.title} description={article.description} canonical={path} type="article" />
    <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>
    <article>
      <Section className="bg-gradient-to-br from-blue-50 to-white pt-16 pb-12">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-600"><Link to="/" className="underline">Home</Link> / <Link to="/resources" className="underline">Family guides</Link> / <span aria-current="page">This guide</span></nav>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">A family guide from {brand.name}</p>
          <h1 className="heading-1 mb-6">{article.title}</h1>
          <p className="text-lg leading-relaxed text-gray-600">{article.description}</p>
        </div>
      </Section>
      <Section>
        <div className="mx-auto max-w-3xl space-y-10 text-gray-700">
          {article.sections.map((section, index) => <section key={section.heading} className={index === 0 ? 'rounded-2xl border border-blue-100 bg-blue-50 p-6 md:p-8' : ''}>
            <h2 className="heading-2 mb-4">{section.heading}</h2>
            <div className="space-y-4 leading-8">{section.text.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
            {section.bullets && <ul className="mt-5 list-disc space-y-3 pl-6 leading-7">{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}
          </section>)}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="heading-3 mb-4">Explore support for your family</h2>
            <p className="leading-8">Learn about <Link className="care-link" to="/services/personal-care">personal care</Link>, <Link className="care-link" to="/services/skilled-nursing">skilled nursing</Link>, <Link className="care-link" to="/services/24-7-care">overnight and 24-hour support</Link>, and <Link className="care-link" to="/services/respite-care">respite care</Link>. Our <Link className="care-link" to="/service-areas">Houston service-area guide</Link> explains how to check availability at your address.</p>
          </section>
          <section className="rounded-xl border border-gray-200 p-6">
            <h2 className="heading-3 mb-3">Source for further reading</h2>
            <a className="care-link" href={article.source.url} target="_blank" rel="noopener noreferrer">{article.source.label}</a>
            <p className="mt-4 text-sm leading-6">General educational information, not an individual care assessment or coverage determination. Contact the relevant clinician or insurer for advice about your situation.</p>
          </section>
          <div className="rounded-2xl bg-primary p-8 text-white">
            <h2 className="mb-4 text-2xl font-bold">Talk through the next step</h2>
            <p className="mb-6 leading-7 text-blue-100">Tell us your location, preferred schedule, and the support you are considering. We will confirm current availability before services begin.</p>
            <div className="flex flex-wrap gap-4"><Link to="/contact" className="rounded-lg bg-white px-5 py-3 font-semibold text-primary">Discuss care needs</Link><a href="tel:+18326793716" className="rounded-lg border border-white px-5 py-3 font-semibold text-white">Call (832) 679-3716</a></div>
          </div>
          <Link className="care-link inline-block" to="/resources">Back to all family guides</Link>
        </div>
      </Section>
    </article>
  </>;
}
