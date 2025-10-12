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
    <section className="relative bg-gray-50 py-20 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-14">
        {/* Heading */}
        <header className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
            Vision &amp; Mission
          </h2>
          <div className="mt-4 h-[2px] w-24 bg-blue-500 mx-auto rounded-full"></div>
        </header>

        {/* Vision */}
        <div className="space-y-5 text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto text-center">
          <p>
            The North Eastern Science &amp; Technology (NEST) Cluster is a
            transformative initiative dedicated to accelerating research,
            innovation, and skill development in the North Eastern Region of
            India. Envisioned as a Section-8, not-for-profit company, the
            cluster operates through a hub-and-spoke model involving premier
            academic institutions, industries, government agencies, and startups
            across all eight northeastern states.
          </p>
          <p>
            Through its state-of-the-art infrastructure, cutting-edge labs, and
            interdisciplinary expertise, the NEST Cluster bridges academia and
            industry to deliver scalable, sustainable, and inclusive
            technological solutions for the Northeast.
          </p>
        </div>

        {/* Mission */}
        <ul className="grid md:grid-cols-2 gap-6 pt-4 max-w-5xl mx-auto">
          {[
            {
              icon: FaUserGraduate,
              text: "Skill development of youth of North East region in relevant fields of S&T",
            },
            {
              icon: FaLightbulb,
              text: "Promote ideation, prototype, technology transfer, startups and commercialization",
            },
            {
              icon: FaHandsHelping,
              text: "Hand holding with partnering institutions like NITs of NE along with state and centre funded research institutions in providing training",
            },
            {
              icon: FaCertificate,
              text: "Conducting certification courses in relevant fields that can create job opportunities for the Northeast youth",
            },
            {
              icon: FaTools,
              text: "Customized technology development through tinkering labs",
            },
            {
              icon: FaBalanceScale,
              text: "Patenting, transfer of technology and licensing",
            },
            {
              icon: FaRocket,
              text: "Start-up incubation",
            },
            {
              icon: FaHandshake,
              text: "Establishing cooperation with industry partners",
            },
          ].map(({ icon: Icon, text }, idx) => (
            <li
              key={idx}
              className="flex items-start space-x-4 bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 border border-gray-100"
            >
              <div className="flex-shrink-0 mt-1 text-blue-500">
                <Icon size={24} />
              </div>
              <span className="text-gray-700 text-base leading-relaxed">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default VisionMission;
