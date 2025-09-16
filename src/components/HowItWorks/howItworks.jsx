import React from "react";
import {
  CloudArrowDownIcon,
  AdjustmentsHorizontalIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    id: 1,
    title: "Install the App",
    desc: "Easily download and install the app from your preferred app store to begin your journey and access all its exciting features.",
    icon: <CloudArrowDownIcon className="w-17 h-17 text-white mx-auto" />,
  },
  {
    id: 2,
    title: "Setup your profile",
    desc: "Create and customize your profile to tailor your experience and connect with others quickly and effortlessly, ensuring a seamless journey.",
    icon: <AdjustmentsHorizontalIcon className="w-17 h-17 text-white mx-auto" />,
  },
  {
    id: 3,
    title: "Enjoy the features!",
    desc: "Utilize the app's powerful features designed to enhance your experience and productivity, helping you achieve more with ease.",
    icon: <DevicePhoneMobileIcon className="w-17 h-17 text-white mx-auto" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#7751e0] to-[#7751e0] py-16 md:py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-snug">
          How sApp works?
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 md:mb-16 opacity-90">
          Explore the intuitive and powerful features of sApp, making it easy to
          build, customize, and launch effective landing pages in just a few
          steps.
        </p>

        {/* Steps with arrows */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {steps.map((step, idx) => (
            <React.Fragment key={step.id}>
              {/* Step box */}
              <div className="flex flex-col items-center text-center max-w-xs md:max-w-sm">
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-90">
                  {step.desc}
                </p>
              </div>

              {/* Arrow between steps (only if not last) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-4xl font-bold text-white/90">
                  →
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
