import React from "react";
import Image from "next/image";
import { Users, CheckCircle2, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      stepNumber: "01",
      title: "Start the Assessment",
      description:
        "Answer a few questions about your caregiving situation in 3 minutes — no registration required.",
      // Mini UI illustration
      illustration: (
        <div className="w-full rounded-xl border border-slate-200 bg-white p-4 shadow-xs space-y-2.5">
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>Question 1/12</span>
            <div className="h-1.5 w-12 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full w-1/3 bg-[#0F1E36]" />
            </div>
          </div>
          <p className="text-xs font-bold text-slate-800">Who are you caring for?</p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 rounded-md border border-[#0F1E36] bg-slate-50 p-1.5 text-[11px] text-slate-800 font-medium">
              <div className="h-3 w-3 rounded-full border-2 border-[#0F1E36] bg-[#0F1E36]" />
              <span>A parent or parent-in-law</span>
            </div>
            <div className="flex items-center gap-2 rounded-md border border-slate-100 p-1.5 text-[11px] text-slate-500">
              <div className="h-3 w-3 rounded-full border border-slate-300" />
              <span>A partner or spouse</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      stepNumber: "02",
      title: "Receive Your Results",
      description:
        "The Care Compass shows your situation and tailored recommendations with concrete next steps.",
      // Mini UI illustration
      illustration: (
        <div className="w-full rounded-xl border border-slate-200 bg-white p-4 shadow-xs space-y-2.5">
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#0D9488]">
            <CheckCircle2 className="h-3 w-3" />
            <span>Care Compass Report</span>
          </div>
          <div className="rounded-lg bg-emerald-50/80 p-2 border border-emerald-100 text-[11px] text-emerald-900 font-medium space-y-1">
            <div className="flex justify-between">
              <span>Estimated Support Level</span>
              <span className="font-bold">Level 2</span>
            </div>
            <div className="h-1.5 w-full bg-emerald-200/50 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-emerald-600 rounded-full" />
            </div>
          </div>
          <div className="space-y-1 text-[10px] text-slate-600">
            <p className="font-semibold text-slate-800">Next Steps:</p>
            <p>✓ Spitex home care consultation</p>
            <p>✓ Supplementary insurance benefits (EL)</p>
          </div>
        </div>
      ),
    },
    {
      stepNumber: "03",
      title: "Make the Connection",
      description:
        "We connect you with suitable care partners in your region — personally if you prefer.",
      // Mini UI illustration
      illustration: (
        <div className="w-full rounded-xl border border-slate-200 bg-white p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-around py-2">
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 rounded-full border-2 border-slate-200 overflow-hidden relative">
                <Image src="/images/sarah.jpg" alt="Caregiver" width={32} height={32} className="h-full w-full object-cover" />
              </div>
              <span className="text-[9px] text-slate-500 mt-1">Caregiver</span>
            </div>
            <div className="flex items-center text-slate-400">
              <ArrowRight className="h-4 w-4 animate-pulse text-[#0D9488]" />
            </div>
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 rounded-full border-2 border-[#0D9488] overflow-hidden bg-teal-50 flex items-center justify-center text-[#0D9488]">
                <Users className="h-4 w-4" />
              </div>
              <span className="text-[9px] text-slate-800 font-semibold mt-1">Care Partner</span>
            </div>
          </div>
          <div className="rounded bg-slate-50 p-1.5 text-center text-[10px] text-slate-600 font-medium border border-slate-100">
            Regional Spitex & Advisory Helplines
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-600 mb-3">
            Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F1E36]">
            How Pflege Works
          </h2>
          <p className="mt-3.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
            A simple step-by-step journey that helps you better understand your caregiving situation
            and confidently take the next step.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-7 shadow-xs transition-all duration-300 hover:shadow-md hover:border-slate-300"
            >
              {/* Card Illustration Area */}
              <div className="mb-6 flex min-h-[160px] items-center justify-center rounded-xl bg-slate-100/80 p-3 border border-slate-200/60">
                {step.illustration}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold tracking-tight text-[#0F1E36] mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
