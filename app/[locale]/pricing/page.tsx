import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Check, Plus } from "lucide-react";
import { AmbientBackground, CallButton, DarkCta, GlassCard, Hero, agencyMetadata } from "@/components/agency/shared";

type AddOn = { name: string; price: string };
type Faq = { q: string; a: string };
type PaymentStep = { pct: string; label: string };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return agencyMetadata(locale, "Pricing", "/pricing");
}

function FeatureList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-3 ${dark ? "text-slate-200" : "text-slate-700"}`}>
          <Check className={`w-5 h-5 shrink-0 mt-0.5 ${dark ? "text-emerald-400" : "text-emerald-600"}`} />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("Pricing");
  const addons = t.raw("addons") as AddOn[];
  const faq = t.raw("faq") as Faq[];
  const paymentSteps = t.raw("payment_steps") as PaymentStep[];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
      <AmbientBackground />

      <Hero
        badge={t("badge")}
        title1={t("hero_title_1")}
        highlight={t("hero_title_highlight")}
        title2={t("hero_title_2")}
        subtitle={t("hero_subtitle")}
      />

      {/* Packages */}
      <section className="relative z-10 container mx-auto px-6 pb-16 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Launch (highlighted) */}
          <div className="relative bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-slate-800 flex flex-col">
            <span className="absolute -top-3 left-8 px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wide shadow-lg">
              {t("popular")}
            </span>
            <h2 className="text-2xl font-bold mb-2">{t("launch_name")}</h2>
            <p className="text-slate-300 mb-6">{t("launch_desc")}</p>
            <div className="mb-1 text-sm text-slate-400">{t("from")}</div>
            <div className="text-5xl font-bold mb-2">{t("launch_price")}</div>
            <div className="text-sm text-blue-300 font-medium mb-8">{t("launch_time")}</div>
            <div className="flex-grow">
              <FeatureList items={t.raw("launch_features") as string[]} dark />
            </div>
            <div className="mt-10">
              <CallButton label={t("cta_btn")} dark={false} />
            </div>
          </div>

          {/* Growth */}
          <GlassCard className="rounded-[2.5rem] md:p-10 flex flex-col">
            <h2 className="text-2xl font-bold mb-2">{t("growth_name")}</h2>
            <p className="text-slate-600 mb-6">{t("growth_desc")}</p>
            <div className="mb-1 text-sm text-slate-500">{t("from")}</div>
            <div className="text-5xl font-bold mb-2">{t("growth_price")}</div>
            <div className="text-sm text-purple-700 font-medium mb-8">{t("growth_time")}</div>
            <p className="font-semibold mb-4">{t("growth_includes")}</p>
            <div className="flex-grow">
              <FeatureList items={t.raw("growth_features") as string[]} />
            </div>
            <div className="mt-10">
              <CallButton label={t("cta_btn")} />
            </div>
          </GlassCard>
        </div>

        {/* Care */}
        <GlassCard className="mt-8 rounded-[2.5rem] md:p-10">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">{t("care_name")}</h2>
              <p className="text-slate-600 mb-4">{t("care_desc")}</p>
              <span className="text-sm text-slate-500 mr-2">{t("from")}</span>
              <span className="text-4xl font-bold">{t("care_price")}</span>
              <span className="text-slate-500">{t("per_month")}</span>
            </div>
            <FeatureList items={t.raw("care_features") as string[]} />
          </div>
        </GlassCard>
      </section>

      {/* Add-ons, payment, exclusions */}
      <section className="relative z-10 container mx-auto px-6 py-8 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6">
          <GlassCard>
            <h3 className="text-lg font-bold mb-4">{t("addons_title")}</h3>
            <ul className="space-y-3">
              {addons.map((a) => (
                <li key={a.name} className="flex items-start justify-between gap-4 text-slate-700">
                  <span className="flex items-start gap-2">
                    <Plus className="w-4 h-4 mt-1 shrink-0 text-slate-400" />
                    {a.name}
                  </span>
                  <span className="font-semibold whitespace-nowrap">{a.price}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard>
            <h3 className="text-lg font-bold mb-4">{t("payment_title")}</h3>
            <ol className="space-y-3">
              {paymentSteps.map((s, i) => (
                <li key={i} className="flex items-baseline gap-3 text-slate-700">
                  <span className="w-12 shrink-0 font-bold text-slate-900">{s.pct}</span>
                  <span className="leading-relaxed">{s.label}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 pt-4 border-t border-slate-200/70 text-sm text-slate-500">{t("payment_note")}</p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-lg font-bold mb-4">{t("excluded_title")}</h3>
            <p className="text-slate-600 leading-relaxed">{t("excluded_desc")}</p>
          </GlassCard>
        </div>
        <div className="mt-10 text-center">
          <Link href={`/${locale}/process`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 text-blue-700 text-sm md:text-base font-bold border border-blue-100 shadow-sm hover:bg-blue-100 hover:border-blue-200 transition-colors group">
            {t("process_link")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 container mx-auto px-6 py-16 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{t("faq_title")}</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group bg-white/70 border border-white/80 rounded-2xl p-6 shadow-sm open:shadow-md transition-shadow">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-lg">
                {f.q}
                <Plus className="w-5 h-5 shrink-0 text-slate-400 group-open:rotate-45 transition-transform" />
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <DarkCta title={t("cta_title")} subtitle={t("cta_subtitle")} button={t("cta_final_btn")} />
    </div>
  );
}
