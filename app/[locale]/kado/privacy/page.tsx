import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, HardDrive, KeyRound, CreditCard, BarChart3 } from "lucide-react";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Kado Privacy Policy | Command & Palette",
  description: "What data the Kado Chrome extension handles, and what it never collects.",
};

const SUPPORT_EMAIL = "support@command-palette.co";

export default function KadoPrivacyPage() {
  const t = useTranslations("KadoPrivacy");

  const outbound = [
    { icon: KeyRound, key: "license", color: "bg-purple-100 text-purple-600" },
    { icon: CreditCard, key: "purchase", color: "bg-pink-100 text-pink-600" },
    { icon: BarChart3, key: "stats", color: "bg-amber-100 text-amber-600" },
  ] as const;

  const permissions = ["sidePanel", "storage", "tabs", "contextMenus", "alarms", "notifications"] as const;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
      {/* === 1. Ambient Background === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] mix-blend-multiply delay-700" />
      </div>

      {/* === 2. Hero Header === */}
      <section className="relative z-10 pt-40 pb-16 px-6 text-center md:text-left">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 py-2">
              {t("hero_title_1")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {t("hero_title_highlight")}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">{t("hero_subtitle")}</p>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/60 text-sm font-medium text-slate-600 shadow-sm mt-4">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              {t("badge")}
            </div>
          </div>
        </div>
      </section>

      {/* === 3. Content === */}
      <div className="relative z-10 container mx-auto px-6 pb-24 max-w-4xl">
        <div className="space-y-12">
          {/* Section 1: Local-first */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-4 text-slate-900">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-600 text-sm font-bold shadow-sm">1</span>
              {t("sec1_title")}
            </h2>
            <div className="flex gap-4 items-start">
              <HardDrive className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <p className="text-slate-600 leading-relaxed text-lg">{t("sec1_desc")}</p>
            </div>
          </div>

          {/* Section 2: What leaves your device */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-4 text-slate-900">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 text-purple-600 text-sm font-bold shadow-sm">2</span>
              {t("sec2_title")}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">{t("sec2_intro")}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {outbound.map(({ icon: Icon, key, color }, i) => (
                <div
                  key={key}
                  className={`p-8 rounded-3xl bg-white/50 border border-white/60 hover:bg-white/70 transition-colors ${
                    i === outbound.length - 1 && outbound.length % 2 === 1 ? "md:col-span-2" : ""
                  }`}
                >
                  <span className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl mb-4 ${color}`}>
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">{t(`sec2_${key}_title`)}</h3>
                  <p className="text-slate-600 leading-relaxed">{t(`sec2_${key}_desc`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: What we don't do */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-4 text-slate-900">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-100 text-pink-600 text-sm font-bold shadow-sm">3</span>
              {t("sec3_title")}
            </h2>
            <div className="space-y-4">
              {(["li1", "li2", "li3", "li4"] as const).map((k) => (
                <div key={k} className="flex gap-4 items-start p-4 rounded-2xl bg-white/40 border border-white/50">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-slate-700 leading-relaxed font-medium">{t(`sec3_${k}`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Permissions */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-4 text-slate-900">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 text-amber-600 text-sm font-bold shadow-sm">4</span>
              {t("sec4_title")}
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {permissions.map((p) => (
                <li key={p} className="p-5 rounded-2xl bg-white/50 border border-white/60">
                  <code className="text-sm font-bold text-purple-700">{p}</code>
                  <p className="text-slate-600 mt-1 leading-relaxed">{t(`perm_${p}`)}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5: Changes */}
          <div className="p-8 bg-slate-100/80 rounded-3xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">{t("sec5_title")}</h3>
            <p className="text-slate-600">{t("sec5_desc")}</p>
          </div>

          {/* Footer Note */}
          <div className="text-center pt-8">
            <p className="text-slate-500 mb-8 font-medium">
              {t("footer_note")}{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 hover:underline font-bold">
                {SUPPORT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
