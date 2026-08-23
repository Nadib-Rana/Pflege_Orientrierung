"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Question } from "./questionsData";
import { useLanguage } from "@/context/LanguageContext";

interface CareCompassQuestionsProps {
  currentQ: Question;
  currentStep: number;
  totalSteps: number;
  answers: Record<number, string>;
  onSelectOption: (option: string) => void;
  onPrev: () => void;
  onNext: () => void;
  onSaveAndExit: () => void;
}

export function CareCompassQuestions({
  currentQ,
  currentStep,
  totalSteps,
  answers,
  onSelectOption,
  onPrev,
  onNext,
  onSaveAndExit,
}: CareCompassQuestionsProps) {
  const { t } = useLanguage();

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-14">
      {/* Assessment Question Container */}
      <div className="w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/70 shadow-sm space-y-7">
        {/* Progress Indicator */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span>{t("quiz.progress")}</span>
            <span>
              {currentStep} OF {totalSteps}
            </span>
          </div>
          <div className="relative h-1.5 w-full rounded-full bg-[#BDD6EE] overflow-hidden">
            <div
              className="h-full bg-[#0F2E59] transition-all duration-300 rounded-full"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Header */}
        <div className="space-y-1.5 pt-2">
          <h2 className="text-2xl sm:text-[26px] font-bold text-[#0C2B4E] tracking-tight">
            {currentQ.question}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">{currentQ.subtitle}</p>
        </div>

        {/* Options List with Custom Radios */}
        <div className="space-y-3 pt-1">
          {currentQ.options.map((option) => {
            const isSelected = answers[currentQ.id] === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => onSelectOption(option)}
                className={cn(
                  "w-full text-left flex items-center gap-3.5 p-4 sm:p-4.5 rounded-2xl border transition-all cursor-pointer text-xs sm:text-sm",
                  isSelected
                    ? "border-2 border-[#0F2E59] bg-[#F4F8FC] text-[#0C2B4E] font-semibold shadow-2xs"
                    : "border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/70 text-slate-700 font-normal"
                )}
              >
                {/* Custom Round Radio Dot */}
                <div
                  className={cn(
                    "h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                    isSelected ? "border-[#0F2E59] bg-white" : "border-slate-300 bg-white"
                  )}
                >
                  {isSelected && <div className="h-2.5 w-2.5 rounded-full bg-[#0F2E59]" />}
                </div>
                <span className="leading-snug">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Controls: Previous / Save & Exit / Continue */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          <button
            type="button"
            onClick={onPrev}
            className="rounded-xl border-2 border-[#0F2E59] px-5 py-2 text-xs sm:text-sm font-semibold text-[#0F2E59] hover:bg-slate-50 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <ChevronLeft className="h-4 w-4" />
            {t("quiz.prevBtn")}
          </button>

          <button
            type="button"
            onClick={onSaveAndExit}
            className="text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            Save & Exit
          </button>

          <button
            type="button"
            onClick={onNext}
            className="rounded-xl bg-[#0F2E59] hover:bg-[#0A2244] text-white px-7 py-2.5 text-xs sm:text-sm font-semibold shadow-sm transition-all cursor-pointer"
          >
            {currentStep === totalSteps ? t("quiz.submitBtn") : t("quiz.nextBtn")}
          </button>
        </div>
      </div>
    </div>
  );
}
