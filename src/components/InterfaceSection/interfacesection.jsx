"use client";
import React, { useContext, useState } from "react";
import { Wand2 } from "lucide-react";
// import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Poppins } from "next/font/google";
import { AppContext } from "@/context/Appcontext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const InterfaceSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const { Interface } = useContext(AppContext);

  if (!Interface)
    return <p className="text-center py-10">Loading Interface...</p>;

  return (
    <section id="screenshots" className="w-full py-20 bg-white overflow-hidden">
      <div className="Mycontainer max-w-7xl mx-auto text-center">
        {/* Small Tag with Icon */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-gray-100 border border-gray-200 ${poppins.className}`}
        >
          <Wand2 className="w-5 h-5 text-[#7d4fe0]" />
          <span className="font-semibold text-black">{Interface.toptext}</span>
        </div>

        {/* Heading */}
        <h2
          className={`${poppins.className} text-4xl lg:text-5xl font-semibold text-gray-900 mt-4 leading-tight`}
        >
          {Interface.heading} <br />
          <span className="text-black"></span>
        </h2>

        {/* Purple line under heading */}
        <div className="w-16 h-1 bg-[#7d4fe0] rounded-full mx-auto mt-3"></div>

        {/* Paragraph */}
        <p
          className={`${poppins.className} font-normal text-base sm:text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto`}
        >
          {Interface.paragraph}
        </p>

        {/* Screenshots - Carousel (manual) */}
        <div ref={sliderRef} className="keen-slider mt-16 cursor-grab">
          {/* Slide 1 */}
          <div className="keen-slider__slide flex justify-center">
            {Interface.img1 && (
              <img
                src={Interface.img1}
                alt="App Screenshot 1"
                width={420}
                height={840}
                className="shadow-xl rounded-xl object-contain"
              />
            )}
          </div>

          {/* Slide 2 */}
          <div className="keen-slider__slide flex justify-center">
            {Interface.img2 && (
              <img
                src={Interface.img2}
                alt="App Screenshot 2"
                width={420}
                height={840}
                className="shadow-xl rounded-xl object-contain"
              />
            )}
          </div>

          {/* Slide 3 */}
          <div className="keen-slider__slide flex justify-center">
            {Interface.img3 && (
              <img
                src={Interface.img3}
                alt="App Screenshot 3"
                width={420}
                height={840}
                className="shadow-xl rounded-xl object-contain"
              />
            )}
          </div>

          {/* Slide 4 */}
          <div className="keen-slider__slide flex justify-center">
            {Interface.img4 && (
              <img
                src={Interface.img4}
                alt="App Screenshot 4"
                width={420}
                height={840}
                className="shadow-xl rounded-xl object-contain"
              />
            )}
          </div>

          {/* Slide 5 */}
          <div className="keen-slider__slide flex justify-center">
            {Interface.img5 && (
              <img
                src={Interface.img5}
                alt="App Screenshot 5"
                width={420}
                height={840}
                className="shadow-xl rounded-xl object-contain"
              />
            )}
          </div>
        </div>

        {/* Pagination Dots (manual) */}
        <div className="flex justify-center gap-3 mt-8">
          <button
            onClick={() => instanceRef.current?.moveToIdx(0)}
            className={`h-1 w-12 rounded-full transition-all duration-300 ${
              currentSlide === 0 ? "bg-[#7d4fe0]" : "bg-gray-300"
            }`}
          ></button>
          <button
            onClick={() => instanceRef.current?.moveToIdx(1)}
            className={`h-1 w-12 rounded-full transition-all duration-300 ${
              currentSlide === 1 ? "bg-[#7d4fe0]" : "bg-gray-300"
            }`}
          ></button>
          <button
            onClick={() => instanceRef.current?.moveToIdx(2)}
            className={`h-1 w-12 rounded-full transition-all duration-300 ${
              currentSlide === 2 ? "bg-[#7d4fe0]" : "bg-gray-300"
            }`}
          ></button>
          <button
            onClick={() => instanceRef.current?.moveToIdx(3)}
            className={`h-1 w-12 rounded-full transition-all duration-300 ${
              currentSlide === 3 ? "bg-[#7d4fe0]" : "bg-gray-300"
            }`}
          ></button>
          <button
            onClick={() => instanceRef.current?.moveToIdx(4)}
            className={`h-1 w-12 rounded-full transition-all duration-300 ${
              currentSlide === 4 ? "bg-[#7d4fe0]" : "bg-gray-300"
            }`}
          ></button>
        </div>
      </div>
    </section>
  );
};

export default InterfaceSection;
