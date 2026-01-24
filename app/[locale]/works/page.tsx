import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, Smartphone, Globe, Hammer } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function WorksPage() {
  const t = useTranslations('Works');

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
      
      {/* === 1. Background === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-blue-100/40 blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[20%] w-[50vw] h-[50vw] rounded-full bg-purple-100/40 blur-[120px] mix-blend-multiply" />
      </div>

      {/* === 2. Header === */}
      <section className="relative z-10 pt-40 pb-16 px-6 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-600 text-sm font-bold tracking-wide mb-6 border border-purple-100">
            {t('badge')}
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {t('hero_title_1')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {t('hero_title_highlight')}
            </span>
            {t('hero_title_2')}
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('hero_subtitle')}
        </p>
      </section>

      {/* === 3. Showcase Grid === */}
      <section className="relative z-10 container mx-auto px-6 pb-32 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">

            {/* Hero Project */}
            <div className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">LATEST WORK</span>
                            <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-bold border border-white/10">TRAVEL PLATFORM</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Unlocked Journey</h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            A Hand-picked Boutique Travel Curator.
                        </p>
                        <div className="flex flex-wrap gap-3 mb-10">
                            <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm flex items-center gap-2">
                                <Zap className="w-3 h-3 text-yellow-400" /> Next.js
                            </div>
                            <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm flex items-center gap-2">
                                <Smartphone className="w-3 h-3 text-blue-400" /> Responsive
                            </div>
                            <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm flex items-center gap-2">
                                <Globe className="w-3 h-3 text-green-400" /> SEO Ready
                            </div>
                        </div>
                        <a href="https://unlocked-journey.vercel.app" target="_blank" rel="noopener noreferrer">
                            <Button className="bg-white text-slate-900 hover:bg-slate-200 rounded-full px-6 h-12 font-bold">
                                {t('btn_visit')} <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                        </a>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <a href="https://unlocked-journey.vercel.app" target="_blank" rel="noopener noreferrer" className="block rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 group-hover:scale-[1.02] transition-transform duration-500">
                             <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop" alt="Unlocked Diving" className="w-full h-full object-cover aspect-video"/>
                        </a>
                    </div>
                </div>
            </div>

            {/* Work In Progress Box */}
            <div className="group rounded-[2.5rem] bg-white/50 border border-slate-200 border-dashed border-2 overflow-hidden flex flex-col items-center justify-center text-center p-12 min-h-[300px] hover:bg-white/80 transition-colors">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Hammer className="w-8 h-8 text-slate-400" />
                </div>
                <h4 className="text-2xl font-bold text-slate-400 mb-2 whitespace-pre-line">{t('coming_soon_title')}</h4>
                <p className="text-slate-500 max-w-xs mx-auto whitespace-pre-line">{t('coming_soon_desc')}</p>
                <div className="mt-8">
                     <a href="https://calendly.com/command-palette-th/45min" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="rounded-full border-slate-300 text-slate-600 hover:text-slate-900">{t('coming_soon_btn')}</Button>
                     </a>
                </div>
            </div>

        </div>
      </section>

      {/* === 4. CTA === */}
      <section className="relative z-10 py-20 px-6 bg-slate-900 text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('cta_title')}</h2>
            <p className="text-slate-300 mb-8 text-lg">{t('cta_subtitle')}</p>
            <a href="https://calendly.com/command-palette-th/45min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200 rounded-full px-8 h-12 font-bold shadow-lg">{t('cta_btn')}</Button>
            </a>
        </div>
      </section>
    </div>
  );
}