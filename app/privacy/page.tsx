import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy | Command & Palette",
  description: "How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950/50 font-sans">
      
      {/* 1. Hero Header */}
      <div className="bg-background border-b pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
              ← Back to Home
          </Link>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Transparency is our code. Here is exactly how we handle and protect your data.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground border mt-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Effective: January 2026
            </div>
          </div>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="space-y-8">
          
          {/* Section 1: Introduction */}
          <div className="bg-card border rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-sm">1</span>
              Introduction
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to <strong>Command & Palette</strong>. We believe that trust is the foundation of any digital partnership. This policy outlines our commitment to protecting the personal information you share with us via <strong>command-palette.co</strong>.
            </p>
          </div>

          {/* Section 2: Data Collection (Split View) */}
          <div className="bg-card border rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 text-sm">2</span>
              Information We Collect
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Box 1 */}
              <div className="p-6 rounded-xl bg-secondary/50 border border-border/50">
                <div className="text-2xl mb-3">✍️</div>
                <h3 className="font-semibold text-foreground mb-2">You Provide</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Name & Contact Info</li>
                  <li>Business Details</li>
                  <li>Project Requirements</li>
                </ul>
              </div>
              {/* Box 2 */}
              <div className="p-6 rounded-xl bg-secondary/50 border border-border/50">
                <div className="text-2xl mb-3">🤖</div>
                <h3 className="font-semibold text-foreground mb-2">Auto-Collected</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li><strong>Vercel Analytics:</strong> IP & Device Info</li>
                  <li>Browser Type & Version</li>
                  <li>Usage Behavior (Processed Anonymously)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Usage & Sharing */}
          <div className="bg-card border rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
             <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 text-sm">3</span>
              How We Use Data
            </h2>
            
            <div className="space-y-4">
                <div className="flex gap-4 items-start">
                    <div className="mt-1 h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 text-xs">✓</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">To provide consultation and deliver your digital assets.</p>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="mt-1 h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 text-xs">✓</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">To improve our website performance through <strong>Vercel Analytics</strong>.</p>
                </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    🚫 We Do Not Sell Data
                </h3>
                <p className="text-sm text-muted-foreground">
                    Your personal information is never sold. We only share data with trusted infrastructure partners (like Vercel & Google) necessary to keep our services running.
                </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center pt-8 pb-12">
            <p className="text-sm text-muted-foreground mb-8">
              Questions about your data? Email us at <a href="mailto:command.palette.th@gmail.com" className="text-primary hover:underline">command.palette.th@gmail.com</a>
            </p>
            <Link href="/">
              <Button variant="outline" className="rounded-full px-8">Back to Home</Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}