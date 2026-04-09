import type { Testimonial } from '@/data/testimonials';

export function TestimonialCard({ quote, name, role, company }: Testimonial) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">“{quote}”</p>
      <div className="mt-6 border-t border-slate-200 pt-4 dark:border-slate-800">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{name}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {role}, {company}
        </p>
      </div>
    </article>
  );
}
