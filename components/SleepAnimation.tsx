"use client";

import React, { useState, useEffect } from "react";

export default function SleepAnimation() {
  const [isMounted, setIsMounted] = useState(false);
  const [stars, setStars] = useState<Array<{size: number, top: number, left: number, opacity: number, delay: number, duration: number}>>([]);
  const [dreamElements, setDreamElements] = useState<Array<{type: string, top: number, left: number, size: number, delay: number, duration: number}>>([]);

  useEffect(() => {
    setIsMounted(true);
    
    // Generate stars with different properties
    const generatedStars = [...Array(25)].map(() => ({
      size: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.8 + 0.2,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 3,
    }));
    
    // Generate floating dream elements
    const generatedDreamElements = [...Array(8)].map(() => ({
      type: Math.random() > 0.5 ? "moon" : "star",
      top: Math.random() * 70 + 15,
      left: Math.random() * 80 + 10,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 4,
      duration: Math.random() * 6 + 4,
    }));
    
    setStars(generatedStars);
    setDreamElements(generatedDreamElements);
  }, []);

  // Don't render anything until component is mounted on client
  if (!isMounted) {
    return (
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-cyan-500/10 to-transparent"></div>
        {/* Simple static placeholder */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-20 h-20 bg-gray-200/20 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {/* Cosmic gradient background (lighter haze) */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-cyan-500/10 to-transparent"></div>

      {/* Nebula glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-400/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-purple-400/20 rounded-full blur-2xl"></div>
      </div>

      {/* Stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-cosmic-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Central crescent moon */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-20 h-20">
          {/* Main moon */}
          <div className="w-full h-full bg-gray-100 rounded-full shadow-lg shadow-blue-200/20"></div>
          {/* Crescent cutout */}
          <div className="absolute top-0 left-3 w-full h-full bg-indigo-900/70 rounded-full"></div>
          {/* Moon glow pulse */}
          <div className="absolute -inset-6 rounded-full bg-blue-400/10 blur-3xl animate-pulse"></div>
        </div>
      </div>

      {/* Floating dream elements */}
      {dreamElements.map((element, i) => (
        <div
          key={i}
          className={`absolute animate-float-dream ${
            element.type === "moon" ? "text-yellow-200/50" : "text-cyan-300/60"
          }`}
          style={{
            top: `${element.top}%`,
            left: `${element.left}%`,
            fontSize: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
          }}
        >
          {element.type === "moon" ? "🌙" : "✨"}
        </div>
      ))}

      {/* Orbiting planets */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 border border-blue-400/10 rounded-full"></div>
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-orange-400 to-red-400 rounded-full shadow-lg animate-orbit"
            style={{ animationDuration: "15s" }}
          ></div>
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-5 h-5 bg-gradient-to-br from-green-400 to-teal-400 rounded-full shadow-lg animate-orbit-reverse"
            style={{ animationDuration: "12s" }}
          ></div>
        </div>
      </div>

      {/* Sleep waves at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 flex justify-center items-end space-x-1">
        {[1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1].map((height, i) => (
          <div
            key={i}
            className="bg-gradient-to-t from-blue-400/40 to-purple-400/40 rounded-t-full animate-wave"
            style={{
              width: "8px",
              height: `${height * 3}px`,
              animationDelay: `${i * 0.2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        {[...Array(5)].map((_, i) => (
          <line
            key={i}
            x1={`${Math.random() * 30 + 10}%`}
            y1={`${Math.random() * 30 + 10}%`}
            x2={`${Math.random() * 30 + 60}%`}
            y2={`${Math.random() * 30 + 60}%`}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes cosmic-twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
        @keyframes float-dream {
          0%,
          100% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 0.5;
          }
          25% {
            transform: translateY(-8px) rotate(5deg) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-12px) rotate(0deg) scale(1.2);
            opacity: 1;
          }
          75% {
            transform: translateY(-8px) rotate(-5deg) scale(1.1);
            opacity: 0.8;
          }
        }
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(20px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(20px) rotate(-360deg);
          }
        }
        @keyframes orbit-reverse {
          0% {
            transform: rotate(0deg) translateX(20px) rotate(0deg);
          }
          100% {
            transform: rotate(-360deg) translateX(20px) rotate(360deg);
          }
        }
        @keyframes wave {
          0%,
          100% {
            height: 6px;
            opacity: 0.5;
          }
          50% {
            height: 12px;
            opacity: 1;
          }
        }
        .animate-cosmic-twinkle {
          animation: cosmic-twinkle 4s infinite ease-in-out;
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
      `}</style>
    </div>
  );
}