"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { FiCheckCircle } from "react-icons/fi";
import { TbArrowsMove, TbArrowsLeftRight, TbArrowRightCircle } from "react-icons/tb";
import { appContext } from "@/context/appcontext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const CommunicateSection = () => {
  const { comunication } = useContext(appContext);

  if (!comunication)
    return <p className="text-center py-10">Loading features...</p>;

  return (
    <section className="w-full bg-white py-20">
      <div className="Mycontainer max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left image */}
        <div className="flex justify-center">
          {comunication.mainimg ? (
            <img
              src={comunication.mainimg}
              alt="App"
              width={700}
              height={500}
              className="w-[400px] md:w-[600px] lg:w-[700px] xl:w-[800px] object-cover drop-shadow-2xl"
            />
          ) : (
            <div className="w-[400px] h-[400px] bg-gray-100 flex items-center justify-center text-gray-400 rounded-lg">
              No Image Found
            </div>
          )}
        </div>

        {/* Right content */}
        <div>
          <h2
            className={`${poppins.className} text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-gray-900 leading-snug md:leading-tight text-left w-full mb-8`}
          >
            {comunication.heading} <br /> 
            <span className="text-black"></span>
          </h2>

          {/* Feature list (manually written) */}
          <ul className="space-y-6 mb-12">
            <li className="flex items-start gap-4">
              <FiCheckCircle className="w-8 h-8 text-[#7d4fe0] flex-shrink-0" />
              <span
                className={`${poppins.className} font-normal text-gray-700 text-base sm:text-lg`}
              >
                {comunication.description1}
              </span>
            </li>

            <li className="flex items-start gap-4">
              <FiCheckCircle className="w-8 h-8 text-[#7d4fe0] flex-shrink-0" />
              <span
                className={`${poppins.className} font-normal text-gray-700 text-base sm:text-lg`}
              >
                {comunication.description2}
              </span>
            </li>

            <li className="flex items-start gap-4">
              <FiCheckCircle className="w-8 h-8 text-[#7d4fe0] flex-shrink-0" />
              <span
                className={`${poppins.className} font-normal text-gray-700 text-base sm:text-lg`}
              >
                {comunication.description3}
              </span>
            </li>

            <li className="flex items-start gap-4">
              <FiCheckCircle className="w-8 h-8 text-[#7d4fe0] flex-shrink-0" />
              <span
                className={`${poppins.className} font-normal text-gray-700 text-base sm:text-lg`}
              >
                {comunication.description4}
              </span>
            </li>
          </ul>

          {/* Bottom action icons */}
          <div className="flex gap-5">
            <div className="p-4 rounded-lg bg-white text-[#7d4fe0] shadow-md">
              <TbArrowsMove className="w-9 h-9" />
            </div>
            <div className="p-4 rounded-lg bg-white text-[#7d4fe0] shadow-md">
              <TbArrowsLeftRight className="w-9 h-9" />
            </div>
            <div className="p-4 rounded-lg bg-white text-[#7d4fe0] shadow-md">
              <TbArrowRightCircle className="w-9 h-9" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicateSection;
