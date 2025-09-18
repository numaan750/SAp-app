"use client";
import { useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter) icon
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const teamMembers = [
  {
    id: 1,
    name: "Michael Turner",
    role: "CEO, WebCraft Solutions",
    img: "/avatar-1.png",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Product Designer, Innovate Labs",
    img: "/avatar-2.png",
  },
  {
    id: 3,
    name: "Amanda Clark",
    role: "UX/UI Specialist, Pixel Hive",
    img: "/avatar-3.png",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Frontend Developer, CodeBase",
    img: "/avatar-4.png",
  },
];

export default function TeamSection() {
  const [active, setActive] = useState(null); // mobile ke liye

  return (
    <section
      className={`${poppins.className} w-full min-h-screen flex items-center bg-white mb-20`}
    >
      <div className="Mycontainer text-center w-full">
        {/* Heading */}
        <h2 className="font-semibold text-[32px] md:text-[48px] text-gray-900">
          Our Team Experts
        </h2>

        {/* Line under heading */}
        <div className="w-16 h-[3px] bg-purple-600 rounded-full mx-auto mt-3"></div>

        {/* Subtitle */}
        <p className="font-normal text-[16px] text-gray-600 mt-4 max-w-2xl mx-auto">
          Meet the talented team of professionals behind us, dedicated to
          providing innovative solutions and exceptional support to help you
          succeed.
        </p>

        {/* Team Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative group overflow-hidden rounded-xl shadow-md aspect-square cursor-pointer"
              onClick={() => setActive(active === member.id ? null : member.id)} // mobile click toggle
            >
              {/* Member Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`
                  absolute inset-0 bg-[#6d45d9] flex flex-col items-center justify-center
                  transition-all duration-500 ease-in-out
                  ${active === member.id ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"}
                `}
              >
                <h3 className="font-semibold text-[24px] text-white mb-2">
                  {member.name}
                </h3>
                <p className="font-normal text-[16px] text-gray-200 mb-4">
                  {member.role}
                </p>

                {/* Social Icons */}
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
          ))}
        </div>
      </div>
    </section>
  );
}
