export const siteConfig = {
  name: 'Aquatic Pools and Spas',
  tagline: 'Design-Driven. Built to Endure.',
  description:
    "Arizona's premier luxury pool builder. Custom pool construction, pool remodeling, and backyard hardscaping in Scottsdale, Paradise Valley, Phoenix, and Chandler. ROC #358080. Free estimates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aquaticpoolaz.com',
  ogImage: 'https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a5e65c9c149958e1420465.png',
  phone: '(623) 225-0537',
  phoneRaw: '+16232250537',
  email: 'info@aquaticpoolaz.com',
  address: {
    street: '4742 N 24th St Suite 300',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85016',
    full: '4742 N 24th St Suite 300, Phoenix, AZ 85016',
  },
  hours: {
    weekday: '8:00 AM – 5:00 PM',
    saturday: 'By Appointment',
    sunday: 'Closed',
    schema: ['Mo-Fr 08:00-17:00'],
  },
  social: {
    google: 'https://www.google.com/maps/search/Aquatic+Pools+and+Spas+Phoenix+AZ',
    facebook: 'https://www.facebook.com/aquaticpoolaz',
    instagram: 'https://www.instagram.com/aquaticpoolsaz',
  },
  trustPoints: [
    { label: 'ROC Licensed #358080', icon: 'BadgeCheck' as const },
    { label: 'Licensed, Bonded & Insured', icon: 'Shield' as const },
    { label: '3D Design Approval', icon: 'Monitor' as const },
    { label: 'Free Estimates', icon: 'FileText' as const },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
