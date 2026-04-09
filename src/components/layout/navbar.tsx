import Link from 'next/link';
import { navigation } from '@/data/navigation';
import { Button } from '@/components/ui/button';
import { Container } from './container';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <Container className="flex h-16 items-center justify-between">
        <Link className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white" href="/">
          FlowPilot
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button className="hidden sm:inline-flex" href="/contact" variant="ghost">
            Book demo
          </Button>
          <Button href="/pricing">Start free trial</Button>
        </div>
      </Container>
    </header>
  );
}
