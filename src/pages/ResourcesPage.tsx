import { BookOpen, FileText, Video, HelpCircle, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
import SEO from '../components/SEO';
import { FAQPageSchema } from '../components/StructuredData';

export default function ResourcesPage() {
  const guides = [
    {
      title: 'What Is Home Care for Elderly?',
      description: 'A comprehensive guide to understanding the differences between home care and home health care, types of services available, and what to expect.',
      category: 'Getting Started', slug: 'home-care-vs-home-health'
    },
    {
      title: 'Signs Your Loved One Needs Home Care',
      description: 'Learn to recognize the key signs that indicate it may be time to consider in-home care services for your aging parent or family member.',
      category: 'Getting Started', slug: 'signs-your-loved-one-needs-home-care'
    },
    {
      title: 'How to Pay for Home Care Services',
      description: 'Understanding costs of home care services for seniors, insurance options, Medicare coverage, and financial planning for long-term care.',
      category: 'Financial Planning', slug: 'how-to-pay-for-home-care'
    }
  ];

  const videos = [
    {
      title: 'AARP Family Caregiving Video Series',
      description: 'Wound care, medication management, incontinence, and mobility training',
      url: 'https://www.aarp.org/pri/initiatives/home-alone-alliance/family-caregiving-videos/'
    },
    {
      title: 'UCLA Health Dementia Care Videos',
      description: 'Practical dementia and Alzheimer\'s care training tools',
      url: 'https://www.uclahealth.org/medical-services/geriatrics/dementia/caregiver-education/caregiver-training-videos'
    },
    {
      title: 'Pennsylvania Homecare Association',
      description: 'Free online learning for homecare professionals',
      url: 'https://learningcenter.pahomecare.org/'
    },
    {
      title: 'CareAcademy Training Platform',
      description: 'Comprehensive Home Health Aide training and certification',
      url: 'https://careacademy.com/'
    },
    {
      title: 'mmLearn Caregiver Training',
      description: 'Medication management, wound care, and legal tools',
      url: 'https://training.mmlearn.org/caregiver-training-videos'
    },
    {
      title: 'Caregiver Training Solutions',
      description: 'Video packages on vital signs, personal care, bathing, and transfers',
      url: 'https://www.caregivertrainingsolutions.org/products'
    }
  ];

  const faqs = [
    {
      question: 'How do I know if I need home healthcare?',
      answer: 'Home healthcare is ideal if you or a loved one needs medical care, assistance with daily activities, or companionship but prefers to remain at home. Our team can assess your needs during a free consultation.'
    },
    {
      question: 'How quickly can care start?',
      answer: 'We understand that care needs can be urgent. In many cases, we can arrange for care to begin within 24-48 hours of your initial consultation.'
    },
    {
      question: 'Can I choose my caregiver?',
      answer: 'Yes! We carefully match caregivers based on your needs, preferences, and personality. If you\'re not satisfied with the match, we\'ll make adjustments at no charge.'
    },
    {
      question: 'What if my needs change over time?',
      answer: 'Care plans are flexible and can be adjusted as needs evolve. We regularly reassess and update care plans to ensure they continue to meet your changing requirements.'
    }
  ];

  const downloadables = [
    {
      title: 'Family Caregiver Alliance Resources',
      description: 'Fact sheets, guides, and checklists for family caregivers',
      url: 'https://www.caregiver.org/resource/'
    },
    {
      title: 'Medicare Coverage Guide',
      description: 'Official Medicare handbook and coverage information',
      url: 'https://www.medicare.gov/publications'
    },
    {
      title: 'CDC Infection Control Resources',
      description: 'Home healthcare infection prevention and control guidelines',
      url: 'https://www.cdc.gov/infection-control/hcp/home-care/index.html'
    },
    {
      title: 'AARP Caregiving Resource Center',
      description: 'Downloadable toolkits, planners, and care guides',
      url: 'https://www.aarp.org/caregiving/'
    },
    {
      title: 'Home Care Association of America',
      description: 'Industry standards, best practices, and policy documents',
      url: 'https://www.hcaoa.org/resources'
    },
    {
      title: 'National Institute on Aging',
      description: 'Free publications on aging, caregiving, and health conditions',
      url: 'https://www.nia.nih.gov/health/publications'
    }
  ];

  return (
    <>
      <SEO
        title="Home Care Resources & FAQs | Andora Home Care"
        description="Learn what is home care for elderly, how to pay for home care services, signs your loved one needs home care, and more. Free guides, FAQs, and resources from Houston's trusted home care agency."
        canonical="/resources"
      />
      <FAQPageSchema faqs={faqs} />
      <Section
        className="pt-24 pb-8 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="text-center max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8">
          <h1 className="heading-1 mb-6">Resources & Support</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            What is home care for elderly? How do you pay for home care services? Access helpful guides covering costs of home care services for seniors, signs your loved one needs home care, and best practices for hiring a home care provider.
          </p>
        </div>
      </Section>

      <Section>
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-primary" size={32} />
          <h2 className="heading-2">Care Guides & Articles</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <Link key={index} to={`/resources/${guide.slug}`} className="block">
            <Card className="h-full hover:shadow-xl transition-smooth">
              <div className="text-sm text-primary font-semibold mb-2">
                {guide.category}
              </div>
              <h3 className="font-bold text-lg mb-3">{guide.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
              <div className="flex items-center gap-2 text-primary font-medium text-sm">
                Read guide <ExternalLink size={16} />
              </div>
            </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="flex items-center gap-3 mb-8">
          <Video className="text-primary" size={32} />
          <h2 className="heading-2">Video Library</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="hover:shadow-xl transition-smooth cursor-pointer h-full">
                <div className="bg-gradient-to-br from-primary/20 to-blue-100 rounded-lg h-40 flex items-center justify-center mb-4">
                  <Video className="text-primary" size={48} />
                </div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  {video.title}
                  <ExternalLink size={16} className="text-primary" />
                </h3>
                <p className="text-sm text-gray-600">{video.description}</p>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="text-primary" size={32} />
          <h2 className="heading-2">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-lg transition-smooth">
              <h3 className="font-bold text-lg mb-3 text-primary">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="flex items-center gap-3 mb-8">
          <Download className="text-white" size={32} />
          <h2 className="heading-2 text-white">Downloadable Resources</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {downloadables.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur rounded-lg p-4 flex items-start gap-3 hover:bg-white/20 transition-smooth cursor-pointer"
            >
              <FileText size={24} className="flex-shrink-0 mt-1" />
              <div className="flex-1">
                <div className="font-semibold mb-1 flex items-center gap-2">
                  {item.title}
                  <ExternalLink size={16} />
                </div>
                <p className="text-sm text-blue-100">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-blue-100">
            All resources are provided free of charge to help support you and your family.
          </p>
        </div>
      </Section>
    </>
  );
}
