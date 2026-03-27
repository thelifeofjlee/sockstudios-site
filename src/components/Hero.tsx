import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end pb-20">
      <Image
        src="/images/Elim Pan_ 2026-15.jpg"
        alt="Socks Studios interior"
        fill
        priority
        className="object-cover"
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6 max-w-3xl">
          A creative space built for almost anything.
        </h1>
        <p className="text-white/70 text-lg md:text-xl mb-10 tracking-wide">
          1,300 sq ft &nbsp;·&nbsp; DTLA &nbsp;·&nbsp; Open 24/7 &nbsp;·&nbsp; No noise restrictions
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#book"
            className="bg-white text-black font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#f0ebe0] transition-colors"
          >
            Book Now
          </a>
          <a
            href="https://www.peerspace.com/pages/listings/68ae9529546c6987dbd915c2"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/50 text-white font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:border-white hover:bg-white/10 transition-colors"
          >
            View on Peerspace
          </a>
        </div>
      </div>
    </section>
  )
}
