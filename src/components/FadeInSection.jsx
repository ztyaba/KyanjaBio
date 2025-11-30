"use client"
import { useEffect, useRef, useState } from "react"

export default function FadeInSection({ children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  )
}
