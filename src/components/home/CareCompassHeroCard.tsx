"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
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
    0: "A parent or parent-in-law", // Default selected from mockup
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
    <div className="w-full max-w-lg rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xl shadow-slate-100/80 transition-all duration-300">
      {/* 3 Window Top Dots */}
      <div className="flex items-center gap-1.5 mb-5">
        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
      </div>

      {!isCompleted ? (
        <>
          {/* Progress Header */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              <span>Question progress</span>
              <span className="text-slate-600 font-bold font-mono">
                {currentStep + 1} OF {totalSteps}
              </span>
            </div>
            {/* Progress Bar */}
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full bg-[#0F1E36] transition-all duration-500 rounded-full"
                style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Title & Subtitle */}
          <div className="mb-5">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A]">
              {currentQ.question}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">{currentQ.subtitle}</p>
          </div>

          {/* Options List */}
          <div className="space-y-2.5 mb-6">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === option;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(option)}
                  className={cn(
                    "flex w-full items-center gap-3.5 rounded-xl border p-3.5 text-left text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer",
                    isSelected
                      ? "border-[#0F1E36] bg-slate-50/80 text-[#0F172A] shadow-xs ring-1 ring-[#0F1E36]"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/50"
                  )}
                >
                  {/* Custom Radio Icon */}
                  <div
                    className={cn(
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all",
                      isSelected
                        ? "border-[#0F1E36] bg-[#0F1E36] text-white"
                        : "border-slate-300 bg-white"
                    )}
                  >
                    {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                  </div>
                  <span className="flex-grow">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="rounded-lg border-slate-200 px-4 text-xs font-medium text-slate-700 hover:bg-slate-100 disabled:opacity-40"
            >
              <ArrowLeft className="mr-1.5 h-3.5 w-3.5" /> Previous
            </Button>

            <Button
              size="sm"
              onClick={handleNext}
              disabled={!selectedOption}
              className="rounded-lg bg-[#0F1E36] hover:bg-[#1B365D] text-white px-6 text-xs font-semibold shadow-xs disabled:opacity-40"
            >
              Continue <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </div>
        </>
      ) : (
        /* Result Preview state */
        <div className="py-4 text-center space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <Sparkles className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Your Compass Roadmap is Ready!</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
            Based on your answers, we have prepared a tailored guidance plan with insurance support,
            Spitex estimates, and next steps.
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-left text-xs text-slate-700 space-y-1.5">
            <p className="font-semibold text-slate-900">Selected Focus:</p>
            <p>• Recipient: {selectedAnswers[0] || "A parent"}</p>
            <p>• Estimated Support: Personalized Roadmap</p>
          </div>
          <div className="flex gap-2 justify-center pt-2">
            <Button variant="outline" size="sm" onClick={handleReset} className="rounded-lg text-xs">
              Start Over
            </Button>
            <Button size="sm" className="rounded-lg bg-[#0F1E36] text-white text-xs">
              Download Roadmap
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CareCompassHeroCard;
