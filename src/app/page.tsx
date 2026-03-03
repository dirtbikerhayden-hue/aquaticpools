import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Droplets, Wrench, TreePine } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { TestimonialCards } from '@/components/sections/TestimonialCards';
import { LuxuryProcessSection } from '@/components/sections/LuxuryProcessSection';
import { CTASection } from '@/components/sections/CTASection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = generatePageMetadata({
  title: 'Aquatic Pools and Spas | Luxury Pool Builder in Phoenix & Scottsdale, AZ',
  description:
    'Custom luxury pool construction, pool remodeling, and backyard hardscaping in Scottsdale, Paradise Valley, Phoenix, and Chandler. Design-Driven. Built to Endure. ROC #358080. Free estimates.',
  path: '/',
});

const serviceCategories = [
  {
    icon: Droplets,
    title: 'Luxury Pool Construction',
    description:
      'We build resort-caliber custom pools tailored to Arizona living. From the initial design to the final reveal, every detail is engineered for beauty, durability, and the Arizona climate.',
    href: '/services/luxury-pool-construction',
    features: ['Custom Design', 'Water Features', '3D Approval', 'Full Build'],
  },
  {
    icon: Wrench,
    title: 'Pool Remodeling',
    description:
      'Transform your existing pool into something extraordinary. We handle full pool renovations, replastering, tile updates, equipment upgrades, and feature additions.',
    href: '/services/pool-remodeling',
    features: ['Replastering', 'Tile & Coping', 'Equipment Upgrades', 'Spa Additions'],
  },
  {
    icon: TreePine,
    title: 'Backyard Hardscaping',
    description:
      'Complete your outdoor vision with premium hardscaping, outdoor kitchens, fire features, pergolas, and everything that turns a backyard into a private retreat.',
    href: '/services/backyard-hardscaping',
    features: ['Outdoor Kitchens', 'Fire Features', 'Pavers & Decking', 'Pergolas'],
  },
];

const homeFaqs = [
  {
    question: 'How much does it cost to build a custom pool in Arizona?',
    answer:
      'Custom pool construction in the Phoenix metro typically ranges from $60,000 to $200,000+ depending on size, features, materials, and site conditions. We provide free, no-obligation estimates for every project.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes. Every project starts with a complimentary consultation where we assess your property, listen to your vision, and provide a detailed estimate with no pressure.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Scottsdale, Paradise Valley, Phoenix, Chandler, Gilbert, Tempe, and surrounding communities throughout the greater Phoenix area. Contact us to confirm availability at your location.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Absolutely. Aquatic Pools and Spas is ROC licensed (#358080), bonded, and fully insured. We carry comprehensive liability coverage on every project for your complete peace of mind.',
  },
  {
    question: 'Can I see a 3D design before construction starts?',
    answer:
      'Yes — every project includes a detailed 3D design presentation so you can visualize your finished pool and outdoor space before a single shovel hits the ground. We refine the design together until it is exactly right.',
  },
  {
    question: 'How long does pool construction take in Arizona?',
    answer:
      'Most custom pool builds take 8–14 weeks from permit approval to completion. Timelines vary based on project complexity, permit processing times, and current build schedules.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero backgroundVideo="https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a5e64c9c14997d7141fef2.mp4" />

      <TrustStrip />

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
              <span className="w-6 h-px bg-accent-gold" />
              <span className="gradient-text-gold">What We Build</span>
              <span className="w-6 h-px bg-accent-gold" />
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4">
              Crafted for the Arizona Lifestyle
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From resort-style pool builds to complete backyard transformations — all designed with architectural precision and built to last in the Arizona climate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group relative bg-white rounded-2xl border border-slate-100 p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
                >
                  {/* Top gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center mb-6 group-hover:from-brand-100 group-hover:to-brand-200 transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7 text-brand-700" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-5">
                    {cat.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cat.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1 text-xs font-medium bg-white/80 text-slate-600 rounded-full border border-sand-200"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5 transition-all">
                    Explore Services <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSteps />

      {/* Projects Preview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
              <span className="w-6 h-px bg-accent-gold" />
              <span className="gradient-text-gold">Our Work</span>
              <span className="w-6 h-px bg-accent-gold" />
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4">
              Projects That Speak for Themselves
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Browse our portfolio of completed luxury pools and outdoor living spaces across Scottsdale, Paradise Valley, Phoenix, and Chandler.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a734c6b86978489aa0377d.jpg', title: 'Desert Modern Retreat', location: 'Scottsdale' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a734c6b86978042da03785.jpg', title: 'Infinity Edge Oasis', location: 'Paradise Valley' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a734c673a202678bdf37ca.jpg', title: 'Backyard Escape', location: 'Phoenix' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a734c663e506601157d335.jpg', title: 'Resort-Style Build', location: 'Chandler' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a734c66dca2020e413e3ab.jpg', title: 'Swim-Up Spa Fusion', location: 'Scottsdale' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a734c66dca20532013e3b1.png', title: 'Outdoor Living Space', location: 'Gilbert' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a73edb6dca209fbe15bc98.jpg', title: 'Custom Pool Design', location: 'Tempe' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/698379452dd985fa4c04d193.jpg', title: 'Modern Lap Pool', location: 'Scottsdale' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/6974c4a759a77b4f11b34372.jpeg', title: 'Travertine Paradise', location: 'Paradise Valley' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/6974c4a759a77b76cab34373.jpg', title: 'Fire & Water Feature', location: 'Chandler' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69760ee7eb392b26b548a48a.jpg', title: 'Geometric Pool Build', location: 'Gilbert' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69760eeac1fa0c2cf9887c83.jpg', title: 'Tanning Ledge Retreat', location: 'Peoria' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/6983794518c335bf572a7221.jpg', title: 'Negative Edge Design', location: 'Phoenix' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/698379452dd9852b0804d194.jpg', title: 'Spa & Waterfall Combo', location: 'Scottsdale' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69837945d017c38a9a6c0ba1.jpg', title: 'Desert Oasis Build', location: 'Mesa' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/698379454599861de148d551.jpg', title: 'Full Outdoor Kitchen', location: 'Tempe' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69837945d017c3f0786c0ba0.jpg', title: 'Pebble Tec Remodel', location: 'Glendale' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/698379450708e4bafea22e7f.jpg', title: 'Pool & Pergola Package', location: 'Gilbert' },
              { src: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69837dda0708e4fd18a33c2e.jpg', title: 'Luxury Family Pool', location: 'Chandler' },
            ].map((project, i) => {
              const rotations = [-2, 1.5, -1, 2, -1.5, 1, -2.5, 1, -1, 2, -1.5, 0.5, -2, 1, -0.5, 2, -1, 1.5, -2, 0.5];
              return (
                <div
                  key={i}
                  className="bg-white p-3 pb-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                  style={{ transform: `rotate(${rotations[i % rotations.length]}deg)` }}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={project.src}
                      alt={`${project.title} — Aquatic Pools and Spas`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={75}
                      priority={i < 3}
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="mt-3 flex justify-between items-end px-1">
                    <span className="font-handwriting text-slate-700 text-xl leading-tight">{project.title}</span>
                    <span className="font-handwriting text-slate-400 text-lg leading-tight shrink-0 ml-2">{project.location}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-14">
            <Button href="/gallery">View Full Gallery</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCards />

      {/* Luxury Process */}
      <LuxuryProcessSection />

      {/* FAQ */}
      <FAQAccordion
        faqs={homeFaqs}
        title="Frequently Asked Questions"
        subtitle="Common Questions"
      />

      {/* CTA */}
      <CTASection />
    </>
  );
}
