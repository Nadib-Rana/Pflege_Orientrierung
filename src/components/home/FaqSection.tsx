"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PlusCircle, MinusCircle, MessageCircle, ArrowRight } from "lucide-react";
import { api, FaqItem as ApiFaqItem } from "@/lib/api";

interface FaqItem {
  id: string | number;
  question: string;
  answer: string;
}

const defaultFaqs: FaqItem[] = [
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
      "Yes. Your privacy is our highest priority. The assessment can be completed anonymously without registration in full compliance with the Swiss Federal Act on Data Protection (FADP).",
  },
  {
    id: 4,
    question: "How are my recommendations generated?",
    answer:
      "Recommendations are dynamically generated based on Swiss care guidelines, home nursing (Spitex) standards, insurance regulations (AHV / IV / supplementary benefits), and your specific assessment answers.",
  },
  {
    id: 5,
    question: "Can I use Pflege Orientrierung if I'm caring for a family member with complex needs?",
    answer:
      "Absolutely. The Care Compass is designed to support a wide range of situations, from light everyday assistance to complex elderly, palliative, or dementia care requirements.",
  },
];

export function FaqSection() {
  const [faqs, setFaqs] = useState<FaqItem[]>(defaultFaqs);
  const [openId, setOpenId] = useState<string | number | null>(1);

  useEffect(() => {
    async function loadFaqs() {
      try {
        const fetched = await api.getFaqs("en");
        if (fetched && fetched.length > 0) {
          setFaqs(
            fetched.map((f) => ({
              id: f.id,
              question: f.question,
              answer: f.answer,
            }))
          );
        }
      } catch {
        // Keep default FAQs
      }
    }
    loadFaqs();
  }, []);

  const toggleFaq = (id: string | number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start max-w-6xl mx-auto">
          {/* Left Column: FAQ Badge, Heading, and Contact CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch min-h-0 lg:min-h-[380px]">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-4 py-1 text-xs font-medium text-slate-600 shadow-2xs mb-4 sm:mb-5">
                FAQ
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0C2B4E] tracking-tight leading-tight">
                Frequently asked questions
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
                Everything you need to know about the Care Compass, Swiss privacy standards, and our independent advisory approach.
              </p>
            </div>

            {/* Contact Box */}
            <div className="mt-8 lg:mt-0 rounded-2xl bg-white p-5 border border-slate-200/70 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF3FC] text-[#0F2E59]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0C2B4E]">Have a specific question?</h4>
                  <p className="text-[11px] text-slate-400">Our care team is here to help you</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F2E59] hover:bg-[#0A2244] text-white py-2.5 text-xs font-bold shadow-xs transition-colors cursor-pointer"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion List */}
          <div className="lg:col-span-8 space-y-3 sm:space-y-3.5">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white border border-slate-200/70 transition-all duration-200 overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left gap-4 hover:bg-slate-50/50 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs sm:text-sm md:text-base font-bold text-[#0C2B4E] leading-snug">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-[#0F2E59]">
                      {isOpen ? (
                        <MinusCircle className="h-5 w-5 text-[#1A5695]" />
                      ) : (
                        <PlusCircle className="h-5 w-5 text-slate-400" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in-50 duration-200">
                      <p className="pt-2">{faq.answer}</p>
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
