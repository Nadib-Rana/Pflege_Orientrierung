/**
 * API Client for Polaris Care Public Platform
 * Connects to NestJS Backend at process.env.NEXT_PUBLIC_API_URL
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

export interface QuestionOption {
  id: string;
  value: string;
  scoreWeight: number;
}

export interface Question {
  id: number;
  dbId: string;
  key: string;
  category: string;
  question: string;
  subtitle: string;
  options: string[];
  optionDetails?: QuestionOption[];
}

export interface AssessmentResult {
  assessment: {
    id: string;
    publicCode: string;
    canton: string;
    estimatedPflegegrad: string;
    urgencyScore: number;
    urgencyLevel: "Normal" | "Medium" | "High" | "Critical";
    score: number;
    createdAt: string;
  };
  situationGuidance: {
    summary: string;
    nextSteps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
    resources: Array<{
      title: string;
      type: string;
      link: string;
    }>;
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  canton: string;
  quote: string;
  imageUrl?: string;
  isVerified: boolean;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  sortOrder: number;
}

export interface GuidanceResource {
  id: string;
  code: string;
  title: string;
  description: string;
  category: string;
  cantons: string[];
  linkUrl?: string;
}

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || errorData.error || `HTTP error ${res.status}`);
  }
  const json = await res.json();
  // Unwrap standard response structure { statusCode, success, data, message } if present
  return (json.data !== undefined ? json.data : json) as T;
}

export const api = {
  // Fetch active assessment questions
  async getQuestions(lang: string = "en"): Promise<Question[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/care-compass/questions?lang=${encodeURIComponent(lang)}`, {
        next: { revalidate: 60 },
      });
      return await handleResponse<Question[]>(res);
    } catch (err) {
      console.warn("API getQuestions fallback to local dataset:", err);
      return [];
    }
  },

  // Submit 12-question care compass assessment
  async submitAssessment(payload: {
    answers: Record<string, string>;
    canton?: string;
    caregiver?: string;
    lang?: string;
  }): Promise<AssessmentResult> {
    const res = await fetch(`${API_BASE_URL}/care-compass/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await handleResponse<AssessmentResult>(res);
  },

  // Fetch assessment result by public code (e.g. CC-9014)
  async getAssessmentByCode(code: string, lang: string = "de"): Promise<AssessmentResult> {
    const res = await fetch(`${API_BASE_URL}/care-compass/${encodeURIComponent(code)}?lang=${encodeURIComponent(lang)}`);
    return await handleResponse<AssessmentResult>(res);
  },

  // Request personal caregiver consultation support
  async requestSupport(payload: {
    name: string;
    phone: string;
    email: string;
    canton?: string;
    preferredTime?: string;
    message?: string;
    assessmentId?: string;
    publicCode?: string;
    urgency?: string;
  }): Promise<{ success: boolean; leadId: string; message: string }> {
    const res = await fetch(`${API_BASE_URL}/leads/request-support`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await handleResponse(res);
  },

  // Submit general contact message
  async submitContact(payload: {
    fullName: string;
    email: string;
    phone?: string;
    details: string;
  }): Promise<{ success: boolean; messageId: string; message: string }> {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await handleResponse(res);
  },

  // Fetch verified testimonials
  async getTestimonials(lang: string = "de"): Promise<TestimonialItem[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/content/testimonials?lang=${encodeURIComponent(lang)}`, {
        next: { revalidate: 120 },
      });
      return await handleResponse<TestimonialItem[]>(res);
    } catch (err) {
      console.warn("API getTestimonials fallback:", err);
      return [];
    }
  },

  // Fetch categorized FAQs
  async getFaqs(lang: string = "en", category?: string): Promise<FaqItem[]> {
    try {
      let url = `${API_BASE_URL}/content/faqs?lang=${encodeURIComponent(lang)}`;
      if (category) url += `&category=${encodeURIComponent(category)}`;
      const res = await fetch(url, { next: { revalidate: 120 } });
      return await handleResponse<FaqItem[]>(res);
    } catch (err) {
      console.warn("API getFaqs fallback:", err);
      return [];
    }
  },

  // Fetch regional guidance resources
  async getGuidanceResources(canton?: string, category?: string): Promise<GuidanceResource[]> {
    try {
      let url = `${API_BASE_URL}/guidance/resources`;
      const params = new URLSearchParams();
      if (canton) params.append("canton", canton);
      if (category) params.append("category", category);
      if (params.toString()) url += `?${params.toString()}`;

      const res = await fetch(url, { next: { revalidate: 120 } });
      return await handleResponse<GuidanceResource[]>(res);
    } catch (err) {
      console.warn("API getGuidanceResources fallback:", err);
      return [];
    }
  },
};
