"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Check, ChevronLeft, Lock, RotateCcw, FileText, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// Comprehensive 12-question care compass assessment dataset
const questions = [
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
    subtitle: "Select the primary living situation",
    options: [
      "Living independently at home",
      "Living with me in my household",
      "Living in an assisted care or nursing facility",
      "Other living arrangement",
    ],
  },
  {
    id: 3,
    question: "What level of daily assistance is currently needed?",
    subtitle: "Select the most accurate level of daily support",
    options: [
      "Light support (shopping, transport, paperwork)",
      "Moderate daily help (meals, medication, mobility)",
      "Intensive 24/7 care (hygiene, continuous supervision)",
      "Uncertain / currently evaluating needs",
    ],
  },
  {
    id: 4,
    question: "Has a formal Pflegegrad (care degree) been assigned?",
    subtitle: "Swiss / German care classification level",
    options: [
      "Yes (Pflegegrad 1 - 2)",
      "Yes (Pflegegrad 3 - 5)",
      "Application is currently in progress",
      "No / Not yet applied",
    ],
  },
  {
    id: 5,
    question: "What is your biggest current caregiving challenge?",
    subtitle: "Where do you feel the most pressure today?",
    options: [
      "Navigating medical, legal & insurance bureaucracy",
      "Emotional exhaustion & caregiver burnout",
      "Balancing my job/family with care duties",
      "Financial costs & funding available services",
    ],
  },
  {
    id: 6,
    question: "Do you have support from other family members or siblings?",
    subtitle: "Care network and shared responsibilities",
    options: [
      "Yes, responsibilities are shared well",
      "Some help, but I carry most of the responsibility",
      "No, I am managing everything entirely alone",
      "There is family conflict regarding care decisions",
    ],
  },
  {
    id: 7,
    question: "Are professional outpatient care services (Spitex) involved?",
    subtitle: "External nursing and in-home care support",
    options: [
      "Yes, on a daily basis",
      "Yes, a few times per week",
      "We are considering hiring professional support",
      "No professional services at this time",
    ],
  },
  {
    id: 8,
    question: "Are essential legal documents in place?",
    subtitle: "Powers of attorney and healthcare directives",
    options: [
      "Yes, health proxy and power of attorney are complete",
      "Partially completed / in progress",
      "Not yet created",
      "Unsure what documents are legally required",
    ],
  },
  {
    id: 9,
    question: "How is your personal emotional well-being?",
    subtitle: "Your own health and stress levels as a caregiver",
    options: [
      "Managing well with good balance",
      "Frequently stressed but coping",
      "Overwhelmed and nearing exhaustion",
      "In urgent need of relief and respite support",
    ],
  },
  {
    id: 10,
    question: "What is your Canton or geographic region in Switzerland?",
    subtitle: "Guidance is tailored to local Cantonal regulations",
    options: [
      "Zurich / North-Eastern Switzerland",
      "Bern / Mittelland region",
      "Romandie (Geneva, Vaud, Valais, Neuchâtel)",
      "Other Canton / Central Switzerland / Ticino",
    ],
  },
  {
    id: 11,
    question: "Are you interested in respite care (Entlastungsangebote)?",
    subtitle: "Temporary day care, holiday relief, or night care",
    options: [
      "Yes, urgently looking for temporary relief options",
      "Yes, planning for future respite needs",
      "Would like to learn what respite options exist",
      "Not needed at this time",
    ],
  },
  {
    id: 12,
    question: "What is your primary goal from this Care Compass?",
    subtitle: "How Polaris can best guide your next steps",
    options: [
      "A structured step-by-step roadmap for our family",
      "Financial assistance and insurance entitlement clarity",
      "Emergency backup and respite planning",
      "Connecting with verified local care partners",
    ],
  },
];

export default function CareCompassPage() {
  const [stage, setStage] = useState<"start" | "questions" | "complete" | "guidance">("start");
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({
    1: "A parent or parent-in-law",
  });

  const totalSteps = questions.length;
  const currentQ = questions[currentStep - 1];

  const handleSelectOption = (option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: option,
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setStage("complete");
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else {
      setStage("start");
    }
  };

  const handleRestart = () => {
    setAnswers({ 1: "A parent or parent-in-law" });
    setCurrentStep(1);
    setStage("start");
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] flex flex-col justify-between">
      {/* ================= STAGE 1: CARE COMPASS START ================= */}
      {stage === "start" && (
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:py-16">
          <div className="w-full max-w-2xl bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/70 shadow-sm text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF3FC] px-4 py-1 text-xs font-semibold text-[#0F2E59] mb-5">
              Care Compass
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0C2B4E] tracking-tight mb-4 leading-tight">
              Let&apos;s take a quiet moment <br className="hidden sm:inline" />
              together.
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-[#64748B] max-w-lg mx-auto leading-relaxed mb-8">
              The Care Compass is a short, gentle assessment. It asks a series of thoughtful
              questions about your caregiving situation and prepares personalized guidance from your
              answers.
            </p>

            {/* 3 Meta Info Stat Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 max-w-lg mx-auto">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 sm:p-4 text-center">
                <span className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Time
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0C2B4E]">About 8 min</span>
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
                <span className="text-xs sm:text-sm font-bold text-[#0C2B4E]">Free</span>
              </div>
            </div>

            {/* Start Button */}
            <button
              onClick={() => setStage("questions")}
              className="w-full sm:w-auto min-w-[200px] rounded-xl bg-[#0F2E59] hover:bg-[#0A2244] text-white px-10 py-3.5 text-sm font-bold shadow-md transition-all cursor-pointer mb-8"
            >
              Start
            </button>

            {/* Privacy Alert Note */}
            <div className="rounded-2xl bg-[#FFFBEB] border border-[#FDE68A]/70 p-4 text-left flex items-start gap-3">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FEF3C7] text-[#D97706] mt-0.5">
                <Lock className="h-3 w-3" />
              </div>
              <p className="text-xs text-[#92400E] leading-relaxed">
                There are no right or wrong answers. The more honest you are, the more relevant
                your guidance will be. You are protected by privacy — your answers are only stored
                on your device.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= STAGE 2: QUESTIONS ================= */}
      {stage === "questions" && (
        <div className="flex-1 flex flex-col">
          {/* Assessment Header with Save & Exit */}
          <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/60 px-4 sm:px-8 py-3.5">
            <div className="mx-auto max-w-4xl flex items-center justify-between">
              <BrandLogo />
              <Link
                href="/"
                className="rounded-lg border-2 border-[#0F2E59] bg-white px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#0F2E59] hover:bg-slate-50 transition-colors"
              >
                Save & Exit
              </Link>
            </div>
          </header>

          {/* Assessment Question Container */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12">
            <div className="w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/70 shadow-sm space-y-7">
              {/* Progress Indicator */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <span>Question progress</span>
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
                      onClick={() => handleSelectOption(option)}
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
                          isSelected
                            ? "border-[#0F2E59] bg-white"
                            : "border-slate-300 bg-white"
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
                  onClick={handlePrev}
                  className="rounded-xl border-2 border-[#0F2E59] px-5 py-2 text-xs sm:text-sm font-semibold text-[#0F2E59] hover:bg-slate-50 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>

                <Link
                  href="/"
                  className="text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Save & Exit
                </Link>

                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-xl bg-[#0F2E59] hover:bg-[#0A2244] text-white px-7 py-2.5 text-xs sm:text-sm font-semibold shadow-sm transition-all cursor-pointer"
                >
                  {currentStep === totalSteps ? "Finish" : "Continue"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= STAGE 3: CARE COMPASS COMPLETE ================= */}
      {stage === "complete" && (
        <div className="flex-1 flex flex-col">
          {/* Assessment Header */}
          <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/60 px-4 sm:px-8 py-3.5">
            <div className="mx-auto max-w-4xl flex items-center justify-between">
              <BrandLogo />
              <Link
                href="/"
                className="rounded-lg border-2 border-[#0F2E59] bg-white px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#0F2E59] hover:bg-slate-50 transition-colors"
              >
                Save & Exit
              </Link>
            </div>
          </header>

          {/* Completion Container */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:py-16">
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
                  Care Compass Complete
                </h1>
                <p className="text-xs sm:text-sm text-[#64748B] max-w-sm mx-auto leading-relaxed">
                  Your personalized guidance is now ready. Thank you for sharing your answers.
                  We&apos;ve prepared guidance based on your situation.
                </p>
              </div>

              {/* View My Guidance Action Button */}
              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  onClick={() => setStage("guidance")}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#0F2E59] hover:bg-[#0A2244] text-white px-8 py-3 text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  View My Guidance
                </button>

                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <RotateCcw className="h-3 w-3" />
                  Retake assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= STAGE 4: YOUR PERSONALISED GUIDANCE ================= */}
      {stage === "guidance" && (
        <div className="flex-1 flex flex-col">
          {/* Minimal Header with Save & Exit */}
          <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/60 px-4 sm:px-8 py-3.5">
            <div className="mx-auto max-w-4xl flex items-center justify-between">
              <BrandLogo />
              <Link
                href="/"
                className="rounded-lg border-2 border-[#0F2E59] bg-white px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#0F2E59] hover:bg-slate-50 transition-colors"
              >
                Save & Exit
              </Link>
            </div>
          </header>

          {/* Main Guidance Container */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 sm:py-14">
            <div className="w-full max-w-3xl space-y-8">
              {/* Header Title & Date Subtitle */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0C2B4E] tracking-tight">
                  Your Personalised Guidance
                </h1>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Based on your Care Compass assessment completed on October 24, 2024.
                </p>
              </div>

              {/* Situation Summary Card */}
              <div className="rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/70 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EBF3FC] text-[#0F2E59]">
                    <FileText className="h-4 w-4 stroke-[2.5]" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0C2B4E]">
                    Situation Summary
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#5A6A80] leading-relaxed">
                  Your recent assessment indicates a &ldquo;Balanced but Transitioning&rdquo; care
                  environment. While primary medical needs are being met, there is an increasing
                  demand for emotional support and specialized mobility equipment. We&apos;ve
                  identified opportunities to reduce caregiver fatigue by 15% through optimized
                  scheduling and the integration of local community resources.
                </p>
              </div>

              {/* Recommended Next Steps (3 Columns Grid) */}
              <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-[#0C2B4E]">
                  Recommended Next Steps
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
                  {/* Card 1 */}
                  <div className="rounded-2xl bg-white p-5 sm:p-6 border border-slate-200/70 shadow-xs flex flex-col justify-start">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0C2B4E] mb-2 leading-snug">
                      Physical Therapy Review
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed">
                      Review local specialized mobility therapists. Early intervention can
                      significantly improve daily comfort and independence.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-2xl bg-white p-5 sm:p-6 border border-slate-200/70 shadow-xs flex flex-col justify-start">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0C2B4E] mb-2 leading-snug">
                      Join CareCircle
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed">
                      Connect with three other families in your area who are navigating similar care
                      pathways for shared insights and support.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="rounded-2xl bg-white p-5 sm:p-6 border border-slate-200/70 shadow-xs flex flex-col justify-start">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0C2B4E] mb-2 leading-snug">
                      Equipment Guide
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed">
                      Explore our curated guide on home modifications and adaptive tools
                      specifically for late-stage mobility support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Disclaimer Alert Card */}
              <div className="rounded-2xl bg-[#FFF8EC] border border-[#FDE68A]/70 p-4 sm:p-5 flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FEF3C7] text-[#D97706] mt-0.5">
                  <AlertCircle className="h-3.5 w-3.5" />
                </div>
                <p className="text-[11px] sm:text-xs text-[#92400E] leading-relaxed">
                  <span className="font-semibold">Disclaimer:</span> This personalised guidance is
                  provided for informational purposes only and is based on the data you provided in
                  the Care Compass assessment. It is not a substitute for professional medical
                  advice, diagnosis, or treatment. Always seek the advice of your physician or other
                  qualified health providers with any questions you may have regarding a medical
                  condition.
                </p>
              </div>

              {/* 2 Bottom Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <Link
                  href="/"
                  className="w-full inline-flex items-center justify-center rounded-xl border-2 border-[#0F2E59] bg-white text-[#0F2E59] hover:bg-slate-50 py-3 text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
                >
                  Go to Home
                </Link>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center rounded-xl bg-[#0F2E59] hover:bg-[#0A2244] text-white py-3 text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
                >
                  Request personal support
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
