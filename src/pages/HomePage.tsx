import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import CareProcess from '../components/CareProcess';
import FAQ, { faqs } from '../components/FAQ';
import CoverageArea from '../components/CoverageArea';
import FinalCTA from '../components/FinalCTA';
import SEO from '../components/SEO';
import { LocalBusinessSchema, FAQPageSchema } from '../components/StructuredData';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Andora Home Care | Private Duty Nursing in Houston, TX"
        description="Licensed private duty nursing and 24-hour home care in Houston. Professional, compassionate caregivers providing skilled nursing, companion care, and personal care services. Call (832) 679-3716."
        canonical="/"
      />
      <LocalBusinessSchema />
      <FAQPageSchema faqs={faqs} />
      <Hero />
      <Services />
      <WhyChooseUs />
      <CareProcess />
      <FAQ showAllLink />
      <CoverageArea />
      <FinalCTA />
    </>
  );
}
