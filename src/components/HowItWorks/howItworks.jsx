"use client"

import React, { useContext } from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { TbAdjustments, TbDeviceMobileCog } from "react-icons/tb";
import { Poppins } from "next/font/google";
import { AppContext } from "@/context/Appcontext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HowItWorks = () => {
  const {sapwork} = useContext(AppContext);

  if (!sapwork)
    return <p className="text-center py-10">Loading sapwork...</p>;

  return (
    <section
      className="w-full lg:py-20 flex items-start md:items-center 
      bg-gradient-to-r from-[#5337de] via-[#6948e1] to-[#8056e3] 
      text-white py-16 md:py-0"
    >
      <div className="Mycontainer max-w-6xl text-center flex flex-col items-center">
        {/* Heading */}
        <h2
          className={`${poppins.className} font-semibold text-4xl sm:text-4xl lg:text-5xl mb-4 leading-snug max-w-2xl mx-auto`}
        >
         {sapwork.heading}
        </h2>

        {/* Paragraph */}
        <p
          className={`${poppins.className} font-normal text-base sm:text-lg md:text-xl mx-auto mb-12 md:mb-16 opacity-90 leading-tight max-w-3xl`}
        >
          {sapwork.paragraph}
          <br className="hidden sm:block" />
        </p>

        {/* Steps manually written */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-9 md:gap-2 w-full">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center max-w-xs md:max-w-sm px-4">
            <div className="mb-6 flex justify-center">
              <IoCloudDownloadOutline className="w-19 h-19 md:w-17 md:h-17 text-white mx-auto" />
            </div>
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

          {/* Chevron Arrow */}
          <div className="hidden md:flex items-center justify-center">
            <span className="text-white text-9xl font-light transition-transform duration-300 ease-out hover:translate-x-2 cursor-pointer">
              ›
            </span>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center max-w-xs md:max-w-sm px-4">
            <div className="mb-6 flex justify-center">
              <TbAdjustments className="w-19 h-19 md:w-17 md:h-17 text-white mx-auto" />
            </div>
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

          {/* Chevron Arrow */}
          <div className="hidden md:flex items-center justify-center">
            <span className="text-white text-9xl font-light transition-transform duration-300 ease-out hover:translate-x-2 cursor-pointer">
              ›
            </span>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center max-w-xs md:max-w-sm px-4">
            <div className="mb-6 flex justify-center">
              <TbDeviceMobileCog className="w-19 h-19 md:w-17 md:h-17 text-white mx-auto" />
            </div>
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
