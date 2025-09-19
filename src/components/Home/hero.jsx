"use client";

import Image from "next/image";
import Background from "@/Assets/welcome-bg.jpg";
import playstor from "@/Assets/app-store.png";
import google from "@/Assets/google-play.png";
import hero from "@/Assets/hero-thumb.png";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div id="hero" className="relative">
      {/* Background Image */}
      <Image
        src={Background}
        alt="background"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5337de]/95 to-[#7b53e0]/90"></div>

      {/* Hero Section */}
      <section className="Mycontainer relative w-full">
        <div className="relative z-10 container mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-24 md:pt-32">
          
          {/* ✅ Left Text */}
          <div className="order-1 space-y-6 text-left md:w-full">
            <h1
              className={`
                font-semibold ${poppins.className}
                text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl
                leading-tight md:leading-snug lg:leading-[1.15]
                text-white
                max-w-xl md:max-w-full
              `}
            >
              Make cool <br /> Landing pages <br /> with sApp
            </h1>

            <p
              className={`
                ${poppins.className}
                text-xl font-[300] sm:text-base md:text-lg lg:text-xl
                leading-relaxed md:leading-7 lg:leading-8
                text-white
                max-w-md md:max-w-lg
              `}
            >
              Create stunning and highly functional landing pages effortlessly
              with sApp, designed to help you capture attention and drive
              conversions.
            </p>

            {/* Store Badges + Extra Line */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row gap-3 justify-start items-start">
                <a href="#">
                  <Image
                    src={google}
                    alt="Google Play"
                    width={200}
                    height={900}
                    className="object-contain w-43 sm:w-40 md:w-44 lg:w-47 h-auto"
                  />
                </a>
                <a href="#">
                  <Image
                    src={playstor}
                    alt="App Store"
                    width={180}
                    height={70}
                    className="object-contain w-43 sm:w-40 md:w-44 lg:w-47 h-auto"
                  />
                </a>
              </div>

              <p
                className={`${poppins.className} text-xs sm:text-xl md:text-base italic text-white`}
              >
                * Available on iPhone, iPad and all Android devices
              </p>
            </div>
          </div>

          {/* ✅ Right Image (Phone Mockup) */}
          <div className="order-2 flex justify-center md:justify-end">
            <Image
              src={hero}
              alt="App Screenshot"
              width={320}
              height={520}
              className="drop-shadow-2xl object-contain max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] h-auto
              md:translate-x-[-60px] lg:translate-x-[-100px]"
            />
          </div>
        </div>
      </section>

      {/* ✅ Bottom Wave */}
      <div className="relative">
        <div className="relative h-16 sm:h-28 md:h-36 lg:h-48">
          <svg
            viewBox="0 0 1920 863"
            className="absolute bottom-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M-3,551 C186.257589,757.321118 319.044414,856.322454 
                 395.360475,848.004007 C509.834566,835.526337 
                 561.525143,796.329212 637.731734,765.961549 
                 C713.938325,735.593886 816.980646,681.910577 
                 1035.72208,733.065469 C1254.46351,784.220361 
                 1511.54925,678.92359 1539.40808,662.398665 
                 C1567.2669,645.87374 1660.9143,591.478574 
                 1773.19378,597.641868 C1848.04677,601.75073 
                 1901.75645,588.357675 1934.32284,557.462704 
                 L1934.32284,863.183395 L-3,863.183395"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
