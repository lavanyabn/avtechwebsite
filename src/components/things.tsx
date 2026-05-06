"use client";

import React, { useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type ServiceItem = {
  id: number;
  title: string;
  content: string;
  image: string;
};

// ✅ Static data (manually controlled)
const items: ServiceItem[] = [
  {
    id: 1,
    title: "Industry–Academia Bridge",
    content:
      "We bridge the gap between academic learning and real-world industry requirements by delivering practical, application-driven knowledge that prepares learners and organizations for today’s technology landscape.",
    image: "/industry.png",
  },
  {
    id: 2,
    title: "Expert-Led Solutions",
    content:
      "Our team of seasoned educators and industry experts creates cutting-edge learning experiences for modern enterprises.",
    image: "/expert.png",
  },
  {
    id: 3,
    title: "Innovation Focused",
    content:
      "We empower organizations through innovative tools, insights, and forward-thinking methodologies.",
    image: "/development.png",
  },
];

const ThingsWeAreGoodAtSlider = () => {
  // Autoplay plugin
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 2500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        playOnInit: true,
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
          {items.map((slide) => (
            <div
              key={slide.id}
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
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Text Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-[#cfb070] mb-2">
                  {slide.title}
                </h3>
                <p className="md:w-1/2 w-full text-sm md:text-base text-gray-200 leading-relaxed">
                  {slide.content}
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
