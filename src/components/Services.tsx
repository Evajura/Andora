import { Heart, Activity, Home, Users, Pill, Stethoscope } from 'lucide-react';
import Section from './Section';
import Card from './Card';

const services = [
  {
    icon: Stethoscope,
    title: 'Skilled Nursing Care',
    description: 'Licensed nurses providing medical care, wound care, medication management, and vital sign monitoring.',
    image: '/home-nursing.png',
  },
  {
    icon: Activity,
    title: 'Post-Surgical Care',
    description: 'Specialized recovery support following hospital discharge, ensuring safe healing at home.',
    image: '/home-post-surgical.png',
  },
  {
    icon: Heart,
    title: 'Chronic Disease Management',
    description: 'Expert care for diabetes, heart disease, COPD, and other ongoing health conditions.',
    image: '/home-chronic.png',
  },
  {
    icon: Users,
    title: 'Companion Care',
    description: 'Compassionate companionship, assistance with daily activities, and emotional support.',
    image: '/home-companion.png',
  },
  {
    icon: Home,
    title: 'Personal Care',
    description: 'Help with bathing, dressing, grooming, and maintaining dignity and independence.',
    image: '/home-personal.png',
  },
  {
    icon: Pill,
    title: 'Medication Management',
    description: 'Ensuring proper medication administration and monitoring for side effects.',
    image: '/home-medication.png',
  },
];

export default function Services() {
  return (
    <Section id="services" background="light">
      <div className="text-center mb-12">
        <h2 className="text-h2 md:text-[42px] text-primary mb-4">
          Comprehensive Home Care Services
        </h2>
        <p className="text-body text-gray-600 max-w-3xl mx-auto">
          From skilled nursing to companion care, we provide the full spectrum of in-home healthcare services tailored to your family's needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} className="p-0 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="flex flex-col items-center text-center p-6">
                <div className="bg-primary/10 p-4 rounded-full mb-4 -mt-10 relative z-10 border-4 border-white">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-h3 text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
