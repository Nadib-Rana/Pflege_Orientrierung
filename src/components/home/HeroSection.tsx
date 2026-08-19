import React from "react";
import Image from "next/image";
import { CareCompassHeroCard } from "@/components/home/CareCompassHeroCard";
import { Star } from "lucide-react";

export function HeroSection() {
  return (
    <section id="compass" className="relative overflow-hidden bg-[#FBFBFC] py-12 md:py-16 lg:py-20 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle, Image & Social Proof */}
          <div className="lg:col-span-6 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-lg bg-[#F1F5F9] px-3.5 py-1 text-xs font-normal text-[#64748B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              <span>Your care journey starts here</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#0B284D] leading-[1.12] font-sans">
              Navigate Care <br />
              With Confidence
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-lg font-normal">
              Pflege Orientrierung is a supportive companion for family caregivers. Answer a few
              questions to receive personalized guidance, helping you decide your next steps with
              clarity and confidence.
            </p>

            {/* Hero Image Container */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 shadow-sm aspect-[16/10] max-w-[460px] bg-slate-100">
              <Image
                src="/images/hero_image.png"
                alt="Caregiver nurse assisting elderly woman in wheelchair"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 460px"
              />
            </div>

            {/* Social Proof: Avatars + 5 Stars + Trusted Text */}
            <div className="flex items-center gap-3 pt-1">
              {/* Overlapping Avatar Stack */}
              <div className="flex -space-x-2 overflow-hidden">
                <Image
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="/images/sarah.jpg"
                  alt="Caregiver review user"
                  width={32}
                  height={32}
                />
                <Image
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="/images/angel.jpg"
                  alt="Caregiver review user"
                  width={32}
                  height={32}
                />
                <Image
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="/images/journey_videocall.jpg"
                  alt="Caregiver review user"
                  width={32}
                  height={32}
                />
              </div>

              {/* Stars & Text */}
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#0B284D] mt-0.5">
                  Trusted by 10k+ caregivers
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Care Compass Quiz Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <CareCompassHeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
