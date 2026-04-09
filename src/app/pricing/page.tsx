import { Container } from '@/components/layout/container';
import { PricingCard } from '@/components/ui/pricing-card';
import { SectionHeading } from '@/components/ui/section-heading';
import { pricingTiers } from '@/data/pricing';

export default function PricingPage() {
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing, built to scale with your team"
          description="All plans include core workflow automation, secure infrastructure, and a modern collaboration experience."
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
