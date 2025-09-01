"use client";

import { useEffect, useRef } from "react";

const GlowCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();
  const trailRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Sparkles
      if (Math.random() > 0.8) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.transform = `translate3d(${e.clientX - 3 + Math.random() * 30 - 15}px, ${
          e.clientY - 3 + Math.random() * 30 - 15
        }px, 0)`;
        document.body.appendChild(sparkle);

        setTimeout(() => {
          sparkle.remove();
        }, 1000);
      }
    };

    // Smooth cursor loop
    const animate = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.2;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - 15}px, ${
          cursorPos.current.y - 15
        }px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current!);
    };
  }, []);

  return <div ref={cursorRef} className="glow-cursor pulse dual-ring-cursor"></div>;
};

export default GlowCursor;
