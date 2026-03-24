'use client';

import { motion } from 'framer-motion';
import { AudioLines, Layers2, SearchCheck, Sparkles } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

const features = [
  { title: 'Unified Media Discovery', desc: 'Explore videos and music in one fast, focused dashboard.', icon: Layers2 },
  { title: 'Precision Search Flow', desc: 'Use tags, chips, and trends to find assets that match your mood.', icon: SearchCheck },
  { title: 'Audio-first Controls', desc: 'Preview tracks with visualized waveforms and clean metadata.', icon: AudioLines },
  { title: 'Polished Motion UI', desc: 'A premium interface with purposeful transitions and micro-interactions.', icon: Sparkles }
];

export default function FeatureSection() {
  return (
    <section id="features" className="section-wrap py-16 sm:py-20">
      <motion.div {...fadeUp} className="mb-10 max-w-xl">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-200">Features</p>
        <h2 className="text-3xl font-semibold">Everything needed for quick creative sourcing.</h2>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, desc, icon: Icon }) => (
          <motion.article key={title} variants={staggerItem} whileHover={{ y: -6 }} className="glass rounded-2xl p-6">
            <div className="mb-4 inline-flex rounded-xl bg-white/10 p-2">
              <Icon className="h-4 w-4 text-cyan-200" />
            </div>
            <h3 className="mb-2 font-medium">{title}</h3>
            <p className="text-sm text-slate-300">{desc}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
