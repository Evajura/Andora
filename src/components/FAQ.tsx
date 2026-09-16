import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Section from './Section';
import Button from './Button';

export const faqs = [
  {
    question: 'How do I know what kind of support to ask about?',
    answer: 'Start with the day-to-day needs: personal routines, mobility, companionship, safety concerns, recovery support, or clinical care. A conversation with the care team can help clarify whether Andora’s licensed services fit the situation. This information is not medical advice.'
  },
  {
    question: 'How soon can care begin?',
    answer: 'Timing depends on the client’s needs, the location, care-plan requirements, and current staff availability. Contact Andora directly to discuss the earliest appropriate start date.'
  },
  {
    question: 'Can my family share caregiver preferences?',
    answer: 'Yes. Families can share preferences, schedules, routines, and the skills the client needs. The team will discuss matching and availability during the planning process.'
  },
  {
    question: 'How is private-duty care paid for?',
    answer: 'Payment arrangements and benefits vary by family and service. Before beginning care, ask which payment methods are accepted, whether long-term-care benefits may apply, and what documentation a benefit provider may require.'
  }
];

interface FAQProps {
  showAllLink?: boolean;
}

export default function FAQ({ showAllLink = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="text-h2 md:text-[42px] text-primary mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-body text-gray-600 max-w-2xl mx-auto">
          Get answers to the most common questions about our home healthcare services.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-card overflow-hidden transition-smooth"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <h3 className="font-bold text-lg text-primary pr-4">{faq.question}</h3>
              <ChevronDown
                className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                size={24}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-48 pb-6' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600 leading-relaxed px-6">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {showAllLink && (
        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="medium"
            onClick={() => navigate('/resources')}
          >
            View All Resources
          </Button>
        </div>
      )}
    </Section>
  );
}
