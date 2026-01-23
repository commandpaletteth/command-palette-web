import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, PenTool, Code2, Rocket, CheckCircle2, ChevronRight } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function ProcessPage() {
  const t = useTranslations('Process');

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
      
      {/* === 1. Ambient Background === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-blue-100/40 blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-purple-100/40 blur-[120px] mix-blend-multiply delay-1000" />
      </div>

      {/* === 2. Hero Section === */}
      <section className="relative z-10 pt-40 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-wide mb-6 border border-blue-100">
                {t('badge')}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight whitespace-pre-line">
                {t('hero_title_1')}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {t('hero_title_highlight')}
                </span>
                {t('hero_title_2')}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                {t('hero_subtitle')}
            </p>
        </div>
      </section>

      {/* === 3. The Timeline Process === */}
      <section className="relative z-10 pb-32 px-6 max-w-5xl mx-auto">
        <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-transparent -translate-x-1/2 md:translate-x-0" />

            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center mb-20 group">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('step1_title')}</h3>
                    <p className="text-slate-600 leading-relaxed">{t('step1_desc')}</p>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-blue-100 shadow-lg z-10 order-1 md:order-2 group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-8 h-8 text-blue-600" />
                </div>
                <div className="md:w-1/2 md:pl-12 order-3 hidden md:block"></div> 
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center mb-20 group">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div> 
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-purple-100 shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                    <PenTool className="w-8 h-8 text-purple-600" />
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left pl-16">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('step2_title')}</h3>
                    <p className="text-slate-600 leading-relaxed">{t('step2_desc')}</p>
                </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center mb-20 group">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 pl-16 md:pl-0">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('step3_title')}</h3>
                    <p className="text-slate-600 leading-relaxed">{t('step3_desc')}</p>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-cyan-100 shadow-lg z-10 order-1 md:order-2 group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-8 h-8 text-cyan-600" />
                </div>
                <div className="md:w-1/2 md:pl-12 order-3 hidden md:block"></div> 
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center mb-10 group">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div> 
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 shadow-xl z-10 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-8 h-8 text-white" />
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left pl-16">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('step4_title')}</h3>
                    <p className="text-slate-600 leading-relaxed">{t('step4_desc')}</p>
                </div>
            </div>
        </div>
      </section>

      {/* === 4. Checklist === */}
      <section className="relative z-10 py-20 px-6 bg-white/40 backdrop-blur-xl border-y border-white/50">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">{t('checklist_title')}</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
                {["Next.js Source Code Ownership", "Responsive Design", "SEO Optimization", "Vercel Hosting Setup", "Google Analytics", "1-Month Support"].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/60 border border-white/60 shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* === 5. CTA === */}
      <section className="relative z-10 py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t('cta_title')}</h2>
        <a href="https://calendly.com/command-palette-th/45min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full px-8 h-12 bg-slate-900 hover:bg-slate-800 text-white shadow-xl">
                {t('cta_btn')} <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
        </a>
      </section>
    </div>
  );
}