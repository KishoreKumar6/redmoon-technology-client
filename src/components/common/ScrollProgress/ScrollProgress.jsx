import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const progress = scrollTop / (scrollHeight - clientHeight)
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`
      }
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      ref={barRef}
      className="scroll-progress"
      style={{ width: '100%', transformOrigin: 'left', transform: 'scaleX(0)' }}
    />
  )
}
