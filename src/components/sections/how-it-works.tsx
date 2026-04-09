import { Container } from '@/components/layout/container';
import { howItWorks } from '@/data/features';
import { SectionHeading } from '@/components/ui/section-heading';

export function HowItWorks() {
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="How it works"
          title="Launch reliable AI workflows in three simple steps"
          description="Designed for busy teams: get set up fast, automate repetitive work, and continuously improve delivery outcomes."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {howItWorks.map((item) => (
            <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900" key={item.step}>
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">Step {item.step}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
