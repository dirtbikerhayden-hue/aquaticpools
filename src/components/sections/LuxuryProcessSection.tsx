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
    <section className="relative overflow-hidden py-20 lg:py-28">
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
      {/* Dark overlay — light enough to keep the image prominent */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
            <span className="w-6 h-px bg-accent-gold" />
            <span className="gradient-text-gold">How It Works</span>
            <span className="w-6 h-px bg-accent-gold" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white uppercase tracking-tight">
            Luxury Pool Construction Process
          </h2>
        </div>

        {/* Steps — 2-column grid so the image breathes on all sides */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-black/30 backdrop-blur-sm p-6 flex flex-col gap-3 hover:bg-black/20 transition-colors duration-200"
            >
              <span className="text-accent-gold font-bold text-2xl font-display">{step.number}</span>
              <h3 className="text-white font-display font-bold text-base uppercase tracking-wide leading-snug">
                {step.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}

          {/* CTA tile — fills the last grid cell */}
          <div className="bg-accent-gold/90 backdrop-blur-sm p-6 flex flex-col justify-between gap-4 hover:bg-accent-gold transition-colors duration-200">
            <p className="text-white font-display font-bold text-base uppercase tracking-wide leading-snug">
              Ready to Start?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-accent-gold font-semibold text-sm tracking-wide hover:bg-white/90 transition-colors self-start"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
