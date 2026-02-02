'use client'

import React, { useEffect, useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

type PodImage = {
  ID: string
  guid: string
}

export default function EmblaCarousel() {
  const [logos, setLogos] = useState<PodImage[]>([])

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

  // Start autoplay only if emblaApi exists
  useEffect(() => {
    if (emblaApi) autoplay.play()
  }, [emblaApi, autoplay])

  // Fetch logos safely
  useEffect(() => {
    async function fetchLogos() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_WP_LINK}/wp-json/wp/v2/pages/21`)
        const data = await res.json()
        const logosData = Array.isArray(data.clientslogo) ? data.clientslogo : []
        setLogos(logosData)

        console.log(logosData)
      } catch (err) {
        console.error('Failed to fetch client logos', err)
      }
    }

    fetchLogos()
  }, [])

  // If logos is empty, render nothing or a placeholder
  if (!logos || logos.length === 0) {
    return <p>Loading clients...</p>
  }

  return (
    <div className="embla w-full overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {logos.map((logo) => (
            <div key={logo.ID} className="embla__slide flex-[0_0_auto] px-4">
              <div className="embla__slide__inner relative w-32 h-32 md:w-40 md:h-40">
                <img
                  src={logo.guid}
                  alt={`Client ${logo.ID}`}
                  // fill
                  className="object-contain w-32 h-32 md:w-40 md:h-40"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
