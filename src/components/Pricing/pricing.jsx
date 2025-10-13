"use client";

import { GiScooter } from "react-icons/gi";
import { GiDutchBike } from "react-icons/gi";

import { Poppins } from "next/font/google";
import { useContext } from "react";
import { AppContext } from "@/context/appcontext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Pricing() {

   const {pricing} = useContext(AppContext);
   if (!pricing)  return <p className="text-center py-10">Loading reviews...</p>;

  return (
    <section
      id="pricing"
      className={`${poppins.className} w-full  py-20 bg-[#f7faff]`}
    >
      <div className="Mycontainer text-center">
        {/* Heading */}
        <h2 className="text-[32px] md:text-[48px] font-semibold text-gray-900">
          {pricing.heading}
        </h2>

        {/* Purple Line */}
        <div className="w-15 h-[4px] bg-[#7d4fe0] rounded-full mx-auto mt-1"></div>

        {/* Subtitle */}
        <p className="text-[16px] font-normal text-[#665a57] mt-4 max-w-2xl mx-auto leading-relaxed">
          {pricing.paragraph}
        </p>

        {/* Pricing Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white shadow-sm hover:shadow-md rounded-xl p-10 border border-gray-200/40 flex flex-col items-center min-h-[550px] relative transition">
            <GiDutchBike className="w-25 h-25 text-[#9470e6] mb-6" />
            <h3 className="text-[19px] font-semibold text-[#212121] mb-2">
              {pricing.maintext1}
            </h3>
            <p className="text-[48px] font-bold text-[#6840de] mb-6">{pricing.price1}</p>
            <ul className="text-[#212529] w-full space-y-6 mb-10 text-[16px] font-normal">
              <li className="pb-3 border-b border-gray-200">
                {pricing.card1smalltext1}
              </li>
              <li className="pb-3 border-b border-gray-200">
                {pricing.card1smalltext2}
              </li>
              <li className="pb-3 border-b border-gray-200">
                {pricing.card1smalltext3}
              </li>
              <li className="pb-0">{pricing.card1smalltext4}</li>
            </ul>

            {/* Button */}
            <button
              className="
                bg-gradient-to-r from-[#4a2cde] to-[#7d4fe0] 
                text-white px-8 py-3 rounded-lg font-semibold text-[16px] shadow-md
                mx-auto
                relative md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-[-24px]
              "
            >
              {pricing.buttontext1}
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white shadow-sm hover:shadow-md rounded-xl p-10 border border-gray-200/40 flex flex-col items-center min-h-[550px] relative transition">
            <GiScooter className="w-25 h-25 text-[#7d4fe0] mb-6" />
            <h3 className="text-[19px] font-semibold text-[#212121] mb-2">
              {pricing.maintext2}
            </h3>
            <p className="text-[48px] font-bold text-[#6840de] mb-6">{pricing.price2}</p>
            <ul className="text-[#212529] w-full space-y-6 mb-10 text-[16px] font-normal">
              <li className="pb-3 border-b border-gray-200">
               {pricing.card2smalltext1}
              </li>
              <li className="pb-3 border-b border-gray-200">
                {pricing.card2smalltext2}
              </li>
              <li className="pb-3 border-b border-gray-200">{pricing.card2smalltext3}</li>
              <li className="pb-0">{pricing.card2smalltext4}</li>
            </ul>

            {/* Button */}
            <button
              className="
                bg-gradient-to-r from-[#4a2cde] to-[#7d4fe0] 
                text-white px-8 py-3 rounded-lg font-semibold text-[16px] shadow-md
                mx-auto
                relative md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-[-24px]
              "
            >
             {pricing.buttontext2}
            </button>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-[16px] font-medium text-[#575757] mt-16">
          {pricing.copyrighttext}{" "}
          <a href="#" className="text-[#7d4fe0] hover:underline">
            Contact Us
          </a>
        </p>
      </div>
    </section>
  );
}
