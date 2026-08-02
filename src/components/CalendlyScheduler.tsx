import { useEffect, useRef } from 'react';
import { CalendarDays, ExternalLink } from 'lucide-react';
import Button from './Button';

const CALENDLY_URL = 'https://calendly.com/privatecare-andorahealth/30min';
const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js';

export default function CalendlyScheduler({ active, onActivate }: {
  active: boolean;
  onActivate: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active || !containerRef.current) return;

    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_SCRIPT}"]`);
    if (existingScript) {
      const calendly = (window as Window & {
        Calendly?: { initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void };
      }).Calendly;
      calendly?.initInlineWidget({ url: CALENDLY_URL, parentElement: containerRef.current });
      return;
    }

    const script = document.createElement('script');
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, [active]);

  return (
    <section id="book-consultation" className="scroll-mt-36" aria-labelledby="booking-heading">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 w-fit rounded-full bg-primary/10 p-3 text-primary" aria-hidden="true">
          <CalendarDays size={28} />
        </div>
        <h2 id="booking-heading" className="heading-2 mb-4">Choose a Consultation Time</h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Select a convenient time for a complimentary 30-minute conversation with our care team. Please do not include diagnoses or other sensitive health information in the booking form.
        </p>
      </div>

      {!active ? (
        <CardShell>
          <p className="mb-6 text-sm leading-6 text-gray-600">
            When you view available times, Calendly will load and process the information needed to schedule your appointment under its privacy policy.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="primary" size="large" onClick={onActivate}>View Available Times</Button>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Open in New Tab <ExternalLink className="ml-2" size={18} />
            </a>
          </div>
        </CardShell>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
          <div ref={containerRef} className="calendly-inline-widget min-w-[320px] h-[700px]" data-url={CALENDLY_URL} />
          <noscript>
            <a href={CALENDLY_URL}>Open the consultation calendar on Calendly</a>
          </noscript>
        </div>
      )}

      <p className="mt-4 text-center text-xs text-gray-500">
        Scheduling is provided by Calendly. This booking option is not for emergencies.
      </p>
    </section>
  );
}

function CardShell({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-lg sm:p-8">{children}</div>;
}
