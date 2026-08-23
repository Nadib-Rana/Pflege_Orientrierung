"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/common/BrandLogo";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const pathname = usePathname();
  const { t } = useLanguage();

  // ONLY hide footer on the "Your Personalised Guidance" page (/guidance)
  if (pathname === "/guidance") {
    return null;
  }

  const quickLinks = [
    { title: t("nav.home"), href: "/" },
    { title: t("nav.careCompass"), href: "/care-compass" },
    { title: t("nav.guidance"), href: "/guidance" },
    { title: t("nav.about"), href: "/about" },
    { title: t("nav.contact"), href: "/contact" },
  ];

  const legalLinks = [
    { title: "Swiss FADP Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-[#081F38] text-slate-300 pt-12 sm:pt-16 pb-12 sm:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Responsive Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-8 gap-x-6 sm:gap-8 md:gap-6 lg:gap-8 pb-10 sm:pb-14 border-b border-slate-700/60">
          {/* Column 1: Logo & Tagline */}
          <div className="col-span-2 md:col-span-4 space-y-3 md:pr-4 lg:pr-10">
            <BrandLogo variant="dark" />
            <p className="text-xs sm:text-sm text-slate-300/90 font-normal pt-1 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-md mt-2">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Swiss FADP & DSGVO Art. 32</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 md:col-span-3 space-y-3 sm:space-y-3.5">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">{t("footer.navTitle")}</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300/90 hover:text-white transition-colors block py-0.5"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="col-span-1 md:order-last md:col-span-2 space-y-3 sm:space-y-3.5">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">{t("footer.legalTitle")}</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              {legalLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-slate-300/90 hover:text-white transition-colors block py-0.5"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-2 md:col-span-3 space-y-3 sm:space-y-3.5">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">{t("nav.contact")}</h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#7EA8D9] shrink-0 mt-0.5" />
                <span>
                  Bahnhofstrasse 100, <br />
                  8001 Zürich, Switzerland
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#7EA8D9] shrink-0" />
                <a href="tel:+41442111111" className="hover:text-white transition-colors">
                  +41 44 211 11 11
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#7EA8D9] shrink-0" />
                <a href="mailto:support@polaris-care.ch" className="hover:text-white transition-colors">
                  support@polaris-care.ch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-slate-400 text-center sm:text-left">
          <p className="tracking-normal leading-relaxed">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="text-[11px] text-slate-500">
            {t("footer.fadpStatement")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
