import { Container } from '@/components/layout/container';
import { stats } from '@/data/stats';

export function Stats() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-8 md:grid-cols-3 dark:border-slate-800 dark:bg-slate-900">
          {stats.map((stat) => (
            <article key={stat.label}>
              <p className="text-3xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">{stat.label}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
