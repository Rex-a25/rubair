import { Container } from '@/components/layout/container';
import { faqItems } from '@/data/faq';
import { SectionHeading } from '@/components/ui/section-heading';

export function Faq() {
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions from modern teams"
          description="Everything you need to know before rolling out FlowPilot across your organization."
        />
        <div className="space-y-4">
          {faqItems.map((item) => (
            <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900" key={item.question}>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">{item.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
