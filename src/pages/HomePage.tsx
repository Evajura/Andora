import Hero from '../components/Hero';
import FamilyGuides from '../components/FamilyGuides';
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
        title="Andora Private Duty Home Health | Houston, TX"
        description="Explore private-duty nursing, personal care, and 24-hour support in Houston and Memorial. Call Andora at (832) 679-3716 to discuss your family's needs."
        canonical="/"
      />
      <LocalBusinessSchema />
      <FAQPageSchema faqs={faqs} />
      <Hero />
      <Services />
      <WhyChooseUs />
      <CareProcess />
      <FAQ showAllLink />
      <FamilyGuides />
      <CoverageArea />
      <FinalCTA />
    </>
  );
}
