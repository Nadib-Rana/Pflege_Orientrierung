import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export function BrandLogo({ className, variant = "light", showTagline = false }: BrandLogoProps) {
  const isDark = variant === "dark";

  return (
    <Link href="/" className={cn("inline-flex items-center gap-2 select-none group", className)}>
      {/* Exact 4-Petal Compass Star Logo from screenshot */}
      <div className="relative flex h-7 w-7 items-center justify-center shrink-0">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 transition-transform group-hover:scale-105"
        >
          {/* Top Petal (Navy) */}
          <path
            d="M16 2C16 2 12.5 8.5 12.5 13C12.5 14.933 14.067 16.5 16 16.5C17.933 16.5 19.5 14.933 19.5 13C19.5 8.5 16 2 16 2Z"
            fill={isDark ? "#38BDF8" : "#0F2E59"}
          />
          {/* Bottom Petal (Navy) */}
          <path
            d="M16 30C16 30 19.5 23.5 19.5 19C19.5 17.067 17.933 15.5 16 15.5C14.067 15.5 12.5 17.067 12.5 19C12.5 23.5 16 30 16 30Z"
            fill={isDark ? "#38BDF8" : "#0F2E59"}
          />
          {/* Left Petal (Teal / Aqua) */}
          <path
            d="M2 16C2 16 8.5 19.5 13 19.5C14.933 19.5 16.5 17.933 16.5 16C16.5 14.067 14.933 12.5 13 12.5C8.5 12.5 2 16 2 16Z"
            fill="#00BFA5"
          />
          {/* Right Petal (Teal / Aqua) */}
          <path
            d="M30 16C30 16 23.5 12.5 19 12.5C17.067 12.5 15.5 14.067 15.5 16C15.5 17.933 17.067 19.5 19 19.5C23.5 19.5 30 16 30 16Z"
            fill="#00BFA5"
          />
        </svg>
      </div>

      {/* Brand Name */}
      <div className="flex flex-col">
        <div className="flex items-center text-lg font-bold tracking-tight leading-none font-sans">
          <span className={isDark ? "text-white" : "text-[#0F2E59]"}>Pflege</span>
          <span className="text-[#00BFA5] font-normal">Orientierung</span>
        </div>
        {showTagline && (
          <span className={cn("text-[10px] mt-1 font-normal tracking-wide", isDark ? "text-slate-400" : "text-slate-500")}>
            Guiding Care with Confidence
          </span>
        )}
      </div>
    </Link>
  );
}

export default BrandLogo;
