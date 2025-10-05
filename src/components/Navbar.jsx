import React, { useState } from "react";
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineMenu, HiX, HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import image from "../assets/image.png"
const navItems = [
  { name: "Home", link: "/", subItems: [] },
  {
    name: "About Us",
    link: "#about-us",
    subItems: [
      { name: "Cluster Formation", link: "/about-us#cluster-formation" },
      { name: "Cluster Launch", link: "/about-us#cluster-launch" },
      { name: "Section 8 Company Formation", link: "/about-us#section-8-formation" },
    ],
  },
  { name: "Gallery", link: "#gallery", subItems: [] },
  {
    name: "People",
    link: "#people",
    subItems: [
      { name: "Coordinators", link: "/coordinators" },
      { name: "Team Members", link: "/team" },
    ],
  },
  { name: "Verticals", link: "/vertical", subItems: [] },
  { name: "Opportunities", link: "#opportunities", subItems: [] },
  { name: "Resources", link: "#resources", subItems: [] },
  { name: "Contact Us", link: "#contact-us", subItems: [] },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileIndex, setOpenMobileIndex] = useState(null);

  const toggleMobileSection = (idx) =>
    setOpenMobileIndex((prev) => (prev === idx ? null : idx));

  return (
    <header className="w-full font-inter">
      {/* =================== TOP BANNER =================== */}
      <div className="bg-white py-4 md:py-8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
            {/* Left decorative circle */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#0A345A] flex-shrink-0" />
            
            {/* Center block */}
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
            
            {/* Right: IIT Guwahati logo */}
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
          <div className="h-14 md:h-16 flex items-center justify-between">
            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center p-2 -ml-2 text-white/90 hover:text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <HiX size={26} /> : <HiOutlineMenu size={26} />}
            </button>

            {/* Links (desktop) */}
            <ul className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    to={item.link}
                    className="uppercase text-white tracking-widest text-sm hover:text-gray-300 flex items-center transition-colors"
                  >
                    {item.name}
                    {item.subItems.length > 0 && (
                      <svg
                        className="ml-1 h-3 w-3 transform group-hover:rotate-180 transition-transform duration-200"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </Link>
                  {/* Hover dropdown */}
                  {item.subItems.length > 0 && (
                    <ul className="absolute left-0 top-full mt-0 w-56 rounded-sm bg-primary-dark text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      {item.subItems.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            to={sub.link}
                            className="block px-4 py-2 uppercase text-sm hover:bg-primary-light transition-colors"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* <div className="hidden md:flex items-center space-x-2">
              <Link
                to="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#0077b5] text-white border border-white"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black text-white border border-white"
                aria-label="Twitter / X"
              >
                <FaTwitter size={18} />
              </Link>
              <Link
                to="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#ff0000] text-white border border-white"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </Link>
            </div> */}
          </div>

          {/* Mobile menu panel */}
          {mobileOpen && (
            <div className="md:hidden pb-4 border-t border-white/15">
              <ul className="pt-2 space-y-1">
                {navItems.map((item, idx) => {
                  const hasChildren = item.subItems.length > 0;
                  const open = openMobileIndex === idx;

                  return (
                    <li key={item.name} className="w-full">
                      <div
                        className={`flex items-center justify-between px-2 py-2 rounded hover:bg-white/10 ${
                          hasChildren ? "" : "pr-2"
                        }`}
                      >
                        <Link
                          to={item.link}
                          className="uppercase text-sm tracking-widest"
                          onClick={() => hasChildren && toggleMobileSection(idx)}
                        >
                          {item.name}
                        </Link>

                        {hasChildren && (
                          <button
                            onClick={() => toggleMobileSection(idx)}
                            className="p-1 -mr-1 text-white/90"
                            aria-label={`Toggle ${item.name}`}
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
                              <Link
                                to={sub.link}
                                className="block pl-4 pr-2 py-2 text-sm hover:bg-white/10 rounded"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Socials (mobile) */}
              <div className="mt-3 flex items-center justify-start space-x-2 px-2">
                <Link
                  to="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#0077b5] text-white border border-white rounded"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={18} />
                </Link>
                <Link
                  to="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-black text-white border border-white rounded"
                  aria-label="Twitter / X"
                >
                  <FaTwitter size={18} />
                </Link>
                <Link
                  to="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#ff0000] text-white border border-white rounded"
                  aria-label="YouTube"
                >
                  <FaYoutube size={18} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
