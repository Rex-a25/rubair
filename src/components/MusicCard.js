'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, Play } from 'lucide-react';

export default function MusicCard({ item }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="glass overflow-hidden rounded-2xl p-4">
      <div className="mb-4 flex gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-xl">
          <Image src={item.cover} alt={item.title} fill className="object-cover" />
        </div>
        <div>
          <h3 className="font-medium">{item.title}</h3>
          <p className="text-sm text-slate-400">{item.artist}</p>
          <p className="text-xs text-slate-500">{item.duration}</p>
        </div>
      </div>
      <div className="mb-4 flex items-end gap-1">
        {Array.from({ length: 30 }).map((_, idx) => (
          <span key={idx} className="w-1 rounded-full bg-cyan-200/60" style={{ height: `${8 + ((idx * 7) % 20)}px` }} />
        ))}
      </div>
      <div className="flex gap-2">
        <button className="flex-1 rounded-xl bg-white/90 px-3 py-2 text-xs font-medium text-slate-900 hover:bg-white">
          <span className="inline-flex items-center gap-1"><Play className="h-3.5 w-3.5" /> Play</span>
        </button>
        <button className="rounded-xl border border-white/20 px-3 py-2 text-xs hover:bg-white/10">
          <Download className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.article>
  );
}
