'use client'

import { useState } from 'react'
import Image from 'next/image'

const images = [
  { src: '/images/Elim Pan_ 2026-15.jpg', alt: 'Socks Studios main space' },
  { src: '/images/Elim Pan_ 2026-1.jpg', alt: 'Socks Studios interior' },
  { src: '/images/Elim Pan_ 2026-3.jpg', alt: 'Socks Studios space' },
  { src: '/images/Elim Pan_ 2026-5.jpg', alt: 'Socks Studios natural light' },
  { src: '/images/Elim Pan_ 2026-10.jpg', alt: 'Socks Studios open layout' },
  { src: '/images/Elim Pan_ 2026-11.jpg', alt: 'Socks Studios exposed brick' },
  { src: '/images/Elim Pan_ 2026-12.jpg', alt: 'Socks Studios loft' },
  { src: '/images/Elim Pan_ 2026-13.jpg', alt: 'Socks Studios amenities' },
  { src: '/images/Elim Pan_ 2026-16.jpg', alt: 'Socks Studios DTLA' },
  // Additional photos — bottom row
  { src: '/images/DSCF7695.JPG', alt: 'Socks Studios additional view' },
  { src: '/images/screenshot-1.png', alt: 'Socks Studios setup' },
  { src: '/images/screenshot-2.png', alt: 'Socks Studios event' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + images.length) % images.length : null))
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % images.length : null))

  return (
    <section id="gallery" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">The Space</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">The Space</h2>

        {/* Mobile: horizontal swipe carousel */}
        <div className="sm:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide">
          {images.map((img, i) => (
            <div
              key={img.src}
              className="flex-shrink-0 w-[80vw] snap-start cursor-pointer overflow-hidden rounded-sm"
              onClick={() => openLightbox(i)}
            >
              <div className="relative w-full aspect-[4/3] bg-white/5">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="80vw"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: masonry grid */}
        <div className="hidden sm:block columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={img.src}
              className="break-inside-avoid cursor-pointer overflow-hidden group"
              onClick={() => openLightbox(i)}
            >
              <div className="relative w-full aspect-[4/3] bg-white/5">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white text-3xl font-light z-10 p-4"
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="relative w-full max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              width={1400}
              height={900}
              className="object-contain w-full h-full max-h-[85vh]"
              quality={95}
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white text-3xl font-light z-10 p-4"
            aria-label="Next image"
          >
            ›
          </button>

          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl z-10 p-2"
            aria-label="Close"
          >
            ✕
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm">
            {lightbox + 1} / {images.length}
          </p>
        </div>
      )}
    </section>
  )
}
