import React from "react";
import { FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa"; // Changed FaLinkedin to FaLinkedinIn for better match

const Navbar = () => {
  return (
    <header className="w-full font-inter"> {/* Applying the Inter font */}
      {/* Top Header with Logos */}
      <div className="bg-light-gray-bg py-4"> {/* Using custom light-gray-bg color */}
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-8">
          {/* Left Logo */}
          <img
            src="https://www.bestkc.in/wp-content/uploads/2025/05/Science-and-Technology-Cluster-1.jpg"
            alt="Office of the Principal Scientific Adviser to the Government of India"
            className="h-20"
          />

          {/* Right Logo */}
          <img
            src="https://www.bestkc.in/wp-content/uploads/2024/07/best-logo.png"
            alt="BeST Cluster Logo"
            className="h-20"
          />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-primary text-white"> {/* Using custom primary color */}
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-8 h-16">
          {/* Main Navigation Links */}
          <ul className="flex items-center space-x-8">
            {[
              "Home",
              "About Us",
              "People",
              "Thematic Areas",
              "Opportunities",
              "Resources",
              "Contact Us",
            ].map((item) => (
              <li key={item} className="relative group">
                <a
                  href="#"
                  className="uppercase text-white tracking-widest text-sm hover:text-gray-300 flex items-center transition-colors"
                >
                  {item}
                  {/* Dropdown arrow for items other than Home and Contact Us */}
                  {item !== "Home" && item !== "Contact Us" && (
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
                {/* Dropdown content */}
                {item !== "Home" && item !== "Contact Us" && (
                  <ul className="absolute left-0 top-full mt-0 w-44 rounded-sm bg-primary-dark text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 uppercase text-sm hover:bg-primary-light transition-colors"
                      >
                        {item} 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 uppercase text-sm hover:bg-primary-light transition-colors"
                      >
                        {item} 2
                      </a>
                    </li>
                    {/* Additional dropdown items for "Thematic Areas" to match the image */}
                    {item === "Thematic Areas" && (
                      <>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 uppercase text-sm hover:bg-primary-light transition-colors"
                          >
                            Funded Projects
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 uppercase text-sm hover:bg-primary-light transition-colors"
                          >
                            Collaborations
                          </a>
                        </li>
                      </>
                    )}
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
              className="p-2 bg-[#0077b5] text-white border border-white" // LinkedIn blue
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#000000] text-white border border-white" // Black for X (Twitter)
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#ff0000] text-white border border-white" // YouTube red
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
