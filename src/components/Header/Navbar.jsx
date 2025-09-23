"use client";

import { useState, useEffect, useContext } from "react";
import { FaChevronDown, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { AppContext } from "@/context/appcontext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const { navbar } = useContext(AppContext);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

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

  const toggleSubDropdown = (name) => {
    setSubDropdownOpen((prev) => (prev === name ? null : name));
  };

  const navData = navbar[0]; // ✅ API se ek hi navbar aata hai

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-white/90 shadow-md backdrop-blur" : "bg-transparent"}`}
    >
      <div className="max-w-7xl Mycontainer mx-auto py-5 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src={navData?.logo}
            alt="Logo"
            width={55}
            height={55}
            className={`object-contain ${
              scrolled ? "" : "invert brightness-0"
            }`}
          />
        </div>

        {/* Right side (Nav + Search + Mobile toggle) */}
        <div
          className={`flex items-center ml-auto transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {/* ✅ Desktop Nav */}
          {isDesktop && (
            <ul
              className={`${poppins.className} flex space-x-7 font-semibold items-center transition-colors duration-300 mr-35 ${
                scrolled ? "text-black" : "text-white"
              } text-md`}
            >
              {navData?.navlinks?.map((link, i) => (
                <li key={i} className="relative group cursor-pointer">
                  <div className="flex items-center gap-1 hover:text-[#8d75ee] transition-colors">
                    <a href={link.link || "#"}>{link.name}</a>
                    {link.hasDropdown && <FaChevronDown size={15} />}
                  </div>

                  {/* Dropdown */}
                  {link.hasDropdown && link.dropdownItems?.length > 0 && (
                    <ul className="absolute left-0 mt-2 z-40 hidden group-hover:block bg-white text-black rounded shadow-md w-56 animate-fadeIn">
                      {link.dropdownItems.map((drop, j) => (
                        <li key={j} className="relative group/item">
                          <div className="flex justify-between items-center px-4 py-2 hover:bg-purple-100 hover:text-[#8d75ee] transition-colors">
                            <a href={drop.link || "#"}>{drop.name}</a>
                            {drop.hasSubDropdown && <FaChevronDown size={12} />}
                          </div>

                          {/* SubDropdown */}
                          {drop.hasSubDropdown && drop.subItems?.length > 0 && (
                            <ul className="absolute top-0 left-full hidden group-hover/item:block bg-white text-black rounded shadow-md w-48 animate-slideIn">
                              {drop.subItems.map((sub, k) => (
                                <li
                                  key={k}
                                  className="px-4 py-2 hover:bg-purple-100 hover:text-[#8d75ee] cursor-pointer"
                                >
                                  <a href={sub.link || "#"}>{sub.name}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}

          {/* Search */}
          <button
            aria-label="Search"
            className="hover:text-[#8d75ee] transition-colors"
          >
            <FaSearch size={15} />
          </button>

          {/* Mobile toggle */}
          {!isDesktop && (
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="hover:text-[#8d75ee] transition-colors ml-4"
            >
              <FaBars size={22} />
            </button>
          )}
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {!isDesktop && menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />
          {/* Drawer */}
          <aside className="relative ml-auto h-full w-full bg-white text-black shadow-lg transform transition-transform duration-300 animate-slideIn">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
              <h2 className="text-2xl font-bold">Menu</h2>
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <FaTimes size={22} />
              </button>
            </div>

            {/* Dynamic Menu Items */}
            <div className="overflow-y-auto bg-white h-[calc(100vh-72px)] px-6 pb-8 space-y-2 font-semibold text-xl">
              {navData?.navlinks?.map((link, i) => (
                <div key={i}>
                  <button
                    onClick={() =>
                      setDropdownOpen(
                        dropdownOpen === link.name ? null : link.name
                      )
                    }
                    className="w-full flex justify-between items-center py-3 hover:text-[#8d75ee]"
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <FaChevronDown
                        className={`transform transition-transform ${
                          dropdownOpen === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {link.hasDropdown && link.dropdownItems?.length > 0 && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        dropdownOpen === link.name ? "max-h-[600px]" : "max-h-0"
                      }`}
                    >
                      <ul className="pl-4 space-y-2">
                        {link.dropdownItems.map((drop, j) => (
                          <li key={j}>
                            <button
                              onClick={() =>
                                drop.hasSubDropdown &&
                                toggleSubDropdown(drop.name)
                              }
                              className="w-full flex justify-between items-center py-2 hover:text-[#8d75ee]"
                            >
                              {drop.name}
                              {drop.hasSubDropdown && (
                                <FaChevronDown
                                  className={`transform transition-transform ${
                                    subDropdownOpen === drop.name
                                      ? "rotate-90"
                                      : ""
                                  }`}
                                />
                              )}
                            </button>

                            {/* SubDropdown in Mobile */}
                            {drop.hasSubDropdown && drop.subItems?.length > 0 && (
                              <div
                                className={`overflow-hidden transition-all duration-300 ${
                                  subDropdownOpen === drop.name
                                    ? "max-h-40 pl-4"
                                    : "max-h-0"
                                }`}
                              >
                                <ul className="space-y-2">
                                  {drop.subItems.map((sub, k) => (
                                    <li
                                      key={k}
                                      className="py-1 cursor-pointer hover:text-[#8d75ee]"
                                    >
                                      <a href={sub.link || "#"}>{sub.name}</a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
