"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

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
    <section className="w-full py-20 bg-white">
      <div className="Mycontainer text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Frequently Asked <br /> Questions
        </h2>

        {/* Purple Line */}
        <div className="w-20 h-1 bg-purple-600 rounded-full mx-auto mt-4"></div>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Find answers to the most common questions, covering everything from
          setup to advanced features, to help you get the most out of the
          platform.
        </p>

        {/* FAQ List */}
        <div className="mt-14 max-w-3xl mx-auto text-left space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition"
              >
                {faq.question}
                {openIndex === index ? (
                  <MinusIcon className="w-5 h-5 text-purple-600" />
                ) : (
                  <PlusIcon className="w-5 h-5 text-purple-600" />
                )}
              </button>

              {/* Smooth dropdown */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 p-6 bg-white"
                    : "max-h-0 opacity-0"
                } overflow-hidden text-gray-600`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
