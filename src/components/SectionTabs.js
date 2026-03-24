'use client';

import { motion } from 'framer-motion';

export default function SectionTabs({ active, setActive }) {
  const tabs = ['videos', 'music'];

  return (
    <div className="glass relative inline-flex rounded-full p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`relative z-10 rounded-full px-5 py-2 text-sm capitalize transition ${active === tab ? 'text-slate-900' : 'text-slate-300 hover:text-white'}`}
        >
          {active === tab && (
            <motion.span
              layoutId="active-tab"
              className="absolute inset-0 -z-10 rounded-full bg-white"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
          {tab}
        </button>
      ))}
    </div>
  );
}
