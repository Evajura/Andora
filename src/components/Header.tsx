import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const serviceLinks = [
  { label: 'Skilled Nursing Care', href: '/services/skilled-nursing' },
  { label: 'Personal Care & Daily Support', href: '/services/personal-care' },
  { label: 'Advanced Care & 24-Hour Support', href: '/services/24-7-care' },
  { label: 'Post-Hospital Recovery', href: '/services/post-hospital-recovery' },
  { label: 'Respite Care & Family Support', href: '/services/respite-care' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Caregivers', href: '/caregivers' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-[52px] z-40 bg-white transition-smooth ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/Andora_BlackLogo_Variant_PNG@14x.png"
              alt="Andora"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition-smooth font-medium"
            >
              Home
            </Link>

            <div ref={dropdownRef} className="relative">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-primary transition-smooth font-medium"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                >
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5 transition-smooth"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    All Services
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-smooth"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-700 hover:text-primary transition-smooth font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="cta"
              size="medium"
              onClick={() => window.location.href = 'tel:+18326793716'}
              className="hidden md:block"
            >
              Call Now
            </Button>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary transition-smooth font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:text-primary transition-smooth font-medium py-2"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  aria-expanded={isMobileServicesOpen}
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 flex flex-col gap-2 mt-2">
                    <Link
                      to="/services"
                      className="text-sm font-semibold text-primary py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      All Services
                    </Link>
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="text-sm text-gray-600 hover:text-primary transition-smooth py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-700 hover:text-primary transition-smooth font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                variant="cta"
                fullWidth
                onClick={() => window.location.href = 'tel:+18326793716'}
              >
                Call Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
