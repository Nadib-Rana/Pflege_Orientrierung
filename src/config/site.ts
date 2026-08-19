export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export const siteConfig = {
  name: "PflegeOrientierung",
  tagline: "Guiding Care with Confidence",
  description:
    "Pflege Orientrierung is a supportive companion for family caregivers. Answer a few questions to receive personalized guidance, helping you decide your next steps with clarity and confidence.",
  url: "https://polaris-care.vercel.app",
  navItems: [
    { title: "Home", href: "/" },
    { title: "Care compass", href: "/care-compass" },
    { title: "How it works", href: "/#how-it-works" },
    { title: "Contact", href: "/contact" },
    { title: "About", href: "/about" },
  ] as NavItem[],
  contact: {
    address: "Centralidade do Kilamba, Quarteirão P, Building P11, Luanda – Angola.",
    phone: "+244 956 880 998",
    email: "hello@Pflege.com",
  },
  legal: [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms & Conditions", href: "#" },
  ],
};
