import { Phone, Mail } from 'lucide-react';
import Button from './Button';

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 md:text-[48px] mb-6 leading-tight">
            Talk Through Care at Home
          </h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Start with a straightforward conversation about the support you need, the schedule you are considering, and whether Andora is the right fit.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              variant="cta"
              size="large"
              onClick={() => window.location.href = 'tel:+18326793716'}
              className="text-lg"
            >
              <Phone className="inline mr-2" size={20} />
              Call (832) 679-3716
            </Button>
            <Button
              variant="outline"
              size="large"
              className="bg-white text-primary hover:bg-gray-100 border-white text-lg"
              onClick={() => window.location.href = 'mailto:Privatecare@andorahealth.com'}
            >
              <Mail className="inline mr-2" size={20} />
              Email Us
            </Button>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-lg mb-2">Available 24 Hours a Day, 7 Days a Week</p>
            <p className="opacity-90">
              Serving families across Greater Houston with excellence and compassion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
