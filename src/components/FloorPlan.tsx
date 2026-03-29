import Image from 'next/image'

export default function FloorPlan() {
  return (
    <section id="floorplan" className="py-16 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Floor Plan</h2>
        <p className="text-white/50 text-lg mb-14 max-w-2xl">
          1,300 sq ft open floor plan — easy to customize for any setup. Ground-floor load-in access, private bathroom, hair & makeup area, and a dedicated cyc wall.
        </p>
        <div className="relative w-full rounded-sm overflow-hidden bg-white/5">
          <Image
            src="/images/floor-plan.jpg"
            alt="Socks Studios floor plan layout"
            width={1200}
            height={800}
            className="object-contain w-full"
            quality={90}
          />
        </div>
        <p className="text-white/30 text-sm mt-6 text-center">
          Questions about the layout? <a href="#book" className="text-white/60 hover:text-white underline underline-offset-4 transition-colors">Reach out</a> — we&apos;re happy to walk you through it.
        </p>
      </div>
    </section>
  )
}
