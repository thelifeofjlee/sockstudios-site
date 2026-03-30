'use client'

import { useState } from 'react'

export default function BookNow() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/FORMSPREE_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="book" className="py-16 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Book Now</h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Fill out the form and we&apos;ll get back to you within 24 hours. Prefer to book instantly? Use Peerspace or Giggster.
            </p>
            <div className="space-y-4">
              <a
                href="https://www.peerspace.com/pages/listings/68ae9529546c6987dbd915c2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <span className="w-8 h-px bg-white/30" />
                Book on Peerspace
              </a>
              <a
                href="https://giggster.com/listing/renovated-church-venue-photo-party-events-natural"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <span className="w-8 h-px bg-white/30" />
                Book on Giggster
              </a>
            </div>
          </div>

          <div>
            {status === 'sent' ? (
              <div className="border border-white/10 p-10 text-center">
                <p className="text-2xl font-bold mb-3">Inquiry sent!</p>
                <p className="text-white/60">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">Name *</label>
                    <input
                      name="name"
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">Email *</label>
                    <input
                      name="email"
                      required
                      type="email"
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">Phone *</label>
                    <input
                      name="phone"
                      required
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="(310) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">Event Type *</label>
                    <select
                      name="eventType"
                      required
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#0a0a0a]">Select type</option>
                      <option value="Photo Shoot" className="bg-[#0a0a0a]">Photo Shoot</option>
                      <option value="Video Production" className="bg-[#0a0a0a]">Video Production</option>
                      <option value="Party" className="bg-[#0a0a0a]">Party</option>
                      <option value="Private Event" className="bg-[#0a0a0a]">Private Event</option>
                      <option value="Corporate Event" className="bg-[#0a0a0a]">Corporate Event</option>
                      <option value="Pop-Up" className="bg-[#0a0a0a]">Pop-Up</option>
                      <option value="Fitness/Wellness" className="bg-[#0a0a0a]">Fitness / Wellness</option>
                      <option value="Other" className="bg-[#0a0a0a]">Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">Date *</label>
                    <input
                      name="date"
                      required
                      type="date"
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">Guests</label>
                    <input
                      name="guests"
                      type="number"
                      min="1"
                      max="150"
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="# guests"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">Hours *</label>
                    <input
                      name="hours"
                      required
                      type="number"
                      min="2"
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="Min. 2"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
                    placeholder="Tell us about your event..."
                  />
                </div>
                {status === 'error' && (
                  <p className="text-red-400 text-sm">Something went wrong. Please email us directly at sockstudiosla@gmail.com</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-white text-black font-semibold text-sm tracking-widest uppercase py-4 hover:bg-[#f0ebe0] transition-colors disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
                </button>
                <p className="text-white/30 text-xs text-center">
                  We&apos;ll respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
