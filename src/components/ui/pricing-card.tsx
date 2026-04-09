import { Check } from 'lucide-react';
import type { PricingTier } from '@/data/pricing';
import { Button } from './button';
import { cn } from '@/lib/utils';

export function PricingCard({ name, description, price, period, featured, cta, features }: PricingTier) {
  return (
    <article
      className={cn(
        'rounded-2xl border p-8',
        featured
          ? 'border-indigo-300 bg-indigo-50/70 shadow-lg shadow-indigo-100 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:shadow-none'
          : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
      )}
    >
      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">{name}</p>
      <h3 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{price}</h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{period}</p>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{description}</p>
      <Button className="mt-6 w-full" href={name === 'Enterprise' ? '/contact' : '/pricing'} variant={featured ? 'primary' : 'secondary'}>
        {cta}
      </Button>
      <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
        {features.map((feature) => (
          <li className="flex items-start gap-2" key={feature}>
            <Check className="mt-0.5 h-4 w-4 text-indigo-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
