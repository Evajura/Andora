import { Link } from 'react-router-dom';
import Section from './Section';

const guides = [
  { path: 'respite-care-planning-houston', title: 'Plan respite care with confidence', text: 'A family checklist for coverage hours, routines, handoffs, and backup contacts.' },
  { path: 'choosing-home-care-agency-houston', title: 'Compare Houston home care agencies', text: 'Ten questions about staffing, costs, overnight care, and communication.' },
  { path: 'home-care-vs-home-health', title: 'Home care or home health?', text: 'Understand everyday support, skilled services, and which questions to ask.' },
  { path: 'hospital-discharge-home-care-questions', title: 'Plan support after a hospital stay', text: 'Bring practical care-planning questions to a discharge conversation.' },
];

export default function FamilyGuides() {
  return <Section background="light"><div className="mb-9 max-w-2xl"><p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">A clearer next step</p><h2 className="heading-2 mb-4">Good care starts with informed questions.</h2><p className="leading-7 text-gray-600">Practical guides for families choosing support at home in Houston and Fort Bend County.</p></div><div className="grid gap-6 md:grid-cols-2">{guides.map(guide => <Link key={guide.path} to={`/resources/${guide.path}`} className="rounded-2xl border border-gray-200 bg-white p-7 transition-shadow hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"><h3 className="mb-4 text-xl font-bold text-primary">{guide.title}</h3><p className="mb-5 leading-7 text-gray-600">{guide.text}</p><span className="care-link">Read the guide</span></Link>)}</div></Section>;
}
