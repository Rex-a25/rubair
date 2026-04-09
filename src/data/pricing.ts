export type PricingTier = {
  name: string;
  description: string;
  price: string;
  period: string;
  featured?: boolean;
  cta: string;
  features: string[];
};

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    description: 'For early teams building consistent delivery habits.',
    price: '$29',
    period: 'per user / month',
    cta: 'Start free trial',
    features: ['Up to 10 team members', 'Core workflow automations', 'Basic reporting dashboard', 'Email support']
  },
  {
    name: 'Pro',
    description: 'For growing teams that need deeper visibility and control.',
    price: '$79',
    period: 'per user / month',
    featured: true,
    cta: 'Choose Pro',
    features: [
      'Unlimited workflows',
      'Advanced AI recommendations',
      'Cross-tool sync and alerts',
      'Priority support'
    ]
  },
  {
    name: 'Enterprise',
    description: 'For complex organizations with strict security and scale needs.',
    price: 'Custom',
    period: 'annual contract',
    cta: 'Contact sales',
    features: ['SSO + SCIM', 'Custom roles and audit logs', 'Dedicated onboarding', 'SLA and success manager']
  }
];
