"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  nextMemberName: string;
  nextMemberImage: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Renner",
    role: "Family Caregiver, Zurich",
    quote:
      "\"The Care Compass was simple to complete, yet the recommendations felt thoughtful and relevant. Instead of endless searching online, I finally had clear guidance tailored to my situation.\"",
    image: "/images/sarah.jpg",
    nextMemberName: "Angel Dia",
    nextMemberImage: "/images/angel.jpg",
  },
  {
    id: 2,
    name: "Angel Dia",
    role: "Spouse Caregiver, Bern",
    quote:
      "\"Pflege Orientrierung helped us clarify our insurance entitlements and find the right local Spitex service within days. The relief our family felt was truly immeasurable.\"",
    image: "/images/angel.jpg",
    nextMemberName: "Thomas Mueller",
    nextMemberImage: "/images/journey_videocall.jpg",
  },
  {
    id: 3,
    name: "Thomas Mueller",
    role: "Primary Caregiver, Lucerne",
    quote:
      "\"Navigating elder care for my father felt completely overwhelming before this. The step-by-step roadmap gave our whole family a calm, structured plan to move forward.\"",
    image: "/images/journey_videocall.jpg",
    nextMemberName: "Sarah Renner",
    nextMemberImage: "/images/sarah.jpg",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header matching exact design */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-4 py-1 text-xs font-medium text-slate-600 shadow-2xs">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0C2B4E] leading-tight">
            What Our Members Are <br />
            Saying
          </h2>
          <p className="text-xs sm:text-sm text-[#718096] max-w-lg mx-auto leading-relaxed">
            Hear from family caregivers who have found greater clarity, confidence, and support with
            Pflege Orientrierung.
          </p>
        </div>

        {/* 3-Column Layout matching exact screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {/* 1. Left: Author Portrait Photo */}
          <div className="lg:col-span-4 relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-100 shadow-sm min-h-[380px] lg:min-h-full">
            <Image
              src={current.image}
              alt={current.name}
              fill
              className="object-cover transition-opacity duration-300"
              sizes="(max-width: 1024px) 100vw, 380px"
            />
          </div>

          {/* 2. Middle: Dark Navy Quote Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-[#0F355E] p-8 sm:p-10 text-white shadow-lg shadow-blue-950/10 min-h-[380px]">
            <div>
              {/* Large Double Quotation Symbol */}
              <div className="text-white font-serif text-5xl sm:text-6xl leading-none select-none opacity-95 mb-4">
                &rdquo;&rdquo;
              </div>

              {/* Quote Text */}
              <blockquote className="text-base sm:text-[17px] font-normal leading-relaxed text-slate-100">
                {current.quote}
              </blockquote>
            </div>

            {/* Author Signature */}
            <div className="pt-6">
              <p className="text-sm font-medium text-slate-200">- {current.name}</p>
            </div>
          </div>

          {/* 3. Right: Next Member Preview & Arrow Buttons */}
          <div className="lg:col-span-3 flex flex-col justify-between py-2">
            {/* Next Member Horizontal Card */}
            <div
              onClick={handleNext}
              className="flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="relative h-22 w-22 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-2xs">
                <Image
                  src={current.nextMemberImage}
                  alt={current.nextMemberName}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="100px"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#718096] font-normal">Next Member</span>
                <span className="text-sm font-bold text-[#0C2B4E] group-hover:text-[#0D9488] transition-colors flex items-center gap-1 mt-0.5">
                  {current.nextMemberName} &rarr;
                </span>
              </div>
            </div>

            {/* Bottom-Right Arrows matching exact screenshot */}
            <div className="flex items-center justify-end gap-3 pt-6 lg:pt-0">
              {/* Previous Minimal Arrow */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center text-slate-700 hover:text-[#0C2B4E] transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-6 w-6 stroke-[2.5]" />
              </button>

              {/* Next Solid Navy Circle Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F355E] hover:bg-[#154477] text-white shadow-md shadow-blue-950/20 transition-all cursor-pointer"
              >
                <ChevronRight className="h-5 w-5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
