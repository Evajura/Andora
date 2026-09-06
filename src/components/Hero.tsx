import { Shield, Clock, Award, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative bg-cover bg-no-repeat py-20 md:py-32"
      style={{ backgroundImage: "url('/hero-bg.jpeg')", backgroundPosition: 'center 20%' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-h1 md:text-[52px] lg:text-[60px] text-white leading-tight font-bold drop-shadow-lg">
            Private Duty Home Health Care in Houston
          </h1>

          <p className="text-lg text-white/90 leading-relaxed font-medium drop-shadow">
            At Andora, private duty care is handled with intention and attention to detail. Our approach prioritizes consistency, clear communication, and dependable support that families can rely on day to day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="cta"
              size="large"
              onClick={() => window.location.href = 'tel:+18326793716'}
            >
              Speak to a Care Specialist
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => navigate('/contact')}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Discuss Care Needs
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/30">
            <div className="flex flex-col items-center text-center">
              <Shield className="text-white mb-2" size={32} />
              <p className="text-sm font-semibold text-white">State-Licensed Provider</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="text-white mb-2" size={32} />
              <p className="text-sm font-semibold text-white">24/7 Care</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award className="text-white mb-2" size={32} />
              <p className="text-sm font-semibold text-white">Experienced Team</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="text-white mb-2" size={32} />
              <p className="text-sm font-semibold text-white">Background Checked</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
