'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    author: 'Sarah M.',
    location: 'Scottsdale, AZ',
    quote:
      'From the very first meeting, Aquatic Pools treated our project like it was their own home. They designed a stunning zero-edge pool with a built-in spa that perfectly complements our desert landscape. The craftsmanship is impeccable and we\'ve gotten more compliments from neighbors than we can count.',
  },
  {
    id: '2',
    author: 'David R.',
    location: 'Paradise Valley, AZ',
    quote:
      'We interviewed four different pool companies and Aquatic Pools stood out immediately. Their 3D design process was incredible — we knew exactly what we were getting before they broke ground. The finished product exceeded even that. Our backyard is now the crown jewel of our property.',
  },
  {
    id: '3',
    author: 'Jennifer C.',
    location: 'Chandler, AZ',
    quote:
      'Arthur and the entire team were phenomenal. They transformed our flat, boring backyard into a resort-style retreat complete with a pool, spa, water features, and travertine decking. Our kids practically live outside now. Couldn\'t ask for a better result.',
  },
  {
    id: '4',
    author: 'Michael T.',
    location: 'Gilbert, AZ',
    quote:
      'We had a strict timeline because of an upcoming family event and Aquatic Pools delivered on time, on budget. The project manager communicated with us every step of the way. The outdoor kitchen and pool combo they built is exactly what we envisioned. Absolute professionals.',
  },
  {
    id: '5',
    author: 'Amanda F.',
    location: 'Phoenix, AZ',
    quote:
      'We had an old, outdated pool that was an eyesore. Aquatic Pools completely reimagined it — new tile, Pebble Tec finish, new coping, LED lighting, and a gorgeous water feature. It looks brand new. The remodel process was smooth and the team was always respectful of our schedule.',
  },
  {
    id: '6',
    author: 'Robert K.',
    location: 'Scottsdale, AZ',
    quote:
      'I\'ve worked with contractors for years in the construction industry, and Aquatic Pools is genuinely one of the best teams I\'ve ever seen operate. Clean job site, skilled tradespeople, excellent communication, and a finished product that photographs like something out of Architectural Digest.',
  },
  {
    id: '7',
    author: 'Lisa H.',
    location: 'Tempe, AZ',
    quote:
      'We were nervous about the investment, but Aquatic Pools made us feel confident from day one. They answered every question patiently and kept us in the loop constantly. Our pool is gorgeous and we use it every single week. Best decision we\'ve made for our family.',
  },
  {
    id: '8',
    author: 'Chris N.',
    location: 'Mesa, AZ',
    quote:
      'Sancheon was our point of contact and he was amazing — responsive, honest, and clearly passionate about the work. The pool was completed ahead of schedule and the quality is outstanding. Our backyard feels like a completely different property now.',
  },
  {
    id: '9',
    author: 'Emily W.',
    location: 'Peoria, AZ',
    quote:
      'We have a smaller lot and were worried we couldn\'t get the pool we wanted. The Aquatic Pools design team was creative and came up with a layout that maximized every square foot. The finished pool is beautiful and fits perfectly with our landscaping. So happy we went with them.',
  },
  {
    id: '10',
    author: 'James M.',
    location: 'Glendale, AZ',
    quote:
      'From excavation to final inspection, the process was incredibly smooth. The crew showed up on time every day and worked hard. Arthur walked us through the final project and made sure everything was perfect before signing off. Couldn\'t be happier with how it all turned out.',
  },
  {
    id: '11',
    author: 'Nicole P.',
    location: 'Scottsdale, AZ',
    quote:
      'We built a luxury home and wanted a pool to match. Aquatic Pools delivered an absolute masterpiece — infinity edge, tanning ledge, grotto waterfall, and a fire pit lounge area. They have an eye for design that sets them apart from every other builder we spoke with.',
  },
  {
    id: '12',
    author: 'Brandon S.',
    location: 'Paradise Valley, AZ',
    quote:
      'The attention to detail from Aquatic Pools is unmatched. Every tile was set perfectly, every edge was crisp, every fixture was top quality. Our pool has been the centerpiece of our home for two years now and it still looks as good as the day it was finished.',
  },
  {
    id: '13',
    author: 'Rachel T.',
    location: 'Chandler, AZ',
    quote:
      'Aquatic Pools made the decision easy with their transparent pricing and clear communication. The build took exactly as long as they said it would. Our backyard went from unused grass to our favorite place to spend evenings as a family.',
  },
  {
    id: '14',
    author: 'Kevin L.',
    location: 'Gilbert, AZ',
    quote:
      'The remodel they did on our pool was phenomenal. They walked us through all the options and helped us make smart decisions. The end result is a completely transformed space. Fair pricing and incredible work — I\'ll be recommending them to everyone I know.',
  },
  {
    id: '15',
    author: 'Stephanie G.',
    location: 'Phoenix, AZ',
    quote:
      'Aquatic Pools truly is as good as advertised. The design team listened to exactly what I wanted and translated it into a stunning reality. The water features they added are the highlight of the whole yard. I get asked for their number constantly.',
  },
  {
    id: '16',
    author: 'Derek J.',
    location: 'Scottsdale, AZ',
    quote:
      'Hired Aquatic Pools after two neighbors used them and couldn\'t stop raving about the results. Now I understand the hype. The project was flawlessly managed, the crew was professional, and the pool is stunning. I\'m already planning phase two — an outdoor kitchen — with them.',
  },
  {
    id: '17',
    author: 'Melissa B.',
    location: 'Tempe, AZ',
    quote:
      'We added a pool, pergola, and outdoor kitchen all at once and Aquatic Pools coordinated everything seamlessly. It was a large project and they never dropped the ball. Our backyard is literally our happy place now. Highly recommend to anyone looking for a premium builder.',
  },
  {
    id: '18',
    author: 'Anthony R.',
    location: 'Mesa, AZ',
    quote:
      'Five stars isn\'t enough. Aquatic Pools built us a family pool with a shallow end, slide, and jumping rocks. Our kids are obsessed and we spend every weekend at home now. The whole build process was positive from start to finish. The crew even cleaned up perfectly every day.',
  },
  {
    id: '19',
    author: 'Courtney A.',
    location: 'Peoria, AZ',
    quote:
      'We wanted our pool to stand out. Aquatic Pools delivered something truly special — a modern geometric design with glass tile accents and LED color lighting. Our neighbors have already asked for their contact info. Exceptional work from start to finish.',
  },
  {
    id: '20',
    author: 'Jason M.',
    location: 'Glendale, AZ',
    quote:
      'The team at Aquatic Pools is the real deal. Professional, skilled, and easy to work with. They hit every milestone on schedule and the quality of the finished product is incredible. Our pool deck, coping, and water feature all came out flawless. Will recommend to everyone.',
  },
  {
    id: '21',
    author: 'Heather W.',
    location: 'Scottsdale, AZ',
    quote:
      'Aquatic Pools designed a gorgeous spa that connects seamlessly to our pool. The heated spa is incredible during cooler Arizona evenings and the aesthetic is just beautiful. Sancheon and Arthur were both fantastic to work with throughout the project. A truly premium experience.',
  },
  {
    id: '22',
    author: 'Tyler D.',
    location: 'Paradise Valley, AZ',
    quote:
      'We had a very specific vision — a resort-style pool with a sun shelf, lap lane, and integrated spa. Aquatic Pools not only understood the vision but enhanced it with design ideas we hadn\'t even considered. The result is beyond our expectations in every way.',
  },
  {
    id: '23',
    author: 'Brittany L.',
    location: 'Chandler, AZ',
    quote:
      'Our pool remodel was handled with complete professionalism. The crew was courteous, the timeline was accurate, and the finished result is breathtaking. The new Pebble Sheen finish and updated tile completely transformed what was a tired, dated pool. We\'re so grateful we chose Aquatic Pools.',
  },
  {
    id: '24',
    author: 'Sean M.',
    location: 'Gilbert, AZ',
    quote:
      'We got three bids and Aquatic Pools wasn\'t the cheapest, but they were absolutely the best value. The quality of work, the customer service, and the final result were all superior. Our backyard has been completely transformed and we couldn\'t be happier with the investment.',
  },
];

const CARDS_PER_PAGE = 8; // 2 rows × 4 cols on desktop
const TOTAL_PAGES = Math.ceil(testimonials.length / CARDS_PER_PAGE);

export function TestimonialCards() {
  const [page, setPage] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  const handleNext = () => {
    setPage((p) => (p + 1) % TOTAL_PAGES);
    setTimerKey((k) => k + 1);
  };
  const handlePrev = () => {
    setPage((p) => (p - 1 + TOTAL_PAGES) % TOTAL_PAGES);
    setTimerKey((k) => k + 1);
  };

  // Auto-advance; resets when timerKey changes (i.e. user clicked an arrow)
  useEffect(() => {
    const timer = setInterval(() => setPage((p) => (p + 1) % TOTAL_PAGES), 7000);
    return () => clearInterval(timer);
  }, [timerKey]);

  const visible = testimonials.slice(page * CARDS_PER_PAGE, (page + 1) * CARDS_PER_PAGE);

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Video backdrop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://assets.cdn.filesafe.space/RAmAO69TYtGlSS2rVnm9/media/69a734c6b86978c677a03781.mp4"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
            <span className="w-6 h-px bg-accent-gold" />
            <span className="gradient-text-gold">Client Experiences</span>
            <span className="w-6 h-px bg-accent-gold" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
            What Our Clients Say
          </h2>
        </div>

        {/* Grid with arrows */}
        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {visible.map((t) => (
              <div
                key={t.id}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-semibold text-white text-sm leading-snug block">{t.author}</span>
                    <span className="text-white/55 text-xs">{t.location}</span>
                  </div>
                  <span className="text-white/70 font-medium text-xs tracking-wide shrink-0 mt-0.5">Google</span>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-white/85 text-sm leading-relaxed line-clamp-5">{t.quote}</p>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Page dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setPage(i); setTimerKey((k) => k + 1); }}
              aria-label={`Page ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === page ? 'w-6 bg-accent-gold' : 'w-2 bg-white/35 hover:bg-white/60'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
