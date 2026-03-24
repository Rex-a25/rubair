'use client';

import { motion } from 'framer-motion';
import VideoCard from '@/components/VideoCard';
import MusicCard from '@/components/MusicCard';

export default function FeaturedSection({ title, items, type = 'video' }) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button className="text-xs text-cyan-200 hover:text-cyan-100">See all</button>
      </div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.08 } }
        }}
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {items.map((item) => (
          <motion.div key={item.id} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}>
            {type === 'video' ? <VideoCard item={item} /> : <MusicCard item={item} />}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
