'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home',     href: '/'        },
  { label: 'About',    href: '/about'   },
  { label: 'Services', href: '/services'},
  { label: 'Contact',  href: '/contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const pathname = usePathname()
  const isDark   = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const lightNav = scrolled || !isDark

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        lightNav
          ? 'bg-white shadow-[0_1px_0_0_rgba(201,168,130,0.2)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="relative w-11 h-11 flex-shrink-0 group">
          <Image
            src={lightNav ? '/logo-emblem-light.png' : '/logo-emblem-dark.png'}
            alt="The Beaute Bungalow"
            fill
            className="object-contain transition-all duration-500 group-hover:scale-[1.06]"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <Link
                key={label}
                href={href}
                className={`relative font-body text-[11px] tracking-[0.22em] uppercase transition-colors duration-300 outline-none focus-visible:ring-1 focus-visible:ring-rg-400 focus-visible:ring-offset-2 ${
                  isActive
                    ? lightNav ? 'text-rg-500' : 'text-rg-300'
                    : lightNav
                    ? 'text-charcoal/75 hover:text-rg-500'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-rg-400" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Book Now — desktop */}
        <Link
          href="/contact"
          className={`hidden md:inline-block font-body text-[11px] tracking-[0.22em] uppercase px-6 py-3 border transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-rg-400 focus-visible:ring-offset-2 ${
            lightNav
              ? 'border-rg-500 text-rg-600 hover:bg-rg-400 hover:border-rg-400 hover:text-white'
              : 'border-rg-300/70 text-rg-200 hover:bg-rg-400 hover:border-rg-400 hover:text-white'
          }`}
        >
          Book Now
        </Link>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
          className="md:hidden flex flex-col justify-center gap-[5px] w-7 h-7 outline-none focus-visible:ring-1 focus-visible:ring-rg-400"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className={`block w-full h-px origin-center transition-all duration-300 ${
                lightNav ? 'bg-charcoal' : 'bg-white'
              } ${
                menuOpen && i === 0 ? 'rotate-45 translate-y-[7px]'  :
                menuOpen && i === 1 ? 'opacity-0 scale-x-0'           :
                menuOpen && i === 2 ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-rg-100 px-6 py-7 flex flex-col items-center gap-6">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <Link
                key={label}
                href={href}
                className={`relative font-body text-[11px] tracking-[0.25em] uppercase transition-colors outline-none focus-visible:ring-1 focus-visible:ring-rg-400 ${
                  isActive ? 'text-rg-500' : 'text-charcoal/70 hover:text-rg-500'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-rg-400" />
                )}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="mt-1 font-body text-[11px] tracking-[0.22em] uppercase px-8 py-3 bg-rg-400 text-white w-full text-center hover:bg-rg-500 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
