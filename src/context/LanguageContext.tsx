"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  LanguageCode,
  LanguageOption,
  SUPPORTED_LANGUAGES,
  translations,
} from "@/translations/translations";

interface LanguageContextType {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  currentLanguage: LanguageOption;
  languages: LanguageOption[];
  t: (path: string, params?: Record<string, string | number>) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>("en");

  // Load persisted language on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("polaris_care_lang") as LanguageCode;
      if (savedLang && ["en", "de", "fr", "it"].includes(savedLang)) {
        setLangState(savedLang);
      }
    } catch {
      // Fallback
    }
  }, []);

  const setLang = (newLang: LanguageCode) => {
    setLangState(newLang);
    try {
      localStorage.setItem("polaris_care_lang", newLang);
    } catch {
      // Fallback
    }
  };

  const currentLanguage =
    SUPPORTED_LANGUAGES.find((l) => l.lang === lang) || SUPPORTED_LANGUAGES[0];

  /**
   * Helper function for deep nested translation lookup (e.g. t("hero.titleLine1"))
   */
  const t = (path: string, params?: Record<string, string | number>): any => {
    const keys = path.split(".");
    let result: any = translations[lang];

    for (const key of keys) {
      if (result && typeof result === "object" && key in result) {
        result = result[key];
      } else {
        // Fallback to English
        let fallback: any = translations.en;
        for (const fbKey of keys) {
          if (fallback && typeof fallback === "object" && fbKey in fallback) {
            fallback = fallback[fbKey];
          } else {
            return path;
          }
        }
        result = fallback;
        break;
      }
    }

    if (typeof result === "string" && params) {
      return Object.entries(params).reduce((acc, [k, v]) => {
        return acc.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
      }, result);
    }

    return result;
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        currentLanguage,
        languages: SUPPORTED_LANGUAGES,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
