"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BookmarkCheck, Loader2 } from "lucide-react";
import {
  getLocalizedQuestions,
  STORAGE_KEY,
  CareCompassStage,
  Question,
} from "@/components/care-compass/questionsData";
import { CareCompassStart } from "@/components/care-compass/CareCompassStart";
import { CareCompassQuestions } from "@/components/care-compass/CareCompassQuestions";
import { CareCompassComplete } from "@/components/care-compass/CareCompassComplete";
import { CareCompassGuidanceView } from "@/components/care-compass/CareCompassGuidanceView";
import { api } from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";

export default function CareCompassPage() {
  const router = useRouter();
  const { lang, t } = useLanguage();

  const [questionsList, setQuestionsList] = useState<Question[]>(() =>
    getLocalizedQuestions(lang)
  );

  // Update questions whenever language changes
  useEffect(() => {
    setQuestionsList(getLocalizedQuestions(lang));

    // Also attempt to fetch dynamic questions from backend
    async function syncBackendQuestions() {
      try {
        const fetched = await api.getQuestions(lang);
        if (fetched && fetched.length > 0) {
          setQuestionsList(
            fetched.map((q) => ({
              id: q.id,
              question: q.question,
              subtitle: q.subtitle,
              options: q.options,
            }))
          );
        }
      } catch {
        // Fallback to local getLocalizedQuestions
      }
    }
    syncBackendQuestions();
  }, [lang]);

  const [stage, setStage] = useState<CareCompassStage>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored).stage : "start";
    } catch {
      return "start";
    }
  });

  const [answers, setAnswers] = useState<Record<number, string>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored).answers : {};
    } catch {
      return {};
    }
  });

  const [currentStep, setCurrentStep] = useState<number>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored).currentStep : 1;
    } catch {
      return 1;
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [savedToast, setSavedToast] = useState(false);
  const [hasSavedProgress, setHasSavedProgress] = useState(() => {
    try {
      return !!localStorage.getItem(STORAGE_KEY);
    } catch {
      return false;
    }
  });

  const totalSteps = questionsList.length || 12;
  const currentQ = questionsList[currentStep - 1] || questionsList[0];

  const saveProgressToClient = (
    overrideStep?: number,
    overrideStage?: CareCompassStage,
    extraData?: Record<string, any>
  ) => {
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      const parsed = existing ? JSON.parse(existing) : {};
      const data = {
        ...parsed,
        currentStep: overrideStep ?? currentStep,
        stage: overrideStage ?? stage,
        answers,
        updatedAt: new Date().toISOString(),
        ...extraData,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setHasSavedProgress(true);
    } catch {
      // Ignore storage error
    }
  };

  const handleSelectOption = (option: string) => {
    if (!currentQ) return;
    const updated = { ...answers, [currentQ.id]: option };
    setAnswers(updated);
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          currentStep,
          stage: "questions",
          answers: updated,
          updatedAt: new Date().toISOString(),
        })
      );
      setHasSavedProgress(true);
    } catch {
      // Ignore
    }
  };

  const handleNext = async () => {
    if (!currentQ || !answers[currentQ.id]) {
      return;
    }
    if (currentStep < totalSteps) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      saveProgressToClient(nextStep, "questions");
    } else {
      setIsSubmitting(true);
      try {
        // Stringify answers map for backend
        const answersPayload: Record<string, string> = {};
        Object.entries(answers).forEach(([k, v]) => {
          answersPayload[k] = v;
        });

        // Submit to NestJS backend
        const result = await api.submitAssessment({
          answers: answersPayload,
          canton: answers[10] || "ZH",
          lang,
        });

        saveProgressToClient(totalSteps, "complete", {
          assessmentResult: result,
          publicCode: result?.assessment?.publicCode,
        });
      } catch (err) {
        console.warn("Backend submission error, continuing with local state:", err);
        saveProgressToClient(totalSteps, "complete");
      } finally {
        setIsSubmitting(false);
        setStage("complete");
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      saveProgressToClient(prevStep, "questions");
    } else {
      setStage("start");
    }
  };

  const handleSaveAndExit = () => {
    saveProgressToClient();
    setSavedToast(true);
    setTimeout(() => {
      router.push("/");
    }, 800);
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(1);
    setStage("start");
    setHasSavedProgress(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] flex flex-col justify-between relative">
      {/* Toast Notification when saved */}
      {savedToast && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-2.5 rounded-2xl bg-[#0F2E59] text-white px-5 py-3 shadow-xl border border-slate-700 animate-in fade-in slide-in-from-top-4 duration-300">
          <BookmarkCheck className="h-5 w-5 text-emerald-400" />
          <div className="text-xs sm:text-sm">
            <span className="font-bold">Progress Saved!</span> Returning to home...
          </div>
        </div>
      )}

      {/* Stage 1: Intro / Start */}
      {stage === "start" && (
        <CareCompassStart
          hasSavedProgress={hasSavedProgress}
          currentStep={currentStep}
          totalSteps={totalSteps}
          onStart={() => setStage("questions")}
          onResume={() => setStage("questions")}
          onStartOver={() => {
            handleRestart();
            setStage("questions");
          }}
        />
      )}

      {/* Stage 2: 12-Question Assessment Flow */}
      {stage === "questions" && currentQ && (
        <CareCompassQuestions
          currentQ={currentQ}
          currentStep={currentStep}
          totalSteps={totalSteps}
          answers={answers}
          onSelectOption={handleSelectOption}
          onPrev={handlePrev}
          onNext={handleNext}
          onSaveAndExit={handleSaveAndExit}
        />
      )}

      {/* Stage 3: Assessment Completion */}
      {stage === "complete" && (
        <CareCompassComplete
          onViewGuidance={() => {
            saveProgressToClient(totalSteps, "complete");
            router.push("/guidance");
          }}
          onRestart={handleRestart}
          onSaveAndExit={handleSaveAndExit}
        />
      )}

      {/* Stage 4: Personalised Guidance Roadmap */}
      {stage === "guidance" && (
        <CareCompassGuidanceView
          onSaveAndExit={handleSaveAndExit}
          onResetGuidance={handleRestart}
        />
      )}
    </div>
  );
}
