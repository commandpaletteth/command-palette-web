import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Check, Info, Linkedin, CalendarDays, Clock } from "lucide-react";
import { AmbientBackground, DarkCta, GlassCard, Hero, agencyMetadata } from "@/components/agency/shared";

type Item = { title: string; desc: string };

// Put a square photo at public/images/founder.jpg and set this to "/images/founder.jpg".
// While it is null, an initial avatar is shown instead.
const FOUNDER_PHOTO: string | null = null;
const LINKEDIN_URL = "https://www.linkedin.com/in/warutchaijaraspong/";

const AVAILABILITY_ICONS = [Clock, CalendarDays];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return agencyMetadata(locale, "Founder", "/founder");
}

export default async function FounderPage({ params }: { params: Promise<{ locale: string }> }) {
  await params;
  const t = await getTranslations("Founder");
  const story = t.raw("story") as string[];
  const background = t.raw("background") as string[];
  const how = t.raw("how") as Item[];
  const availability = t.raw("availability") as Item[];

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

      {/* Profile + background */}
      <section className="relative z-10 container mx-auto px-6 pb-12 max-w-5xl">
        <GlassCard className="rounded-[2.5rem] md:p-12">
          <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start">
            <div className="flex flex-col items-center text-center">
              {FOUNDER_PHOTO ? (
                <Image
                  src={FOUNDER_PHOTO}
                  alt={t("real_name")}
                  width={200}
                  height={200}
                  className="w-48 h-48 rounded-[2rem] object-cover shadow-xl"
                />
              ) : (
                <div className="w-48 h-48 rounded-[2rem] bg-gradient-to-br from-blue-600 to-purple-600 shadow-xl flex items-center justify-center text-white text-6xl font-bold">
                  B
                </div>
              )}
              <div className="mt-5 font-bold text-xl">{t("name")}</div>
              <div className="text-sm text-slate-600">{t("real_name")}</div>
              <div className="text-sm text-slate-500 mb-4">{t("role")}</div>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A66C2] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Linkedin className="w-4 h-4" /> {t("linkedin_label")}
              </a>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">{t("background_title")}</h2>
              <ul className="space-y-4">
                {background.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-slate-700">
                    <Check className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Story */}
      <section className="relative z-10 container mx-auto px-6 py-12 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-balance">{t("story_title")}</h2>
        <div className="space-y-5 text-lg text-slate-700 leading-relaxed">
          {story.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* How I work */}
      <section className="relative z-10 container mx-auto px-6 py-12 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{t("how_title")}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {how.map((h) => (
            <GlassCard key={h.title}>
              <h3 className="text-lg font-bold mb-2">{h.title}</h3>
              <p className="text-slate-600 leading-relaxed">{h.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Availability */}
      <section className="relative z-10 container mx-auto px-6 py-12 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{t("availability_title")}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {availability.map((a, i) => {
            const Icon = AVAILABILITY_ICONS[i % AVAILABILITY_ICONS.length];
            return (
              <div key={a.title} className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-xl">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/10 text-blue-300 mb-4">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-bold mb-2">{a.title}</h3>
                <p className="text-slate-300 leading-relaxed">{a.desc}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-10 flex items-start gap-3 text-slate-500 max-w-2xl mx-auto">
          <Info className="w-5 h-5 shrink-0 mt-0.5 text-slate-400" />
          {t("studio_note")}
        </p>
      </section>

      <div className="h-12" />
      <DarkCta title={t("cta_title")} button={t("cta_btn")} />
    </div>
  );
}
