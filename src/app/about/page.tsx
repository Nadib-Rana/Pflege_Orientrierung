import React from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Trees, AppWindow, Star } from "lucide-react";
import { TextRevealStatement } from "@/components/about/TextRevealStatement";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Pflege Orientierung",
  description:
    "Caregiving can be complex and overwhelming. Polaris helps transform uncertainty into clarity with trusted guidance designed around the needs of family caregivers.",
};

// Incognito Hat & Glasses Privacy Icon matching exact screenshot
function IncognitoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 10h16" />
      <path d="M7 10l2-6h6l2 6" />
      <circle cx="8.5" cy="15.5" r="2.5" />
      <circle cx="15.5" cy="15.5" r="2.5" />
      <path d="M11 15.5h2" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Header Section */}
      <section className="pt-14 pb-10 md:pt-20 md:pb-14 bg-[#FBFBFC] text-center border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#0C2B4E] leading-tight">
            About Us
          </h1>
          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Caregiving can be complex and overwhelming. Polaris helps transform uncertainty into
            clarity with trusted guidance designed around the needs of family caregivers.
          </p>
        </div>

        {/* 2. Curved Fan Photo Gallery */}
        <div className="relative mx-auto max-w-6xl px-4 pt-12 pb-6 overflow-hidden">
          <div className="flex items-center justify-center -space-x-4 sm:-space-x-8 md:-space-x-12 py-4">
            {/* Photo 1: Leftmost (Tilted left) */}
            <div className="relative group h-44 w-32 sm:h-64 sm:w-48 md:h-76 md:w-56 shrink-0 overflow-hidden rounded-2xl md:rounded-3xl border-2 border-white shadow-md transform -rotate-12 translate-y-6 z-0 hover:z-30 hover:scale-108 hover:shadow-2xl transition-all duration-500 ease-out bg-slate-100 cursor-pointer">
              <Image
                src="/images/journey_parent_walk.png"
                alt="Senior care assistance"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                sizes="(max-width: 768px) 130px, 230px"
              />
            </div>

            {/* Photo 2: Left (Tilted slightly left) */}
            <div className="relative group h-48 w-36 sm:h-72 sm:w-52 md:h-84 md:w-60 shrink-0 overflow-hidden rounded-2xl md:rounded-3xl border-2 border-white shadow-lg transform -rotate-6 translate-y-2 z-10 hover:z-30 hover:scale-108 hover:shadow-2xl transition-all duration-500 ease-out bg-slate-100 cursor-pointer">
              <Image
                src="/images/hero_caregiver.jpg"
                alt="Caregiver nursing senior"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                sizes="(max-width: 768px) 150px, 240px"
              />
            </div>

            {/* Photo 3: Center (Prominent Hero Photo) */}
            <div className="relative group h-56 w-44 sm:h-80 sm:w-60 md:h-96 md:w-72 shrink-0 overflow-hidden rounded-2xl md:rounded-3xl border-4 border-white shadow-xl transform rotate-0 -translate-y-2 z-20 hover:z-30 hover:scale-108 hover:shadow-2xl transition-all duration-500 ease-out bg-slate-100 cursor-pointer">
              <Image
                src="/images/hero_image.png"
                alt="Senior with family caregiver"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                sizes="(max-width: 768px) 180px, 290px"
              />
            </div>

            {/* Photo 4: Right (Tilted slightly right) */}
            <div className="relative group h-48 w-36 sm:h-72 sm:w-52 md:h-84 md:w-60 shrink-0 overflow-hidden rounded-2xl md:rounded-3xl border-2 border-white shadow-lg transform rotate-6 translate-y-2 z-10 hover:z-30 hover:scale-108 hover:shadow-2xl transition-all duration-500 ease-out bg-slate-100 cursor-pointer">
              <Image
                src="/images/Support_group.png"
                alt="Support community"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                sizes="(max-width: 768px) 150px, 240px"
              />
            </div>

            {/* Photo 5: Rightmost (Tilted right) */}
            <div className="relative group h-44 w-32 sm:h-64 sm:w-48 md:h-76 md:w-56 shrink-0 overflow-hidden rounded-2xl md:rounded-3xl border-2 border-white shadow-md transform rotate-12 translate-y-6 z-0 hover:z-30 hover:scale-108 hover:shadow-2xl transition-all duration-500 ease-out bg-slate-100 cursor-pointer">
              <Image
                src="/images/sarah.jpg"
                alt="Caregiver review member"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                sizes="(max-width: 768px) 130px, 230px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Statement / Purpose Callout Section with Scroll Text Reveal Animation */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <TextRevealStatement text="Pflege Orientierung was created to make caregiving easier to navigate. We help families understand their situation, find clarity, and take the right next step with confidence. Because no caregiving journey is the same, our guidance is tailored to each individual situation." />
      </section>

      {/* 4. The Polaris Story (Vertical Timeline) */}
      <section className="py-16 md:py-28 bg-[#FBFBFC] border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24 space-y-2.5">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0C2B4E] leading-tight">
              The Polaris Story
            </h2>
            <p className="text-xs sm:text-sm text-[#718096]">
              A journey of innovation born from empathy.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Vertical Timeline Blue/Navy Line */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-[2px] bg-[#0C2B4E]" />

            <div className="space-y-14 md:space-y-24">
              {/* ================= STEP 1 (Left Card) ================= */}
              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Card Content */}
                <div className="md:col-span-5 md:text-left space-y-4">
                  <div className="relative aspect-[16/10] w-full max-w-md overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm">
                    <Image
                      src="/images/Spouse_caregiver_quiet_morning_coffee.png"
                      alt="The Challenge of Caregiving"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0C2B4E] mb-1.5">
                      The Challenge of Caregiving
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-md">
                      Seeing families overwhelmed by legal, medical, and logistical hurdles in the
                      Swiss healthcare system.
                    </p>
                  </div>
                </div>

                {/* Center Node Marker */}
                <div className="hidden md:flex md:col-span-2 justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 border-[#0C2B4E] text-[#0C2B4E] font-bold text-xs shadow-md z-10">
                    A
                  </div>
                </div>

                {/* Empty Right Column for Balance */}
                <div className="hidden md:block md:col-span-5" />
              </div>

              {/* ================= STEP 2 (Right Card) ================= */}
              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Empty Left Column for Balance */}
                <div className="hidden md:block md:col-span-5" />

                {/* Center Node Marker */}
                <div className="hidden md:flex md:col-span-2 justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 border-[#0C2B4E] text-[#0C2B4E] font-bold text-xs shadow-md z-10">
                    01
                  </div>
                </div>

                {/* Right Card Content */}
                <div className="md:col-span-5 md:text-left space-y-4">
                  <div className="relative aspect-[16/10] w-full max-w-md overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm">
                    <Image
                      src="/images/Image_Gallery_Item.png"
                      alt="Finding the Path"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0C2B4E] mb-1.5">Finding the Path</h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-md">
                      Developing a structured methodology to synthesize expert knowledge into
                      actionable personal guidance.
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= STEP 3 (Left Card) ================= */}
              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Card Content */}
                <div className="md:col-span-5 md:text-left space-y-4">
                  <div className="relative aspect-[16/10] w-full max-w-md overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm">
                    <Image
                      src="/images/Video_call_check-in_with_sibling.png"
                      alt="The Birth of Polaris"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0C2B4E] mb-1.5">
                      The Birth of Polaris
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-md">
                      Launching a digital companion that acts as a lighthouse for families across
                      Switzerland.
                    </p>
                  </div>
                </div>

                {/* Center Node Marker */}
                <div className="hidden md:flex md:col-span-2 justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0C2B4E] text-white font-bold text-xs shadow-md z-10">
                    <Star className="h-4 w-4 fill-white" />
                  </div>
                </div>

                {/* Empty Right Column for Balance */}
                <div className="hidden md:block md:col-span-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Families Trust Polaris (Asymmetric Bento Grid matching screenshot) */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0C2B4E] text-center mb-14">
            Why Families Trust Polaris
          </h2>

          <div className="space-y-6">
            {/* Row 1: Short Card (Personalized) + Wide Card (Private) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* Card 1: Personalized (Shorter Width) */}
              <div className="md:col-span-4 rounded-3xl bg-white p-8 sm:p-9 border border-slate-100/80 shadow-sm flex flex-col justify-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#0C2B4E] text-white shadow-xs mb-6 shrink-0">
                  <User className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="text-xl sm:text-[22px] font-bold text-[#0C2B4E] mb-2">
                  Personalized
                </h3>
                <p className="text-xs sm:text-[13px] text-[#5A6A80] leading-relaxed">
                  Advice tailored to your unique Swiss canton and family dynamics.
                </p>
              </div>

              {/* Card 2: Private (Wider Width) */}
              <div className="md:col-span-8 rounded-3xl bg-white p-8 sm:p-9 border border-slate-100/80 shadow-sm flex flex-col justify-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#0C2B4E] text-white shadow-xs mb-6 shrink-0">
                  <IncognitoIcon className="h-5 w-5" />
                </div>
                <h3 className="text-xl sm:text-[22px] font-bold text-[#0C2B4E] mb-2">
                  Private
                </h3>
                <p className="text-xs sm:text-[13px] text-[#5A6A80] leading-relaxed">
                  Full data sovereignty with servers located exclusively in Switzerland.
                </p>
              </div>
            </div>

            {/* Row 2: Wide Card (Accessible) + Short Card (Calm Experience) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* Card 3: Accessible (Wider Width) */}
              <div className="md:col-span-8 rounded-3xl bg-white p-8 sm:p-9 border border-slate-100/80 shadow-sm flex flex-col justify-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#0C2B4E] text-white shadow-xs mb-6 shrink-0">
                  <AppWindow className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="text-xl sm:text-[22px] font-bold text-[#0C2B4E] mb-2">
                  Accessible
                </h3>
                <p className="text-xs sm:text-[13px] text-[#5A6A80] leading-relaxed">
                  Available 24/7 on any device when you need immediate answers.
                </p>
              </div>

              {/* Card 4: Calm Experience (Shorter Width) */}
              <div className="md:col-span-4 rounded-3xl bg-white p-8 sm:p-9 border border-slate-100/80 shadow-sm flex flex-col justify-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#0C2B4E] text-white shadow-xs mb-6 shrink-0">
                  <Trees className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="text-xl sm:text-[22px] font-bold text-[#0C2B4E] mb-2">
                  Calm Experience
                </h3>
                <p className="text-xs sm:text-[13px] text-[#5A6A80] leading-relaxed">
                  Designed specifically to reduce the cognitive load of caregiving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Banner ("You Don't Have To Navigate This Alone.") */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0F355E] p-10 sm:p-14 text-center text-white shadow-xl shadow-blue-950/10">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight mb-4 leading-snug">
              You Don&apos;t Have To Navigate This <br className="hidden sm:inline" />
              Alone.
            </h2>
            <p className="text-xs sm:text-sm text-slate-200/90 max-w-xl mx-auto leading-relaxed mb-8">
              Join thousands of Swiss families who have found clarity with Polaris. Your journey
              toward confident caregiving starts here.
            </p>
            <Link
              href="/care-compass"
              className="inline-flex items-center justify-center rounded-xl bg-white hover:bg-slate-100 text-[#0C2B4E] px-8 py-3.5 text-sm font-bold shadow-md transition-all hover:shadow-lg cursor-pointer"
            >
              Start Your Care Compass
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
