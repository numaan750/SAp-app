import React from "react";
import { Layers, MessageSquare, Lock } from "lucide-react";
import { Poppins } from "next/font/google";
import { TiMessages } from "react-icons/ti";

import { Lightbulb } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const features = [
  {
    id: 1,
    title: "Fully functional",
    desc: "Enjoy a complete suite of features designed for seamless user experiences.",
    icon: <Layers className="w-10 h-10 text-[#5ca1fa]" />,
  },
  {
    id: 2,
    title: "Live Chat",
    desc: "Connect with your audience in real-time for instant support and engagement.",
    icon:  <TiMessages className="w-10 h-10 text-[#ff907d]" />,
  },
  {
    id: 3,
    title: "Secure Data",
    desc: "Protect your information with industry-leading security measures and encryption.",
    icon: <Lock className="w-10 h-10 text-[#8585f2]" />,
  },
];

const Features = () => {
  return (
    <section id="features" className=" w-full py-16 bg-white">
      <div className="Mycontainer max-w-6xl mx-auto flex items-center flex-col  text-center">
        {/* small badge */}
        <span
          className={`${poppins.className} inline-flex items-center gap-2 px-4 py-1 mb-4 text-sm font-medium text-black bg-gray-100 rounded-full`}
        >
          <Lightbulb className="w-5 h-5 text-[#7d4fe0]" strokeWidth={2} />
          Premium Features
        </span>

        {/* heading */}
        <h2
          className={`
    ${poppins.className}
    text-[32px] sm:text-4xl md:text-5xl lg:w-[50%] md:w-full w-full
    font-[600] mb-3 
    leading-snug sm:leading-snug md:leading-tight
  `}
        >
          What Makes sApp Different?
        </h2>
        {/* decorative line under heading */}
        <div className="flex justify-center mb-2">
          <div className="w-16 h-1 bg-[#7d4fe0] rounded-full"></div>
        </div>

        {/* subtitle */}
        <p
          className={`${poppins.className} text-[#5c5a57] max-w-2xl mx-auto mb-12 
              text-base md:text-lg leading-relaxed line-clamp-none md:line-clamp-2`}
        >
          Discover the unique features of sApp that set it apart from the
          competition, designed to deliver unmatched performance and seamless
          user experiences.
        </p>

        {/* feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="p-10 h-75 lg:h-68 rounded-2xl shadow-md border border-gray-100 bg-white 
                         hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out"
            >
              {/* top icon */}
              <div className="flex  justify-center mb-4">{item.icon}</div>

              {/* title */}
              <h3
                className={`${poppins.className} text-[24px] font-[600] mb-2`}
              >
                {item.title}
              </h3>

              {/* paragraph */}
              <p
                className={`${poppins.className} text-gray-600 text-center leading-relaxed`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
