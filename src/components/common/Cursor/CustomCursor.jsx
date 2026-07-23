import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      requestAnimationFrame(animate)
    }

    const onEnter = () => {
      dot.style.transform = 'translate(-50%,-50%) scale(2)'
      ring.style.transform = 'translate(-50%,-50%) scale(1.5)'
      ring.style.borderColor = 'rgba(255,0,0,0.9)'
    }
    const onLeave = () => {
      dot.style.transform = 'translate(-50%,-50%) scale(1)'
      ring.style.transform = 'translate(-50%,-50%) scale(1)'
      ring.style.borderColor = 'rgba(255,0,0,0.6)'
    }

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}
