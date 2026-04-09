import { BarChart3, Bot, FolderSync, ShieldCheck, Sparkles, Workflow } from 'lucide-react';

export type Feature = {
  title: string;
  description: string;
  icon: typeof Workflow;
};

export const features: Feature[] = [
  {
    title: 'AI Workflow Builder',
    description: 'Design automated team workflows with natural language prompts and drag-to-connect logic.',
    icon: Workflow
  },
  {
    title: 'Smart Task Prioritization',
    description: 'FlowPilot ranks tasks by urgency, impact, and team capacity so nothing important slips.',
    icon: Sparkles
  },
  {
    title: 'Cross-Tool Sync',
    description: 'Keep updates in sync across Slack, Notion, Jira, and your internal systems in real time.',
    icon: FolderSync
  },
  {
    title: 'Team Performance Insights',
    description: 'Track delivery speed, blocker trends, and output quality through clear executive dashboards.',
    icon: BarChart3
  },
  {
    title: 'Built-In AI Assistant',
    description: 'Ask FlowPilot for instant status summaries, project risks, and next-best actions.',
    icon: Bot
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Support for SSO, audit logs, permission controls, and data governance at scale.',
    icon: ShieldCheck
  }
];

export const howItWorks = [
  {
    step: '01',
    title: 'Connect your stack',
    description: 'Integrate your tools in minutes and import existing workflows without migrations.'
  },
  {
    step: '02',
    title: 'Define outcomes',
    description: 'Set goals for delivery speed, quality, and visibility so AI can optimize decisions.'
  },
  {
    step: '03',
    title: 'Launch and improve',
    description: 'FlowPilot automates routine work and surfaces recommendations your team can trust.'
  }
];
