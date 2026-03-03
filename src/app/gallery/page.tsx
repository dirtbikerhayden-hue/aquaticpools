import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Gallery — Luxury Pool Portfolio | Aquatic Pools and Spas AZ',
  description: 'Browse our gallery of custom luxury pools, pool remodels, and backyard hardscaping projects across Scottsdale, Paradise Valley, Phoenix, and Chandler, AZ.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <div className="section-padding pb-0">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Gallery', href: '/gallery' }]} />
          <div className="max-w-3xl mb-4">
            <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">Our Work</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-4">
              Projects That Speak for Themselves
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every project represents an Arizona homeowner who trusted Aquatic Pools and Spas to transform their outdoor space. Browse our work and imagine what we can build for you.
            </p>
          </div>
        </div>
      </div>
      <ProjectGrid />
      <CTASection headline="Love What You See?" description="Let's create something just as beautiful for your property. Get a free estimate today." />
    </>
  );
}
