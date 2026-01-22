import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Database, Bot, ArrowRight, Menu, Sparkles, Mail, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
      
      {/* === 1. Ambient Background (พื้นหลังกระจก Fluid) === */}
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

          {/* Menu Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="/about" className="hover:text-slate-900 transition-colors">About</Link>
            <Link href="/works" className="hover:text-slate-900 transition-colors">Our Work</Link>
            <Link href="/services" className="hover:text-slate-900 transition-colors">Services</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
             <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5 text-slate-700" />
             </Button>
            
            {/* Mailto */}
            <a href="mailto:command.palette.th@gmail.com">
                <Button variant="ghost" size="icon" className="hidden md:inline-flex text-slate-600 hover:bg-white/50 rounded-full">
                    <Mail className="w-5 h-5" />
                </Button>
            </a>

            {/* Calendly */}
            <a href="https://calendly.com/command-palette-th/45min" target="_blank" rel="noopener noreferrer">
                <Button className="bg-slate-900/90 hover:bg-slate-800 text-white rounded-full px-6 shadow-lg shadow-slate-900/10 backdrop-blur-sm border border-slate-800/50 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Consult for Free
                </Button>
            </a>
          </div>
        </div>
      </header>

      {/* === 3. Hero Section (เนื้อหาเก่า ในดีไซน์ใหม่) === */}
      <section className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-20">
        
        <div className="text-center max-w-5xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-sm mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-slate-700">Digital Asset & Automation Agency</span>
          </div>
          
          {/* Headline (Content เดิม) */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-tight text-balance">
            We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">High-Performance</span> <br/>
            Websites & AI Automation
          </h1>
          
          {/* Subheadline (Content เดิม) */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal mb-10 text-balance">
            Stop renting your website. Start owning your digital asset.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <a href="https://calendly.com/command-palette-th/45min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-8 rounded-full text-lg bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20">
                    Consult for Free
                </Button>
             </a>
             <Link href="/works">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-lg border-slate-300 bg-white/40 hover:bg-white/60 text-slate-700 backdrop-blur-sm group">
                    View Our Work <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                </Button>
             </Link>
          </div>
        </div>

        {/* Feature Cards (แทนที่สีดำเดิม ด้วยกระจกใส) */}
        <div className="container mx-auto max-w-6xl mt-8">
            <div className="grid md:grid-cols-3 gap-8">
                
                {/* Feature 1: Lightning Speed (Content เดิม) */}
                <div className="p-8 rounded-[2rem] bg-white/30 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center text-purple-600 shadow-sm mb-6">
                        <Zap className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Lightning Speed</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Built with Next.js for unparalleled performance. Your site loads instantly, keeping visitors engaged.
                    </p>
                </div>

                 {/* Feature 2: Digital Ownership (จาก copy: Stop renting) */}
                 <div className="p-8 rounded-[2rem] bg-white/30 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center text-blue-600 shadow-sm mb-6">
                        <Database className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">100% Ownership</h3>
                    <p className="text-slate-600 leading-relaxed">
                         No monthly platform fees. You own the code, the data, and the asset. Stop renting, start owning.
                    </p>
                </div>

                 {/* Feature 3: AI Automation (จาก Headline) */}
                 <div className="p-8 rounded-[2rem] bg-white/30 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center text-pink-600 shadow-sm mb-6">
                        <Bot className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">AI Automation</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Integrate AI to automate workflows. Save time and scale your business without adding headcount.
                    </p>
                </div>
            </div>
        </div>

      </section>

      {/* === 4. Footer === */}
      <footer className="relative z-10 mt-auto border-t border-white/20 bg-white/20 backdrop-blur-lg mt-20">
        <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <span className="font-bold text-slate-800 text-lg">Command & Palette</span>
                    <p className="text-sm text-slate-500 mt-1">
                        High-Performance Digital Agency.
                    </p>
                </div>
                <div className="flex gap-8 text-sm font-medium text-slate-600">
                    <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
                    <a href="mailto:command.palette.th@gmail.com" className="hover:text-slate-900 transition-colors">Contact</a>
                </div>
            </div>
        </div>
      </footer>

    </div>
  );
}