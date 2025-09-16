"use client";
import React, { useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const Screenshot = [
  "/screenshot-1.jpg",
  "/screenshot-2.jpg",
  "/screenshot-3.jpg",
  "/screenshot-4.jpg",
  "/screenshot-5.jpg",
];

const InterfaceSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Keen slider init with pagination tracking
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 30 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel); // update active dot
    },
  });

  return (
    <section id="screenshots" className="w-full py-20 bg-white overflow-hidden">
      <div className="Mycontainer max-w-7xl mx-auto  text-center">
        {/* Small Tag with Icon */}
        <div className="flex items-center justify-center gap-2 text-black font-semibold text-sm">
          <SparklesIcon className="w-5 h-5 text-purple-600" />
          <span>Awesome Interface</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
          Simple & Beautiful <br />
          <span className="text-black">Interface</span>
        </h2>

        {/* Purple line under heading */}
        <div className="w-20 h-1 bg-purple-600 rounded-full mx-auto mt-4"></div>

        {/* Paragraph */}
        <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Clean and elegant interface with sApp that combines simplicity with
          beauty, ensuring a smooth and enjoyable user journey.
        </p>

        {/* Screenshots - Carousel */}
        <div ref={sliderRef} className="keen-slider mt-16 cursor-grab">
          {Screenshot.map((scr, i) => (
            <div key={i} className="keen-slider__slide flex justify-center">
              <Image
                src={scr}
                alt={`App Screenshot ${i + 1}`}
                width={420}
                height={840}
                className="shadow-xl rounded-xl object-contain"
              />
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {Screenshot.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${
                currentSlide === i ? "bg-purple-600" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterfaceSection;
