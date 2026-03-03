import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { CTASection } from '@/components/sections/CTASection';
import { siteConfig } from '@/data/site-config';
import { Shield, Users, Eye, Award } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Aquatic Pools and Spas — Arizona Luxury Pool Builder',
  description: 'Aquatic Pools and Spas is a design-driven luxury pool builder serving Scottsdale, Paradise Valley, Phoenix, and Chandler, AZ. ROC Licensed #358080. Learn about our story and approach.',
  path: '/about',
});

const values = [
  { icon: Shield, title: 'Craftsmanship First', description: 'We never cut corners. Every pool is built with the materials, techniques, and attention to detail that ensure it looks stunning and performs reliably for decades.' },
  { icon: Users, title: 'Design-Driven Approach', description: 'We treat every project as a work of architecture. Your pool should feel like a natural extension of your home, not an afterthought dropped in the backyard.' },
  { icon: Eye, title: 'Transparent Process', description: 'From 3D design approval to clear pricing, you always know exactly what to expect. No surprises, no hidden costs, no pressure.' },
  { icon: Award, title: 'ROC Licensed & Insured', description: 'ROC #358080. Full licensing, bonding, and comprehensive insurance coverage — protecting you and your property at every stage of the build.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: siteConfig.url },
        { name: 'About', url: `${siteConfig.url}/about` },
      ])} />

      <div className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />

          <div className="max-w-3xl">
            <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6">
              Design-Driven. Built to Endure.
            </h1>
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p>
                Aquatic Pools and Spas was built on a conviction that luxury outdoor living should be accessible to every homeowner who demands the best. We combine architectural design thinking with hands-on construction expertise to create pools and outdoor environments that are as beautiful as they are enduring — built specifically for the Arizona lifestyle.
              </p>
              <p>
                Based in Phoenix and serving Scottsdale, Paradise Valley, Chandler, Gilbert, Tempe, and the surrounding metro area, our team manages every aspect of your project from initial design consultation through final walkthrough. ROC Licensed #358080, we are fully insured and committed to the highest standards of construction quality and client communication.
              </p>
              <p>
                What sets us apart is a relentless focus on design integrity. Every project begins with a detailed consultation and a photorealistic 3D rendering so you can visualize your completed pool and outdoor space before construction begins. We refine that vision together until it is exactly right — then we build it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-gradient-to-b from-sand-50 to-white">
        <div className="container-narrow">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Our Story
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Aquatic Pools and Spas was founded by builders who believed Arizona homeowners deserved a pool company that led with design rather than just price. Too many pools in the Valley are built to a budget without a vision. We built this company to change that — bringing the kind of thoughtful, architecture-forward design process that you would expect from a custom home builder to the pool and outdoor living industry. Our growth has been driven entirely by referrals from clients who saw the difference and told their neighbors. That word-of-mouth reputation is something we protect by never compromising on quality, communication, or follow-through.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Built for the Arizona Climate
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Building pools in Arizona requires specific expertise that goes beyond what works in other markets. Extreme heat, intense UV exposure, caliche soil conditions, and the unique demands of year-round pool use all factor into how a pool should be designed, engineered, and finished. We specify materials and equipment rated for Arizona&apos;s conditions, and we engineer every build to withstand the soil movement and temperature swings that are part of life in the desert Southwest. The result is a pool that looks as good in year ten as it did on opening day.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                A Complete Outdoor Living Partner
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                The pool is the centerpiece, but the best outdoor environments are designed as a whole. Aquatic Pools and Spas integrates pool construction with premium hardscaping, outdoor kitchens, fire features, pergolas, and shade structures — all designed cohesively so your backyard feels intentional from every angle. Working with one team means one design vision, one schedule, and one point of contact, which produces better results and a far smoother experience than coordinating multiple contractors.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Our Commitment After the Build
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Our relationship with clients does not end when construction wraps up. Aquatic Pools and Spas stands behind our work and is available to support you after the project is complete. We want every client to be as proud of their pool in year five as they were on day one. That long-term commitment is reflected in everything we do, from the materials we select to the care we take in every phase of construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="section-padding bg-sand-50">
        <div className="container-wide">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection headline="Let&apos;s Build Something Together" />
    </>
  );
}
