import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Palette, Code2, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { getTranslations } from 'next-intl/server'; // ✅ เปลี่ยนมาใช้ Server-side
import { agencyMetadata } from "@/components/agency/shared";

type ChecklistKey =
  | 'checklist_item_1'
  | 'checklist_item_2'
  | 'checklist_item_3'
  | 'checklist_item_4'
  | 'checklist_item_5'
  | 'checklist_item_6';

type StarterStep = { when: string; title: string; desc: string };

const CHECKLIST_KEYS: ChecklistKey[] = [
  'checklist_item_1',
  'checklist_item_2',
  'checklist_item_3',
  'checklist_item_4',
  'checklist_item_5',
  'checklist_item_6',
];

// ✅ รับ params มาเป็น Promise ตามระเบียบ Next.js 15+
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return agencyMetadata(locale, "Process", "/process");
}

export default async function ProcessPage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  // ✅ await params เพื่อดึง locale
  const { locale } = await params;
  
  // ✅ ใช้ getTranslations แทน useTranslations
  const t = await getTranslations('Process');
  const starterSteps = t.raw('starter_steps') as StarterStep[];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] animate-pulse-slow mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] animate-pulse-slow delay-700 mix-blend-multiply" />
      </div>

      <section className="relative z-10 py-32 px-6 md:px-12 lg:px-24 text-center pt-40">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs md:text-sm font-bold tracking-wider mb-6 uppercase border border-blue-100">
            {t('badge')}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900 leading-tight whitespace-pre-line text-balance">
            {t('hero_title_1')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {t('hero_title_highlight')}
            </span>
            {t('hero_title_2')}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto text-balance">
            {t('hero_subtitle')}
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-6xl mx-auto relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-emerald-200 md:-translate-x-1/2 hidden md:block" />
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 md:hidden" />

            <div className="space-y-12 md:space-y-24 relative">
                
                {/* Step 1: Discover */}
                <div className="relative flex flex-col md:flex-row items-center justify-between group">
                    <div className="hidden md:block w-5/12" />
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Search className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="w-full md:w-5/12 pl-24 md:pl-0 md:text-left">
                        <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-blue-200">
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('step1_title')}</h3>
                            <p className="text-slate-600 leading-relaxed">{t('step1_desc')}</p>
                        </div>
                    </div>
                </div>

                {/* Step 2: Design */}
                <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
                    <div className="hidden md:block w-5/12" />
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-purple-100 flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Palette className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="w-full md:w-5/12 pl-24 md:pl-0 md:pr-0 text-left md:text-right">
                        <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-purple-200">
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('step2_title')}</h3>
                            <p className="text-slate-600 leading-relaxed">{t('step2_desc')}</p>
                        </div>
                    </div>
                </div>

                {/* Step 3: Develop */}
                <div className="relative flex flex-col md:flex-row items-center justify-between group">
                    <div className="hidden md:block w-5/12" />
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-indigo-100 flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Code2 className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="w-full md:w-5/12 pl-24 md:pl-0 md:text-left">
                        <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-indigo-200">
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('step3_title')}</h3>
                            <p className="text-slate-600 leading-relaxed">{t('step3_desc')}</p>
                        </div>
                    </div>
                </div>

                {/* Step 4: Deploy */}
                <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
                    <div className="hidden md:block w-5/12" />
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-slate-900 border-4 border-emerald-400 flex items-center justify-center z-10 shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                        <Rocket className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="w-full md:w-5/12 pl-24 md:pl-0 md:pr-0 text-left md:text-right">
                        <div className="bg-slate-900 p-8 rounded-[2rem] shadow-2xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden border border-slate-700">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10" />
                            <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{t('step4_title')}</h3>
                            <p className="text-slate-300 leading-relaxed relative z-10">{t('step4_desc')}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* Starter: the same process, compressed into one week */}
      <section className="relative z-10 px-6 pb-8">
        <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-10 shadow-lg">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wider uppercase border border-emerald-100 mb-4">
                {t('starter_badge')}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{t('starter_title')}</h2>
            <p className="text-slate-600 mb-8">{t('starter_subtitle')}</p>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {starterSteps.map((step) => (
                    <li key={step.when} className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">{step.when}</div>
                        <div className="font-bold text-slate-900 mb-1">{step.title}</div>
                        <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                    </li>
                ))}
            </ol>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-xs text-slate-500">{t('starter_note')}</p>
                <Link href={`/${locale}/pricing`} className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-purple-700 transition-colors group">
                    {t('starter_link')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="relative z-10 py-24 px-6 bg-white/40 backdrop-blur-sm border-y border-white/50 my-12">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">{t('checklist_title')}</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {CHECKLIST_KEYS.map((key) => (
                    <div key={key} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                        <span className="font-medium text-slate-700">{t(key)}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-10 px-6 text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">{t('cta_title')}</h2>
            <a href="https://calendly.com/command-palette-th/45min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-10 rounded-full text-lg bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20 group">
                    {t('cta_btn')} <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </a>
        </div>
      </section>
      
      <div className="h-20"></div>
    </div>
  );
}