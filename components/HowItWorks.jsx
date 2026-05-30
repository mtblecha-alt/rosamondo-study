'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    text: 'Angebote mit Materialdaten, Maßen und Preisen durchsuchen',
  },
  {
    number: '02',
    text: 'Anbieter:innen werden vom Team onboarded',
  },
  {
    number: '03',
    text: 'Werkstätten, Hersteller:innen und Kreative finden zirkuläre Materialien statt Neumaterial',
  },
]

export default function HowItWorks() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 py-32"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)' }}
    >
      {/* Top decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
      />

      <div className="max-w-5xl mx-auto w-full">
        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-mk-latin text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight mb-12 md:mb-16"
        >
          So funktioniert&apos;s
        </motion.h2>

        {/* Steps */}
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group flex flex-col items-center text-center gap-2 py-10"
            >
              {/* Number */}
              <span className="font-helvetica text-white/15 text-xs tracking-widest group-hover:text-white/30 transition-colors duration-500">
                {step.number}
              </span>

              {/* Step text */}
              <p className="font-helvetica text-white/80 text-xl md:text-2xl lg:text-3xl leading-relaxed group-hover:text-white transition-colors duration-500 max-w-3xl" style={{ letterSpacing: '-0.01em', fontWeight: 400 }}>
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
      />
    </section>
  )
}
