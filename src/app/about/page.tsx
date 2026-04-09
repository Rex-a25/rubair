import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';

const principles = [
  {
    title: 'Clarity over complexity',
    description: 'We design workflow software that teams can trust without long onboarding cycles.'
  },
  {
    title: 'Automation with control',
    description: 'AI should accelerate teams while preserving human oversight for critical decisions.'
  },
  {
    title: 'Built for modern teams',
    description: 'We focus on fast-moving product, ops, and customer teams that need alignment every day.'
  }
];

export default function AboutPage() {
  return (
    <section className="py-20">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="About FlowPilot"
          title="Helping teams execute better work at scale"
          description="FlowPilot was created by operators and product leaders who wanted a faster way to align teams, automate repetitive tasks, and improve delivery quality."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((principle) => (
            <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900" key={principle.title}>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{principle.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{principle.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
