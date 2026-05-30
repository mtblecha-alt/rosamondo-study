'use client'

import { motion } from 'framer-motion'
import { galleryImages } from '../data/gallery'
import { useDragScroll } from '../hooks/useDragScroll'

export default function Gallery() {
  const { ref: scrollRef, onMouseDown, onMouseUp, onMouseLeave, onMouseMove } = useDragScroll()

  return (
    <section
      className="w-full py-24 md:py-32 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Section header */}
      <div className="px-8 md:px-20 lg:px-32 mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-white/35 text-xs tracking-[0.4em] uppercase font-helvetica mb-4"
        >
          Einblicke
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-mk-latin text-3xl md:text-5xl text-white tracking-wide"
        >
          Materialien & Räume
        </motion.h3>
      </div>

      {/* Gallery scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto gallery-scroll px-8 md:px-20 lg:px-32 pb-4"
        style={{
          scrollSnapType: 'x mandatory',
          cursor: 'grab',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
        }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      >
        {galleryImages.map((image, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              delay: i * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{ scale: 1.025 }}
            className="flex-none relative group overflow-hidden rounded-none"
            style={{
              scrollSnapAlign: 'start',
              width: 'clamp(260px, 38vw, 500px)',
              height: 'clamp(320px, 48vw, 620px)',
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              draggable={false}
            />

            {/* Caption overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-end p-6"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)',
              }}
            >
              <span className="text-white/80 font-helvetica text-xs tracking-[0.25em] uppercase">
                {image.caption}
              </span>
            </motion.div>
          </motion.div>
        ))}

        {/* End spacer */}
        <div className="flex-none w-8 md:w-20 lg:w-32" aria-hidden="true" />
      </div>

      {/* Scroll hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-8 px-8 md:px-20 lg:px-32 text-white/20 text-xs tracking-[0.3em] uppercase font-helvetica"
      >
        ← Ziehen zum Scrollen →
      </motion.p>
    </section>
  )
}
