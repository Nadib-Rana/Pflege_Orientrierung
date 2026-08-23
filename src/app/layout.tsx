import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { siteConfig } from "@/config/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Starter Template",
    "App Router",
  ],
  authors: [
    {
      name: "Next.js Starter",
      url: siteConfig.url,
    },
  ],
  creator: "Next.js Starter",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
