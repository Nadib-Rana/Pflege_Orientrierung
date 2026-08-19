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
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Generous scroll threshold: starts when entering viewport, completes as it scrolls past center
      const start = windowHeight * 0.9;
      const end = windowHeight * 0.15;

      const current = rect.top;
      const rawProgress = (start - current) / (start - end);
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      animationFrameId = requestAnimationFrame(() => {
        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculate

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-10 sm:py-16"
    >
      <p className="text-xl sm:text-2xl md:text-[30px] font-bold leading-[1.6] tracking-tight flex flex-wrap justify-center gap-x-2.5 gap-y-2">
        {words.map((word, index) => {
          // Calculate continuous per-word smooth progress
          const totalWords = words.length;
          const wordStart = index / totalWords;
          const wordEnd = (index + 1) / totalWords;

          // Compute smooth 0 to 1 value for each specific word
          const wordProgress = Math.min(
            Math.max((scrollProgress - wordStart) / (wordEnd - wordStart), 0),
            1
          );

          return (
            <span key={index} className="relative inline-block select-none">
              {/* Ghost / Inactive Muted Base Layer */}
              <span className="text-[#CBD5E1] transition-opacity duration-150">{word}</span>

              {/* Active Dark Navy Overlay Layer with Continuous Smooth Opacity */}
              <span
                className="absolute inset-0 text-[#0C2B4E] transition-opacity duration-150"
                style={{
                  opacity: wordProgress,
                }}
              >
                {word}
              </span>
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default TextRevealStatement;
