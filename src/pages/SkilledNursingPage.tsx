import ResponsiveImage from "../components/ResponsiveImage";
import { Stethoscope, CheckCircle, Shield, Clock, Heart, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function SkilledNursingPage() {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Medication Administration',
      description: 'Safe and accurate medication management including oral, injectable, and IV medications with careful monitoring for side effects and interactions.',
      image: '/home-medication.png',
    },
    {
      title: 'Wound Care',
      description: 'Professional wound assessment, cleaning, dressing changes, and monitoring for infection. Specialized care for surgical wounds, pressure ulcers, and chronic wounds.',
      image: '/home-post-surgical.png',
    },
    {
      title: 'Post-Surgery Home Care Assistance',
      description: 'Comprehensive post-surgery home care assistance in Houston including pain management, wound monitoring, mobility support, and coordination with your surgical team for a safe recovery.',
      image: '/care-scenes/recovery-assistance.png',
    },
    {
      title: 'Chronic Disease Management',
      description: 'Senior care at home for individuals with chronic illness including diabetes, heart disease, and COPD. Ongoing monitoring and home care assistance for elderly with diabetes and other conditions to prevent hospitalizations.',
      image: '/home-chronic.png',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Licensed RNs & LVNs',
      description: 'Every nurse on our team holds a current Texas license and undergoes thorough credential verification.',
    },
    {
      icon: Clock,
      title: '24/7 Home Care for Seniors',
      description: '24/7 home care for seniors available around the clock, including nights, weekends, and holidays when you need it most.',
    },
    {
      icon: Heart,
      title: 'Customized In-Home Care Plans',
      description: 'Customized in-home care plans for seniors developed in coordination with your physician and tailored to your specific medical needs and goals.',
    },
    {
      icon: Users,
      title: 'Family Communication',
      description: 'Regular updates and open communication so your family stays informed and involved every step of the way.',
    },
  ];

  const conditions = [
    'Post-surgical recovery',
    'Diabetes management at home',
    'Heart failure monitoring',
    'COPD and respiratory care',
    'Stroke recovery care',
    'Cancer care support',
    'Parkinson\'s disease care',
    'Orthopedic recovery',
    'Chronic pain management',
    'End-of-life home care',
    'Elderly care with mobility issues',
    'Senior care for chronic illness',
  ];

  return (
    <>
      <SEO
        title="Houston Skilled Nursing | Andora Private Duty Home Health"
        description="Skilled nursing care at home for Houston-area families. Discuss appropriate in-home clinical support and availability at (832) 679-3716."
        canonical="/services/skilled-nursing"
      />

      {/* Hero */}
      <section className="bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-0 md:gap-8 items-center">
            {/* Left text */}
            <div className="pt-6 pb-4 md:py-10">
              <div className="flex items-center gap-2 mb-4">
                <Stethoscope className="text-cta" size={20} />
                <span className="text-cta font-semibold text-sm tracking-wide">How We Help</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-primary leading-[1.05] mb-5">
                Skilled Nursing<br />Care
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-lg">
                Hospital-level nursing expertise delivered in the comfort of your home. As a licensed home care agency in Houston, our RNs and LVNs provide comprehensive in home care services for seniors from post-surgery recovery to chronic illness management.
              </p>

              <Button
                variant="cta"
                size="large"
                onClick={() => navigate('/contact')}
                className="shadow-lg shadow-orange-500/25"
              >
                <span className="flex items-center gap-2">
                  Get Your Free Consultation
                  <ArrowRight size={18} />
                </span>
              </Button>
            </div>

            {/* Right image */}
            <div className="flex items-center justify-center md:py-4">
              <ResponsiveImage
                src="/Layer 9.png"
                alt="Skilled nurse providing attentive care to a patient at home in Houston"
                className="w-full max-h-[350px] md:max-h-[420px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <Section className="!py-10 md:!py-14">
        <div className="text-center mb-8">
          <h2 className="heading-2 mb-4">In-Home Skilled Nursing Services for Seniors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From medication management to complex medical procedures, our licensed RNs and LVNs deliver expert private duty home care for seniors with compassion and precision.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="relative aspect-[3/2] overflow-hidden">
                <ResponsiveImage
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <h3 className="absolute bottom-4 left-5 right-5 font-bold text-lg text-white drop-shadow-md">
                  {service.title}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Andora */}
      <Section background="light">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="heading-2 mb-6">Why Families Choose Andora for Skilled Nursing</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              When choosing a home care agency, experience and trust matter most. Our RN-led clinical team brings years of hospital and home care experience to every patient interaction. We don't just provide care we coordinate it, communicate it, and continually refine it.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-primary/10 rounded-xl p-3 h-fit">
                    <benefit.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ResponsiveImage
                src="/Layer 9.png"
                alt="Skilled nurse providing attentive care to a patient at home"
                className="w-full h-[450px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-xl p-6 shadow-lg max-w-[240px] hidden md:block">
              <p className="text-3xl font-bold mb-1">RN-Led</p>
              <p className="text-sm text-blue-100">Clinical oversight on every care plan</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Conditions We Support */}
      <Section>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-8">Conditions We Support</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-200 flex-shrink-0" size={18} />
                  <span className="text-blue-50">{condition}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="heading-2 mb-6">Home Care That Improves Quality of Life</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Many seniors can avoid hospital readmissions and extended nursing home stays with the right skilled nursing support at home. Unlike nursing home care, in-home care services provide one-on-one attention in a familiar environment which is proven to improve quality of life for seniors.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you need home care services for stroke recovery in Houston, post-surgery home care assistance, or ongoing care for elderly parents with chronic illness, our team provides the clinical expertise and compassionate home care for elderly parents that makes the difference.
            </p>
            <Button
              variant="primary"
              size="large"
              onClick={() => navigate('/contact')}
            >
              <span className="flex items-center gap-2">
                Get Started Today
                <ArrowRight size={18} />
              </span>
            </Button>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="light">
        <div className="text-center mb-14">
          <h2 className="heading-2 mb-4">What to Expect from In-Home Care Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Getting started with skilled nursing care at home is simple. We handle the coordination so you can focus on recovery.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: '1', title: 'Free Consultation', description: 'Call us or fill out our contact form. We\'ll discuss your needs and answer all your questions.' },
            { step: '2', title: 'Care Assessment', description: 'A registered nurse visits your home to evaluate needs and coordinate with your physicians.' },
            { step: '3', title: 'Custom Care Plan', description: 'We develop a personalized care plan tailored to your medical needs, preferences, and goals.' },
            { step: '4', title: 'Care Begins', description: 'Your matched nurse begins care with ongoing RN oversight, communication, and plan adjustments.' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center text-xl font-bold mx-auto mb-5">
                {item.step}
              </div>
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Find Quality In-Home Nursing Care for Your Loved One
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact Houston's trusted home health care providers today for a free consultation. Our care coordinators are available to discuss your needs and create a customized in-home care plan for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="cta"
              size="large"
              onClick={() => navigate('/contact')}
            >
              Schedule Free Consultation
            </Button>
            <Button
              variant="outline"
              size="large"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.location.href = 'tel:+18326793716'}
            >
              Call (832) 679-3716
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
