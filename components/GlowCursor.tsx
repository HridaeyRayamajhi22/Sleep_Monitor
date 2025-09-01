"use client";

import { useEffect, useRef } from "react";

const GlowCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
      }

      // trail system with animation frame
      if (trailRefs.current.length < 6) {
        const trail = document.createElement("div");
        trail.className = "cursor-trail";
        document.body.appendChild(trail);
        trailRefs.current.push(trail);
      }

      requestAnimationFrame(() => {
        trailRefs.current.forEach((trail, index) => {
          if (trail) {
            trail.style.left = `${mouseX}px`;
            trail.style.top = `${mouseY}px`;
            trail.style.opacity = `${0.9 - index * 0.15}`;
          }
        });
      });

      // update aura ring
      if (ringRef.current) {
        ringRef.current.style.left = `${mouseX}px`;
        ringRef.current.style.top = `${mouseY}px`;
      }

      // occasional sparkle
      if (Math.random() > 0.88) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.left = `${mouseX + Math.random() * 20 - 10}px`;
        sparkle.style.top = `${mouseY + Math.random() * 20 - 10}px`;
        document.body.appendChild(sparkle);

        setTimeout(() => {
          sparkle.remove();
        }, 1200);
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.classList.add("hover");
      if (!ringRef.current) {
        const ring = document.createElement("div");
        ring.className = "outer-ring";
        document.body.appendChild(ring);
        ringRef.current = ring;
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.classList.remove("hover");
      if (ringRef.current) {
        ringRef.current.remove();
        ringRef.current = null;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, [tabindex]"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      trailRefs.current.forEach((t) => t.remove());
      if (ringRef.current) ringRef.current.remove();
    };
  }, []);

  return <div ref={cursorRef} className="glow-cursor pulse"></div>;
};

export default GlowCursor;
