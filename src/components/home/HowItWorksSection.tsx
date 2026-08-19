import React from "react";
import { User, Heart, Building2, Shield, Users, MapPin } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-[#F1F5F9] px-4 py-1 text-xs font-medium text-slate-600 shadow-2xs">
            Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0C2B4E] leading-tight">
            How Pflege Works
          </h2>
          <p className="text-xs sm:text-sm text-[#718096] max-w-xl mx-auto leading-relaxed">
            A simple step-by-step journey that helps you better understand your caregiving
            situation and confidently take the next step.
          </p>
        </div>

        {/* 3 Step Cards with Horizontal Connecting Line */}
        <div className="relative max-w-6xl mx-auto">
          {/* Subtle Horizontal Connecting Blue Line across cards */}
          <div className="hidden lg:block absolute top-[130px] left-[15%] right-[15%] h-[2px] bg-[#93C5FD]/60 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative z-10">
            {/* ================= STEP 1 ================= */}
            <div className="flex flex-col items-center text-center">
              {/* Top Graphic Card (Mini Assessment Preview) */}
              <div className="w-full aspect-[4/3] rounded-2xl border-2 border-[#0C2B4E] bg-white p-3.5 sm:p-4 shadow-sm flex flex-col justify-between mb-6 text-left">
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between text-[9px] text-slate-400 mb-1">
                    <span>Question progress</span>
                    <span className="font-mono">1 OF 12</span>
                  </div>
                  <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden mb-2.5">
                    <div className="h-full w-1/4 bg-[#0D9488] rounded-full" />
                  </div>

                  <p className="text-xs font-bold text-[#0C2B4E]">Who are you caring for?</p>
                  <p className="text-[9px] text-slate-400 mb-2">Choose the closest match</p>

                  {/* Options */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 rounded-md border border-[#0C2B4E] bg-slate-50 p-1.5 text-[10px] text-[#0C2B4E] font-medium">
                      <div className="h-2.5 w-2.5 rounded-full border-2 border-[#0C2B4E] bg-[#0C2B4E]" />
                      <span>A parent or parent-in-law</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md border border-slate-100 p-1.5 text-[10px] text-slate-500">
                      <div className="h-2.5 w-2.5 rounded-full border border-slate-300" />
                      <span>A partner or spouse</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md border border-slate-100 p-1.5 text-[10px] text-slate-500">
                      <div className="h-2.5 w-2.5 rounded-full border border-slate-300" />
                      <span>A child</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md border border-slate-100 p-1.5 text-[10px] text-slate-500">
                      <div className="h-2.5 w-2.5 rounded-full border border-slate-300" />
                      <span>Another family member or close friend</span>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[8px]">
                  <span className="rounded border border-slate-200 px-1.5 py-0.5 text-slate-600">
                    &larr; Previous
                  </span>
                  <span className="text-slate-400">Save & Exit</span>
                  <span className="rounded bg-[#0C2B4E] px-2 py-0.5 text-white font-medium">
                    Continue
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-[#0C2B4E] mb-2">Start the Assessment</h3>
              <p className="text-xs sm:text-[13px] text-[#718096] leading-relaxed max-w-xs">
                Answer a few questions about your caregiving situation in 3 minutes — no
                registration required.
              </p>
            </div>

            {/* ================= STEP 2 ================= */}
            <div className="flex flex-col items-center text-center">
              {/* Top Graphic Card (Mini Results Roadmap Preview) */}
              <div className="w-full aspect-[4/3] rounded-2xl border-2 border-[#0C2B4E] bg-white p-3 sm:p-3.5 shadow-sm flex flex-col justify-between mb-6 text-left overflow-hidden">
                <div className="space-y-1.5">
                  <div className="border-b border-slate-100 pb-1">
                    <p className="text-[11px] font-bold text-[#0C2B4E]">Your Personalised Guidance</p>
                    <p className="text-[7px] text-slate-400">
                      Based on your Care Compass assessment completion on October 24, 2024
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="rounded-md border border-slate-100 bg-slate-50/80 p-1.5 space-y-1">
                    <p className="text-[8px] font-bold text-slate-700">Situation Summary</p>
                    <p className="text-[7px] text-slate-500 leading-tight">
                      Your care situation indicates a &ldquo;Moderately Transitioning&rdquo; care environment.
                    </p>
                    <div className="flex gap-1 pt-0.5">
                      <span className="rounded bg-blue-100/80 px-1 py-0.2 text-[6px] text-blue-800 font-medium">
                        Mobility Focus
                      </span>
                      <span className="rounded bg-teal-100/80 px-1 py-0.2 text-[6px] text-teal-800 font-medium">
                        Respite Care Identified
                      </span>
                      <span className="rounded bg-slate-200 px-1 py-0.2 text-[6px] text-slate-700 font-medium">
                        Low Burden Risk
                      </span>
                    </div>
                  </div>

                  {/* 3 Step Mini Columns */}
                  <div>
                    <p className="text-[7px] font-bold text-slate-700 mb-0.5">Recommended Next Steps</p>
                    <div className="grid grid-cols-3 gap-1 text-[6px]">
                      <div className="rounded border border-slate-100 bg-white p-1">
                        <p className="font-bold text-slate-800">Physical Therapy</p>
                        <p className="text-slate-400">Review specialized mobility equipment.</p>
                      </div>
                      <div className="rounded border border-slate-100 bg-white p-1">
                        <p className="font-bold text-slate-800">Join CareCircle</p>
                        <p className="text-slate-400">Connect with local care networks.</p>
                      </div>
                      <div className="rounded border border-slate-100 bg-white p-1">
                        <p className="font-bold text-slate-800">Equipment Guide</p>
                        <p className="text-slate-400">Home modification recommendations.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex gap-1 pt-1 border-t border-slate-100 text-[7px]">
                  <span className="flex-1 text-center rounded border border-slate-200 py-0.5 text-slate-600">
                    Go to Home
                  </span>
                  <span className="flex-1 text-center rounded bg-[#0C2B4E] py-0.5 text-white font-medium">
                    Request personal support
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-[#0C2B4E] mb-2">Receive Your Results</h3>
              <p className="text-xs sm:text-[13px] text-[#718096] leading-relaxed max-w-xs">
                The Care Compass shows your situation and tailored recommendations with concrete next
                steps.
              </p>
            </div>

            {/* ================= STEP 3 ================= */}
            <div className="flex flex-col items-center text-center">
              {/* Top Graphic Card (Care Partner Connection Network Diagram) */}
              <div className="w-full aspect-[4/3] rounded-2xl border-2 border-[#0C2B4E] bg-white p-4 shadow-sm flex flex-col items-center justify-center mb-6 relative overflow-hidden">
                {/* Network Nodes Diagram */}
                <div className="relative w-48 h-40 flex items-center justify-center">
                  {/* Subtle Background Location Pin */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-slate-100">
                    <MapPin className="h-16 w-16 fill-slate-100/60 stroke-slate-200/50" />
                  </div>

                  {/* Connecting Dashed Lines */}
                  <svg className="absolute inset-0 h-full w-full pointer-events-none">
                    <line x1="96" y1="80" x2="35" y2="35" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="96" y1="80" x2="157" y2="35" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="96" y1="80" x2="35" y2="125" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="96" y1="80" x2="157" y2="125" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                  </svg>

                  {/* Center Node (Green User Avatar) */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 border-2 border-emerald-400 shadow-md shadow-emerald-200/50">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white">
                      <User className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Node 1 (Top Left: Caregiver / Nurse with Heart Badge) */}
                  <div className="absolute top-2 left-2 z-10 flex flex-col items-center">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 border border-teal-300 shadow-xs">
                      <User className="h-5 w-5 text-teal-800" />
                      <div className="absolute -bottom-1 -left-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
                        <Heart className="h-2.5 w-2.5 fill-current" />
                      </div>
                    </div>
                  </div>

                  {/* Node 2 (Top Right: Male Care Partner with Clinic Badge) */}
                  <div className="absolute top-2 right-2 z-10 flex flex-col items-center">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 border border-blue-300 shadow-xs">
                      <User className="h-5 w-5 text-blue-800" />
                      <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-white">
                        <Building2 className="h-2.5 w-2.5" />
                      </div>
                    </div>
                  </div>

                  {/* Node 3 (Bottom Left: Advisor with Shield Badge) */}
                  <div className="absolute bottom-2 left-2 z-10 flex flex-col items-center">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 border border-purple-300 shadow-xs">
                      <User className="h-5 w-5 text-purple-800" />
                      <div className="absolute -bottom-1 -left-1 flex h-4 w-4 items-center justify-center rounded-full bg-purple-600 text-white">
                        <Shield className="h-2.5 w-2.5" />
                      </div>
                    </div>
                  </div>

                  {/* Node 4 (Bottom Right: Community with People Badge) */}
                  <div className="absolute bottom-2 right-2 z-10 flex flex-col items-center">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 border border-amber-300 shadow-xs">
                      <User className="h-5 w-5 text-amber-800" />
                      <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-white">
                        <Users className="h-2.5 w-2.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-[#0C2B4E] mb-2">Make the Connection</h3>
              <p className="text-xs sm:text-[13px] text-[#718096] leading-relaxed max-w-xs">
                We connect you with suitable care partners in your region — personally if you
                prefer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
