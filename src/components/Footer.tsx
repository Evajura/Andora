import ResponsiveImage from "./ResponsiveImage";
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COOKIE_PREFERENCES_EVENT } from '../lib/cookiePreferences';
import { brand } from '../lib/brand';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <ResponsiveImage
                src={brand.logo}
                alt={brand.name}
                className="h-28 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Based in Richmond, providing compassionate, professional home healthcare services to Fort Bend County and select Houston-area communities.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-smooth">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-smooth">Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-smooth">About Us</Link></li>
              <li><Link to="/caregivers" className="hover:text-white transition-smooth">Our Caregivers</Link></li>
              <li><Link to="/service-areas" className="hover:text-white transition-smooth">Service Areas</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-smooth">Family Care Guides</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-smooth">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/skilled-nursing" className="hover:text-white">Skilled Nursing Care</Link></li>
              <li><Link to="/services/post-hospital-recovery" className="hover:text-white">Post-Hospital Recovery</Link></li>
              <li><Link to="/services/24-7-care" className="hover:text-white">24-Hour Home Care</Link></li>
              <li><Link to="/services/personal-care" className="hover:text-white">Personal &amp; Companion Care</Link></li>
              <li><Link to="/services/respite-care" className="hover:text-white">Respite Care</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:+18326793716" className="hover:text-white transition-smooth">
                  (832) 679-3716
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
                <span>7003 Telford Hollow Trail<br />Richmond, TX 77407<br /><span className="text-xs text-gray-400">Call before visiting.</span></span>
              </li>
            </ul>

          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              &copy; {currentYear} {brand.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
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
            {brand.legalName}, doing business as {brand.name}.
          </p>
          <p className="mt-3 text-xs text-gray-500">
            Licensed by the Texas Health and Human Services Commission | HCSSA License No. 024760
          </p>
          <p className="mt-3 text-xs leading-5 text-gray-400">Some care images are AI-generated illustrations, not photographs of actual Andora staff or clients.</p>
        </div>
      </div>
    </footer>
  );
}
