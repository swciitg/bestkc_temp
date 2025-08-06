import React from 'react';

const VisionMission = () => {
  return (
    <section className="relative bg-primary py-20 overflow-hidden">
      {/* Geometric Shapes Overlay */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary-dark/30 transform -translate-y-1/3 -rotate-45"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary-light/20 transform translate-y-1/4 rotate-12"></div>
      <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-primary-dark/25 transform translate-x-1/4 -translate-y-1/4 rotate-30"></div>
{/* Additional Decorative Shapes */}
<div className="absolute top-1/3 left-1/3 w-40 h-40 bg-primary-light/25 transform -rotate-12"></div>
<div className="absolute bottom-1/4 right-1/3 w-52 h-52 bg-primary-dark/20 transform rotate-6"></div>
<div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/15 transform translate-x-1/4 -translate-y-1/4 rotate-45"></div>
<div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-dark/15 transform -translate-x-1/4 translate-y-1/4 rotate-60"></div>

      <div className="relative max-w-screen-xl mx-auto px-8 text-white space-y-16">
        {/* Vision Block */}
        <div>
          <h2 className="text-4xl font-light mb-4">Vision</h2>
          <p className="text-xl font-light leading-relaxed">
            Develop and implement frameworks to catalyse those interactions between science and society which lead to a long-term competitive advantage for the nation.
          </p>
        </div>

        {/* Mission Block */}
        <div>
          <h2 className="text-4xl font-light mb-4">Mission</h2>
          <p className="text-xl font-light leading-relaxed">
            Enable outcome-driven collaborations across sectors by serving as an inclusive science and technology knowledge platform that is driven by alignment with local, regional and national goals for an AatmaNirbhar Bharat.
          </p>
        </div>
      </div>
    </section>
  )
};

export default VisionMission;
