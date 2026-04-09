'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { testimonials } from '@/data/testimonials';
import { SectionHeading } from '@/components/ui/section-heading';
import { TestimonialCard } from '@/components/ui/testimonial-card';

export function Testimonials() {
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Customer stories"
          title="Teams trust FlowPilot to run critical operations"
          description="From scaling startups to established companies, teams use FlowPilot to increase output while improving quality."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              key={testimonial.name}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
