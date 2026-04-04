'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, Clapperboard} from 'lucide-react';

export default function Navbar({ dashboard = false }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-surface/80 backdrop-blur-xl"
    >
      <div className="section-wrap flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-wide">
          <span className="rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 p-2 text-slate-950 shadow-glow">
            <Clapperboard className="h-4 w-4" />
          </span>
          <span>MediaFinder</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="/#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
          <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
        </nav>

        {dashboard ? (
          <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition">
            Upgrade Pro
          </button>
        ) : (
          <Link href="/dashboard" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:scale-[1.02] transition">
            Launch App
          </Link>
        )}

        <button className="md:hidden rounded-lg border border-white/10 p-2 text-slate-200">
          <Menu className="h-4 w-4" />
        </button>
      </div>
    </motion.header>
  );
}
