"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Check, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { STORAGE_KEY } from "@/components/care-compass/questionsData";
import { useLanguage } from "@/context/LanguageContext";

interface QuestionData {
  id: number;
  question: Record<string, string>;
  subtitle: Record<string, string>;
  options: Record<string, string[]>;
}

const localizedQuestions: QuestionData[] = [
  {
    id: 1,
    question: {
      en: "Who are you caring for?",
      de: "Für wen übernehmen Sie die Pflege?",
      fr: "Pour qui assumez-vous les soins ?",
      it: "Di chi vi state prendendo cura?",
    },
    subtitle: {
      en: "Choose the closest match",
      de: "Wählen Sie die passendste Option",
      fr: "Choisissez l'option correspondante",
      it: "Seleziona l'opzione più adatta",
    },
    options: {
      en: [
        "A parent or parent-in-law",
        "A partner or spouse",
        "A child",
        "Another family member or close friend",
      ],
      de: [
        "Einen Elternteil oder Schwiegereltern",
        "Einen Partner oder Ehepartner",
        "Ein Kind",
        "Ein anderes Familienmitglied oder engen Freund",
      ],
      fr: [
        "Un parent ou beau-parent",
        "Un partenaire ou conjoint",
        "Un enfant",
        "Un autre membre de la famille ou un ami proche",
      ],
      it: [
        "Un genitore o suocero/a",
        "Un partner o coniuge",
        "Un figlio/a",
        "Un altro familiare o amico intimo",
      ],
    },
  },
  {
    id: 2,
    question: {
      en: "What is their current living arrangement?",
      de: "Wie ist die aktuelle Wohnsituation?",
      fr: "Quel est le cadre de vie actuel ?",
      it: "Qual è l'attuale situazione abitativa?",
    },
    subtitle: {
      en: "Select their primary residence",
      de: "Wählen Sie den Hauptwohnsitz",
      fr: "Sélectionnez la résidence principale",
      it: "Seleziona la residenza principale",
    },
    options: {
      en: [
        "Living independently at home",
        "Living with me / our family",
        "Assisted living facility",
        "Nursing home or residential care",
      ],
      de: [
        "Selbstständig zu Hause lebend",
        "Lebt bei mir / unserer Familie",
        "Betreutes Wohnen",
        "Pflegeheim oder Seniorenresidenz",
      ],
      fr: [
        "Vit de manière autonome à domicile",
        "Vit avec moi / notre famille",
        "Logement avec encadrement",
        "EMS ou établissement médico-social",
      ],
      it: [
        "Vive autonomamente a casa",
        "Vive con me / la nostra famiglia",
        "Alloggio protetto",
        "Casa anziani o struttura di cura",
      ],
    },
  },
  {
    id: 3,
    question: {
      en: "What type of assistance is most urgently needed?",
      de: "Welche Art von Unterstützung wird am dringendsten benötigt?",
      fr: "Quel type d'aide est le plus urgent ?",
      it: "Che tipo di assistenza è maggiormente necessaria?",
    },
    subtitle: {
      en: "Select the primary care focus",
      de: "Wählen Sie den Pflegeschwerpunkt",
      fr: "Sélectionnez le besoin principal",
      it: "Seleziona l'esigenza primaria",
    },
    options: {
      en: [
        "Everyday household support & mobility",
        "Medication & outpatient nursing (Spitex)",
        "Memory & dementia care guidance",
        "Financial aid, insurance & legal directives",
      ],
      de: [
        "Alltägliche Haushaltshilfe & Mobilität",
        "Medikamente & ambulante Pflege (Spitex)",
        "Demenz- & Gedächtnisbetreuung",
        "Finanzielle Hilfen (EL), Krankenkasse & Vorsorgeauftrag",
      ],
      fr: [
        "Aide au ménage quotidien et mobilité",
        "Médicaments et soins à domicile (CMS/Spitex)",
        "Accompagnement mémoire et démence",
        "Prestations complémentaires (PC) et mandat pour inaptitude",
      ],
      it: [
        "Aiuto domestico quotidiano e mobilità",
        "Medicamenti e cure a domicilio (Spitex/SACD)",
        "Assistenza per memoria e demenza",
        "Prestazioni complementari (PC) e mandato precauzionale",
      ],
    },
  },
];

export function CareCompassHeroCard() {
  const { lang, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const totalSteps = 12;
  const currentQ = localizedQuestions[currentStep % localizedQuestions.length];
  
  const questionTitle = currentQ.question[lang] || currentQ.question.en;
  const questionSubtitle = currentQ.subtitle[lang] || currentQ.subtitle.en;
  const optionsList = currentQ.options[lang] || currentQ.options.en;
  const selectedOption = selectedAnswers[currentStep];

  // Sync with client-side saved progress on mount
  useEffect(() => {
    try {
      const storedRaw = localStorage.getItem(STORAGE_KEY);
      if (storedRaw) {
        const stored = JSON.parse(storedRaw);
        if (stored.stage === "complete" || stored.stage === "guidance") {
          setIsCompleted(true);
        } else if (typeof stored.currentStep === "number") {
          setCurrentStep(Math.max(0, Math.min(stored.currentStep - 1, totalSteps - 1)));
          if (stored.answers) {
            setSelectedAnswers(stored.answers);
          }
        }
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleSelectOption = (option: string) => {
    const updated = { ...selectedAnswers, [currentStep]: option };
    setSelectedAnswers(updated);
    try {
      const storedRaw = localStorage.getItem(STORAGE_KEY);
      const existing = storedRaw ? JSON.parse(storedRaw) : {};
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          ...existing,
          currentStep: currentStep + 1,
          stage: "questions",
          answers: updated,
          updatedAt: new Date().toISOString(),
        })
      );
    } catch {
      // Ignore
    }
  };

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      try {
        const storedRaw = localStorage.getItem(STORAGE_KEY);
        const existing = storedRaw ? JSON.parse(storedRaw) : {};
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            ...existing,
            stage: "complete",
            completedAt: new Date().toISOString(),
          })
        );
      } catch {
        // Ignore
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleRetake = () => {
    setIsCompleted(false);
    setCurrentStep(0);
    setSelectedAnswers({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  return (
    <div className="w-full max-w-[480px] rounded-3xl bg-white p-6 sm:p-8 shadow-xl border border-slate-100 min-h-[460px] flex flex-col justify-between">
      {!isCompleted ? (
        <div className="flex flex-col justify-between flex-grow">
          <div>
            {/* Step & Progress Bar */}
            <div className="mb-6 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                <span>
                  {t("quiz.stepIndicator", { current: currentStep + 1, total: totalSteps })}
                </span>
                <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}%</span>
              </div>

              {/* Progress Bar with end dot */}
              <div className="relative h-2 w-full rounded-full bg-[#BDD6EE] overflow-visible">
                <div
                  className="h-full rounded-full bg-[#0C2B4E] transition-all duration-300"
                  style={{ width: `${Math.max(18, ((currentStep + 1) / totalSteps) * 100)}%` }}
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-[#0C2B4E]" />
              </div>
            </div>

            {/* Question Title & Subtitle */}
            <div className="mb-6">
              <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#0C2B4E] leading-snug">
                {questionTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#718096] mt-1.5 font-normal">
                {questionSubtitle}
              </p>
            </div>

            {/* Options Cards */}
            <div className="space-y-3 mb-8">
              {optionsList.map((option, idx) => {
                const isSelected = selectedOption === option;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(option)}
                    className={cn(
                      "flex w-full items-center gap-3.5 rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all cursor-pointer",
                      isSelected
                        ? "bg-[#EBF3FC] text-[#0C2B4E] border border-[#0C2B4E]/30"
                        : "bg-[#F0F4F9] hover:bg-[#E6EDF5] text-[#0C2B4E]"
                    )}
                  >
                    {/* Radio Icon */}
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-[#0C2B4E] bg-white transition-all">
                      {isSelected && <div className="h-2 w-2 rounded-full bg-[#0C2B4E]" />}
                    </div>

                    <span className="flex-grow text-[#0C2B4E] font-medium leading-tight text-xs sm:text-sm">
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="flex items-center gap-1.5 rounded-lg border-2 border-[#0C2B4E] bg-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#0C2B4E] hover:bg-slate-50 transition-colors disabled:opacity-40 cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{t("quiz.prevBtn")}</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!selectedOption}
              className="rounded-lg bg-[#0C2B4E] hover:bg-[#123A63] text-white px-6 sm:px-8 py-2.5 text-xs sm:text-sm font-semibold shadow-xs transition-colors disabled:opacity-40 cursor-pointer"
            >
              {currentStep === 2 ? t("nav.getStarted") : t("quiz.nextBtn")}
            </button>
          </div>
        </div>
      ) : (
        /* Completed State matching exact screenshot */
        <div className="p-4 sm:p-8 flex-grow flex flex-col items-center justify-center text-center">
          {/* Double Layer Soft Blue / Dark Blue Checkmark Badge */}
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#CFE4FA] mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1A5695] text-white shadow-md shadow-blue-900/20">
              <Check className="h-8 w-8 stroke-[3]" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0C2B4E] leading-tight mb-3">
            {t("guidance.title")}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#718096] max-w-[340px] leading-relaxed mb-6">
            {t("guidance.subtitle", { canton: "ZH" })}
          </p>

          {/* Action CTA Button */}
          <Link
            href="/care-compass"
            className="rounded-xl bg-[#0C2B4E] hover:bg-[#123A63] text-white px-7 py-3 text-xs sm:text-sm font-semibold shadow-md transition-all hover:shadow-lg cursor-pointer mb-3 inline-block"
          >
            {t("quiz.submitBtn")}
          </Link>

          {/* Retake Action */}
          <button
            type="button"
            onClick={handleRetake}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-700 transition-colors mt-2 cursor-pointer"
          >
            <RotateCcw className="h-3 w-3" />
            <span>{t("quiz.badge")}</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default CareCompassHeroCard;
