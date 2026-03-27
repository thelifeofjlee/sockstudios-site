export default function About() {
  const pills = [
    'Cannabis Friendly',
    'No Noise Restrictions',
    '24/7 Access',
  ]

  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">About</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Built for creators.<br />Open for anything.
            </h2>
          </div>
          <div>
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
        </div>
      </div>
    </section>
  )
}
