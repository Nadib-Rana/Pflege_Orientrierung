"use client";

import React from "react";
import Link from "next/link";
import { FileText, AlertCircle } from "lucide-react";
import { CareCompassHeader } from "./CareCompassHeader";
import { useLanguage } from "@/context/LanguageContext";

interface CareCompassGuidanceViewProps {
  onSaveAndExit: () => void;
  onResetGuidance: () => void;
}

export function CareCompassGuidanceView({
  onSaveAndExit,
  onResetGuidance,
}: CareCompassGuidanceViewProps) {
  const { lang, t } = useLanguage();

  const situationSummaries: Record<string, string> = {
    en: "Your recent assessment indicates a \"Balanced but Transitioning\" care environment. While primary medical needs are being met, there is an increasing demand for emotional support and specialized mobility equipment. We've identified opportunities to reduce caregiver fatigue by 15% through optimized scheduling and the integration of local community resources.",
    de: "Ihre Analyse zeigt eine „Ausgewogene, aber im Übergang befindliche“ Pflegesituation. Während die medizinische Grundversorgung gewährleistet ist, wächst der Bedarf an emotionaler Entlastung und Hilfsmitteln. Durch optimierte Planung und Einbindung lokaler Spitex-Angebote kann die Belastung um 15% gesenkt werden.",
    fr: "Votre récente évaluation indique un cadre de soins « Équilibré mais en transition ». Les besoins médicaux primaires sont couverts, mais la demande d'accompagnement émotionnel et de matériel adapté augmente. Nous avons identifié des solutions pour réduire la fatigue de l'aidant de 15%.",
    it: "La vostra recente valutazione indica una situazione assistenziale «Equilibrata ma in transizione». I bisogni primari sono soddisfatti, ma cresce la richiesta di supporto emotivo e ausili per la mobilità. Abbiamo individuato opportunità per ridurre il carico del caregiver del 15%.",
  };

  const stepsList: Record<string, Array<{ title: string; description: string }>> = {
    en: [
      {
        title: "Physical Therapy & Mobility",
        description: "Review local specialized mobility therapists. Early intervention can significantly improve daily comfort and independence.",
      },
      {
        title: "Join Local CareCircle",
        description: "Connect with families in your area who are navigating similar care pathways for shared insights and support.",
      },
      {
        title: "Equipment & Home Guide",
        description: "Explore our curated guide on home modifications and adaptive tools specifically for late-stage mobility support.",
      },
    ],
    de: [
      {
        title: "Physiotherapie & Mobilität",
        description: "Lokale Mobilitätsspezialisten prüfen. Frühzeitige Förderung sichert Selbstständigkeit im Alltag.",
      },
      {
        title: "Angehörigennetzwerk CareCircle",
        description: "Tauschen Sie sich mit Familien in Ihrer Region über kantonale Entlastungsangebote und Spitex-Erfahrungen aus.",
      },
      {
        title: "Hilfsmittel & Wohnraumanpassung",
        description: "Informieren Sie sich über barrierefreie Umbauten, Pflegebetten und Notrufsysteme zu Hause.",
      },
    ],
    fr: [
      {
        title: "Physiothérapie & Ergothérapie",
        description: "Consulter des ergothérapeutes spécialisés pour renforcer l'autonomie et le confort quotidien.",
      },
      {
        title: "Réseau d'aidants CareCircle",
        description: "Échanger avec d'autres familles proches de chez vous sur les démarches et solutions de répit.",
      },
      {
        title: "Moyens auxiliaires & Logement",
        description: "Découvrir notre guide pratique sur les adaptations du domicile et les aides techniques.",
      },
    ],
    it: [
      {
        title: "Fisioterapia & Mobilità",
        description: "Consultare terapisti specializzati per preservare l'autonomia e il benessere quotidiano.",
      },
      {
        title: "Gruppo di supporto CareCircle",
        description: "Confrontatevi con altre famiglie della vostra zona su servizi di cura e sollievo.",
      },
      {
        title: "Ausili & Adattamento casa",
        description: "Esplorate la guida su modifiche abitative, letti sanitari e dispositivi di emergenza.",
      },
    ],
  };

  const currentSummary = situationSummaries[lang] || situationSummaries.en;
  const currentSteps = stepsList[lang] || stepsList.en;

  return (
    <div className="flex-1 flex flex-col">
      {/* Minimal Header with Language Selector, Reset Guidance & Save & Exit */}
      <CareCompassHeader
        onSaveAndExit={onSaveAndExit}
        onResetGuidance={onResetGuidance}
      />

      {/* Main Guidance Container */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 sm:py-14">
        <div className="w-full max-w-3xl space-y-8">
          {/* Header Title & Subtitle */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0C2B4E] tracking-tight">
              {t("guidance.title")}
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B]">
              {t("guidance.subtitle", { canton: "ZH" })}
            </p>
          </div>

          {/* Situation Summary Card */}
          <div className="rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/70 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EBF3FC] text-[#0F2E59]">
                <FileText className="h-4 w-4 stroke-[2.5]" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[#0C2B4E]">
                {t("guidance.situationSummaryTitle")}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5A6A80] leading-relaxed">
              {currentSummary}
            </p>
          </div>

          {/* Recommended Next Steps (3 Columns Grid) */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#0C2B4E]">
              {t("guidance.actionStepsTitle")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
              {currentSteps.map((step, idx) => (
                <div key={idx} className="rounded-2xl bg-white p-5 sm:p-6 border border-slate-200/70 shadow-xs flex flex-col justify-start">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0C2B4E] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer Alert Card */}
          <div className="rounded-2xl bg-[#FFF8EC] border border-[#FDE68A]/70 p-4 sm:p-5 flex items-start gap-3">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FEF3C7] text-[#D97706] mt-0.5">
              <AlertCircle className="h-3.5 w-3.5" />
            </div>
            <p className="text-[11px] sm:text-xs text-[#92400E] leading-relaxed">
              <span className="font-semibold">Swiss FADP:</span> {t("footer.fadpStatement")}
            </p>
          </div>

          {/* 2 Bottom Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link
              href="/"
              className="w-full inline-flex items-center justify-center rounded-xl border-2 border-[#0F2E59] bg-white text-[#0F2E59] hover:bg-slate-50 py-3 text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
            >
              {t("nav.home")}
            </Link>

            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center rounded-xl bg-[#0F2E59] hover:bg-[#0A2244] text-white py-3 text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              {t("guidance.scheduleCall")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
