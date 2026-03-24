'use client';

import { motion } from 'framer-motion';

export default function LoadingSkeleton({ cards = 4 }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: cards }).map((_, idx) => (
        <motion.div
          key={idx}
          animate={{ opacity: [0.45, 0.9, 0.45] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: idx * 0.1 }}
          className="glass h-72 rounded-2xl p-4"
        >
          <div className="h-full rounded-xl bg-white/10" />
        </motion.div>
      ))}
    </div>
  );
}
