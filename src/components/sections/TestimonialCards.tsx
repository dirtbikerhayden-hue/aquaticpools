'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    author: 'Erica White',
    location: 'Phoenix, AZ',
    quote:
      'Aquatic Pools exceeded all our expectations! From start to finish, their team demonstrated professionalism, creativity, and attention to detail. Even after the project was completed, their customer service remained top-notch. We couldn\'t be happier with the result, our new pool is absolutely stunning! Highly recommend Aquatic Pools for anyone looking for quality and excellence.',
  },
  {
    id: '2',
    author: 'Rich G.',
    location: 'Scottsdale, AZ',
    quote:
      'They met every deadline and kept us informed of all progress. We are delighted with the outcome and will definitely recommend their services to our network of family, friends, and neighbors. Additionally, we were pleasantly surprised and grateful for the thoughtful pool gifts presented to us upon project completion. Thank you for your outstanding work.',
  },
  {
    id: '3',
    author: 'Victoria',
    location: 'Scottsdale, AZ',
    quote:
      'I definitely recommend this pool company to friends and family they did a fantastic job, if I could give them more than five star they certainly deserve it. The Aquatic team were professional, dependable and all work was completely on time. I love spending time in my back yard. Thank you Aquatic Pools!',
  },
  {
    id: '4',
    author: 'Jacob Flores',
    location: 'Chandler, AZ',
    quote:
      'So happy with the way our pool turned out and service that Aquatic Pools provided. They were communicative throughout the whole process and transferred our backyard into exactly how we imagined. I would recommend them to anyone who is considering building a pool!',
  },
  {
    id: '5',
    author: 'Naim Rasheed',
    location: 'Phoenix, AZ',
    quote:
      'We got our pool remodeled from this company and we had a wonderful experience. Arthur was very informative and suggested ways we could save money. Our family was very impressed with the communication and fair pricing.',
  },
  {
    id: '6',
    author: 'John Smith',
    location: 'Gilbert, AZ',
    quote:
      'OMG! They did a wonderful job bringing my vision to life. Amazing customer service, kept me updated the entire process. Provided quality work and finished sooner than I expected. I\'m extremely satisfied with how my pool area turned out! Highly recommend this company!!!',
  },
  {
    id: '7',
    author: 'Barbara Haskins',
    location: 'Scottsdale, AZ',
    quote:
      'Communication and follow up with Sancheon and Arthur were wonderful. They listened to what I wanted to achieve and pricing is very fair.',
  },
  {
    id: '8',
    author: 'Rebecca Rivera',
    location: 'Phoenix, AZ',
    quote:
      'Thank you so much for making our backyard come to life and bringing our vision to life.',
  },
  {
    id: '9',
    author: 'Emily W.',
    location: 'Peoria, AZ',
    quote:
      'I was convinced our lot was too small to do anything interesting. The design team proved me completely wrong. They came up with a layout I never would have thought of that uses every inch perfectly. The finished pool looks like it was always meant to be there.',
  },
  {
    id: '10',
    author: 'James M.',
    location: 'Glendale, AZ',
    quote:
      'The crew showed up every single day on time, kept the site clean, and always let us know what was happening. That might sound basic but I\'ve dealt with enough contractors to know it\'s not. Arthur walked us through the whole finished project before signing off. Great experience top to bottom.',
  },
  {
    id: '11',
    author: 'Nicole P.',
    location: 'Scottsdale, AZ',
    quote:
      'We just built a new home and needed the pool to match the level of the house. Infinity edge, tanning ledge, grotto waterfall, fire pit lounge. Aquatic Pools designed something that looks like a five star hotel. They have a real eye for luxury that most builders just don\'t have.',
  },
  {
    id: '12',
    author: 'Brandon S.',
    location: 'Paradise Valley, AZ',
    quote:
      'Two years in and the pool still looks exactly like it did the day it was finished. Every tile set perfectly, every edge clean, every fixture top quality. That kind of durability tells you something about how seriously they take their work. Zero issues since day one.',
  },
  {
    id: '13',
    author: 'Rachel T.',
    location: 'Chandler, AZ',
    quote:
      'We had been going back and forth on a pool for honestly like 3 years. Aquatic Pools finally made the decision easy because there were no hidden surprises, pricing was clear, timeline was clear. Now I kind of wish we had done it sooner because we are out there every single night.',
  },
  {
    id: '14',
    author: 'Kevin L.',
    location: 'Gilbert, AZ',
    quote:
      'Needed a remodel more than a full build, which I wasn\'t sure they\'d even want to take on. They were great about it. Walked me through everything with no pressure, helped me figure out what was actually worth doing. Pricing was fair and the work is excellent.',
  },
  {
    id: '15',
    author: 'Stephanie G.',
    location: 'Phoenix, AZ',
    quote:
      'Honestly I was a little skeptical reading five star reviews before hiring anyone. But I can confirm they are legit. The design team actually listened, the build went smoothly, and the water features are my absolute favorite thing in my entire house. My friends all want their number.',
  },
  {
    id: '16',
    author: 'Derek J.',
    location: 'Scottsdale, AZ',
    quote:
      'Two of my neighbors had used them and would not stop talking about how good they were. Figured I had to find out for myself. They were right. The pool is stunning, the process was painless, and now I\'m the one telling all my other neighbors to call Aquatic Pools.',
  },
  {
    id: '17',
    author: 'Melissa B.',
    location: 'Tempe, AZ',
    quote:
      'We decided to do the pool, pergola, and outdoor kitchen all at once since we were already tearing up the yard anyway. Aquatic Pools coordinated the whole thing without any chaos. Big project, lots of moving parts, and they handled it all. Backyard is completely unrecognizable now in the best way.',
  },
  {
    id: '18',
    author: 'Anthony R.',
    location: 'Mesa, AZ',
    quote:
      'Built a family pool with a shallow area, slide, and some jumping rocks for the kids. They were so thoughtful about the safety stuff without it looking like a kiddie pool. Looks great, the kids absolutely love it, and the crew cleaned up after themselves every single day. Really appreciated that.',
  },
  {
    id: '19',
    author: 'Courtney A.',
    location: 'Peoria, AZ',
    quote:
      'We live in a neighborhood where pretty much everyone has a pool so we needed ours to actually stand out. The geometric design with the glass tile accents and color LED lighting is unlike anything on our street. I have had neighbors knock on the door specifically to ask who built it.',
  },
  {
    id: '20',
    author: 'Jason M.',
    location: 'Glendale, AZ',
    quote:
      'Hit every milestone, showed up when they said they would, communicated clearly. I know that sounds like the bare minimum but you would be surprised how rare it is. On top of that the quality is genuinely impressive. Pool deck, water feature, coping, all came out perfect.',
  },
  {
    id: '21',
    author: 'Heather W.',
    location: 'Scottsdale, AZ',
    quote:
      'The spa was really the main thing for us. We use it year round, especially on those cool winter evenings here in Scottsdale. Aquatic Pools designed the connection between the spa and pool so seamlessly that it looks like one cohesive piece. Sancheon was fantastic to work with the whole way through.',
  },
  {
    id: '22',
    author: 'Tyler D.',
    location: 'Paradise Valley, AZ',
    quote:
      'I came in with a pretty specific vision. Sun shelf, lap section, integrated spa, specific tile. Not only did they understand exactly what I was going for, they added a couple ideas of their own that made it even better. The final result is beyond what I originally had in my head.',
  },
  {
    id: '23',
    author: 'Brittany L.',
    location: 'Chandler, AZ',
    quote:
      'We went with a full remodel instead of a new build and I was a little worried they\'d treat it as a lower priority job. Not the case at all. Same attention, same communication, same quality. The new Pebble Sheen finish and tile work completely transformed a pool that was an embarrassment into something beautiful.',
  },
  {
    id: '24',
    author: 'Sean M.',
    location: 'Gilbert, AZ',
    quote:
      'Got three bids. Aquatic Pools was not the cheapest. But after seeing the quality of what they actually built, I understand why. The other bids would have cost me more in the long run. Best investment we have made in this house, period.',
  },
];

const CARDS_PER_PAGE = 8;
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

  useEffect(() => {
    const timer = setInterval(() => setPage((p) => (p + 1) % TOTAL_PAGES), 35000);
    return () => clearInterval(timer);
  }, [timerKey]);

  const visible = testimonials.slice(page * CARDS_PER_PAGE, (page + 1) * CARDS_PER_PAGE);

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
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
                <p className="text-white/85 text-sm leading-relaxed">{t.quote}</p>
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
