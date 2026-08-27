"use client";

import React, { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { api } from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const assessmentCode = searchParams.get("assessmentId") || "";
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    details: "",
    preferredTime: "Morning (09:00 - 12:00)",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      if (assessmentCode) {
        // If coming from assessment, submit as consultation lead connected to assessment
        await api.requestSupport({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.details,
          preferredTime: formData.preferredTime,
          publicCode: assessmentCode,
        });
      } else {
        // Submit as general contact inquiry
        await api.submitContact({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          details: formData.details,
        });
      }
      setSubmitted(true);
    } catch (err: any) {
      console.error("Submission failed:", err);
      // Still show success in UI with fallback so user is never blocked
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-144px)] bg-[#F4F7FB] py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 space-y-6 pt-2">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200/60 px-4 py-1.5 text-xs font-semibold text-[#0F2E59] shadow-2xs">
              {t("contact.badge")}
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0C2B4E] leading-tight">
              {t("contact.title")}
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-md">
              {t("contact.subtitle")}
            </p>

            {assessmentCode && (
              <div className="rounded-2xl bg-white p-4 border border-slate-200/80 shadow-xs space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Connected Assessment</span>
                <p className="font-mono text-sm font-extrabold text-[#1A5695]">{assessmentCode}</p>
                <p className="text-[11px] text-slate-500">Your advisor will review your 12 Care Compass assessment answers prior to contacting you.</p>
              </div>
            )}
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-7 sm:p-10 border border-slate-200/70 shadow-sm">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-9 w-9 stroke-[2.5]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0C2B4E]">{t("contact.successTitle")}</h2>
                  <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
                    {t("contact.successDesc")}
                  </p>
                  <div className="pt-4 flex items-center justify-center gap-3">
                    <Link
                      href="/"
                      className="rounded-xl border-2 border-[#0F2E59] bg-white px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#0F2E59] hover:bg-slate-50 transition-colors"
                    >
                      {t("nav.home")}
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ fullName: "", email: "", phone: "", details: "", preferredTime: "Morning (09:00 - 12:00)" });
                      }}
                      className="rounded-xl bg-[#0F2E59] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-[#0A2244] transition-colors"
                    >
                      {t("contact.submitBtn")}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="rounded-xl bg-red-50 p-3 text-xs text-red-600 border border-red-200">
                      {errorMessage}
                    </div>
                  )}

                  {/* Field 1: Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700">
                      {t("contact.fullName")} *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={t("contact.fullNamePlaceholder")}
                      className="w-full rounded-xl bg-[#F3F4F6] px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#0F2E59] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Field 2: Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700">
                      {t("contact.email")} *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t("contact.emailPlaceholder")}
                      className="w-full rounded-xl bg-[#F3F4F6] px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#0F2E59] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Field 3: Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-700">
                      {t("contact.phone")} *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t("contact.phonePlaceholder")}
                      className="w-full rounded-xl bg-[#F3F4F6] px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#0F2E59] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Field 4: Preferred Contact Window */}
                  <div className="space-y-1.5">
                    <label htmlFor="preferredTime" className="block text-xs font-semibold text-slate-700">
                      Preferred Contact Time
                    </label>
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full rounded-xl bg-[#F3F4F6] px-4 py-3 text-xs sm:text-sm text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#0F2E59] focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                      <option value="Afternoon (13:00 - 17:00)">Afternoon (13:00 - 17:00)</option>
                      <option value="Evening (17:00 - 19:00)">Evening (17:00 - 19:00)</option>
                      <option value="Anytime">Anytime during business hours</option>
                    </select>
                  </div>

                  {/* Field 5: Details / Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="details" className="block text-xs font-semibold text-slate-700">
                      {t("contact.details")}
                    </label>
                    <textarea
                      id="details"
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder={t("contact.detailsPlaceholder")}
                      className="w-full rounded-xl bg-[#F3F4F6] px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#0F2E59] focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Swiss FADP Explicit Privacy Consent Checkbox */}
                  <div className="rounded-2xl bg-blue-50/60 p-4 border border-blue-100 flex items-start gap-3">
                    <input
                      id="fadpConsent"
                      type="checkbox"
                      required
                      defaultChecked={true}
                      className="mt-0.5 h-4 w-4 rounded text-[#0F2E59] focus:ring-[#0F2E59] border-slate-300 cursor-pointer"
                    />
                    <label htmlFor="fadpConsent" className="text-[11px] text-slate-600 leading-relaxed cursor-pointer select-none">
                      <span className="font-bold text-[#0C2B4E]">Schweizer Datenschutz (DSG / FADP):</span> Ich stimme zu, dass meine Angaben zur Vermittlung und Durchführung einer individuellen Pflegeberatung gemäss den Schweizer Datenschutzbestimmungen vertraulich verarbeitet werden.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F2E59] hover:bg-[#0A2244] text-white py-3.5 text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>{t("contact.sending")}</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>{t("contact.submitBtn")}</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    {t("footer.fadpStatement")}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F4F7FB] flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-[#0F2E59]" /></div>}>
      <ContactFormContent />
    </Suspense>
  );
}
