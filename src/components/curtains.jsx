import { useState } from 'react';

export default function CurtainAnimation({setShowCurtain}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [flowers, setFlowers] = useState([]);

  const handleEnter = () => {
    setIsOpen(true);
    // Generate confetti and flowers
    generateConfetti();
    generateFlowers();
    // Hide component completely after animation finishes
    setTimeout(() => {
      setIsHidden(true);
      setShowCurtain(false);
    }, 3500);
  };

  const generateConfetti = () => {
    const pieces = [];
    for (let i = 0; i < 80; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 2,
        rotation: Math.random() * 360,
        color: ['bg-red-500', 'bg-yellow-400', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500'][Math.floor(Math.random() * 6)],
        shape: Math.random() > 0.5 ? 'rounded-full' : 'rounded-sm'
      });
    }
    setConfetti(pieces);
  };

  const generateFlowers = () => {
    const flowerPieces = [];
    const flowerTypes = ['🌸', '🌸', '🌸', '🌸', '🌸', '🌸', '🌸', '🌸'];
    for (let i = 0; i < 30; i++) {
      flowerPieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.7,
        duration: 2.5 + Math.random() * 2,
        rotation: Math.random() * 360,
        flower: flowerTypes[Math.floor(Math.random() * flowerTypes.length)],
        swayDistance: 20 + Math.random() * 40
      });
    }
    setFlowers(flowerPieces);
  };

  if (isHidden) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Confetti */}
      {isOpen && confetti.map((piece) => (
        <div
          key={`confetti-${piece.id}`}
          className={`absolute w-3 h-3 ${piece.color} ${piece.shape}`}
          style={{
            left: `${piece.left}%`,
            top: '-20px',
            animation: `fall ${piece.duration}s linear ${piece.delay}s forwards`,
            transform: `rotate(${piece.rotation}deg)`
          }}
        ></div>
      ))}

      {/* Flowers */}
      {isOpen && flowers.map((flower) => (
        <div
          key={`flower-${flower.id}`}
          className="absolute text-2xl"
          style={{
            left: `${flower.left}%`,
            top: '-40px',
            animation: `fallAndSway ${flower.duration}s ease-in ${flower.delay}s forwards`,
            '--sway-distance': `${flower.swayDistance}px`,
            transform: `rotate(${flower.rotation}deg)`
          }}
        >
          {flower.flower}
        </div>
      ))}

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
            Inaugurate
          </button>
        </div>
      )}

      {/* Keyframes for animations */}
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes fallAndSway {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(50vh) translateX(var(--sway-distance)) rotate(180deg);
          }
          100% {
            transform: translateY(100vh) translateX(0) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}