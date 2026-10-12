import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  Languages,
  MessageCircle,
  Gauge,
  FileText,
  Plane,
  Stethoscope,
  Search,
  BarChart3,
  PencilLine,
  ArrowRight,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { AmbientBackground, CallButton, DarkCta, GlassCard, Hero, agencyMetadata } from "@/components/agency/shared";

type Item = { title: string; desc: string };

const PROBLEM_ICONS = [Languages, MessageCircle, Gauge];
const FEATURE_ICONS = [FileText, Plane, MessageCircle, Stethoscope, Search, BarChart3, PencilLine];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return agencyMetadata(locale, "Clinics", "/clinics");
}

export default async function ClinicsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("Clinics");
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t("features_title")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
            return (
              <GlassCard
                key={f.title}
                className={`hover:-translate-y-1 transition-transform ${
                  // Last card fills the row when the grid would leave it alone
                  i === features.length - 1 && features.length % 3 === 1 ? "sm:col-span-2 lg:col-span-3" : ""
                }`}
              >
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

      {/* Founder + pricing teaser */}
      <section className="relative z-10 container mx-auto px-6 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard className="flex flex-col">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 mb-5">
              <UserRound className="w-6 h-6" />
            </span>
            <h3 className="text-2xl font-bold mb-3">{t("founder_title")}</h3>
            <p className="text-slate-600 leading-relaxed flex-grow">{t("founder_desc")}</p>
            <Link href={`/${locale}/founder`} className="mt-6 inline-flex items-center gap-2 font-semibold text-purple-700 hover:underline">
              {t("founder_link")} <ArrowRight className="w-4 h-4" />
            </Link>
          </GlassCard>
          <GlassCard className="flex flex-col">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 mb-5">
              <BarChart3 className="w-6 h-6" />
            </span>
            <h3 className="text-2xl font-bold mb-3">{t("pricing_title")}</h3>
            <p className="text-slate-600 leading-relaxed flex-grow">{t("pricing_desc")}</p>
            <Link href={`/${locale}/pricing`} className="mt-6 inline-flex items-center gap-2 font-semibold text-amber-700 hover:underline">
              {t("pricing_link")} <ArrowRight className="w-4 h-4" />
            </Link>
          </GlassCard>
        </div>
        <p className="mt-8 flex items-start gap-3 text-sm text-slate-500 max-w-3xl mx-auto">
          <ShieldCheck className="w-5 h-5 shrink-0 text-slate-400" />
          {t("compliance_note")}
        </p>
      </section>

      <div className="h-12" />
      <DarkCta title={t("cta_title")} subtitle={t("cta_subtitle")} button={t("cta_btn")} />
    </div>
  );
}
