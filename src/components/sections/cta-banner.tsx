import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';

export function CtaBanner() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-10 text-center dark:border-indigo-500/30 dark:from-indigo-500/10 dark:to-slate-900">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Bring clarity and speed to every team workflow.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            Start your 14-day trial and see how FlowPilot helps your team align faster, reduce busywork, and ship with confidence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/pricing">Start free trial</Button>
            <Button href="/contact" variant="secondary">
              Talk to sales
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
