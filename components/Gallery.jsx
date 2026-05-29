'use client'

import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

const images = [
  {
    src: '/images/gallery/gallery-1.png',
    alt: 'Industrielle Materialien — Referenzbild 1',
    caption: 'Materialien im Kreislauf',
  },
  {
    src: '/images/gallery/gallery-2.png',
    alt: 'Kreatives Werkstattambiente — Referenzbild 2',
    caption: 'Werkstatt & Design',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    alt: 'Industrielle Halle mit Materialien',
    caption: 'Produktionsflächen',
  },
  {
    src: 'https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=900&q=80',
    alt: 'Textilmaterialien und Gewebe',
    caption: 'Halbfertige Materialien',
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
    alt: 'Architekturfotografie — urbaner Raum',
    caption: 'Urbane Räume',
  },
  {
    src: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=900&q=80',
    alt: 'Kreative Atelierszene',
    caption: 'Kreative Ateliers',
  },
]

export default function Gallery() {
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const onMouseDown = useCallback((e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
    scrollRef.current.style.cursor = 'grabbing'
  }, [])

  const onMouseUp = useCallback(() => {
    setIsDragging(false)
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab'
  }, [])

  const onMouseMove = useCallback((e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.8
    scrollRef.current.scrollLeft = scrollLeft - walk
  }, [isDragging, startX, scrollLeft])

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
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {images.map((image, i) => (
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
            className="flex-none relative group overflow-hidden rounded-2xl"
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
