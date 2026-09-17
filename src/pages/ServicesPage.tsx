import { Heart, Clock, Users, Home, Stethoscope, HandHeart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import ResponsiveImage from '../components/ResponsiveImage';

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Stethoscope,
      title: 'Skilled Nursing Care',
      description: 'Licensed nurses providing medical care, medication management, wound care, and health monitoring in the comfort of your home.',
      features: ['Medication Administration', 'Wound Care', 'IV Therapy', 'Post-Surgical Care', 'Chronic Disease Management'],
      image: '/Layer 9.png'
    },
    {
      icon: Heart,
      title: 'Personal Care',
      description: 'Compassionate assistance with daily living activities to help maintain independence and dignity.',
      features: ['Bathing & Grooming', 'Dressing Assistance', 'Mobility Support', 'Meal Preparation', 'Light Housekeeping'],
      image: '/IMG_2598.JPG'
    },
    {
      icon: Clock,
      title: '24/7 Care',
      description: 'Coordinated day and night support, with staffing based on the client’s needs, care plan, and current availability. Ask about nursing needs separately.',
      features: ['Day & Night Coverage Planning', 'Clear Caregiver Handoffs', 'Family Communication'],
      image: '/care-scenes/evening-handoff.png'
    },
    {
      icon: Users,
      title: 'Companionship',
      description: 'Social interaction and emotional support to combat loneliness and promote mental well-being.',
      features: ['Conversation & Activities', 'Errands & Transportation', 'Social Engagement', 'Hobby Support', 'Reading & Games'],
      image: '/care-scenes/garden-companionship.png'
    },
    {
      icon: Home,
      title: 'Respite Care',
      description: 'Temporary relief for family caregivers while ensuring continuous quality care for your loved one.',
      features: ['Flexible Scheduling', 'Short or Long-term', 'Qualified Caregivers', 'Peace of Mind', 'Family Support'],
      image: '/care-scenes/respite-family-departure.png'
    },
    {
      icon: HandHeart,
      title: 'Specialized Care',
      description: 'Talk through support for a loved one living with dementia or a chronic illness. Daily assistance and clinical nursing tasks require different care arrangements.',
      features: ['Familiar Routines', 'Individual Care Planning', 'Appropriate Nursing Support'],
      image: '/care-scenes/specialized-support.png'
    }
  ];

  return (
    <>
      <SEO
        title="Houston Care Services | Andora Private Duty Home Health"
        description="Private-duty nursing, personal care, 24/7 care, respite care, and post-hospital recovery for Houston-area families. Call (832) 679-3716."
        canonical="/services"
      />
      <Section
        className="!py-16 md:!py-24"
        background="light"
      >
        <div className="max-w-3xl">
          <p className="text-sm tracking-widest uppercase font-semibold text-primary mb-4">Houston-area care, planned around you</p>
          <h1 className="heading-1 mb-6">Find the right support for life at home.</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Andora Private Duty Home Health supports adults who need everyday assistance, skilled nursing, or help returning home after a hospital stay. Start with the help your family needs; we will discuss an appropriate care plan, schedule, and availability.
          </p>
          <Link to="/resources/home-care-vs-home-health" className="care-link inline-block mt-6">Understand home care vs. home health</Link>
        </div>
      </Section>

      <Section>
        <h2 className="heading-2 mb-8">Compare your care options</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-0 overflow-hidden hover:shadow-xl transition-smooth">
              <ResponsiveImage src={service.image} alt={service.title} className="w-full aspect-[3/2] object-cover" />
              <div className="p-8">
              <div className="bg-primary/10 rounded-full p-3 w-fit mb-5">
                <service.icon className="text-primary" size={32} />
              </div>
              <h3 className="heading-3 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to={['/services/skilled-nursing', '/services/personal-care', '/services/24-7-care', '/services/personal-care', '/services/respite-care', '/services/24-7-care'][index]} className="care-link inline-block mt-6">Explore {service.title.toLowerCase()}</Link>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-gray-600">Care schedules are individualized. Call with the days, hours, location, and support you are considering so we can discuss appropriate options and current availability. Families may also ask about using long-term care insurance benefits. Coverage, payment steps, and reimbursement vary by policy. For a medical emergency, call 911.</p>
        <Link to="/resources/choosing-home-care-agency-houston" className="care-link inline-block mt-4">Questions to ask when choosing a home care agency</Link>
      </Section>

      <FAQ />

      <Section className="bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-2 text-white mb-6">Not Sure Which Service Is Right?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Understanding the differences between home care and home health care can be confusing. Contact us for a care conversation. We can discuss the type and level of support you are considering, answer practical questions, and explain the next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="large"
              onClick={() => window.location.href = 'tel:+18326793716'}
            >
              Call (832) 679-3716
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => navigate('/contact')}
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
