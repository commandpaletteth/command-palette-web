import type { Metadata } from "next";
import { FileText, ShieldAlert } from "lucide-react"; // เพิ่ม ShieldAlert icon
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Terms of Service | Command & Palette",
  description: "Rules and regulations for using Command & Palette website.",
};

export default function TermsPage() {
  const t = useTranslations('Terms');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
      
      {/* === 1. Ambient Background === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] mix-blend-multiply delay-700" />
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-pink-200/20 blur-[100px] mix-blend-multiply delay-1000" />
      </div>

      {/* === 2. Hero Header === */}
      <section className="relative z-10 pt-40 pb-16 px-6 text-center md:text-left">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-tight">
              {t('hero_title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{t('hero_title_highlight')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
              {t('hero_subtitle')}
            </p>
            
            {/* Effective Date Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/60 text-sm font-medium text-slate-600 shadow-sm mt-4">
              <FileText className="w-4 h-4 text-purple-600" />
              {t('badge')}
            </div>
          </div>
        </div>
      </section>

      {/* === 3. Content Section === */}
      <div className="relative z-10 container mx-auto px-6 pb-24 max-w-4xl">
        <div className="space-y-8">
          
          {/* Section 1 */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4 text-slate-900">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-600 text-sm font-bold shadow-sm">1</span>
              {t('sec1_title')}
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {t('sec1_desc')}
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4 text-slate-900">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 text-purple-600 text-sm font-bold shadow-sm">2</span>
              {t('sec2_title')}
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {t('sec2_desc')}
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4 text-slate-900">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-100 text-pink-600 text-sm font-bold shadow-sm">3</span>
              {t('sec3_title')}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-lg">
              {t('sec3_desc')}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-slate-600 text-lg">
                <li>{t('sec3_li1')}</li>
                <li>{t('sec3_li2')}</li>
                <li>{t('sec3_li3')}</li>
            </ul>
          </div>

          {/* === Section 4: Acceptable Use Policy (NEW) === */}
          <div className="bg-white/80 backdrop-blur-xl border border-rose-100 rounded-[2.5rem] p-8 md:p-10 shadow-xl ring-1 ring-rose-200/50">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4 text-slate-900">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-100 text-rose-600 text-sm font-bold shadow-sm">4</span>
              {t('sec4_title')}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6 text-lg font-medium">
              {t('sec4_desc')}
            </p>
            <div className="bg-rose-50/50 rounded-2xl p-6 border border-rose-100">
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <ShieldAlert className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-lg">{t('sec4_li1')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <ShieldAlert className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-lg">{t('sec4_li2')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <ShieldAlert className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-lg">{t('sec4_li3')}</span>
                    </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-rose-200/60">
                    <p className="text-rose-700/80 text-sm italic font-medium">
                        {t('sec4_note')}
                    </p>
                </div>
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