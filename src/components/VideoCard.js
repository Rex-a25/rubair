'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, PlayCircle } from 'lucide-react';

export default function VideoCard({ item }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="glass overflow-hidden rounded-2xl">
      <div className="relative h-44">
        <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
        <div className="absolute right-3 top-3 rounded-full bg-slate-950/70 px-2 py-1 text-xs">{item.quality}</div>
      </div>
      <div className="space-y-3 p-4">
        <div>
          <h3 className="font-medium">{item.title}</h3>
          <p className="text-sm text-slate-400">{item.creator} • {item.duration}</p>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 rounded-xl bg-white/90 px-3 py-2 text-xs font-medium text-slate-900 transition hover:bg-white">
            <span className="inline-flex items-center gap-1"><PlayCircle className="h-3.5 w-3.5" /> Preview</span>
          </button>
          <button className="rounded-xl border border-white/20 px-3 py-2 text-xs hover:bg-white/10">
            <Download className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
