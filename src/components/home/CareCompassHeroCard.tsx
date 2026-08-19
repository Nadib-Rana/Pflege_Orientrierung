"use client";

import React, { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Question {
  id: number;
  question: string;
  subtitle: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Who are you caring for?",
    subtitle: "Choose the closest match",
    options: [
      "A parent or parent-in-law",
      "A partner or spouse",
      "A child",
      "Another family member or close friend",
    ],
  },
  {
    id: 2,
    question: "What is their current living arrangement?",
    subtitle: "Select their primary residence",
    options: [
      "Living independently at home",
      "Living with me / our family",
      "Assisted living facility",
      "Nursing home or residential care",
    ],
  },
  {
    id: 3,
    question: "What type of assistance is most urgently needed?",
    subtitle: "Select the primary care focus",
    options: [
      "Everyday household support & mobility",
      "Medication & outpatient nursing (Spitex)",
      "Memory & dementia care guidance",
      "Financial aid, insurance & legal directives",
    ],
  },
];

export function CareCompassHeroCard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({
    0: "A parent or parent-in-law",
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const totalSteps = 12;
  const currentQ = questions[currentStep % questions.length];
  const selectedOption = selectedAnswers[currentStep];

  const handleSelectOption = (option: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentStep]: option }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setIsCompleted(false);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsCompleted(false);
  };

  return (
    <div className="w-full max-w-[540px] min-h-[580px] flex flex-col rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
      {/* 3 Top Window Dots with border header bar matching exact design */}
      <div className="flex items-center gap-2 px-8 py-5 border-b border-slate-100">
        <div className="h-3.5 w-3.5 rounded-full bg-[#E53E3E]" />
        <div className="h-3.5 w-3.5 rounded-full bg-[#DD6B20]" />
        <div className="h-3.5 w-3.5 rounded-full bg-[#38A169]" />
      </div>

      {!isCompleted ? (
        <div className="p-7 sm:p-9 flex-grow flex flex-col justify-between">
          <div>
            {/* Progress Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-normal text-[#718096] mb-2.5">
                <span>Question progress</span>
                <span className="font-medium text-[#4A5568] tracking-wider font-sans">
                  {currentStep + 1} OF {totalSteps}
                </span>
              </div>

              {/* Progress Bar with end dot */}
              <div className="relative h-2 w-full rounded-full bg-[#BDD6EE] overflow-visible">
                <div
                  className="h-full rounded-full bg-[#0C2B4E] transition-all duration-300"
                  style={{ width: `${Math.max(18, ((currentStep + 1) / totalSteps) * 100)}%` }}
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-[#0C2B4E]" />
              </div>
            </div>

            {/* Question Title & Subtitle */}
            <div className="mb-6">
              <h3 className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#0C2B4E] leading-snug">
                {currentQ.question}
              </h3>
              <p className="text-xs sm:text-sm text-[#718096] mt-1.5 font-normal">
                {currentQ.subtitle}
              </p>
            </div>

            {/* Options Cards */}
            <div className="space-y-3 mb-8">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === option;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(option)}
                    className={cn(
                      "flex w-full items-center gap-3.5 rounded-xl px-4 py-4 text-left text-sm font-medium transition-all cursor-pointer",
                      "bg-[#F0F4F9] hover:bg-[#E6EDF5] text-[#0C2B4E]"
                    )}
                  >
                    {/* Radio Icon */}
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-[#0C2B4E] bg-white transition-all">
                      {isSelected && <div className="h-2 w-2 rounded-full bg-[#0C2B4E]" />}
                    </div>

                    <span className="flex-grow text-[#0C2B4E] font-medium leading-tight">
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="flex items-center gap-1.5 rounded-lg border-2 border-[#0C2B4E] bg-white px-5 py-2.5 text-sm font-semibold text-[#0C2B4E] hover:bg-slate-50 transition-colors disabled:opacity-40 cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!selectedOption}
              className="rounded-lg bg-[#0C2B4E] hover:bg-[#123A63] text-white px-8 py-2.5 text-sm font-semibold shadow-xs transition-colors disabled:opacity-40 cursor-pointer"
            >
              Continue
            </button>
          </div>
        </div>
      ) : (
        /* Completed State matching exact screenshot */
        <div className="p-8 sm:p-12 flex-grow flex flex-col items-center justify-center text-center">
          {/* Double Layer Soft Blue / Dark Blue Checkmark Badge */}
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#CFE4FA] mb-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1A5695] text-white shadow-md shadow-blue-900/20">
              <Check className="h-9 w-9 stroke-[3]" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-3xl sm:text-[34px] font-extrabold tracking-tight text-[#0C2B4E] leading-tight mb-4">
            Care Compass <br />
            Complete
          </h3>

          {/* Description */}
          <p className="text-sm text-[#718096] max-w-[360px] leading-relaxed mb-8">
            Your personalised guidance is now ready. Thank you for sharing your answers. We&apos;ve
            prepared guidance based on your situation.
          </p>

          {/* Action CTA Button */}
          <button
            type="button"
            onClick={handleReset}
            className="rounded-xl bg-[#0C2B4E] hover:bg-[#123A63] text-white px-8 py-3.5 text-sm font-semibold shadow-md transition-all hover:shadow-lg cursor-pointer mb-3"
          >
            View My Guidance
          </button>

          {/* Subtext */}
          <span className="text-[11px] text-[#A0AEC0] tracking-normal font-normal">
            Based on your answers
          </span>
        </div>
      )}
    </div>
  );
}

export default CareCompassHeroCard;
