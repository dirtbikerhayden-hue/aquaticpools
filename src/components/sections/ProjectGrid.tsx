'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const projects = [
  { id: 1, title: 'Custom Pool Build', location: 'Scottsdale, AZ', category: 'Pool Construction', image: '' },
  { id: 2, title: 'Luxury Inground Pool', location: 'Paradise Valley, AZ', category: 'Pool Construction', image: '' },
  { id: 3, title: 'Resort-Style Pool', location: 'Chandler, AZ', category: 'Pool Construction', image: '' },
  { id: 4, title: 'Pool with Water Features', location: 'Gilbert, AZ', category: 'Pool Construction', image: '' },
  { id: 5, title: 'Travertine Deck & Stonework', location: 'Tempe, AZ', category: 'Hardscaping', image: '' },
  { id: 6, title: 'Outdoor Kitchen & Patio', location: 'Scottsdale, AZ', category: 'Outdoor Kitchen', image: '' },
  { id: 7, title: 'Custom Paver Landscape', location: 'Paradise Valley, AZ', category: 'Hardscaping', image: '' },
  { id: 8, title: 'Pool Deck & Steps', location: 'Gilbert, AZ', category: 'Hardscaping', image: '' },
  { id: 9, title: 'Paver Walkway & Borders', location: 'Chandler, AZ', category: 'Hardscaping', image: '' },
  { id: 10, title: 'Fire Feature & Seating', location: 'Scottsdale, AZ', category: 'Outdoor Kitchen', image: '' },
  { id: 11, title: 'Travertine Pool Surround', location: 'Chandler, AZ', category: 'Hardscaping', image: '' },
  { id: 12, title: 'Decorative Paver Patio', location: 'Paradise Valley, AZ', category: 'Hardscaping', image: '' },
  { id: 13, title: 'Concrete Pool Deck', location: 'Gilbert, AZ', category: 'Hardscaping', image: '' },
  { id: 14, title: 'Pool Remodel & Retile', location: 'Tempe, AZ', category: 'Pool Remodeling', image: '' },
  { id: 15, title: 'Modern Pool Design', location: 'Scottsdale, AZ', category: 'Pool Construction', image: '' },
  { id: 16, title: 'Custom Inground Pool', location: 'Chandler, AZ', category: 'Pool Construction', image: '' },
];

export function ProjectGrid() {
  const [lightbox, setLightbox] = useState<{ image: string; title: string; location: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <>
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => project.image ? setLightbox({ image: project.image, title: project.title, location: project.location }) : undefined}
                className={`group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 text-left ${project.image ? 'cursor-zoom-in' : 'cursor-default'}`}
              >
                <div className="relative aspect-[4/3]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.category} by Aquatic Pools and Spas`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={70}
                      priority={index < 6}
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="image-placeholder-premium w-full h-full rounded-none" />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-2.5 py-1 text-xs font-medium bg-brand-600 text-white rounded-full">
                    {project.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white font-medium text-sm">{lightbox.title}</p>
            <p className="text-white/60 text-xs">{lightbox.location}</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.image}
            alt={lightbox.title}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
