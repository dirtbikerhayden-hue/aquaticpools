'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  {
    src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a83e37618c8dc512bcea89.png',
    alt: 'Custom pool rendering — Aquatic Pools and Spas',
    label: 'Custom Pool Rendering',
  },
  {
    src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a83e374bae6122f4d33035.png',
    alt: 'Luxury pool design rendering — Aquatic Pools and Spas',
    label: 'Luxury Pool Design',
  },
  {
    src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a83e376fa65837d2b00935.png',
    alt: 'Outdoor living space rendering — Aquatic Pools and Spas',
    label: 'Outdoor Living Space',
  },
  {
    src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a83e37c7e71f829ec4dfe7.png',
    alt: 'Pool and landscape rendering — Aquatic Pools and Spas',
    label: 'Pool & Landscape',
  },
  {
    src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a83e37fa686429fc1bd48d.png',
    alt: 'Resort-style pool rendering — Aquatic Pools and Spas',
    label: 'Resort-Style Pool',
  },
];

export function RenderingsSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startAutoRotate() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % renderings.length);
        setFading(false);
      }, 800);
    }, 4000);
  }

  useEffect(() => {
    startAutoRotate();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function navigate(dir: 'prev' | 'next') {
    setFading(true);
    setTimeout(() => {
      setCurrent((prev) => dir === 'next'
        ? (prev + 1) % renderings.length
        : (prev - 1 + renderings.length) % renderings.length
      );
      setFading(false);
    }, 800);
    startAutoRotate();
  }

  function goTo(i: number) {
    setFading(true);
    setTimeout(() => { setCurrent(i); setFading(false); }, 800);
    startAutoRotate();
  }

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Video backdrop */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a83c3cfa686465511b8505.mov" type="video/mp4" />
      </video>
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

        {/* Slideshow */}
        <div className="relative max-w-5xl mx-auto">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] ring-1 ring-white/10 shadow-2xl">
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
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent-gold"
                style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.8s ease-in-out' }}
              >
                <span className="w-4 h-px bg-accent-gold" />
                {renderings[current].label}
                <span className="w-4 h-px bg-accent-gold" />
              </span>
            </div>
          </div>

          {/* Prev button */}
          <button
            onClick={() => navigate('prev')}
            aria-label="Previous rendering"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-accent-gold hover:border-accent-gold transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next button */}
          <button
            onClick={() => navigate('next')}
            aria-label="Next rendering"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-accent-gold hover:border-accent-gold transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Counter + dots */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="text-stone-500 text-xs font-medium tabular-nums">
              {current + 1} / {renderings.length}
            </span>
            <div className="flex gap-1.5">
              {renderings.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-accent-gold w-5' : 'w-1.5 bg-white/25 hover:bg-white/50'}`}
                  aria-label={`View rendering ${i + 1}`}
                />
              ))}
            </div>
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
