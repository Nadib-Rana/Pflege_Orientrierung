"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function FlagIcon({ code, className = "h-4 w-5 rounded-xs overflow-hidden" }: { code: string; className?: string }) {
  if (code === "DE") {
    return (
      <svg className={className} viewBox="0 0 640 480">
        <path fill="#000" d="M0 0h640v160H0z" />
        <path fill="#d00" d="M0 160h640v160H0z" />
        <path fill="#ffce00" d="M0 320h640v160H0z" />
      </svg>
    );
  }
  if (code === "FR") {
    return (
      <svg className={className} viewBox="0 0 640 480">
        <path fill="#002395" d="M0 0h213.3v480H0z" />
        <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
        <path fill="#ed2939" d="M426.7 0H640v480H426.7z" />
      </svg>
    );
  }
  if (code === "IT") {
    return (
      <svg className={className} viewBox="0 0 640 480">
        <path fill="#009246" d="M0 0h213.3v480H0z" />
        <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
        <path fill="#ce2b37" d="M426.7 0H640v480H426.7z" />
      </svg>
    );
  }
  // Default: US Flag
  return (
    <svg className={className} viewBox="0 0 640 480">
      <g fillRule="evenodd">
        <path fill="#bd3d44" d="M0 0h640v480H0z" />
        <path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129.2h640M0 203h640M0 277h640M0 350.8h640M0 424.6h640" />
        <path fill="#192f5d" d="M0 0h256v258.5H0z" />
        <circle cx="40" cy="35" r="8" fill="#fff" />
        <circle cx="90" cy="35" r="8" fill="#fff" />
        <circle cx="140" cy="35" r="8" fill="#fff" />
        <circle cx="190" cy="35" r="8" fill="#fff" />
        <circle cx="65" cy="70" r="8" fill="#fff" />
        <circle cx="115" cy="70" r="8" fill="#fff" />
        <circle cx="165" cy="70" r="8" fill="#fff" />
        <circle cx="215" cy="70" r="8" fill="#fff" />
        <circle cx="40" cy="105" r="8" fill="#fff" />
        <circle cx="90" cy="105" r="8" fill="#fff" />
        <circle cx="140" cy="105" r="8" fill="#fff" />
        <circle cx="190" cy="105" r="8" fill="#fff" />
        <circle cx="65" cy="140" r="8" fill="#fff" />
        <circle cx="115" cy="140" r="8" fill="#fff" />
        <circle cx="165" cy="140" r="8" fill="#fff" />
        <circle cx="215" cy="140" r="8" fill="#fff" />
        <circle cx="40" cy="175" r="8" fill="#fff" />
        <circle cx="90" cy="175" r="8" fill="#fff" />
        <circle cx="140" cy="175" r="8" fill="#fff" />
        <circle cx="190" cy="175" r="8" fill="#fff" />
        <circle cx="65" cy="210" r="8" fill="#fff" />
        <circle cx="115" cy="210" r="8" fill="#fff" />
        <circle cx="165" cy="210" r="8" fill="#fff" />
        <circle cx="215" cy="210" r="8" fill="#fff" />
      </g>
    </svg>
  );
}

export function LanguageSelector({ className }: { className?: string }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { currentLanguage, languages, setLang } = useLanguage();

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-1.5 sm:gap-2 rounded-lg border-2 border-[#0F2E59] bg-white px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#0F2E59] hover:bg-slate-50 transition-colors cursor-pointer shadow-xs"
        aria-expanded={dropdownOpen}
        aria-label="Select language"
      >
        <FlagIcon code={currentLanguage.code} className="h-3.5 w-4.5 sm:h-4 sm:w-5 rounded-xs overflow-hidden" />
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <span className="sm:hidden text-xs font-bold">{currentLanguage.code}</span>
        <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#0F2E59]" />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-36 sm:w-40 rounded-xl border border-slate-200 bg-white py-1.5 shadow-xl z-50 animate-in fade-in-50 zoom-in-95">
          {languages.map((langOpt) => (
            <button
              key={langOpt.code}
              onClick={() => {
                setLang(langOpt.lang);
                setDropdownOpen(false);
              }}
              className={cn(
                "flex w-full items-center justify-between px-3.5 py-2 text-xs font-medium transition-colors cursor-pointer",
                currentLanguage.code === langOpt.code
                  ? "bg-[#F0F7FF] text-[#0F2E59] font-bold"
                  : "text-slate-700 hover:bg-slate-50"
              )}
            >
              <div className="flex items-center gap-2">
                <FlagIcon code={langOpt.code} className="h-3 w-4 rounded-2xs overflow-hidden" />
                <span>{langOpt.name}</span>
              </div>
              {currentLanguage.code === langOpt.code && (
                <div className="h-2 w-2 rounded-full bg-[#14B8A6]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
