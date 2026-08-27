"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Testimonial {
  id: number;
  name: string;
  canton: string;
  role: Record<string, string>;
  quote: Record<string, string>;
  image: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Renner",
    canton: "ZH",
    role: {
      en: "Family Caregiver, Canton Zurich",
      de: "Pflegende Tochter, Kanton Zürich",
      fr: "Proche aidante, Canton de Zurich",
      it: "Familiare curante, Canton Zurigo",
    },
    quote: {
      en: "The Care Compass was simple to complete, yet the recommendations felt thoughtful and relevant. Instead of endless searching online, I finally had clear guidance tailored to my situation.",
      de: "Der Pflege-Kompass war einfach auszufüllen und die Empfehlungen waren durchdacht und relevant. Statt endlos online zu suchen, hatte ich endlich eine klare Orientierung für meine Situation.",
      fr: "La Boussole de soins était simple à remplir et les recommandations très pertinentes. Au lieu de chercher sans fin en ligne, j'ai enfin eu un plan clair adapté à notre situation.",
      it: "La Bussola dell'Assistenza è stata semplice e le raccomandazioni molto pertinenti. Invece di cercare a lungo online, ho finalmente avuto un piano chiaro per la nostra situazione.",
    },
    image: "/images/sarah.jpg",
  },
  {
    id: 2,
    name: "Angel Dia",
    canton: "BE",
    role: {
      en: "Spouse Caregiver, Canton Bern",
      de: "Pflegende Partnerin, Kanton Bern",
      fr: "Conjointe aidante, Canton de Berne",
      it: "Coniuge caregiver, Canton Berna",
    },
    quote: {
      en: "Pflege Orientierung helped us clarify our insurance entitlements and find the right local Spitex service within days. The relief our family felt was truly immeasurable.",
      de: "Pflege Orientierung hat uns geholfen, unsere Ansprüche bei der Krankenkasse zu klären und den passenden Spitex-Dienst in Bern zu finden. Die Erleichterung für unsere Familie war enorm.",
      fr: "Pflege Orientierung nous a aidés à clarifier nos droits d'assurance et à trouver le bon service CMS en quelques jours. Un soulagement immense pour notre famille.",
      it: "Pflege Orientierung ci ha aiutati a chiarire i diritti assicurativi e a trovare il servizio Spitex ideale in pochi giorni. Un enorme sollievo per tutti noi.",
    },
    image: "/images/angel.jpg",
  },
  {
    id: 3,
    name: "Thomas Müller",
    canton: "LU",
    role: {
      en: "Primary Caregiver, Canton Lucerne",
      de: "Hauptpflegender Sohn, Kanton Luzern",
      fr: "Proche aidant principal, Canton de Lucerne",
      it: "Caregiver principale, Canton Lucerna",
    },
    quote: {
      en: "Navigating elder care for my father felt completely overwhelming before this. The step-by-step roadmap gave our whole family a calm, structured plan to organize legal power of attorney (KESB) and respite care.",
      de: "Die Pflege meines Vaters zu organisieren war zuvor überwältigend. Der Schritt-für-Schritt-Plan gab unserer Familie sofort Orientierung, um Vorsorgeauftrag (KESB) und Entlastung zu regeln.",
      fr: "Organiser les soins de mon père semblait insurmontable auparavant. La feuille de route pas à pas a apporté calme et clarté à toute notre famille.",
      it: "Organizzare le cure per mio padre sembrava insormontabile. Il piano d'azione ha dato a tutta la nostra famiglia serenità e sicurezza.",
    },
    image: "/images/journey_videocall.jpg",
  },
];

export function TestimonialsSection() {
  const { lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = defaultTestimonials[currentIndex] || defaultTestimonials[0];
  const nextIndex = (currentIndex + 1) % defaultTestimonials.length;
  const nextMember = defaultTestimonials[nextIndex];

  const currentQuote = current.quote[lang] || current.quote.en || current.quote.de;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? defaultTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % defaultTestimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50 px-4 py-1 text-xs font-medium text-slate-600 shadow-2xs mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0C2B4E] tracking-tight">
            What Our Members Are Saying
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Hear from family caregivers who have found greater clarity, confidence, and support with Pflege Orientierung.
          </p>
        </div>

        {/* 3-Column Layout Matching User Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Big Caregiver Photo */}
          <div className="lg:col-span-4 flex">
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-full min-h-[360px] rounded-[32px] overflow-hidden shadow-sm bg-slate-100">
              <Image
                src={current.image}
                alt={current.name}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Middle Column: Dark Navy Quote Box */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-[32px] bg-[#0C2B4E] text-white p-8 sm:p-10 md:p-12 flex flex-col justify-between shadow-md">
              {/* Top Double Quote Icon */}
              <div className="text-white mb-6">
                <svg
                  className="h-10 w-10 text-white fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Middle Quote Text */}
              <p className="text-white text-base sm:text-lg md:text-xl font-normal leading-relaxed">
                &ldquo;{currentQuote}&rdquo;
              </p>

              {/* Bottom Author Name */}
              <div className="pt-8">
                <p className="text-sm sm:text-base font-semibold text-slate-200">
                  - {current.name}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Next Member Preview & Navigation Arrows */}
          <div className="lg:col-span-3 flex flex-col justify-between pt-2 pb-2">
            {/* Top: Next Member Widget */}
            <div
              onClick={handleNext}
              className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group"
            >
              <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-2xl overflow-hidden shadow-xs shrink-0 border border-slate-100 bg-slate-100">
                <Image
                  src={nextMember.image}
                  alt={nextMember.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="80px"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-xs text-slate-400 font-medium">Next Member</p>
                <p className="text-sm sm:text-base font-bold text-[#0C2B4E] group-hover:text-[#1A5695] transition-colors flex items-center gap-1">
                  {nextMember.name} &rarr;
                </p>
              </div>
            </div>

            {/* Bottom Right: Circular Navigation Buttons */}
            <div className="flex items-center justify-end gap-3 mt-8 lg:mt-auto">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 shadow-2xs transition-colors cursor-pointer active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0C2B4E] hover:bg-[#081F38] text-white shadow-xs transition-colors cursor-pointer active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
