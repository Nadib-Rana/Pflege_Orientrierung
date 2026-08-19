import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { CareJourneySection } from "@/components/home/CareJourneySection";
import { CoreValuesSection } from "@/components/home/CoreValuesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* 1. Hero Section with Interactive Care Compass Card */}
      <HeroSection />

      {/* 2. Why It Matters: Every Care Journey Is Different */}
      <CareJourneySection />

      {/* 3. Core Values Section */}
      <CoreValuesSection />

      {/* 4. Process: How Pflege Works */}
      <HowItWorksSection />

      {/* 5. Testimonials: What Our Members Are Saying */}
      <TestimonialsSection />

      {/* 6. FAQ Section */}
      <FaqSection />
    </main>
  );
}
