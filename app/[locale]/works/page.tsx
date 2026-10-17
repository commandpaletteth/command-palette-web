import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, Smartphone, Globe, Hammer, ArrowRight } from "lucide-react";
import { getTranslations } from 'next-intl/server';
import { agencyMetadata } from "@/components/agency/shared";
import { contactHref } from "@/lib/contact";

// Kado on the Chrome Web Store
const KADO_STORE_URL = "https://chromewebstore.google.com/detail/hlpahcjndodkppkeicpgoblnjokjkece";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return agencyMetadata(locale, "Works", "/works");
}

export default async function WorksPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations('Works');
  const tk = await getTranslations('WorksKado');

  const imgUnlocked = "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop";
  const imgGirls = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] animate-pulse-slow mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] animate-pulse-slow delay-700 mix-blend-multiply" />
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-pink-200/20 blur-[100px] animate-pulse-slow delay-1000 mix-blend-multiply" />
      </div>

      <section className="relative z-10 pt-40 pb-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs md:text-sm font-bold tracking-wider mb-6 uppercase border border-purple-100">
            {t('badge')}
        </div>
        <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight text-balance">
            {t('hero_title_1')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500">
                {t('hero_title_highlight')}
            </span>
            {t('hero_title_2')}
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">
            {t('hero_subtitle')}
        </p>
      </section>

      <section className="relative z-10 container mx-auto px-6 pb-32 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

            {/* Project 1: Unlocked Journey */}
            <div className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative group border border-slate-800">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2 order-2 md:order-1">
                        <div className="flex flex-wrap items-center gap-2 mb-6">
                            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[10px] md:text-xs font-bold border border-blue-500/30 tracking-wide">LATEST WORK</span>
                            <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 text-[10px] md:text-xs font-bold border border-white/10 tracking-wide">{t('project_1_tag')}</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">{t('project_1_title')}</h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-md">{t('project_1_desc')}</p>
                        <div className="flex flex-wrap gap-3 mb-10">
                            <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs md:text-sm flex items-center gap-2">
                                <Zap className="w-3 h-3 text-yellow-400" /> Next.js
                            </div>
                            <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs md:text-sm flex items-center gap-2">
                                <Smartphone className="w-3 h-3 text-blue-400" /> Responsive
                            </div>
                            <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs md:text-sm flex items-center gap-2">
                                <Globe className="w-3 h-3 text-green-400" /> SEO Ready
                            </div>
                        </div>
                        <a href="https://unlocked-journey.vercel.app" target="_blank" rel="noopener noreferrer">
                            <Button className="bg-white text-slate-900 hover:bg-slate-200 rounded-full px-8 h-12 font-bold transition-transform hover:scale-105">
                                {t('btn_visit')} <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                        </a>
                    </div>
                    <div className="md:w-1/2 w-full order-1 md:order-2">
                        <a href="https://unlocked-journey.vercel.app" target="_blank" rel="noopener noreferrer"
                          className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 group-hover:scale-[1.02] transition-transform duration-500 rotate-1 group-hover:rotate-0 block">
                            <div className="relative w-full aspect-video">
                                <Image
                                  src={imgUnlocked}
                                  alt={t('project_1_title')}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  priority
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Project 2: One for the Girls */}
            <div className="group rounded-[2.5rem] bg-white border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col relative h-full">
                <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                    <Image
                      src={imgGirls}
                      alt={t('project_2_title')}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-6 left-8 z-20">
                        <span className="px-3 py-1 rounded-full bg-[#B85C5C] text-white text-[10px] font-bold tracking-wide mb-3 inline-block shadow-sm">
                            {t('project_2_tag')}
                        </span>
                        <h3 className="text-2xl font-bold text-white drop-shadow-md tracking-tight">{t('project_2_title')}</h3>
                    </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{t('project_2_desc')}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        <span className="text-xs font-semibold px-3 py-1 bg-rose-50 text-rose-600 rounded-full border border-rose-100">Tailwind CSS</span>
                        <span className="text-xs font-semibold px-3 py-1 bg-rose-50 text-rose-600 rounded-full border border-rose-100">Glassmorphism</span>
                    </div>
                    <a href="https://one-for-the-girls.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full rounded-full border-slate-200 hover:bg-[#B85C5C] hover:text-white hover:border-[#B85C5C] transition-all group-hover:shadow-lg h-12">
                            {t('btn_visit')} <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                    </a>
                </div>
            </div>

            {/* Project 3: Kado (own product) */}
            <div className="group rounded-[2.5rem] bg-white border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col relative h-full">
                <a href={KADO_STORE_URL} target="_blank" rel="noopener noreferrer" className="relative h-64 overflow-hidden bg-[#f4f3ef] block">
                    <Image
                      src="/images/works/kado.png"
                      alt={tk('title')}
                      fill
                      className="object-cover object-left-top group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div className="absolute bottom-6 left-8 z-20">
                        <span className="px-3 py-1 rounded-full bg-emerald-700 text-white text-[10px] font-bold tracking-wide mb-3 inline-block shadow-sm">
                            {tk('tag')}
                        </span>
                        <h3 className="text-2xl font-bold text-white drop-shadow-md tracking-tight">{tk('title')}</h3>
                    </div>
                </a>
                <div className="p-8 flex flex-col flex-grow">
                    <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{tk('desc')}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        <span className="text-xs font-semibold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">{tk('chip_1')}</span>
                        <span className="text-xs font-semibold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">{tk('chip_2')}</span>
                        <span className="text-xs font-semibold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">{tk('chip_3')}</span>
                    </div>
                    {KADO_STORE_URL && (
                      <a href={KADO_STORE_URL} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="w-full rounded-full border-slate-200 hover:bg-emerald-700 hover:text-white hover:border-emerald-700 transition-all group-hover:shadow-lg h-12">
                              {tk('btn')} <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                      </a>
                    )}
                </div>
            </div>

            {/* Coming Soon Section */}
            <div className="md:col-span-2 group rounded-[2.5rem] bg-slate-100/50 border-2 border-dashed border-slate-200 overflow-hidden flex flex-col items-center justify-center text-center p-12 min-h-[320px] hover:bg-slate-100/80 transition-colors h-full">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Hammer className="w-8 h-8 text-slate-400" />
                </div>
                <h4 className="text-2xl font-bold text-slate-500 mb-3 whitespace-pre-line">{t('coming_soon_title')}</h4>
                <p className="text-slate-400 max-w-xs mx-auto whitespace-pre-line mb-8 leading-relaxed">{t('coming_soon_desc')}</p>
                <a href={contactHref(locale)} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="rounded-full border-slate-300 text-slate-500 hover:text-slate-800 hover:border-slate-800 bg-transparent h-12 px-8">
                        {t('coming_soon_btn')}
                    </Button>
                </a>
            </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 bg-slate-900 text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">{t('cta_title')}</h2>
            <p className="text-slate-400 mb-10 text-xl leading-relaxed">{t('cta_subtitle')}</p>
            <a href={contactHref(locale)} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200 rounded-full px-10 h-14 font-bold shadow-lg transition-transform hover:scale-105 text-lg group">
                    {t('cta_btn')} <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/>
                </Button>
            </a>
        </div>
      </section>
    </div>
  );
}