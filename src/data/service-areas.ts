export interface AreaBodySection {
  heading: string;
  text: string;
}

export interface ServiceAreaData {
  slug: string;
  city: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  isPrimary: boolean;
  nearbyNote?: string;
  heroImage?: string;
  body: AreaBodySection[];
}

export const serviceAreas: ServiceAreaData[] = [
  {
    slug: 'scottsdale',
    city: 'Scottsdale',
    state: 'AZ',
    metaTitle: 'Luxury Pool Builder in Scottsdale, AZ — Aquatic Pools and Spas',
    metaDescription:
      'Custom luxury pool construction and backyard hardscaping in Scottsdale, AZ. ROC #358080. Design-driven builds for discerning homeowners. Free estimates.',
    h1: 'Luxury Pool Construction in Scottsdale, AZ',
    intro:
      "Aquatic Pools and Spas builds resort-caliber custom pools and outdoor living spaces for Scottsdale homeowners who expect the best. From North Scottsdale estates to Old Town residences, we deliver designs that complement the architecture and lifestyle of one of Arizona's most prestigious communities.",
    isPrimary: true,
    body: [
      {
        heading: "Scottsdale's Premier Pool Builder",
        text: "Scottsdale's warm climate and luxury home market demand pool builders who understand both design excellence and construction quality. Aquatic Pools and Spas brings architectural design thinking to every project, crafting pools that feel like natural extensions of the home rather than afterthoughts. Whether you envision a sleek lap pool, a family-friendly resort design, or an infinity edge overlooking the desert landscape, our team has the expertise to bring it to life.",
      },
      {
        heading: 'Built for the Scottsdale Climate',
        text: "With over 300 days of sunshine per year and summer temperatures that push past 110°F, Scottsdale pools need to be built with heat management and durability in mind. We specify pool finishes, equipment, and materials rated for Arizona's extreme conditions, ensuring your pool looks stunning and performs reliably year after year. Our builds include energy-efficient equipment, proper shading integration, and cooling features that make the pool comfortable even on the hottest days.",
      },
    ],
  },
  {
    slug: 'paradise-valley',
    city: 'Paradise Valley',
    state: 'AZ',
    metaTitle: 'Custom Pool Builder in Paradise Valley, AZ — Aquatic Pools and Spas',
    metaDescription:
      "Ultra-luxury pool construction in Paradise Valley, AZ. Aquatic Pools and Spas delivers bespoke outdoor living designs for Paradise Valley's most distinguished homes. ROC #358080.",
    h1: 'Ultra-Luxury Pool Construction in Paradise Valley, AZ',
    intro:
      "Paradise Valley is home to some of Arizona's most distinguished properties, and Aquatic Pools and Spas is proud to be the trusted pool builder for homeowners who demand nothing less than perfection. We design and build bespoke pools and outdoor environments that reflect the character and scale of Paradise Valley estates.",
    isPrimary: true,
    body: [
      {
        heading: 'Bespoke Pool Design for Paradise Valley Estates',
        text: "Paradise Valley properties often feature expansive lots, stunning mountain views, and architectural styles ranging from contemporary desert modern to Mediterranean. Our design process starts with a deep understanding of your property, your lifestyle, and your aesthetic vision. We then develop a custom pool design that integrates seamlessly with your home's architecture and the natural landscape, creating an outdoor environment that feels intentional, not added on.",
      },
      {
        heading: 'The Finest Materials and Craftsmanship',
        text: 'Paradise Valley clients expect and receive the finest materials and craftsmanship available. We source premium pool finishes, natural stone coping, custom tile work, and integrated lighting systems that transform a pool into a work of art. Our team includes experienced craftsmen who take pride in every detail, from the geometry of the shell to the grout lines in the tile.',
      },
    ],
  },
  {
    slug: 'phoenix',
    city: 'Phoenix',
    state: 'AZ',
    metaTitle: 'Pool Builder in Phoenix, AZ — Aquatic Pools and Spas',
    metaDescription:
      'Custom pool construction and pool remodeling in Phoenix, AZ. Aquatic Pools and Spas builds luxury pools for Phoenix homeowners. ROC #358080. Free estimates.',
    h1: 'Luxury Pool Construction in Phoenix, AZ',
    intro:
      'Aquatic Pools and Spas serves homeowners across Phoenix with custom pool construction, pool remodeling, and complete backyard transformations. From the central corridor to the North Phoenix hillside communities, our team delivers the same design excellence and construction quality on every project.',
    isPrimary: true,
    body: [
      {
        heading: 'Phoenix Pool Construction Experts',
        text: "Phoenix is one of the largest pool markets in the country, and for good reason. The Arizona climate makes a backyard pool an essential part of the lifestyle. Aquatic Pools and Spas distinguishes itself in this market through our commitment to design quality, construction integrity, and client communication. We manage every aspect of your build, from permit procurement through final inspection, so you can enjoy a seamless, stress-free experience.",
      },
      {
        heading: 'Pool Remodeling in Phoenix',
        text: 'Many Phoenix homes have pools that are decades old and in need of a refresh. Aquatic Pools and Spas offers comprehensive pool remodeling services, including replastering, new tile and coping, equipment upgrades, feature additions, and complete pool transformations. Whether your pool needs cosmetic updates or a structural overhaul, we can restore it to like-new condition or redesign it entirely.',
      },
    ],
  },
  {
    slug: 'chandler',
    city: 'Chandler',
    state: 'AZ',
    metaTitle: 'Pool Builder in Chandler, AZ — Aquatic Pools and Spas',
    metaDescription:
      'Custom pool construction and backyard hardscaping in Chandler, AZ. Aquatic Pools and Spas builds luxury pools for Chandler homeowners. ROC #358080. Free estimates.',
    h1: 'Luxury Pool Construction in Chandler, AZ',
    intro:
      "Aquatic Pools and Spas builds custom pools and outdoor living spaces for Chandler homeowners who want a backyard that lives up to the Arizona lifestyle. From upscale subdivisions to custom home communities, we bring the same design-driven approach and construction quality to every Chandler project.",
    isPrimary: true,
    body: [
      {
        heading: "Chandler's Trusted Pool Builder",
        text: "Chandler has grown into one of the Phoenix metro's most desirable communities, with a mix of established neighborhoods and newer master-planned developments. Aquatic Pools and Spas is well-versed in the unique considerations of building in Chandler, including HOA approval processes, local permit requirements, and the neighborhood-specific design sensibilities that make each community distinct. Our 3D design presentation makes the HOA approval process straightforward and efficient.",
      },
      {
        heading: 'Complete Backyard Transformations',
        text: 'Chandler homeowners increasingly want their outdoor spaces to function as true extensions of the living area. Aquatic Pools and Spas builds complete outdoor environments that integrate the pool with premium hardscaping, outdoor kitchens, fire features, shade structures, and landscaping into a cohesive design. The result is a backyard that is as functional for everyday family life as it is impressive for entertaining.',
      },
    ],
  },
  {
    slug: 'gilbert',
    city: 'Gilbert',
    state: 'AZ',
    metaTitle: 'Pool Builder in Gilbert, AZ — Aquatic Pools and Spas',
    metaDescription:
      'Custom pool construction and backyard hardscaping in Gilbert, AZ. Aquatic Pools and Spas serves Gilbert homeowners with luxury pool builds. ROC #358080. Free estimates.',
    h1: 'Luxury Pool Construction in Gilbert, AZ',
    intro:
      "Aquatic Pools and Spas extends its luxury pool construction and backyard hardscaping services to homeowners in Gilbert, AZ. As one of the fastest-growing communities in the country, Gilbert homeowners increasingly demand outdoor living spaces that match the quality of their homes.",
    isPrimary: false,
    nearbyNote: 'Gilbert is within our extended service area. Call to confirm availability for your address.',
    body: [
      {
        heading: 'Building in Gilbert',
        text: "Gilbert's family-oriented communities and excellent school districts have attracted homeowners who invest seriously in their properties. A custom pool from Aquatic Pools and Spas becomes the centerpiece of a Gilbert backyard, creating a space where families gather throughout Arizona's long warm season. We manage all permits and HOA approvals, making the process smooth and straightforward.",
      },
    ],
  },
  {
    slug: 'tempe',
    city: 'Tempe',
    state: 'AZ',
    metaTitle: 'Pool Builder in Tempe, AZ — Aquatic Pools and Spas',
    metaDescription:
      'Custom pool construction and pool remodeling in Tempe, AZ. Aquatic Pools and Spas serves Tempe homeowners with luxury pool builds. ROC #358080. Free estimates.',
    h1: 'Luxury Pool Construction in Tempe, AZ',
    intro:
      'Aquatic Pools and Spas serves Tempe homeowners with custom pool construction, pool remodeling, and backyard hardscaping. Whether you are building a new pool or transforming an existing one, our team brings the same design-driven approach to every Tempe project.',
    isPrimary: false,
    nearbyNote: 'Tempe is within our service area. Contact us to discuss your project.',
    body: [
      {
        heading: 'Pool Construction and Remodeling in Tempe',
        text: "Tempe's diverse mix of established neighborhoods and newer developments creates opportunities for both new pool construction and pool remodeling. Aquatic Pools and Spas handles both with equal expertise. New builds benefit from our full design-build process, while remodels take advantage of our renovation experience to maximize what is already there and add features that transform the existing pool into something fresh and exciting.",
      },
    ],
  },
];

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}
