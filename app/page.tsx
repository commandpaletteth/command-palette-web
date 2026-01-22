import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, PenTool, Rocket, Sparkles, Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100/50 overflow-hidden relative">
      
      {/* === 1. Ambient Background Layers (พื้นหลัง Fluid Gradient แบบเดิมที่สวยแล้ว) === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] animate-pulse-slow mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] animate-pulse-slow delay-700 mix-blend-multiply" />
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-pink-200/20 blur-[100px] animate-pulse-slow delay-1000 mix-blend-multiply" />
      </div>

      {/* === 2. Floating Glass Navbar (เมนู Agency กลับมาแล้ว) === */}
      <header className="fixed top-6 inset-x-6 z-50">
        <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between 
                        rounded-full bg-white/40 backdrop-blur-xl border border-white/50 shadow-sm">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-slate-800 to-black rounded-xl flex items-center justify-center shadow-inner border border-white/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">CP</span>
            </div>
            <span className="text-lg font-semibold text-slate-800 tracking-tight">
              Command & Palette
            </span>
          </Link>

          {/* Desktop Menu (ลิงก์ Agency) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#" className="hover:text-slate-900 transition-colors">Services</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Our Work</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">About</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Contact</Link>
          </nav>

          {/* Call to Action */}
          <div className="flex items-center gap-3">
             <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5 text-slate-700" />
             </Button>
            <Button className="hidden md:inline-flex bg-slate-900/90 hover:bg-slate-800 text-white rounded-full px-6 shadow-lg shadow-slate-900/10 backdrop-blur-sm border border-slate-800/50">
              Start a Project
            </Button>
          </div>
        </div>
      </header>

      {/* === 3. Hero Section (Digital Agency Content) === */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        
        {/* Tagline */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-sm mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-slate-700">Digital Agency & Creative Studio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-tight">
            We craft digital experiences <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              that actually work.
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            From high-converting websites to branding that sticks. 
            We combine strategy, design, and technology to grow your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Button size="lg" className="h-14 px-8 rounded-full text-lg bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20">
                View Portfolio
             </Button>
             <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-lg border-slate-300 bg-white/40 hover:bg-white/60 text-slate-700 backdrop-blur-sm">
                Our Services
             </Button>
          </div>
        </div>

        {/* Hero Glass Card (แทนที่ Search Bar อันเก่า) */}
        <div className="w-full max-w-5xl relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-[2.5rem] blur-2xl opacity-60"></div>
            <div className="relative aspect-video rounded-[2rem] bg-white/40 backdrop-blur-md border border-white/60 shadow-2xl flex items-center justify-center overflow-hidden">
                {/* ใส่รูป Portfolio หรือ Hero Image ตรงนี้ */}
                <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                    alt="Agency Work" 
                    className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
            </div>
        </div>

      </section>

      {/* === 4. Services Section (Glass Tiles) === */}
      <section className="relative z-10 py-24 px-6">
        <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Expertise</h2>
                <p className="text-slate-600">Comprehensive digital solutions for modern brands.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Service 1: Web Design */}
                <div className="p-8 rounded-[2rem] bg-white/30 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                        <PenTool className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Brand & UI Design</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        We build visual identities that resonate. Clean, modern, and user-centric design language.
                    </p>
                    <Link href="#" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                 {/* Service 2: Development */}
                 <div className="p-8 rounded-[2rem] bg-white/30 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center text-purple-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                        <Code className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Web Development</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        High-performance websites built with Next.js and Tailwind. Fast, SEO-friendly, and scalable.
                    </p>
                    <Link href="#" className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                 {/* Service 3: Marketing */}
                 <div className="p-8 rounded-[2rem] bg-white/30 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center text-pink-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                        <Rocket className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Growth & Marketing</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Data-driven strategies to acquire customers. SEO, content marketing, and paid media.
                    </p>
                    <Link href="#" className="text-pink-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Footer Space */}
      <div className="h-20 relative z-10"></div>
    </div>
  );
}