"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, Menu, X, Check } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const languages = ["English", "Deutsch", "Français", "Italiano"];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <BrandLogo />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-slate-700">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="transition-colors hover:text-[#0F172A] hover:font-semibold"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Right Actions: Language Selector & CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              aria-expanded={langDropdownOpen}
              aria-label="Select language"
            >
              <Globe className="h-4 w-4 text-slate-500" />
              <span>{selectedLang}</span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-xl border border-slate-100 bg-white py-1.5 shadow-lg z-50 animate-in fade-in-50 zoom-in-95">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangDropdownOpen(false);
                    }}
                    className="flex w-full items-center justify-between px-3.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <span>{lang}</span>
                    {selectedLang === lang && <Check className="h-3.5 w-3.5 text-[#0D9488]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary CTA */}
          <Button
            asChild
            className="rounded-lg bg-[#0F1E36] hover:bg-[#1B365D] text-white px-5 py-2.5 text-sm font-medium shadow-xs transition-all hover:shadow-md cursor-pointer"
          >
            <a href="#compass">Get Started</a>
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-6 lg:hidden">
          <nav className="flex flex-col space-y-4">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-[#0D9488]"
              >
                {item.title}
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <div className="flex items-center justify-between py-2 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <Globe className="h-4 w-4" /> Language:
                </span>
                <span className="font-semibold text-slate-900">{selectedLang}</span>
              </div>
              <Button asChild className="w-full bg-[#0F1E36] text-white py-2.5 rounded-lg">
                <a href="#compass" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
