'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const renderings = [
  {
    src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a780c84cf19932b83086d8.png',
    alt: 'Custom pool and landscape rendering — Aquatic Pools and Spas',
    label: 'Pool & Outdoor Living',
  },
  {
    src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a73b54f1838272d8a1282e.png',
    alt: 'Custom pool design rendering — Aquatic Pools and Spas',
    label: 'Custom Pool Design',
  },
  {
    src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a780c84cf1995ddb3086d7.png',
    alt: 'Luxury outdoor living rendering — Aquatic Pools and Spas',
    label: 'Backyard Transformation',
  },
];

export function RenderingsSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % renderings.length);
        setFading(false);
      }, 800);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  function goTo(i: number) {
    setFading(true);
    setTimeout(() => { setCurrent(i); setFading(false); }, 800);
  }

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Video backdrop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a83c3cfa686465511b8505.mov" type="video/mp4" />
      </video>
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-stone-950/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-accent-gold mb-4">
            <span className="w-8 h-px bg-accent-gold" />
            See It Before We Build It
            <span className="w-8 h-px bg-accent-gold" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white uppercase tracking-tight leading-tight">
            Custom Pool &amp; Landscape<br className="hidden sm:block" /> Renderings
          </h2>
          <p className="mt-5 text-stone-300 text-base max-w-xl mx-auto leading-relaxed">
            Every project starts with a photorealistic 3D rendering — so you can see and approve every detail before we break ground.
          </p>
        </div>

        {/* Rotating image — larger */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] max-w-5xl mx-auto ring-1 ring-white/10 shadow-2xl">
          <Image
            key={current}
            src={renderings[current].src}
            alt={renderings[current].alt}
            fill
            className="object-cover object-center"
            style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.8s ease-in-out' }}
            sizes="(max-width: 768px) 100vw, 1024px"
            priority
          />

          {/* Label */}
          <div className="absolute bottom-5 left-5">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent-gold"
              style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.8s ease-in-out' }}
            >
              <span className="w-4 h-px bg-accent-gold" />
              {renderings[current].label}
            </span>
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-5 right-5 flex gap-2">
            {renderings.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-accent-gold w-5' : 'w-2 bg-white/30 hover:bg-white/60'}`}
                aria-label={`View rendering ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-gold text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-yellow-600 transition-colors"
          >
            Get Your Free Rendering
          </Link>
          <p className="text-stone-400 text-sm">No commitment required.</p>
        </div>

      </div>
    </section>
  );
}
