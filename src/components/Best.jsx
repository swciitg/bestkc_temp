import React from 'react';
import { FaBrain, FaRecycle } from 'react-icons/fa';
import { GiSeedling, GiBamboo } from 'react-icons/gi';
const AboutSection = () => {
  return (
    <section className="relative bg-[#1E164F] py-20 overflow-hidden">
      {/* Decorative geometric shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-light/15 transform translate-x-1/2 translate-y-1/2 rotate-12"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-primary-dark/20 transform rotate-30"></div>
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-primary-light/20 transform -rotate-15"></div>
      <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-primary-light/25 transform -rotate-12"></div>
      <div className="absolute bottom-1/4 right-1/3 w-52 h-52 bg-primary-dark/20 transform rotate-6"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/15 transform translate-x-1/4 -translate-y-1/4 rotate-45"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-dark/15 transform -translate-x-1/4 translate-y-1/4 rotate-60"></div>

      <div className="relative max-w-screen-xl mx-auto px-8 text-white space-y-6">
        {/* Heading */}
        <h2 className="text-4xl font-light">What is NEST Cluster?</h2>

        {/* Intro paragraphs */}
        {/* <p className="text-xl font-light leading-relaxed">
          The North Eastern Science &amp; Technology (NEST) Cluster is a transformative initiative dedicated to accelerating research, innovation, and skill development in the North Eastern Region of India. Envisioned as a Section-8, not-for-profit company, the cluster operates through a hub-and-spoke model involving premier academic institutions, industries, government agencies, and startups across all eight northeastern states.
        </p> */}
        <p className="text-xl font-light leading-relaxed">
          NEST Cluster serves as a collaborative platform to empower youth, support grassroots innovations, and foster entrepreneurship by offering training, research support, and incubation facilities across four verticals of national and regional importance:
        </p>

        {/* Bullet list */}
        <ul className="space-y-4">
        <li className="flex items-start space-x-3 text-xl font-light text-white">
          <FaBrain className="mt-1 text-light-gray-bg" size={24} />
          <span>Artificial Intelligence &amp; Semiconductor Technology</span>
        </li>
        <li className="flex items-start space-x-3 text-xl font-light text-white">
          <GiSeedling className="mt-1 text-light-gray-bg" size={24} />
          <span>Grassroots Technology Innovation</span>
        </li>
        <li className="flex items-start space-x-3 text-xl font-light text-white">
          <GiBamboo className="mt-1 text-light-gray-bg" size={24} />
          <span>Bamboo-based Product Development &amp; Skill Building</span>
        </li>
        <li className="flex items-start space-x-3 text-xl font-light text-white">
          <FaRecycle className="mt-1 text-light-gray-bg" size={24} />
          <span>Biodegradable Plastics &amp; Solid Waste Management</span>
        </li>
      </ul>

        {/* Closing paragraph */}
        <p className="text-xl font-light leading-relaxed">
          Through its state-of-the-art infrastructure, cutting-edge labs, and interdisciplinary expertise, the NEST Cluster bridges academia and industry to deliver scalable, sustainable, and inclusive technological solutions for the Northeast.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
