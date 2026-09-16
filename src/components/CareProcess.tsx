import { Phone, FileText, HeartHandshake } from 'lucide-react';
import Section from './Section';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Start with a Care Conversation',
    description: 'Tell us about the support you are considering, your concerns, preferences, and location. We will discuss current availability and next steps.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Personalized Care Plan',
    description: 'When Andora is the right fit, the team develops a plan around the client’s needs, routines, appropriate skills, and schedule.',
  },
  {
    icon: HeartHandshake,
    number: '03',
    title: 'Ongoing Support',
    description: 'As needs evolve, the team can review the plan and coordinate updates within the agreed scope of care.',
  },
];

export default function CareProcess() {
  return (
    <Section id="caregivers" background="light">
      <div className="text-center mb-16">
        <h2 className="text-h2 md:text-[42px] text-primary mb-4">
          Getting Started is Simple
        </h2>
        <p className="text-body text-gray-600 max-w-2xl mx-auto">
          From your first call to ongoing care, we make the process seamless and stress-free.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary -translate-x-1/2 z-0" />
              )}

              <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-smooth relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                </div>
                <h3 className="text-h3 text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>

    </Section>
  );
}
