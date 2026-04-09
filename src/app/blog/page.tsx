import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';

const posts = [
  {
    title: 'How AI Workflow Automation Increases Team Throughput',
    excerpt: 'A practical framework for using AI to remove repetitive operational work without disrupting delivery quality.',
    href: '#'
  },
  {
    title: '5 Signals Your Team Needs Better Execution Visibility',
    excerpt: 'Spot hidden bottlenecks early and build a proactive cadence around reporting and decisions.',
    href: '#'
  },
  {
    title: 'Scaling Cross-Functional Planning in High-Growth Startups',
    excerpt: 'Tactics used by modern operators to align product, engineering, and customer teams in one workflow system.',
    href: '#'
  }
];

export default function BlogPage() {
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Blog"
          title="Insights on AI, workflows, and operational excellence"
          description="Practical playbooks and leadership insights from teams building modern operating systems."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900" key={post.title}>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{post.title}</h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{post.excerpt}</p>
              <Link className="mt-5 inline-block text-sm font-semibold text-indigo-600 dark:text-indigo-300" href={post.href}>
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
