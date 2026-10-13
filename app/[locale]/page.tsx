import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import {
  KeyRound,
  MapPinOff,
  EyeOff,
  Gauge,
  Languages,
  MessageCircle,
  Search,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  UserRound,
  LayoutGrid,
  BadgeDollarSign,
} from "lucide-react";
import { AmbientBackground, CallButton, DarkCta, GlassCard, Hero, OG_IMAGES } from "@/components/agency/shared";

// Previous homepage is kept at /home-v1 (unlinked, noindex).

type Item = { title: string; desc: string };

const PROBLEM_ICONS = [KeyRound, MapPinOff, EyeOff];
const FEATURE_ICONS = [Gauge, Languages, MessageCircle, Search, BarChart3, ShieldCheck];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
    alternates: { canonical: `/${locale}`, languages: { en: "/en", th: "/th" } },
    openGraph: {
      title: t("meta_title"),
      description: t("meta_description"),
      url: `/${locale}`,
      siteName: "Command & Palette",
      type: "website",
      images: OG_IMAGES,
    },
    twitter: { card: "summary_large_image", title: t("meta_title"), description: t("meta_description"), images: ["/opengraph-image?v=3"] },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("Home");
  const problems = t.raw("problems") as Item[];
  const features = t.raw("features") as Item[];
  const process = t.raw("process") as Item[];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
      <AmbientBackground />

      <Hero
        badge={t("badge")}
        title1={t("hero_title_1")}
        highlight={t("hero_title_highlight")}
        title2={t("hero_title_2")}
        subtitle={t("hero_subtitle")}
      >
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CallButton label={t("cta_primary")} />
          <Link
            href={`/${locale}/pricing`}
            className="inline-flex items-center gap-2 h-14 px-8 rounded-full border border-slate-300 bg-white/70 text-slate-800 text-lg font-medium hover:bg-white transition-colors"
          >
            {t("cta_secondary")} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Hero>

      {/* Problems */}
      <section className="relative z-10 container mx-auto px-6 py-16 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t("problem_title")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => {
            const Icon = PROBLEM_ICONS[i % PROBLEM_ICONS.length];
            return (
              <GlassCard key={p.title}>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 mb-5">
                  <Icon className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-slate-600 leading-relaxed">{p.desc}</p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 container mx-auto px-6 py-16 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("features_title")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
            return (
              <GlassCard key={f.title} className="hover:-translate-y-1 transition-transform">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 mb-5">
                  <Icon className="w-6 h-6" />
                </span>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 container mx-auto px-6 py-16 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("process_title")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {process.map((s, i) => (
            <div key={s.title} className="relative p-8 rounded-[2rem] bg-slate-900 text-white shadow-xl">
              <span className="text-5xl font-bold text-white/10 absolute top-4 right-6">{i + 1}</span>
              <h3 className="text-lg font-bold mb-3 relative">{s.title}</h3>
              <p className="text-slate-300 leading-relaxed relative">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder, work, pricing */}
      <section className="relative z-10 container mx-auto px-6 py-16 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: UserRound, color: "bg-purple-100 text-purple-600", link: "text-purple-700", href: "/founder", title: t("founder_title"), desc: t("founder_desc"), cta: t("founder_link") },
            { icon: LayoutGrid, color: "bg-blue-100 text-blue-600", link: "text-blue-700", href: "/works", title: t("work_title"), desc: t("work_desc"), cta: t("work_link") },
            { icon: BadgeDollarSign, color: "bg-amber-100 text-amber-600", link: "text-amber-700", href: "/pricing", title: t("pricing_title"), desc: t("pricing_desc"), cta: t("pricing_link") },
          ].map(({ icon: Icon, color, link, href, title, desc, cta }) => (
            <GlassCard key={href} className="flex flex-col">
              <span className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-5 ${color}`}>
                <Icon className="w-6 h-6" />
              </span>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">{desc}</p>
              <Link href={`/${locale}${href}`} className={`mt-6 inline-flex items-center gap-2 font-semibold hover:underline ${link}`}>
                {cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>

      <div className="h-12" />
      <DarkCta title={t("cta_title")} subtitle={t("cta_subtitle")} button={t("cta_btn")} />
    </div>
  );
}
