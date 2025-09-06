import React, { useState } from "react";
// import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineMenu, HiX, HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import image from "../assets/image.png";

const navItems = [
  { name: "Home", link: "/", subItems: [] },
  {
    name: "About Us",
    link: "#about-us",
    subItems: [
      { name: "Cluster Formation", link: "/cluster-formation" },
      { name: "Cluster Launch", link: "#cluster-launch" },
      { name: "Section 8 Company Formation", link: "#section-8-formation" },
      { name: "Gallery", link: "/gallery"},
    ],
  },
  
  {
    name: "People",
    link: "#people",
    subItems: [
      { name: "Coordinators", link: "/coordinators" },
      { name: "Team Members", link: "/team" },
    ],
  },
  { name: "Verticals", link: "/vertical", subItems: [] },
  { name: "Opportunities", link: "/opportunities", subItems: [] },
  { name: "Resources", link: "/resources", subItems: [] },
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
      <div className="bg-white py-4 md:py-8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0">
              <img
                src="/logo.jpg"
                alt="NEST Logo"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover ring-1 ring-black/10"
              />
            </div>
            <div className="text-center flex-grow">
              <h1 className="font-extrabold text-gray-900 tracking-tight leading-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                North Eastern Science and Technology (NEST) Cluster
              </h1>
              <p className="mt-2 italic text-sm sm:text-base text-gray-800">
                Funded by
              </p>
              <img
                src={image}
                alt="Ministry of Development of North Eastern Region"
                className="mx-auto mt-2 h-8 sm:h-10 md:h-12 object-contain"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://www.uxdt.nic.in/wp-content/uploads/2024/06/iit-guwahati-01.jpg?x84154"
                alt="Indian Institute of Technology Guwahati"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =================== MAIN NAV =================== */}
      <nav className="bg-primary text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="h-14 md:h-16 flex items-center justify-center">
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
