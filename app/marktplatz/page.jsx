'use client'

import { useRef, useEffect } from 'react'
import Header from '../../components/Header'
import { galleryImages } from '../../data/gallery'
import { useDragScroll } from '../../hooks/useDragScroll'

const CARD_W = 310
const CARD_H = 230
const GAP = 18

export default function MarktplatzPage() {
  const { ref: trackRef, onMouseDown, onMouseUp, onMouseLeave, onMouseMove } = useDragScroll(1)
  const cardRefs = useRef([])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const update = () => {
      const vw = window.innerWidth
      const centerX = vw / 2

      cardRefs.current.forEach((card) => {
        if (!card) return
        const rect = card.getBoundingClientRect()
        const cardCX = rect.left + rect.width / 2
        const dist = cardCX - centerX
        const maxDist = vw / 2
        const t = Math.max(-1, Math.min(1, dist / maxDist))
        const rotateY = t * -20
        const translateZ = (1 - Math.abs(t)) * 60
        const scale = 1 - Math.abs(t) * 0.1
        card.style.transform = `perspective(900px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`
      })
    }

    update()
    track.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      track.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [trackRef])

  return (
    <main
      className="relative w-full h-screen overflow-hidden"
      style={{ background: '#080808' }}
    >
      <Header />

      {/* Title row */}
      <div
        className="absolute left-0 right-0 flex items-center justify-between z-20"
        style={{ top: '88px', paddingLeft: '46px', paddingRight: '46px' }}
      >
        <h1
          className="font-mk-latin text-white leading-none"
          style={{ fontSize: '38px', letterSpacing: '0.01em' }}
        >
          Marktplatz Rosamondo
        </h1>

        <div className="flex items-center gap-3">
          <button
            className="font-helvetica text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
            style={{
              fontSize: '13px',
              letterSpacing: '0.03em',
              padding: '9px 18px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.22)',
              background: 'rgba(255,255,255,0.04)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <line x1="2" y1="3.5" x2="12" y2="3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
              <line x1="4" y1="7" x2="10" y2="7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
              <line x1="5.5" y1="10.5" x2="8.5" y2="10.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
            </svg>
            Filter
          </button>
          <button
            className="font-helvetica text-white/70 hover:text-white transition-colors duration-200"
            style={{
              fontSize: '13px',
              letterSpacing: '0.03em',
              padding: '9px 18px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.22)',
              background: 'rgba(255,255,255,0.04)',
            }}
          >
            Sortieren nach
          </button>
        </div>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          transform: 'translateY(-50%)',
          display: 'flex',
          gap: `${GAP}px`,
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          paddingLeft: `calc(50vw - ${CARD_W / 2}px)`,
          paddingRight: `calc(50vw - ${CARD_W / 2}px)`,
          cursor: 'grab',
          zIndex: 10,
          scrollbarWidth: 'none',
        }}
      >
        {galleryImages.map((img, i) => (
          <div
            ref={(el) => (cardRefs.current[i] = el)}
            key={i}
            style={{
              flexShrink: 0,
              borderRadius: '12px',
              overflow: 'hidden',
              width: `${CARD_W}px`,
              height: `${CARD_H}px`,
              scrollSnapAlign: 'center',
              willChange: 'transform',
              transition: 'transform 0.1s ease-out',
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover select-none pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Bottom stage ellipse — creates curved floor effect */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-28%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '130vw',
          height: '68vh',
          background: '#080808',
          borderRadius: '50%',
          zIndex: 8,
          pointerEvents: 'none',
        }}
      />
    </main>
  )
}
