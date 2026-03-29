import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Bot, ArrowRight, Sparkles, XCircle, CheckCircle2, ShieldCheck, MessageSquare, Workflow, PenTool } from "lucide-react";
import { useMessages, NextIntlClientProvider } from 'next-intl'; // ใช้ NextIntlClientProvider ช่วยถ้าจำเป็น
import { getTranslations } from 'next-intl/server'; // ใช้เวอร์ชัน Server-side

// ✅ ต้องประกาศ Type ของ params เป็น Promise เสมอสำหรับ Next.js 15+
export default async function Home({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  // ✅ สเต็ป 1: await params ก่อนทำอย่างอื่น
  const { locale } = await params;

  // ✅ สเต็ป 2: ใช้ getTranslations (Server-side) แทน useTranslations (Client-side)
  // วิธีนี้จะแม่นยำกว่าและไม่ทำให้ React Server Component เอ๋อ
  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] animate-pulse-slow mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] animate-pulse-slow delay-700 mix-blend-multiply" />
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-pink-200/20 blur-[100px] animate-pulse-slow delay-1000 mix-blend-multiply" />
      </div>

      <section className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-16">
        <div className="text-center max-w-5xl mx-auto mb-12">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-sm mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-slate-700">{t('Hero.badge')}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-tight text-balance">
            {t('Hero.title_part1')} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 drop-shadow-[0_2px_10px_rgba(192,38,211,0.2)]">
              {t('Hero.title_part2')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-800 font-semibold max-w-3xl mx-auto leading-relaxed mb-4 text-balance">
            {t('Hero.subtitle')}
          </p>

          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-normal mb-10 text-balance opacity-90">
            {t('Hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <a href="https://calendly.com/command-palette-th/45min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-8 rounded-full text-lg bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20 transition-all hover:scale-105">
                    {t('Hero.cta_consult')}
                </Button>
             </a>
             <Link href={`/${locale}/works`}>
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-lg border-slate-300 bg-white/40 hover:bg-white/60 text-slate-700 backdrop-blur-sm group transition-all">
                    {t('Hero.cta_work')} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                </Button>
             </Link>
          </div>
        </div>

        {/* Tech Trust Section */}
        <div className="w-full max-w-4xl mx-auto border-t border-white/40 pt-8 pb-4">
            <p className="text-center text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">
                {t('Hero.tech_trust')}
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-slate-800" /> <span className="font-semibold text-slate-800">Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-slate-800" /> <span className="font-semibold text-slate-800">Vercel</span>
                </div>
                <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-slate-800" /> <span className="font-semibold text-slate-800">OpenAI</span>
                </div>
            </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="relative z-10 py-20 px-6 bg-white/20 backdrop-blur-sm border-y border-white/40">
        <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t('Difference.title')}</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t('Difference.subtitle')}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Generic Agency Card */}
                <div className="p-8 rounded-[2.5rem] bg-red-50/50 border border-red-100/50 backdrop-blur-md opacity-80 hover:opacity-100 transition-opacity">
                    <h3 className="text-xl font-bold text-red-900/70 mb-6 flex items-center gap-2">
                        <XCircle className="w-6 h-6" /> {t('Difference.generic_title')}
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex gap-3 text-red-900/60">
                            <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                            <span><strong>{t('Difference.generic_1_title')}</strong> {t('Difference.generic_1_desc')}</span>
                        </li>
                        <li className="flex gap-3 text-red-900/60">
                            <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                            <span><strong>{t('Difference.generic_2_title')}</strong> {t('Difference.generic_2_desc')}</span>
                        </li>
                        <li className="flex gap-3 text-red-900/60">
                            <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                            <span><strong>{t('Difference.generic_3_title')}</strong> {t('Difference.generic_3_desc')}</span>
                        </li>
                    </ul>
                </div>

                {/* Our Agency Card */}
                <div className="relative p-10 rounded-[2.5rem] bg-white/60 border border-white/80 shadow-2xl backdrop-blur-xl scale-105 md:scale-110 z-10">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                        RECOMMENDED
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <CheckCircle2 className="w-7 h-7 text-blue-600" /> {t('Difference.our_title')}
                    </h3>
                    <ul className="space-y-5">
                        <li className="flex gap-3 text-slate-700">
                            <CheckCircle2 className="w-6 h-6 shrink-0 text-blue-600 mt-0.5" />
                            <span><strong>{t('Difference.our_1_title')}</strong> {t('Difference.our_1_desc')}</span>
                        </li>
                        <li className="flex gap-3 text-slate-700">
                            <CheckCircle2 className="w-6 h-6 shrink-0 text-blue-600 mt-0.5" />
                            <span><strong>{t('Difference.our_2_title')}</strong> {t('Difference.our_2_desc')}</span>
                        </li>
                        <li className="flex gap-3 text-slate-700">
                            <CheckCircle2 className="w-6 h-6 shrink-0 text-blue-600 mt-0.5" />
                            <span><strong>{t('Difference.our_3_title')}</strong> {t('Difference.our_3_desc')}</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="mt-12 text-center">
                <Link href={`/${locale}/process`}>
                    <Button variant="ghost" className="text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-full gap-2 px-6 h-12 text-base">
                        {t('Difference.see_process_btn')} <ArrowRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="relative z-10 py-24 px-6 container mx-auto max-w-6xl">
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-bold mb-4">
                {t('AI.badge')}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 whitespace-pre-line">{t('AI.title')}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto whitespace-pre-line">{t('AI.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg hover:border-purple-200 transition-colors">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                    <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t('AI.card1_title')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t('AI.card1_desc')}</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                    <Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t('AI.card2_title')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t('AI.card2_desc')}</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg hover:border-pink-200 transition-colors">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mb-6">
                    <PenTool className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t('AI.card3_title')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t('AI.card3_desc')}</p>
            </div>
        </div>
      </section>
      
    </div>
  );
}