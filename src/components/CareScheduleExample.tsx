import { CalendarDays, CheckCircle } from 'lucide-react';

export default function CareScheduleExample() {
  return (
    <figure className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-xl">
      <div className="flex items-center gap-3 text-primary mb-6">
        <CalendarDays size={28} aria-hidden="true" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Illustrative schedule</p>
          <h3 className="text-xl font-bold">Make room for a break</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3" aria-label="Example care planning calendar">
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
          <p className="font-semibold text-gray-600 mb-5">Day 1</p>
          <div className="rounded-lg border-l-4 border-primary bg-white p-3 shadow-sm">
            <p className="text-xs font-semibold text-primary mb-1">ANDORA</p>
            <p className="font-semibold text-sm">Initial assessment</p>
            <p className="text-xs leading-5 text-gray-600 mt-2">Discuss needs, routines, and preferred hours.</p>
          </div>
        </div>
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
          <p className="font-semibold text-gray-600 mb-5">Day 2</p>
          <div className="rounded-lg border-l-4 border-emerald-700 bg-white p-3 shadow-sm">
            <p className="text-xs font-semibold text-emerald-800 mb-1">IF CONFIRMED</p>
            <p className="font-semibold text-sm">Start of care</p>
            <p className="text-xs leading-5 text-gray-600 mt-2">Care plan and staffing agreed before the visit.</p>
          </div>
        </div>
      </div>
      <p className="flex items-center gap-2 mt-6 font-semibold text-primary"><CheckCircle size={18} aria-hidden="true" />Hours, days, or weeks</p>
      <figcaption className="mt-3 text-sm leading-6 text-gray-600">Example only, not a booking or a promised start date. Actual timing depends on assessment, care needs, location, and available staffing.</figcaption>
    </figure>
  );
}
