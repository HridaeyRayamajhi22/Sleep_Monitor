"use client";

import React, { useState } from "react";

export default function SleepAnimation() {
  const [activeStars, setActiveStars] = useState(new Set());
  const [moonPhase, setMoonPhase] = useState(0);
  const [lastClickPosition, setLastClickPosition] = useState({ x: 0, y: 0 });

  // Generate stars with different properties
  const stars = React.useMemo(() => {
    return [...Array(25)].map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.8 + 0.2,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 3,
      twinkleSpeed: Math.random() * 2 + 2,
    }));
  }, []);

  // Generate floating dream elements
  const dreamElements = React.useMemo(() => {
    return [...Array(8)].map((_, i) => ({
      id: i,
      type: Math.random() > 0.5 ? "moon" : "star",
      top: Math.random() * 70 + 15,
      left: Math.random() * 80 + 10,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 4,
      duration: Math.random() * 6 + 4,
    }));
  }, []);

  // Handle star click - make it sparkle
  const handleStarClick = (starId, e) => {
    e.stopPropagation();
    
    // Add to active stars
    const newActiveStars = new Set(activeStars);
    newActiveStars.add(starId);
    setActiveStars(newActiveStars);
    
    // Remove after animation completes
    setTimeout(() => {
      setActiveStars(prev => {
        const updated = new Set(prev);
        updated.delete(starId);
        return updated;
      });
    }, 2000);
  };

  // Handle background click - create ripple effect
  const handleBackgroundClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLastClickPosition({ x, y });
    
    // Cycle through moon phases
    setMoonPhase((prev) => (prev + 1) % 4);
  };

  // Get moon phase SVG based on current phase
  const getMoonPhase = () => {
    const phases = [
      // New moon (dark)
      <path d="M10,0 A10,10 0 1,1 10,0.1 Z" fill="#1a202c" />,
      // Waxing crescent
      <path d="M10,0 A10,10 0 1,1 10,0.1 A5,5 0 1,0 10,0 Z" fill="#e2e8f0" />,
      // First quarter
      <path d="M10,0 A10,10 0 1,1 10,0.1 A10,10 0 1,0 10,0 Z" fill="#e2e8f0" />,
      // Waxing gibbous
      <path d="M10,0 A10,10 0 1,1 10,0.1 A7,7 0 1,0 10,0 Z" fill="#e2e8f0" />
    ];
    return phases[moonPhase];
  };

  return (
    <div 
      className="relative w-full h-64 overflow-hidden cursor-pointer"
      onClick={handleBackgroundClick}
    >
      {/* Cosmic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-indigo-900/10"></div>

      {/* Interactive ripple effect */}
      {lastClickPosition.x > 0 && (
        <div 
          className="absolute rounded-full bg-blue-400/20 animate-ripple"
          style={{
            top: `${lastClickPosition.y}%`,
            left: `${lastClickPosition.x}%`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
      )}

      {/* Nebula glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-400/30 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400/30 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-purple-400/30 rounded-full blur-2xl animate-pulse-slow delay-2000"></div>
      </div>

      {/* Interactive stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute bg-white rounded-full cursor-pointer transition-all duration-300 ${
            activeStars.has(star.id) 
              ? 'animate-star-explode' 
              : 'animate-cosmic-twinkle hover:scale-150 hover:opacity-100'
          }`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${activeStars.has(star.id) ? '2s' : `${star.duration}s`}`,
            opacity: activeStars.has(star.id) ? 1 : star.opacity,
          }}
          onClick={(e) => handleStarClick(star.id, e)}
          title="Click me!"
        />
      ))}

      {/* Central moon with phase change */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
        <div className="relative w-20 h-20">
          <svg viewBox="0 0 20 20" className="w-full h-full">
            <circle cx="10" cy="10" r="10" fill="#e2e8f0" />
            {getMoonPhase()}
          </svg>
          {/* Moon glow */}
          <div className="absolute -inset-6 rounded-full bg-blue-400/20 blur-2xl animate-pulse"></div>
        </div>
      </div>

      {/* Floating interactive dream elements */}
      {dreamElements.map((element) => (
        <div
          key={element.id}
          className={`absolute cursor-pointer transition-transform duration-500 hover:scale-125 hover:animate-none ${
            element.type === "moon" 
              ? "text-yellow-200/60 hover:text-yellow-200" 
              : "text-cyan-300/70 hover:text-cyan-300"
          }`}
          style={{
            top: `${element.top}%`,
            left: `${element.left}%`,
            fontSize: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
          }}
          onClick={(e) => {
            e.stopPropagation();
            // Create a small animation effect
            const el = e.currentTarget;
            el.style.transform = 'scale(1.5)';
            setTimeout(() => {
              el.style.transform = '';
            }, 300);
          }}
        >
          {element.type === "moon" ? "🌙" : "✨"}
        </div>
      ))}

      {/* Orbiting planets with hover effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-40 h-40">
          {/* Orbit path */}
          <div className="absolute inset-0 border border-blue-400/20 rounded-full"></div>
          
          {/* Planet 1 */}
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-orange-400 to-red-400 rounded-full shadow-lg animate-orbit cursor-pointer hover:scale-150 hover:shadow-xl transition-transform duration-300"
            style={{ animationDuration: '15s' }}
            title="Hot planet"
          ></div>
          
          {/* Planet 2 */}
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-5 h-5 bg-gradient-to-br from-green-400 to-teal-400 rounded-full shadow-lg animate-orbit-reverse cursor-pointer hover:scale-150 hover:shadow-xl transition-transform duration-300"
            style={{ animationDuration: '12s' }}
            title "Cool planet"
          ></div>
        </div>
      </div>

      {/* Interactive sleep waves */}
      <div className="absolute bottom-0 left-0 right-0 h-8 flex justify-center items-end space-x-1">
        {[1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1].map((height, i) => (
          <div
            key={i}
            className="bg-gradient-to-t from-blue-400/50 to-purple-400/50 rounded-t-full animate-wave cursor-pointer hover:from-blue-400/80 hover:to-purple-400/80 transition-colors duration-300"
            style={{
              width: "8px",
              height: `${height * 3}px`,
              animationDelay: `${i * 0.2}s`,
            }}
            onClick={(e) => {
              e.stopPropagation();
              // Create a wave effect
              const el = e.currentTarget;
              el.style.height = `${height * 5}px`;
              setTimeout(() => {
                el.style.height = '';
              }, 300);
            }}
          ></div>
        ))}
      </div>

      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        {[...Array(5)].map((_, i) => (
          <line
            key={i}
            x1={`${Math.random() * 30 + 10}%`}
            y1={`${Math.random() * 30 + 10}%`}
            x2={`${Math.random() * 30 + 60}%`}
            y2={`${Math.random() * 30 + 60}%`}
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Instructions tooltip */}
      <div className="absolute bottom-2 right-2 bg-black/40 text-xs text-white/70 px-2 py-1 rounded-lg backdrop-blur-sm">
        Click anywhere!
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes cosmic-twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes star-explode {
          0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(255,255,255,0.7); }
          50% { transform: scale(3); opacity: 0.8; box-shadow: 0 0 0 10px rgba(255,255,255,0); }
          100% { transform: scale(1); opacity: 0.3; box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }
        @keyframes float-dream {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); opacity: 0.5; }
          25% { transform: translateY(-8px) rotate(5deg) scale(1.1); opacity: 0.8; }
          50% { transform: translateY(-12px) rotate(0deg) scale(1.2); opacity: 1; }
          75% { transform: translateY(-8px) rotate(-5deg) scale(1.1); opacity: 0.8; }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
        }
        @keyframes orbit-reverse {
          0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(20px) rotate(360deg); }
        }
        @keyframes wave {
          0%, 100% { height: 6px; opacity: 0.5; }
          50% { height: 12px; opacity: 1; }
        }
        @keyframes ripple {
          0% { width: 0; height: 0; opacity: 0.5; }
          100% { width: 200px; height: 200px; opacity: 0; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-cosmic-twinkle {
          animation: cosmic-twinkle 4s infinite ease-in-out;
        }
        .animate-star-explode {
          animation: star-explode 2s ease-out;
        }
        .animate-float-dream {
          animation: float-dream 8s infinite ease-in-out;
        }
        .animate-orbit {
          animation: orbit 15s infinite linear;
        }
        .animate-orbit-reverse {
          animation: orbit-reverse 12s infinite linear;
        }
        .animate-wave {
          animation: wave 2s infinite ease-in-out;
        }
        .animate-ripple {
          animation: ripple 1.5s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}