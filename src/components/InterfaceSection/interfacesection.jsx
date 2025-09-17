"use client";
import React, { useState } from "react";
import { Wand2 } from "lucide-react"; // add this import
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
      <div className="Mycontainer max-w-7xl mx-auto text-center">
        {/* Small Tag with Icon */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-gray-100 border border-gray-200 ${poppins.className}`}
        >
          <Wand2 className="w-5 h-5 text-[#7d4fe0]" />
          <span className="font-semibold  text-black">Awesome Interface</span>
        </div>

        {/* Heading */}
        <h2
          className={`${poppins.className} text-4xl lg:text-5xl font-semibold text-gray-900 mt-4 leading-tight`}
        >
          Simple & Beautiful <br />
          <span className="text-black">Interface</span>
        </h2>

        {/* Purple line under heading */}
        <div className="w-16 h-1 bg-[#7d4fe0] rounded-full mx-auto mt-3"></div>

        {/* Paragraph */}
        <p
          className={`${poppins.className} font-normal text-base sm:text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto`}
        >
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
            <button
              key={i}
              onClick={() => instanceRef.current?.moveToIdx(i)} // 👉 dot click par slide change
              className={`h-1 w-12 rounded-full transition-all duration-300 ${
                currentSlide === i ? "bg-[#7d4fe0]" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterfaceSection;
