"use client";

import React, { useContext } from "react";
import { Layers, Lock, Lightbulb } from "lucide-react";
import { TiMessages } from "react-icons/ti";
import { Poppins } from "next/font/google";
import { AppContext } from "@/context/Appcontext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Features = () => {
  const { features } = useContext(AppContext);

  if (!features) return <p className="text-center py-10">Loading features...</p>;

  return (
    <section id="features" className="w-full py-16 bg-white">
      <div className="Mycontainer max-w-6xl mx-auto flex items-center flex-col text-center">
        <span
          className={`${poppins.className} inline-flex items-center gap-2 px-4 py-1 mb-4 text-sm font-medium text-black bg-gray-100 rounded-full`}
        >
          <Lightbulb className="w-5 h-5 text-[#7d4fe0]" strokeWidth={2} />
          {features.top}
        </span>

        <h2
          className={`${poppins.className} text-[32px] sm:text-4xl md:text-5xl lg:w-[50%] md:w-full font-[600] mb-3 leading-snug sm:leading-snug md:leading-tight`}
        >
          {features.heading}
        </h2>

        <div className="flex justify-center mb-2">
          <div className="w-16 h-1 bg-[#7d4fe0] rounded-full"></div>
        </div>

        <p
          className={`${poppins.className} text-[#5c5a57] max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed`}
        >
          {features.paragraph}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-10 rounded-2xl shadow-md border border-gray-100 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out">
            <div className="flex justify-center mb-4">
              <Layers className="w-10 h-10 text-[#5ca1fa]" />
            </div>
            <h3 className={`${poppins.className} text-[24px] font-[600] mb-2`}>
              {features.card1heading}
            </h3>
            <p className={`${poppins.className} text-gray-600 text-center leading-relaxed`}>
              {features.card1paragraph}
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-10 rounded-2xl shadow-md border border-gray-100 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out">
            <div className="flex justify-center mb-4">
              <TiMessages className="w-10 h-10 text-[#ff907d]" />
            </div>
            <h3 className={`${poppins.className} text-[24px] font-[600] mb-2`}>
              {features.card2heading}
            </h3>
            <p className={`${poppins.className} text-gray-600 text-center leading-relaxed`}>
              {features.card2paragraph}
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-10 rounded-2xl shadow-md border border-gray-100 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out">
            <div className="flex justify-center mb-4">
              <Lock className="w-10 h-10 text-[#8585f2]" />
            </div>
            <h3 className={`${poppins.className} text-[24px] font-[600] mb-2`}>
              {features.card3heading}
            </h3>
            <p className={`${poppins.className} text-gray-600 text-center leading-relaxed`}>
              {features.card3paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
