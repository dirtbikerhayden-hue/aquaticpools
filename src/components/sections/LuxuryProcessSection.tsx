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
      'No two homeowners are alike. Our design team digs deeper to understand how you use your space—whether it\'s for entertaining, relaxing, or family time. Your lifestyle drives the design.',
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
      'Our experts craft a tailored design that blends style, function, and buildability. This isn\'t just a pool—it\'s a curated outdoor environment designed to elevate your space.',
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
      'With plans finalized and permits underway, our specialized build team takes over. From excavation to finish, we handle everything—delivering your luxury outdoor space with precision, quality, and speed.',
  },
];

export function LuxuryProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background image — positioned right so the pool rendering shows through */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a73e4a6dca20442c15a27b.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
        }}
      />
      {/* Gradient: opaque white on left for text, fades to transparent on right to reveal image */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12 lg:mb-14 max-w-2xl">
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
            <span className="w-6 h-px bg-accent-gold" />
            <span className="gradient-text-gold">How It Works</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 uppercase tracking-tight">
            Luxury Pool Construction Process
          </h2>
        </div>

        {/* Steps — left column only (right side shows bg image) */}
        <div className="max-w-2xl space-y-0">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Vertical connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[1.35rem] top-10 bottom-0 w-px bg-slate-200" />
              )}

              {/* Step number badge */}
              <div className="shrink-0 relative z-10 w-11 h-11 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-slate-400 tracking-wider">{step.number}</span>
              </div>

              {/* Content */}
              <div className="pt-1.5">
                <h3 className="text-lg font-display font-bold text-slate-900 uppercase tracking-wide mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm tracking-wide transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ backgroundColor: '#D97A3A' }}
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
