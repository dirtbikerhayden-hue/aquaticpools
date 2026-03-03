import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { footerNav } from '@/data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-slate-300 overflow-hidden">
      {/* Dark navy base */}
      <div className="absolute inset-0 bg-[#111827]" />
      {/* Texture overlay — subtle so pattern pops like Calimingo */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "url('https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a7397d618c8dfce9975dde.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

      {/* Main footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a5e65c9c149958e1420465.png"
                alt="Aquatic Pools and Spas"
                width={220}
                height={88}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Arizona&apos;s premier luxury pool builder. Custom pool construction, pool
              remodeling, and backyard hardscaping in Scottsdale, Paradise Valley,
              Phoenix, Chandler, and surrounding communities.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-accent-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-accent-gold" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-accent-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-accent-gold" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-accent-gold shrink-0" />
                {siteConfig.address.full}
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-accent-gold shrink-0" />
                Mon–Sat {siteConfig.hours.weekday}
              </div>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Services</h3>
            <ul className="space-y-3">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-gold hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Company</h3>
            <ul className="space-y-3">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-gold hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas column */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Areas We Serve</h3>
            <ul className="space-y-3">
              {footerNav.areas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-gold hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl border border-white/10 bg-white/5">
              <p className="text-xs font-medium text-slate-300 mb-1">ROC Licensed #358080</p>
              <p className="text-xs text-slate-500">Licensed, Bonded & Insured · Free Estimates</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {currentYear} {siteConfig.name}. All rights reserved. ROC #358080.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="/sitemap.xml" className="hover:text-slate-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
