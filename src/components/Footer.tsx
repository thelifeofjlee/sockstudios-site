export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="text-white font-bold text-xl tracking-[0.2em] uppercase mb-2">SOCKS STUDIOS</p>
            <p className="text-white/40 text-sm">1598 Oak Street, Los Angeles CA 90015</p>
          </div>

          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.instagram.com/sockstudios.la/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white text-sm tracking-widest uppercase transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.peerspace.com/pages/listings/68ae9529546c6987dbd915c2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white text-sm tracking-widest uppercase transition-colors"
            >
              Peerspace
            </a>
            <a
              href="https://giggster.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white text-sm tracking-widests uppercase transition-colors"
            >
              Giggster
            </a>
            <a
              href="mailto:sockstudios.la@gmail.com"
              className="text-white/50 hover:text-white text-sm tracking-widest uppercase transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-white/30 text-sm">© 2026 Socks Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
