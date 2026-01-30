import React from "react";

type Slide = {
  title: string;
  description: string;
  image: string;
};

const slides: Slide[] = [
  {
    title: "Industry–Academia Bridge",
    description:
      "We bridge the gap between academic learning and real-world industry requirements by delivering practical, application-driven knowledge that prepares learners and organizations for today’s technology landscape.",
    image: "/industry.png",
  },
  {
    title: "Expert-Led Solutions",
    description:
      "Our team of seasoned educators and industry experts creates cutting-edge learning experiences for modern enterprises.",
    image: "/expert.png",
  },
  {
    title: "Innovation Focused",
    description:
      "We empower organizations through innovative tools, insights, and forward-thinking methodologies.",
    image: "/development.png",
  },
];

const ThingsWeAreGoodAtSlider = () => {
  return (
    <section className="w-full py-16">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#cfb070] mb-10">
        Things We’re Really Good At
      </h2>

      {/* Slider */}
      <div
        className="
          flex gap-6 md:px-6 px-4
          overflow-x-auto
          scroll-smooth
          snap-x snap-mandatory
          scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent
        "
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="
              relative
              md:w-[65vw] w-[80vw] md:px-0 px-4 
              md:h-[65vh] h-[45vh]
              rounded-2xl
              overflow-hidden
              snap-center
              shrink-0
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
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThingsWeAreGoodAtSlider;
