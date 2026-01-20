import { Button } from "@/components/ui/button"
import { Zap, Shield, Bot } from "lucide-react"
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="backdrop-blur-xl bg-background/80 sticky top-0 z-50 border-b border-border/50">
        <nav className="container mx-auto px-6 py-5 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-accent-foreground font-bold text-lg">C&P</span>
            </div>
            <span className="text-xl font-semibold text-foreground tracking-tight">Command & Palette</span>
          </div>
          <Button variant="ghost" className="text-foreground hover:bg-secondary font-medium">
            Get Started
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 max-w-7xl">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-balance leading-[1.05] tracking-tight">
              We build{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">High-Performance</span>{" "}
              Websites & AI Automation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed font-normal">
              Stop renting your website. Start owning your digital asset.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all">
              Consult for Free
            </Button>
            <Button size="lg" variant="ghost" className="text-foreground hover:bg-secondary text-base font-semibold px-10 py-7 rounded-full">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20 md:py-32 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Speed Feature */}
          <div className="bg-gradient-to-br from-card to-secondary rounded-3xl p-10 hover:shadow-2xl transition-all duration-300">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                <Zap className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground tracking-tight">Lightning Speed</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Built with Next.js for unparalleled performance. Your site loads instantly, keeping visitors engaged and improving SEO rankings.
              </p>
            </div>
          </div>

          {/* Ownership Feature */}
          <div className="bg-gradient-to-br from-card to-secondary rounded-3xl p-10 hover:shadow-2xl transition-all duration-300">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground tracking-tight">True Ownership</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                No monthly fees. No platform lock-in. Own your website completely with full control over your digital presence.
              </p>
            </div>
          </div>

          {/* AI Ready Feature */}
          <div className="bg-gradient-to-br from-card to-secondary rounded-3xl p-10 hover:shadow-2xl transition-all duration-300">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent via-primary to-accent flex items-center justify-center shadow-lg">
                <Bot className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground tracking-tight">AI Ready</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Integrated AI automation from day one. Streamline operations, enhance user experience, and scale effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* CTA Section */}
    <section className="container mx-auto px-6 py-20 md:py-32 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          {/* mb-24: กันที่ไว้ข้างล่างเผื่อปุ่มห้อยลงมา */}
          <div className="bg-gradient-to-br from-accent to-primary rounded-3xl md:rounded-[3rem] p-8 md:p-20 text-center shadow-2xl relative mb-24">
            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-accent-foreground text-balance tracking-tight">
                Ready to own your digital future?
              </h2>
              
              <p className="text-lg md:text-xl text-accent-foreground/90 max-w-2xl mx-auto leading-relaxed pb-6">
                Let&apos;s discuss how we can build a high-performance website and AI automation solution tailored to your needs.
              </p>
            </div>

            {/* แก้ตรงนี้: ใช้สูตร bottom-0 (เกาะขอบล่าง) + translate-y-1/2 (ขยับลงครึ่งตัว) */}
            {/* ผลลัพธ์: ปุ่มจะอยู่กึ่งกลางเส้นขอบล่างพอดีเป๊ะ ทั้งมือถือและคอม */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-max max-w-[90%]">
              <Button size="lg" className="bg-background text-accent hover:bg-background/90 text-base md:text-lg font-semibold px-8 py-6 md:px-10 md:py-7 rounded-full shadow-xl w-full md:w-auto h-auto whitespace-normal text-center">
                Schedule Free Consultation
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <Link href="/privacy" className="hover:text-accent transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-accent transition-colors">
            Terms
          </Link>
          <a href="mailto:command.palette.th@gmail.com" className="hover:text-accent transition-colors">
            Contact
          </a>
        </footer>

<Link href="/terms" className="hover:text-accent transition-colors">
  Terms
</Link>

<a href="mailto:command.palette.th@gmail.com" className="hover:text-accent transition-colors">
  Contact
</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
