"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/common/BrandLogo";
import { ChevronDown, X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

// Vector Flag Icons for Multilingual Support
function FlagIcon({ code, className = "h-4 w-5 rounded-xs overflow-hidden" }: { code: string; className?: string }) {
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

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { currentLanguage, languages, setLang, t } = useLanguage();

  // ONLY hide the global navigation bar on the "Your Personalised Guidance" page (/guidance)
  if (pathname === "/guidance") {
    return null;
  }

  const navItems = [
    { title: t("nav.home"), href: "/" },
    { title: t("nav.careCompass"), href: "/care-compass" },
    { title: t("nav.guidance"), href: "/guidance" },
    { title: t("nav.about"), href: "/about" },
    { title: t("nav.contact"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F3F6FA] border-b border-slate-200/60">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <BrandLogo className="mr-3 sm:mr-4 lg:mr-8" />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[14px]">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors",
                  isActive
                    ? "font-bold text-[#0F2E59]"
                    : "font-normal text-[#64748B] hover:text-[#0F2E59]"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Multilingual Selector & Get Started CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Universal Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 sm:gap-2 rounded-lg border-2 border-[#0F2E59] bg-white px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#0F2E59] hover:bg-slate-50 transition-colors cursor-pointer shadow-xs"
              aria-expanded={langDropdownOpen}
              aria-label="Select language"
            >
              <FlagIcon code={currentLanguage.code} className="h-3.5 w-4.5 sm:h-4 sm:w-5 rounded-xs overflow-hidden" />
              <span className="hidden sm:inline">{currentLanguage.name}</span>
              <span className="sm:hidden text-xs font-bold">{currentLanguage.code}</span>
              <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#0F2E59]" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 sm:w-40 rounded-xl border border-slate-200 bg-white py-1.5 shadow-xl z-50 animate-in fade-in-50 zoom-in-95">
                {languages.map((langOpt) => (
                  <button
                    key={langOpt.code}
                    onClick={() => {
                      setLang(langOpt.lang);
                      setLangDropdownOpen(false);
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

          {/* Primary CTA (Desktop & Tablet) */}
          <Link
            href="/care-compass"
            className="hidden sm:inline-flex rounded-lg bg-[#0F2E59] hover:bg-[#153E75] text-white px-5 sm:px-7 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer items-center justify-center"
          >
            {t("nav.getStarted")}
          </Link>

          {/* Clean Hamburger Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 active:scale-95 transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-[#0F2E59]" />
              ) : (
                <Menu className="h-6 w-6 text-[#0F2E59]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Clean, Simple & Smooth Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-5 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-2.5 rounded-xl text-sm transition-all",
                    isActive
                      ? "bg-[#F0F7FF] text-[#0F2E59] font-bold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/care-compass"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-[#0F2E59] py-3 text-sm font-semibold text-white shadow-xs transition-colors"
            >
              {t("nav.getStarted")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
