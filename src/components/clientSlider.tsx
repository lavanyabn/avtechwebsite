/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [autoplay],
  );

  // Start autoplay only if emblaApi exists
  useEffect(() => {
    if (emblaApi) autoplay.play();
  }, [emblaApi, autoplay]);

  return (
    <div className="embla w-full overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {/* {logos.map((logo) => (
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
          ))} */}
        </div>
      </div>
    </div>
  );
}
