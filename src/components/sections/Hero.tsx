'use client';

import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface HeroProps {
  backgroundVideo?: string;
}

export function Hero({ backgroundVideo }: HeroProps) {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  function toggleMute() {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
    }
    setMuted((prev) => !prev);
  }

  return (
    <section className="-mt-16 lg:-mt-20 min-h-screen relative overflow-hidden">
      {backgroundVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-brand-950 to-slate-900" />
      )}

      {/* Mute / Unmute button */}
      {backgroundVideo && (
        <button
          onClick={toggleMute}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          className="absolute bottom-6 left-6 z-30 flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-black/60 transition-all duration-200"
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          <span>{muted ? 'Unmute' : 'Mute'}</span>
        </button>
      )}
    </section>
  );
}
