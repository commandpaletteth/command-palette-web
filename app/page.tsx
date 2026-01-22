import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Database, Bot, ArrowRight, Menu, Sparkles, Mail, Calendar, XCircle, CheckCircle2, ShieldCheck, MessageSquare, Workflow, PenTool } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
      
      {/* === 1. Ambient Background === */}
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

          {/* Menu Links (Added Process) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="/about" className="hover:text-slate-900 transition-colors">About</Link>
            <Link href="/process" className="hover:text-slate-900 transition-colors">Process</Link>
            <Link href="/works" className="hover:text-slate-900 transition-colors">Our Work</Link>
            <Link href="/services" className="hover:text-slate-900 transition-colors">Services</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
             <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5 text-slate-700" />
             </Button>
            
            <a href="mailto:command.palette.th@gmail.com">
                <Button variant="ghost" size="icon" className="hidden md:inline-flex text-slate-600 hover:bg-white/50 rounded-full">
                    <Mail className="w-5 h-5" />
                </Button>
            </a>

            <a href="https://calendly.com/command-palette-th/45min" target="_blank" rel="noopener noreferrer">
                <Button className="bg-slate-900/90 hover:bg-slate-800 text-white rounded-full px-6 shadow-lg shadow-slate-900/10 backdrop-blur-sm border border-slate-800/50 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Consult for Free
                </Button>
            </a>
          </div>
        </div>
      </header>

      {/* === 3. Hero Section === */}
      <section className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-16">
        <div className="text-center max-w-5xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-sm mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-slate-700">Digital Asset & Automation Agency</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-tight text-balance">
            Don&apos;t Just Build a Website. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Engineer a Digital Asset.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal mb-10 text-balance">
            Stop renting platforms. Stop losing customers to slow loading. <br className="hidden md:block"/>
            Start owning a system that actually grows your business.
          </p>
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

        {/* Tech Strip */}
        <div className="w-full max-w-4xl mx-auto border-t border-white/40 pt-8 pb-4">
            <p className="text-center text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">
                Trusted Technology. Zero Headache.
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5" /> <span className="font-semibold text-slate-800">Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" /> <span className="font-semibold text-slate-800">Vercel</span>
                </div>
                <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5" /> <span className="font-semibold text-slate-800">OpenAI</span>
                </div>
            </div>
        </div>
      </section>

      {/* === 4. Comparison Section === */}
      <section className="relative z-10 py-20 px-6 bg-white/20 backdrop-blur-sm border-y border-white/40">
        <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">We Build It Differently.</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Most websites are liabilities—slow, rented, and hard to fix. <br/>
                    We build assets that you own 100%.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-8 rounded-[2.5rem] bg-red-50/50 border border-red-100/50 backdrop-blur-md opacity-80 hover:opacity-100 transition-opacity">
                    <h3 className="text-xl font-bold text-red-900/70 mb-6 flex items-center gap-2">
                        <XCircle className="w-6 h-6" /> Generic Templates
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex gap-3 text-red-900/60">
                            <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                            <span><strong>Slow Loading:</strong> Bloated code that drives customers away.</span>
                        </li>
                        <li className="flex gap-3 text-red-900/60">
                            <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                            <span><strong>Rented Platform:</strong> You pay monthly fees forever. You don&apos;t own it.</span>
                        </li>
                        <li className="flex gap-3 text-red-900/60">
                            <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                            <span><strong>Hard to Customize:</strong> Stuck with limited features and templates.</span>
                        </li>
                    </ul>
                </div>
                <div className="relative p-10 rounded-[2.5rem] bg-white/60 border border-white/80 shadow-2xl backdrop-blur-xl scale-105 md:scale-110 z-10">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                        RECOMMENDED
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <CheckCircle2 className="w-7 h-7 text-blue-600" /> Engineer & Own
                    </h3>
                    <ul className="space-y-5">
                         <li className="flex gap-3 text-slate-700">
                            <CheckCircle2 className="w-6 h-6 shrink-0 text-blue-600 mt-0.5" />
                            <span><strong>Lightning Speed:</strong> Custom-coded for instant loading & better SEO.</span>
                        </li>
                        <li className="flex gap-3 text-slate-700">
                            <CheckCircle2 className="w-6 h-6 shrink-0 text-blue-600 mt-0.5" />
                            <span><strong>100% Ownership:</strong> No platform fees. You own the code and the data.</span>
                        </li>
                        <li className="flex gap-3 text-slate-700">
                            <CheckCircle2 className="w-6 h-6 shrink-0 text-blue-600 mt-0.5" />
                            <span><strong>Tailored for You:</strong> Designed specifically for your brand&apos;s goals.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* === 5. NEW: Practical AI Use Cases (Concrete Examples) === */}
      <section className="relative z-10 py-24 px-6 container mx-auto max-w-6xl">
        <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-bold mb-4">
                POWERED BY AI
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Beyond the Website:<br/> Practical Automation</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We don&apos;t just make it look good. We make it work for you. <br/>
                Here are 3 concrete ways we can upgrade your business.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg hover:border-purple-200 transition-colors">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                    <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Smart Concierge</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    An AI chat agent trained on your specific business data. It answers customer questions instantly, 24/7, without you lifting a finger.
                </p>
            </div>

            {/* Case 2 */}
            <div className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                    <Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Workflow Automation</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Capture leads from your website and automatically send them to your CRM, Google Sheets, or Line Notify. No more copy-pasting data.
                </p>
            </div>

            {/* Case 3 */}
            <div className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg hover:border-pink-200 transition-colors">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mb-6">
                    <PenTool className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Content Engine</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Use AI to help generate SEO-friendly blog drafts or social media captions based on your industry trends, helping you rank higher on Google.
                </p>
            </div>
        </div>
      </section>

      {/* === 6. Footer === */}
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