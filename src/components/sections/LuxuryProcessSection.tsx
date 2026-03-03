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
      "No two homeowners are alike. Our design team digs deeper to understand how you use your space—whether it's for entertaining, relaxing, or family time. Your lifestyle drives the design.",
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
      "Our experts craft a tailored design that blends style, function, and buildability. This isn't just a pool—it's a curated outdoor environment designed to elevate your space.",
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
    <section className="relative overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Steps */}
        <div className="flex-1 py-20 px-8 sm:px-12 lg:px-16 xl:px-20">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl font-display font-black text-stone-900 uppercase tracking-tight mb-14">
            Luxury Pool Construction Process
          </h2>

          {/* Steps */}
          <div className="space-y-0 divide-y divide-stone-100">
            {steps.map((step) => (
              <div key={step.number} className="relative py-7 pl-16">
                {/* Ghost number — watermark behind the content */}
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 font-display font-black leading-none text-stone-100 select-none pointer-events-none"
                  style={{ fontSize: '4.5rem' }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* Content */}
                <h3 className="text-sm sm:text-base font-display font-bold text-stone-900 uppercase tracking-widest mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent-gold text-white font-semibold text-sm tracking-wide hover:bg-accent-gold/90 transition-colors shadow-md"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>

        {/* Right: Sticky image */}
        <div className="hidden lg:block lg:w-[45%] xl:w-[48%] relative">
          <div
            className="sticky top-0 h-screen w-full"
            style={{
              backgroundImage:
                "url('https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a73e4a6dca20442c15a27b.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </div>
    </section>
  );
}
