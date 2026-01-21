import { Button } from "@/components/ui/button"
import { Zap, Shield, Bot } from "lucide-react"
import Link from "next/link";

export default function Home() {
  return (
    // 👇 แก้ bg-background เป็น bg-black (ดำสนิทไม่สนลูกใคร)
    <div className="min-h-screen bg-black text-white"> 
      
      {/* Header */}
      {/* 👇 แก้ bg-background/80 เป็น bg-black/80 */}
      <header className="backdrop-blur-xl bg-black/80 sticky top-0 z-50 border-b border-zinc-800">
        <nav className="container mx-auto px-6 py-5 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">C&P</span>
            </div>
            <span className="text-xl font-semibold text-white tracking-tight">Command & Palette</span>
          </div>
          <Link href="https://calendly.com/command-palette-th/45min" target="_blank">
            <Button variant="ghost" className="text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors">
              Get Started
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 max-w-7xl">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-balance leading-[1.05] tracking-tight">
              We build{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">High-Performance</span>{" "}
              Websites & AI Automation
            </h1>
            {/* 👇 แก้ text-muted-foreground เป็น text-zinc-400 (สีเทาอ่อนบนพื้นดำ) */}
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto text-balance leading-relaxed font-normal">
              Stop renting your website. Start owning your digital asset.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 justify-center">
            <Link href="https://calendly.com/command-palette-th/45min" target="_blank">
              <Button size="lg" className="rounded-full bg-purple-600 hover:bg-purple-700 text-white px-8 h-12 text-lg font-medium shadow-lg shadow-purple-900/20">
                Consult for Free
              </Button>
            </Link>

            <Link href="/ourwork">
              {/* 👇 ปรับปุ่มให้เป็นสีเทาเข้มๆ เวลา Hover */}
              <Button variant="ghost" size="lg" className="rounded-full text-white hover:bg-zinc-800 px-8 h-12 text-lg font-medium border border-transparent hover:border-zinc-700">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20 md:py-32 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Speed Feature */}
          {/* 👇 แก้สีการ์ดเป็นสีดำเทาๆ (zinc-900) */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-300">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight">Lightning Speed</h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Built with Next.js for unparalleled performance. Your site loads instantly, keeping visitors engaged and improving SEO rankings.
              </p>
            </div>
          </div>

          {/* Ownership Feature */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight">True Ownership</h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                No monthly fees. No platform lock-in. Own your website completely with full control over your digital presence.
              </p>
            </div>
          </div>

          {/* AI Ready Feature */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-300">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight">AI Ready</h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Integrated AI automation from day one. Streamline operations, enhance user experience, and scale effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl md:rounded-[3rem] p-8 md:p-20 text-center shadow-2xl relative mb-24 border border-purple-500/20">
            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white text-balance tracking-tight">
                Ready to own your digital future?
              </h2>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed pb-6">
                Let&apos;s discuss how we can build a high-performance website and AI automation solution tailored to your needs.
              </p>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-max max-w-[90%]">
             <Link href="https://calendly.com/command-palette-th/45min" target="_blank" rel="noopener noreferrer">
              {/* 👇 ปุ่มนี้แก้ให้เป็น bg-white text-black เพื่อให้เด่นบนพื้นม่วง */}
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200 text-base md:text-lg font-semibold px-8 py-6 md:px-10 md:py-7 rounded-full shadow-xl w-full md:w-auto h-auto whitespace-normal text-center">
                Schedule Free Consultation
              </Button>
            </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex gap-6 flex-wrap items-center justify-center py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-zinc-800">
          <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors">
            Terms
          </Link>
          <a href="mailto:command.palette.th@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
            Contact
          </a>
      </footer>
    </div>
  )
}