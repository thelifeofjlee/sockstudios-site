const included = [
  'Floor-to-ceiling windows with natural light',
  'Exposed brick walls + open loft layout — renovated church',
  'High ceilings',
  'Central AC & heat',
  'Private bathroom',
  'Hair & makeup prep area',
  'Wi-Fi',
  'Ground-floor load-in access',
  'Clothing rack + large mirror (7×5 ft)',
  '8.5 ft dining table',
  'Seating area (3-seater couch, accent chairs, coffee table)',
  'Cyc wall',
  '24/7 security cameras',
]

const addOns = [
  { item: '6ft fold out plastic table', price: '$15/item' },
  { item: 'Cyc wall repaint', price: '$50/item' },
  { item: 'Overnight storage', price: '$200/item' },
  { item: 'Plastic ice bucket', price: '$10/item' },
  { item: 'DJ stand', price: '$50/item' },
  { item: 'PA speaker', price: '$40/item' },
  { item: 'Adjustable colored lights', price: '$20/item' },
  { item: 'Flood lights', price: '$20/item' },
  { item: 'Laser lights', price: '$40/item' },
]

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">Features & Amenities</h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Included */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-8">Included</h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70">
                  <span className="text-white/30 mt-0.5 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Add-Ons */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-8">Available to Add-On or Rent</h3>
            <ul className="space-y-3">
              {addOns.map((addon) => (
                <li key={addon.item} className="flex items-center justify-between gap-4 text-white/50">
                  <div className="flex items-start gap-3">
                    <span className="text-white/20 mt-0.5 flex-shrink-0">+</span>
                    <span>{addon.item}</span>
                  </div>
                  <span className="text-white/30 text-sm flex-shrink-0">{addon.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
