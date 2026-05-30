'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import RosamondoLogo from './RosamondoLogo'

export default function Hero() {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 })

  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 800], ['0%', '30%'])
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const contentY = useTransform(scrollY, [0, 400], [0, -60])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 24
      const y = (e.clientY / innerHeight - 0.5) * 14
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          x: springX,
          y: springY,
          scale: 1.12,
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ y: bgY }}
        >
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/background.png`}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.55) saturate(0.9)' }}
          />
        </motion.div>
      </motion.div>

      {/* Gradient vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* Hero content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 md:px-12"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Animated 3D logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ marginTop: '10px' }}
        >
          <RosamondoLogo size={260} className="md:w-80 md:h-80" />
        </motion.div>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 text-white font-mk-latin text-2xl md:text-4xl lg:text-5xl leading-snug max-w-2xl"
          style={{ letterSpacing: '-0.015em' }}
        >
          Der Marktplatz für zirkuläre Materialien
        </motion.h1>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-5 text-white/65 font-helvetica text-sm md:text-base leading-relaxed max-w-xl tracking-wide"
        >
          Materialien weitergeben, weiterverwenden und Kreisläufe schließen —<br className="hidden md:block" />
          wo überschüssige Materialien ein neues Leben bekommen.
        </motion.p>


      </motion.div>
    </section>
  )
}
