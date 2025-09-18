"use client";
import { Poppins } from "next/font/google";
import Image from "next/image";
import map from "@/Assets/map.png";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function SubscribeSection() {
  return (
    <section
      className={`${poppins.className} relative w-full lg:py-20 py-20 bg-white overflow-hidden flex items-center justify-center`}
    >
      {/* Background world map */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Image
          src={map}
          alt="world map background"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 Mycontainer text-center flex flex-col justify-center items-center px-4">
        {/* Heading */}
        <h2 className="font-semibold text-[32px] md:text-[48px] text-gray-900 leading-snug">
          Subscribe to get updates
        </h2>

        {/* Paragraph */}
        <p className="font-normal text-[16px] text-gray-600 mt-6 max-w-2xl mx-auto">
          Stay in the loop! Subscribe now to receive the latest news, updates,
          and exclusive offers from sApp directly to your inbox.
        </p>

        {/* Input + Button */}
        <form className="mt-8 max-w-lg mx-auto space-y-4 w-full">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#4c2cdb] to-[#7d4fe0] text-white py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            Subscribe →
          </button>
        </form>
      </div>
    </section>
  );
}
