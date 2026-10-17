import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code2, Cpu, Palette, ChevronRight, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from 'next-intl';
import { agencyMetadata } from "@/components/agency/shared";
import { contactHref } from "@/lib/contact";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return agencyMetadata(locale, "Services", "/services");
}

export default function ServicesPage() {
  const t = useTranslations('Services');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
       
       {/* === 1. Ambient Background === */}
       <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] animate-pulse-slow mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] animate-pulse-slow delay-700 mix-blend-multiply" />
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-pink-200/20 blur-[100px] animate-pulse-slow delay-1000 mix-blend-multiply" />
      </div>

      {/* === 2. Hero Section === */}
      <section className="relative z-10 pt-40 pb-20 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs md:text-sm font-bold tracking-wider mb-6 uppercase border border-blue-100">
            {t('badge')}
        </div>
        
        {/* 🟢 แก้ไข: ใช้ leading-[1.5] + inline-block py-6 (เผื่อเยอะๆ เลย) */}
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.5] text-balance">
             {t('hero_title_1')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 inline-block py-6 px-1 -my-6">
                {t('hero_title_highlight')}
            </span>
            {t('hero_title_2')}
        </h1>
        
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">
            {t('hero_subtitle')}
        </p>
      </section>

      {/* === 3. Services Grid === */}
      <section className="relative z-10 container mx-auto px-6 pb-32 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-[2rem] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
                <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
                    <Palette className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('card1_title')}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                    {t('card1_desc')}
                </p>
            </div>
            {/* Card 2 */}
            <div className="bg-slate-900 p-8 rounded-[2rem] shadow-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col border border-slate-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full" />
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-300 mb-6 group-hover:scale-110 transition-transform relative z-10 border border-slate-700">
                    <Code2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{t('card2_title')}</h3>
                <p className="text-slate-300 mb-8 leading-relaxed flex-grow relative z-10">
                    {t('card2_desc')}
                </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-[2rem] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                    <Cpu className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('card3_title')}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                    {t('card3_desc')}
                </p>
            </div>
        </div>
        <div className="mt-12 text-center">
            <Link href={`/${locale}/process`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 text-blue-700 text-sm md:text-base font-bold border border-blue-100 shadow-sm hover:bg-blue-100 hover:border-blue-200 transition-colors group">
                {t('process_link')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
      </section>

      {/* === 4. CTA === */}
      <section className="relative z-10 py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t('cta_title')}</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto text-lg text-balance">{t('cta_subtitle')}</p>
        <a href={contactHref(locale)} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-slate-900 hover:bg-slate-800 text-white shadow-xl transition-transform hover:scale-105 group">
                {t('cta_btn')} <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
        </a>
      </section>
      
      <div className="h-20"></div>
    </div>
  );
}