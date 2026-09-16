import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href="tel:+18326793716"
      className={`fixed bottom-6 right-6 z-50 bg-cta text-white p-4 rounded-full shadow-2xl hover:bg-cta-dark transition-smooth md:hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
      aria-label="Call us now"
    >
      <Phone size={28} className="animate-pulse" />
    </a>
  );
}
