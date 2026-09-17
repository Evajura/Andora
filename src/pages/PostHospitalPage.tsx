import ResponsiveImage from "../components/ResponsiveImage";
import { Activity, CheckCircle, Shield, Clock, Heart, Stethoscope, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function PostHospitalPage() {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Post-Surgery Home Care',
      description: 'Comprehensive post-surgery home care assistance in Houston including wound monitoring, pain management, medication administration, and mobility support for a safe recovery.',
      image: '/care-scenes/post-surgery-visit.png',
    },
    {
      title: 'Stroke Recovery Care',
      description: 'Patient support with daily routines after a stroke, following the individual care plan and instructions from the treating team. Caregiver assistance complements, rather than replaces, prescribed rehabilitation.',
      image: '/care-scenes/stroke-recovery.png',
    },
    {
      title: 'Wound Care & Monitoring',
      description: 'Professional wound assessment, dressing changes, infection monitoring, and healing tracking by licensed nurses to prevent complications and hospital readmission.',
      image: '/care-scenes/incision-dressing.png',
    },
    {
      title: 'Medication Management',
      description: 'Expert medication administration, schedule coordination, and side-effect monitoring, especially during the transition from hospital to home care.',
      image: '/medication_ad.png',
    },
  ];

  const benefits = [
    {
      icon: Stethoscope,
      title: 'RN-Led Recovery Plans',
      description: 'Every recovery plan is developed and supervised by a registered nurse in coordination with your medical team.',
    },
    {
      icon: Clock,
      title: 'Rapid Care Start',
      description: 'Care may be available within 24 to 48 hours of hospital discharge, depending on assessment and staffing availability.',
    },
    {
      icon: Shield,
      title: 'Readmission Prevention',
      description: 'Our structured transition care reduces the risk of costly and stressful hospital readmissions.',
    },
    {
      icon: Heart,
      title: 'Comfort of Home',
      description: 'Recover in the familiar, comfortable environment of your own home with one-on-one professional attention.',
    },
  ];

  const recoveryTypes = [
    'Hip & knee replacement recovery',
    'Cardiac surgery aftercare',
    'Stroke rehabilitation',
    'Spinal surgery recovery',
    'Cancer treatment support',
    'Organ transplant aftercare',
    'Fracture & orthopedic recovery',
    'Pneumonia & respiratory recovery',
    'Diabetes-related hospitalization',
    'General surgical recovery',
  ];

  return (
    <>
      <SEO
        title="Post-Hospital Care | Andora Private Duty Home Health"
        description="Post-hospital and post-surgery home care support for Houston-area families. Discuss recovery support, care coordination, and availability at (832) 679-3716."
        canonical="/services/post-hospital-recovery"
      />

      {/* Hero */}
      <section className="bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-0 md:gap-8 items-center">
            <div className="pt-6 pb-4 md:py-10">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="text-cta" size={20} />
                <span className="text-cta font-semibold text-sm tracking-wide">How We Help</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-primary leading-[1.05] mb-5">
                Post-Hospital<br />Recovery
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-lg">
                The transition from hospital to home is one of the most critical periods in recovery. Our licensed nurses provide post-surgery home care assistance in Houston to help seniors heal safely, avoid readmissions, and regain independence faster.
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

            <div className="flex items-center justify-center md:py-4">
              <ResponsiveImage
                src="/Layer 8.png"
                alt="Nurse helping patient with post-hospital recovery at home in Houston"
                className="w-full max-h-[350px] md:max-h-[420px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <Section className="!py-10 md:!py-14">
        <div className="text-center mb-8">
          <h2 className="heading-2 mb-4">What to Expect from Post-Hospital Home Care</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our recovery care helps bridge the gap between hospital discharge and greater independence, with skilled nursing oversight when appropriate.
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
            <h2 className="heading-2 mb-6">Why Recovery at Home Works Better</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Research shows patients who recover at home with skilled nursing support have lower readmission rates, fewer complications, and faster recovery times. Our home health care providers bring hospital-level expertise directly to your bedside.
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
                src="/Layer 8.png"
                alt="Licensed nurse monitoring patient recovery at home"
                className="w-full h-[450px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-xl p-6 shadow-lg max-w-[240px] hidden md:block">
              <p className="text-3xl font-bold mb-1">24 to 48 hrs</p>
              <p className="text-sm text-blue-100">Care starts after discharge</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Recovery Types */}
      <Section>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-8">Types of Recovery We Support</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recoveryTypes.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-200 flex-shrink-0" size={18} />
                  <span className="text-blue-50">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="heading-2 mb-6">Senior Care at Home for Chronic Illness</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Many hospitalizations are caused by chronic conditions like diabetes, heart failure, and COPD. Our home care assistance for elderly with diabetes and other chronic illnesses provides the ongoing monitoring and support that prevents emergencies before they happen.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From post-surgery wound care to long-term rehabilitation, our licensed home care agency in Houston coordinates with your medical team throughout the care plan.
            </p>
            <Button
              variant="primary"
              size="large"
              onClick={() => navigate('/contact')}
            >
              <span className="flex items-center gap-2">
                Start Your Recovery Plan
                <ArrowRight size={18} />
              </span>
            </Button>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="light">
        <div className="text-center mb-14">
          <h2 className="heading-2 mb-4">Your Path from Hospital to Home</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We coordinate with your hospital team before discharge so care is ready the moment you arrive home.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: '1', title: 'Pre-Discharge Planning', description: 'We coordinate with your hospital care team to understand your recovery needs before you leave.' },
            { step: '2', title: 'Home Safety Setup', description: 'An RN assesses your home for safety and ensures all equipment and medications are ready.' },
            { step: '3', title: 'Recovery Care Plan', description: 'A customized in-home care plan built around your surgery, medications, therapy schedule, and goals.' },
            { step: '4', title: 'Skilled Nursing Begins', description: 'Your dedicated nurse starts care with daily monitoring, wound care, and physician communication.' },
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
            Recover Safely at Home with Expert Nursing Care
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't navigate post-hospital recovery alone. Contact Houston's trusted home health care providers for a free consultation and personalized recovery plan.
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
