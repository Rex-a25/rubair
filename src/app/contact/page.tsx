import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl space-y-10">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to the FlowPilot team"
          description="Tell us about your current workflow setup and we will recommend a rollout plan tailored to your team."
        />
        <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="name">
            Name
          </label>
          <input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950" id="name" name="name" type="text" />
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="email">
            Work email
          </label>
          <input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950" id="email" name="email" type="email" />
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="message">
            Message
          </label>
          <textarea className="h-32 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950" id="message" name="message" />
          <Button className="w-full">Send message</Button>
        </form>
      </Container>
    </section>
  );
}
