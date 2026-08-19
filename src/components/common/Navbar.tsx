"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/common/BrandLogo";
import { ChevronDown, Menu, X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({ name: "English", code: "US" });

  const languages = [
    { name: "English", code: "US" },
    { name: "Deutsch", code: "DE" },
    { name: "Français", code: "FR" },
    { name: "Italiano", code: "IT" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F3F6FA] border-b border-slate-200/50">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <BrandLogo />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[14px]">
          {siteConfig.navItems.map((item, index) => {
            const isHome = index === 0;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "transition-colors",
                  isHome
                    ? "font-bold text-[#0F2E59]"
                    : "font-normal text-[#64748B] hover:text-[#0F2E59]"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Language Selector & Get Started CTA */}
        <div className="hidden md:flex items-center gap-3.5">
          {/* Language Selector Dropdown (matches Previous button style) */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 rounded-lg border-2 border-[#0F2E59] bg-white px-4 py-2 text-sm font-semibold text-[#0F2E59] hover:bg-slate-50 transition-colors cursor-pointer shadow-xs"
              aria-expanded={langDropdownOpen}
              aria-label="Select language"
            >
              {/* US Flag SVG Icon */}
              <svg className="h-4 w-5 rounded-xs overflow-hidden" viewBox="0 0 640 480">
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
              <span>{selectedLang.name}</span>
              <ChevronDown className="h-4 w-4 text-[#0F2E59]" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-xl border border-slate-200 bg-white py-1.5 shadow-lg z-50 animate-in fade-in-50 zoom-in-95">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangDropdownOpen(false);
                    }}
                    className="flex w-full items-center justify-between px-3.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <span>{lang.name}</span>
                    {selectedLang.code === lang.code && (
                      <Check className="h-3.5 w-3.5 text-[#00BFA5]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary CTA (matches Continue button style) */}
          <a
            href="#compass"
            className="rounded-lg bg-[#0F2E59] hover:bg-[#153E75] text-white px-7 py-2.5 text-sm font-semibold shadow-xs transition-colors cursor-pointer inline-flex items-center justify-center"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 text-[#0F2E59]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-[#F3F6FA] px-4 py-5 lg:hidden">
          <nav className="flex flex-col space-y-3">
            {siteConfig.navItems.map((item, idx) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-sm font-medium",
                  idx === 0 ? "text-[#0F2E59] font-bold" : "text-slate-600 hover:text-[#0F2E59]"
                )}
              >
                {item.title}
              </Link>
            ))}

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <a
                href="#compass"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-xl bg-[#0F2E59] text-white py-2 text-xs font-semibold"
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
