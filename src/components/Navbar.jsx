import React from "react";
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const navItems = [
  { name: "Home", subItems: [] },
  {
    name: "About Us",
    subItems: [
      "Cluster Formation",
      "Cluster Launch",
      "Section 8 Company Formation",
    ],
  },
  { name: "Gallery", subItems: [] },
  {
    name: "People",
    subItems: ["Coordinators", "Team Members"],
  },
  { name: "Verticals", subItems: [] },
  { name: "Opportunities", subItems: [] },
  { name: "Resources", subItems: [] },
  { name: "Contact Us", subItems: [] },
];

const Navbar = () => {
  return (
    <header className="w-full font-inter">
      {/* Top Header with Logos */}
      <div className="bg-light-gray-bg py-4">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-8">
          <img
            src="https://www.bestkc.in/wp-content/uploads/2025/05/Science-and-Technology-Cluster-1.jpg"
            alt="Office of the Principal Scientific Adviser to the Government of India"
            className="h-20"
          />
          <img
            src="https://www.bestkc.in/wp-content/uploads/2024/07/best-logo.png"
            alt="BeST Cluster Logo"
            className="h-20"
          />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-primary text-white">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-8 h-16">
          {/* Links */}
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <a
                  href="#"
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
                </a>

                {/* Dropdown */}
                {item.subItems.length > 0 && (
                  <ul className="absolute left-0 top-full mt-0 w-56 rounded-sm bg-primary-dark text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    {item.subItems.map((sub) => (
                      <li key={sub}>
                        <a
                          href="#"
                          className="block px-4 py-2 uppercase text-sm hover:bg-primary-light transition-colors"
                        >
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center space-x-2">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#0077b5] text-white border border-white"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black text-white border border-white"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#ff0000] text-white border border-white"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
