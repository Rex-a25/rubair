'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.18),transparent_50%)]" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.55 }}
            className="space-y-7"
          >
            <Badge>Built for modern operations teams</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Automate team workflows with AI that actually understands your business.
            </h1>
            <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
              FlowPilot helps teams plan, execute, and optimize work faster with AI-powered workflows, unified tracking, and actionable insights.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/pricing">
                Start free trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/about" variant="secondary">
                <Play className="mr-2 h-4 w-4" /> Watch demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.98 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-700">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Operations Overview</p>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">+24% efficiency</span>
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  ['Sprint Planning', 'Auto-prioritized'],
                  ['Client Onboarding', '7 tasks automated'],
                  ['Cross-team Sync', 'No blockers detected']
                ].map((item) => (
                  <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm shadow-sm dark:bg-slate-900" key={item[0]}>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{item[0]}</span>
                    <span className="text-indigo-600 dark:text-indigo-300">{item[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
