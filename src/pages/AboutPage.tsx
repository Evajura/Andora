import { Heart, Shield, Users, Star } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import SEO from '../components/SEO';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We treat every client with the dignity, respect, and kindness they deserve.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships through transparency, reliability, and integrity.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Committed to the highest standards of care through continuous training and improvement.'
    },
    {
      icon: Users,
      title: 'Family-Centered',
      description: 'We work closely with families to ensure coordinated, personalized care.'
    }
  ];

  const stats = [
    { number: '24/7', label: 'Care Availability' },
    { number: 'State-Licensed', label: 'Home Care Provider' },
    { number: 'RN-Led', label: 'Clinical Oversight' },
    { number: 'Houston-Area', label: 'Local Support' }
  ];

  return (
    <>
      <SEO
        title="About Andora | RN-Led Private Duty Home Care in Houston"
        description="Houston's trusted RN-led private duty home health care provider. Founded by a registered nurse to bridge hospital-level expertise with compassionate in-home support. Affordable elderly care and elder care services for veterans in Houston."
        canonical="/about"
      />
      <Section
        className="pt-24 pb-8 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="text-center max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8">
          <h1 className="heading-1 mb-6">About Andora</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            RN-led private-duty home care with professional support, clear communication, and a thoughtful approach to care at home.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Andora was founded by a registered nurse who witnessed firsthand the gap between hospital-level expertise and the support families receive once they return home. After years on the front lines of patient care, our founder saw how continuity, oversight, and communication directly impact outcomes and created Andora to close that gap.
              </p>
              <p>
                We provide RN-led private duty care built on structure, transparency, and dependable coordination. Our model bridges clinical knowledge with personalized in-home support, ensuring every care plan is intentional, clearly communicated, and thoughtfully executed.
              </p>
              <p>
                At Andora, we operate with professionalism, discretion, and careful attention to detail, delivering care that prioritizes safety, dignity, and long-term stability at home. We proudly offer affordable elderly care and elder care services for veterans and their families across the Greater Houston area.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-blue-100 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These core values guide everything we do, from the care we provide to the relationships we build.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
                <value.icon className="text-primary" size={32} />
              </div>
              <h3 className="heading-3 mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
