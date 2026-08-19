export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export const siteConfig = {
  name: "Pflege_Orientrierung",
  description:
    "A clean, modern, and production-ready Next.js 16 + React 19 + TypeScript + Tailwind CSS starter template.",
  url: "https://example.com",
  ogImage: "https://example.com/og.png",
  navItems: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Features",
      href: "/#features",
    },
    {
      title: "Structure",
      href: "/#structure",
    },
    {
      title: "Quick Start",
      href: "/#quickstart",
    },
  ] as NavItem[],
  links: {
    github: "https://github.com",
    docs: "https://nextjs.org/docs",
  },
};
