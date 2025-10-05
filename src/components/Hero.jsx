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
  const [paused, setPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const slideCount = slides.length;

  // Utility: scroll to a specific slide
  const scrollTo = (index) => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth; // clientWidth is safer than offsetWidth
    containerRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
    setCurrent(index);
  };

  // Prev / Next
  const prev = () => scrollTo((current - 1 + slideCount) % slideCount);
  const next = () => scrollTo((current + 1) % slideCount);

  // Autoplay (pauses on hover or when user prefers reduced motion)
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (paused || prefersReduced) return;

    const timer = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, paused]);

  // Keep slide aligned on resize (ResizeObserver works best)
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(() => {
      scrollTo(current);
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // Touch / swipe support
  const onTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX == null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    const threshold = 50; // px
    if (diff > threshold) prev();
    if (diff < -threshold) next();
    setTouchStartX(null);
  };

  return (
    <div
      className="relative w-full overflow-hidden group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div
        ref={containerRef}
        className="
          flex overflow-x-hidden scroll-smooth snap-x snap-mandatory
          h-[48vh] min-h-[280px] md:h-[56vh] lg:h-[64vh] xl:h-[68vh]
        "
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        aria-roledescription="carousel"
        aria-live="polite"
      >
        {slides.map(({ id, heading, text, bgColor }, idx) => (
          <section
            key={id}
            className={`relative min-w-full snap-center flex-shrink-0 ${bgColor}`}
            role="group"
            aria-label={`Slide ${idx + 1} of ${slideCount}`}
          >
            {/* Dark overlay for legibility */}
            <div className="absolute inset-0 bg-black/25" />

            {/* Content panel */}
            <div
              className="
                relative h-full max-w-5xl
                mx-auto px-4 sm:px-6 lg:px-10
                flex flex-col justify-center
                text-white
              "
            >
              <h3
                className="
                  font-semibold leading-snug mb-3
                  text-[clamp(20px,4.5vw,42px)]
                "
              >
                {heading}
              </h3>
              <p className="text-white/90 leading-relaxed text-[clamp(14px,2.2vw,18px)] max-w-3xl">
                {text}
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="
          absolute left-3 sm:left-4 top-1/2 -translate-y-1/2
          bg-white/60 hover:bg-white/80 text-gray-800
          p-2 sm:p-3 rounded-full z-10 transition
          focus:outline-none focus:ring-2 focus:ring-white/80
        "
      >
        <FaChevronLeft size={18} className="sm:hidden" />
        <FaChevronLeft size={20} className="hidden sm:block" />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="
          absolute right-3 sm:right-4 top-1/2 -translate-y-1/2
          bg-white/60 hover:bg-white/80 text-gray-800
          p-2 sm:p-3 rounded-full z-10 transition
          focus:outline-none focus:ring-2 focus:ring-white/80
        "
      >
        <FaChevronRight size={18} className="sm:hidden" />
        <FaChevronRight size={20} className="hidden sm:block" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-4 inset-x-0 flex justify-center space-x-2 sm:space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`
              transition
              rounded-full
              ${current === idx ? 'bg-white w-3 h-3 sm:w-3.5 sm:h-3.5' : 'bg-white/60 w-2.5 h-2.5 sm:w-3 sm:h-3'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default EnhancedCarousel;
