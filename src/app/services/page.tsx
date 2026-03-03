import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Services — Luxury Pool Builder | Aquatic Pools and Spas AZ',
  description: 'Explore our full range of luxury pool services: custom pool construction, 3D design, water features, pool remodeling, backyard hardscaping, and outdoor kitchens in Arizona.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <div className="section-padding pb-0">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} />
          <div className="max-w-3xl mb-4">
            <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">What We Do</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-4">
              Complete Outdoor Living Services
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              From custom luxury pools to complete backyard transformations and premium hardscaping, Aquatic Pools and Spas delivers every aspect of outdoor living construction with design-driven precision.
            </p>
          </div>
        </div>
      </div>

      <ServiceCards title="Pool Services" subtitle="Swimming Pools" category="pools" />
      <ServiceCards title="Landscape Services" subtitle="Landscaping" category="landscape" />
      <ServiceCards title="Concrete Services" subtitle="Concrete" category="concrete" />

      <CTASection />
    </>
  );
}
