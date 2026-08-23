"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function CareJourneySection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-4 py-1 text-xs font-medium text-slate-600 shadow-2xs">
            {t("careJourney.badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0C2B4E] leading-tight">
            {t("careJourney.title")}
          </h2>
          <p className="text-xs sm:text-sm text-[#718096] max-w-2xl mx-auto leading-relaxed italic">
            &ldquo;{t("careJourney.quote")}&rdquo;
          </p>
          <p className="text-xs font-bold text-[#0C2B4E]">
            — {t("careJourney.author")}, <span className="text-slate-500 font-normal">{t("careJourney.authorRole")}</span>
          </p>
        </div>

        {/* 4-Column Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto items-stretch">
          {/* Column 1: Tall Single Card (Adult child helping parent walk) */}
          <div className="group relative overflow-hidden rounded-3xl bg-slate-100 min-h-[460px] sm:min-h-[500px] shadow-xs">
            <Image
              src="/images/journey_parent_walk.png"
              alt={t("careJourney.img1")}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-103"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
              <span className="inline-block rounded-lg bg-white/95 backdrop-blur-md px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold text-[#0C2B4E] shadow-sm border border-white/60">
                {t("careJourney.img1")}
              </span>
            </div>
          </div>

          {/* Column 2: Two Stacked Cards */}
          <div className="flex flex-col gap-4 md:gap-5 min-h-[460px] sm:min-h-[500px]">
            {/* Top Card: Video call */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-100 flex-1 min-h-[220px] shadow-xs">
              <Image
                src="/images/Video_call_check-in_with_sibling.png"
                alt={t("careJourney.img2")}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-103"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute bottom-3 left-3 right-3 z-10">
                <span className="inline-block rounded-lg bg-white/95 backdrop-blur-md px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold text-[#0C2B4E] shadow-sm border border-white/60">
                  {t("careJourney.img2")}
                </span>
              </div>
            </div>

            {/* Bottom Card: Medication organizer */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-100 flex-1 min-h-[220px] shadow-xs">
              <Image
                src="/images/Image_Gallery_Item.png"
                alt={t("careJourney.img3")}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-103"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute bottom-3 left-3 right-3 z-10">
                <span className="inline-block rounded-lg bg-white/95 backdrop-blur-md px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold text-[#0C2B4E] shadow-sm border border-white/60">
                  {t("careJourney.img3")}
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Tall Single Card (Spouse caregiver) */}
          <div className="group relative overflow-hidden rounded-3xl bg-slate-100 min-h-[460px] sm:min-h-[500px] shadow-xs">
            <Image
              src="/images/Spouse_caregiver_quiet_morning_coffee.png"
              alt={t("careJourney.img4")}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-103"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
              <span className="inline-block rounded-lg bg-white/95 backdrop-blur-md px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold text-[#0C2B4E] shadow-sm border border-white/60">
                {t("careJourney.img4")}
              </span>
            </div>
          </div>

          {/* Column 4: Tall Single Card (Support group) */}
          <div className="group relative overflow-hidden rounded-3xl bg-slate-100 min-h-[460px] sm:min-h-[500px] shadow-xs">
            <Image
              src="/images/Support_group.png"
              alt={t("careJourney.img5")}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-103"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
              <span className="inline-block rounded-lg bg-white/95 backdrop-blur-md px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold text-[#0C2B4E] shadow-sm border border-white/60">
                {t("careJourney.img5")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareJourneySection;
