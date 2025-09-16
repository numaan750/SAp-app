"use client";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

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
  return (
    <section className="w-full py-20 bg-white">
      <div className="Mycontainer text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Team Experts
        </h2>

        {/* Line under heading */}
        <div className="w-20 h-1 bg-purple-600 rounded-full mx-auto mt-4"></div>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Meet the talented team of professionals behind us, dedicated to providing
          innovative solutions and exceptional support to help you succeed.
        </p>

        {/* Team Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative group overflow-hidden rounded-xl shadow-md"
            >
              {/* Member Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[300px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white font-bold text-lg">{member.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{member.role}</p>

                {/* Social Icons */}
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-white hover:text-blue-500 transition"
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-blue-400 transition"
                  >
                    <FaTwitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-blue-600 transition"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-pink-500 transition"
                  >
                    <FaInstagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
