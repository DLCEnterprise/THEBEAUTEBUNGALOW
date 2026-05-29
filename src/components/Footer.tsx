import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-rg-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/[0.07]">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="relative w-16 h-16">
              <div
                aria-hidden
                className="absolute -inset-2 rounded-full blur-xl"
                style={{ background: 'radial-gradient(circle, rgba(201,168,130,0.22) 0%, transparent 70%)' }}
              />
              <Image src="/logo-emblem-dark.png" alt="The Beaute Bungalow" fill className="relative object-contain" />
            </div>
            <p className="font-body text-[13px] text-white/45 leading-relaxed max-w-[190px]">
              Luxury face &amp; body contouring for women who demand the very best.
            </p>
            <div className="flex gap-6 mt-1">
              <a href="#" className="font-body text-[10px] tracking-[0.2em] uppercase text-white/25 hover:text-rg-400 transition-colors">Instagram</a>
              <a href="#" className="font-body text-[10px] tracking-[0.2em] uppercase text-white/25 hover:text-rg-400 transition-colors">Facebook</a>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-rg-400 mb-5">Treatments</p>
            <ul className="space-y-3">
              {['Face Contouring', 'Body Contouring', 'Skin Tightening', 'Sculpting Treatments'].map(item => (
                <li key={item}>
                  <Link href="/services" className="font-body text-[13px] text-white/45 hover:text-rg-300 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-rg-400 mb-5">Navigate</p>
            <ul className="space-y-3">
              {[['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Contact', '/contact']] .map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="font-body text-[13px] text-white/45 hover:text-rg-300 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-rg-400 mb-5">Visit Us</p>
            <address className="not-italic space-y-3">
              <p className="font-body text-[13px] text-white/45">Your City, State</p>
              <a href="tel:+10000000000" className="block font-body text-[13px] text-white/45 hover:text-rg-300 transition-colors">
                (000) 000-0000
              </a>
              <a href="mailto:hello@thebeautebungalow.com" className="block font-body text-[13px] text-white/45 hover:text-rg-300 transition-colors break-all">
                hello@thebeautebungalow.com
              </a>
            </address>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-white/18">
            © 2025 The Beaute Bungalow. All rights reserved.
          </p>
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-white/12">
            Face &amp; Body Contouring
          </p>
        </div>
      </div>
    </footer>
  )
}
