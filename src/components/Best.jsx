import React from 'react';
import { FaPlay, FaYoutube } from 'react-icons/fa';

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
      <div className="relative max-w-screen-xl mx-auto px-8 text-white">
        <h2 className="text-4xl font-light mb-6">What is BeST Cluster?</h2>
        <p className="text-xl font-light leading-relaxed mb-8">
          Bengaluru Science and Technology (BeST) cluster is one of the Science and Technology Clusters in India which is an initiative by the <span className="text-[#017982] font-medium">Office of The Principal Scientific Adviser to the Government of India</span>, on the recommendation of the Prime Minister’s Science, Technology, and Innovation Advisory Council (PM-STIAC) to build an Atmanirbhar Bharat through Science &amp; Technology. The conceptualization of the BeST cluster is a collaborative effort of more than 50+ organizations. Through its inclusive hexa-helical model, BeST has created a network of experts from a much wider variety of sectors to align S&amp;T providers with users.
        </p>
        <a
          href="#"
          className="inline-flex items-center text-[#017982] font-medium text-lg hover:underline"
        >
          <FaYoutube className="mr-2 h-10 w-10" /> S&T Cluster Video
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
