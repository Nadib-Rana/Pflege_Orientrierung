"use client";

import React from "react";
import { ShieldCheck, Heart, Search, Lock, UserCheck, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function CoreValuesSection() {
  const { t } = useLanguage();

  const values = [
    {
      icon: ShieldCheck,
      title: t("coreValues.val1Title"),
      description: t("coreValues.val1Desc"),
      isHighlighted: true,
    },
    {
      icon: Lock,
      title: t("coreValues.val2Title"),
      description: t("coreValues.val2Desc"),
    },
    {
      icon: Search,
      title: t("coreValues.val3Title"),
      description: t("coreValues.val3Desc"),
    },
    {
      icon: Users,
      title: t("coreValues.val4Title"),
      description: t("coreValues.val4Desc"),
    },
    {
      icon: Heart,
      title: t("hero.titleLine1"),
      description: t("hero.subtitle"),
    },
    {
      icon: UserCheck,
      title: t("hero.cantonCoverage"),
      description: t("hero.bullet2"),
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-[#F1F5F9] px-4 py-1 text-xs font-medium text-slate-600 shadow-2xs">
            {t("coreValues.badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0C2B4E] leading-tight">
            {t("coreValues.title")}
          </h2>
          <p className="text-xs sm:text-sm text-[#718096] max-w-xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* 6 Cards in 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={cn(
                  "relative rounded-3xl p-8 sm:p-9 flex flex-col justify-start transition-all duration-300 h-full",
                  item.isHighlighted
                    ? "bg-[#D8E7F8] text-[#0C2B4E]"
                    : "bg-[#F3F6FA] text-[#0C2B4E]"
                )}
              >
                {/* Dark Navy Squircle Icon Box */}
                <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#0C2B4E] text-white shadow-xs mb-7 shrink-0">
                  <Icon className="h-5 w-5 stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-[22px] font-bold tracking-tight text-[#0C2B4E] leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-[#5A6A80] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CoreValuesSection;
