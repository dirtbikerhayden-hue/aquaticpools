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
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/aquaticpoolsaz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-slate-400 hover:text-white hover:border-accent-gold hover:bg-accent-gold/10 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/aquaticpoolaz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-slate-400 hover:text-white hover:border-accent-gold hover:bg-accent-gold/10 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
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
