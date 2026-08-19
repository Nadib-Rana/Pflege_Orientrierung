import React from "react";
import Image from "next/image";
import { CareCompassHeroCard } from "@/components/home/CareCompassHeroCard";
import { Star } from "lucide-react";

export function HeroSection() {
  return (
    <section id="compass" className="relative overflow-hidden bg-[#FAFAFA] pt-10 pb-16 md:pt-14 md:pb-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading, Subtitle, Image & Social Proof */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3.5 py-1 text-xs font-medium text-slate-600 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0D9488]" />
              <span>Your care journey starts here</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0F1E36] leading-[1.12] font-sans">
              Navigate Care <br className="hidden sm:inline" />
              With Confidence
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Pflege Orientrierung is a supportive companion for family caregivers. Answer a few
              questions to receive personalized guidance, helping you decide your next steps with
              clarity and confidence.
            </p>

            {/* Hero Image Container */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-md aspect-[16/10] max-w-lg bg-slate-100">
              <Image
                src="/images/hero_caregiver.jpg"
                alt="Adult daughter supporting elderly mother in warm kitchen"
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-102"
                sizes="(max-width: 768px) 100vw, 550px"
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
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-700 mt-0.5">
                  Trusted by 10k+ caregivers
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Care Compass Quiz Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <CareCompassHeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
