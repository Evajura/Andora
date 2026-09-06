import { Users, CheckCircle, Shield, Clock, Heart, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function RespiteCarePage() {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Temporary Caregiver Relief',
      description: 'Take the break you need — whether for a few hours, a weekend, or an extended period — while a qualified caregiver steps in seamlessly for your loved one.',
      image: '/companionship.png',
    },
    {
      title: 'Planned Respite Scheduling',
      description: 'Regularly scheduled respite care for family caregivers in Houston so you can maintain your own health, work, and personal commitments without guilt.',
      image: '/planned_respite_scheduling.png',
    },
    {
      title: 'Emergency Respite Care',
      description: 'When unexpected situations arise, our team can arrange urgent respite care to ensure your loved one is never without support.',
      image: '/emergency_respite.png',
    },
    {
      title: 'Companion Care for Seniors',
      description: 'Companion care services for seniors that go beyond supervision — meaningful engagement, conversation, activities, and emotional support to brighten their day.',
      image: '/livein_caregiver.png',
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Prevent Caregiver Burnout',
      description: 'Regular breaks are essential. Respite care protects your health so you can continue caring long-term.',
    },
    {
      icon: Shield,
      title: 'Trusted, Vetted Caregivers',
      description: 'Every respite caregiver is background-checked, trained, and matched to your loved one\'s specific needs.',
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Hourly home care for seniors on your terms — from a few hours a week to overnight, weekend, or extended stays.',
    },
    {
      icon: Users,
      title: 'Family-Centered Approach',
      description: 'We work with the whole family to understand routines, preferences, and goals for compassionate home care for elderly parents.',
    },
  ];

  const situations = [
    'Family vacation or travel',
    'Work commitments',
    'Personal health appointments',
    'Mental health & self-care days',
    'Family events & celebrations',
    'Caregiver illness or recovery',
    'Regular weekly or monthly breaks',
    'Overnight or weekend relief',
    'Transition periods between care arrangements',
    'Trial period before full-time care',
  ];

  return (
    <>
      <SEO
        title="Respite Care for Family Caregivers in Houston | Andora Home Care"
        description="Respite care and family caregiver support for Houston-area families. Discuss schedules, support needs, and availability at (832) 679-3716."
        canonical="/services/respite-care"
      />

      {/* Hero */}
      <section className="bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-0 md:gap-8 items-center">
            <div className="pt-6 pb-4 md:py-10">
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-cta" size={20} />
                <span className="text-cta font-semibold text-sm tracking-wide">How We Help</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-primary leading-[1.05] mb-5">
                Respite Care<br />& Family Support
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-lg">
                You can't pour from an empty cup. Our respite care for family caregivers in Houston gives you the time to rest, recharge, and take care of yourself — knowing your loved one is in compassionate, capable hands.
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
              <img
                src="/Layer 10.jpeg"
                alt="Companion caregiver spending quality time with elderly client in Houston"
                className="w-full max-h-[350px] md:max-h-[420px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <Section className="!py-10 md:!py-14">
        <div className="text-center mb-8">
          <h2 className="heading-2 mb-4">What Is Respite Care for Caregivers?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Respite care provides temporary relief for family caregivers while ensuring your loved one receives the same quality of compassionate care — from companionship to skilled support.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="relative h-56 overflow-hidden">
                <img
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
            <h2 className="heading-2 mb-6">Top Benefits of Home Care for Elderly Parents</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Many family caregivers struggle with guilt when considering respite care. But taking regular breaks isn't selfish — it's essential. Rested caregivers provide better care, and your loved one benefits from fresh social interaction and professional support.
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
              <img
                src="/Layer 10.jpeg"
                alt="Happy elderly person enjoying companionship care at home"
                className="w-full h-[450px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-xl p-6 shadow-lg max-w-[240px] hidden md:block">
              <p className="text-3xl font-bold mb-1">Flexible</p>
              <p className="text-sm text-blue-100">Hours, days, or weeks — your choice</p>
            </div>
          </div>
        </div>
      </Section>

      {/* When to Use Respite Care */}
      <Section>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-8">When Families Use Respite Care</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {situations.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-200 flex-shrink-0" size={18} />
                  <span className="text-blue-50">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="heading-2 mb-6">How to Talk to Your Parents About Home Care</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Starting the conversation about home care can be difficult. We recommend framing it around companionship and support rather than inability. Many seniors are more receptive to companion care services for seniors when they understand it means more social interaction and engagement — not loss of independence.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our care coordinators can help facilitate this conversation and even arrange a no-obligation introductory visit so your parent can meet their potential caregiver in a relaxed, comfortable setting.
            </p>
            <Button
              variant="primary"
              size="large"
              onClick={() => navigate('/contact')}
            >
              <span className="flex items-center gap-2">
                Let's Talk About Care Options
                <ArrowRight size={18} />
              </span>
            </Button>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="light">
        <div className="text-center mb-14">
          <h2 className="heading-2 mb-4">Getting Started Is Easy</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you need a few hours this week or ongoing scheduled respite, we make it simple and stress-free.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: '1', title: 'Share Your Needs', description: 'Tell us about your caregiving situation, your loved one\'s needs, and the schedule that works for you.' },
            { step: '2', title: 'Meet Your Caregiver', description: 'We introduce you to a matched caregiver and walk through your loved one\'s routines and preferences.' },
            { step: '3', title: 'Smooth Handoff', description: 'Detailed care notes and instructions ensure seamless continuity — your loved one won\'t miss a beat.' },
            { step: '4', title: 'Rest & Recharge', description: 'Take your well-deserved break knowing your family member is receiving compassionate, professional care.' },
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
            You Deserve a Break — Your Loved One Deserves Great Care
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to arrange flexible respite care in Houston. Our compassionate caregivers are ready to step in so you can step back.
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
