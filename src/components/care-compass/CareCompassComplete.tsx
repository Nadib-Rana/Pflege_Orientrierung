"use client";

import React from "react";
import { Check, RotateCcw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CareCompassCompleteProps {
  onViewGuidance: () => void;
  onRestart: () => void;
  onSaveAndExit: () => void;
}

export function CareCompassComplete({
  onViewGuidance,
  onRestart,
}: CareCompassCompleteProps) {
  const { t } = useLanguage();

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:py-16">
      {/* Completion Container */}
      <div className="w-full max-w-lg bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/70 shadow-sm text-center space-y-6">
        {/* Double Ring Checkmark Badge */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#CFE4FA] p-2.5 shadow-sm">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#1A5695] text-white shadow-xs">
            <Check className="h-7 w-7 stroke-[3]" />
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C2B4E] tracking-tight">
            {t("guidance.title")}
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-sm mx-auto leading-relaxed">
            {t("guidance.subtitle", { canton: "ZH" })}
          </p>
        </div>

        {/* View My Guidance Action Button */}
        <div className="pt-2 space-y-3">
          <button
            type="button"
            onClick={onViewGuidance}
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#0F2E59] hover:bg-[#0A2244] text-white px-8 py-3 text-sm font-bold shadow-md transition-all cursor-pointer"
          >
            {t("quiz.submitBtn")}
          </button>

          <button
            type="button"
            onClick={onRestart}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <RotateCcw className="h-3 w-3" />
            {t("quiz.badge")}
          </button>
        </div>
      </div>
    </div>
  );
}
