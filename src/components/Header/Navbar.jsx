"use client";

import { useState, useEffect } from "react";
import { FaChevronDown, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Logo from "@/assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const toggleSubDropdown = (name) => {
    setSubDropdownOpen((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      const currentY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentY > lastScrollY && currentY > 80) {
            setVisible(false);
          } else {
            setVisible(true);
          }

          setScrolled(currentY > 80);
          setLastScrollY(currentY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl  Mycontainer mx-auto  py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={64}
            height={64}
            priority
            className={`object-contain ${scrolled ? "" : "invert brightness-0"}`}
          />
        </div>

        {/* Center: Desktop Nav */}
        <ul
          className={`hidden md:flex items-center space-x-10 font-semibold transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          } text-lg justify-center flex-1`}
        >
          {/* Home dropdown */}
          <li className="relative cursor-pointer group">
            <div className="flex items-center gap-1 hover:text-purple-500 transition-colors">
              Home <FaChevronDown size={12} />
            </div>
            <ul className="absolute left-0 mt-2 z-40 hidden group-hover:block bg-white text-black rounded shadow-md w-48 animate-fadeIn">
              {[...Array(6)].map((_, i) => (
                <li
                  key={i}
                  className="px-4 py-2 hover:bg-purple-100 hover:text-purple-600 cursor-pointer transition-colors"
                >
                  Homepage {i + 1}
                </li>
              ))}
            </ul>
          </li>

          <li className="cursor-pointer hover:text-purple-500 transition-colors">
            Features
          </li>

          {/* Pages dropdown */}
          <li className="relative cursor-pointer group">
            <div className="flex items-center gap-1 hover:text-purple-500 transition-colors">
              Pages <FaChevronDown size={12} />
            </div>
            <ul className="absolute left-0 mt-2 z-40 hidden group-hover:block bg-white text-black rounded shadow-md w-56 animate-fadeIn">
              {[...Array(8)].map((_, i) => {
                const hasSub = i < 4; // first 4 have submenus
                return (
                  <li key={i} className="relative group/item">
                    <div
                      className="flex justify-between items-center px-4 py-2 hover:bg-purple-100 hover:text-purple-600 cursor-pointer transition-colors"
                    >
                      Page {i + 1}
                      {hasSub && <FaChevronDown size={12} />}
                    </div>
                    {hasSub && (
                      <ul className="absolute top-0 left-full hidden group-hover/item:block bg-white text-black rounded shadow-md w-48 animate-slideIn">
                        {[...Array(
                          i === 0 ? 6 : i === 1 ? 4 : i === 2 ? 2 : i === 3 ? 3 : 0
                        )].map((_, j) => (
                          <li
                            key={j}
                            className="px-4 py-2 hover:bg-purple-100 hover:text-purple-600 cursor-pointer"
                          >
                            Page {i + 1} - Sub {j + 1}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </li>

          <li className="cursor-pointer hover:text-purple-500 transition-colors">
            Screenshots
          </li>
          <li className="cursor-pointer hover:text-purple-500 transition-colors">
            Pricing
          </li>
          <li className="cursor-pointer hover:text-purple-500 transition-colors">
            Contact
          </li>
        </ul>

        {/* Right: Search + Mobile toggle */}
        <div
          className={`flex items-center space-x-4 md:ml-auto md:w-auto md:justify-end transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <button
            aria-label="Search"
            className="hover:text-purple-500 transition-colors"
          >
            <FaSearch size={20} />
          </button>
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="md:hidden hover:text-purple-500 transition-colors"
          >
            <FaBars size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />
          {/* Drawer */}
          <aside className="relative ml-auto h-full w-full bg-white  text-black shadow-lg transform transition-transform duration-300 animate-slideIn">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
              <h2 className="text-2xl font-bold">Menu</h2>
              <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <FaTimes size={22} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="overflow-y-auto bg-white  h-[calc(100vh-72px)] px-6 pb-8 space-y-2 font-semibold text-xl">
              {/* Home dropdown */}
              <div>
                <button
                  onClick={() =>
                    setDropdownOpen(dropdownOpen === "home" ? null : "home")
                  }
                  className="w-full flex justify-between items-center py-3 hover:text-purple-600"
                >
                  <span>Home</span>
                  <FaChevronDown
                    className={`transform transition-transform ${
                      dropdownOpen === "home" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    dropdownOpen === "home" ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <ul className="pl-4 space-y-2">
                    {[...Array(6)].map((_, i) => (
                      <li
                        key={i}
                        className="py-1 cursor-pointer hover:text-purple-600"
                      >
                        Homepage {i + 1}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pages dropdown */}
              <div>
                <button
                  onClick={() =>
                    setDropdownOpen(dropdownOpen === "pages" ? null : "pages")
                  }
                  className="w-full flex justify-between items-center py-3 hover:text-purple-600"
                >
                  <span>Pages</span>
                  <FaChevronDown
                    className={`transform transition-transform ${
                      dropdownOpen === "pages" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    dropdownOpen === "pages" ? "max-h-[600px]" : "max-h-0"
                  }`}
                >
                  <ul className="pl-4 space-y-2">
                    {[...Array(8)].map((_, i) => {
                      const hasSub = i < 4;
                      return (
                        <li key={i} className="relative">
                          <button
                            onClick={() =>
                              hasSub &&
                              toggleSubDropdown(`page${i + 1}`)
                            }
                            className="w-full flex justify-between items-center py-2 hover:text-purple-600"
                          >
                            Page {i + 1}
                            {hasSub && (
                              <FaChevronDown
                                className={`transform transition-transform ${
                                  subDropdownOpen === `page${i + 1}`
                                    ? "rotate-90"
                                    : ""
                                }`}
                              />
                            )}
                          </button>
                          {hasSub && (
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                subDropdownOpen === `page${i + 1}`
                                  ? "max-h-40 pl-4"
                                  : "max-h-0"
                              }`}
                            >
                              <ul className="space-y-2">
                                {[...Array(
                                  i === 0 ? 6 : i === 1 ? 4 : i === 2 ? 2 : i === 3 ? 3 : 0
                                )].map((_, j) => (
                                  <li
                                    key={j}
                                    className="py-1 cursor-pointer hover:text-purple-600"
                                  >
                                    Page {i + 1} - Sub {j + 1}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="py-3 cursor-pointer hover:text-purple-600">
                Features
              </div>
              <div className="py-3 cursor-pointer hover:text-purple-600">
                Screenshots
              </div>
              <div className="py-3 cursor-pointer hover:text-purple-600">
                Pricing
              </div>
              <div className="py-3 cursor-pointer hover:text-purple-600">
                Contact
              </div>
            </div>
          </aside>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
