import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Privacy Policy | Command & Palette",
  description: "How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  const t = useTranslations('Privacy');

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
            {/* 🟢 แก้ตรงนี้: เอา leading-tight ออก + เพิ่ม py-2 กันสระโดนตัด */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 py-2">
              {t('hero_title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{t('hero_title_highlight')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
              {t('hero_subtitle')}
            </p>
            
            {/* Effective Date Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/60 text-sm font-medium text-slate-600 shadow-sm mt-4">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              {t('badge')}
            </div>
          </div>
        </div>
      </section>

      {/* === 3. Content Section === */}
      <div className="relative z-10 container mx-auto px-6 pb-24 max-w-4xl">
        <div className="space-y-12">
          
          {/* Section 1: Introduction */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-4 text-slate-900">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-600 text-sm font-bold shadow-sm">1</span>
              {t('sec1_title')}
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
               {t('sec1_desc')}
            </p>
          </div>

          {/* Section 2: Data Collection */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-4 text-slate-900">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 text-purple-600 text-sm font-bold shadow-sm">2</span>
              {t('sec2_title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Box 1 */}
              <div className="p-8 rounded-3xl bg-white/50 border border-white/60 hover:bg-white/70 transition-colors">
                <div className="text-3xl mb-4">✍️</div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg">{t('sec2_box1_title')}</h3>
                <ul className="text-slate-600 space-y-2 list-disc list-inside">
                  <li>{t('sec2_box1_li1')}</li>
                  <li>{t('sec2_box1_li2')}</li>
                  <li>{t('sec2_box1_li3')}</li>
                </ul>
              </div>
              {/* Box 2 */}
              <div className="p-8 rounded-3xl bg-white/50 border border-white/60 hover:bg-white/70 transition-colors">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg">{t('sec2_box2_title')}</h3>
                <ul className="text-slate-600 space-y-2 list-disc list-inside">
                  <li><strong>{t('sec2_box2_li1_bold')}</strong>{t('sec2_box2_li1_text')}</li>
                  <li>{t('sec2_box2_li2')}</li>
                  <li>{t('sec2_box2_li3')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Usage & Sharing */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
             <h2 className="text-2xl font-bold mb-8 flex items-center gap-4 text-slate-900">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-100 text-pink-600 text-sm font-bold shadow-sm">3</span>
              {t('sec3_title')}
            </h2>
            
            <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 rounded-2xl bg-white/40 border border-white/50">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <p className="text-slate-700 leading-relaxed font-medium">{t('sec3_li1')}</p>
                </div>
                <div className="flex gap-4 items-start p-4 rounded-2xl bg-white/40 border border-white/50">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <p className="text-slate-700 leading-relaxed font-medium">
                        {t('sec3_li2_text')} <strong>{t('sec3_li2_bold')}</strong>.
                    </p>
                </div>
            </div>

            <div className="mt-10 p-8 bg-slate-100/80 rounded-3xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-lg">
                    {t('sec3_note_title')}
                </h3>
                <p className="text-slate-600">
                    {t('sec3_note_desc')}
                </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center pt-8">
            <p className="text-slate-500 mb-8 font-medium">
              {t('footer_note')} <a href="mailto:info@command-palette.co" className="text-blue-600 hover:underline font-bold">info@command-palette.co</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}