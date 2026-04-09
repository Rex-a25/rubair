import { CtaBanner } from '@/components/sections/cta-banner';
import { Faq } from '@/components/sections/faq';
import { FeatureGrid } from '@/components/sections/feature-grid';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { LogoCloud } from '@/components/sections/logo-cloud';
import { PricingPreview } from '@/components/sections/pricing-preview';
import { Stats } from '@/components/sections/stats';
import { Testimonials } from '@/components/sections/testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <FeatureGrid />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <PricingPreview />
      <Faq />
      <CtaBanner />
    </>
  );
}
