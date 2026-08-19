import React from "react";
import Image from "next/image";

export function CareJourneySection() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header matching screenshot */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-4 py-1 text-xs font-medium text-slate-600 shadow-2xs">
            Why It Matters
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0C2B4E] leading-tight">
            Every Care Journey Is Different
          </h2>
          <p className="text-xs sm:text-sm text-[#718096] max-w-2xl mx-auto leading-relaxed">
            No two caregiving situations are the same. Pflege Orientrierung begins by understanding
            your unique circumstances through the Care Compass, allowing us to provide guidance
            that is relevant, practical, and tailored to your needs.
          </p>
        </div>

        {/* 4-Column Mosaic Grid matching exact layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto items-stretch">
          {/* Column 1: Tall Single Card (Adult child helping parent walk) */}
          <div className="group relative overflow-hidden rounded-3xl bg-slate-100 min-h-[460px] sm:min-h-[500px] shadow-xs">
            <Image
              src="/images/journey_parent_walk.png"
              alt="Adult child helping parent walk"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-103"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            {/* Bottom Caption Pill */}
            <div className="absolute bottom-3.5 left-3.5 z-10">
              <span className="inline-block rounded-md bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-slate-800 shadow-xs">
                Adult child helping parent walk
              </span>
            </div>
          </div>

          {/* Column 2: Two Stacked Cards */}
          <div className="flex flex-col gap-4 md:gap-5 min-h-[460px] sm:min-h-[500px]">
            {/* Top Card: Video call check-in with sibling */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-100 flex-1 min-h-[220px] shadow-xs">
              <Image
                src="/images/Video_call_check-in_with_sibling.png"
                alt="Video call check-in with sibling"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-103"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute bottom-3.5 left-3.5 z-10">
                <span className="inline-block rounded-md bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-slate-800 shadow-xs">
                  Video call check-in with sibling
                </span>
              </div>
            </div>

            {/* Bottom Card: Medication organizer on kitchen table */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-100 flex-1 min-h-[220px] shadow-xs">
              <Image
                src="/images/Image_Gallery_Item.png"
                alt="Medication organizer on kitchen table"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-103"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute bottom-3.5 left-3.5 z-10">
                <span className="inline-block rounded-md bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-slate-800 shadow-xs">
                  Medication organizer on kitchen table
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Tall Single Card (Spouse caregiver, quiet morning coffee) */}
          <div className="group relative overflow-hidden rounded-3xl bg-slate-100 min-h-[460px] sm:min-h-[500px] shadow-xs">
            <Image
              src="/images/Spouse_caregiver_quiet_morning_coffee.png"
              alt="Spouse caregiver, quiet morning coffee"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-103"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute bottom-3.5 left-3.5 z-10">
              <span className="inline-block rounded-md bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-slate-800 shadow-xs">
                Spouse caregiver, quiet morning coffee
              </span>
            </div>
          </div>

          {/* Column 4: Tall Single Card (Support group) */}
          <div className="group relative overflow-hidden rounded-3xl bg-slate-100 min-h-[460px] sm:min-h-[500px] shadow-xs">
            <Image
              src="/images/Support_group.png"
              alt="Support group"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-103"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute bottom-3.5 left-3.5 z-10">
              <span className="inline-block rounded-md bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-slate-800 shadow-xs">
                Support group
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareJourneySection;
