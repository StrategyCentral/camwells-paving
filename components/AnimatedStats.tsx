'use client'
import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

const stats = [
  { target: 40, suffix: '+', label: 'Years Experience', desc: 'Our team has more than 40 years of paving experience. You can trust that we know what we are doing.' },
  { target: 100, suffix: 's+', label: 'Jobs Completed', desc: 'Cam Wells Driveways Melbourne have completed hundreds of jobs so you can rest assured you're in good hands.' },
  { target: 1000, suffix: ''s', label: 'Happy Clients', desc: 'Cam Wells Driveways Melbourne clients are happy and impressed with our service, quality and design.' },
]

export default function AnimatedStats() {
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const counts = [
    useCountUp(stats[0].target, 1800, started),
    useCountUp(stats[1].target, 2000, started),
    useCountUp(stats[2].target, 2200, started),
  ]

  return (
    <section ref={ref} className="py-16 bg-purple-700 text-white">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-6xl font-black mb-2 tabular-nums">
              {counts[i]}{s.suffix}
            </div>
            <div className="text-xl font-bold mb-2">{s.label}</div>
            <div className="text-purple-200 text-sm leading-relaxed">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
