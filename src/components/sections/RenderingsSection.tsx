import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <section className="bg-stone-950 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header — centered */}
        <div className="text-center mb-16">
          <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-accent-gold mb-4">
            <span className="w-8 h-px bg-accent-gold" />
            See It Before We Build It
            <span className="w-8 h-px bg-accent-gold" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white uppercase tracking-tight leading-tight">
            Custom Pool &amp; Landscape<br className="hidden sm:block" /> Renderings
          </h2>
          <p className="mt-5 text-stone-400 text-base max-w-xl mx-auto leading-relaxed">
            Every project starts with a photorealistic 3D rendering — so you can see and approve every detail before we break ground.
          </p>
        </div>

        {/* Asymmetric grid: large left + two stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-3">

          {/* Featured image */}
          <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:row-span-2 ring-1 ring-white/5">
            <Image
              src={renderings[0].src}
              alt={renderings[0].alt}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent-gold">
                <span className="w-4 h-px bg-accent-gold" />
                {renderings[0].label}
              </span>
            </div>
          </div>

          {/* Two stacked images */}
          {renderings.slice(1).map((r, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[4/3] ring-1 ring-white/5">
              <Image
                src={r.src}
                alt={r.alt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent-gold">
                  <span className="w-4 h-px bg-accent-gold" />
                  {r.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-gold text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-yellow-600 transition-colors"
          >
            Get Your Free Rendering
          </Link>
          <p className="text-stone-500 text-sm">No commitment required.</p>
        </div>

      </div>
    </section>
  );
}
