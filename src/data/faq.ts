export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: 'How quickly can we implement FlowPilot?',
    answer: 'Most teams launch their first AI-assisted workflow in less than one week with our onboarding guide.'
  },
  {
    question: 'Can we integrate with our existing project tools?',
    answer: 'Yes. FlowPilot supports common tools like Jira, Asana, Slack, Notion, and webhook-based custom integrations.'
  },
  {
    question: 'Is our team data secure?',
    answer: 'We use encryption in transit and at rest, with role-based permissions and audit logs for enterprise plans.'
  },
  {
    question: 'Do you offer annual pricing?',
    answer: 'Yes. Annual plans are available for Pro and Enterprise with discounted rates and onboarding support.'
  }
];
