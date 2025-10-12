import { useState } from "react";
// import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineMenu, HiX, HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import image from '../assets/image.png'
// import departmentOfDevNEImage from '../assets/image.svg'
import ne_map from '../assets/ne-map.jpg'
import iitg from '../assets/iitg.png'
import logo from "../assets/logo.jpg";
import nec from '../assets/nec.png'

const navItems = [
  { name: "Home", link: "/", subItems: [] },
  {
    name: "About Us",
    link: "#about-us",
    subItems: [
      { name: "Cluster Formation", link: "/cluster-formation" },
      // { name: "Cluster Launch", link: "#cluster-launch" },
      { name: "Section 8 Company Formation", link: "/cluster-formation#section-8-formation" },
      { name: "Gallery", link: "/gallery"},
    ],
  },
  
  {
    name: "Team",
    link: "/team",
    subItems: [
      // { name: "Coordinators", link: "/coordinators" },
      // { name: "Team Members", link: "/team" },
    ],
  },
  { name: "Verticals", link: "/vertical", subItems: [] },
  { name: "Resources", link: "/resources", subItems: [] },
  { name: "Courses", link: "/courses", subItems: [] },
  { name: "Activities", link: "/activities", subItems: [] },
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
      <div className="bg-white py-4 md:py-8 flex justify-center">
        <div className="mx-8 px-4 sm:px-6 w-[100] ">
          <h1 className="font-extrabold text-gray-900 tracking-tight leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                North Eastern Science and Technology (NEST) Cluster
              </h1>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
            {/* <div className="flex justify-center items-center"> */}
                <div className="flex-shrink-0">
                <img
                  src={logo}
                  alt="NEST Logo"
                  className="w-48 h-48 rounded-lg object-cover ring-1 ring-black/10"
                />
              </div>
              <div className="text-center flex-grow">
                {/* <h1 className="font-extrabold text-gray-900 tracking-tight leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  North Eastern Science and Technology (NEST) Cluster
                </h1> */}
                <p className="mt-2 italic text-2xl sm:text-2xl font-bold text-gray-800">
                  Established by:
                </p>
                {/* <departmentOfDevNEImage/> */}
              <div className="flex justify-center align-items">
                  <img
                    src={image}
                    alt="Ministry of Development of North Eastern Region"
                    className="mt-2 h-24 object-contain ml-4"
                  />
                  <img
                    src={ne_map}
                    alt="Map of North-East India"
                    className="h-32 object-contain"
                  />
              </div>

              <div className="flex flex-col items-center">
                <p className="italic text-2xl sm:text-2xl font-bold text-gray-800">
                  Through:
                </p>
                  <img src={nec} alt="" className="w-108 mr-32" />
              </div>
              
              </div>
              <div className="flex-shrink-0">
                <img
                  src={iitg}
                  alt="Indian Institute of Technology Guwahati"
                  className="w-48 h-48 w-auto object-contain"
                />
              </div>
            </div>
          {/* </div> */}
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
