"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/common/BrandLogo";
import { FileText, AlertCircle } from "lucide-react";

export default function GuidancePage() {
  return (
    <div className="min-h-screen bg-[#F4F7FB] flex flex-col justify-between">
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
              <h2 className="text-lg sm:text-xl font-bold text-[#0C2B4E]">Situation Summary</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5A6A80] leading-relaxed">
              Your recent assessment indicates a &ldquo;Balanced but Transitioning&rdquo; care
              environment. While primary medical needs are being met, there is an increasing demand
              for emotional support and specialized mobility equipment. We&apos;ve identified
              opportunities to reduce caregiver fatigue by 15% through optimized scheduling and the
              integration of local community resources.
            </p>
          </div>

          {/* Recommended Next Steps (3 Columns Grid) */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#0C2B4E]">Recommended Next Steps</h2>

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
                  Explore our curated guide on home modifications and adaptive tools specifically
                  for late-stage mobility support.
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
              provided for informational purposes only and is based on the data you provided in the
              Care Compass assessment. It is not a substitute for professional medical advice,
              diagnosis, or treatment. Always seek the advice of your physician or other qualified
              health providers with any questions you may have regarding a medical condition.
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

            <button
              type="button"
              onClick={() => alert("Personal support request initiated. Our team will contact you shortly.")}
              className="w-full inline-flex items-center justify-center rounded-xl bg-[#0F2E59] hover:bg-[#0A2244] text-white py-3 text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
            >
              Request personal support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
