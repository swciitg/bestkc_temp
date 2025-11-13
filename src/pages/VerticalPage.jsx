// src/components/Verticals.jsx
import { GiPlantSeed, GiBamboo, GiRecycle } from "react-icons/gi";
import { useState } from "react";
import { FaBrain } from "react-icons/fa";
import { Element } from "react-scroll";
import VerticalCard from "../components/verticlesData";
import v1 from "../assets/v1.png";
import v21 from "../assets/v21.png";
import v22 from "../assets/v22.png";
import v23 from "../assets/v23.png";
import v24 from "../assets/v24.png";
import v31 from "../assets/v31.png";
import v32 from "../assets/v32.png";
import v33 from "../assets/v33.png";
import v34 from "../assets/v34.png";
import v35 from "../assets/v35.png";
import v36 from "../assets/v36.png";
import v37 from "../assets/v37.png";
import v38 from "../assets/v38.png";
import v41 from "../assets/v41.png";
import v42 from "../assets/v42.png";
import v43 from "../assets/v43.png";
import v44 from "../assets/v44.png";

const verticals = [
  {
    id: 1,
    title: "Innovation Hub on Grassroots Technologies",
    text: "This centre focuses on developing sustainable biodegradable plastics and innovative waste management solutions. It promotes eco-friendly alternatives to traditional polymers, supports research in material recycling, and encourages industries to adopt green production methods. The initiative aims to reduce environmental pollution and foster circular economy practices through advanced technological interventions.",
    icon: <GiPlantSeed size={55} />,
    images: [v1],
  },
  {
    id: 2,
    title: "Technology Hub for Semiconductor & Artificial Intelligence",
    text: "This centre focuses on developing sustainable biodegradable plastics and innovative waste management solutions. It promotes eco-friendly alternatives to traditional polymers, supports research in material recycling, and encourages industries to adopt green production methods. The initiative aims to reduce environmental pollution and foster circular economy practices through advanced technological interventions.",
    icon: <FaBrain size={55} />,
    images: [v21, v22, v23, v24],
  },
  {
    id: 3,
    title: "CoE for Bamboo Innovation & Skill Development",
    text: "This centre focuses on developing sustainable biodegradable plastics and innovative waste management solutions. It promotes eco-friendly alternatives to traditional polymers, supports research in material recycling, and encourages industries to adopt green production methods. The initiative aims to reduce environmental pollution and foster circular economy practices through advanced technological interventions.",
    icon: <GiBamboo size={55} />,
    images: [v31, v32, v33, v34, v35, v36, v37, v38],
  },
  {
    id: 4,
    title:
      "Centre on Biodegradable, eco-friendly Plastics & Solid-Waste Management",
    text: "This centre focuses on developing sustainable biodegradable plastics and innovative waste management solutions. It promotes eco-friendly alternatives to traditional polymers, supports research in material recycling, and encourages industries to adopt green production methods. The initiative aims to reduce environmental pollution and foster circular economy practices through advanced technological interventions.",
    icon: <GiRecycle size={55} />,
    images: [v41, v42, v43, v44],
  },
];

const Verticals = () => {
  const [active, setActive] = useState(0);

  return (
    <Element name="verticals">
      {" "}
      {/* scroll target */}
      <section className="relative py-24 bg-white">
        {/* Geometry / brand overlay */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* soft gradient blobs */}
          <div
            className="absolute -top-24 -left-24 w-[28rem] h-[28rem] blur-3xl opacity-20"
            style={{
              background:
                "radial-gradient(closest-side, rgba(26,62,114,.30), transparent)",
            }}
          />
          <div
            className="absolute -bottom-24 -right-24 w-[30rem] h-[30rem] blur-3xl opacity-20"
            style={{
              background:
                "radial-gradient(closest-side, rgba(251,191,36,.30), transparent)",
            }}
          />

          {/* brand squares */}
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/10 -translate-y-1/3 -rotate-45" />
          <div className="absolute top-1/2 right-1/5 w-96 h-96 bg-accent/10 translate-y-1/4 rotate-12" />
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-primary/10 translate-x-1/4 -translate-y-1/4 rotate-30" />
          <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-accent/10 -rotate-12" />

          {/* subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(currentColor 1px, transparent 1px)",
              color: "rgba(0,0,0,.6)",
              backgroundSize: "18px 18px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Heading */}
          <header className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-playfair text-gray-900">
              Our Verticals
            </h2>
            <div className="mt-4 h-1 w-24 bg-accent mx-auto rounded-full" />
          </header>

          {/* Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {verticals.map(({ id, title, icon }) => (
              <div
                onClick={() => setActive(id)}
                key={id}
                className="group relative rounded-3xl bg-white/90 backdrop-blur-sm
                border border-gray-100 shadow-xl hover:shadow-2xl hover:scale-[1.07]
                transition-all duration-300 overflow-hidden 
                p-12 cursor-pointer min-h-[340px]"
              >
                {/* Accent bar */}
                <span className="absolute inset-x-0 top-0 h-1.5 bg-accent" />

                {/* clipped accent triangle */}
                <span
                  className="absolute right-0 top-0 w-10 h-10 bg-accent/20"
                  style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                />

                {/* Icon bubble */}
                <div className="flex justify-center -mt-1 mb-5">
                  <div className="p-8 rounded-full bg-white ring-1 ring-gray-100 shadow-sm text-primary">
                    {icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[26px] font-semibold text-gray-800 text-center">
                  {title}
                </h3>

                {/* subtle hover underline */}
                <div className="mt-5 h-[2px] w-0 bg-primary/20 mx-auto rounded group-hover:w-24 transition-all" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex jusitfy-center w-[100vw] px-16">
          {active !== 0 && (
            <VerticalCard
              icon={verticals[active - 1].icon}
              title={verticals[active - 1].title}
              images={verticals[active - 1].images}
            />
          )}
        </div>
      </section>
    </Element>
  );
};

export default Verticals;
