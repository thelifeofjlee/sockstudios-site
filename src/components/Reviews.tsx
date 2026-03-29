const reviews = [
  {
    name: 'Joshua B.',
    platform: 'Peerspace',
    rating: 5,
    text: "We hosted our engagement party here and couldn't have asked for a better experience! The space itself was beautiful and versatile — the white wall and large mirror made for amazing photo opportunities, while the exposed brick wall and high ceilings created the perfect backdrop. It comfortably fit our 50 guests with a taco bar, seating areas, a cake table, and still left plenty of room for dancing. Everything came together seamlessly. Highly recommend!",
    type: 'Event for 50 people',
  },
  {
    name: 'Joshua A.',
    platform: 'Peerspace',
    rating: 5,
    text: "This venue exceeded my expectations!! It was exactly as pictured, equipped with everything we needed. Jerry was the absolute best — quick and efficient with every question. I would love to host events here more and would definitely book again.",
    type: 'Event for 35 people',
  },
  {
    name: 'Elan B.',
    platform: 'Peerspace',
    rating: 5,
    text: "The space was excellent and Jerry was great to work with. The whole experience was very easy! We used the space to film an interview and there was plenty of room for equipment and crew. The space was tidy and looked great on camera. I'd be happy to shoot here again and I'd definitely keep it in mind for an event too.",
    type: 'Production for 25 people',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">Reviews</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What people are saying.</h2>
        <p className="text-white/40 text-sm mb-10">5.0 ★ across Peerspace & Giggster</p>

        <div className="grid sm:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="border border-white/10 p-8 flex flex-col gap-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i} className="text-white text-sm">★</span>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-semibold">{r.name}</p>
                  <p className="text-white/40 text-xs">{r.type}</p>
                </div>
                <span className="text-white/30 text-xs tracking-wider">{r.platform}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex gap-6">
          <a
            href="https://www.peerspace.com/pages/listings/68ae9529546c6987dbd915c2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white text-sm underline underline-offset-4 transition-colors"
          >
            See all reviews on Peerspace →
          </a>
          <a
            href="https://giggster.com/listing/renovated-church-venue-photo-party-events-natural"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white text-sm underline underline-offset-4 transition-colors"
          >
            See all reviews on Giggster →
          </a>
        </div>
      </div>
    </section>
  )
}
