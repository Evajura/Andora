import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { FAQPageSchema } from '../components/StructuredData';

const areas = ['Houston', 'Richmond', 'Memorial', 'Downtown Houston', 'River Oaks', 'Texas Medical Center area', 'The Heights', 'West University', 'Bellaire', 'Energy Corridor', 'Katy', 'Sugar Land', 'Pearland', 'Cypress', 'Spring', 'The Woodlands'];
const faqs = [
  { question: 'Where is Andora’s office?', answer: 'Our office is at 7003 Telford Hollow Trail, Richmond, TX 77407. Care takes place in the client’s home; the Houston neighborhoods listed here are service areas, not additional office locations.' },
  { question: 'Can you arrange care in Memorial, River Oaks, or Downtown Houston?', answer: 'Contact Andora with the address, type of support, preferred start date, and schedule. Our team confirms whether the location and requested care can be staffed before services begin.' },
  { question: 'Do you provide overnight or 24-hour support?', answer: 'Andora offers overnight and extended-hour care options. Call with the preferred days, hours, location, and support you are considering so we can discuss availability and next steps.' },
];
export default function ServiceAreasPage() {
  return <>
    <SEO title="Houston Service Areas | Andora Private Duty Home Health" description="Explore home care in Houston, Memorial, River Oaks, and Downtown. Andora is based in Richmond. Call (832) 679-3716 to confirm local availability." canonical="/service-areas" />
    <FAQPageSchema faqs={faqs} />
    <Section className="bg-gradient-to-br from-blue-50 to-white pt-20 pb-12">
      <div className="mx-auto max-w-3xl text-center">
        <MapPin className="mx-auto mb-4 text-primary" size={38} />
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Based in Richmond. Focused on care at home.</p>
        <h1 className="heading-1 mb-6">Home Care Across Houston and Nearby Communities</h1>
        <p className="text-lg leading-8 text-gray-600">From a few hours of personal support to private-duty nursing or overnight care, the right arrangement starts with your family’s needs. Tell us where care is needed and when. We confirm service scope, location, and staffing before making a commitment.</p>
      </div>
    </Section>
    <Section>
      <div className="grid gap-10 md:grid-cols-2">
        <div><h2 className="heading-2 mb-5">Ask about care in your community</h2><ul className="grid grid-cols-2 gap-3 text-gray-700">{areas.map(area => <li key={area} className="rounded-lg bg-gray-50 px-4 py-3">{area}</li>)}</ul></div>
        <div className="rounded-2xl bg-primary p-8 text-white">
          <h2 className="mb-5 text-3xl font-bold">What to have ready when you call</h2>
          <ul className="mb-8 list-disc space-y-4 pl-5 leading-7 text-blue-100"><li>The address or ZIP code where care is needed.</li><li>The everyday tasks or nursing support you want to discuss.</li><li>Preferred days, hours, and start date.</li><li>Building access, parking, pets, or other household considerations.</li></ul>
          <a href="tel:+18326793716" className="inline-flex rounded-lg bg-white px-5 py-3 font-semibold text-primary">Call (832) 679-3716</a>
          <p className="mt-6 text-sm leading-6 text-blue-100">Office: 7003 Telford Hollow Trail, Richmond, TX 77407. Call before visiting.</p>
        </div>
      </div>
    </Section>
    <Section background="light">
      <h2 className="heading-2 mb-8">Care that fits the home and the routine</h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div><h3 className="heading-3 mb-3">Memorial and River Oaks</h3><p className="leading-7 text-gray-600">Discuss daily routines, privacy preferences, and how care should fit around family or other household help. Ask about continuity, handoffs, and the communication you want.</p><Link to="/services/personal-care" className="care-link mt-4 inline-block">Explore personal care</Link></div>
        <div><h3 className="heading-3 mb-3">Downtown and central Houston</h3><p className="leading-7 text-gray-600">For apartments and condos, plan building entry, elevator access, parking, and visitor requirements ahead of the first shift. Share any access changes with the care team.</p><Link to="/services/24-7-care" className="care-link mt-4 inline-block">Discuss overnight support</Link></div>
        <div><h3 className="heading-3 mb-3">Coming home after a hospital stay</h3><p className="leading-7 text-gray-600">Bring the discharge team’s recommendations into the conversation. Clarify which tasks need licensed nursing and which involve everyday support before arranging care.</p><Link to="/services/post-hospital-recovery" className="care-link mt-4 inline-block">Plan post-hospital support</Link></div>
      </div>
      <p className="mt-8 text-sm text-gray-600">Neighborhood and Medical Center references describe geography, not hospital affiliations or separate Andora offices.</p>
    </Section>
    <Section>
      <div className="mx-auto max-w-3xl"><h2 className="heading-2 mb-8">Questions about local care</h2><div className="space-y-7">{faqs.map(faq => <section key={faq.question}><h3 className="mb-3 text-xl font-bold text-primary">{faq.question}</h3><p className="leading-8 text-gray-600">{faq.answer}</p></section>)}</div><p className="mt-8 leading-7">Still comparing options? Use our <Link className="care-link" to="/resources/choosing-home-care-agency-houston">Houston home care agency checklist</Link>, or <Link className="care-link" to="/contact">contact Andora</Link> to talk through the next step.</p></div>
    </Section>
  </>;
}
