// src/components/Verticals.jsx

import React from 'react';
import { GiPlantSeed, GiBamboo, GiRecycle } from 'react-icons/gi';
import { FaBrain } from 'react-icons/fa';

const verticals = [
  {
    id: 1,
    title: 'Innovation Hub on Grassroots Technologies',
    icon: <GiPlantSeed size={32} />,
    accent: 'bg-green-500',
  },
  {
    id: 2,
    title: 'Technology Hub for AI & Semiconductor',
    icon: <FaBrain size={32} />,
    accent: 'bg-indigo-500',
  },
  {
    id: 3,
    title: 'CoE for Bamboo Innovation & Skill Development',
    icon: <GiBamboo size={32} />,
    accent: 'bg-emerald-500',
  },
  {
    id: 4,
    title: 'Centre on Biodegradable Plastics & Waste Management',
    icon: <GiRecycle size={32} />,
    accent: 'bg-teal-500',
  },
];

const Verticals = () => (
  <section className="py-32 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-5xl font-playfair text-center text-gray-800 mb-16">
        Our Verticals
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {verticals.map(({ id, title, icon, accent }) => (
          <div
            key={id}
            className="group relative bg-gray-50 rounded-2xl shadow-sm overflow-hidden
                       p-8 flex flex-col items-center text-center
                       transition-shadow duration-300 hover:shadow-xl"
          >
            {/* Accent stripe at the top */}
            <div className={`absolute inset-x-0 top-0 h-1.5 ${accent}`} />

            {/* Icon */}
            <div className={`p-4 rounded-full bg-white shadow-md text-gray-800 mb-6 mt-4`}>
              {icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">
              {title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Verticals;