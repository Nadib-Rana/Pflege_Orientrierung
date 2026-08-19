"use client";

import React, { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";

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
  const [openId, setOpenId] = useState<number | null>(1); // Question 1 is open by default in design

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          {/* Left Column: FAQ Badge, Heading, and Contact CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch min-h-[380px]">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-4 py-1 text-xs font-medium text-slate-600 shadow-2xs mb-5">
                FAQ
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-[#0C2B4E] leading-[1.12]">
                Still Have <br />
                Questions?
              </h2>
            </div>

            {/* Bottom Contact Us Button matching exact screenshot */}
            <div className="pt-8 space-y-3">
              <p className="text-xs text-[#718096] leading-relaxed">
                Contact Us, for more <br />
                information.
              </p>
              <a
                href="mailto:hello@Pflege.com"
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#0C2B4E] bg-white hover:bg-slate-50 px-6 py-2.5 text-sm font-semibold text-[#0C2B4E] shadow-2xs transition-colors cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Column: Floating White Accordion Cards matching exact screenshot */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-center justify-between text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#0C2B4E] pr-4">
                      {faq.question}
                    </span>
                    <div className="shrink-0 text-slate-400 hover:text-[#0C2B4E] transition-colors">
                      {isOpen ? (
                        <MinusCircle className="h-5 w-5 stroke-[1.5]" />
                      ) : (
                        <PlusCircle className="h-5 w-5 stroke-[1.5]" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-3 text-xs sm:text-sm text-[#718096] leading-relaxed animate-in fade-in-50 duration-200">
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
