export interface Question {
  id: number;
  question: string;
  subtitle: string;
  options: string[];
}

export type CareCompassStage = "start" | "questions" | "complete" | "guidance";

export const STORAGE_KEY = "pflege_care_compass_progress_v1";

// Comprehensive 12-question care compass assessment dataset
export const questions: Question[] = [
  {
    id: 1,
    question: "Who are you caring for?",
    subtitle: "Choose the closest match",
    options: [
      "A parent or parent-in-law",
      "A partner or spouse",
      "A child",
      "Another family member or close friend",
    ],
  },
  {
    id: 2,
    question: "What is their current living arrangement?",
    subtitle: "Select the primary living situation",
    options: [
      "Living independently at home",
      "Living with me in my household",
      "Living in an assisted care or nursing facility",
      "Other living arrangement",
    ],
  },
  {
    id: 3,
    question: "What level of daily assistance is currently needed?",
    subtitle: "Select the most accurate level of daily support",
    options: [
      "Light support (shopping, transport, paperwork)",
      "Moderate daily help (meals, medication, mobility)",
      "Intensive 24/7 care (hygiene, continuous supervision)",
      "Uncertain / currently evaluating needs",
    ],
  },
  {
    id: 4,
    question: "Has a formal Pflegegrad (care degree) been assigned?",
    subtitle: "Swiss / German care classification level",
    options: [
      "Yes (Pflegegrad 1 - 2)",
      "Yes (Pflegegrad 3 - 5)",
      "Application is currently in progress",
      "No / Not yet applied",
    ],
  },
  {
    id: 5,
    question: "What is your biggest current caregiving challenge?",
    subtitle: "Where do you feel the most pressure today?",
    options: [
      "Navigating medical, legal & insurance bureaucracy",
      "Emotional exhaustion & caregiver burnout",
      "Balancing my job/family with care duties",
      "Financial costs & funding available services",
    ],
  },
  {
    id: 6,
    question: "Do you have support from other family members or siblings?",
    subtitle: "Care network and shared responsibilities",
    options: [
      "Yes, responsibilities are shared well",
      "Some help, but I carry most of the responsibility",
      "No, I am managing everything entirely alone",
      "There is family conflict regarding care decisions",
    ],
  },
  {
    id: 7,
    question: "Are professional outpatient care services (Spitex) involved?",
    subtitle: "External nursing and in-home care support",
    options: [
      "Yes, on a daily basis",
      "Yes, a few times per week",
      "We are considering hiring professional support",
      "No professional services at this time",
    ],
  },
  {
    id: 8,
    question: "Are essential legal documents in place?",
    subtitle: "Powers of attorney and healthcare directives",
    options: [
      "Yes, health proxy and power of attorney are complete",
      "Partially completed / in progress",
      "Not yet created",
      "Unsure what documents are legally required",
    ],
  },
  {
    id: 9,
    question: "How is your personal emotional well-being?",
    subtitle: "Your own health and stress levels as a caregiver",
    options: [
      "Managing well with good balance",
      "Frequently stressed but coping",
      "Overwhelmed and nearing exhaustion",
      "In urgent need of relief and respite support",
    ],
  },
  {
    id: 10,
    question: "What is your Canton or geographic region in Switzerland?",
    subtitle: "Guidance is tailored to local Cantonal regulations",
    options: [
      "Zurich / North-Eastern Switzerland",
      "Bern / Mittelland region",
      "Romandie (Geneva, Vaud, Valais, Neuchâtel)",
      "Other Canton / Central Switzerland / Ticino",
    ],
  },
  {
    id: 11,
    question: "Are you interested in respite care (Entlastungsangebote)?",
    subtitle: "Temporary day care, holiday relief, or night care",
    options: [
      "Yes, urgently looking for temporary relief options",
      "Yes, planning for future respite needs",
      "Would like to learn what respite options exist",
      "Not needed at this time",
    ],
  },
  {
    id: 12,
    question: "What is your primary goal from this Care Compass?",
    subtitle: "How Polaris can best guide your next steps",
    options: [
      "A structured step-by-step roadmap for our family",
      "Financial assistance and insurance entitlement clarity",
      "Emergency backup and respite planning",
      "Connecting with verified local care partners",
    ],
  },
];
