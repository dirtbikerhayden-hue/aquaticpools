import Image from 'next/image';
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
    <section className="bg-white">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-[3fr_2fr]">
        {/* Left: steps */}
        <div className="px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-stone-950 uppercase tracking-tight leading-tight mb-16">
            Luxury Pool Construction Process
          </h2>

          <div className="space-y-0 divide-y divide-stone-200">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 py-8 first:pt-0">
                {/* Ghost number */}
                <span
                  className="flex-shrink-0 font-display font-black text-7xl sm:text-8xl leading-none select-none"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1.5px #d4d4d4',
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </span>
                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-stone-950 uppercase tracking-wide mb-2">
                    {step.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-accent-gold text-white text-sm font-semibold tracking-wide uppercase rounded-full hover:bg-yellow-600 transition-colors"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>

        {/* Right: sticky image */}
        <div className="hidden lg:block relative">
          <div className="sticky top-0 h-screen">
            <Image
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80"
              alt="Luxury pool architectural design"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
