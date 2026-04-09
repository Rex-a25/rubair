import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Page not found</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">The page you are looking for does not exist or may have moved. Let’s get you back to FlowPilot.</p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Return home</Button>
        </div>
        <Link className="mt-4 inline-block text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200" href="/contact">
          Need help? Contact support.
        </Link>
      </Container>
    </section>
  );
}
