"use client";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export function DownloadSection() {
  return (
    <section
      className={`${poppins.className} relative w-full lg:py-20 bg-cover bg-center flex items-center justify-center bg-fixed`}
      style={{ backgroundImage: "url('download-bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(16,16,45,1)]/85"></div>

      {/* Content */}
      <div className="relative z-10 Mycontainer text-center text-white flex flex-col justify-center items-center px-4 py-12 sm:py-0">
        
        {/* Heading */}
        <h2 className="font-semibold text-[32px] sm:text-[36px] md:text-[48px] leading-tight mb-6">
          sApp is available for all devices
        </h2>

        {/* Paragraph */}
        <p className="font-normal text-[14px] sm:text-[16px] md:text-[14px] leading-relaxed max-w-md sm:max-w-lg md:max-w-2xl mb-10">
          Enjoy the versatility of sApp, designed to seamlessly function on all
          devices. Whether you’re using a smartphone, tablet, or desktop,
          download the app now and experience its powerful features anytime,
          anywhere!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
          <img
            src="/google-play.png"
            alt="Google Play"
            className="h-14 sm:h-16 md:h-16 cursor-pointer"
          />
          <img
            src="/app-store.png"
            alt="App Store"
            className="h-14 sm:h-16 md:h-16 cursor-pointer"
          />
        </div>

        {/* Small Text */}
        <p className="font-light italic text-[14px] md:text-[16px] text-gray-200">
          * Available on iPhone, iPad and all Android devices
        </p>
      </div>
    </section>
  );
}
