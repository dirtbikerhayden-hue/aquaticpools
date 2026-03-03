export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Luxury Pool Construction', href: '/services/luxury-pool-construction' },
      { label: 'Custom Pool Design', href: '/services/custom-pool-design' },
      { label: 'Water Features & Spas', href: '/services/water-features' },
      { label: 'Pool Remodeling', href: '/services/pool-remodeling' },
      { label: 'Backyard Hardscaping', href: '/services/backyard-hardscaping' },
      { label: 'Outdoor Kitchens', href: '/services/outdoor-kitchens' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Process', href: '/process' },
  {
    label: 'Areas',
    href: '/service-areas',
    children: [
      { label: 'Scottsdale', href: '/service-areas/scottsdale' },
      { label: 'Paradise Valley', href: '/service-areas/paradise-valley' },
      { label: 'Phoenix', href: '/service-areas/phoenix' },
      { label: 'Chandler', href: '/service-areas/chandler' },
      { label: 'Gilbert', href: '/service-areas/gilbert' },
      { label: 'Tempe', href: '/service-areas/tempe' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  services: [
    { label: 'Luxury Pool Construction', href: '/services/luxury-pool-construction' },
    { label: 'Custom Pool Design', href: '/services/custom-pool-design' },
    { label: 'Water Features & Spas', href: '/services/water-features' },
    { label: 'Pool Remodeling', href: '/services/pool-remodeling' },
    { label: 'Backyard Hardscaping', href: '/services/backyard-hardscaping' },
    { label: 'Outdoor Kitchens', href: '/services/outdoor-kitchens' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Process', href: '/process' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Financing', href: '/financing' },
    { label: 'Contact', href: '/contact' },
  ],
  areas: [
    { label: 'Scottsdale', href: '/service-areas/scottsdale' },
    { label: 'Paradise Valley', href: '/service-areas/paradise-valley' },
    { label: 'Phoenix', href: '/service-areas/phoenix' },
    { label: 'Chandler', href: '/service-areas/chandler' },
    { label: 'Gilbert', href: '/service-areas/gilbert' },
    { label: 'Tempe', href: '/service-areas/tempe' },
  ],
};
