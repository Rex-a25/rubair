import { Container } from '@/components/layout/container';
import { features } from '@/data/features';
import { FeatureCard } from '@/components/ui/feature-card';
import { SectionHeading } from '@/components/ui/section-heading';

export function FeatureGrid() {
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Product"
          title="Everything your team needs to execute with confidence"
          description="FlowPilot combines planning, automation, and AI insights in one clean platform built for modern team operations."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
