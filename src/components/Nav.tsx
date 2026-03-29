'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoExists, setLogoExists] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Check if logo image loads
    const img = new window.Image()
    img.onload = () => setLogoExists(true)
    img.onerror = () => setLogoExists(false)
    img.src = '/images/socks-logo.png'
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Space', href: '#gallery' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo + Wordmark */}
        <a href="#" className="flex items-center gap-3">
          {logoExists && (
            <Image
              src="/images/socks-logo.png"
              alt="Socks Studios logo"
              width={36}
              height={36}
              className="object-contain w-9 h-9"
            />
          )}
          <span className="text-white font-bold text-xl tracking-[0.2em] uppercase">
            SOCKS STUDIOS
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-sm tracking-widest uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className="bg-white text-black text-sm font-semibold tracking-widest uppercase px-5 py-2.5 hover:bg-[#f0ebe0] transition-colors"
          >
            Book Now
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/sockstudios.la/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/60 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white transition-all mb-1.5 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-all mb-1.5 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 border-t border-white/5 px-6 py-6 flex flex-col gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white text-sm tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setMenuOpen(false)}
            className="bg-white text-black text-sm font-semibold tracking-widest uppercase px-5 py-3 text-center"
          >
            Book Now
          </a>
          <a
            href="https://www.instagram.com/sockstudios.la/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/60 text-sm tracking-widest uppercase"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            Instagram
          </a>
        </div>
      )}
    </nav>
  )
}
