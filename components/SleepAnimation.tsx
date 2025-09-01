"use client";

import React from "react";

export default function SleepAnimation() {
  // Generate stars once per component render
  const stars = React.useMemo(() => {
    return [...Array(12)].map(() => ({
      size: Math.random() * 4 + 2,
      top: Math.random() * 80 + 10,
      left: Math.random() * 80 + 10,
      opacity: Math.random() * 0.7 + 0.3,
    }));
  }, []);

  return (
    <div className="relative w-full h-64">
      {/* Moon with craters */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-24 h-24">
          {/* Main moon */}
          <div className="w-full h-full bg-yellow-200 rounded-full shadow-lg shadow-yellow-400/30 animate-pulse"></div>

          {/* Craters */}
          <div className="absolute top-4 left-6 w-6 h-6 bg-yellow-300/20 rounded-full"></div>
          <div className="absolute top-10 left-14 w-5 h-5 bg-yellow-300/20 rounded-full"></div>
          <div className="absolute top-16 left-8 w-7 h-7 bg-yellow-300/20 rounded-full"></div>
          <div className="absolute bottom-6 right-8 w-5 h-5 bg-yellow-300/20 rounded-full"></div>
        </div>
      </div>

      {/* Stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${i * 0.5}s`,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Floating Z's */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute text-xl md:text-2xl text-cyan-400/70 animate-float"
          style={{
            top: `${20 + i * 15}%`,
            left: `${Math.min(60 + i * 5, 95)}%`,
            animationDelay: `${i * 0.7}s`,
            opacity: Math.random() * 0.5 + 0.3,
          }}
        >
          Z
        </div>
      ))}

      {/* Sleep metrics visualization */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1 md:space-x-2">
        {[7, 8, 6, 7.5, 8.2, 6.5, 7.8].map((hours, i) => (
          <div
            key={i}
            className="bg-gradient-to-t from-cyan-400 to-purple-400 rounded-full animate-grow"
            style={{
              width: `${hours * 4}px`,
              height: "8px",
              animationDelay: `${i * 0.2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Cloud */}
      <div className="absolute top-8 left-10 animate-float-slow">
        <div className="flex">
          <div className="w-6 h-6 bg-gray-300/30 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300/30 rounded-full -ml-3"></div>
          <div className="w-6 h-6 bg-gray-300/30 rounded-full -ml-3"></div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-5px) rotate(-2deg); }
          66% { transform: translateY(5px) rotate(2deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(5px) translateY(3px); }
        }
        @keyframes grow {
          0% { height: 0; opacity: 0; }
          100% { height: 8px; opacity: 0.8; }
        }
        .animate-twinkle {
          animation: twinkle 4s infinite;
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
        .animate-float-slow {
          animation: float-slow 8s infinite ease-in-out;
        }
        .animate-grow {
          animation: grow 0.8s ease-out forwards;
          opacity: 0;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
}
