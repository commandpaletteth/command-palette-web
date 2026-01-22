import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
      
      {/* === 1. Ambient Background (พื้นหลังกระจก Fluid) === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] animate-pulse-slow mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] animate-pulse-slow delay-700 mix-blend-multiply" />
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-pink-200/20 blur-[100px] animate-pulse-slow delay-1000 mix-blend-multiply" />
      </div>

      {/* Navbar Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
            <Button variant="ghost" className="bg-white/40 backdrop-blur-md hover:bg-white/60 rounded-full gap-2 text-slate-700 border border-white/50 shadow-sm">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
        </Link>
      </div>

      {/* === 2. Header Section === */}
      <section className="relative z-10 pt-32 pb-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-sm mb-6">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-slate-700">Digital Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Works</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-xl mx-auto">
                Crafting high-performance digital assets. <br/>
                Here are some of the projects we are proud of.
            </p>
        </div>
      </section>

      {/* === 3. Projects Grid === */}
      <section className="relative z-10 px-6 pb-24 container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Project Card 1: Unlocked Diving */}
            <a 
                href="https://unlocked-journey.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] border border-white/60 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
                {/* Image Layer */}
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop" 
                        alt="Unlocked Diving" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />
                </div>

                {/* Glass Overlay Info */}
                <div className="absolute inset-x-4 bottom-4 p-6 rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">Unlocked Diving</h3>
                        <p className="text-sm text-slate-600 font-medium">Travel & Experience Website</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                    </div>
                </div>
            </a>


            {/* Placeholder Card: Coming Soon */}
            <div className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-white/30 backdrop-blur-md border border-white/50 shadow-lg flex flex-col items-center justify-center text-center p-8 border-dashed border-2 border-white/60">
                <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center mb-4 shadow-sm animate-pulse-slow">
                    <Sparkles className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-500 mb-2">More Coming Soon</h3>
                <p className="text-slate-400 max-w-xs">
                    We are currently cooking up something special. Stay tuned.
                </p>
            </div>

        </div>
      </section>

    </div>
  );
}