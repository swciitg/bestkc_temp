import React from "react";

const Hexa = () => {
  return (
    <div className="bg-white py-20">
      <h2 className="text-3xl text-center md:text-4xl font-light mb-6">
        BeST, Beyond the Triple Helix: A Hexa-Helical Model
      </h2>
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center px-8 space-y-8 md:space-y-0 md:space-x-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://www.bestkc.in/wp-content/uploads/2024/07/home-img-01-980x986.jpg"
            alt="Hexa-Helical Model"
            className="w-full max-w-xs md:max-w-full object-contain"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-gray-900">
          <p className="text-lg leading-relaxed mb-4">
            The traditional Triple Helix model brings together academia,
            industry and government, and is an established theoretical model for
            the implementation of innovation clusters. While this trilateral
            cooperation would drive knowledge-based economic development, it
            might be restrictive in terms of social innovation.
          </p>
          <p className="text-lg leading-relaxed">
            BeST aims to go one step further and introduce a more inclusive
            hexa-helical model. This will include a much wider variety of
            sectors and stakeholders who will participate in the cluster
            activities, including academia, industry/startups/professional
            associations, government agencies, investors and funding agencies,
            strategic sectors and society/NGOs.
          </p>
        </div>
      </div>
      <div className="w-full mt-8 bg-[#004179] flex justify-center items-center py-16 px-8 min-h-[250px] font-inter">
      <div className="max-w-5xl text-white text-center text-xl font-normal leading-relaxed">
        The state of Karnataka and the city of Bengaluru play a pivotal role in India's economic growth, thanks to their unique
        combination of a talented pool of scientists and engineers, academic institutions, multinational companies, and a thriving
        startup ecosystem. The Bengaluru Science and Technology (BeST) cluster envisions cultivating a distinctive innovation culture
        that strengthens this ecosystem and solidifies the region's position as a global powerhouse of innovation.
      </div>
    </div>
    </div>
  );
};

export default Hexa;
