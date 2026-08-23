export interface Question {
  id: number;
  question: string;
  subtitle: string;
  options: string[];
}

export type CareCompassStage = "start" | "questions" | "complete" | "guidance";

export const STORAGE_KEY = "pflege_care_compass_progress_v1";

export interface MultilingualQuestion {
  id: number;
  question: Record<string, string>;
  subtitle: Record<string, string>;
  options: Record<string, string[]>;
}

export const rawQuestionsData: MultilingualQuestion[] = [
  {
    id: 1,
    question: {
      en: "Who are you caring for?",
      de: "Für wen übernehmen Sie die Pflege?",
      fr: "Pour qui assumez-vous les soins ?",
      it: "Di chi vi state prendendo cura?",
    },
    subtitle: {
      en: "Choose the closest match",
      de: "Wählen Sie die passendste Option",
      fr: "Choisissez la situation correspondante",
      it: "Seleziona l'opzione più vicina",
    },
    options: {
      en: [
        "A parent or parent-in-law",
        "A partner or spouse",
        "A child",
        "Another family member or close friend",
      ],
      de: [
        "Einen Elternteil oder Schwiegereltern",
        "Einen Partner oder Ehepartner",
        "Ein Kind",
        "Ein anderes Familienmitglied oder engen Freund",
      ],
      fr: [
        "Un parent ou beau-parent",
        "Un partenaire ou conjoint",
        "Un enfant",
        "Un autre membre de la famille ou un ami proche",
      ],
      it: [
        "Un genitore o suocero/a",
        "Un partner o coniuge",
        "Un figlio/a",
        "Un altro familiare o amico intimo",
      ],
    },
  },
  {
    id: 2,
    question: {
      en: "What is their current living arrangement?",
      de: "Wie ist die aktuelle Wohnsituation?",
      fr: "Quel est le cadre de vie actuel ?",
      it: "Qual è l'attuale situazione abitativa?",
    },
    subtitle: {
      en: "Select the primary living situation",
      de: "Wählen Sie den Hauptwohnsitz",
      fr: "Sélectionnez la résidence principale",
      it: "Seleziona l'alloggio principale",
    },
    options: {
      en: [
        "Living independently at home",
        "Living with me in my household",
        "Living in an assisted care or nursing facility",
        "Other living arrangement",
      ],
      de: [
        "Selbstständig zu Hause lebend",
        "Lebt bei mir im gemeinsamen Haushalt",
        "Betreutes Wohnen oder Pflegeheim",
        "Andere Wohnform",
      ],
      fr: [
        "Vit de manière autonome à domicile",
        "Vit avec moi dans mon foyer",
        "En logement avec encadrement ou EMS",
        "Autre situation de logement",
      ],
      it: [
        "Vive autonomamente a casa",
        "Vive con me nel mio nucleo familiare",
        "In struttura protetta o casa anziani",
        "Altra sistemazione abitativa",
      ],
    },
  },
  {
    id: 3,
    question: {
      en: "What level of daily assistance is currently needed?",
      de: "Welcher Grad an täglicher Unterstützung wird benötigt?",
      fr: "Quel niveau d'aide quotidienne est actuellement nécessaire ?",
      it: "Quale livello di assistenza quotidiana è attualmente necessario?",
    },
    subtitle: {
      en: "Select the most accurate level of daily support",
      de: "Wählen Sie den zutreffenden Betreuungsumfang",
      fr: "Sélectionnez le degré de soutien quotidien",
      it: "Seleziona il livello di supporto quotidiano",
    },
    options: {
      en: [
        "Light support (shopping, transport, paperwork)",
        "Moderate daily help (meals, medication, mobility)",
        "Intensive 24/7 care (hygiene, continuous supervision)",
        "Uncertain / currently evaluating needs",
      ],
      de: [
        "Leichte Hilfe (Einkaufen, Mobilität, Administration)",
        "Mittlere tägliche Hilfe (Mahlzeiten, Medikamente, Aufstehen)",
        "Intensive Rund-um-die-Uhr-Pflege (Körperpflege, Betreuung)",
        "Unsicher / Bedarf wird derzeit ermittelt",
      ],
      fr: [
        "Aide légère (courses, transports, démarches)",
        "Aide quotidienne modérée (repas, médicaments, mobilité)",
        "Soins intensifs 24h/24 (hygiène, surveillance continue)",
        "Incertain / besoins en cours d'évaluation",
      ],
      it: [
        "Supporto leggero (spesa, trasporti, pratiche)",
        "Aiuto quotidiano moderato (pasti, farmaci, mobilità)",
        "Assistenza intensiva 24/7 (igiene, sorveglianza)",
        "Incerto / bisogni in fase di valutazione",
      ],
    },
  },
  {
    id: 4,
    question: {
      en: "Has a formal Pflegegrad (care degree) been assigned?",
      de: "Wurde bereits eine offizielle Pflegeeinstufung vorgenommen?",
      fr: "Un niveau formel de soins (degré) a-t-il été attribué ?",
      it: "È già stato assegnato un livello di cura formale?",
    },
    subtitle: {
      en: "Swiss / German care classification level",
      de: "Schweizer Pflegeeinstufung / Hilflosenentschädigung",
      fr: "Classification suisse des soins / allocation pour impotent",
      it: "Classificazione svizzera delle cure / assegno per grandi invalidi",
    },
    options: {
      en: [
        "Yes (Pflegegrad 1 - 2)",
        "Yes (Pflegegrad 3 - 5)",
        "Application is currently in progress",
        "No / Not yet applied",
      ],
      de: [
        "Ja (Pflegestufe 1 - 2)",
        "Ja (Pflegestufe 3 - 5)",
        "Antrag ist derzeit in Bearbeitung",
        "Nein / Noch nicht beantragt",
      ],
      fr: [
        "Oui (Niveau de soins 1 - 2)",
        "Oui (Niveau de soins 3 - 5)",
        "Demande en cours d'évaluation",
        "Non / Pas encore de demande",
      ],
      it: [
        "Sì (Livello di cura 1 - 2)",
        "Sì (Livello di cura 3 - 5)",
        "Richiesta attualmente in corso",
        "No / Non ancora richiesto",
      ],
    },
  },
  {
    id: 5,
    question: {
      en: "What is your biggest current caregiving challenge?",
      de: "Was ist derzeit Ihre grösste Herausforderung bei der Pflege?",
      fr: "Quel est votre plus grand défi actuel en tant qu'aidant ?",
      it: "Qual è la vostra maggiore difficoltà attuale nell'assistenza?",
    },
    subtitle: {
      en: "Where do you feel the most pressure today?",
      de: "Wo spüren Sie heute die grösste Belastung?",
      fr: "Où ressentez-vous la plus forte pression aujourd'hui ?",
      it: "In quale ambito sentite maggiormente la pressione oggi?",
    },
    options: {
      en: [
        "Navigating medical, legal & insurance bureaucracy",
        "Emotional exhaustion & caregiver burnout",
        "Balancing my job/family with care duties",
        "Financial costs & funding available services",
      ],
      de: [
        "Bürokratie bei Krankenkasse, EL und Behörden",
        "Emotionale Erschöpfung & Überlastung",
        "Vereinbarkeit von Beruf, Familie und Pflege",
        "Finanzielle Kosten & Finanzierung von Entlastung",
      ],
      fr: [
        "Gestion administrative (assurances, PC, médecins)",
        "Épuisement émotionnel et risque de burnout",
        "Conciliation entre travail, famille et soins",
        "Coûts financiers et financement des services",
      ],
      it: [
        "Burocrazia con casse malati, PC e autorità",
        "Esaurimento emotivo e sovraccarico",
        "Conciliare lavoro, famiglia e compiti di cura",
        "Costi finanziari e copertura delle prestazioni",
      ],
    },
  },
  {
    id: 6,
    question: {
      en: "Do you have support from other family members or siblings?",
      de: "Erhalten Sie Unterstützung von Familienmitgliedern oder Geschwistern?",
      fr: "Avez-vous le soutien d'autres proches ou membres de la fratrie ?",
      it: "Ricevete supporto da altri familiari o fratelli/sorelle?",
    },
    subtitle: {
      en: "Care network and shared responsibilities",
      de: "Aufgabenteilung und familiäres Netzwerk",
      fr: "Réseau d'entraide et partage des tâches",
      it: "Rete familiare e condivisione delle responsabilità",
    },
    options: {
      en: [
        "Yes, responsibilities are shared well",
        "Some help, but I carry most of the responsibility",
        "No, I am managing everything entirely alone",
        "There is family conflict regarding care decisions",
      ],
      de: [
        "Ja, die Aufgaben sind gut aufgeteilt",
        "Etwas Hilfe, aber ich trage die Hauptlast",
        "Nein, ich bewältige alles komplett alleine",
        "Es gibt familiäre Konflikte bezüglich Pflegeentscheiden",
      ],
      fr: [
        "Oui, les responsabilités sont bien partagées",
        "Une petite aide, mais je porte l'essentiel du poids",
        "Non, je gère absolument tout en solo",
        "Il y a des tensions familiales autour des décisions",
      ],
      it: [
        "Sì, le responsabilità sono ben condivise",
        "Un piccolo aiuto, ma porto quasi tutto il carico",
        "No, gestisco tutto completamente da solo/a",
        "Ci sono disaccordi familiari sulle decisioni di cura",
      ],
    },
  },
  {
    id: 7,
    question: {
      en: "Are professional outpatient care services (Spitex) involved?",
      de: "Sind bereits professionelle Pflegedienste (Spitex / CMS) im Einsatz?",
      fr: "Des services de soins à domicile (CMS / Spitex) interviennent-ils ?",
      it: "I servizi di cura a domicilio (Spitex / SACD) sono già attivi?",
    },
    subtitle: {
      en: "External nursing and in-home care support",
      de: "Ambulante Pflege und Unterstützung zu Hause",
      fr: "Soins infirmiers et accompagnement à domicile",
      it: "Assistenza infermieristica e cure a domicilio",
    },
    options: {
      en: [
        "Yes, on a daily basis",
        "Yes, a few times per week",
        "We are considering hiring professional support",
        "No professional services at this time",
      ],
      de: [
        "Ja, täglich im Einsatz",
        "Ja, mehrmals pro Woche",
        "Wir überlegen, Spitex-Dienste zu beauftragen",
        "Zurzeit keine professionellen Dienste im Einsatz",
      ],
      fr: [
        "Oui, quotidiennement",
        "Oui, plusieurs fois par semaine",
        "Nous envisageons de faire appel à un CMS/Spitex",
        "Aucun service professionnel pour l'instant",
      ],
      it: [
        "Sì, su base quotidiana",
        "Sì, qualche volta a settimana",
        "Stiamo valutando l'attivazione di Spitex",
        "Nessun servizio professionale al momento",
      ],
    },
  },
  {
    id: 8,
    question: {
      en: "Are essential legal documents in place?",
      de: "Liegen wichtige rechtliche Dokumente vor?",
      fr: "Les documents juridiques essentiels sont-ils établis ?",
      it: "Sono stati predisposti i documenti legali fondamentali?",
    },
    subtitle: {
      en: "Powers of attorney and healthcare directives",
      de: "Vorsorgeauftrag und Patientenverfügung",
      fr: "Mandat pour inaptitude et directives anticipées",
      it: "Mandato precauzionale e direttive del paziente",
    },
    options: {
      en: [
        "Yes, health proxy and power of attorney are complete",
        "Partially completed / in progress",
        "Not yet created",
        "Unsure what documents are legally required",
      ],
      de: [
        "Ja, Vorsorgeauftrag & Patientenverfügung sind fertig",
        "Teilweise vorhanden / in Vorbereitung",
        "Noch nicht erstellt",
        "Unsicher, welche Dokumente rechtlich nötig sind",
      ],
      fr: [
        "Oui, mandat et directives anticipées sont prêts",
        "Partiellement établis / en cours",
        "Pas encore rédigés",
        "Incertain sur les démarches juridiques requises",
      ],
      it: [
        "Sì, mandato e direttive sono completi",
        "Parzialmente pronti / in corso",
        "Non ancora redatti",
        "Non sicuro/a di quali documenti siano necessari",
      ],
    },
  },
  {
    id: 9,
    question: {
      en: "How is your personal emotional well-being?",
      de: "Wie steht es um Ihr persönliches Wohlbefinden?",
      fr: "Comment évaluez-vous votre bien-être personnel ?",
      it: "Come valutate il vostro benessere personale?",
    },
    subtitle: {
      en: "Your own health and stress levels as a caregiver",
      de: "Ihre eigene Gesundheit und Ihr Belastungslevel",
      fr: "Votre santé et votre niveau de stress d'aidant",
      it: "La vostra salute e il livello di stress come caregiver",
    },
    options: {
      en: [
        "Managing well with good balance",
        "Frequently stressed but coping",
        "Overwhelmed and nearing exhaustion",
        "In urgent need of relief and respite support",
      ],
      de: [
        "Gut im Gleichgewicht, fühle mich stabil",
        "Häufig gestresst, aber ich schaffe es",
        "Stark überfordert und nahe an der Erschöpfung",
        "Dringend auf Entlastungsangebote angewiesen",
      ],
      fr: [
        "Bon équilibre, je me sens stable",
        "Souvent stressé(e), mais je tiens le coup",
        "Très débordé(e) et proche de l'épuisement",
        "Besoin urgent d'une solution de répit",
      ],
      it: [
        "Buon equilibrio, mi sento stabile",
        "Spesso stressato/a, ma riesco a gestire",
        "Fortemente sovraccarico/a e vicino/a all'esaurimento",
        "Urgente bisogno di sollievo e supporto",
      ],
    },
  },
  {
    id: 10,
    question: {
      en: "What is your Canton or geographic region in Switzerland?",
      de: "In welchem Kanton oder welcher Region leben Sie?",
      fr: "Dans quel canton ou région suisse résidez-vous ?",
      it: "In quale cantone o regione della Svizzera risiedete?",
    },
    subtitle: {
      en: "Guidance is tailored to local Cantonal regulations",
      de: "Leitfäden orientieren sich an kantonalen Bestimmungen",
      fr: "Les conseils sont adaptés aux lois cantonales",
      it: "Le indicazioni sono adattate alle normative cantonali",
    },
    options: {
      en: [
        "Zurich / North-Eastern Switzerland",
        "Bern / Mittelland region",
        "Romandie (Geneva, Vaud, Valais, Neuchâtel)",
        "Other Canton / Central Switzerland / Ticino",
      ],
      de: [
        "Zürich / Nordostschweiz",
        "Bern / Mittelland",
        "Romandie (Genf, Waadt, Wallis, Neuenburg, Jura)",
        "Zentralschweiz / Tessin / Übrige Kantone",
      ],
      fr: [
        "Romandie (Vaud, Genève, Valais, Neuchâtel, Fribourg)",
        "Berne / Plateau suisse",
        "Zurich / Suisse orientale",
        "Tessin / Suisse centrale / Autres cantons",
      ],
      it: [
        "Ticino / Svizzera italiana",
        "Zurigo / Svizzera nord-orientale",
        "Berna / Altopiano svizzero",
        "Romandia / Svizzera centrale / Altri cantoni",
      ],
    },
  },
  {
    id: 11,
    question: {
      en: "Are you interested in respite care (Entlastungsangebote)?",
      de: "Haben Sie Interesse an Entlastungsangeboten (Tagesstätten, Kurzzeitpflege)?",
      fr: "Êtes-vous intéressé(e) par des offres de répit (accueil de jour, séjour temporaire) ?",
      it: "Siete interessati a servizi di sollievo (centri diurni, degenze temporanee)?",
    },
    subtitle: {
      en: "Temporary day care, holiday relief, or night care",
      de: "Tagesbetreuung, Ferienentlastung oder Nachtwache",
      fr: "Accueil de jour, relève vacances ou veille de nuit",
      it: "Centri diurni, vacanze sollievo o sorveglianza notturna",
    },
    options: {
      en: [
        "Yes, urgently looking for temporary relief options",
        "Yes, planning for future respite needs",
        "Would like to learn what respite options exist",
        "Not needed at this time",
      ],
      de: [
        "Ja, suche dringend nach sofortigen Entlastungsmöglichkeiten",
        "Ja, plane für zukünftigen Entlastungsbedarf",
        "Möchte erfahren, welche Entlastungsangebote es gibt",
        "Derzeit kein Bedarf",
      ],
      fr: [
        "Oui, je cherche d'urgence une solution de répit",
        "Oui, j'anticipe des besoins futurs de répit",
        "J'aimerais découvrir les solutions existantes",
        "Pas nécessaire pour le moment",
      ],
      it: [
        "Sì, cerco urgentemente opzioni di sollievo",
        "Sì, sto pianificando per bisogni futuri",
        "Vorrei conoscere le opzioni di sollievo disponibili",
        "Non necessario al momento",
      ],
    },
  },
  {
    id: 12,
    question: {
      en: "What is your primary goal from this Care Compass?",
      de: "Was ist Ihr wichtigstes Ziel bei dieser Analyse?",
      fr: "Quel est votre objectif principal avec cette Boussole ?",
      it: "Qual è il vostro obiettivo principale con questa Bussola?",
    },
    subtitle: {
      en: "How Polaris can best guide your next steps",
      de: "Wie wir Ihre nächsten Schritte am besten unterstützen können",
      fr: "Comment nous pouvons guider au mieux vos démarches",
      it: "Come possiamo orientare al meglio i vostri prossimi passi",
    },
    options: {
      en: [
        "A structured step-by-step roadmap for our family",
        "Financial assistance and insurance entitlement clarity",
        "Emergency backup and respite planning",
        "Connecting with verified local care partners",
      ],
      de: [
        "Ein strukturierter Schritt-für-Schritt-Plan für unsere Familie",
        "Klarheit über finanzielle Hilfen (EL) und Krankenkasse",
        "Notfallplan und Entlastungsorganisation",
        "Vernetzung mit geprüften Spitex- & Pflegepartnern vor Ort",
      ],
      fr: [
        "Une feuille de route structurée étape par étape",
        "Clarté sur les prestations financières (PC) et assurances",
        "Plan d'urgence et organisation de relais",
        "Mise en relation avec des partenaires certifiés",
      ],
      it: [
        "Un piano d'azione strutturato passo dopo passo",
        "Chiarezza sui contributi finanziari (PC) e assicurazioni",
        "Piano per le emergenze e sollievo",
        "Collegamento con servizi Spitex e partner accreditati",
      ],
    },
  },
];

/**
 * Returns localized questions for the given language code ("en", "de", "fr", "it")
 */
export function getLocalizedQuestions(lang: string = "en"): Question[] {
  const currentLang = ["en", "de", "fr", "it"].includes(lang) ? lang : "en";
  return rawQuestionsData.map((q) => ({
    id: q.id,
    question: q.question[currentLang] || q.question.en,
    subtitle: q.subtitle[currentLang] || q.subtitle.en,
    options: q.options[currentLang] || q.options.en,
  }));
}

export const questions: Question[] = getLocalizedQuestions("en");
