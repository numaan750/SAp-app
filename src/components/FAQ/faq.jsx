"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const faqs = [
  {
    question: "How to install sApp?",
    answer:
      "To install sApp, follow the step-by-step instructions in the provided documentation. It covers everything you need to set up and customize the theme effortlessly.",
  },
  {
    question: "How can I edit my personal information?",
    answer:
      "You can easily edit your personal information in the account settings section. Changes will be updated immediately.",
  },
  {
    question: "Do you have a free trial?",
    answer:
      "Yes! We offer a free trial so you can experience the platform before committing to a plan.",
  },
  {
    question: "Can I get support from the Author?",
    answer:
      "Absolutely! You can contact the author anytime for premium support and assistance.",
  },
  {
    question: "Contact form isn’t working?",
    answer:
      "If the contact form isn’t working, please check your email configuration settings or reach out to our support team.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${poppins.className} w-full py-16 sm:py-20 bg-white`}>
      <div className="Mycontainer text-center px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="font-bold text-[32px] md:text-[48px] text-gray-900 leading-snug">
          Frequently Asked{" "}
          <span className="hidden md:inline">
            <br />
          </span>{" "}
          Questions
        </h2>

        {/* Purple Line */}
        <div className="w-12 sm:w-14 h-[3px] sm:h-[4px] bg-[#7d4fe0] rounded-full mx-auto mt-1 sm:mt-2"></div>

        {/* Subtitle */}
        <p className="font-normal text-[15px] sm:text-[17px] text-[#56596b] mt-2 sm:mt-3 max-w-3xl mx-auto leading-relaxed">
          Find answers to the most common questions, covering everything from
          setup to advanced features, to help you get the most out of the
          platform.
        </p>

        {/* FAQ List */}
        <div className="mt-10 sm:mt-14 max-w-5xl mx-auto space-y-3 sm:space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="transition">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 text-left font-medium bg-[#f7faff]  transition rounded-lg"
              >
                <span className=" text-[18px] sm:text-[21px] text-[#212121] font-[500] leading-snug">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <MinusIcon className="w-5 h-5 sm:w-6  sm:h-6 md:w-7 md:h-7 text-[#212121] flex-shrink-0" />
                ) : (
                  <PlusIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#212121] flex-shrink-0" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 sm:px-5 pt-2 sm:pt-3 pb-4 sm:pb-5 text-[14px] sm:text-[16px] leading-relaxed text-gray-600 font-[400]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
