import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';

const allFaqs = [
  { question: 'How much does it cost to build a custom pool in Arizona?', answer: 'Custom pool construction in the Phoenix metro typically ranges from $60,000 to $200,000+ depending on size, features, materials, and site conditions. We provide free, detailed estimates for every project.' },
  { question: 'How long does pool construction take?', answer: 'Most custom pool builds take 8 to 14 weeks from permit approval to completion. Timelines vary based on project complexity and permit processing times.' },
  { question: 'Do you handle permits?', answer: 'Yes. We manage the entire permit process including building permits, inspections, and HOA architectural review submissions.' },
  { question: 'Can I see a 3D design before you start building?', answer: 'Absolutely. A detailed 3D design rendering is a standard part of our process. You review and approve every detail before construction begins.' },
  { question: 'What areas do you serve?', answer: 'We serve Scottsdale, Paradise Valley, Phoenix, Chandler, Gilbert, Tempe, and surrounding communities throughout the greater Phoenix area. Call to confirm availability for your location.' },
  { question: 'Are you licensed and insured?', answer: 'Yes. Aquatic Pools and Spas is ROC licensed (#358080), bonded, and fully insured with comprehensive liability coverage.' },
  { question: 'Do you offer financing?', answer: 'We can discuss financing options during your consultation. Contact us to learn about available arrangements for your project.' },
  { question: 'What pool finishes work best in Arizona?', answer: 'Pebble and aggregate finishes are extremely popular in Arizona due to their durability, texture, and resistance to the harsh UV and chemical environment. Quartz and tile finishes are also excellent choices and offer a wide range of color and aesthetic options.' },
  { question: 'How do Arizona pools handle extreme heat?', answer: 'We specify equipment and materials rated for Arizona conditions, including energy-efficient variable-speed pumps, proper shading integration, and heat-resistant finishes. Many clients also add water features or misters that help cool the pool area during summer months.' },
  { question: 'What is included in a pool remodel?', answer: 'Pool remodeling can include replastering, new tile and coping, equipment upgrades (pumps, heaters, automation), water feature additions, LED lighting, and structural repairs. We assess your existing pool and recommend the combination that best meets your goals and budget.' },
  { question: 'Do you build outdoor kitchens and hardscaping with pools?', answer: 'Yes. We offer complete backyard transformations that integrate the pool with premium hardscaping, outdoor kitchens, fire features, pergolas, and shade structures — all designed as a cohesive outdoor environment.' },
  { question: 'How do I get started?', answer: 'Contact us to schedule a free on-site consultation. We will visit your property, discuss your vision, and provide a detailed 3D design and estimate at no obligation.' },
];

export const metadata: Metadata = generatePageMetadata({
  title: 'FAQ — Luxury Pool Builder Questions | Aquatic Pools and Spas AZ',
  description: 'Answers to common questions about custom pool construction costs, timelines, permits, pool remodeling, and hardscaping in Scottsdale, Phoenix, and Chandler, AZ.',
  path: '/faq',
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(allFaqs)} />
      <div className="section-padding pb-0">
        <div className="container-narrow">
          <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />
          <div className="text-center mb-4">
            <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">Questions & Answers</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-600">
              Find answers to the most common questions about our luxury pool construction and backyard services in Arizona.
            </p>
          </div>
        </div>
      </div>
      <FAQAccordion faqs={allFaqs} />
      <CTASection headline="Still Have Questions?" description="Call us at (801) 502-0306 or request a free consultation. We are happy to answer anything." />
    </>
  );
}
