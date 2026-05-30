'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Marktplatz', href: '/marktplatz' },
  { label: 'Anmelden', href: '#anmelden' },
  { label: 'Anbieter werden', href: '#anbieter' },
  { label: 'Blog', href: '#blog' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (v) => setIsScrolled(v > 50))
  }, [scrollY])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        animate={isScrolled ? 'scrolled' : 'top'}
        variants={{
          top: { backgroundColor: 'rgba(0,0,0,0)' },
          scrolled: { backgroundColor: 'rgba(10,10,10,0.45)' },
        }}
        style={isScrolled ? {
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        } : {}}
      >
        <div className="flex items-center justify-between px-8 md:px-12 py-5">
          {/* Top-left: small SVG logo */}
          <a href="/" className="flex items-center opacity-90 hover:opacity-100 transition-opacity">
            <img
              src="/logo.svg"
              alt="Rosamondo"
              width={36}
              height={36}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>

          {/* Top-center: text wordmark */}
          <a
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-white tracking-[-0.015em] text-sm font-helvetica opacity-90 hover:opacity-100 transition-opacity select-none"
          >
            rosamondo
          </a>

          {/* Top-right: hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-[5px] group p-2 -mr-2"
            aria-label="Menü öffnen"
          >
            <span className="block w-5 h-px bg-white transition-all duration-300 group-hover:w-7" />
            <span className="block w-7 h-px bg-white transition-all duration-300" />
            <span className="block w-4 h-px bg-white transition-all duration-300 group-hover:w-7" />
          </button>
        </div>
      </motion.header>

      {/* Full-screen nav overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
            style={{
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              background: 'rgba(8,8,8,0.88)',
            }}
          >
            {/* Close */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-7 right-10 text-white/60 hover:text-white transition-colors text-2xl tracking-widest font-light"
              aria-label="Menü schließen"
            >
              ✕
            </button>

            {/* Nav links */}
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-white/80 hover:text-white font-mk-latin text-4xl md:text-6xl tracking-wide transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-10 text-white/30 text-xs tracking-[0.3em] uppercase font-helvetica"
            >
              Der Marktplatz für zirkuläre Materialien
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
