export default function Availability() {
  return (
    <section id="availability" className="py-16 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">Availability</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Check Availability</h2>
        <p className="text-white/50 mb-12">Calendar reflects live availability across all booking platforms.</p>

        <div className="w-full bg-white/5 border border-white/10 overflow-hidden">
          <iframe
            src="GOOGLE_CALENDAR_EMBED_URL"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder={0}
            scrolling="no"
            title="Socks Studios Availability Calendar"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
