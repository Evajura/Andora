import ResponsiveImage from "./ResponsiveImage";
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Section from './Section';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Daughter of Patient',
    rating: 5,
    text: "Andora gave us peace of mind during my mother's recovery. The nurses were professional, caring, and truly went above and beyond. I can't thank them enough.",
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Michael Chen',
    role: 'Family Caregiver',
    rating: 5,
    text: "After my father's stroke, we needed 24/7 care. The team at Andora was exceptional. They treated Dad with dignity and became part of our family.",
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Patricia Williams',
    role: 'Son of Patient',
    rating: 5,
    text: 'The personalized care plan and consistent communication made all the difference. Our caregiver is wonderful, and my mom looks forward to her visits every day.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentIndex];

  return (
    <Section id="resources" background="white">
      <div className="text-center mb-12">
        <h2 className="text-h2 md:text-[42px] text-primary mb-4">
          What Families Are Saying
        </h2>
        <p className="text-body text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about their experience with Andora.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-xl relative">
          <Quote className="absolute top-8 left-8 text-primary/20" size={48} />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <ResponsiveImage
                src={current.image}
                alt={current.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div>
                <h4 className="text-xl font-bold text-gray-900">{current.name}</h4>
                <p className="text-gray-600">{current.role}</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed italic mb-6">
              "{current.text}"
            </p>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-3 h-3 rounded-full transition-smooth ${
                      i === currentIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    aria-label={`View testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-smooth"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="text-primary" size={24} />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-smooth"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="text-primary" size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
