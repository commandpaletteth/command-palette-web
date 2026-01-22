import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Command, Palette, Zap, Database, Bot } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
      
      {/* === 1. Ambient Background (พื้นหลังกระจก Fluid แบบหน้า Home) === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] animate-pulse-slow mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] animate-pulse-slow delay-700 mix-blend-multiply" />
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-pink-200/20 blur-[100px] animate-pulse-slow delay-1000 mix-blend-multiply" />
      </div>

      {/* Navbar Back Button (เพื่อให้มีทางกลับบ้านสวยๆ) */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
            <Button variant="ghost" className="bg-white/40 backdrop-blur-md hover:bg-white/60 rounded-full gap-2 text-slate-700 border border-white/50 shadow-sm">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
        </Link>
      </div>

      {/* === 2. Hero Section === */}
      <section className="relative z-10 py-32 px-6 md:px-12 lg:px-24 text-center md:text-left">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900 leading-tight">
            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Logic</span> Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Creativity</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We don&apos;t just build websites. We engineer <span className="font-bold text-slate-900">digital assets</span> that work for you while you sleep.
          </p>
        </div>
      </section>

      {/* === 3. The Philosophy Section (Split - Glass Cards) === */}
      <section className="relative z-10 py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Command Side */}
          <div className="bg-white/40 backdrop-blur-xl border border-white/50 p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <div className="w-16 h-16 bg-blue-100/80 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Command className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Command</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Represents the logic, the code, the structure, and the <strong>engineering precision</strong> required to build high-performance systems. We obsess over milliseconds because speed is the new currency.
            </p>
          </div>

          {/* Palette Side */}
          <div className="bg-white/40 backdrop-blur-xl border border-white/50 p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <div className="w-16 h-16 bg-purple-100/80 rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Palette className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Palette</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Represents the artistry, the user experience, the emotion, and the <strong>design thinking</strong> that connects with human beings. A fast website is meaningless if it lacks soul.
            </p>
          </div>
        </div>
      </section>

    {/* === 4. Mission & Values (Glass Tiles - Fixed Visibility) === */}
    <section className="relative z-10 py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-slate-900">Our Mission: Stop Renting, Start Owning.</h2>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Value 1 */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4 text-blue-600"><Zap className="w-8 h-8" /></div>
            <h3 className="font-bold text-xl text-slate-900 mb-3">Obsessed with Performance</h3>
            <p className="text-slate-600">We don&apos;t tolerate slow. Every line of code is optimized for speed and SEO.</p>
          </div>

          {/* Value 2 */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
             <div className="mb-4 text-purple-600"><Database className="w-8 h-8" /></div>
            <h3 className="font-bold text-xl text-slate-900 mb-3">Data-Driven Design</h3>
            <p className="text-slate-600">We don&apos;t guess. We use logic and user data to drive every pixel.</p>
          </div>

          {/* Value 3 */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
             <div className="mb-4 text-pink-600"><Bot className="w-8 h-8" /></div>
            <h3 className="font-bold text-xl text-slate-900 mb-3">AI-First Approach</h3>
            <p className="text-slate-600">We integrate AI to automate the mundane, so you can focus on the extraordinary.</p>
          </div>
        </div>
      </section>

      {/* === 5. CTA (Glass Card Style) === */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto bg-slate-900/5 backdrop-blur-sm border border-slate-900/10 rounded-[3rem] p-12 text-center overflow-hidden relative">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl -z-10" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Ready to Build Your Digital Asset?</h2>
            <p className="text-xl mb-10 text-slate-600">The future belongs to those who build it.</p>
            <Link href="/">
                <Button size="lg" className="h-14 px-10 rounded-full text-lg bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20">
                    Start Your Project
                </Button>
            </Link>
        </div>
      </section>
      
      {/* Footer Space */}
      <div className="h-20"></div>
    </div>
  );
}