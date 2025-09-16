import React from "react";
import Image from "next/image";
import thumb2 from "@/Assets/thumb-2.png"
import {
  CheckCircleIcon,
  ArrowsPointingOutIcon,
  AdjustmentsHorizontalIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

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
            className="w-[500px] lg:w-[500px] xl:w-[650px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* Right content */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-snug">
            Easily communicate <br /> with clients using <span className="text-black">sApp.</span>
          </h2>

          {/* Feature list */}
          <ul className="space-y-5 mb-10">
            {points.map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[#7d4fe0] flex-shrink-0" />
                <span className="text-gray-700 text-lg">{text}</span>
              </li>
            ))}
          </ul>

          {/* Bottom action icons */}
          <div className="flex gap-4">
            <button className="p-3 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition">
              <ArrowsPointingOutIcon className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition">
              <AdjustmentsHorizontalIcon className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition">
              <ArrowRightCircleIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicateSection;
