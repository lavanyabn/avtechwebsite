'use client'

import React, { useEffect, useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

type PodImage = {
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

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: true,
    },
    [autoplay]
  )

  useEffect(() => {
    async function fetchLogos() {
      
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WP_LINK}/wp-json/wp/v2/pages/21`
      )

      const page = await res.json()

      // 👇 THIS is the magic line
      setLogos(page.clientslogo || [])
    }

    fetchLogos()
  }, [])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {logos.map((logo, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <Image
                  src={logo.guid}
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
