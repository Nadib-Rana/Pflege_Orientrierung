import React from "react";
import Image from "next/image";

interface JourneyCard {
  title: string;
  image: string;
  alt: string;
}

const journeyItems: JourneyCard[] = [
  {
    title: "Adult child helping parent walk",
    image: "/images/journey_parent_walk.jpg",
    alt: "Adult child gently assisting parent to walk",
  },
  {
    title: "Medication organizer on kitchen table",
    image: "/images/journey_medication.jpg",
    alt: "Medication organizer and notes on kitchen table",
  },
  {
    title: "Video call check-in with sibling",
    image: "/images/journey_videocall.jpg",
    alt: "Video call conversation with family member",
  },
  {
    title: "Spouse caregiver, quiet morning coffee",
    image: "/images/journey_coffee.jpg",
    alt: "Spouse caregiver enjoying a quiet morning cup of coffee",
  },
  {
    title: "Support group",
    image: "/images/journey_support.jpg",
    alt: "Caregivers community support group",
  },
];

export function CareJourneySection() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-600 mb-3">
            Why It Matters
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F1E36]">
            Every Care Journey Is Different
          </h2>
          <p className="mt-3.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
            No two caregiving situations are the same. Pflege Orientrierung begins by understanding
            your unique circumstances through the Care Compass, allowing us to provide guidance
            that is relevant, practical, and tailored to your needs.
          </p>
        </div>

        {/* 5 Vertical Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {journeyItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Image Container with 2:3 aspect ratio */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              </div>

              {/* Overlay Caption Pill */}
              <div className="absolute bottom-3 inset-x-3">
                <div className="rounded-lg bg-white/90 backdrop-blur-md px-2.5 py-2 text-center shadow-xs border border-white/40">
                  <p className="text-[11px] font-semibold text-slate-800 leading-tight">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareJourneySection;
