import { useState } from 'react';

export default function CurtainAnimation({setShowCurtain}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleEnter = () => {
    setIsOpen(true);
    // Hide component completely after animation finishes
    setTimeout(() => {
      setIsHidden(true);
      setShowCurtain(false);
    }, 3500);
  };

  if (isHidden) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Left Curtain */}
      <div
        className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-red-800 via-red-600 to-red-700 shadow-2xl transition-all duration-[3000ms] ${
          isOpen ? '-translate-x-full skew-y-3' : 'translate-x-0 skew-y-0'
        }`}
        style={{
          boxShadow: '4px 0 20px rgba(127, 29, 29, 0.3)',
          transformOrigin: 'top left',
          transitionTimingFunction: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
        }}
      >
        {/* Red trim */}
        <div className="absolute top-0 right-0 w-4 h-full bg-gradient-to-r from-red-700 via-red-800 to-red-900"></div>
        
        {/* Decorative pattern */}
        <div className="absolute top-0 right-8 w-px h-full bg-gradient-to-b from-transparent via-red-800 to-transparent opacity-30"></div>
        
        {/* Fabric texture lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 h-full w-px bg-red-900"
              style={{ left: `${(i + 1) * 11}%` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Right Curtain */}
      <div
        className={`absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-red-800 via-red-600 to-red-700 shadow-2xl transition-all duration-[3000ms] ${
          isOpen ? 'translate-x-full -skew-y-3' : 'translate-x-0 skew-y-0'
        }`}
        style={{
          boxShadow: '-4px 0 20px rgba(127, 29, 29, 0.3)',
          transformOrigin: 'top right',
          transitionTimingFunction: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
        }}
      >
        {/* Red trim */}
        <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-l from-red-700 via-red-800 to-red-900"></div>
        
        {/* Decorative pattern */}
        <div className="absolute top-0 left-8 w-px h-full bg-gradient-to-b from-transparent via-red-800 to-transparent opacity-30"></div>
        
        {/* Fabric texture lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 h-full w-px bg-red-900"
              style={{ right: `${(i + 1) * 11}%` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Enter Button */}
      {!isOpen && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
          <button
            onClick={handleEnter}
            className="px-12 py-4 text-lg font-semibold text-amber-800 bg-white border-2 border-amber-300 rounded-full shadow-xl hover:bg-amber-50 hover:border-amber-400 hover:scale-105 transition-all duration-300 ease-out"
          >
            Enter
          </button>
        </div>
      )}
    </div>
  );
}