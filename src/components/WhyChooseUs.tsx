import { CheckCircle2 } from 'lucide-react';
import Section from './Section';

const features = [
  {
    title: 'Thoughtfully selected caregivers with consistent support',
    description: 'Every member of our team is chosen through a careful screening process and supported by clear standards of care.'
  },
  {
    title: 'Personalized care plans tailored to individual needs',
    description: 'Care is customized based on clinical needs, routines, and personal preferences, not one-size-fits-all schedules.'
  },
  {
    title: 'Direct communication and ongoing oversight',
    description: 'Families receive consistent updates and clear points of contact to ensure continuity and peace of mind.'
  },
  {
    title: 'Ongoing training and quality review',
    description: 'We prioritize continuous education and regular quality checks to maintain high standards over time.'
  },
  {
    title: 'Consistent care you can rely on',
    description: 'We provide dependable support designed to maintain stability, comfort, and continuity at home.'
  },
];

const stats = [
  { number: '24/7', label: 'Care Availability' },
  { number: 'State-Licensed', label: 'Home Care Provider' },
  { number: 'RN-Led', label: 'Clinical Oversight' },
  { number: 'Houston-Area', label: 'Local Support' },
];

export default function WhyChooseUs() {
  return (
    <Section id="about" background="white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-h2 md:text-[42px] text-primary mb-6">
            Why Families Trust Andora
          </h2>
          <p className="text-body text-gray-600 mb-8 leading-relaxed">
            Choosing care for yourself or someone close to you is a significant decision. Andora brings clear communication, clinical oversight, and thoughtful coordination to each conversation and care plan.
          </p>

          <div className="space-y-5">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-care flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-gray-900 font-semibold">{feature.title}</p>
                  <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-xl text-center shadow-lg"
              >
                <p className="text-2xl md:text-3xl font-bold mb-2">{stat.number}</p>
                <p className="text-sm md:text-base opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/advanced_care.jpeg"
              alt="Professional healthcare team ready to provide compassionate care"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
