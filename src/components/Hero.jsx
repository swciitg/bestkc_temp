import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    title: 'Enabling Outcome Driven Collaborations Across Sectors',
    bg: 'bg-[#4a3480] p-8'
  },
  {
    id: 2,
    title: 'Driven by alignment with local, regional and National goals',
    bg: 'bg-[#2e2363] p-8'
  },
  {
    id: 3,
    title: "Bolstering the region's position as a global powerhouse of innovation",
    bg: 'bg-[#1e1747] p-8'
  },
  {
    id: 4,
    title: 'Fostering a vibrant ecosystem for scientific advancement',
    bg: 'bg-[#4a3480] p-8'
  }
];

const Carousel = () => {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const scrollTo = index => {
    const width = containerRef.current.offsetWidth;
    containerRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
    setCurrent(index);
  };

  const prev = () => scrollTo((current - 1 + slides.length) % slides.length);
  const next = () => scrollTo((current + 1) % slides.length);

  // On resize, re-scroll to active
  useEffect(() => {
    scrollTo(current);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Arrow */}
      <button onClick={prev} aria-label="Previous" className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-30 rounded-full hover:bg-opacity-50 transition">
        <FaChevronLeft size={24} className="text-white" />
      </button>

      {/* Right Arrow */}
      <button onClick={next} aria-label="Next" className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-30 rounded-full hover:bg-opacity-50 transition">
        <FaChevronRight size={24} className="text-white" />
      </button>

      {/* Slides Container */}
      <div ref={containerRef} className="flex w-full overflow-x-hidden scroll-smooth snap-x snap-mandatory">
        {slides.map((slide, idx) => (
          <div key={slide.id} className={`min-w-full h-[500px] relative flex items-center justify-center ${slide.bg} snap-center`}>            
            <div className="absolute left-1/12 max-w-lg text-white">
              <h3 className="text-4xl p-8 font-light leading-snug mb-4">
                {slide.title.split(' ').slice(0, slide.title.length).join(' ')}
              </h3>
            </div>
            {/* Placeholder graphic block */}
            <div className="absolute right-1/12 w-1/3 h-full bg-white bg-opacity-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
