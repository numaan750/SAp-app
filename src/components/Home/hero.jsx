"use client";

import Image from "next/image";
import Background from "@/Assets/welcome-bg.jpg";
import { Poppins } from "next/font/google";
import { AppContext } from "@/context/appcontext";
import { useContext, useEffect, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const { hero } = useContext(AppContext);

  // Normalize hero (API might return an array or object)
  const currentHero = Array.isArray(hero) ? hero[0] : hero;

  // local state for filtered images (no empty strings / falsy)
  const [myImages, setMyImages] = useState([]);

  useEffect(() => {
    if (!currentHero) {
      setMyImages([]);
      return;
    }

    const imgs = Array.isArray(currentHero.images) ? currentHero.images : [];
    // remove null/undefined/empty-string entries
    setMyImages(imgs.filter((i) => typeof i === "string" && i.trim() !== ""));
  }, [currentHero]);

  console.log("Hero data from context:", hero);

  if (!currentHero) return <div>No data found</div>;

  return (
    <div id="hero" className="relative">
      {/* Background (local import uses next/image safely) */}
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
          {/* Left Text */}
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
              {currentHero?.heading}
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
              {currentHero?.paragraph}
            </p>

            {/* Store Badges + Copyright */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row gap-3 justify-start items-start">
                {myImages.length > 0 ? (
                  myImages.map((src, idx) => (
                    // using normal <img> for badges avoids next/image domain config issues in dev
                    <a href="#" key={idx} className="inline-block">
                      <img
                        src={src}
                        alt={`badge-${idx}`}
                        width={200}
                        height={70}
                        className="object-contain w-43 sm:w-40 md:w-44 lg:w-47 h-auto"
                        onError={(e) => {
                          // fallback to local placeholder if remote fails or is blocked
                          e.currentTarget.src = "/placeholder.png";
                        }}
                      />
                    </a>
                  ))
                ) : (
                  // fallback placeholders when no images provided
                  <>
                    <a href="#">
                      <img
                        src="/placeholder.png"
                        alt="placeholder-1"
                        width={200}
                        height={70}
                        className="object-contain"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="/placeholder.png"
                        alt="placeholder-2"
                        width={180}
                        height={70}
                        className="object-contain"
                      />
                    </a>
                  </>
                )}
              </div>

              <p className={`${poppins.className} text-xs sm:text-xl md:text-base italic text-white`}>
                {currentHero?.copyright}
              </p>
            </div>
          </div>

          {/* Right Image (Phone Mockup) */}
          <div className="order-2 flex justify-center md:justify-end">
            {/* Use <img> for mainImage too to avoid next/image hostname config during development.
                If your mainImage is served from your own domain or you add domain to next.config.js,
                you can replace this with <Image src={...} ... /> */}
            {currentHero?.mainImage ? (
              <img
                src={currentHero.mainImage}
                alt="App Screenshot"
                width={320}
                height={520}
                className="drop-shadow-2xl object-contain max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] h-auto md:translate-x-[-60px] lg:translate-x-[-100px]"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.png";
                }}
              />
            ) : (
              <img
                src="/placeholder.png"
                alt="placeholder-screenshot"
                width={320}
                height={520}
                className="drop-shadow-2xl object-contain"
              />
            )}
          </div>
        </div>
      </section>

      {/* Bottom Wave (unchanged) */}
      <div className="relative">
        <div className="relative h-16 sm:h-28 md:h-36 lg:h-48">
          <svg viewBox="0 0 1920 863" className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none">
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
