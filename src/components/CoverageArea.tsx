import { MapPin, CheckCircle } from 'lucide-react';
import Section from './Section';

const areas = [
  'Downtown Houston',
  'Texas Medical Center (TMC)',
  'Heights',
  'River Oaks',
  'West University',
  'Bellaire',
  'Memorial',
  'Energy Corridor',
  'Katy',
  'Sugar Land',
  'Pearland',
  'Cypress',
  'Spring',
  'The Woodlands',
];

export default function CoverageArea() {
  return (
    <Section background="light">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="text-primary" size={36} />
            <h2 className="text-h2 md:text-[42px] text-primary">
              Proudly Serving Houston And Surrounding Communities
            </h2>
          </div>
          <p className="text-body text-gray-600 mb-8 leading-relaxed">
            We provide comprehensive home care services throughout the Houston metropolitan area. No matter where you live, our dedicated caregivers are ready to bring professional, compassionate care to your doorstep.
          </p>
          <p className="text-gray-700 mb-4 font-semibold">
            Our coverage includes, but is not limited to:
          </p>
          <div className="grid grid-cols-2 gap-3">
            {areas.map((area, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="text-care flex-shrink-0" size={20} />
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6 italic">
            Don't see your area listed? Call us at (832) 679-3716 to confirm service availability in your neighborhood.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-2xl">
          <iframe
            title="Live map of Houston service area"
            src="https://www.google.com/maps?q=Houston,TX&output=embed"
            className="w-full h-[420px] md:h-full min-h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </Section>
  );
}
