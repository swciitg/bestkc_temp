// src/components/Verticals.jsx
import { GiPlantSeed, GiBamboo, GiRecycle } from 'react-icons/gi';
import { useState } from 'react';
import { FaBrain } from 'react-icons/fa';
import { Element } from 'react-scroll';
import VerticalCard from '../components/verticlesData';

const verticals = [
  {
    id: 1,
    title: 'Innovation Hub on Grassroots Technologies',
    text : "This centre focuses on developing sustainable biodegradable plastics and innovative waste management solutions. It promotes eco-friendly alternatives to traditional polymers, supports research in material recycling, and encourages industries to adopt green production methods. The initiative aims to reduce environmental pollution and foster circular economy practices through advanced technological interventions." ,
     icon: <GiPlantSeed size={40} />,
  },
  {
    id: 2,
    title: 'Technology Hub for AI & Semiconductor',
    text : "This centre focuses on developing sustainable biodegradable plastics and innovative waste management solutions. It promotes eco-friendly alternatives to traditional polymers, supports research in material recycling, and encourages industries to adopt green production methods. The initiative aims to reduce environmental pollution and foster circular economy practices through advanced technological interventions." ,
     icon: <FaBrain size={40} />,
  },
  {
    id: 3,
    title: 'CoE for Bamboo Innovation & Skill Development',
    text : "This centre focuses on developing sustainable biodegradable plastics and innovative waste management solutions. It promotes eco-friendly alternatives to traditional polymers, supports research in material recycling, and encourages industries to adopt green production methods. The initiative aims to reduce environmental pollution and foster circular economy practices through advanced technological interventions." , 
    icon: <GiBamboo size={40} />,
  },
  {
    id: 4,
    title: 'Centre on Biodegradable Plastics & Waste Management',
    text : "This centre focuses on developing sustainable biodegradable plastics and innovative waste management solutions. It promotes eco-friendly alternatives to traditional polymers, supports research in material recycling, and encourages industries to adopt green production methods. The initiative aims to reduce environmental pollution and foster circular economy practices through advanced technological interventions." ,
     icon: <GiRecycle size={40} />,
  },
];

const Verticals = () => {
  const [active, setActive] = useState(0);

  return (
    <Element name="verticals"> {/* 👈 scroll target */}
    <section className="relative py-24 bg-white">
      {/* Geometry / brand overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* soft gradient blobs */}
        <div
          className="absolute -top-24 -left-24 w-[28rem] h-[28rem] blur-3xl opacity-20"
          style={{
            background:
              'radial-gradient(closest-side, rgba(26,62,114,.30), transparent)',
          }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-[30rem] h-[30rem] blur-3xl opacity-20"
          style={{
            background:
              'radial-gradient(closest-side, rgba(251,191,36,.30), transparent)',
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
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
            color: 'rgba(0,0,0,.6)',
            backgroundSize: '18px 18px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
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
              className="group relative rounded-2xl bg-white/90 backdrop-blur-sm
                        border border-gray-100 shadow-sm hover:shadow-xl
                        transition-all duration-300 overflow-hidden p-6"
            >
              {/* Accent bar */}
              <span className="absolute inset-x-0 top-0 h-1.5 bg-accent" />

              {/* clipped accent triangle */}
              <span
                className="absolute right-0 top-0 w-10 h-10 bg-accent/20"
                style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
              />

              {/* Icon bubble */}
              <div className="flex justify-center -mt-1 mb-5">
                <div className="p-3 rounded-full bg-white ring-1 ring-gray-100 shadow-sm text-primary">
                  {icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-gray-800 text-center">
                {title}
              </h3>

              {/* subtle hover underline */}
              <div className="mt-5 h-[2px] w-0 bg-primary/20 mx-auto rounded group-hover:w-24 transition-all" />
            </div>
          ))}
        </div>

        { 
          active !== 0 && 
          <VerticalCard icon={verticals[active - 1].icon} title={verticals[active - 1].title} text={verticals[active - 1].text}/>
        }
      </div>
    </section>
  </Element>
  )
};

export default Verticals;
