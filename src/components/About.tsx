export default function About() {
  const pills = [
    'Cannabis Friendly',
    'No Noise Restrictions',
    '24/7 Access',
  ]

  const perfectFor = [
    { category: 'Photography', detail: 'Portraits, fashion, lifestyle, product, brand content' },
    { category: 'Video', detail: 'Commercials, interviews, music videos, TikTok, YouTube' },
    { category: 'Corporate', detail: 'Meetings, off-sites, workshops, presentations' },
    { category: 'Private Events', detail: 'Dinners, cocktail receptions, networking, pop-ups' },
    { category: 'Creative Use', detail: 'Casting calls, auditions, rehearsals, exhibitions' },
    { category: 'Fitness & Wellness', detail: 'Yoga, pilates, dance classes' },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: description + pills */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">About</p>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              A renovated church turned 1,300 sq ft multipurpose creative space in Downtown Los Angeles — built for almost anything. Open 24/7 with central AC/heat, Wi-Fi, and zero noise restrictions. Photo/video shoots, parties, proposals, screenings, private events, pop-ups — you name it.
            </p>
            <div className="flex flex-wrap gap-3">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="border border-white/20 text-white/80 text-xs tracking-widest uppercase px-4 py-2"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Perfect For */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-8">Perfect For</h3>
            <ul className="space-y-6">
              {perfectFor.map((item) => (
                <li key={item.category}>
                  <p className="text-white font-semibold mb-1">{item.category}</p>
                  <p className="text-white/50 text-sm">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
