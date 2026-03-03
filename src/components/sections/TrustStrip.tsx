'use client';

import { useEffect, useRef, useState } from 'react';
import { Shield, BadgeCheck, Monitor, FileText } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

const iconMap = {
  Shield,
  BadgeCheck,
  Monitor,
  FileText,
} as const;

export function TrustStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative -mt-8 z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {siteConfig.trustPoints.map((point, index) => {
            const Icon = iconMap[point.icon];
            return (
              <div
                key={point.label}
                className="group flex items-center gap-3 bg-white rounded-2xl p-4 lg:p-5 shadow-card border border-slate-100 hover:-translate-y-0.5"
                style={{
                  borderTop: '2px solid var(--gold)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.5s ease, transform 0.5s ease`,
                  transitionDelay: visible ? `${index * 120}ms` : '0ms',
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center shrink-0 group-hover:from-brand-100 group-hover:to-brand-200 transition-all">
                  <Icon className="w-5 h-5 text-brand-700" />
                </div>
                <span className="text-sm font-semibold text-slate-800 leading-tight">
                  {point.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
