export default function FindUs() {
  return (
    <section id="find-us" className="py-16 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Location</h2>

        <div className="grid md:grid-cols-2 gap-16 items-start mt-12">
          <div>
            <p className="text-2xl font-bold mb-2">1598 Oak Street</p>
            <p className="text-white/60 text-lg mb-8">Los Angeles, CA 90015</p>

            <div className="space-y-4">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">Parking</p>
                <p className="text-white/70">Tons of free street parking in the area. Paid parking lot directly across the street.</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">Area</p>
                <p className="text-white/70">Downtown Los Angeles (DTLA)</p>
              </div>
            </div>
          </div>

          <div className="w-full bg-white/5 border border-white/10 overflow-hidden aspect-video">
            <iframe
              src="GOOGLE_MAPS_EMBED_URL"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Socks Studios Location Map"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
