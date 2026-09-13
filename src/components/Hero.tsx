import { Shield, Clock, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResponsiveImage from './ResponsiveImage';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-no-repeat py-20 md:py-32"
    >
      <ResponsiveImage src="/hero-bg.jpeg" alt="" aria-hidden="true" loading="eager" fetchPriority="high" sizes="100vw" className="absolute inset-0 h-full w-full object-cover object-[center_20%]" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-h1 md:text-[52px] lg:text-[60px] text-white leading-tight font-bold drop-shadow-lg">
            Private Duty Home Health Care in Houston
          </h1>

          <p className="text-lg text-white/90 leading-relaxed font-medium drop-shadow">
            Support that fits your family, in the home you love. Explore private-duty nursing, personal care, and overnight support across Houston, Memorial, River Oaks, and nearby communities. We’ll talk through your needs, schedule, and current availability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18326793716" className="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              Call (832) 679-3716
            </a>
            <Link to="/contact" className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              Discuss Care Needs
            </Link>
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
