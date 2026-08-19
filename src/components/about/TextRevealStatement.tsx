"use client";

import React, { useEffect, useRef, useState } from "react";

interface TextRevealStatementProps {
  text: string;
}

export function TextRevealStatement({ text }: TextRevealStatementProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const words = text.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress between when the element enters and when it reaches center/top of viewport
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;

      const current = rect.top;
      const rawProgress = (start - current) / (start - end);
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-6">
      <p className="text-xl sm:text-2xl md:text-[28px] font-bold leading-relaxed tracking-tight flex flex-wrap justify-center gap-x-2 gap-y-1">
        {words.map((word, index) => {
          // Determine the threshold for this word
          const wordProgressThreshold = index / words.length;
          const isRevealed = scrollProgress >= wordProgressThreshold;

          // Smooth opacity/color transition
          return (
            <span
              key={index}
              className="transition-colors duration-300 select-none inline-block"
              style={{
                color: isRevealed ? "#0C2B4E" : "#94A3B8",
              }}
            >
              {word}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default TextRevealStatement;
