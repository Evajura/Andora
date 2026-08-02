import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import SEO from '../components/SEO';
import CalendlyScheduler from '../components/CalendlyScheduler';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isCalendlyActive, setIsCalendlyActive] = useState(false);

  const openScheduler = () => {
    setIsCalendlyActive(true);
    window.requestAnimationFrame(() => {
      document.getElementById('book-consultation')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        form.reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['(346) 202-3538', 'Available 24/7'],
      action: 'tel:+13462023538'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['Privatecare@andorahealth.com', 'Response within 24 hours'],
      action: 'mailto:Privatecare@andorahealth.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['5718 Westheimer Rd, Suite 1000', 'Houston, TX 77057'],
      action: null
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon-Fri: 8:00 AM - 5:00 PM', 'Sat-Sun: On-call support'],
      action: null
    }
  ];

  return (
    <>
      <SEO
        title="Contact Andora Home Care | Free Consultation in Houston"
        description="Call (346) 202-3538 or visit 5718 Westheimer Rd, Suite 1000, Houston, TX 77057. Free consultations available for private duty nursing and home care services."
        canonical="/contact"
      />
      <Section
        className="pt-24 pb-8 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="text-center max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8">
          <h1 className="heading-1 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're here to answer your questions and help you get started with the care you need. Reach out today for a free consultation.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-smooth cursor-pointer"
              onClick={() => info.action && (window.location.href = info.action)}
            >
              <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
                <info.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-3">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className={idx === 0 ? 'text-gray-900 font-medium' : 'text-gray-600 text-sm'}>
                  {detail}
                </p>
              ))}
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8">
            <h2 className="heading-2 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New Contact Form Submission - Andora Home Care" />
              <input type="hidden" name="from_name" value="Andora Home Care Website" />

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-medium text-green-900">Message sent successfully!</p>
                    <p className="text-sm text-green-700 mt-1">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-medium text-red-900">Something went wrong</p>
                    <p className="text-sm text-red-700 mt-1">Please try again or call us directly.</p>
                  </div>
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  placeholder="(346) 202-3538"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In
                </label>
                <select name="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth">
                  <option value="">Select a service</option>
                  <option value="skilled-nursing">Skilled Nursing Care</option>
                  <option value="personal-care">Personal Care</option>
                  <option value="24-7-care">24/7 Care</option>
                  <option value="companionship">Companionship</option>
                  <option value="respite">Respite Care</option>
                  <option value="specialized">Specialized Care</option>
                  <option value="not-sure">Not Sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                  placeholder="Tell us about your care needs..."
                ></textarea>
              </div>

              <Button variant="cta" size="large" fullWidth type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and consent to be contacted.
              </p>
            </form>
          </Card>

          <div>
            <Card className="p-8 mb-6">
              <h3 className="heading-3 mb-4">Schedule a Free Consultation</h3>
              <p className="text-gray-600 mb-6">
                Not sure where to start? Our care coordinators are available to discuss your needs and create a personalized care plan at no cost.
              </p>
              <Button
                variant="primary"
                fullWidth
                size="large"
                onClick={openScheduler}
              >
                Schedule a Free Consultation
              </Button>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary to-blue-700 text-white">
              <h3 className="text-2xl font-bold mb-4">Emergency Contact</h3>
              <p className="text-blue-100 mb-6">
                For urgent care needs or emergencies related to existing clients, call our 24/7 hotline.
              </p>
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <Phone className="mx-auto mb-2" size={32} />
                <p className="text-2xl font-bold">(346) 202-3538</p>
                <p className="text-sm text-blue-100 mt-2">Available 24/7/365</p>
              </div>
            </Card>

            <div className="mt-6 bg-gray-100 rounded-lg p-6">
              <h4 className="font-bold mb-3">Coverage Area</h4>
              <p className="text-sm text-gray-600">
                We proudly serve all of Houston and surrounding areas including Katy, Sugar Land, The Woodlands, Pearland, and beyond. Contact us to confirm service availability in your area.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <CalendlyScheduler active={isCalendlyActive} onActivate={openScheduler} />
        </div>
      </Section>
    </>
  );
}
