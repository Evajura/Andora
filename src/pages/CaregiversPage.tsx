import ResponsiveImage from "../components/ResponsiveImage";
import { isLocalPreview } from '../lib/localPreview';
import { DollarSign, CalendarClock, TrendingUp, Heart, CheckCircle } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';

export default function CaregiversPage() {

  const perks = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'We offer industry-leading pay rates and benefits packages.',
    },
    {
      icon: CalendarClock,
      title: 'Flexible Scheduling',
      description: 'Work hours that fit your lifestyle and personal commitments.',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Opportunities for advancement and professional development.',
    },
    {
      icon: Heart,
      title: 'Supportive Environment',
      description: 'Join a team that values your contributions and well-being.',
    },
  ];

  return (
    <>
      <SEO
        title="Houston Careers | Andora Private Duty Home Health"
        description="Explore nursing and caregiver opportunities with Andora Private Duty Home Health in Greater Houston. View current openings and application details."
        canonical="/caregivers"
      />

      {/* Hero */}
      <Section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="heading-1 mb-6">
            Join Our Team at Andora Private Duty Home Health
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Make a meaningful difference in people's lives. We're looking for compassionate, dedicated home care professionals to join our team in Houston, TX and surrounding areas.
          </p>
        </div>
      </Section>

      {/* Why Choose a Career - Split Layout */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 mb-4">Why Choose a Career with Andora?</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              At Andora Private Duty Home Health, we value our caregivers and recognize the essential role they play in our clients' lives. We're committed to creating a supportive, rewarding work environment where you can grow professionally while making a meaningful impact in the Houston, TX community and beyond.
            </p>
            <div className="space-y-6">
              {perks.map((perk, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-primary/10 rounded-xl p-3 h-fit flex-shrink-0">
                    <perk.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1">{perk.title}</h3>
                    <p className="text-gray-600 text-sm">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <ResponsiveImage
              src="/IMG_2598.JPG"
              alt="Caregiving support at home"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block bg-cta text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                Now Hiring
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">Home Care Professionals</h3>
              <p className="text-blue-100 text-sm mb-4">
                Join our team of compassionate home care professionals and make a difference in people's lives every day.
              </p>
              <Button
                variant="outline"
                size="small"
                className="border-white text-white hover:bg-white hover:text-primary text-sm"
                onClick={() => {
                  const el = document.getElementById('current-openings');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Open Positions
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Current Openings - TelescopeHR Embed */}
      <Section background="light" id="current-openings">
        <div className="text-center mb-10">
          <h2 className="heading-2 mb-4">Current Openings</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our open positions below and apply directly. We're always looking for talented, compassionate healthcare professionals to join the Andora family.
          </p>
        </div>
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
          {isLocalPreview ? <p className="p-10 text-center text-gray-600">Job applications are paused in this local preview. No application information will be submitted.</p> : <iframe
            src="https://telescopehr.com/onboarding/job-list/wdNO94bIODgFmIMMBKrzyS0H2GIphE"
            title="Andora Private Duty Home Health Job Openings"
            className="w-full border-0"
            style={{ minHeight: '700px' }}
            loading="lazy"
          />}
        </div>
      </Section>

      {/* What We Look For */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 mb-6">What We Look For</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We hire caregivers who share our commitment to excellence, compassion, and professionalism. If you're dedicated to making a real impact in people's lives, we want to hear from you.
            </p>
            <ul className="space-y-3">
              {[
                'Current Texas RN, LVN, CNA, or HHA certification',
                'Genuine passion for patient care and well-being',
                'Strong communication and interpersonal skills',
                'Reliable, punctual, and detail-oriented',
                'Ability to pass comprehensive background check',
                'Minimum 1 year of caregiving experience preferred',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary to-blue-700 text-white rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-6">Ready to Apply?</h3>
            <p className="text-blue-100 mb-4 leading-relaxed">
              Take the first step toward a rewarding career in home healthcare. Browse our current openings above or send us your resume directly.
            </p>
            <p className="text-blue-100 mb-8 text-sm">
              Questions? Email us at <a href="mailto:Privatecare@andorahealth.com" className="text-white underline">Privatecare@andorahealth.com</a> or call <a href="tel:+18326793716" className="text-white underline">(832) 679-3716</a>.
            </p>
            <Button
              variant="cta"
              size="large"
              fullWidth
              onClick={() => window.open('https://telescopehr.com/onboarding/job-list/wdNO94bIODgFmIMMBKrzyS0H2GIphE', '_blank')}
              disabled={isLocalPreview}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
