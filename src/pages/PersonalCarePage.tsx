import ResponsiveImage from "../components/ResponsiveImage";
import { Heart, CheckCircle, Shield, Clock, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function PersonalCarePage() {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Bathing & Personal Hygiene',
      description: 'Dignified assistance with bathing, grooming, oral care, and personal hygiene care for elderly at home — maintaining comfort and self-esteem every day.',
      image: '/care-scenes/personal-hygiene.png',
    },
    {
      title: 'Mobility & Transfer Support',
      description: 'Safe assistance with walking, transfers, and positioning for elderly with mobility issues — reducing fall risk while encouraging independence.',
      image: '/care-scenes/walker-support.png',
    },
    {
      title: 'Meal Preparation & Nutrition',
      description: 'Nutritious meal planning, preparation, and feeding assistance tailored to dietary requirements, preferences, and physician recommendations.',
      image: '/meal_preparation.png',
    },
    {
      title: 'Companionship & Emotional Support',
      description: 'Meaningful conversation, activities, and emotional support in senior home care to combat loneliness and promote mental well-being for elderly living alone.',
      image: '/care-scenes/garden-companionship.png',
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Compassionate Caregivers',
      description: 'Selected for genuine warmth and dedication — not just skills. Our caregivers treat every client like family.',
    },
    {
      icon: Shield,
      title: 'Background Checked & Bonded',
      description: 'Every caregiver undergoes comprehensive screening, background checks, and credential verification.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Hourly home care for seniors on your schedule — from a few hours a week to full-time daily support.',
    },
    {
      icon: Users,
      title: 'Consistent Caregiver Matching',
      description: 'We match caregivers based on needs, personality, and preferences — and keep the same caregiver for continuity.',
    },
  ];

  const dailySupport = [
    'Bathing & shower assistance',
    'Oral and dental hygiene',
    'Hair care & grooming',
    'Dressing assistance',
    'Medication reminders',
    'Meal planning & preparation',
    'Grocery shopping & errands',
    'Light housekeeping & laundry',
    'Companionship & conversation',
    'Transportation to appointments',
    'Exercise & mobility support',
    'Social engagement activities',
  ];

  return (
    <>
      <SEO
        title="Houston Personal Care | Andora Private Duty Home Health"
        description="Personal care for Houston-area families, including bathing, grooming, meal preparation, companionship, and daily-living assistance. Call (832) 679-3716."
        canonical="/services/personal-care"
      />

      {/* Hero */}
      <section className="bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-0 md:gap-8 items-center">
            <div className="pt-6 pb-4 md:py-10">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="text-cta" size={20} />
                <span className="text-cta font-semibold text-sm tracking-wide">How We Help</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-primary leading-[1.05] mb-5">
                Personal Care<br />& Daily Support
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-lg">
                Compassionate assistance with daily living activities so your loved one can maintain independence, dignity, and quality of life at home. Our caregivers provide non-medical home care for elderly in Houston with warmth and professionalism.
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
                src="/IMG_2598.JPG"
                alt="Caregiver providing personal care assistance to elderly client at home in Houston"
                className="w-full max-h-[350px] md:max-h-[420px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <Section className="!py-10 md:!py-14">
        <div className="text-center mb-8">
          <h2 className="heading-2 mb-4">What Does a Caregiver Do for Elderly?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our personal care services cover every aspect of daily living — from personal hygiene care for elderly at home to companionship and emotional support for seniors living alone.
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
            <h2 className="heading-2 mb-6">How to Find the Best Caregiver for Elderly Parents</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              When choosing a home care agency for personal care, you want caregivers who are compassionate, reliable, and well-matched to your family. At Andora, we go beyond basic screening to find home caregiver services for aging parents that truly fit.
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
                src="/IMG_2598.JPG"
                alt="Compassionate caregiver assisting elderly client with daily activities"
                className="w-full h-[450px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-xl p-6 shadow-lg max-w-[240px] hidden md:block">
              <p className="text-3xl font-bold mb-1">Personalized</p>
              <p className="text-sm text-blue-100">Care matched to your loved one</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Daily Support List */}
      <Section>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-8">Daily Living Support We Provide</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dailySupport.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-200 flex-shrink-0" size={18} />
                  <span className="text-blue-50">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="heading-2 mb-6">Benefits of In-Home Senior Care</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Home care options for elderly living alone go far beyond basic assistance. Studies show that seniors who receive personal care at home experience better health outcomes, greater independence, and improved emotional well-being compared to facility-based care.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether your loved one needs help with personal hygiene, companionship to combat isolation, or full-time daily support, our compassionate home care for elderly parents in Houston is tailored to their unique needs and preferences.
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
          <h2 className="heading-2 mb-4">How Home Care Services Are Personalized</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Every care plan is customized to your loved one's needs, routines, and preferences. Here's how we get started.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: '1', title: 'Free Consultation', description: 'Tell us about your loved one\'s needs, daily routine, and preferences. We\'ll answer all your questions.' },
            { step: '2', title: 'Care Assessment', description: 'A care coordinator evaluates your home environment and creates a customized in-home care plan for seniors.' },
            { step: '3', title: 'Caregiver Matching', description: 'We match you with a caregiver based on personality, skills, and compatibility — not just availability.' },
            { step: '4', title: 'Care Begins', description: 'Your dedicated caregiver starts providing personal care with ongoing supervision and family communication.' },
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
            Compassionate Personal Care for Your Loved One
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact Houston's trusted home health care providers today for a free consultation. Our care coordinators are ready to help you find the best caregiver for your elderly parents.
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
