"use client";

import React from "react";
import { Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CareCompassStartProps {
  hasSavedProgress: boolean;
  currentStep: number;
  totalSteps: number;
  onStart: () => void;
  onResume: () => void;
  onStartOver: () => void;
}

export function CareCompassStart({
  hasSavedProgress,
  currentStep,
  totalSteps,
  onStart,
  onResume,
  onStartOver,
}: CareCompassStartProps) {
  const { t } = useLanguage();

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:py-16">
      <div className="w-full max-w-2xl bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/70 shadow-sm text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF3FC] px-4 py-1 text-xs font-semibold text-[#0F2E59] mb-5">
          {t("quiz.badge")}
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0C2B4E] tracking-tight mb-4 leading-tight">
          {t("quiz.title")}
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#64748B] max-w-lg mx-auto leading-relaxed mb-8">
          {t("quiz.subtitle")}
        </p>

        {/* 3 Meta Info Stat Cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 max-w-lg mx-auto">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 sm:p-4 text-center">
            <span className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Time
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#0C2B4E]">~3 min</span>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 sm:p-4 text-center">
            <span className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Questions
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#0C2B4E]">12 prompts</span>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 sm:p-4 text-center">
            <span className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Cost
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#0C2B4E]">Free (100%)</span>
          </div>
        </div>

        {/* Start / Resume Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          {hasSavedProgress ? (
            <>
              <button
                type="button"
                onClick={onResume}
                className="w-full sm:w-auto min-w-[200px] rounded-xl bg-[#0F2E59] hover:bg-[#0A2244] text-white px-8 py-3.5 text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                Resume (Question {currentStep} of {totalSteps})
              </button>
              <button
                type="button"
                onClick={onStartOver}
                className="w-full sm:w-auto rounded-xl border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 text-sm font-semibold transition-colors cursor-pointer"
              >
                Start Over
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={onStart}
              className="w-full sm:w-auto min-w-[200px] rounded-xl bg-[#0F2E59] hover:bg-[#0A2244] text-white px-10 py-3.5 text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              {t("compassCard.startBtn")}
            </button>
          )}
        </div>

        {/* Privacy Alert Note */}
        <div className="rounded-2xl bg-[#FFFBEB] border border-[#FDE68A]/70 p-4 text-left flex items-start gap-3">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FEF3C7] text-[#D97706] mt-0.5">
            <Lock className="h-3 w-3" />
          </div>
          <p className="text-xs text-[#92400E] leading-relaxed">
            {t("quiz.confidentialNotice")}
          </p>
        </div>
      </div>
    </div>
  );
}
