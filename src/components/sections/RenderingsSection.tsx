import Image from 'next/image';
import Link from 'next/link';

const renderings = [
  {
    src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a780c84cf19932b83086d8.png',
    alt: 'Custom pool and landscape rendering — Aquatic Pools and Spas',
  },
  {
    src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a73b54f1838272d8a1282e.png',
    alt: 'Custom pool design rendering — Aquatic Pools and Spas',
  },
  {
    src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a780c84cf1995ddb3086d7.png',
    alt: 'Luxury outdoor living rendering — Aquatic Pools and Spas',
  },
];

export function RenderingsSection() {
  return (
    <section className="bg-stone-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-12">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent-gold mb-3">
            <span className="w-5 h-px bg-accent-gold" />
            See It Before We Build It
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
            Custom Pool & Landscape Renderings
          </h2>
          <p className="mt-4 text-stone-400 text-base max-w-2xl">
            Every project starts with a detailed 3D rendering so you can visualize your dream backyard before a single shovel hits the ground.
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {renderings.map((r, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={r.src}
                alt={r.alt}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-accent-gold text-white text-sm font-semibold tracking-wide uppercase rounded-full hover:bg-yellow-600 transition-colors"
          >
            Get Your Free Rendering
          </Link>
        </div>
      </div>
    </section>
  );
}
