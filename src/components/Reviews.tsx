const reviews = [
  {
    name: 'Marcus T.',
    platform: 'Peerspace',
    rating: 5,
    text: 'Incredible space. The natural light is unreal for shoots and the host was super easy to work with. Will definitely be back.',
    type: 'Photo Shoot',
  },
  {
    name: 'Destiny R.',
    platform: 'Peerspace',
    rating: 5,
    text: 'We hosted a private birthday event here and it was perfect. Great vibe, easy load-in, and the location is so central. No noise issues at all.',
    type: 'Private Event',
  },
  {
    name: 'James W.',
    platform: 'Giggster',
    rating: 5,
    text: 'The renovated church aesthetic is unlike anything else in DTLA. Open 24/7 was a game changer for our overnight production.',
    type: 'Video Production',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">Reviews</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What people are saying.</h2>
        <p className="text-white/40 text-sm mb-16">5.0 ★ across Peerspace & Giggster</p>

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
