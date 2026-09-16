import { Phone, Clock, MapPin } from 'lucide-react';

export default function UtilityBar() {
  return (
    <div className="bg-primary text-white py-3 sticky top-0 z-50 shadow-md">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm md:text-base">
          <a
            href="tel:+18326793716"
            className="flex items-center gap-2 hover:text-secondary-light transition-smooth"
            aria-label="Call us at 832-679-3716"
          >
            <Phone size={18} />
            <span className="font-semibold">(832) 679-3716</span>
          </a>

          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>Available 24/7</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>Serving Houston and Surrounding Communities</span>
          </div>
        </div>
      </div>
    </div>
  );
}
