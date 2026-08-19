import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export function BrandLogo({ className, variant = "light", showTagline = false }: BrandLogoProps) {
  const isDark = variant === "dark";
  const logoSrc = isDark
    ? "/LogoPflegeOrientierung/PNG/Horizental white   color  logo t .png"
    : "/LogoPflegeOrientierung/PNG/Horizental logo t.png";

  return (
    <Link href="/" className={cn("inline-flex flex-col select-none group", className)}>
      <div className="relative h-8 sm:h-9 w-44 sm:w-52">
        <Image
          src={logoSrc}
          alt="Pflege Orientierung"
          fill
          priority
          className="object-contain object-left transition-transform group-hover:scale-102"
          sizes="(max-width: 768px) 180px, 220px"
        />
      </div>

      {showTagline && (
        <span
          className={cn(
            "text-[10px] font-normal tracking-wide pl-0.5 mt-0.5",
            isDark ? "text-slate-400" : "text-slate-500"
          )}
        >
          Guiding Care with Confidence
        </span>
      )}
    </Link>
  );
}

export default BrandLogo;
