"use client";

import React, { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type ServiceItem = {
  name: string;
  description: string;
  image: string;
};

const ThingsWeAreGoodAtSlider = () => {
  const [items, setItems] = useState<ServiceItem[]>([]);

  // Fetch data on client
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WP_LINK}/wp-json/wp/v2/pages/21`,
        );

        if (!res.ok) throw new Error("Failed to fetch services");

        const page = await res.json();

        const titles = page.slider_title ?? [];
        const descriptions = page.slider_description ?? [];
        const images = page.slider_image ?? [];

        const mapped = titles.map((title: string, index: number) => ({
          name: title,
          description: descriptions[index] ?? "",
          image: images[index]?.guid ?? "",
        }));

        setItems(mapped);
      } catch (error) {
        console.error("Slider fetch error:", error);
      }
    };

    fetchData();
  }, []);

  // Autoplay plugin
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 2500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    [],
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
    },
    [autoplay],
  );

  return (
    <section className="w-full py-12">
      {/* Embla Viewport */}
      <div className="overflow-hidden px-4 w-full" ref={emblaRef}>
        {/* Embla Container */}
        <div className="flex gap-6">
          {items.map((slide, index) => (
            <div
              key={index}
              className="
                flex-[0_0_auto]
                relative
                md:w-[65vw] w-[80vw]
                md:h-[65vh] h-[45vh]
                rounded-2xl
                overflow-hidden
                mr-4
              "
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Text Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-[#cfb070] mb-2">
                  {slide.name}
                </h3>
                <p className="md:w-1/2 w-full text-sm md:text-base text-gray-200 leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsWeAreGoodAtSlider;
