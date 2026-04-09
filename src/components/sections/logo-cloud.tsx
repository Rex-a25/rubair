import { Container } from '@/components/layout/container';
import { logoNames } from '@/data/stats';

export function LogoCloud() {
  return (
    <section className="py-10">
      <Container>
        <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400">Trusted by product and operations teams at</p>
        <div className="mt-6 grid grid-cols-2 gap-4 text-center text-sm font-semibold text-slate-500 sm:grid-cols-3 lg:grid-cols-6 dark:text-slate-400">
          {logoNames.map((name) => (
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900" key={name}>
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
