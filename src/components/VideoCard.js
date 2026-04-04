'use client';

import { useRef, useState } from 'react';

export default function VideoCard({ video }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const poster = video?.thumbnail || '';
  const videoSrc = video?.videoUrl || '';
  const creator = video?.creator || 'Unknown creator';
  const duration = video?.duration || 'Video';
  const quality = video?.quality || 'HD';
  const sourceUrl = video?.sourceUrl || '#';
  const downloadUrl = video?.downloadUrl || videoSrc || '#';
  const title = video?.title || 'Pixabay Video';

  const handleMouseEnter = async () => {
    if (!videoRef.current || !videoSrc) return;

    try {
      videoRef.current.currentTime = 0;
      await videoRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Video preview failed:', error);
      setIsPlaying(false);
    }
  };

  const handleMouseLeave = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
        {videoSrc && !videoError ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            onError={(e) => {
              console.error('VIDEO TAG ERROR:', e);
              console.error('FAILED SRC:', videoSrc);
              setVideoError(true);
            }}
          />
        ) : poster ? (
          <img
            src={poster}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-white/50">
            No preview available
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
          <div className="max-w-[70%]">
            <p className="truncate text-sm font-semibold">{creator}</p>
            <p className="text-xs text-white/70">
              {duration} • {quality}
            </p>
          </div>

          <span className="rounded-full bg-black/50 px-3 py-1 text-xs backdrop-blur">
            {isPlaying ? 'Playing' : 'Preview'}
          </span>
        </div>
      </div>

      <div className="space-y-3 p-4">
        <p className="line-clamp-2 text-sm font-medium text-white">
          {title}
        </p>

        <div className="flex items-center justify-between gap-3">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
          >
            View Source
          </a>

          {videoSrc ? (
            <a
              href={downloadUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Download
            </a>
          ) : (
            <button
              disabled
              className="cursor-not-allowed rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-white/40"
            >
              No file
            </button>
          )}
        </div>
      </div>
    </div>
  );
}