import { Container } from '@/components/layout/container';
import { pricingTiers } from '@/data/pricing';
import { SectionHeading } from '@/components/ui/section-heading';
import { PricingCard } from '@/components/ui/pricing-card';

export function PricingPreview() {
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Pricing"
          title="Flexible plans for every team stage"
          description="Start small, scale smoothly, and upgrade when your workflow complexity grows."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </Container>
    </section>
  );
}
