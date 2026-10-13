import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AGENCY_PAGES_LIVE } from "@/lib/launch";

export const CALENDLY_URL = "https://calendly.com/command-palette-th/45min";

/**
 * Metadata for the new agency pages.
 * Hidden from search engines until AGENCY_PAGES_LIVE (lib/launch.ts) is set to true.
 */
// Share preview (LINE, Facebook, Slack...). Set explicitly because a page-level
// openGraph object replaces the one generated from app/opengraph-image.tsx.
export const OG_IMAGES = [
  { url: "/opengraph-image", width: 1200, height: 630, alt: "Command & Palette" },
];

export async function agencyMetadata(locale: string, namespace: string, path: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
    ...(AGENCY_PAGES_LIVE ? {} : { robots: { index: false, follow: false } }),
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { en: `/en${path}`, th: `/th${path}` },
    },
    openGraph: {
      title: t("meta_title"),
      description: t("meta_description"),
      url: `/${locale}${path}`,
      siteName: "Command & Palette",
      type: "website",
      images: OG_IMAGES,
    },
    twitter: { card: "summary_large_image", title: t("meta_title"), description: t("meta_description"), images: ["/opengraph-image"] },
  };
}

export function AmbientBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] mix-blend-multiply" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] mix-blend-multiply" />
    </div>
  );
}

export function Hero({
  badge,
  title1,
  highlight,
  title2,
  subtitle,
  children,
}: {
  badge: string;
  title1: string;
  highlight: string;
  title2: string;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative z-10 pt-40 pb-16 px-6 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs md:text-sm font-bold tracking-wider mb-6 uppercase border border-blue-100">
        {badge}
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.3] text-balance max-w-5xl mx-auto">
        {title1}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{highlight}</span>
        {title2}
      </h1>
      <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">{subtitle}</p>
      {children}
    </section>
  );
}

export function CallButton({ label, dark = true }: { label: string; dark?: boolean }) {
  return (
    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
      <Button
        size="lg"
        className={`rounded-full px-8 h-14 text-lg shadow-xl transition-transform hover:scale-105 group ${
          dark ? "bg-slate-900 hover:bg-slate-800 text-white" : "bg-white hover:bg-slate-100 text-slate-900"
        }`}
      >
        {label} <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
      </Button>
    </a>
  );
}

export function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function DarkCta({ title, subtitle, button }: { title: string; subtitle?: string; button: string }) {
  return (
    <section className="relative z-10 bg-slate-900 py-24 px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">{title}</h2>
      {subtitle && <p className="text-slate-300 mb-10 max-w-xl mx-auto text-lg text-balance">{subtitle}</p>}
      <CallButton label={button} dark={false} />
    </section>
  );
}
