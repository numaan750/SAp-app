"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Logo from "@/Assets/logo.png";
import Google from "@/Assets/google-img.png";
import App from "@/Assets/app-store-img.png";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Footer = () => {
  return (
    <footer
      className={`${poppins.className} bg-white text-gray-800 border-t border-gray-200`}
    >
      {/* Top Section */}
      <div
        className="
         Mycontainer mx-auto py-12 
          grid grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-4 
          gap-10
        "
      >
        {/* Logo + Description */}
        <div>
          <div className="flex items-center mb-4">
            <Image src={Logo} alt="Logo.png" width={55} height={55} />
          </div>
          <p className="text-[16px] font-normal text-[#575757] mb-14 leading-relaxed">
            The Next-Level Solutions for Landing Pages. Perfect Touch Enhances
            your Business.
          </p>
          <div className="flex space-x-3">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center 
             rounded 
             bg-gradient-to-br from-[#5337de] to-[#7b53e0]"
              >
                <Icon className="text-[16px] font-normal text-white transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-90" />
              </a>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-[24px] mb-5">Useful Links</h3>
          <ul className="space-y-3">
            {["Home", "About Us", "Services", "Blog", "Contact"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-[16px] font-medium hover:text-[#7e51e0] hover:font-semibold transition"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Product Help */}
        <div>
          <h3 className="font-semibold text-[24px] mb-5">Product Help</h3>
          <ul className="space-y-3">
            {[
              "FAQ",
              "Privacy Policy",
              "Support",
              "Terms & Conditions",
              "Contact",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-[16px] font-medium hover:text-[#7e51e0] hover:font-semibold transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Download */}
        <div>
          <h3 className="font-semibold text-[24px] mb-5">Download</h3>
          <div
            className="
              grid grid-cols-1 
              gap-6 place-items-start
              only-425:grid-cols-2
            "
          >
            <a
              href="#"
              className="transform transition hover:scale-105 text-[16px] font-normal"
            >
              <Image
                src={Google}
                alt="google-img.png"
                className="rounded-lg w-40 sm:w-48 md:w-56 h-auto"
              />
            </a>
            <a
              href="#"
              className="transform transition hover:scale-105 text-[16px] font-normal"
            >
              <Image
                src={App}
                alt="app-store-img.png"
                className="rounded-lg w-40 sm:w-48 md:w-56 h-auto"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="
          Mycontainer border-t border-gray-200 py-5 px-6 
          flex flex-col 
          md:flex-row 
          items-center md:items-start 
          justify-between 
          text-center md:text-left
        "
      >
        <span className="text-[16px] font-normal mb-2 md:mb-0">
          © 2020–2025 sApp | All rights reserved.
        </span>
        <span className="text-[16px] font-normal">
          Made with <span className="text-black">♥</span> By{" "}
          <a href="#" className="text-[#7e51e0] hover:underline font-medium">
            Themeland
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
