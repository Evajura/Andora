import { Heart, Clock, Users, Home, Stethoscope, HandHeart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';

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
      description: 'Round-the-clock nursing care for those who need continuous medical supervision and support.',
      features: ['24-Hour RN Availability', 'Overnight Care', 'Emergency Response', 'Continuous Monitoring', 'Family Communication'],
      image: 'https://images.pexels.com/photos/7551616/pexels-photo-7551616.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Users,
      title: 'Companionship',
      description: 'Social interaction and emotional support to combat loneliness and promote mental well-being.',
      features: ['Conversation & Activities', 'Errands & Transportation', 'Social Engagement', 'Hobby Support', 'Reading & Games'],
      image: '/Layer 10.jpeg'
    },
    {
      icon: Home,
      title: 'Respite Care',
      description: 'Temporary relief for family caregivers while ensuring continuous quality care for your loved one.',
      features: ['Flexible Scheduling', 'Short or Long-term', 'Qualified Caregivers', 'Peace of Mind', 'Family Support'],
      image: '/Layer 8.png'
    },
    {
      icon: HandHeart,
      title: 'Specialized Care',
      description: 'Expert care for complex medical conditions including dementia, Alzheimer\'s, and chronic illnesses.',
      features: ['Dementia Care', "Alzheimer's Support", 'Parkinson\'s Care', 'Diabetes Management', 'Cardiac Care'],
      image: 'https://images.pexels.com/photos/7551664/pexels-photo-7551664.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <>
      <SEO
        title="Home Care Services in Houston | Andora Home Care"
        description="Private-duty nursing, personal care, 24/7 care, respite care, and post-hospital recovery for Houston-area families. Call (832) 679-3716."
        canonical="/services"
      />
      <Section
        className="pt-52 pb-36 bg-cover bg-no-repeat min-h-[650px] flex items-center relative"
        style={{ backgroundImage: "url('/Layer11.jpeg')", backgroundPosition: 'center 20%' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="text-center max-w-3xl mx-auto p-8 relative z-10">
          <h1 className="heading-1 mb-6 text-white font-bold drop-shadow-lg">Types of Home Care for Seniors</h1>
          <p className="text-xl text-white font-semibold leading-relaxed drop-shadow-lg">
            From skilled nursing to companion care, we offer affordable elderly care in Houston tailored to your unique needs. Explore our full range of in-home care services for seniors and find the right fit for your family.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-0 overflow-hidden hover:shadow-xl transition-smooth">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
              <div className="bg-primary/10 rounded-full p-4 w-fit mb-6 -mt-12 relative z-10 border-4 border-white">
                <service.icon className="text-primary" size={32} />
              </div>
              <h3 className="heading-3 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <FAQ />

      <Section className="bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-2 text-white mb-6">Not Sure Which Service Is Right?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Understanding the differences between home care and home health care can be confusing. Contact us today for a free consultation — we'll help you determine the right type and level of care, answer your top questions, and create a personalized care plan.
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
