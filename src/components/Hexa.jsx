import React from "react";
import imgg from "../assets/imgg.jpg";

const Hexa = () => {
  return (
    <section className="bg-gray-50 py-20 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-14">
        {/* Heading */}
        <header className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
            NEST, Beyond the Hub and Spoke
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-2">
            A Collaborative Model for Innovation
          </p>
          <div className="mt-4 h-[2px] w-24 bg-blue-500 mx-auto rounded-full"></div>
        </header>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={imgg}
            alt="NEST Hub and Spoke Model"
            className="rounded-2xl shadow-md max-w-4xl w-full object-cover"
          />
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 md:p-14 max-w-5xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            The North Eastern region of India is a vibrant hub of talent and
            cultural heritage. The{" "}
            <strong>North Eastern Science &amp; Technology (NEST) Cluster</strong>,
            based in Guwahati, aims to leverage these unique strengths by bringing
            together academic institutions, industries, government, and the
            community. Its vision is to foster a self-reliant and
            innovation-driven ecosystem, solidifying the region&apos;s position as a
            powerhouse of technology and sustainable development for a global
            tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hexa;
