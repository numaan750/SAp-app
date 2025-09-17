import React from "react";
import {
  IoCloudDownloadOutline
} from "react-icons/io5";
import { TbAdjustments, TbDeviceMobileCog } from "react-icons/tb";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const steps = [
  {
    id: 1,
    title: "Install the App",
    desc: "Easily download and install the app from your preferred app store to begin your journey and access all its exciting features.",
    icon: (
      <IoCloudDownloadOutline className="w-19 h-19 md:w-17 md:h-17 text-white mx-auto" />
    ),
  },
  {
    id: 2,
    title: "Setup your profile",
    desc: "Create and customize your profile to tailor your experience and connect with others quickly and effortlessly, ensuring a seamless journey.",
    icon: (
      <TbAdjustments className="w-19 h-19 md:w-17 md:h-17 text-white mx-auto" />
    ),
  },
  {
    id: 3,
    title: "Enjoy the features!",
    desc: "Utilize the app's powerful features designed to enhance your experience and productivity, helping you achieve more with ease.",
    icon: (
      <TbDeviceMobileCog className="w-19 h-19 md:w-17 md:h-17 text-white mx-auto" />
    ),
  },
];

const HowItWorks = () => {
  return (
    <section
      className="w-full min-h-screen md:h-screen flex items-start md:items-center 
      bg-gradient-to-r from-[#5337de] via-[#6948e1] to-[#8056e3] 
      text-white py-16 md:py-0"
    >
      <div className="Mycontainer max-w-6xl text-center flex flex-col items-center">
        {/* Heading */}
        <h2
          className={`${poppins.className} font-semibold text-4xl sm:text-4xl lg:text-5xl mb-4 leading-snug max-w-2xl mx-auto`}
        >
          How sApp works?
        </h2>

        {/* Paragraph */}
        <p
          className={`${poppins.className} font-normal text-base sm:text-lg md:text-xl mx-auto mb-12 md:mb-16 opacity-90 leading-tight max-w-3xl`}
        >
          Explore the intuitive and powerful features of sApp, making it easy to
          build,<br className="hidden sm:block" />
          customize, and launch effective landing pages in just a few steps.
        </p>

        {/* Steps with chevron arrows */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-9 md:gap-2 w-full">
          {steps.map((step, idx) => (
            <React.Fragment key={step.id}>
              {/* Step box */}
              <div className="flex flex-col items-center text-center max-w-xs md:max-w-sm px-4">
                <div className="mb-6 flex justify-center">{step.icon}</div>
                <h3
                  className={`${poppins.className} font-semibold text-lg sm:text-xl md:text-2xl mb-3`}
                >
                  {step.title}
                </h3>
                <p
                  className={`${poppins.className} font-normal text-sm sm:text-base md:text-lg opacity-90 leading-relaxed`}
                >
                  {step.desc}
                </p>
              </div>

              {/* Chevron Arrow (only if not last) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center">
                  <span className="text-white text-9xl font-light transition-transform duration-300 ease-out hover:translate-x-2 cursor-pointer">
                    ›
                  </span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
