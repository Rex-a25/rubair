'use client';

import { motion } from 'framer-motion';

export default function FilterChips({ items, activeItem, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => {
        const selected = item === activeItem;
        return (
          <motion.button
            whileTap={{ scale: 0.96 }}
            key={item}
            onClick={() => onSelect(selected ? 'All' : item)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${selected ? 'border-cyan-300/60 bg-cyan-300/15 text-cyan-100' : 'border-white/15 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'}`}
          >
            {item}
          </motion.button>
        );
      })}
    </div>
  );
}
