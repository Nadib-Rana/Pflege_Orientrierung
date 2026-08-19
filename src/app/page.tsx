"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Zap,
  ShieldCheck,
  LayoutGrid,
  FileCode2,
  Terminal,
  Layers,
  Sparkles,
  Check,
  Copy,
  ArrowRight,
  Code2,
  FolderTree,
} from "lucide-react";

export default function HomePage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const features = [
    {
      icon: Zap,
      title: "Next.js 16 App Router",
      description:
        "Built on the latest Next.js App Router with React Server Components, instant page transitions, and Turbopack.",
    },
    {
      icon: Sparkles,
      title: "React 19 & Modern Hooks",
      description:
        "Leverage the latest React 19 capabilities, performance enhancements, and optimized server-client hydration.",
    },
    {
      icon: LayoutGrid,
      title: "Tailwind CSS v4 & Theming",
      description:
        "Modern OKLCH color token architecture with dark/light mode readiness and high-performance atomic styling.",
    },
    {
      icon: FileCode2,
      title: "Clean Modular Structure",
      description:
        "Clear separation of concerns across config, components, hooks, lib utilities, and shared TypeScript types.",
    },
    {
      icon: ShieldCheck,
      title: "Strict TypeScript",
      description:
        "End-to-end type safety with strict compiler flags, structured interfaces, and robust error prevention.",
    },
    {
      icon: Layers,
      title: "Accessible UI Primitives",
      description:
        "Ready-to-use accessible components including Buttons, Inputs, Cards, Badges, Dialogs, Dropdowns, and more.",
    },
  ];

  const projectStructure = [
    { path: "src/app/", desc: "Next.js App Router pages, layout, and global styling" },
    { path: "src/components/common/", desc: "Universal layout components (Navbar, Footer, Modals)" },
    { path: "src/components/ui/", desc: "Reusable, accessible design system UI primitives" },
    { path: "src/config/", desc: "Site configuration, navigation links, and app constants" },
    { path: "src/hooks/", desc: "Custom reusable React client hooks (e.g. useIsMobile)" },
    { path: "src/lib/", desc: "Core utility functions and helpers (e.g. cn class merger)" },
    { path: "src/types/", desc: "Shared global TypeScript interfaces and data models" },
    { path: "public/", desc: "Static assets, SVGs, and favicon icons" },
  ];

  const commands = [
    { label: "Install dependencies", cmd: "npm install" },
    { label: "Start development server", cmd: "npm run dev" },
    { label: "Build production bundle", cmd: "npm run build" },
    { label: "Run ESLint checks", cmd: "npm run lint" },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 py-20 md:py-28">
        {/* Subtle Background Glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-25">
          <div className="h-[450px] w-[650px] rounded-full bg-gradient-to-tr from-primary/30 to-muted blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3.5 py-1.5 text-xs font-medium text-foreground">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Next.js 16 + React 19 Starter Template
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            Production-Ready{" "}
            <span className="bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
              Clean Architecture
            </span>
          </h1>

          <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            A clean, modern, and highly modular starter boilerplate. Stripped of domain-specific
            bloat and engineered for rapid prototyping or enterprise application building.
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <a href="#quickstart" className="flex items-center gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#structure" className="flex items-center gap-2">
                <FolderTree className="h-4 w-4" /> Explore Structure
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <Code2 className="h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Key Features Grid */}
      <section id="features" className="py-16 md:py-24 border-b border-border/40 bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Badge variant="outline" className="mb-2">
              Features
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Everything You Need to Build Fast
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Standardized tooling, modular design, and robust primitives ready out of the box.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={i}
                  className="border-border/60 bg-background/60 backdrop-blur-sm hover:border-border transition-all hover:shadow-sm"
                >
                  <CardHeader className="pb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Project Structure Section */}
      <section id="structure" className="py-16 md:py-24 border-b border-border/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Badge variant="outline" className="mb-2">
              Directory Structure
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Clean & Predictable Hierarchy
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              An intuitive folder layout tailored for Next.js App Router best practices.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="border-b border-border bg-muted/40 px-4 py-3 flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <FolderTree className="h-4 w-4 text-foreground" />
              <span>Project Layout Overview</span>
            </div>
            <div className="divide-y divide-border">
              {projectStructure.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 text-xs sm:text-sm hover:bg-muted/10 transition-colors"
                >
                  <span className="font-mono font-medium text-foreground">{item.path}</span>
                  <span className="text-muted-foreground mt-1 sm:mt-0">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive UI Components Showcase */}
      <section className="py-16 md:py-24 border-b border-border/40 bg-muted/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Badge variant="outline" className="mb-2">
              UI Primitives
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Built-in UI Component Preview
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Accessible, theme-aware components that you can import directly from{" "}
              <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
                @/components/ui
              </code>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Buttons & Badges */}
            <Card className="border-border/60 bg-background">
              <CardHeader>
                <CardTitle className="text-sm font-semibold">Buttons & Badges</CardTitle>
                <CardDescription className="text-xs">
                  Various styles and interactive states.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Primary</Button>
                  <Button variant="secondary" size="sm">
                    Secondary
                  </Button>
                  <Button variant="outline" size="sm">
                    Outline
                  </Button>
                  <Button variant="destructive" size="sm">
                    Destructive
                  </Button>
                  <Button variant="ghost" size="sm">
                    Ghost
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Inputs & Forms */}
            <Card className="border-border/60 bg-background">
              <CardHeader>
                <CardTitle className="text-sm font-semibold">Form Inputs</CardTitle>
                <CardDescription className="text-xs">
                  Clean input fields with accessible focus rings.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <Input placeholder="Enter your email address..." className="text-xs" />
                  <Button size="sm">Subscribe</Button>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  Works seamlessly with <code className="font-mono">react-hook-form</code> and{" "}
                  <code className="font-mono">zod</code>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Quick Start Commands */}
      <section id="quickstart" className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Badge variant="outline" className="mb-2">
              Quick Start
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Run Locally in Seconds
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Get your development server up and running with a single command.
            </p>
          </div>

          <div className="space-y-3">
            {commands.map((c, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-lg border border-border bg-card p-3 sm:p-4 text-xs sm:text-sm font-mono shadow-sm"
              >
                <div className="flex items-center gap-3 overflow-x-auto">
                  <Terminal className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">{c.label}:</span>
                  <span className="font-semibold text-foreground">{c.cmd}</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 shrink-0 text-muted-foreground hover:text-foreground"
                  onClick={() => copyToClipboard(c.cmd, idx)}
                  aria-label="Copy command"
                >
                  {copiedIndex === idx ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            ))}
          </div>

          {/* Next Steps Card */}
          <Card className="mt-8 border-dashed border-border bg-muted/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" /> Ready to Build Your App?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs sm:text-sm text-muted-foreground space-y-2">
              <p>
                1. Edit <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-foreground">src/app/page.tsx</code> to start customizing your homepage.
              </p>
              <p>
                2. Configure site metadata in <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-foreground">src/config/site.ts</code>.
              </p>
              <p>
                3. Add new routes inside <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-foreground">src/app/</code> with modern App Router layouts and pages.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
