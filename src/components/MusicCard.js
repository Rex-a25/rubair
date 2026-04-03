'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, Play, Pause } from 'lucide-react';
import { useRef, useState } from 'react';

export default function MusicCard({ item }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    if (!audioRef.current || !item.audioUrl) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <motion.article whileHover={{ y: -6 }} className="glass overflow-hidden rounded-2xl p-4">
      <audio
        ref={audioRef}
        src={item.audioUrl}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <div className="mb-4 flex gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-xl">
          <Image
            src={item.cover}
            alt={item.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="min-w-0">
          <h3 className="truncate font-medium">{item.title}</h3>
          <p className="truncate text-sm text-slate-400">{item.artist}</p>
          <p className="text-xs text-slate-500">{item.duration}</p>
        </div>
      </div>

      <div className="mb-4 flex items-end gap-1">
        {Array.from({ length: 30 }).map((_, idx) => (
          <span
            key={idx}
            className="w-1 rounded-full bg-cyan-200/60"
            style={{ height: `${8 + ((idx * 7) % 20)}px` }}
          />
        ))}
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={handlePlayToggle}
          className="flex-1 rounded-xl bg-white/90 px-3 py-2 text-xs font-medium text-slate-900 hover:bg-white"
        >
          <span className="inline-flex items-center gap-1">
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {isPlaying ? 'Pause' : 'Play'}
          </span>
        </button>

        <a
          href={item.downloadUrl || item.audioUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/20 px-3 py-2 text-xs hover:bg-white/10"
        >
          <Download className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.article>
  );
}