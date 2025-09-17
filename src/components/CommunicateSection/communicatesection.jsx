import React from "react";
import Image from "next/image";
import thumb2 from "@/Assets/thumb-2.png";
import { Poppins } from "next/font/google";
import { FiCheckCircle } from "react-icons/fi";
import { TbArrowsMove } from "react-icons/tb";        // 1st icon (move/resize type)
import { TbArrowsLeftRight } from "react-icons/tb";   // 2nd icon (left-right arrows)
import { TbArrowRightCircle } from "react-icons/tb";  // 3rd icon (right arrow with circle)


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const points = [
  "Utilize integrated messaging features to ensure seamless communication with clients at any time.",
  "Schedule video calls and meetings directly within the app for efficient discussions and feedback.",
  "Share project updates and documents in real-time to keep clients informed and engaged.",
  "Track client interactions and communication history for better relationship management and follow-ups.",
];

const CommunicateSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="Mycontainer max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 lg:px-12">
        
        {/* Left image */}
        <div className="flex justify-center">
          <Image
            src={thumb2}
            alt="App"
            className="w-[350px] sm:w-[450px] md:w-[600px] lg:w-[700px] xl:w-[800px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* Right content */}
        <div>
          <h2
            className={`${poppins.className} text-3xl sm:text-4xl md:text-5xl lg:text-5xl 
              font-semibold text-gray-900 
              leading-snug md:leading-tight text-left w-full mb-8`}
          >
            Easily communicate <br /> with clients using{" "}
            <span className="text-black">sApp.</span>
          </h2>

          {/* Feature list */}
          <ul className="space-y-6 mb-12">
            {points.map((text, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <FiCheckCircle className="w-8 h-8 text-[#7d4fe0] flex-shrink-0" />
                <span
                  className={`${poppins.className} font-normal text-gray-700 text-base sm:text-lg`}
                >
                  {text}
                </span>
              </li>
            ))}
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
