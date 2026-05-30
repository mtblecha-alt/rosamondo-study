'use client'

import { useRef, useCallback } from 'react'

/**
 * Enables click-and-drag horizontal scrolling on a container element.
 *
 * @param {number} sensitivity - Scroll speed multiplier (default 1.8)
 * @returns {{ ref, onMouseDown, onMouseUp, onMouseLeave, onMouseMove }}
 *   Spread the event handlers onto the scrollable container and assign `ref` to it.
 */
export function useDragScroll(sensitivity = 1.8) {
  const ref = useRef(null)
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 })

  const onMouseDown = useCallback((e) => {
    const el = ref.current
    if (!el) return
    drag.current = {
      active: true,
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
    }
    el.style.cursor = 'grabbing'
    el.style.userSelect = 'none'
  }, [])

  const onMouseUp = useCallback(() => {
    drag.current.active = false
    if (!ref.current) return
    ref.current.style.cursor = 'grab'
    ref.current.style.userSelect = ''
  }, [])

  const onMouseMove = useCallback(
    (e) => {
      if (!drag.current.active || !ref.current) return
      e.preventDefault()
      const x = e.pageX - ref.current.offsetLeft
      ref.current.scrollLeft =
        drag.current.scrollLeft - (x - drag.current.startX) * sensitivity
    },
    [sensitivity],
  )

  return { ref, onMouseDown, onMouseUp, onMouseLeave: onMouseUp, onMouseMove }
}
