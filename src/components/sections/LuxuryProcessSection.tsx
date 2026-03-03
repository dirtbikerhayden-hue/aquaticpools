import Image from 'next/image';
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
    description: 'Our design team digs deeper to understand how you use your space—entertaining, relaxing, or family time.',
  },
  {
    number: '03',
    title: 'Site Survey & Measurements',
    description: 'We gather precise photos and dimensions of your property for accurate planning and design execution.',
  },
  {
    number: '04',
    title: 'Custom Pool & Outdoor Design',
    description: 'Our experts craft a tailored design blending style, function, and buildability—a curated outdoor environment.',
  },
  {
    number: '05',
    title: 'Your Design Reveal',
    description: 'See your custom design for the first time. We refine every detail together before moving to engineering.',
  },
  {
    number: '06',
    title: 'Detailed Estimate Review',
    description: 'A transparent, line-by-line cost breakdown with no surprises so you can make confident decisions.',
  },
  {
    number: '07',
    title: 'Build Begins',
    description: 'With plans finalized and permits underway, our build team takes you from excavation to finish.',
  },
];

export function LuxuryProcessSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-[3fr_2fr]">
        {/* Left: steps */}
        <div className="px-6 sm:px-10 lg:px-12 py-10 lg:py-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-stone-950 uppercase tracking-tight leading-tight mb-8">
            Luxury Pool Construction Process
          </h2>

          <div className="divide-y divide-stone-200">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4 py-3 first:pt-0">
                {/* Ghost number */}
                <span
                  className="flex-shrink-0 font-display font-black text-5xl sm:text-6xl select-none w-16"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1.5px #d4d4d4',
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </span>
                {/* Content */}
                <div className="pt-0.5">
                  <h3 className="text-sm sm:text-base font-display font-bold text-stone-950 uppercase tracking-wide mb-0.5">
                    {step.title}
                  </h3>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent-gold text-white text-sm font-semibold tracking-wide uppercase rounded-full hover:bg-yellow-600 transition-colors"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>

        {/* Right: sticky image */}
        <div className="hidden lg:block">
          <div className="sticky top-0 h-screen relative overflow-hidden">
            <Image
              src="https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a73e4a6dca20442c15a27b.png"
              alt="Luxury pool architectural design"
              fill
              className="object-cover object-center"
              sizes="40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
