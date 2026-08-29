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
      de: "Pflegende Angehörige, Zürich",
      en: "Family Caregiver, Canton Zurich",
      fr: "Proche aidante, Canton de Zurich",
      it: "Familiare curante, Canton Zurigo",
    },
    quote: {
      de: "Der Pflege-Kompass war unkompliziert auszufüllen und die Empfehlungen genau auf unsere Situation im Kanton Zürich abgestimmt. Statt stundenlang im Internet nach Antworten zu suchen, hatten wir innerhalb von 5 Minuten Klarheit über unsere nächsten Schritte.",
      en: "The Care Compass assessment was straightforward to complete and the recommendations were perfectly tailored to our family situation in Canton Zurich. Instead of spending hours searching online, we had clarity on our next steps in just 5 minutes.",
      fr: "L'évaluation Care Compass était simple à remplir et les recommandations parfaitement adaptées à notre situation dans le canton de Zurich. En 5 minutes, nous avions des réponses claires sur nos prochaines étapes.",
      it: "Il questionario Care Compass è stato facile da compilare e le raccomandazioni erano perfettamente calibrate sulla nostra situazione nel Canton Zurigo. In 5 minuti abbiamo avuto piena chiarezza sui passi successivi.",
    },
    image: "/images/sarah.jpg",
  },
  {
    id: 2,
    name: "Angel Dia",
    canton: "BE",
    role: {
      de: "Ehepartnerin & Betreuerin, Bern",
      en: "Spouse & Caregiver, Canton Bern",
      fr: "Conjointe & aidante, Canton de Berne",
      it: "Coniuge & curante, Canton Berna",
    },
    quote: {
      de: "Pflege Orientierung hat uns geholfen, unsere Ansprüche bei den Ergänzungsleistungen (EL) zu verstehen und den passenden Spitex-Dienst in Bern zu finden. Die Erleichterung für unsere Familie war sofort spürbar.",
      en: "Pflege Orientierung helped us understand our rights regarding supplementary financial benefits (EL) and find the right accredited Spitex home care provider in Bern. The relief for our family was immediate.",
      fr: "Pflege Orientierung nous a aidés à comprendre nos droits aux prestations complémentaires (PC) et à trouver le bon service Spitex à Berne. Le soulagement pour notre famille a été immédiat.",
      it: "Pflege Orientierung ci ha aiutato a comprendere i nostri diritti alle prestazioni complementari (PC) e a trovare il servizio Spitex adatto a Berna. Il sollievo per la nostra famiglia è stato immediato.",
    },
    image: "/images/angel.jpg",
  },
  {
    id: 3,
    name: "Thomas Müller",
    canton: "LU",
    role: {
      de: "Hauptpflegender Angehöriger, Luzern",
      en: "Primary Family Caregiver, Canton Lucerne",
      fr: "Proche aidant principal, Canton de Lucerne",
      it: "Familiare curante principale, Canton Lucerna",
    },
    quote: {
      de: "Die Organisation der Pflege für meinen Vater schien zunächst überwältigend. Der strukturierte Schritt-für-Schritt-Leitfaden gab der ganzen Familie Sicherheit und einen klaren Weg für die Zusammenarbeit mit den Ärzten.",
      en: "Organizing care for my father initially felt overwhelming. The structured step-by-step roadmap gave our entire family peace of mind and a clear path forward when coordinating with doctors and caregivers.",
      fr: "Organiser les soins de mon père semblait accablant au début. Le guide étape par étape a apporté à toute notre famille une grande sérénité et une voie claire pour collaborer avec les médecins.",
      it: "Organizzare l'assistenza per mio padre sembrava inizialmente insormontabile. La guida passo dopo passo ha dato a tutta la nostra famiglia sicurezza e una direzione chiara per collaborare con i medici.",
    },
    image: "/images/journey_videocall.jpg",
  },
  {
    id: 4,
    name: "Claudine Mercier",
    canton: "VD",
    role: {
      de: "Tochter & Pflegekoordinatorin, Waadt",
      en: "Daughter & Care Coordinator, Canton Vaud",
      fr: "Fille & coordinatrice des soins, Canton de Vaud",
      it: "Figlia & coordinatrice dell'assistenza, Canton Vaud",
    },
    quote: {
      de: "Dank der mehrsprachigen Schweizer Plattform konnten wir die kantonalen Hilflosenentschädigungen und Spitex-Zuschüsse in der Westschweiz ohne bürokratische Hürden beantragen.",
      en: "Thanks to the multilingual Swiss platform, we were able to apply for cantonal helplessness allowances and Spitex subsidies in Romandie without bureaucratic hurdles.",
      fr: "Grâce à la plateforme suisse multilingue, nous avons pu demander les allocations pour impotent cantonales et les subventions Spitex en Suisse romande sans obstacles bureaucratiques.",
      it: "Grazie alla piattaforma svizzera multilingue, abbiamo potuto richiedere gli assegni cantonali per grandi invalidi e i sussidi Spitex nella Svizzera romanda senza ostacoli burocratici.",
    },
    image: "/images/sarah.jpg",
  },
  {
    id: 5,
    name: "Matteo Bianchi",
    canton: "TI",
    role: {
      de: "Pflegender Angehöriger, Tessin",
      en: "Family Caregiver, Canton Ticino",
      fr: "Proche aidant, Canton du Tessin",
      it: "Familiare curante, Cantone Ticino",
    },
    quote: {
      de: "Die personalisierten Empfehlungen haben uns geholfen, kantonale Entlastungsbeiträge im Tessin zu aktivieren, von denen wir zuvor nichts wussten. Eine unschätzbare Hilfe für pflegende Familien.",
      en: "The personalized recommendations helped us activate cantonal relief allowances in Ticino that we didn't know existed. An invaluable help for caregiving families.",
      fr: "Les recommandations personnalisées nous ont aidés à activer les allocations de répit cantonales au Tessin dont nous ignorions l'existence. Une aide inestimable pour les familles aidantes.",
      it: "Le raccomandazioni personalizzate ci hanno aiutato ad attivare i contributi di sollievo cantonali in Ticino di cui non eravamo a conoscenza. Un aiuto inestimabile per le famiglie curanti.",
    },
    image: "/images/angel.jpg",
  },
];

const NEXT_MEMBER_LABEL: Record<string, string> = {
  de: "Nächstes Mitglied",
  en: "Next Member",
  fr: "Membre suivant",
  it: "Prossimo membro",
};

export function TestimonialsSection() {
  const { lang, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = defaultTestimonials[currentIndex] || defaultTestimonials[0];
  const nextIndex = (currentIndex + 1) % defaultTestimonials.length;
  const nextMember = defaultTestimonials[nextIndex];

  const currentQuote = current.quote[lang] || current.quote.de || current.quote.en || Object.values(current.quote)[0];
  const currentRole = current.role[lang] || current.role.de || current.role.en || Object.values(current.role)[0];

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
            {t("testimonials.badge") || "Testimonials"}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0C2B4E] tracking-tight">
            {t("testimonials.title") || "What Our Members Are Saying"}
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {t("testimonials.subtitle") || "Hear from family caregivers who have found greater clarity, confidence, and support with Pflege Orientierung."}
          </p>
        </div>

        {/* 3-Column Layout */}
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

              {/* Bottom Author Name & Role */}
              <div className="pt-8 space-y-1">
                <p className="text-sm sm:text-base font-semibold text-slate-200">
                  {current.name}
                </p>
                <p className="text-xs text-slate-400 font-normal">
                  {currentRole}
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
                <p className="text-xs text-slate-400 font-medium">{NEXT_MEMBER_LABEL[lang] || "Next Member"}</p>
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

