import { Heart, Activity, Home, Users, Pill, Stethoscope } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import { Link } from 'react-router-dom';
import ResponsiveImage from './ResponsiveImage';

const services = [
  {
    icon: Stethoscope,
    title: 'Skilled Nursing Care',
    path: '/services/skilled-nursing',
    description: 'Licensed nurses providing medical care, wound care, medication management, and vital sign monitoring.',
    image: '/home-nursing.png',
  },
  {
    icon: Activity,
    title: 'Post-Surgical Care',
    path: '/services/post-hospital-recovery',
    description: 'Specialized recovery support following hospital discharge, ensuring safe healing at home.',
    image: '/home-post-surgical.png',
  },
  {
    icon: Heart,
    title: 'Chronic Disease Management',
    path: '/services/24-7-care',
    description: 'Expert care for diabetes, heart disease, COPD, and other ongoing health conditions.',
    image: '/home-chronic.png',
  },
  {
    icon: Users,
    title: 'Companion Care',
    path: '/services/personal-care',
    description: 'Compassionate companionship, assistance with daily activities, and emotional support.',
    image: '/home-companion.png',
  },
  {
    icon: Home,
    title: 'Personal Care',
    path: '/services/personal-care',
    description: 'Help with bathing, dressing, grooming, and maintaining dignity and independence.',
    image: '/home-personal.png',
  },
  {
    icon: Pill,
    title: 'Medication Management',
    path: '/services/skilled-nursing',
    description: 'Ensuring proper medication administration and monitoring for side effects.',
    image: '/home-medication.png',
  },
];

export default function Services() {
  return (
    <Section id="services" background="light">
      <div className="text-center mb-12">
        <h2 className="text-h2 md:text-[42px] text-primary mb-4">
          The right care. A clearer choice.
        </h2>
        <p className="text-body text-gray-600 max-w-3xl mx-auto">
          You do not need to know every care term. Start with the support your family needs, and we will discuss the appropriate care plan, schedule, and availability.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.filter((_, index) => [0, 1, 4].includes(index)).map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} className="p-0 overflow-hidden">
              <div className="flex flex-col items-start text-left p-8">
                <div className="bg-primary/10 p-4 rounded-full mb-5">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-h3 text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <Link to={service.path} className="care-link mt-4">Explore {service.title.toLowerCase()}</Link>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">Also explore companionship, respite care, and overnight or coordinated 24-hour support.</p>
        <Link to="/services" className="care-link">Compare all care options</Link>
      </div>
      <div className="mt-10 grid md:grid-cols-2 overflow-hidden rounded-2xl bg-white border border-gray-200">
        <ResponsiveImage src="/care-scenes/garden-companionship.png" alt="Illustrative scene of a female caregiver and an older woman enjoying an herb garden together" className="w-full h-full aspect-[3/2] object-cover" />
        <div className="p-8 md:p-10 self-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Companionship at home</p>
          <h3 className="heading-3 mb-4">More room for the things they enjoy.</h3>
          <p className="text-gray-600 leading-7 mb-5">A familiar conversation, time in the garden, or a favorite activity. Talk with us about companionship that fits your loved one’s interests and daily routine.</p>
          <Link className="care-link" to="/services/personal-care">Explore companionship and daily support</Link>
        </div>
      </div>
    </Section>
  );
}
