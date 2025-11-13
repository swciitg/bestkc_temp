import { useState } from "react";
// import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineMenu, HiX, HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import image from "../assets/image.png";
// import departmentOfDevNEImage from '../assets/image.svg'
import ne_map from "../assets/ne-map.jpg";
import iitg from "../assets/iitg.png";
import logo from "../assets/logo.jpg";
import nec from "../assets/nec.png";

const navItems = [
  { name: "Home", link: "/", subItems: [] },
  {
    name: "About Us",
    link: "#about-us",
    subItems: [
      { name: "Cluster Formation", link: "/cluster-formation" },
      // { name: "Cluster Launch", link: "#cluster-launch" },
      {
        name: "Section 8 Company Formation",
        link: "/cluster-formation#section-8-formation",
      },
      { name: "Cluster Activities", link: "/gallery" },
    ],
  },

  {
    name: "People",
    link: "#team",
    subItems: [
      { name: "Leadership", link: "/team" },
      { name: "Scientific Team", link: "/team2" },
      { name: "Executive Team", link: "/team3" },
    ],
  },
  { name: "Verticals", link: "/vertical", subItems: [] },
  { name: "Resources", link: "/resources", subItems: [] },
  { name: "Courses", link: "/courses", subItems: [] },
  { name: "Gallery", link: "/activities", subItems: [] },
  { name: "Spokes", link: "/spokes", subItems: [] },
  { name: "The Logo", link: "/logo", subItems: [] },
  { name: "Contact Us", link: "/contact", subItems: [] },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileIndex, setOpenMobileIndex] = useState(null);

  const toggleMobileSection = (idx) =>
    setOpenMobileIndex((prev) => (prev === idx ? null : idx));

  // helper: decide between router link and scroll link
  const renderNavLink = (item, extraClasses = "") => {
    const isScroll = item.link.startsWith("#");
    const target = item.link.replace("#", ""); // remove #

    if (isScroll) {
      return (
        <ScrollLink
          to={target}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`uppercase text-white tracking-widest text-sm hover:text-gray-300 cursor-pointer flex items-center transition-colors ${extraClasses}`}
        >
          {item.name}
        </ScrollLink>
      );
    }

    return (
      <Link
        to={item.link}
        className={`uppercase text-white tracking-widest text-sm hover:text-gray-300 flex items-center transition-colors ${extraClasses}`}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <header className="w-full font-inter">
      {/* =================== TOP BANNER =================== */}
      <div className="bg-white py-2 flex justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-6">
          {/* Title */}
          <h1 className="font-extrabold text-red-900 tracking-tight leading-tight text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-2 mb-1">
            North Eastern Science and Technology Cluster
          </h1>

          {/* Subtitle */}
          <div className="flex flex-wrap justify-center text-center leading-tight">
            <span className="font-bold italic text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl">
              for promoting
            </span>
            <span className="font-bold text-gray-800 tracking-tight text-base sm:text-lg md:text-xl lg:text-2xl ml-2">
              Research, Innovation & Skill Development
            </span>
          </div>

          {/* Main Section */}
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-6 mt-1">
            {/* Left Logo */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <img
                src={logo}
                alt="NEST Logo"
                className="w-28 sm:w-40 md:w-52 lg:w-60 aspect-square rounded-lg object-contain"
              />
            </div>

            {/* Center Section */}
            <div className="text-center flex-grow mt-2 md:mt-0 flex flex-col items-center">
              <p className="italic text-lg sm:text-xl font-bold text-gray-800 mt-4 mb-[-2%]">
                Established by:
              </p>

              {/* Container that allows offset control */}
              <div className="relative inline-block">
                {/* Top Row: Ministry + Map */}
                <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4">
                  <img
                    src={image}
                    alt="Ministry of Development of North Eastern Region"
                    className="h-12 sm:h-16 md:h-20 object-contain"
                    id="ministry-logo"
                  />
                  <img
                    src={ne_map}
                    alt="Map of North-East India"
                    className="h-16 sm:h-24 md:h-28 object-contain"
                  />
                </div>

                {/* Through + NEC */}
                <div className="mt-[-2%]">
                  <p className="italic text-lg sm:text-xl font-bold text-gray-800">
                    Through:
                  </p>

                  {/* NEC shifted left to start exactly where first top image starts */}
                  <div className="flex justify-center relative">
                    <img
                      src={nec}
                      alt="NEC Logo"
                      className="h-12 sm:h-16 md:h-20 object-contain relative lg:left-[-14%]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Logo */}
            <div className="flex-shrink-0 flex justify-center md:justify-end mt-2 md:mt-0">
              <img
                src={iitg}
                alt="Indian Institute of Technology Guwahati"
                className="w-28 sm:w-40 md:w-52 lg:w-60 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =================== MAIN NAV =================== */}
      <nav className="bg-primary text-white mt-4">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="h-10 md:h-12 flex items-center justify-center">
            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center p-2 -ml-2 text-white/90 hover:text-white"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <HiX size={26} /> : <HiOutlineMenu size={26} />}
            </button>

            {/* Links (desktop) */}
            <ul className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  {renderNavLink(item)}
                  {item.subItems.length > 0 && (
                    <ul className="absolute left-0 top-full mt-0 w-56 rounded-sm bg-primary-dark text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      {item.subItems.map((sub) => (
                        <li key={sub.name}>
                          {renderNavLink(
                            sub,
                            "block px-4 py-2 uppercase text-sm hover:bg-primary-light transition-colors"
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden pb-4 border-t border-white/15">
              <ul className="pt-2 space-y-1">
                {navItems.map((item, idx) => {
                  const hasChildren = item.subItems.length > 0;
                  const open = openMobileIndex === idx;

                  return (
                    <li key={item.name} className="w-full">
                      <div
                        className="flex items-center justify-between px-2 py-2 rounded hover:bg-white/10"
                        onClick={() => hasChildren && toggleMobileSection(idx)}
                      >
                        {renderNavLink(
                          item,
                          "uppercase text-sm tracking-widest"
                        )}
                        {hasChildren && (
                          <button
                            onClick={() => toggleMobileSection(idx)}
                            className="p-1 -mr-1 text-white/90"
                          >
                            <HiChevronDown
                              className={`transition-transform ${
                                open ? "rotate-180" : ""
                              }`}
                              size={20}
                            />
                          </button>
                        )}
                      </div>
                      {hasChildren && open && (
                        <ul className="ml-3 mt-1 mb-2 border-l border-white/15">
                          {item.subItems.map((sub) => (
                            <li key={sub.name}>
                              {renderNavLink(
                                sub,
                                "block pl-4 pr-2 py-2 text-sm hover:bg-white/10 rounded"
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
