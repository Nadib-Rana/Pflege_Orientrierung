"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PlusCircle, MinusCircle, MessageCircle, ArrowRight } from "lucide-react";
import { api } from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";

interface FaqItem {
  id: string | number;
  question: string;
  answer: string;
}

const localizedDefaultFaqs: Record<string, FaqItem[]> = {
  en: [
    {
      id: 1,
      question: "Is Polaris Care a medical advice platform?",
      answer:
        "No. Polaris Care does not provide medical treatment. We are an independent Swiss care guidance platform that helps family caregivers navigate elder care options, Spitex services, and cantonal financial benefits.",
    },
    {
      id: 2,
      question: "How long does the Care Compass assessment take?",
      answer:
        "The assessment takes approximately 3 minutes to complete (12 structured questions). You receive an instant clinical orientation and downloadable roadmap.",
    },
    {
      id: 3,
      question: "Is my personal information kept private?",
      answer:
        "Yes. Your privacy is our highest priority. The assessment is 100% anonymous with no account required, in full compliance with the Swiss Federal Act on Data Protection (FADP).",
    },
    {
      id: 4,
      question: "How are cantonal benefits calculated?",
      answer:
        "Recommendations are dynamically matched with specific cantonal social insurance regulations (SVA / AHV Ergänzungsleistungen) across all 26 Swiss cantons.",
    },
  ],
  de: [
    {
      id: 1,
      question: "Ist Polaris Care eine medizinische Beratungsstelle?",
      answer:
        "Nein. Polaris Care bietet keine medizinischen Behandlungen an. Wir sind eine unabhängige Schweizer Orientierungsplattform, die pflegenden Angehörigen hilft, Spitex-Dienste, Ergänzungsleistungen (EL) und Entlastungsangebote zu organisieren.",
    },
    {
      id: 2,
      question: "Wie lange dauert der Pflege-Kompass?",
      answer:
        "Der Test dauert etwa 3 Minuten (12 gezielte Fragen). Sie erhalten sofort eine verständliche Pflegeeinstufung und Ihren persönlichen Massnahmenplan.",
    },
    {
      id: 3,
      question: "Bleiben meine Daten vertraulich?",
      answer:
        "Ja. Datenschutz hat bei uns höchste Priorität. Der Pflege-Kompass kann 100% anonym ohne Registrierung ausgefüllt werden – konform mit dem Schweizer Datenschutzgesetz (DSG).",
    },
    {
      id: 4,
      question: "Wie werden kantonale Leistungen berechnet?",
      answer:
        "Die Empfehlungen orientieren sich dynamisch an den Richtlinien der kantonalen Sozialversicherungsanstalten (SVA / AHV Ergänzungsleistungen) aller 26 Schweizer Kantone.",
    },
  ],
  fr: [
    {
      id: 1,
      question: "Polaris Care fournit-il des conseils médicaux ?",
      answer:
        "Non. Polaris Care ne dispense pas de soins médicaux. Nous sommes une plateforme d'orientation indépendante aidant les proches aidants en Suisse à organiser les services CMS, les prestations complémentaires (PC) et le répit.",
    },
    {
      id: 2,
      question: "Combien de temps prend la Boussole des Soins ?",
      answer:
        "L'évaluation prend environ 3 minutes (12 questions simples). Vous recevez immédiatement une synthèse personnalisée et votre feuille de route.",
    },
    {
      id: 3,
      question: "Mes données personnelles sont-elles protégées ?",
      answer:
        "Oui. La confidentialité est primordiale. Le questionnaire est 100% anonyme sans inscription obligatoire, en conformité totale avec la Loi fédérale sur la protection des données (LPD).",
    },
    {
      id: 4,
      question: "Comment sont identifiées les aides cantonales ?",
      answer:
        "Nos recommandations s'adaptent automatiquement aux critères des caisses de compensation cantonales et des régimes de prestations complémentaires (PC/AVS).",
    },
  ],
  it: [
    {
      id: 1,
      question: "Polaris Care fornisce consulenza medica?",
      answer:
        "No. Polaris Care non effettua trattamenti medici. Siamo una piattaforma svizzera indipendente che aiuta i familiari curanti a coordinare i servizi Spitex/SACD, le prestazioni complementari (PC) e il sollievo.",
    },
    {
      id: 2,
      question: "Quanto tempo richiede la Bussola dell'Assistenza?",
      answer:
        "La valutazione richiede circa 3 minuti (12 domande guidate). Riceverete subito una stima del livello di cura e la vostra guida d'azione.",
    },
    {
      id: 3,
      question: "I miei dati sono protetti?",
      answer:
        "Sì. La privacy è la nostra massima priorità. La valutazione è 100% anonima senza registrazione, nel rispetto della Legge federale sulla protezione dei dati (LPD).",
    },
    {
      id: 4,
      question: "Come vengono identificate le prestazioni cantonali?",
      answer:
        "Le raccomandazioni si basano sui criteri dei singoli istituti cantonali delle assicurazioni sociali (IAS / PC AVS) di tutti i 26 cantoni svizzeri.",
    },
  ],
};

export function FaqSection() {
  const { lang, t } = useLanguage();
  const [faqs, setFaqs] = useState<FaqItem[]>(localizedDefaultFaqs[lang] || localizedDefaultFaqs.en);
  const [openId, setOpenId] = useState<string | number | null>(1);

  useEffect(() => {
    // Set fallback immediately on lang change
    setFaqs(localizedDefaultFaqs[lang] || localizedDefaultFaqs.en);

    async function loadFaqs() {
      try {
        const fetched = await api.getFaqs(lang);
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
        // Keep localized default FAQs
      }
    }
    loadFaqs();
  }, [lang]);

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
                {t("faq.badge")}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0C2B4E] tracking-tight leading-tight">
                {t("faq.title")}
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
                {t("faq.subtitle")}
              </p>
            </div>

            {/* Contact Box */}
            <div className="mt-8 lg:mt-0 rounded-2xl bg-white p-5 border border-slate-200/70 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF3FC] text-[#0F2E59]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0C2B4E]">{t("faq.moreQuestions")}</h4>
                  <p className="text-[11px] text-slate-400">{t("contact.cantonNote")}</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F2E59] hover:bg-[#0A2244] text-white py-2.5 text-xs font-bold shadow-xs transition-colors cursor-pointer"
                >
                  <span>{t("faq.contactAdvisor")}</span>
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
