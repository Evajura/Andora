import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COOKIE_PREFERENCES_EVENT } from '../lib/cookiePreferences';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src="/Andora_BlackLogo_Variant_PNG@14x.png"
                alt="Andora"
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Providing compassionate, professional home healthcare services to families across Greater Houston.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-smooth">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-smooth">Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-smooth">About Us</Link></li>
              <li><Link to="/caregivers" className="hover:text-white transition-smooth">Our Caregivers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-smooth">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Skilled Nursing Care</li>
              <li>Post-Surgical Care</li>
              <li>Chronic Disease Management</li>
              <li>Companion Care</li>
              <li>Personal Care</li>
              <li>Medication Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:+13462023538" className="hover:text-white transition-smooth">
                  (346) 202-3538
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:Privatecare@andorahealth.com" className="hover:text-white transition-smooth">
                  Privatecare@andorahealth.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>5718 Westheimer Rd, Suite 1000<br />Houston, TX 77057</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-white transition-smooth" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-smooth" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-smooth" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              &copy; {currentYear} Andora. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition-smooth">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="hover:text-white transition-smooth">Terms &amp; Conditions</Link>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event(COOKIE_PREFERENCES_EVENT))}
                className="hover:text-white transition-smooth"
              >
                Cookie Preferences
              </button>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Licensed Home Health Agency | State-Licensed Provider
          </p>
        </div>
      </div>
    </footer>
  );
}
