export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">Pricing</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Rates</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Weekdays */}
          <div className="border border-white/10 p-10">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Weekdays</p>
            <p className="text-5xl font-bold mb-2">$100<span className="text-2xl font-normal text-white/50">/hr</span></p>
            <p className="text-white/40 text-sm mb-8">Base rate</p>
            <div className="space-y-3 border-t border-white/10 pt-8">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">50–75 guests</span>
                <span className="text-white">+$20/hr</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">75–100 guests</span>
                <span className="text-white">+$40/hr</span>
              </div>
            </div>
          </div>

          {/* Weekends */}
          <div className="border border-white/10 p-10 bg-white/[0.02]">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Weekends</p>
            <p className="text-5xl font-bold mb-2">$120<span className="text-2xl font-normal text-white/50">/hr</span></p>
            <p className="text-white/40 text-sm mb-8">Base rate</p>
            <div className="space-y-3 border-t border-white/10 pt-8">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">50–75 guests</span>
                <span className="text-white">+$20/hr</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">75–100 guests</span>
                <span className="text-white">+$40/hr</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 border-t border-white/10 pt-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">Cleaning Fee</p>
            <p className="text-2xl font-bold">$180</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">Security Deposit</p>
            <p className="text-2xl font-bold">$300 <span className="text-sm font-normal text-white/50">refundable</span></p>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">Minimum Booking</p>
            <p className="text-2xl font-bold">2 hours</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm">
            Also available on{' '}
            <a href="https://www.peerspace.com/pages/listings/68ae9529546c6987dbd915c2" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Peerspace</a>
            {' '}and{' '}
            <a href="https://giggster.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Giggster</a>
            {' '}at $100/hr.
          </p>
        </div>
      </div>
    </section>
  )
}
