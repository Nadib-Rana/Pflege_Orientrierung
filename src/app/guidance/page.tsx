"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BrandLogo } from "@/components/common/BrandLogo";
import { FileText, AlertCircle, Sparkles, CheckCircle2, MapPin, ExternalLink } from "lucide-react";
import { AssessmentResult } from "@/lib/api";

const STORAGE_KEY = "pflege_care_compass_progress_v1";

export default function GuidancePage() {
  const router = useRouter();
  const [assessmentData, setAssessmentData] = useState<AssessmentResult | null>(null);
  const [completedDate, setCompletedDate] = useState<string>("Today");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.assessmentResult) {
          setAssessmentData(parsed.assessmentResult);
        }
        if (parsed.updatedAt) {
          const date = new Date(parsed.updatedAt);
          setCompletedDate(
            date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          );
        }
      }
    } catch {
      // Ignore storage error
    }
  }, []);

  const handleResetGuidance = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
    router.push("/care-compass");
  };

  const handleSaveAndExit = () => {
    router.push("/");
  };

  const publicCode = assessmentData?.assessment?.publicCode || "CC-9014";
  const estimatedPflegegrad = assessmentData?.assessment?.estimatedPflegegrad || "Grad 2";
  const urgencyLevel = assessmentData?.assessment?.urgencyLevel || "Medium";
  const canton = assessmentData?.assessment?.canton || "ZH";

  const situationSummary =
    assessmentData?.situationGuidance?.summary ||
    `Your assessment indicates a "Balanced but Transitioning" care environment in Canton ${canton}. While primary daily needs are being met, there is an increasing demand for emotional support and structured respite planning.`;

  const nextSteps = assessmentData?.situationGuidance?.nextSteps || [
    {
      step: 1,
      title: "Physical Therapy & Mobility Review",
      description: "Review local specialized mobility therapists. Early intervention can significantly improve daily comfort and independence.",
    },
    {
      step: 2,
      title: "Join Local CareCircle",
      description: "Connect with families in your area who are navigating similar Swiss care pathways for shared insights and support.",
    },
    {
      step: 3,
      title: "Equipment & Home Adaptation Guide",
      description: "Explore our curated guide on home modifications, emergency alarm systems, and adaptive tools.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FB] flex flex-col justify-between">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/60 px-4 sm:px-8 py-3.5">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <BrandLogo />
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={handleResetGuidance}
              className="rounded-lg border border-[#EF4444] text-[#EF4444] hover:bg-red-50 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Reset Guidance
            </button>
            <button
              type="button"
              onClick={handleSaveAndExit}
              className="rounded-lg border-2 border-[#0F2E59] bg-white px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#0F2E59] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Save & Exit
            </button>
          </div>
        </div>
      </header>

      {/* Main Guidance Container */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 sm:py-14">
        <div className="w-full max-w-3xl space-y-8">
          {/* Header Title & Code Subtitle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0C2B4E] tracking-tight">
                Your Personalised Guidance
              </h1>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Based on your Care Compass assessment completed on {completedDate}.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 bg-white border border-slate-200/80 rounded-2xl px-4 py-2 shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Reference ID:</span>
              <span className="font-mono text-sm font-extrabold text-[#0F2E59]">{publicCode}</span>
            </div>
          </div>

          {/* Quick Metrics Badges */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white p-3.5 sm:p-4 border border-slate-200/70 text-center">
              <span className="text-[10px] font-semibold text-slate-400 uppercase">Canton Region</span>
              <p className="text-sm sm:text-base font-bold text-[#0C2B4E]">{canton}</p>
            </div>
            <div className="rounded-2xl bg-white p-3.5 sm:p-4 border border-slate-200/70 text-center">
              <span className="text-[10px] font-semibold text-slate-400 uppercase">Estimated Pflegegrad</span>
              <p className="text-sm sm:text-base font-bold text-[#1A5695]">{estimatedPflegegrad}</p>
            </div>
            <div className="rounded-2xl bg-white p-3.5 sm:p-4 border border-slate-200/70 text-center">
              <span className="text-[10px] font-semibold text-slate-400 uppercase">Priority Level</span>
              <p className={`text-sm sm:text-base font-bold ${urgencyLevel === "High" ? "text-amber-600" : "text-emerald-600"}`}>
                {urgencyLevel}
              </p>
            </div>
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
              {situationSummary}
            </p>
          </div>

          {/* Recommended Next Steps */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#0C2B4E]">Recommended Next Steps</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
              {nextSteps.map((step, idx) => (
                <div key={idx} className="rounded-2xl bg-white p-5 sm:p-6 border border-slate-200/70 shadow-xs flex flex-col justify-start">
                  <span className="text-[10px] font-bold text-slate-400 mb-1">STEP {step.step || idx + 1}</span>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0C2B4E] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer Alert Card */}
          <div className="rounded-2xl bg-[#FFF8EC] border border-[#FDE68A]/70 p-4 sm:p-5 flex items-start gap-3">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FEF3C7] text-[#D97706] mt-0.5">
              <AlertCircle className="h-3.5 w-3.5" />
            </div>
            <p className="text-[11px] sm:text-xs text-[#92400E] leading-relaxed">
              <span className="font-semibold">Swiss FADP Notice:</span> This personalised guidance is
              provided for informational orientation based on your assessment responses. Assessment Reference ID: {publicCode}.
            </p>
          </div>

          {/* Bottom Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link
              href="/"
              className="w-full inline-flex items-center justify-center rounded-xl border-2 border-[#0F2E59] bg-white text-[#0F2E59] hover:bg-slate-50 py-3 text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
            >
              Go to Home
            </Link>

            <Link
              href={`/contact?assessmentId=${encodeURIComponent(publicCode)}`}
              className="w-full inline-flex items-center justify-center rounded-xl bg-[#0F2E59] hover:bg-[#0A2244] text-white py-3 text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
            >
              Request personal support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
