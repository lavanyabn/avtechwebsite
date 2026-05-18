"use client";

import React, { useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type ClientLogo = {
  id: number;
  src: string;
  alt: string;
};

const logos: ClientLogo[] = [
  { id: 1, src: "/Logonew.png", alt: "Client 1" },
  { id: 2, src: "/Logonew.png", alt: "Client 2" },
  { id: 3, src: "/Logonew.png", alt: "Client 3" },
  { id: 4, src: "/Logonew.png", alt: "Client 4" },
  { id: 5, src: "/Logonew.png", alt: "Client 5" },
];

export default function EmblaCarousel() {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 1800,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    [],
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [autoplay],
  );

  if (logos.length === 0) {
    return null;
  }

  return (
    <div className="embla w-full overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {logos.map((logo) => (
            <div key={logo.id} className="embla__slide flex-[0_0_auto] px-4">
              <div className="embla__slide__inner relative w-32 h-32 md:w-40 md:h-40">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain w-32 h-32 md:w-40 md:h-40"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
