import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Start With Your Vision',
    description: 'Complete our custom design intake so we understand your aesthetic preferences, lifestyle needs, and outdoor wish list.',
  },
  {
    number: '02',
    title: 'We Learn How You Live',
    description: 'Our design team digs deeper to understand how you use your space — entertaining, relaxing, or family time.',
  },
  {
    number: '03',
    title: 'Site Survey & Measurements',
    description: 'We gather precise photos and dimensions of your property to ensure accurate planning and design execution.',
  },
  {
    number: '04',
    title: 'Custom Pool & Outdoor Design',
    description: 'Our experts craft a tailored design blending style, function, and buildability — a curated outdoor environment.',
  },
  {
    number: '05',
    title: 'Your Design Reveal',
    description: 'See your custom design for the first time. We refine every detail together before moving to engineering.',
  },
  {
    number: '06',
    title: 'Detailed Estimate Review',
    description: 'A transparent, line-by-line cost breakdown with no surprises — so you can make confident decisions.',
  },
  {
    number: '07',
    title: 'Build Begins',
    description: 'With plans finalized and permits underway, our specialized build team takes you from excavation to finish.',
  },
];

export function LuxuryProcessSection() {
  return (
    <section className="bg-stone-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-14">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent-gold mb-3">
            <span className="w-5 h-px bg-accent-gold" />
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
            Our Process
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-stone-950 p-7 flex flex-col gap-3 hover:bg-stone-900 transition-colors duration-200"
            >
              <span className="text-accent-gold font-display font-bold text-sm tracking-widest">
                {step.number}
              </span>
              <h3 className="text-white font-display font-semibold text-base leading-snug">
                {step.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}

          {/* CTA cell */}
          <div className="bg-stone-950 p-7 flex flex-col justify-center gap-4 hover:bg-stone-900 transition-colors duration-200">
            <p className="text-white font-display font-semibold text-base">
              Ready to get started?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent-gold text-accent-gold text-sm font-semibold tracking-wide hover:bg-accent-gold hover:text-white transition-colors self-start"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
