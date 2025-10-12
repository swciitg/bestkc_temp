import React from "react";
import { FaBrain, FaRecycle } from "react-icons/fa";
import { GiSeedling, GiBamboo } from "react-icons/gi";

const AboutSection = () => {
  return (
    <section className="relative bg-gray-50 py-20 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-14">
        {/* Heading */}
        <header className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
            What is NEST Cluster?
          </h2>
          <div className="mt-4 h-[2px] w-24 bg-blue-500 mx-auto rounded-full"></div>
        </header>

        {/* Intro paragraph */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto text-center">
          NEST Cluster serves as a collaborative platform to empower youth,
          support grassroots innovations, and foster entrepreneurship by
          offering training, research support, and incubation facilities across
          four verticals of national and regional importance:
        </p>

        {/* Elegant List */}
        <ul className="space-y-4 max-w-3xl mx-auto pt-4">
          <li className="flex items-start space-x-4">
            <FaBrain className="mt-1 text-blue-500 flex-shrink-0" size={24} />
            <span className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Artificial Intelligence &amp; Semiconductor Technology
            </span>
          </li>
          <li className="flex items-start space-x-4">
            <GiSeedling className="mt-1 text-green-500 flex-shrink-0" size={24} />
            <span className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Grassroots Technology Innovation
            </span>
          </li>
          <li className="flex items-start space-x-4">
            <GiBamboo className="mt-1 text-emerald-500 flex-shrink-0" size={24} />
            <span className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Bamboo-based Product Development &amp; Skill Building
            </span>
          </li>
          <li className="flex items-start space-x-4">
            <FaRecycle className="mt-1 text-teal-500 flex-shrink-0" size={24} />
            <span className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Biodegradable Plastics &amp; Solid Waste Management
            </span>
          </li>
        </ul>

        {/* Closing paragraph */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto text-center">
          Through its state-of-the-art infrastructure, cutting-edge labs, and
          interdisciplinary expertise, the NEST Cluster bridges academia and
          industry to deliver scalable, sustainable, and inclusive technological
          solutions for the Northeast.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
