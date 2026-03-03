import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Start With Your Vision',
    description:
      'Complete our custom design intake to help us understand your aesthetic preferences, lifestyle needs, and outdoor wish list. This is where your vision begins to take shape.',
  },
  {
    number: '02',
    title: 'We Learn How You Live',
    description:
      'No two homeowners are alike. Our design team digs deeper to understand how you use your space, whether it\'s for entertaining, relaxing, or family time. Your lifestyle drives the design.',
  },
  {
    number: '03',
    title: 'Site Survey & Measurements',
    description:
      'An Aquatic Pools surveyor will schedule a time to gather precise photos and dimensions of your property. These measurements are essential for accurate planning and design execution.',
  },
  {
    number: '04',
    title: 'Custom Pool & Outdoor Design',
    description:
      'Our experts craft a tailored design that blends style, function, and buildability. This isn\'t just a pool, it\'s a curated outdoor environment designed to elevate your space.',
  },
  {
    number: '05',
    title: 'Your Design Reveal',
    description:
      'See your custom pool design for the first time. After the reveal, we collaborate with you to refine every detail. Once approved, our team prepares it for engineering, estimating, and site analysis.',
  },
  {
    number: '06',
    title: 'Detailed Estimate Review',
    description:
      'Receive a transparent, line-by-line cost breakdown with no surprises. We walk you through each element so you can make confident decisions that align with both your vision and budget.',
  },
  {
    number: '07',
    title: 'Build Begins',
    description:
      'With plans finalized and permits underway, our specialized build team takes over. From excavation to finish, we handle everything, delivering your luxury outdoor space with precision, quality, and speed.',
  },
];

export function LuxuryProcessSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a73e4a6dca20442c15a27b.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Very light vignette — edges darken, centre stays clear so image shows */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/55" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
            <span className="w-6 h-px bg-accent-gold" />
            <span className="gradient-text-gold">How It Works</span>
            <span className="w-6 h-px bg-accent-gold" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white uppercase tracking-tight drop-shadow-lg">
            Luxury Pool Construction Process
          </h2>
        </div>

        {/* Steps — left-border style, transparent so image shows through */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {steps.map((step) => (
            <div key={step.number} className="pl-4 border-l-2 border-accent-gold/60">
              <span className="block text-accent-gold font-display font-bold text-2xl mb-2 drop-shadow">{step.number}</span>
              <h3 className="text-white font-display font-bold text-sm uppercase tracking-wide leading-snug mb-2 drop-shadow">
                {step.title}
              </h3>
              <p className="text-white/80 text-xs leading-relaxed [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]">{step.description}</p>
            </div>
          ))}

          {/* CTA cell */}
          <div className="pl-4 border-l-2 border-accent-gold flex flex-col justify-between gap-5">
            <div>
              <span className="block text-accent-gold font-display font-bold text-2xl mb-2 drop-shadow">→</span>
              <p className="text-white font-display font-bold text-sm uppercase tracking-wide drop-shadow">
                Ready to Start?
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent-gold text-white font-semibold text-sm tracking-wide hover:bg-accent-gold/90 transition-colors self-start shadow-lg"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
