"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BrandLogo } from "@/components/common/BrandLogo";
import { LanguageSelector } from "@/components/common/LanguageSelector";
import { FileText, AlertCircle, Sparkles, CheckCircle2, MapPin, ExternalLink, Calendar } from "lucide-react";
import { AssessmentResult } from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";

const STORAGE_KEY = "pflege_care_compass_progress_v1";

export default function GuidancePage() {
  const router = useRouter();
  const { lang, t } = useLanguage();
  const [assessmentData, setAssessmentData] = useState<AssessmentResult | null>(null);
  const [completedDate, setCompletedDate] = useState<string>("Today");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.assessmentResult) {
          setAssessmentData(parsed.assessmentResult);
        }
        if (parsed.updatedAt) {
          const date = new Date(parsed.updatedAt);
          setCompletedDate(
            date.toLocaleDateString(lang === "de" ? "de-CH" : lang === "fr" ? "fr-CH" : lang === "it" ? "it-CH" : "en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          );
        }
      }
    } catch {
      // Ignore storage error
    }
  }, [lang]);

  const handleResetGuidance = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
    router.push("/care-compass");
  };

  const handleSaveAndExit = () => {
    router.push("/");
  };

  const publicCode = assessmentData?.assessment?.publicCode || "CC-1319";
  const estimatedPflegegrad = assessmentData?.assessment?.estimatedPflegegrad || "Grad 3 - 4";
  const urgencyLevel = assessmentData?.assessment?.urgencyLevel || "High";
  const canton = assessmentData?.assessment?.canton || "LU";

  const urgencyTextMap: Record<string, Record<string, string>> = {
    Normal: { en: "Normal", de: "Normal", fr: "Normale", it: "Normale" },
    Medium: { en: "Medium", de: "Mittel", fr: "Moyenne", it: "Media" },
    High: { en: "High", de: "Hoch", fr: "Élevée", it: "Alta" },
    Critical: { en: "Critical", de: "Dringend", fr: "Urgente", it: "Critica" },
  };

  const displayUrgency = urgencyTextMap[urgencyLevel]?.[lang] || urgencyLevel;

  // Dynamic Multi-canton Situation Summaries in all 4 languages
  const situationSummaries: Record<string, string> = {
    de: `Ihr persönlicher Schweizer Pflegeleitfaden für den Kanton ${canton} weist auf einen geschätzten Unterstützungsbedarf von ${estimatedPflegegrad} mit der Dringlichkeitsstufe ${displayUrgency} hin. Grundlegende Alltagsbedürfnisse sind gedeckt, jedoch besteht wachsender Bedarf an emotionaler Entlastung, Spitex-Koordination und strukturierter Entlastungsplanung.`,
    fr: `Votre feuille de route personnalisée pour le canton de ${canton} indique un besoin estimé de ${estimatedPflegegrad} avec une priorité ${displayUrgency}. Les besoins quotidiens de base sont assurés, mais une demande accrue de soutien émotionnel, de coordination CMS et de répit structuré apparaît.`,
    it: `La vostra guida personalizzata per il Canton ${canton} indica un fabbisogno stimato di ${estimatedPflegegrad} con priorità ${displayUrgency}. I bisogni quotidiani di base sono soddisfatti, ma emerge una crescente richiesta di supporto emotivo, coordinamento Spitex e sollievo strutturato.`,
    en: `Your personalized Swiss care pathway for Canton ${canton} indicates an estimated ${estimatedPflegegrad} support requirement with ${displayUrgency} priority. While primary daily needs are currently being met, there is an increasing demand for emotional support, Spitex outpatient coordination, and structured respite planning.`,
  };

  // Dynamic 4-Step Action Roadmap in all 4 languages
  const localizedNextSteps: Record<string, Array<{ step: number; title: string; description: string }>> = {
    de: [
      {
        step: 1,
        title: `Spitex-Bedarfsabklärung & Pflegeminuten (${canton})`,
        description: `Kontaktieren Sie anerkannte Spitex-Dienste im Kanton ${canton} für die standardisierte RAI-HC- oder OEX-Bedarfsabklärung zur Bestätigung kassenpflichtiger Pflegezeiten.`,
      },
      {
        step: 2,
        title: "Vorsorgeauftrag & Patientenverfügung (KESB)",
        description: "Erstellen und hinterlegen Sie rechtsgültige Schweizer Vorsorgedokumente, medizinische Vollmachten und Patientenverfügungen bei der KESB / Notariat.",
      },
      {
        step: 3,
        title: `Ergänzungsleistungen & Hilflosenentschädigung (SVA ${canton})`,
        description: `Reichen Sie den Antrag auf Hilflosenentschädigung und kantonale Ergänzungsleistungen (EL) bei der SVA-Zweigstelle im Kanton ${canton} ein.`,
      },
      {
        step: 4,
        title: "Entlastungsangebote & Burnout-Prävention",
        description: "Organisieren Sie Ersatzpflege, Tagesstätten oder Ferienentlastungsdienste zur Entlastung pflegender Angehöriger.",
      },
    ],
    fr: [
      {
        step: 1,
        title: `Évaluation CMS & Minutes de Soins (${canton})`,
        description: `Contactez les CMS / Spitex du canton de ${canton} pour réaliser l'évaluation standardisée RAI-HC et définir le volume de soins pris en charge.`,
      },
      {
        step: 2,
        title: "Mandat pour inaptitude & Directives anticipées (APEA)",
        description: "Rédigez et déposez vos procurations médicales et mandats de protection auprès de la justice de paix / APEA locale.",
      },
      {
        step: 3,
        title: `Prestations complémentaires & Allocation d'impotent (PC ${canton})`,
        description: `Déposez une demande d'allocation pour impotent et de prestations complémentaires auprès de la caisse de compensation de ${canton}.`,
      },
      {
        step: 4,
        title: "Répit & Prévention de l'épuisement de l'aidant",
        description: "Planifiez des accueils de jour ou des séjours de relève temporaires pour soulager les proches aidants.",
      },
    ],
    it: [
      {
        step: 1,
        title: `Valutazione Spitex & Minuti di Cura (${canton})`,
        description: `Contattate i servizi Spitex accreditati nel Canton ${canton} per la valutazione standardizzata RAI-HC e la definizione delle ore di cura coperte.`,
      },
      {
        step: 2,
        title: "Mandato precauzionale & Direttive del paziente (ARP)",
        description: "Predisponete le direttive anticipate e i mandati di rappresentanza legale da depositare presso le autorità di protezione (ARP).",
      },
      {
        step: 3,
        title: `Prestazioni complementari & Assegno grandi invalidi (IAS ${canton})`,
        description: `Inoltrate la richiesta per l'assegno per grandi invalidi e prestazioni complementari (PC) presso l'Istituto delle assicurazioni sociali di ${canton}.`,
      },
      {
        step: 4,
        title: "Servizi di sollievo & Prevenzione sovraccarico",
        description: "Attivate soluzioni di degenza temporanea, centri diurni e supporto per i familiari curanti.",
      },
    ],
    en: [
      {
        step: 1,
        title: `Spitex Assessment & Care Minutes (${canton})`,
        description: `Coordinate with local Spitex services in Canton ${canton} for standardized RAI-HC or OEX diagnosis to confirm official care minutes.`,
      },
      {
        step: 2,
        title: "Legal & Healthcare Proxies (Vorsorgeauftrag)",
        description: "Ensure complete Swiss advance healthcare directives and statutory power of attorney documents are lodged with the KESB / notary.",
      },
      {
        step: 3,
        title: `Financial Entitlements & AHV/IV Helplessness Allowance (${canton})`,
        description: `File an application for Hilflosenentschädigung (helplessness allowance) with the SVA / Cantonal Social Insurance Authority in ${canton}.`,
      },
      {
        step: 4,
        title: "Respite & Caregiver Burnout Prevention",
        description: "Establish backup caregiver rotations, day care center admissions (Tagesstätten), or temporary holiday respite care.",
      },
    ],
  };

  const situationSummary = situationSummaries[lang] || situationSummaries.en;
  const nextSteps = localizedNextSteps[lang] || localizedNextSteps.en;

  return (
    <div className="min-h-screen bg-[#F4F7FB] flex flex-col justify-between">
      {/* Top Header with Multilingual Language Selector */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/60 px-4 sm:px-8 py-3.5">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <BrandLogo />
          
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Global Language Selector Dropdown */}
            <LanguageSelector />

            <button
              type="button"
              onClick={handleResetGuidance}
              className="rounded-lg border border-[#EF4444] text-[#EF4444] hover:bg-red-50 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Reset
            </button>
            
            <button
              type="button"
              onClick={handleSaveAndExit}
              className="rounded-lg border-2 border-[#0F2E59] bg-white px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#0F2E59] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {t("nav.home")}
            </button>
          </div>
        </div>
      </header>

      {/* Main Guidance Container */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 sm:py-14">
        <div className="w-full max-w-3xl space-y-8">
          {/* Header Title & Code Subtitle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0C2B4E] tracking-tight">
                {t("guidance.title")}
              </h1>
              <p className="text-xs sm:text-sm text-[#64748B]">
                {t("guidance.subtitle", { canton })}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 bg-white border border-slate-200/80 rounded-2xl px-4 py-2 shadow-xs shrink-0 whitespace-nowrap">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">REFERENCE ID:</span>
              <span className="font-mono text-sm font-extrabold text-[#0F2E59]">{publicCode}</span>
            </div>
          </div>

          {/* Quick Metrics Badges */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white p-3.5 sm:p-4 border border-slate-200/70 text-center">
              <span className="text-[10px] font-semibold text-slate-400 uppercase">CANTON</span>
              <p className="text-sm sm:text-base font-bold text-[#0C2B4E]">{canton}</p>
            </div>
            <div className="rounded-2xl bg-white p-3.5 sm:p-4 border border-slate-200/70 text-center">
              <span className="text-[10px] font-semibold text-slate-400 uppercase">{t("guidance.estimatedPflegegrad")}</span>
              <p className="text-sm sm:text-base font-bold text-[#1A5695]">{estimatedPflegegrad}</p>
            </div>
            <div className="rounded-2xl bg-white p-3.5 sm:p-4 border border-slate-200/70 text-center">
              <span className="text-[10px] font-semibold text-slate-400 uppercase">{t("guidance.urgencyLevel")}</span>
              <p className={`text-sm sm:text-base font-bold ${urgencyLevel === "High" || urgencyLevel === "Critical" ? "text-amber-600" : "text-emerald-600"}`}>
                {displayUrgency}
              </p>
            </div>
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
              {situationSummary}
            </p>
          </div>

          {/* Recommended Next Steps (2x2 Grid for 4 Balanced Cards) */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#0C2B4E]">
              {t("guidance.actionStepsTitle")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              {nextSteps.map((step, idx) => (
                <div key={idx} className="rounded-2xl bg-white p-5 sm:p-6 border border-slate-200/70 shadow-xs flex flex-col justify-start">
                  <span className="text-[10px] font-bold text-slate-400 mb-1">STEP {step.step || idx + 1}</span>
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
              <span className="font-semibold">Swiss FADP Notice:</span> {t("footer.fadpStatement")}
            </p>
          </div>

          {/* Bottom Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link
              href="/"
              className="w-full inline-flex items-center justify-center rounded-xl border-2 border-[#0F2E59] bg-white text-[#0F2E59] hover:bg-slate-50 py-3 text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
            >
              {t("nav.home")}
            </Link>

            <Link
              href={`/contact?assessmentId=${encodeURIComponent(publicCode)}`}
              className="w-full inline-flex items-center justify-center rounded-xl bg-[#0F2E59] hover:bg-[#0A2244] text-white py-3 text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
            >
              {t("guidance.scheduleCall")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
