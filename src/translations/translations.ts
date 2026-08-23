export type LanguageCode = "en" | "de" | "fr" | "it";

export interface LanguageOption {
  name: string;
  code: "US" | "DE" | "FR" | "IT";
  lang: LanguageCode;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { name: "English", code: "US", lang: "en" },
  { name: "Deutsch", code: "DE", lang: "de" },
  { name: "Français", code: "FR", lang: "fr" },
  { name: "Italiano", code: "IT", lang: "it" },
];

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      careCompass: "Care Compass",
      guidance: "Personalised Guidance",
      about: "About Polaris",
      contact: "Contact",
      getStarted: "Start Free Assessment",
    },

    // Hero Section
    hero: {
      badge: "Swiss Healthcare Navigation",
      titleLine1: "Compassionate Guidance for",
      titleHighlight: "Family Caregivers",
      titleLine2: "Across Switzerland",
      subtitle: "Navigating elder care, Spitex coordination, cantonal supplementary benefits (EL/AHV), and respite relief can feel overwhelming. We guide you step-by-step with structured, verified roadmaps.",
      bullet1: "12-Question Care Compass with Instant Pflegegrad Estimate",
      bullet2: "Cantonal Benefits & Financial Roadmap (ZH, BE, VD, GE, BS, TI & all 26 Cantons)",
      bullet3: "100% Free, Anonymous & Swiss FADP Compliant",
      ctaButton: "Start Care Compass Assessment",
      secondaryCta: "Explore Guidance Framework",
      cantonCoverage: "Covering all 26 Cantons",
      anonymousBadge: "No registration required",
      verifiedPartners: "Coordinated with Pro Senectute, Spitex & Swiss Health Alliances",
    },

    // Care Compass Hero Card (Interactive Preview)
    compassCard: {
      tag: "Interactive Assessment",
      title: "Find your customized care path in 3 minutes",
      step1: "1. Living & Health Situation",
      step2: "2. Care Burden & Support Needs",
      step3: "3. Cantonal Benefits & Respite Options",
      timeEstimate: "Takes ~3 mins • 12 Questions",
      startBtn: "Launch Compass Quiz",
      badgeFree: "Free & Confidential",
    },

    // How It Works
    howItWorks: {
      badge: "Step-by-step Process",
      title: "How Polaris Care Supports You",
      subtitle: "From your initial assessment to connecting with trusted local partners, we simplify every step of your family's caregiving journey.",
      step1Title: "1. Take the Care Compass",
      step1Desc: "Answer 12 confidential questions about your loved one's living situation, assistance level, and your caregiver workload.",
      step2Title: "2. Dynamic Clinical Analysis",
      step2Desc: "Our backend calculation engine estimates the likely Pflegegrad (1–5) and identifies caregiver burnout risk indicators.",
      step3Title: "3. Cantonal Action Roadmap",
      step3Desc: "Receive a tailored Swiss guide covering Spitex, supplementary benefits (Ergänzungsleistungen), and legal power of attorney.",
      step4Title: "4. Direct Advisor & Respite Intake",
      step4Desc: "Connect with regional care advisors for personalized intake, daycare respite coordination, and emergency backup planning.",
    },

    // Care Journey / Video Call Section
    careJourney: {
      badge: "Caregiver Spotlight",
      title: "\"Finding the right Spitex and supplementary benefits in Zurich used to take weeks of paperwork.\"",
      quote: "Polaris Care gave our family a clear, empathetic 4-step roadmap in under 5 minutes. We immediately knew which benefits to apply for at SVA Zurich.",
      author: "Elena Fischer",
      authorRole: "Family Caregiver in Canton Zurich",
      img1: "Adult child helping parent walk",
      img2: "Video call check-in with sibling",
      img3: "Medication organizer on kitchen table",
      img4: "Spouse caregiver, quiet morning coffee",
      img5: "Support group & CareCircle",
    },

    // Core Values
    coreValues: {
      badge: "Why Polaris Care",
      title: "Built on Empathy, Transparency & Swiss Standards",
      val1Title: "100% Free & Independent",
      val1Desc: "Our guidance is unbiased and designed solely to empower Swiss family caregivers with clear information.",
      val2Title: "Swiss FADP Privacy",
      val2Desc: "Your data remains confidential and protected under Swiss Federal Act on Data Protection standards.",
      val3Title: "All 26 Cantons Covered",
      val3Desc: "Tailored insights for Romandie, German-speaking cantons, and Ticino healthcare structures.",
      val4Title: "Verified Partner Network",
      val4Desc: "Direct bridges to accredited Spitex organizations, Pro Senectute, and municipal health offices.",
    },

    // Testimonials
    testimonials: {
      badge: "Voices of Caregivers",
      title: "Trusted by Families Across Switzerland",
      subtitle: "Read how Polaris Care helped family caregivers navigate complex healthcare and financial decisions.",
      verifiedBadge: "Verified Caregiver",
    },

    // FAQ Section
    faq: {
      badge: "Frequently Asked Questions",
      title: "Everything You Need to Know",
      subtitle: "Clear answers to common questions about Swiss caregiving, Pflegegrad estimation, costs, and legal preparation.",
      allCategory: "All Categories",
      general: "General",
      financial: "Financial & AHV",
      spitex: "Spitex & Home Care",
      legal: "Legal & Proxy",
      moreQuestions: "Have a specific question about your situation?",
      contactAdvisor: "Contact an Advisor",
    },

    // Contact Page
    contact: {
      badge: "Reach Out to Our Team",
      title: "We are here to support your caregiving journey",
      subtitle: "Have questions about our platform, need regional care navigation advice, or want to partner with us? Send us a message.",
      fullName: "Full Name",
      fullNamePlaceholder: "e.g. Maria Rossi",
      email: "Email Address",
      emailPlaceholder: "e.g. maria.rossi@bluewin.ch",
      phone: "Phone Number (Optional)",
      phonePlaceholder: "+41 79 123 45 67",
      details: "How can we assist you?",
      detailsPlaceholder: "Describe your family's care situation, canton, or questions...",
      submitBtn: "Send Inquiry",
      sending: "Sending...",
      successTitle: "Thank you for reaching out!",
      successDesc: "Your message has been received. Our team will get back to you within 1 business day.",
      cantonNote: "Regional support available across all Swiss cantons.",
    },

    // Assessment Page (/care-compass)
    quiz: {
      badge: "Care Compass Assessment",
      title: "Evaluate Your Family's Care Situation",
      subtitle: "12 guided questions to generate your personalized Swiss care roadmap and Pflegegrad orientation.",
      stepIndicator: "Question {current} of {total}",
      progress: "Progress",
      nextBtn: "Next Question",
      prevBtn: "Previous",
      submitBtn: "Generate My Guidance Roadmap",
      submitting: "Analyzing Situation & Generating Roadmap...",
      selectOptionPrompt: "Please choose the option that best describes your situation:",
      confidentialNotice: "100% confidential. No account or registration required.",
    },

    // Guidance Page (/guidance)
    guidance: {
      badge: "Your Personalized Plan",
      title: "Personalized Swiss Care Roadmap",
      subtitle: "Based on your Care Compass answers, here is your customized guidance for Canton {canton}.",
      estimatedPflegegrad: "Estimated Care Level",
      urgencyLevel: "Urgency Indicator",
      downloadPdf: "Download PDF Summary",
      scheduleCall: "Book 1-on-1 Advisor Call",
      situationSummaryTitle: "Clinical Situation Overview",
      actionStepsTitle: "Your Recommended Action Steps",
      regionalResourcesTitle: "Accredited Cantonal Resources",
    },

    // Footer
    footer: {
      description: "Empowering Swiss family caregivers with independent clinical roadmaps, Spitex coordination, and cantonal benefits guidance.",
      navTitle: "Navigation",
      servicesTitle: "Swiss Care Resources",
      legalTitle: "Privacy & Compliance",
      fadpStatement: "Compliant with the Swiss Federal Act on Data Protection (FADP) and GDPR Art. 32 standards.",
      copyright: "© {year} Polaris Care Switzerland. All rights reserved.",
    },
  },

  de: {
    // Navigation
    nav: {
      home: "Startseite",
      careCompass: "Pflege-Kompass",
      guidance: "Persönlicher Leitfaden",
      about: "Über Polaris",
      contact: "Kontakt",
      getStarted: "Kostenlose Analyse starten",
    },

    // Hero Section
    hero: {
      badge: "Schweizer Pflege-Orientierung",
      titleLine1: "Einfühlsame Orientierung für",
      titleHighlight: "pflegende Angehörige",
      titleLine2: "in der ganzen Schweiz",
      subtitle: "Altersbetreuung, Spitex-Koordination, Ergänzungsleistungen (EL/AHV) und Entlastungsangebote zu organisieren kann überfordern. Wir begleiten Sie Schritt für Schritt mit strukturierten Leitfäden.",
      bullet1: "12-Fragen Pflege-Kompass mit sofortiger Pflegegrad-Einschätzung",
      bullet2: "Kantonaler Finanz- & Leistungsleitfaden (ZH, BE, VD, GE, BS, TI & alle 26 Kantone)",
      bullet3: "100% kostenlos, anonym & Schweizer DSG-konform",
      ctaButton: "Pflege-Kompass starten",
      secondaryCta: "Orientierungsrahmen entdecken",
      cantonCoverage: "Abdeckung aller 26 Kantone",
      anonymousBadge: "Keine Registrierung erforderlich",
      verifiedPartners: "Koordiniert mit Pro Senectute, Spitex & Schweizer Gesundheitsnetzwerken",
    },

    // Care Compass Hero Card
    compassCard: {
      tag: "Interaktive Analyse",
      title: "In 3 Minuten zu Ihrem individuellen Pflegeplan",
      step1: "1. Wohn- & Gesundheitssituation",
      step2: "2. Pflegeaufwand & Betreuungsbedarf",
      step3: "3. Kantonale Leistungen & Entlastung",
      timeEstimate: "Dauert ca. 3 Min. • 12 Fragen",
      startBtn: "Kompass-Test starten",
      badgeFree: "Kostenlos & vertraulich",
    },

    // How It Works
    howItWorks: {
      badge: "Schritt-für-Schritt-Ablauf",
      title: "Wie Polaris Care Sie unterstützt",
      subtitle: "Von der ersten Einschätzung bis zur Vermittlung geprüfter Partner vor Ort vereinfachen wir jeden Schritt Ihres Pflegealltags.",
      step1Title: "1. Pflege-Kompass ausfüllen",
      step1Desc: "Beantworten Sie 12 vertrauliche Fragen zur Wohnsituation, zum Betreuungsbedarf und Ihrer persönlichen Belastung.",
      step2Title: "2. Dynamische Situationsanalyse",
      step2Desc: "Unsere Berechnungslogik ermittelt den voraussichtlichen Pflegebedarf (Grad 1–5) und identifiziert Entlastungspotenziale.",
      step3Title: "3. Kantonaler Massnahmenplan",
      step3Desc: "Erhalten Sie einen massgeschneiderten Schweizer Leitfaden zu Spitex, Ergänzungsleistungen und Vorsorgeauftrag.",
      step4Title: "4. Beratung & Entlastung buchen",
      step4Desc: "Verbinden Sie sich mit regionalen Pflegeberatern für persönliche Entlastungsangebote, Tagesstätten und Notfallpläne.",
    },

    // Care Journey / Video Call Section
    careJourney: {
      badge: "Erfahrungsbericht",
      title: "„Die richtige Spitex und Ergänzungsleistungen in Zürich zu finden, dauerte früher Wochen.“",
      quote: "Polaris Care hat unserer Familie in unter 5 Minuten einen klaren, verständlichen 4-Schritte-Plan gegeben. Wir wussten sofort, welche Anträge bei der SVA Zürich nötig sind.",
      author: "Elena Fischer",
      authorRole: "Pflegende Angehörige im Kanton Zürich",
      img1: "Erwachsenes Kind hilft Elternteil beim Gehen",
      img2: "Videoanruf-Absprache mit Geschwistern",
      img3: "Medikamenten-Dosierer auf dem Küchentisch",
      img4: "Pflegender Partner, ruhiger Morgenkaffee",
      img5: "Selbsthilfegruppe & Angehörigennetzwerk",
    },

    // Core Values
    coreValues: {
      badge: "Warum Polaris Care",
      title: "Gelebte Empathie, Transparenz & Schweizer Qualitätsstandards",
      val1Title: "100% Kostenlos & Unabhängig",
      val1Desc: "Unsere Beratung ist neutral und dient einzig der Unterstützung pflegender Angehöriger in der Schweiz.",
      val2Title: "Schweizer Datenschutz (DSG)",
      val2Desc: "Ihre Daten bleiben streng vertraulich und nach den Richtlinien des Schweizer Datenschutzgesetzes geschützt.",
      val3Title: "Alle 26 Kantone abgedeckt",
      val3Desc: "Massgeschneiderte Informationen für die Deutschschweiz, Romandie und das Tessin.",
      val4Title: "Geprüftes Partnernetzwerk",
      val4Desc: "Direkte Vernetzung mit anerkannten Spitex-Diensten, Pro Senectute und kommunalen Beratungsstellen.",
    },

    // Testimonials
    testimonials: {
      badge: "Stimmen von Angehörigen",
      title: "Von Familien in der ganzen Schweiz geschätzt",
      subtitle: "Erfahren Sie, wie Polaris Care Familien bei wichtigen Pflege- und Finanzentscheidungen geholfen hat.",
      verifiedBadge: "Geprüfte/r Angehörige/r",
    },

    // FAQ Section
    faq: {
      badge: "Häufige Fragen",
      title: "Alles, was Sie wissen müssen",
      subtitle: "Klare Antworten zu Pflegeeinstufung, Spitex-Kosten, Ergänzungsleistungen und Vorsorgerechten in der Schweiz.",
      allCategory: "Alle Kategorien",
      general: "Allgemein",
      financial: "Finanzen & AHV/EL",
      spitex: "Spitex & Betreuung",
      legal: "Vorsorge & Recht",
      moreQuestions: "Haben Sie eine spezifische Frage zu Ihrer Situation?",
      contactAdvisor: "Berater kontaktieren",
    },

    // Contact Page
    contact: {
      badge: "Kontaktieren Sie uns",
      title: "Wir unterstützen Sie gerne in Ihrer Pflegesituation",
      subtitle: "Haben Sie Fragen zu unserer Plattform, benötigen Sie regionale Beratung oder möchten Sie Partner werden? Schreiben Sie uns.",
      fullName: "Vollständiger Name",
      fullNamePlaceholder: "z.B. Maria Rossi",
      email: "E-Mail-Adresse",
      emailPlaceholder: "z.B. maria.rossi@bluewin.ch",
      phone: "Telefonnummer (Optional)",
      phonePlaceholder: "+41 79 123 45 67",
      details: "Wie können wir Ihnen helfen?",
      detailsPlaceholder: "Beschreiben Sie Ihre Pflegesituation, den Kanton oder Ihre Fragen...",
      submitBtn: "Anfrage senden",
      sending: "Wird gesendet...",
      successTitle: "Vielen Dank für Ihre Nachricht!",
      successDesc: "Ihre Anfrage ist eingegangen. Unser Team meldet sich innerhalb von 1 Werktag bei Ihnen.",
      cantonNote: "Regionale Beratung in allen Schweizer Kantonen verfügbar.",
    },

    // Assessment Page (/care-compass)
    quiz: {
      badge: "Pflege-Kompass",
      title: "Pflegesituation Ihrer Familie analysieren",
      subtitle: "12 geführte Fragen für Ihren massgeschneiderten Schweizer Pflegeleitfaden und Pflegegrad-Orientierung.",
      stepIndicator: "Frage {current} von {total}",
      progress: "Fortschritt",
      nextBtn: "Nächste Frage",
      prevBtn: "Zurück",
      submitBtn: "Meinen Leitfaden erstellen",
      submitting: "Situation wird analysiert...",
      selectOptionPrompt: "Bitte wählen Sie die Option, die am besten zutrifft:",
      confidentialNotice: "100% vertraulich. Keine Registrierung erforderlich.",
    },

    // Guidance Page (/guidance)
    guidance: {
      badge: "Ihr persönlicher Plan",
      title: "Ihr massgeschneiderter Pflegeleitfaden",
      subtitle: "Basierend auf Ihren Antworten im Pflege-Kompass für den Kanton {canton}.",
      estimatedPflegegrad: "Geschätzter Pflegebedarf",
      urgencyLevel: "Dringlichkeitsstufe",
      downloadPdf: "PDF-Zusammenfassung herunterladen",
      scheduleCall: "1-zu-1 Beratungsgespräch vereinbaren",
      situationSummaryTitle: "Zusammenfassung der Pflegesituation",
      actionStepsTitle: "Empfohlene nächste Schritte",
      regionalResourcesTitle: "Anerkannte kantonale Anlaufstellen",
    },

    // Footer
    footer: {
      description: "Unterstützung für pflegende Angehörige in der Schweiz mit unabhängigen Leitfäden, Spitex-Koordination und kantonalen Leistungsübersichten.",
      navTitle: "Navigation",
      servicesTitle: "Schweizer Pflegeressourcen",
      legalTitle: "Datenschutz & Rechtliches",
      fadpStatement: "Konform mit dem Schweizer Datenschutzgesetz (DSG) und den Standards nach DSGVO Art. 32.",
      copyright: "© {year} Polaris Care Schweiz. Alle Rechte vorbehalten.",
    },
  },

  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      careCompass: "Boussole des Soins",
      guidance: "Guide Personnalisé",
      about: "À Propos",
      contact: "Contact",
      getStarted: "Évaluation Gratuite",
    },

    // Hero Section
    hero: {
      badge: "Orientation Santé Suisse",
      titleLine1: "Un accompagnement bienveillant pour",
      titleHighlight: "les proches aidants",
      titleLine2: "dans toute la Suisse",
      subtitle: "Organiser les soins aux aînés, coordonner les services Spitex / CMS, demander les prestations complémentaires (PC/AVS) et trouver du répit peut sembler complexe. Nous vous guidons pas à pas.",
      bullet1: "Boussole en 12 questions avec estimation immédiate du niveau de soins",
      bullet2: "Feuille de route financière cantonale (VD, GE, NE, VS, FR, BE, ZH et 26 cantons)",
      bullet3: "100% gratuit, anonyme et conforme à la LPD suisse",
      ctaButton: "Démarrer la Boussole des Soins",
      secondaryCta: "Découvrir notre cadre d'aide",
      cantonCoverage: "Couvre les 26 cantons suisses",
      anonymousBadge: "Aucune inscription requise",
      verifiedPartners: "Coordonné avec Pro Senectute, CMS / Spitex et réseaux de santé",
    },

    // Care Compass Hero Card
    compassCard: {
      tag: "Évaluation Interactive",
      title: "Trouvez votre plan personnalisé en 3 minutes",
      step1: "1. Situation de vie et santé",
      step2: "2. Charge et besoins d'aide",
      step3: "3. Prestations et répit cantonal",
      timeEstimate: "Prend env. 3 min • 12 questions",
      startBtn: "Lancer le questionnaire",
      badgeFree: "Gratuit et confidentiel",
    },

    // How It Works
    howItWorks: {
      badge: "Processus pas à pas",
      title: "Comment Polaris Care vous accompagne",
      subtitle: "De votre évaluation initiale à la mise en relation avec des partenaires locaux certifiés, nous simplifions chaque étape.",
      step1Title: "1. Répondez à la Boussole",
      step1Desc: "12 questions confidentielles sur le cadre de vie de votre proche, son degré d'autonomie et votre charge d'aidant.",
      step2Title: "2. Analyse Clinique Dynamique",
      step2Desc: "Notre moteur calcule le niveau probable de soins (1–5) et détecte les risques d'épuisement de l'aidant.",
      step3Title: "3. Feuille de Route Cantonale",
      step3Desc: "Recevez un guide suisse sur mesure (CMS/Spitex, prestations complémentaires, mandat pour cause d'inaptitude).",
      step4Title: "4. Conseil et Répit",
      step4Desc: "Entrez en contact avec des conseillers régionaux pour planifier accueils de jour et solutions de relais d'urgence.",
    },

    // Care Journey
    careJourney: {
      badge: "Témoignage d'Aidant",
      title: "« Trouver les bons services CMS et prestations complémentaires prenait des semaines. »",
      quote: "Polaris Care a fourni à notre famille une feuille de route claire et humaine en moins de 5 minutes. Nous avons su exactement quelles démarches entreprendre.",
      author: "Béatrice Rochat",
      authorRole: "Proche aidante dans le canton de Vaud",
      img1: "Enfant adulte aidant un parent à marcher",
      img2: "Point en appel vidéo avec la fratrie",
      img3: "Pilulier semainier sur la table de cuisine",
      img4: "Conjoint aidant, café matinal au calme",
      img5: "Groupe d'entraide & CareCircle",
    },

    // Core Values
    coreValues: {
      badge: "Pourquoi Polaris Care",
      title: "Fondé sur l'empathie, la transparence et les standards suisses",
      val1Title: "100% Gratuit et Indépendant",
      val1Desc: "Nos conseils sont neutres et conçus uniquement pour soutenir les proches aidants en Suisse.",
      val2Title: "Protection des Données (LPD)",
      val2Desc: "Vos données restent strictement confidentielles et protégées selon la Loi fédérale sur la protection des données.",
      val3Title: "26 Cantons Couverts",
      val3Desc: "Informations adaptées pour la Romandie, la Suisse alémanique et le Tessin.",
      val4Title: "Réseau de Partenaires Vérifiés",
      val4Desc: "Liaisons directes avec les CMS/Spitex accrédités, Pro Senectute et services sociaux cantonaux.",
    },

    // Testimonials
    testimonials: {
      badge: "Témoignages",
      title: "Apprécié par des familles partout en Suisse",
      subtitle: "Découvrez comment Polaris Care a aidé des familles à prendre les bonnes décisions de soins et de financement.",
      verifiedBadge: "Proche aidant vérifié",
    },

    // FAQ Section
    faq: {
      badge: "Questions Fréquentes",
      title: "Tout ce que vous devez savoir",
      subtitle: "Des réponses claires sur l'estimation des soins, les coûts CMS/Spitex, les prestations complémentaires et le droit de protection.",
      allCategory: "Toutes les catégories",
      general: "Général",
      financial: "Finances & AVS/PC",
      spitex: "CMS & Soins à domicile",
      legal: "Droit & Mandat",
      moreQuestions: "Vous avez une question spécifique sur votre situation ?",
      contactAdvisor: "Contacter un conseiller",
    },

    // Contact Page
    contact: {
      badge: "Contactez notre équipe",
      title: "Nous sommes là pour vous accompagner",
      subtitle: "Des questions sur notre plateforme, besoin d'un conseil cantonal ou envie de devenir partenaire ? Écrivez-nous.",
      fullName: "Nom complet",
      fullNamePlaceholder: "ex. Maria Rossi",
      email: "Adresse e-mail",
      emailPlaceholder: "ex. maria.rossi@bluewin.ch",
      phone: "Numéro de téléphone (optionnel)",
      phonePlaceholder: "+41 79 123 45 67",
      details: "Comment pouvons-nous vous aider ?",
      detailsPlaceholder: "Décrivez votre situation de proche aidant, votre canton ou vos questions...",
      submitBtn: "Envoyer la demande",
      sending: "Envoi en cours...",
      successTitle: "Merci pour votre message !",
      successDesc: "Votre demande a été reçue. Notre équipe vous répondra sous 1 jour ouvré.",
      cantonNote: "Conseils régionaux disponibles dans tous les cantons suisses.",
    },

    // Assessment Page (/care-compass)
    quiz: {
      badge: "Boussole des Soins",
      title: "Évaluer la situation de soins de votre famille",
      subtitle: "12 questions guidées pour générer votre feuille de route suisse personnalisée.",
      stepIndicator: "Question {current} sur {total}",
      progress: "Progression",
      nextBtn: "Question suivante",
      prevBtn: "Précédent",
      submitBtn: "Générer ma feuille de route",
      submitting: "Analyse en cours...",
      selectOptionPrompt: "Veuillez choisir l'option qui correspond le mieux à votre situation :",
      confidentialNotice: "100% confidentiel. Aucune inscription requise.",
    },

    // Guidance Page (/guidance)
    guidance: {
      badge: "Votre Plan Personnalisé",
      title: "Feuille de Route des Soins en Suisse",
      subtitle: "Basé sur vos réponses à la Boussole des Soins pour le canton de {canton}.",
      estimatedPflegegrad: "Niveau de soins estimé",
      urgencyLevel: "Indicateur d'urgence",
      downloadPdf: "Télécharger le résumé PDF",
      scheduleCall: "Prendre rendez-vous avec un conseiller",
      situationSummaryTitle: "Synthèse de la situation clinique",
      actionStepsTitle: "Vos prochaines étapes recommandées",
      regionalResourcesTitle: "Organismes et ressources cantonales",
    },

    // Footer
    footer: {
      description: "Accompagnement des proches aidants en Suisse avec feuilles de route indépendantes, coordination CMS et accès aux prestations cantonales.",
      navTitle: "Navigation",
      servicesTitle: "Ressources de soins suisses",
      legalTitle: "Confidentialité & Mentions légales",
      fadpStatement: "Conforme à la Loi fédérale sur la protection des données (LPD) et aux normes RGPD Art. 32.",
      copyright: "© {year} Polaris Care Suisse. Tous droits réservés.",
    },
  },

  it: {
    // Navigation
    nav: {
      home: "Home",
      careCompass: "Bussola dell'Assistenza",
      guidance: "Guida Personalizzata",
      about: "Chi Siamo",
      contact: "Contatto",
      getStarted: "Inizia Valutazione Gratuita",
    },

    // Hero Section
    hero: {
      badge: "Orientamento Sanitario Svizzero",
      titleLine1: "Un orientamento empatico per",
      titleHighlight: "i familiari curanti",
      titleLine2: "in tutta la Svizzera",
      subtitle: "Gestire l'assistenza agli anziani, coordinare i servizi Spitex / SACD, richiedere prestazioni complementari (PC/AVS) e trovare sollievo può essere impegnativo. Vi guidiamo passo dopo passo.",
      bullet1: "Bussola in 12 domande con stima immediata del livello di cura",
      bullet2: "Guida finanziaria e cantonale (TI, GR, ZH, BE, VD e tutti i 26 cantoni)",
      bullet3: "100% gratuito, anonimo e conforme alla LPD svizzera",
      ctaButton: "Inizia la Bussola dell'Assistenza",
      secondaryCta: "Scopri il quadro di orientamento",
      cantonCoverage: "Copertura in tutti i 26 cantoni",
      anonymousBadge: "Nessuna registrazione richiesta",
      verifiedPartners: "Coordinato con Pro Senectute, Spitex e reti sanitarie svizzere",
    },

    // Care Compass Hero Card
    compassCard: {
      tag: "Valutazione Interattiva",
      title: "Trova il tuo piano personalizzato in 3 minuti",
      step1: "1. Situazione abitativa e salute",
      step2: "2. Carico assistenziale e bisogni",
      step3: "3. Prestazioni e sollievo cantonale",
      timeEstimate: "Richiede circa 3 min • 12 domande",
      startBtn: "Avvia il questionario",
      badgeFree: "Gratuito e confidenziale",
    },

    // How It Works
    howItWorks: {
      badge: "Procedura passo dopo passo",
      title: "Come Polaris Care vi supporta",
      subtitle: "Dalla valutazione iniziale al contatto con partner locali qualificati, semplifichiamo ogni aspetto del vostro percorso di cura.",
      step1Title: "1. Compila la Bussola",
      step1Desc: "12 domande riservate sulle condizioni di vita del familiare, il grado di autonomia e il carico del caregiver.",
      step2Title: "2. Analisi Clinica Dinamica",
      step2Desc: "Il nostro motore calcola il probabile livello di cura (1–5) e identifica i fattori di sovraccarico.",
      step3Title: "3. Piano d'Azione Cantonale",
      step3Desc: "Ricevi una guida svizzera su misura su Spitex, prestazioni complementari e mandato precauzionale.",
      step4Title: "4. Consulenza e Sollievo",
      step4Desc: "Mettiti in contatto con consulenti regionali per centri diurni e supporto in situazioni di emergenza.",
    },

    // Care Journey
    careJourney: {
      badge: "Testimonianza",
      title: "«Trovare il servizio Spitex giusto e le prestazioni complementari richiedeva settimane.»",
      quote: "Polaris Care ha fornito alla nostra famiglia un piano chiaro in meno di 5 minuti. Abbiamo saputo subito come orientarci.",
      author: "Marco Bernasconi",
      authorRole: "Familiare curante nel Canton Ticino",
      img1: "Figlio adulto che aiuta il genitore a camminare",
      img2: "Videochiamata di confronto con fratelli",
      img3: "Portapillole settimanale sul tavolo di cucina",
      img4: "Coniuge caregiver, caffè mattutino tranquillo",
      img5: "Gruppo di supporto & CareCircle",
    },

    // Core Values
    coreValues: {
      badge: "Perché Polaris Care",
      title: "Fondato su empatia, trasparenza e standard svizzeri",
      val1Title: "100% Gratuito e Indipendente",
      val1Desc: "La nostra guida è neutrale e pensata unicamente per aiutare i familiari curanti in Svizzera.",
      val2Title: "Protezione Dati Svizzera (LPD)",
      val2Desc: "I vostri dati rimangono strettamente confidenziali e protetti secondo la Legge federale sulla protezione dei dati.",
      val3Title: "Tutti i 26 Cantoni Coperti",
      val3Desc: "Informazioni mirate per il Ticino, la Svizzera romanda e la Svizzera tedesca.",
      val4Title: "Rete di Partner Verificati",
      val4Desc: "Collegamenti diretti con servizi Spitex accreditati, Pro Senectute e sportelli socio-sanitari.",
    },

    // Testimonials
    testimonials: {
      badge: "Testimonianze",
      title: "Scelto dalle famiglie in tutta la Svizzera",
      subtitle: "Scoprite come Polaris Care ha aiutato le famiglie a prendere decisioni assistenziali e finanziarie consapevoli.",
      verifiedBadge: "Familiare verificato",
    },

    // FAQ Section
    faq: {
      badge: "Domande Frequenti",
      title: "Tutto quello che c'è da sapere",
      subtitle: "Risposte chiare sui livelli di cura, costi Spitex, prestazioni complementari e diritto di protezione.",
      allCategory: "Tutte le categorie",
      general: "Generale",
      financial: "Finanze & AVS/PC",
      spitex: "Spitex & Cure a domicilio",
      legal: "Diritto & Mandato",
      moreQuestions: "Hai una domanda specifica sulla tua situazione?",
      contactAdvisor: "Contatta un consulente",
    },

    // Contact Page
    contact: {
      badge: "Contattaci",
      title: "Siamo qui per sostenervi nel percorso di cura",
      subtitle: "Avete domande sulla nostra piattaforma, necessitate di una consulenza cantonale o desiderate collaborare? Scriveteci.",
      fullName: "Nome completo",
      fullNamePlaceholder: "es. Maria Rossi",
      email: "Indirizzo e-mail",
      emailPlaceholder: "es. maria.rossi@bluewin.ch",
      phone: "Numero di telefono (opzionale)",
      phonePlaceholder: "+41 79 123 45 67",
      details: "Come possiamo aiutarvi?",
      detailsPlaceholder: "Descrivete la situazione di cura, il cantone o le vostre domande...",
      submitBtn: "Invia richiesta",
      sending: "Invio in corso...",
      successTitle: "Grazie per il vostro messaggio!",
      successDesc: "La vostra richiesta è stata ricevuta. Il nostro team vi risponderà entro 1 giorno lavorativo.",
      cantonNote: "Supporto regionale disponibile in tutti i cantoni svizzeri.",
    },

    // Assessment Page (/care-compass)
    quiz: {
      badge: "Bussola dell'Assistenza",
      title: "Valuta la situazione assistenziale della tua famiglia",
      subtitle: "12 domande guidate per generare la vostra guida personalizzata e l'orientamento al livello di cura.",
      stepIndicator: "Domanda {current} di {total}",
      progress: "Avanzamento",
      nextBtn: "Prossima domanda",
      prevBtn: "Indietro",
      submitBtn: "Genera la mia guida",
      submitting: "Analisi della situazione in corso...",
      selectOptionPrompt: "Scegli l'opzione che descrive meglio la tua situazione:",
      confidentialNotice: "100% confidenziale. Nessuna registrazione richiesta.",
    },

    // Guidance Page (/guidance)
    guidance: {
      badge: "Il Tuo Piano Personalizzato",
      title: "Guida Personalizzata all'Assistenza in Svizzera",
      subtitle: "Basata sulle risposte alla Bussola dell'Assistenza per il Canton {canton}.",
      estimatedPflegegrad: "Livello di cura stimato",
      urgencyLevel: "Indicatore di urgenza",
      downloadPdf: "Scarica riassunto PDF",
      scheduleCall: "Prenota colloquio con un consulente",
      situationSummaryTitle: "Sintesi della situazione clinica",
      actionStepsTitle: "I tuoi prossimi passi consigliati",
      regionalResourcesTitle: "Risorse e sportelli cantonali accreditati",
    },

    // Footer
    footer: {
      description: "Supporto ai familiari curanti in Svizzera con guide indipendenti, coordinamento Spitex e orientamento alle prestazioni cantonali.",
      navTitle: "Navigazione",
      servicesTitle: "Risorse sanitarie svizzere",
      legalTitle: "Privacy & Aspetti legali",
      fadpStatement: "Conforme alla Legge federale sulla protezione dei dati (LPD) e agli standard GDPR Art. 32.",
      copyright: "© {year} Polaris Care Svizzera. Tutti i diritti riservati.",
    },
  },
};
