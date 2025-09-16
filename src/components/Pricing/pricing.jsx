"use client";

import { FaBicycle, FaMotorcycle } from "react-icons/fa";

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-20 bg-gray-100">
      <div className="Mycontainer text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Unlock Full Power Of sApp
        </h2>

        {/* Purple Line */}
        <div className="w-20 h-1 bg-purple-600 rounded-full mx-auto mt-4"></div>

        {/* Subtitle */}
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Maximize your potential by unlocking advanced features and tools that
          give you complete control over your landing page designs and
          performance.
        </p>

        {/* Pricing Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white shadow-md rounded-xl p-8 border border-gray-100 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <FaBicycle className="w-14 h-14 text-[#7d4fe0] mb-4" />
            <h3 className="text-sm font-semibold tracking-widest text-gray-700 mb-2">
              BASIC
            </h3>
            <p className="text-4xl font-extrabold text-[#6943de] mb-6">
              $49
            </p>
            <ul className="text-gray-600 space-y-3 mb-8">
              <li>5GB Linux Web Space</li>
              <li>5 MySQL Databases</li>
              <li>24/7 Tech Support</li>
              <li>Daily Backups</li>
            </ul>
            <button className="bg-[#6943de] text-white px-6 py-2 rounded-md hover:bg-purple-700 transition">
              Sign Up
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white shadow-md rounded-xl p-8 border border-gray-100 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <FaMotorcycle className="w-14 h-14 text-[#7d4fe0] mb-4" />
            <h3 className="text-sm font-semibold tracking-widest text-gray-700 mb-2">
              PRO
            </h3>
            <p className="text-4xl font-extrabold text-[#6943de] mb-6">
              $129
            </p>
            <ul className="text-gray-600 space-y-3 mb-8">
              <li>10GB Linux Web Space</li>
              <li>50 MySQL Databases</li>
              <li>Unlimited Email</li>
              <li>Daily Backups</li>
            </ul>
            <button className="bg-[#6943de] text-white px-6 py-2 rounded-md hover:bg-purple-700 transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 mt-10">
          Not sure what to choose?{" "}
          <a href="#" className="text-[#6943de] font-medium hover:underline">
            Contact Us
          </a>
        </p>
      </div>
    </section>
  );
}
