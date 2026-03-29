'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Is the space available 24/7?',
    a: 'Yes — we are open 24 hours a day, 7 days a week. No curfew, no noise restrictions.',
  },
  {
    q: 'Is there a minimum booking time?',
    a: 'Yes, the minimum booking is 2 hours.',
  },
  {
    q: 'How do I access the space?',
    a: 'Once your booking is confirmed and payment is received, we will provide you with the lockbox code for keyless entry.',
  },
  {
    q: 'Is alcohol allowed?',
    a: 'Yes, you are welcome to bring your own alcohol. However, no drinks are permitted outside the building — this is our #1 rule and violations can result in citations or the event being shut down.',
  },
  {
    q: 'Is the space cannabis friendly?',
    a: 'Yes. Smoking cannabis inside is permitted. Cigarette smoking is only allowed outside on the sidewalk.',
  },
  {
    q: 'Is there parking?',
    a: 'Yes — there is tons of free street parking in the area and a paid parking lot directly across the street.',
  },
  {
    q: 'What is the capacity?',
    a: 'The space holds up to 150 people standing. Seated capacity is around 100.',
  },
  {
    q: 'Can I bring my own DJ or music?',
    a: 'Absolutely. You can bring your own DJ and sound setup. We also have a PA speaker available to rent for $40.',
  },
  {
    q: 'Can I move or rearrange the furniture?',
    a: 'Yes, but please confirm any major layout changes with us first and return everything to its original position before leaving.',
  },
  {
    q: 'Can I hang decorations or signage?',
    a: 'No tape, nails, or adhesives on the walls or windows. Use removable hooks or clamps only.',
  },
  {
    q: 'Is security required for events?',
    a: 'It depends on the event. There is a bus stop directly in front and other venues nearby, so for larger or public-facing events we strongly recommend having someone check the door.',
  },
  {
    q: 'What is the cancellation policy?',
    a: '50% refund if cancelled 7 or more days before the event. No refund for cancellations within 7 days of the event.',
  },
  {
    q: 'How does the security deposit work?',
    a: 'A $300 refundable security deposit is required for all bookings regardless of platform. It is collected upfront and returned within 5 business days after your event if there is no damage or rule violations.',
  },
  {
    q: 'Is there a cleaning fee?',
    a: 'Yes, there is a $180 cleaning fee applied to all bookings.',
  },
  {
    q: 'Is the space wheelchair accessible?',
    a: 'Yes — the space is ground floor with street-level access.',
  },
  {
    q: 'Do you have Wi-Fi?',
    a: 'Yes. Network: "socks studios" | Password provided upon booking confirmation.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">FAQ</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Common questions.</h2>

        <div className="divide-y divide-white/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-8 group"
              >
                <span className="text-white/90 group-hover:text-white transition-colors text-sm md:text-base font-medium">
                  {faq.q}
                </span>
                <span className={`text-white/40 text-xl flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="pb-6">
                  <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 border border-white/10 p-8">
          <p className="text-white/60 text-sm mb-4">Still have questions?</p>
          <a
            href="#book"
            className="text-white font-semibold text-sm tracking-widest uppercase underline underline-offset-4 hover:text-white/70 transition-colors"
          >
            Reach out directly →
          </a>
        </div>
      </div>
    </section>
  )
}
