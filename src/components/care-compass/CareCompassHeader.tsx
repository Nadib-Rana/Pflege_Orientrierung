"use client";

import React from "react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { LanguageSelector } from "@/components/common/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";

interface CareCompassHeaderProps {
  onSaveAndExit: () => void;
  onResetGuidance?: () => void;
}

export function CareCompassHeader({
  onSaveAndExit,
  onResetGuidance,
}: CareCompassHeaderProps) {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/60 px-4 sm:px-8 py-3.5">
      <div className="mx-auto max-w-4xl flex items-center justify-between">
        <BrandLogo />
        <div className="flex items-center gap-2.5 sm:gap-3">
          <LanguageSelector />

          {onResetGuidance && (
            <button
              type="button"
              onClick={onResetGuidance}
              className="rounded-lg border border-[#EF4444] text-[#EF4444] hover:bg-red-50 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Reset
            </button>
          )}

          <button
            type="button"
            onClick={onSaveAndExit}
            className="rounded-lg border-2 border-[#0F2E59] bg-white px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#0F2E59] hover:bg-slate-50 transition-colors cursor-pointer"
          >
            {t("nav.home")}
          </button>
        </div>
      </div>
    </header>
  );
}
