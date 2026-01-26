'use client'

import React, { useEffect, useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export default function EmblaCarousel() {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 1800,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: true,
    },
    [autoplay]
  )

  useEffect(() => {
    if (!emblaApi) return
    autoplay.play()
  }, [emblaApi, autoplay])

  const clients = Array.from({ length: 12 }, (_, i) => `/client${String(i + 1).padStart(2, '0')}.png`)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {clients.map((src, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <Image
                  src={src}
                  alt="Client logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
