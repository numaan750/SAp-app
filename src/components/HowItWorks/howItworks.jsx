"use client";

import React, { useContext } from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { TbAdjustments, TbDeviceMobileCog } from "react-icons/tb";
import { Poppins } from "next/font/google";
import { appContext } from "@/context/appcontext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HowItWorks = () => {
  const { sapwork } = useContext(appContext);

  if (!sapwork)
    return <p className="text-center py-10">Loading sapwork...</p>;

  return (
    <section
      className="w-full bg-gradient-to-r from-[#5337de] via-[#6948e1] to-[#8056e3] 
      text-white py-16 lg:py-20 flex items-center justify-center transition-all duration-300"
    >
      <div className="Mycontainer max-w-6xl w-full flex flex-col items-center text-center px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <h2
          className={`${poppins.className} font-semibold text-3xl sm:text-4xl lg:text-5xl mb-4 leading-snug max-w-2xl`}
        >
          {sapwork.heading}
        </h2>

        {/* Paragraph */}
        <p
          className={`${poppins.className} font-normal text-base sm:text-lg md:text-xl mb-12 md:mb-16 opacity-90 leading-tight max-w-3xl`}
        >
          {sapwork.paragraph}
        </p>

        {/* Steps Section */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8 
          w-full transition-all duration-300 ease-in-out"
        >
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center md:flex-1 max-w-xs md:max-w-none px-4">
            <IoCloudDownloadOutline className="w-16 h-16 md:w-20 md:h-20 text-white mb-6" />
            <h3
              className={`${poppins.className} font-semibold text-lg sm:text-xl md:text-2xl mb-3`}
            >
              {sapwork.text1}
            </h3>
            <p
              className={`${poppins.className} font-normal text-sm sm:text-base md:text-lg opacity-90 leading-relaxed`}
            >
              {sapwork.description1}
            </p>
          </div>

          {/* Chevron */}
          <div className="hidden md:flex items-center justify-center">
            <span className="text-white text-7xl font-light transition-transform duration-300 ease-out hover:translate-x-2">
              ›
            </span>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center md:flex-1 max-w-xs md:max-w-none px-4">
            <TbAdjustments className="w-16 h-16 md:w-20 md:h-20 text-white mb-6" />
            <h3
              className={`${poppins.className} font-semibold text-lg sm:text-xl md:text-2xl mb-3`}
            >
              {sapwork.text2}
            </h3>
            <p
              className={`${poppins.className} font-normal text-sm sm:text-base md:text-lg opacity-90 leading-relaxed`}
            >
              {sapwork.description2}
            </p>
          </div>

          {/* Chevron */}
          <div className="hidden md:flex items-center justify-center">
            <span className="text-white text-7xl font-light transition-transform duration-300 ease-out hover:translate-x-2">
              ›
            </span>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center md:flex-1 max-w-xs md:max-w-none px-4">
            <TbDeviceMobileCog className="w-16 h-16 md:w-20 md:h-20 text-white mb-6" />
            <h3
              className={`${poppins.className} font-semibold text-lg sm:text-xl md:text-2xl mb-3`}
            >
              {sapwork.text3}
            </h3>
            <p
              className={`${poppins.className} font-normal text-sm sm:text-base md:text-lg opacity-90 leading-relaxed`}
            >
              {sapwork.description3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
