"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { useContext } from "react";
import { appContext } from "@/context/appcontext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ContactSection() {
  
  const {contectus} = useContext(appContext);

  if (!contectus)  return <p className="text-center py-10">Loading contectus...</p>;

  return (
    <section
      id="contact"
      className={`${poppins.className} relative w-full py-20 bg-[#f9fbff] flex items-center`}
    >
      <div className="Mycontainer max-w-7xl mx-auto w-full">
        {/* Top Heading Center (always center) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-semibold text-[32px] md:text-[48px] text-gray-900 leading-snug">
            {contectus.mainheading}
          </h2>
          <div className="w-15 h-1 bg-[#6840de] rounded-full mt-2 mb-3 mx-auto"></div>
          <p className="font-normal text-[16px] md:text-[18px] text-gray-600">
             {contectus.mainparagraph}
          </p>
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div className="text-left">
            <h3 className="font-semibold text-[28px] md:text-[32px] text-gray-900 mb-4 leading-snug">
              {contectus.heading} <br className="hidden md:block" />
              
            </h3>
            <p className="font-normal text-[16px] text-gray-600 mb-8 leading-relaxed max-w-lg lg:max-w-md">
               {contectus.paragraph}
            </p>

            {/* Contact Info */}
            <ul className="space-y-6">
              <li className="flex items-center gap-4 border-b border-gray-200 pb-4">
                <div className="w-14 h-14 flex items-center justify-center bg-[#7d4fe0] text-white rounded-lg">
                  <FaPhoneAlt size={24} />
                </div>
                <span className="font-normal text-[19px] text-gray-800">
                  {contectus.text1}
                </span>
              </li>

              <li className="flex items-center gap-4 border-b border-gray-200 pb-4">
                <div className="w-14 h-14 flex items-center justify-center bg-[#7d4fe0] text-white rounded-lg">
                  <FaEnvelope size={24} />
                </div>
                <span className="font-normal text-[19px] text-gray-800">
                  {contectus.text2}
                </span>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-[#7d4fe0] text-white rounded-lg">
                  <FaMapMarkerAlt size={24} />
                </div>
                <span className="font-normal text-[19px] text-gray-800">
                  {contectus.text3}
                </span>
              </li>
            </ul>
          </div>

          {/* Right Side - Contact Form */}
          <form className="space-y-4 text-left">
            <input
              type="text"
              placeholder="Name"
              className="font-normal text-[16px] w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6840de]"
            />
            <input
              type="email"
              placeholder="Email address"
              className="font-normal text-[16px] w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6840de]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="font-normal text-[16px] w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6840de]"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="font-normal text-[16px] w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6840de]"
            ></textarea>
            <button
              type="submit"
              className="font-semibold text-[16px] px-7 py-5 bg-gradient-to-r from-[#5331de] to-[#7b4ede] text-white rounded-full hover:opacity-90 transition"
            >
              Submit Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
