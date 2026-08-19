"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Renner",
    role: "Family Caregiver, Zurich",
    quote:
      "The Care Compass was simple to complete, yet the recommendations felt thoughtful and relevant. Instead of endless searching online, I finally had clear guidance tailored to my situation.",
    image: "/images/sarah.jpg",
  },
  {
    id: 2,
    name: "Angel Dia",
    role: "Spouse Caregiver, Bern",
    quote:
      "Pflege Orientrierung helped us clarify our insurance entitlements and find the right local Spitex service within days. The relief our family felt was truly immeasurable.",
    image: "/images/angel.jpg",
  },
  {
    id: 3,
    name: "Thomas Mueller",
    role: "Primary Caregiver, Lucerne",
    quote:
      "Navigating elder care for my father felt completely overwhelming before this. The step-by-step roadmap gave our whole family a calm, structured plan to move forward.",
    image: "/images/journey_coffee.jpg",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonials[currentIndex];
  const nextIndex = (currentIndex + 1) % testimonials.length;
  const nextMember = testimonials[nextIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold text-slate-600 mb-3 shadow-2xs">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F1E36]">
            What Our Members Are Saying
          </h2>
          <p className="mt-3.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Hear from family caregivers who have found greater clarity, confidence, and support with
            Pflege Orientrierung.
          </p>
        </div>

        {/* 3-Column / Highlight Card Layout matching Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Author Portrait Photo */}
          <div className="lg:col-span-4 relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm min-h-[320px] lg:min-h-full">
            <Image
              src={current.image}
              alt={current.name}
              fill
              className="object-cover transition-opacity duration-300"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* Center: Main Quote Card (Dark Navy / Slate) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#0F1E36] p-8 sm:p-10 text-white shadow-xl">
            {/* Quote Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#0D9488] mb-6">
              <Quote className="h-5 w-5 fill-current" />
            </div>

            {/* Quote Text */}
            <blockquote className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-slate-100 italic">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author Name */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm font-bold text-white tracking-wide">- {current.name}</p>
              <p className="text-xs text-slate-400 mt-0.5">{current.role}</p>
            </div>
          </div>

          {/* Right: Next Member Preview & Navigation Controls */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-4">
            {/* Next Member Preview Card */}
            <div
              onClick={handleNext}
              className="group flex flex-col justify-between flex-grow rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:border-slate-300 hover:shadow-md cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 mb-3">
                <Image
                  src={nextMember.image}
                  alt={nextMember.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="250px"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Next Member
                  </span>
                  <p className="text-sm font-bold text-[#0F1E36] group-hover:text-[#0D9488] transition-colors">
                    {nextMember.name} &rarr;
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel Arrow Buttons */}
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs transition-all hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F1E36] text-white shadow-xs transition-all hover:bg-[#1B365D] cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
