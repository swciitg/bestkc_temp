// src/components/EnhancedCarousel.jsx
import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    heading: 'Uniting Northeast for a Tech-Driven Tomorrow',
    text: 'A dynamic ecosystem to empower research, innovation, and entrepreneurship across the North Eastern region.',
    bgColor: 'bg-[#4a3480]',
  },
  {
    id: 2,
    heading: 'From Ideas to Impact – Fueling Innovation, Skills & Startups',
    text: 'NEST Cluster bridges academia, industry, and society to transform knowledge into scalable solutions for regional development.',
    bgColor: 'bg-[#2e2363]',
  },
  {
    id: 3,
    heading: 'Nurturing Local Ideas into Lifelong Solutions',
    text: 'Empowering rural innovation through tinkering labs, prototyping, and inclusive technology for real-world challenges.',
    bgColor: 'bg-[#1e1747]',
  },
  {
    id: 4,
    heading: 'Shaping the Future with AI, Data Science & Chip Technologies',
    text: 'Advanced training, R&D, and hardware innovation for a digitally empowered Northeast.',
    bgColor: 'bg-[#4a3480]',
  },
  {
    id: 5,
    heading: 'Green Gold for a Greener Economy',
    text: 'Unlocking the potential of bamboo for sustainable products, rural livelihood, and entrepreneurial growth.',
    bgColor: 'bg-[#2e2363]',
  },
  {
    id: 6,
    heading: 'Innovating for a Plastic-Free, Sustainable Northeast',
    text: 'Pioneering bioplastics, microplastic awareness, and waste-to-value technologies for environmental transformation.',
    bgColor: 'bg-[#1e1747]',
  },
];

const EnhancedCarousel = () => {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const slideCount = slides.length;

  // Scroll to a specific slide
  const scrollTo = (index) => {
    const width = containerRef.current.offsetWidth;
    containerRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
    setCurrent(index);
  };

  const prev = () => scrollTo((current - 1 + slideCount) % slideCount);
  const next = () => scrollTo((current + 1) % slideCount);

  // Auto-play every 5s
  useEffect(() => {
    const timer = setInterval(() => next(), 5000);
    return () => clearInterval(timer);
  }, [current]);

  // Re-scroll on resize
  useEffect(() => {
    const onResize = () => scrollTo(current);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [current]);

  return (
    <div className="relative w-full overflow-hidden group">
      {/* Slides */}
      <div
        ref={containerRef}
        className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory h-96 md:h-[500px]"
      >
        {slides.map(({ id, heading, text, bgColor }, idx) => (
          <div
            key={id}
            className={`relative min-w-full snap-center flex-shrink-0 ${bgColor}`}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 opacity-25 bg-black" />

            {/* Content panel */}
            <div className="relative max-w-2xl mx-auto h-full flex flex-col justify-center px-6">
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                {heading}
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/70 p-3 rounded-full text-gray-800 z-10 transition"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/70 p-3 rounded-full text-gray-800 z-10 transition"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? 'bg-white' : 'bg-white/50'
            } transition`}
          />
        ))}
      </div>
    </div>
  );
};

export default EnhancedCarousel;
