import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950/50">
      
      {/* 1. Hero Header */}
      <div className="bg-background border-b pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
             ← Back to Home
          </Link>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              The rules of engagement for building your digital future with us.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground border mt-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Effective: January 20, 2026
            </div>
          </div>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="space-y-8">
          
          {/* Section 1: Services */}
          <div className="bg-card border rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-sm">1</span>
              Services Scope
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Command & Palette specializes in building <strong>High-Performance Websites, Digital Assets, and AI Automation solutions</strong>. We don't just sell hours; we sell outcomes. The specific deliverables for any project will be strictly defined in a separate proposal or contract.
            </p>
          </div>

          {/* Section 2: IP */}
          <div className="bg-card border rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 text-sm">2</span>
              Intellectual Property
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-secondary/50 border border-border/50">
                <div className="text-2xl mb-3">🛡️</div>
                <h3 className="font-semibold text-foreground mb-2">Our Core Tech</h3>
                <p className="text-sm text-muted-foreground">
                  Pre-existing code, AI prompts, and methodologies remain the exclusive property of Command & Palette.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                <div className="text-2xl mb-3">💎</div>
                <h3 className="font-semibold text-foreground mb-2">Your Asset</h3>
                <p className="text-sm text-muted-foreground">
                  Upon full payment, the final website and specific automation workflows become <strong>your 100% owned digital asset</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: AI & Liability */}
          <div className="bg-card border rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
             <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 text-sm">3</span>
              AI & Liability
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong>AI Disclaimer:</strong> Innovation comes with variables. While we engineer for precision, AI solutions may occasionally produce unpredictable results. We are not liable for decisions made solely based on AI-generated content without human oversight.
              </p>
              <div className="h-px bg-border/50 w-full my-4"></div>
              <p>
                <strong>Limitation of Liability:</strong> To the fullest extent permitted by law, Command & Palette shall not be liable for any indirect damages arising from the use of our services. We build the ship, but you steer it.
              </p>
            </div>
          </div>

          {/* Footer Note (แก้ไขแล้ว) */}
          <div className="text-center pt-8 pb-12">
            <p className="text-sm text-muted-foreground">
              Governed by the laws of Thailand. Any disputes? Contact us at <a href="mailto:command.palette.th@gmail.com" className="text-primary hover:underline">command.palette.th@gmail.com</a>
            </p>
            <div className="mt-8">
              <Link href="/">
                <Button variant="outline" className="rounded-full px-8">Back to Home</Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}