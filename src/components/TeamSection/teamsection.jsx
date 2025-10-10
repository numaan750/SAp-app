"use client";
import { useContext, useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Poppins } from "next/font/google";
import { AppContext } from "@/context/Appcontext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function TeamSection() {
  const [active, setActive] = useState(null);

  const {team} = useContext(AppContext);
  
  if (!team) return <p className="text-center py-10">Loading team...</p>;

  return (
    <section
      className={`${poppins.className} w-full flex items-center bg-white mb-20`}
    >
      <div className="Mycontainer text-center w-full">
        {/* Heading */}
        <h2 className="font-semibold text-[32px] md:text-[48px] text-gray-900">
          {team.heading}
        </h2>

        {/* Line under heading */}
        <div className="w-16 h-[3px] bg-purple-600 rounded-full mx-auto mt-3"></div>

        {/* Subtitle */}
        <p className="font-normal text-[16px] text-gray-600 mt-4 max-w-2xl mx-auto">
          {team.paragraph}
        </p>

        {/* Team Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Member 1 */}
          <div
            className="relative group overflow-hidden rounded-xl shadow-md aspect-square cursor-pointer"
            onClick={() => setActive(active === 1 ? null : 1)}
          >
            <img
              src={team.image1}
              alt="Michael Turner"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 bg-[#6d45d9] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
                active === 1
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
              }`}
            >
              <h3 className="font-semibold text-[24px] text-white mb-2">
                {team.Name1}
              </h3>
              <p className="font-normal text-[16px] text-gray-200 mb-4">
                {team.role1}
              </p>
              <div className="flex gap-3">
                {[FaLinkedinIn, FaGithub, FaXTwitter].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-9 h-9 flex items-center justify-center rounded-md bg-white hover:bg-gray-100 transition"
                  >
                    <Icon className="text-[#7d4fe0]" size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Member 2 */}
          <div
            className="relative group overflow-hidden rounded-xl shadow-md aspect-square cursor-pointer"
            onClick={() => setActive(active === 2 ? null : 2)}
          >
            <img
              src={team.image2}
              alt="Sarah Jenkins"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 bg-[#6d45d9] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
                active === 2
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
              }`}
            >
              <h3 className="font-semibold text-[24px] text-white mb-2">
                {team.Name2}
              </h3>
              <p className="font-normal text-[16px] text-gray-200 mb-4">
                {team.role2}
              </p>
              <div className="flex gap-3">
                {[FaLinkedinIn, FaGithub, FaXTwitter].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-9 h-9 flex items-center justify-center rounded-md bg-white hover:bg-gray-100 transition"
                  >
                    <Icon className="text-[#7d4fe0]" size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Member 3 */}
          <div
            className="relative group overflow-hidden rounded-xl shadow-md aspect-square cursor-pointer"
            onClick={() => setActive(active === 3 ? null : 3)}
          >
            <img
              src={team.image3}
              alt="Amanda Clark"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 bg-[#6d45d9] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
                active === 3
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
              }`}
            >
              <h3 className="font-semibold text-[24px] text-white mb-2">
                {team.Name3}
              </h3>
              <p className="font-normal text-[16px] text-gray-200 mb-4">
                {team.role3}
              </p>
              <div className="flex gap-3">
                {[FaLinkedinIn, FaGithub, FaXTwitter].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-9 h-9 flex items-center justify-center rounded-md bg-white hover:bg-gray-100 transition"
                  >
                    <Icon className="text-[#7d4fe0]" size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Member 4 */}
          <div
            className="relative group overflow-hidden rounded-xl shadow-md aspect-square cursor-pointer"
            onClick={() => setActive(active === 4 ? null : 4)}
          >
            <img
              src={team.image4}
              alt="David Wilson"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 bg-[#6d45d9] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
                active === 4
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
              }`}
            >
              <h3 className="font-semibold text-[24px] text-white mb-2">
                {team.Name4}
              </h3>
              <p className="font-normal text-[16px] text-gray-200 mb-4">
                {team.role4}
              </p>
              <div className="flex gap-3">
                {[FaLinkedinIn, FaGithub, FaXTwitter].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-9 h-9 flex items-center justify-center rounded-md bg-white hover:bg-gray-100 transition"
                  >
                    <Icon className="text-[#7d4fe0]" size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
