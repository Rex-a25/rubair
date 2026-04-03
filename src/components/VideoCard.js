'use client';

import { motion } from 'framer-motion';
import { Download, PlayCircle, PauseCircle } from 'lucide-react';
import { useRef, useState } from 'react';

export default function VideoCard({ item }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePreview = async () => {
    if (!videoRef.current || !item.videoUrl) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.error('Video play failed:', err);
    }
  };

  return (
    <motion.article whileHover={{ y: -6 }} className="glass overflow-hidden rounded-2xl">
      
      {/* VIDEO / THUMBNAIL */}
      <div className="relative h-44 bg-black">
        {isPlaying ? (
          <video
            ref={videoRef}
            src={item.videoUrl}
            className="h-full w-full object-cover"
            muted
            loop
            controls
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />
        ) : (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        )}

        <div className="absolute right-3 top-3 rounded-full bg-black/70 px-2 py-1 text-xs">
          {item.quality}
        </div>
      </div>

      {/* CONTENT */}
      <div className="space-y-3 p-4">
        <div>
          <h3 className="font-medium">{item.title}</h3>
          <p className="text-sm text-slate-400">
            {item.creator} • {item.duration}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handlePreview}
            className="flex-1 rounded-xl bg-white/90 px-3 py-2 text-xs font-medium text-black hover:bg-white"
          >
            <span className="flex items-center justify-center gap-1">
              {isPlaying ? (
                <PauseCircle className="h-4 w-4" />
              ) : (
                <PlayCircle className="h-4 w-4" />
              )}
              {isPlaying ? 'Stop' : 'Preview'}
            </span>
          </button>

          <a
            href={item.downloadUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/20 px-3 py-2 text-xs hover:bg-white/10"
          >
            <Download className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}