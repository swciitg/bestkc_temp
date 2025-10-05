import React from 'react';

const ClusterActivities = () => {
  return (
    <section className="bg-white py-4">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl text-primary font-light mb-12">
          Cluster Activities
        </h2>

        {/* Circle-chain graphic */}
        <div className="flex justify-center mb-16">
          <img
            src="https://www.bestkc.in/wp-content/uploads/2025/06/home-img-02-1-scaled.jpg"
            alt="Cluster Activities Chain"
            className="w-full max-w-5xl object-contain"
          />
        </div>

        {/* Definitions */}
        <div className="max-w-screen-md mx-auto space-y-6 text-gray-900 text-lg">
          <p>
            <span className="font-bold">Stent</span> = Science &amp; Technology Experts for Tomorrow – Creating an AI-enabled network
          </p>
          <p>
            <span className="font-bold">Impact</span> = Define and solve problems with short &amp; long-term impact on society/knowledge
          </p>
          <p>
            <span className="font-bold">Breaking Boundaries</span> = Cross-disciplinary and cross-institutional collaborations
          </p>
          <p>
            <span className="font-bold">Share</span> = Sharing of resources, personnel, and equipment across organisations
          </p>
          <p>
            <span className="font-bold">Engage</span> = Cluster awareness and public engagement via diverse platforms and programs
          </p>
          <p>
            <span className="font-bold">Global</span> = Collaborating with international clusters and organizations
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClusterActivities;
