// components/TsundzukaniGallery.tsx - FIXED PATHS - Auto Fade
"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  "/DSC_1199.JPG",
  "/DSC_1125.JPG",
  "/DSC_1198.JPG",
  "/DSC_1170.JPG",
  "/DSC_1144.JPG",
]

export default function TsundzukaniGallery() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-full h-[384px] overflow-hidden rounded-xl bg-[#0F2C5C]">
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Tsundzukani ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current? "w-6 bg-[#FFD93D]" : "w-2 bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  )
}