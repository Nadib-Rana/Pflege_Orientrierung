import React from "react";
import { ShieldCheck, Heart, Search, Lock, UserCheck, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface CoreValue {
  icon: React.ComponentType<{ className?: string }>;
  title: string[];
  description: string;
  isHighlighted?: boolean;
}

const values: CoreValue[] = [
  {
    icon: ShieldCheck,
    title: ["Trusted Guidance"],
    description:
      "Clear, structured support that helps caregivers make informed decisions with confidence.",
    isHighlighted: true, // Soft blue background card
  },
  {
    icon: Heart,
    title: ["Compassion First"],
    description:
      "Every interaction is designed with empathy, respect, and understanding for every caregiving journey.",
  },
  {
    icon: Search,
    title: ["Clarity Over", "Complexity"],
    description:
      "We simplify difficult situations into easy-to-understand guidance and practical next steps.",
  },
  {
    icon: Lock,
    title: ["Privacy & Respect"],
    description:
      "Your information remains secure, confidential, and always handled with the highest level of care.",
  },
  {
    icon: UserCheck,
    title: ["Empowering", "Caregivers"],
    description:
      "We help families feel more confident by providing personalized guidance, not overwhelming information.",
  },
  {
    icon: Users,
    title: ["Human-Centered", "Design"],
    description:
      "Every experience is thoughtfully crafted to be accessible, intuitive, and reassuring for everyone.",
  },
];

export function CoreValuesSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-[#F1F5F9] px-4 py-1 text-xs font-medium text-slate-600 shadow-2xs">
            Value
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0C2B4E] leading-tight">
            Our Core Value
          </h2>
          <p className="text-xs sm:text-sm text-[#718096] max-w-xl mx-auto leading-relaxed">
            The principles that guide every experience, helping family caregivers navigate their
            journey with confidence, clarity, and compassion.
          </p>
        </div>

        {/* 6 Cards in 3x2 Grid matching exact screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={cn(
                  "relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 min-h-[280px]",
                  item.isHighlighted
                    ? "bg-[#D8E7F8] text-[#0C2B4E]"
                    : "bg-[#F3F6FA] text-[#0C2B4E]"
                )}
              >
                <div>
                  {/* Dark Navy Rounded Corner Squircle Icon Box matching exact image */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#0C2B4E] text-white shadow-xs mb-8">
                    <Icon className="h-5 w-5 stroke-[2]" />
                  </div>

                  {/* Title with exact breaks */}
                  <h3 className="text-xl sm:text-[22px] font-bold tracking-tight text-[#0C2B4E] leading-snug">
                    {item.title.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < item.title.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-[#5A6A80] leading-relaxed mt-3.5 font-normal">
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
