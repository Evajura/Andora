import { BookOpen, FileText, Video, HelpCircle, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
import SEO from '../components/SEO';
import { FAQPageSchema } from '../components/StructuredData';

export default function ResourcesPage() {
  const guides = [
    {
      title: 'Overnight vs. 24-Hour Home Care in Houston',
      description: 'Compare awake overnight coverage, rotating shifts, live-in arrangements, and the questions to ask before requesting a quote.',
      category: 'Planning Coverage', slug: 'overnight-vs-24-hour-home-care-houston'
    },
    {
      title: 'Respite Care: A Family Planning Checklist',
      description: 'Plan a break with clear coverage hours, a practical handoff, household routines, and backup contacts.',
      category: 'Family Caregiving', slug: 'respite-care-planning-houston'
    },
    {
      title: 'Choosing a Home Care Agency in Houston',
      description: 'Ten questions to compare staffing, overnight coverage, communication, and costs before choosing care.',
      category: 'Comparing Care', slug: 'choosing-home-care-agency-houston'
    },
    {
      title: 'Home Care vs. Home Health Care',
      description: 'Understand everyday personal care, skilled nursing, and the questions to ask when deciding what support fits.',
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
    },
    {
      title: 'What Is Private Duty Home Care?',
      description: 'A practical explanation of private duty care, the questions to ask, and how families can begin planning support at home.',
      category: 'Getting Started', slug: 'private-duty-home-care-explained'
    },
    {
      title: 'How to Prepare for a Home Care Assessment',
      description: 'A Houston family checklist for preparing routines, schedules, contacts, and care questions before an initial conversation.',
      category: 'Planning Care', slug: 'prepare-for-home-care-assessment'
    },
    {
      title: 'From Hospital to Home: Care Planning Questions',
      description: 'Questions families can bring to a discharge conversation when planning home support after a hospital stay.',
      category: 'Recovery Planning', slug: 'hospital-discharge-home-care-questions'
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
      answer: 'Start with the day-to-day support that is becoming difficult, such as personal routines, mobility, recovery, companionship, or clinical tasks. A conversation with the care team can help clarify whether Andora is the right fit. This information is not medical advice.',
      link: { to: '/resources/signs-your-loved-one-needs-home-care', label: 'Read signs that it may be time to consider home care.' }
    },
    {
      question: 'How quickly can care start?',
      answer: 'Start dates depend on the care needs, location, assessment, and current staffing availability. Call (832) 679-3716 with your preferred start date so we can discuss what is currently possible.',
      link: { to: '/resources/respite-care-planning-houston', label: 'Use the respite planning checklist to prepare your schedule questions.' }
    },
    {
      question: 'Can I choose my caregiver?',
      answer: 'Tell our team about routines, preferences, language needs, and the skills the client needs. Ask how matching works, who is available for your schedule, and what happens if a match needs to change.',
      link: { to: '/resources/choosing-home-care-agency-houston', label: 'See more questions to ask when comparing home care agencies.' }
    },
    {
      question: 'What if my needs change over time?',
      answer: 'Tell the care team when routines, mobility, recovery needs, or the desired schedule change. The team can discuss whether an updated plan, different coverage, or an additional clinical conversation is appropriate.',
      link: { to: '/resources/overnight-vs-24-hour-home-care-houston', label: 'Compare overnight, 24-hour, and live-in coverage questions.' }
    },
    {
      question: 'What is the difference between home care and home health care?',
      answer: 'The terms are often used interchangeably, but services can differ. Personal care may focus on daily routines and companionship, while skilled services involve clinical care within the provider’s licensed scope and care plan.',
      link: { to: '/resources/home-care-vs-home-health', label: 'Read the Houston family guide to home care and home health care.' }
    },
    {
      question: 'Can we arrange overnight or 24-hour support?',
      answer: 'It depends on the exact hours, tasks, location, assessment needs, and staffing availability. Ask about awake coverage, shift handoffs, backup coverage, and how the schedule will actually be staffed.',
      link: { to: '/resources/overnight-vs-24-hour-home-care-houston', label: 'Read the overnight and 24-hour home care guide.' }
    },
    {
      question: 'How is private duty home care paid for?',
      answer: 'Payment arrangements vary by family, service, and benefits. Ask for a written explanation of the schedule, what is included, payment methods, long-term care insurance documentation, and any out-of-pocket responsibility.',
      link: { to: '/resources/how-to-pay-for-home-care', label: 'Read how Houston families can prepare for home care costs.' }
    },
    {
      question: 'What should I prepare before calling a home care agency?',
      answer: 'Have the address, the preferred days and hours, the support you are considering, household routines, and a family contact ready. For clinical questions, include the treating team in the conversation when appropriate.',
      link: { to: '/resources/choosing-home-care-agency-houston', label: 'Use this agency comparison guide to prepare your questions.' }
    },
    {
      question: 'Does Medicare pay for private duty home care?',
      answer: 'Medicare has specific rules for covered home health services and does not cover every type of in-home support. Check current coverage with the plan, a benefits professional, or Medicare directly before relying on an assumption.',
      link: { to: '/resources/how-to-pay-for-home-care', label: 'Read the home care payment planning guide.' }
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
      description: 'An introduction to infection prevention and control',
      url: 'https://www.cdc.gov/infection-control/about/index.html'
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
      url: 'https://www.nia.nih.gov/health'
    }
  ];

  return (
    <>
      <SEO
        title="Family Guides | Andora Private Duty Home Health"
        description="Compare home care options, plan costs, and prepare questions for an agency. Practical guides for Houston families from Andora Private Duty Home Health."
        canonical="/resources"
      />
      <FAQPageSchema faqs={faqs} />
      <Section
        className="pt-24 pb-8 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="text-center max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8">
          <h1 className="heading-1 mb-6">Resources & Support</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Clear answers for the decisions families face: what kind of support is needed, how to compare agencies, and what to ask about costs. Start with a guide, then talk with our team about your situation.
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
              <Link to={faq.link.to} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4">
                {faq.link.label} <ExternalLink size={15} />
              </Link>
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
            Andora’s family guides are free to read. External resources have their own terms; some training providers charge fees.
          </p>
        </div>
      </Section>
    </>
  );
}
