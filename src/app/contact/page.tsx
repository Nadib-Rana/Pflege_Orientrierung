"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <main className="min-h-[calc(100vh-144px)] bg-[#F4F7FB] py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 space-y-6 pt-2">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200/60 px-4 py-1.5 text-xs font-semibold text-[#0F2E59] shadow-2xs">
              Personal support
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0C2B4E] leading-tight">
              We&apos;re glad you reached out.
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-md">
              Share a few details and we&apos;ll follow up with you personally. There is no pressure;
              we take the time to read every message carefully.
            </p>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-7 sm:p-10 border border-slate-200/70 shadow-sm">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-9 w-9 stroke-[2.5]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0C2B4E]">Message Received</h2>
                  <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to us. Our care advisory team will review your
                    details and reply to your email shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ fullName: "", email: "", phone: "", details: "" });
                      }}
                      className="rounded-xl border-2 border-[#0F2E59] bg-white px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#0F2E59] hover:bg-slate-50 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Field 1: Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="João Manuel Silva"
                      className="w-full rounded-xl bg-[#F3F4F6] px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#0F2E59] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Field 2: Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sifat@gmail.com"
                      className="w-full rounded-xl bg-[#F3F4F6] px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#0F2E59] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Field 3: Phone (optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-700">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+990114875452"
                      className="w-full rounded-xl bg-[#F3F4F6] px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#0F2E59] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Field 4: Details */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="details"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      Details
                    </label>
                    <textarea
                      id="details"
                      rows={4}
                      required
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="I'm experiencing an issue when trying to generate an invoice after receiving a customer payment. The payment is marked as completed, but the invoice remains in draft status and cannot be finalized. I've already tried refreshing the page and logging in again, but the problem persists."
                      className="w-full rounded-xl bg-[#F3F4F6] p-4 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#0F2E59] focus:outline-none transition-all resize-y min-h-[120px]"
                    />
                  </div>

                  {/* Disclaimer & Emergency Notice */}
                  <p className="text-[11px] text-slate-400 leading-normal pt-1">
                    By submitting this form you agree to our{" "}
                    <Link href="#" className="underline hover:text-slate-600">
                      Privacy Policy
                    </Link>
                    . Polaris is not an emergency service — in an emergency in Switzerland, please
                    call 144.
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F2E59] hover:bg-[#091D38] text-white py-3.5 text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
