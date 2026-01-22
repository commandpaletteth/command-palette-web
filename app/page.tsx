import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, PenTool, Rocket, Sparkles, Menu, Mail, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100/50 overflow-hidden relative flex flex-col">
      
      {/* === 1. Ambient Background Layers (พื้นหลัง Fluid Gradient) === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] animate-pulse-slow mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] animate-pulse-slow delay-700 mix-blend-multiply" />
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-pink-200/20 blur-[100px] animate-pulse-slow delay-1000 mix-blend-multiply" />
      </div>

      {/* === 2. Floating Glass Navbar === */}
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

          {/* Desktop Menu (ลิงก์ครบตามที่ขอ) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="/about" className="hover:text-slate-900 transition-colors">About Us</Link>
            <Link href="/works" className="hover:text-slate-900 transition-colors">Our Work</Link>
            <Link href="/services" className="hover:text-slate-900 transition-colors">Services</Link>
          </nav>

          {/* Actions (Calendly & Email) */}
          <div className="flex items-center gap-3">
             <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5 text-slate-700" />
             </Button>
            
            {/* ปุ่ม Email */}
            <a href="mailto:command.palette.th@gmail.com">
                <Button variant="ghost" size="icon" className="hidden md:inline-flex text-slate-600 hover:bg-white/50 rounded-full">
                    <Mail className="w-5 h-5" />
                </Button>
            </a>

            {/* ปุ่ม Calendly */}
            <a href="https://calendly.com/command-palette-th/45min" target="_blank" rel="noopener noreferrer">
                <Button className="bg-slate-900/90 hover:bg-slate-800 text-white rounded-full px-6 shadow-lg shadow-slate-900/10 backdrop-blur-sm border border-slate-800/50 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Book a Call
                </Button>
            </a>
          </div>
        </div>
      </header>

      {/* === 3. Hero Section === */}
      <section className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-20">
        
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
            Strategy, Design, and Development. All in one command.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link href="/works">
                <Button size="lg" className="h-14 px-8 rounded-full text-lg bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20">
                    View Our Work
                </Button>
             </Link>
             <a href="https://calendly.com/command-palette-th/45min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-lg border-slate-300 bg-white/40 hover:bg-white/60 text-slate-700 backdrop-blur-sm">
                    Schedule Consultation
                </Button>
             </a>
          </div>
        </div>

        {/* Hero Glass Card (Showcase) */}
        <div className="w-full max-w-5xl relative mt-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-[2.5rem] blur-2xl opacity-60"></div>
            <div className="relative aspect-video rounded-[2rem] bg-white/40 backdrop-blur-md border border-white/60 shadow-2xl flex items-center justify-center overflow-hidden group cursor-pointer">
                 {/* Link ไปดูงานจริง */}
                 <Link href="/works" className="absolute inset-0 z-10" />
                 
                <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                    alt="Agency Work" 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                
                <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/50 shadow-lg">
                    <p className="text-sm font-bold text-slate-900">Featured Project</p>
                    <p className="text-xs text-slate-600">Rebranding & Web Design</p>
                </div>
            </div>
        </div>

      </section>

      {/* === 4. Services Section (Glass Tiles) === */}
      <section className="relative z-10 py-24 px-6">
        <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
                {/* Service 1 */}
                <div className="p-8 rounded-[2rem] bg-white/30 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center text-blue-600 shadow-sm mb-6">
                        <PenTool className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Brand & UI</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        We build visual identities that resonate. Clean, modern, and user-centric.
                    </p>
                </div>

                 {/* Service 2 */}
                 <div className="p-8 rounded-[2rem] bg-white/30 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center text-purple-600 shadow-sm mb-6">
                        <Code className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Development</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                         Next.js, React, Tailwind. Fast, SEO-friendly, and scalable solutions.
                    </p>
                </div>

                 {/* Service 3 */}
                 <div className="p-8 rounded-[2rem] bg-white/30 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center text-pink-600 shadow-sm mb-6">
                        <Rocket className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Growth</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Data-driven strategies. SEO, content marketing, and analytics.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* === 5. Footer (กลับมาแล้ว!) === */}
      <footer className="relative z-10 mt-auto border-t border-white/20 bg-white/20 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                
                {/* Footer Logo & Copyright */}
                <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <div className="w-6 h-6 bg-slate-800 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs font-bold">CP</span>
                        </div>
                        <span className="font-bold text-slate-800">Command & Palette</span>
                    </div>
                    <p className="text-sm text-slate-500">
                        &copy; 2026 Command & Palette. All rights reserved.
                    </p>
                </div>

                {/* Footer Links (Privacy / Terms) */}
                <div className="flex gap-8 text-sm font-medium text-slate-600">
                    <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
                    <a href="mailto:command.palette.th@gmail.com" className="hover:text-slate-900 transition-colors">Contact Us</a>
                </div>

            </div>
        </div>
      </footer>

    </div>
  );
}