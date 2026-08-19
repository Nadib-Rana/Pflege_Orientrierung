import React from "react";
import { ShieldCheck, Heart, Search, Lock, UserCheck, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface CoreValue {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const values: CoreValue[] = [
  {
    icon: ShieldCheck,
    title: "Trusted Guidance",
    description:
      "Clear, structured support that helps caregivers make informed decisions with confidence.",
    isHighlighted: true, // First card has a soft blue highlight in the mock-up
  },
  {
    icon: Heart,
    title: "Compassion First",
    description:
      "Every interaction is designed with empathy, respect, and understanding for every caregiving journey.",
  },
  {
    icon: Search,
    title: "Clarity Over Complexity",
    description:
      "We simplify difficult situations into easy-to-understand guidance and practical next steps.",
  },
  {
    icon: Lock,
    title: "Privacy & Respect",
    description:
      "Your information remains secure, confidential, and always handled with the highest level of care.",
  },
  {
    icon: UserCheck,
    title: "Empowering Caregivers",
    description:
      "We help families feel more confident by providing personalized guidance, not overwhelming information.",
  },
  {
    icon: Users,
    title: "Human-Centered Design",
    description:
      "Every experience is thoughtfully crafted to be accessible, intuitive, and reassuring for everyone.",
  },
];

export function CoreValuesSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAFAFA] border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold text-slate-600 mb-3 shadow-2xs">
            Value
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F1E36]">
            Our Core Value
          </h2>
          <p className="mt-3.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
            The principles that guide every experience, helping family caregivers navigate their
            journey with confidence, clarity, and compassion.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={cn(
                  "relative rounded-2xl border p-7 transition-all duration-300 hover:shadow-md",
                  item.isHighlighted
                    ? "border-blue-200 bg-[#EBF3FC] text-[#0F1E36]"
                    : "border-slate-200/80 bg-white text-[#0F1E36] hover:border-slate-300"
                )}
              >
                {/* Icon Box */}
                <div
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-xl mb-5 shadow-2xs",
                    item.isHighlighted
                      ? "bg-[#0F1E36] text-white"
                      : "bg-slate-100 text-[#0F1E36]"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-bold tracking-tight text-[#0F1E36] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
