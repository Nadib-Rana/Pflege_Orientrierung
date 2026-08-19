"use client";

import React, { useState } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
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
    0: "A parent or parent-in-law", // Exact default from screenshot
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
    <div className="w-full max-w-[500px] rounded-3xl border border-slate-100 bg-white p-7 sm:p-9 shadow-xl shadow-slate-200/50">
      {/* 3 Top Window Dots matching exact screenshot */}
      <div className="flex items-center gap-2 mb-6">
        <div className="h-3 w-3 rounded-full bg-[#E53E3E]" />
        <div className="h-3 w-3 rounded-full bg-[#DD6B20]" />
        <div className="h-3 w-3 rounded-full bg-[#38A169]" />
      </div>

      {!isCompleted ? (
        <>
          {/* Progress Header matching screenshot */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-normal text-[#718096] mb-2.5">
              <span>Question progress</span>
              <span className="font-medium text-[#4A5568] tracking-wider font-sans">
                {currentStep + 1} OF {totalSteps}
              </span>
            </div>

            {/* Custom Track with end dot */}
            <div className="relative h-2 w-full rounded-full bg-[#BDD6EE] overflow-visible">
              <div
                className="h-full rounded-full bg-[#0C2B4E] transition-all duration-300"
                style={{ width: `${Math.max(18, ((currentStep + 1) / totalSteps) * 100)}%` }}
              />
              {/* Dot on right end of track as in design */}
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
                    "flex w-full items-center gap-3.5 rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all cursor-pointer",
                    "bg-[#F0F4F9] hover:bg-[#E6EDF5] text-[#0C2B4E]"
                  )}
                >
                  {/* Radio Icon matching screenshot */}
                  <div
                    className={cn(
                      "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-[#0C2B4E] bg-white transition-all"
                    )}
                  >
                    {isSelected && (
                      <div className="h-2 w-2 rounded-full bg-[#0C2B4E]" />
                    )}
                  </div>

                  <span className="flex-grow text-[#0C2B4E] font-medium leading-tight">
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex items-center justify-between gap-4 pt-1">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="flex items-center gap-1.5 rounded-lg border-2 border-[#0C2B4E] bg-white px-5 py-2 text-sm font-semibold text-[#0C2B4E] hover:bg-slate-50 transition-colors disabled:opacity-40 cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!selectedOption}
              className="rounded-lg bg-[#0C2B4E] hover:bg-[#123A63] text-white px-7 py-2.5 text-sm font-semibold shadow-xs transition-colors disabled:opacity-40 cursor-pointer"
            >
              Continue
            </button>
          </div>
        </>
      ) : (
        /* Result Preview state */
        <div className="py-6 text-center space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <Sparkles className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-[#0C2B4E]">Your Compass Roadmap is Ready!</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
            Based on your answers, we have prepared a tailored guidance plan with insurance support,
            Spitex estimates, and next steps.
          </p>
          <div className="rounded-xl border border-slate-200 bg-[#F0F4F9] p-4 text-left text-xs text-[#0C2B4E] space-y-1.5">
            <p className="font-semibold">Selected Focus:</p>
            <p>• Recipient: {selectedAnswers[0] || "A parent or parent-in-law"}</p>
            <p>• Status: Completed 12 of 12 Questions</p>
          </div>
          <div className="flex gap-3 justify-center pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
            >
              Start Over
            </button>
            <button
              type="button"
              className="rounded-lg bg-[#0C2B4E] px-5 py-2 text-xs font-semibold text-white hover:bg-[#123A63]"
            >
              View Full Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CareCompassHeroCard;
