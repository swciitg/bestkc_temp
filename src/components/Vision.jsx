import React from "react";
import {
  FaUserGraduate,
  FaLightbulb,
  FaHandsHelping,
  FaCertificate,
  FaTools,
  FaBalanceScale,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="relative bg-primary py-20 overflow-hidden">
      {/* Decorative Shapes (reuse your overlay here if you want) */}
      {/* … */}

      <div className="relative max-w-screen-xl mx-auto px-8 text-white space-y-10">
        {/* Single combined heading */}
        <header>
          <h2 className="text-4xl font-light">Vision &amp; Mission</h2>
        </header>

        {/* Vision text */}
        <div className="space-y-4">
          <p className="text-xl font-light leading-relaxed">
            The North Eastern Science &amp; Technology (NEST) Cluster is a
            transformative initiative dedicated to accelerating research,
            innovation, and skill development in the North Eastern Region of
            India. Envisioned as a Section-8, not-for-profit company, the
            cluster operates through a hub-and-spoke model involving premier
            academic institutions, industries, government agencies, and startups
            across all eight northeastern states.
          </p>
          <p className="text-xl font-light leading-relaxed">
            Through its state-of-the-art infrastructure, cutting-edge labs, and
            interdisciplinary expertise, the NEST Cluster bridges academia and
            industry to deliver scalable, sustainable, and inclusive
            technological solutions for the Northeast.
          </p>
        </div>

        {/* Mission points (kept under the same section, no separate heading) */}
        <ul className="space-y-4 pt-2">
          <li className="flex items-start space-x-3">
            <FaUserGraduate className="mt-1 text-accent" size={24} />
            <span className="text-xl font-light">
              Skill development of youth of North East region in relevant fields
              of S&amp;T
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaLightbulb className="mt-1 text-accent" size={24} />
            <span className="text-xl font-light">
              Promote ideation, prototype, technology transfer, startups and
              commercialization
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaHandsHelping className="mt-1 text-accent" size={24} />
            <span className="text-xl font-light">
              Hand holding with partnering institutions like NITs of NE along
              with state and centre funded research institutions in providing
              training
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCertificate className="mt-1 text-accent" size={24} />
            <span className="text-xl font-light">
              Conducting certification courses in relevant fields that can
              create job opportunities for the Northeast youth
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaTools className="mt-1 text-accent" size={24} />
            <span className="text-xl font-light">
              Customized technology development through tinkering labs
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaBalanceScale className="mt-1 text-accent" size={24} />
            <span className="text-xl font-light">
              Patenting, transfer of technology and licensing
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaRocket className="mt-1 text-accent" size={24} />
            <span className="text-xl font-light">Start-up incubation</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaHandshake className="mt-1 text-accent" size={24} />
            <span className="text-xl font-light">
              Establishing cooperation with industry partners
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default VisionMission;
