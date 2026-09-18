import ResponsiveImage from "../components/ResponsiveImage";
import { Clock, CheckCircle, Shield, Brain, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function AdvancedCarePage() {
  const navigate = useNavigate();

  const services = [
    {
      title: '24-Hour Nursing Care',
      description: 'Discuss overnight or extended-hour clinical support with our team. The schedule and nursing level depend on assessment, the care plan, and current availability.',
      image: '/care-scenes/nighttime-nursing.png',
    },
    {
      title: "Dementia & Alzheimer's Care",
      description: 'Familiar routines, patient communication, and meaningful activities adapted to the person’s abilities and preferences. Daily support is planned around the individual; clinical concerns belong with the treating team.',
      image: '/care-scenes/memory-support.png',
    },
    {
      title: 'Live-In Caregiver Services',
      description: 'Ask about available household and personal-care support, including groceries, meals, and familiar routines. We will discuss the schedule, care plan, and current availability with your family.',
      image: '/care-scenes/groceries-doorstep.png',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Specialized Training',
      description: 'Caregivers certified in dementia, Alzheimer\'s, and complex care with ongoing clinical education.',
    },
    {
      icon: Clock,
      title: 'True 24/7 Coverage',
      description: '24/7 home care for seniors with seamless shift transitions and RN oversight around the clock.',
    },
    {
      icon: Brain,
      title: 'Cognitive Care Expertise',
      description: 'Evidence-based approaches to memory care, behavioral management, and cognitive stimulation.',
    },
    {
      icon: Users,
      title: 'Family Peace of Mind',
      description: 'Regular updates, transparent communication, and a dedicated care team your family can trust.',
    },
  ];

  const conditions = [
    'Alzheimer\'s disease',
    'Vascular dementia',
    'Lewy body dementia',
    'Parkinson\'s disease',
    'Frontotemporal dementia',
    'Traumatic brain injury',
    'Advanced COPD',
    'Late-stage heart failure',
    'ALS and neuromuscular diseases',
    'End-of-life care needs',
    'Post-stroke complications',
    'Severe mobility limitations',
  ];

  return (
    <>
      <SEO
        title="24-Hour Home Care in Houston | Andora"
        description="Discuss overnight or 24-hour home care for Houston and Fort Bend County families. Review care needs, schedules, and current availability."
        canonical="/services/24-7-care"
      />

      {/* Hero */}
      <section className="bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-0 md:gap-8 items-center">
            <div className="pt-6 pb-4 md:py-10">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="text-cta" size={20} />
                <span className="text-cta font-semibold text-sm tracking-wide">How We Help</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-primary leading-[1.05] mb-5">
                24-Hour Home Care<br />in Houston
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-lg">
                Specialized home care for dementia patients, Alzheimer's, Parkinson's, and complex medical conditions in Houston. Our trained caregivers provide 24/7 home care for seniors with the expertise and compassion your loved one deserves.
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
                src="/care-scenes/evening-handoff.png"
                alt="Illustrative scene of two female caregivers coordinating an evening handoff at home"
                className="w-full max-h-[350px] md:max-h-[420px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <Section className="!py-10 md:!py-14">
        <div className="text-center mb-8">
          <h2 className="heading-2 mb-4">How Does Home Care Help with Dementia?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our advanced care services combine clinical expertise with compassionate support to help seniors with complex conditions remain safely at home with dignity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <h2 className="heading-2 mb-6">Why Families Trust Andora for 24/7 Care</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              When evaluating a home care agency for advanced or around-the-clock care, specialized training and consistent oversight are everything. Our team is purpose-built for complex care situations that demand more than standard home care.
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
                src="/care-scenes/specialized-support.png"
                alt="Illustrative scene of a caregiver and an older adult reviewing a daily routine together"
                className="w-full h-[450px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-xl p-6 shadow-lg max-w-[240px] hidden md:block">
              <p className="text-3xl font-bold mb-1">24/7</p>
              <p className="text-sm text-blue-100">Around-the-clock expert care</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Conditions We Support */}
      <Section>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-8">Conditions We Specialize In</h2>
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
            <h2 className="heading-2 mb-6">Home Care for Seniors with Alzheimer's Disease</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Choosing between home care and nursing home care is one of the most difficult decisions families face. Familiar routines and consistent support can help many people with dementia or Alzheimer's feel more comfortable at home.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our specialized home care for dementia patients in Houston can provide structure, safety, and emotional support while helping families consider care options without an immediate facility transition.
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
          <h2 className="heading-2 mb-4">Understanding Senior Care Options at Home</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Getting started with 24/7 or advanced care is straightforward. We manage every detail so your family can focus on what matters.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: '1', title: 'Free Consultation', description: 'We discuss your loved one\'s condition, care needs, and family goals to understand the full picture.' },
            { step: '2', title: 'Clinical Assessment', description: 'An RN evaluates medical needs, cognitive status, safety risks, and home environment.' },
            { step: '3', title: 'Specialized Care Plan', description: 'We create a comprehensive plan with 24-hour scheduling, safety protocols, and emergency procedures.' },
            { step: '4', title: 'Care Team Deployed', description: 'Your dedicated care team begins with seamless shift coordination and ongoing family communication.' },
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
            Expert 24/7 Care for Your Loved One
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact Houston's best home care agency for elderly today. Our specialized care coordinators are ready to discuss dementia care, Alzheimer's support, and around-the-clock nursing.
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
