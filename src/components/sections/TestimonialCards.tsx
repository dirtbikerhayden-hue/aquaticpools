import { Star } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    author: 'Erica White',
    quote: "Aquatic Pools exceeded all our expectations! From start to finish, their team demonstrated professionalism, creativity, and attention to detail. Even after the project was completed, their customer service remained top-notch. We couldn't be happier with the result—our new pool is absolutely stunning! Highly recommend Aquatic Pools for anyone looking for quality and excellence.",
  },
  {
    id: '2',
    author: 'Rich G.',
    quote: "They met every deadline and kept us informed of all progress. We are delighted with the outcome and will definitely recommend their services to our network of family, friends, and neighbors. Additionally, we were pleasantly surprised and grateful for the thoughtful pool gifts presented to us upon project completion. Thank you for your outstanding work.",
  },
  {
    id: '3',
    author: 'Victoria',
    quote: "I definitely recommend this pool company to friends and family — they did a fantastic job. If I could give them more than five stars they certainly deserve it. The Aquatic team were professional, dependable and all work was completely on time. I love spending time in my back yard. Thank you Aquatic Pools!",
  },
  {
    id: '4',
    author: 'Jacob Flores',
    quote: "So happy with the way our pool turned out and the service that Aquatic Pools provided. They were communicative throughout the whole process and transformed our backyard into exactly how we imagined. I would recommend them to anyone who is considering building a pool!",
  },
  {
    id: '5',
    author: 'Naim Rasheed',
    quote: "We got our pool remodeled from this company and we had a wonderful experience. Arthur was very informative and suggested ways to save money. Our family was very impressed with the communication and fair pricing.",
  },
  {
    id: '6',
    author: 'John Smith',
    quote: "OMG! They did a wonderful job bringing my vision to life. Amazing customer service, kept me updated the entire process. Provided quality work and finished sooner than I expected. I'm extremely satisfied with how my pool area turned out! Highly recommend this company!",
  },
  {
    id: '7',
    author: 'Barbara Haskins',
    quote: "Communication and follow up with Sancheon and Arthur were wonderful. They listened to what I wanted to achieve and pricing is very fair.",
  },
  {
    id: '8',
    author: 'Rebecca Rivera',
    quote: "Thank you so much for making our backyard come to life and bringing our vision to life.",
  },
];


export function TestimonialCards() {
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
      {/* Dark overlay to make reviews pop */}
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

        {/* Grid: 4 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 flex flex-col gap-3"
            >
              {/* Name + Google logo */}
              <div className="flex items-start justify-between gap-2">
                <span className="font-semibold text-white text-sm leading-snug">{t.author}</span>
                <span className="text-white font-medium text-sm tracking-wide shrink-0">Google</span>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-white/85 text-sm leading-relaxed">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
