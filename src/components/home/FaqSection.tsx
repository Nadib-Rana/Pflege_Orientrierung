"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "Is Pflege Orientrierung a medical advice platform?",
    answer:
      "No. Pflege Orientrierung does not provide medical advice, diagnosis, or treatment. It is a digital guidance platform designed to help family caregivers better understand their situation through the Care Compass assessment and receive personalized recommendations for appropriate next steps.",
  },
  {
    id: 2,
    question: "How long does the Care Compass assessment take?",
    answer:
      "The assessment takes approximately 3 minutes to complete. It asks structured questions to identify your specific care context and provide immediate, relevant guidance.",
  },
  {
    id: 3,
    question: "Is my personal information kept private?",
    answer:
      "Yes. Your privacy is our highest priority. The assessment can be completed anonymously without registration. All responses remain strictly secure and confidential.",
  },
  {
    id: 4,
    question: "How are my recommendations generated?",
    answer:
      "Recommendations are dynamically generated based on care guidelines, home nursing (Spitex) standards, insurance regulations (OKP / supplementary benefits), and your specific assessment answers.",
  },
  {
    id: 5,
    question: "Can I use Pflege Orientrierung if I'm caring for a family member with complex needs?",
    answer:
      "Absolutely. The Care Compass is designed to support a wide range of situations, from light everyday assistance to complex elderly, palliative, or dementia care requirements.",
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1); // Question 1 is open in mockup

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: FAQ Badge, Heading, and Contact CTA */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-600">
              FAQ
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F1E36] leading-tight">
              Still Have <br />
              Questions?
            </h2>

            <div className="pt-4 space-y-3">
              <p className="text-xs sm:text-sm text-slate-500">
                Contact Us, for more <br className="hidden sm:inline" />
                information.
              </p>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-slate-300 px-6 text-xs font-semibold text-slate-800 hover:bg-slate-100 cursor-pointer"
              >
                <a href="mailto:hello@Pflege.com">Contact Us</a>
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Accordion List */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={cn(
                    "rounded-2xl border transition-all duration-200",
                    isOpen
                      ? "border-slate-300 bg-slate-50/60 shadow-2xs"
                      : "border-slate-200/80 bg-white hover:border-slate-300"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-center justify-between p-5 text-left text-xs sm:text-sm font-semibold text-[#0F172A] cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <div
                      className={cn(
                        "ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all",
                        isOpen
                          ? "border-slate-300 bg-white text-slate-700"
                          : "border-slate-200 text-slate-400"
                      )}
                    >
                      {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/40 mt-1 pt-3 animate-in fade-in-50 duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
