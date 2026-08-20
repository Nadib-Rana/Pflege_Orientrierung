import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Care compass", href: "/care-compass" },
    { title: "How it works", href: "/#how-it-works" },
    { title: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="bg-[#081F38] text-slate-300 pt-12 sm:pt-16 pb-10 sm:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Responsive Footer Grid: 4-Columns on Tablet (md) and Desktop (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-6 lg:gap-8 pb-10 sm:pb-14 border-b border-slate-700/60">
          {/* Column 1: Logo & Tagline */}
          <div className="col-span-1 sm:col-span-2 md:col-span-4 space-y-3 md:pr-4 lg:pr-10">
            <BrandLogo variant="dark" />
            <p className="text-xs sm:text-sm text-slate-300/90 font-normal pt-1 tracking-normal">
              Guiding Care with Confidence
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 sm:col-span-1 md:col-span-3 space-y-3 sm:space-y-3.5">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((item) => (
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

          {/* Column 3: Contact */}
          <div className="col-span-1 sm:col-span-1 md:col-span-3 space-y-3 sm:space-y-3.5">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">Contact</h4>
            <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-300/90 leading-relaxed">
              <p>
                Centralidade do Kilamba, <br />
                Quarteirão P, Building P11, <br />
                Luanda – Angola.
              </p>
              <p>
                <a href="tel:+244956880998" className="hover:text-white transition-colors inline-block py-0.5">
                  +244 956 880 998
                </a>
              </p>
              <p>
                <a href="mailto:hello@Pflege.com" className="hover:text-white transition-colors inline-block py-0.5">
                  hello@Pflege.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2 space-y-3 sm:space-y-3.5">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">Legal</h4>
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
        </div>

        {/* Bottom Bar: Copyright & Styled Square Social Icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p className="tracking-normal leading-relaxed">
            © 2026 Pflege Orientrierung reserved the all rights.
          </p>

          <div className="flex items-center justify-center gap-2.5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-7 w-7 items-center justify-center rounded-md bg-[#133A63] hover:bg-[#1A4C80] text-slate-200 hover:text-white transition-colors shadow-2xs cursor-pointer"
            >
              <Facebook className="h-3.5 w-3.5 fill-current" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-7 w-7 items-center justify-center rounded-md bg-[#133A63] hover:bg-[#1A4C80] text-slate-200 hover:text-white transition-colors shadow-2xs cursor-pointer"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="flex h-7 w-7 items-center justify-center rounded-md bg-[#133A63] hover:bg-[#1A4C80] text-slate-200 hover:text-white transition-colors shadow-2xs cursor-pointer"
            >
              <Twitter className="h-3.5 w-3.5 fill-current" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-7 w-7 items-center justify-center rounded-md bg-[#133A63] hover:bg-[#1A4C80] text-slate-200 hover:text-white transition-colors shadow-2xs cursor-pointer"
            >
              <Linkedin className="h-3.5 w-3.5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
