import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export function BrandLogo({ className, variant = "light", showTagline = false }: BrandLogoProps) {
  const isDarkVariant = variant === "dark";

  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5 select-none group", className)}>
      {/* Compass / Medical cross styled logo icon */}
      <div className="relative flex h-8 w-8 items-center justify-center shrink-0">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 transition-transform group-hover:scale-105"
        >
          {/* Top Petal */}
          <path
            d="M18 2C18 2 13 10 13 15C13 17.7614 15.2386 20 18 20C20.7614 20 23 17.7614 23 15C23 10 18 2 18 2Z"
            fill="#0D9488"
            opacity="0.9"
          />
          {/* Bottom Petal */}
          <path
            d="M18 34C18 34 23 26 23 21C23 18.2386 20.7614 16 18 16C15.2386 16 13 18.2386 13 21C13 26 18 34 18 34Z"
            fill="#0F766E"
            opacity="0.9"
          />
          {/* Left Petal */}
          <path
            d="M2 18C2 18 10 23 15 23C17.7614 23 20 20.7614 20 18C20 15.2386 17.7614 13 15 13C10 13 2 18 2 18Z"
            fill="#1E3A8A"
            opacity="0.95"
          />
          {/* Right Petal */}
          <path
            d="M34 18C34 18 26 13 21 13C18.2386 13 16 15.2386 16 18C16 20.7614 18.2386 23 21 23C26 23 34 18 34 18Z"
            fill="#3B82F6"
            opacity="0.85"
          />
          <circle cx="18" cy="18" r="3" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={cn(
            "text-lg font-bold tracking-tight leading-none font-sans",
            isDarkVariant ? "text-white" : "text-[#0F172A]"
          )}
        >
          Pflege<span className="text-[#0D9488]">Orientierung</span>
        </span>
        {showTagline && (
          <span className={cn("text-[11px] mt-0.5 tracking-normal", isDarkVariant ? "text-slate-400" : "text-muted-foreground")}>
            Guiding Care with Confidence
          </span>
        )}
      </div>
    </Link>
  );
}

export default BrandLogo;
