import Link from 'next/link';
import { Container } from './container';
import { navigation } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-12 dark:border-slate-800">
      <Container className="space-y-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">FlowPilot</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">AI workflow and productivity platform built for high-performing teams.</p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
            {navigation.map((item) => (
              <Link className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} FlowPilot, Inc. All rights reserved.</p>
      </Container>
    </footer>
  );
}
