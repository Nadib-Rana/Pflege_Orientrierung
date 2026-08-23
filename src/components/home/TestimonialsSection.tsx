"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Testimonial {
  id: string | number;
  name: string;
  role: Record<string, string>;
  quote: Record<string, string>;
  image: string;
  canton: string;
}

const localizedDefaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Renner",
    canton: "ZH",
    role: {
      en: "Family Caregiver, Canton Zurich",
      de: "Pflegende Angehörige, Kanton Zürich",
      fr: "Proche aidante, Canton de Zurich",
      it: "Familiare curante, Canton Zurigo",
    },
    quote: {
      en: "The Care Compass was simple to complete, yet the recommendations felt thoughtful and relevant. Instead of endless searching online, I finally had clear guidance tailored to our family and SVA Zurich benefits.",
      de: "Der Pflege-Kompass war in 3 Minuten ausgefüllt und die Empfehlungen waren sofort verständlich. Statt stundenlang im Internet zu suchen, hatte ich endlich einen klaren Fahrplan für die SVA Zürich und die Spitex vor Ort.",
      fr: "La Boussole des Soins a été simple à remplir et les conseils très pertinents. Au lieu de chercher des heures sur internet, j'ai enfin eu un plan d'action clair pour notre famille et les prestations de l'assurance sociale.",
      it: "La Bussola dell'Assistenza è stata semplice e le raccomandazioni molto pertinenti. Invece di cercare a lungo online, ho finalmente avuto un piano chiaro per la nostra famiglia e le prestazioni sociali.",
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
      en: "Polaris Care helped us clarify our insurance entitlements and find the right local Spitex service within days. The relief our family felt was truly immeasurable.",
      de: "Polaris Care hat uns geholfen, unsere Ansprüche bei der Krankenkasse zu klären und den passenden Spitex-Dienst in Bern zu finden. Die Erleichterung für unsere Familie war enorm.",
      fr: "Polaris Care nous a aidés à clarifier nos droits d'assurance et à trouver le bon service CMS en quelques jours. Un soulagement immense pour notre famille.",
      it: "Polaris Care ci ha aiutati a chiarire i diritti assicurativi e a trovare il servizio Spitex ideale in pochi giorni. Un enorme sollievo per tutti noi.",
    },
    image: "/images/angel.jpg",
  },
  {
    id: 3,
    name: "Thomas Mueller",
    canton: "LU",
    role: {
      en: "Primary Caregiver, Canton Lucerne",
      de: "Hauptpflegender Sohn, Kanton Luzern",
      fr: "Proche aidant principal, Canton de Lucerne",
      it: "Caregiver principale, Canton Lucerna",
    },
    quote: {
      en: "Navigating elder care for my father felt completely overwhelming before this. The step-by-step roadmap gave our whole family a calm, structured plan to organize legal power of attorney (KESB) and respite care.",
      de: "Die Pflege meines Vaters zu organisieren war zuvor überwältigend. Der 4-Schritte-Plan gab unserer Familie sofort Orientierung, um Vorsorgeauftrag (KESB), Spitex und Entlastungsdienste strukturiert zu regeln.",
      fr: "Prendre en charge mon père semblait insurmontable auparavant. La feuille de route pas à pas a apporté à toute notre famille calme et clarté pour organiser le mandat pour inaptitude et le répit.",
      it: "Organizzare le cure per mio padre sembrava insormontabile. Il piano d'azione ha dato a tutta la nostra famiglia serenità e sicurezza per impostare il mandato precauzionale e i servizi di sollievo.",
    },
    image: "/images/journey_videocall.jpg",
  },
];

export function TestimonialsSection() {
  const { lang, t } = useLanguage();
  const [list] = useState<Testimonial[]>(localizedDefaultTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = list[currentIndex] || localizedDefaultTestimonials[0];
  const quoteText = current.quote[lang] || current.quote.en;
  const roleText = current.role[lang] || current.role.en;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % list.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50 px-4 py-1 text-xs font-medium text-slate-600 shadow-2xs mb-4">
            {t("testimonials.badge")}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0C2B4E] tracking-tight">
            {t("testimonials.title")}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-[#F8FAFC] border border-slate-200/80 p-8 sm:p-12 md:p-16 shadow-sm overflow-hidden">
            {/* Background Quote Icon */}
            <div className="absolute right-6 bottom-6 sm:right-10 sm:bottom-10 opacity-5 text-[#0F2E59] pointer-events-none">
              <Quote className="h-32 w-32 md:h-48 md:w-48" />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Caregiver Portrait Image */}
              <div className="md:col-span-4 flex justify-center md:justify-start">
                <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-3xl overflow-hidden shadow-md border-4 border-white bg-slate-200">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 160px, 192px"
                    onError={(e) => {
                      (e.currentTarget as any).src = "/images/sarah.jpg";
                    }}
                  />
                </div>
              </div>

              {/* Quote Text & Details */}
              <div className="md:col-span-8 space-y-4 text-center md:text-left">
                <p className="text-sm sm:text-base md:text-lg text-slate-700 font-medium leading-relaxed italic">
                  &ldquo;{quoteText}&rdquo;
                </p>

                <div className="pt-2 flex flex-col items-center md:items-start">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-[#0C2B4E]">
                      {current.name}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="h-3 w-3" />
                      {t("testimonials.verifiedBadge")}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                    {roleText}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#0C2B4E]">
                  {currentIndex + 1}
                </span>
                <span className="text-xs text-slate-400">/</span>
                <span className="text-xs text-slate-400">
                  {list.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 shadow-2xs transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F2E59] hover:bg-[#0A2244] text-white shadow-xs transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
