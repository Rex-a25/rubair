export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'FlowPilot gave us back almost 12 hours each week. Our product and operations teams now run in sync by default.',
    name: 'Alicia Warren',
    role: 'VP of Operations',
    company: 'Northline Labs'
  },
  {
    quote:
      'The rollout took two days and our reporting quality improved immediately. It feels like adding an elite project manager to every squad.',
    name: 'Daniel Kim',
    role: 'Head of Delivery',
    company: 'MetricForge'
  },
  {
    quote:
      'We replaced three disconnected tools and finally have one source of truth for execution metrics.',
    name: 'Priya Menon',
    role: 'COO',
    company: 'VelocityCloud'
  }
];
