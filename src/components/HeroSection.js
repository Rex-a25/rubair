'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="section-wrap relative overflow-hidden py-24 sm:py-32">
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-10 top-14 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-0 top-24 h-44 w-44 rounded-full bg-fuchsia-400/20 blur-3xl"
      />

      <div className="mx-auto max-w-3xl text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
          Built for Creators
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold leading-tight sm:text-6xl"
        >
          Discover <span className="gradient-text">premium videos & music</span> in one elegant workspace.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg"
        >
          MediaFinder helps editors and content teams find inspiring visual and audio assets faster.
          Search, preview, and curate your creative direction with confidence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/dashboard" className="rounded-full bg-white px-7 py-3 font-medium text-slate-900 shadow-glow transition hover:scale-[1.03]">
            Start Exploring
          </Link>
          <Link href="#preview" className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10">
            Watch Product Preview
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
