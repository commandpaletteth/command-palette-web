import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, FileText, Share2, CheckCircle2, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Command & Palette",
  description: "How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
      
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

      {/* === 2. Hero Header === */}
      <section className="relative z-10 pt-32 pb-16 px-6 text-center md:text-left">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-tight">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
              Transparency is our code. Here is exactly how we handle and protect your data.
            </p>
            
            {/* Effective Date Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/60 text-sm font-medium text-slate-600 shadow-sm mt-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              Effective: January 2026
            </div>
          </div>
        </div>
      </section>

      {/* === 3. Content Section (Glass Cards) === */}
      <div className="relative z-10 container mx-auto px-6 pb-24 max-w-4xl">
        <div className="space-y-12">
          
          {/* Section 1: Introduction */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-4 text-slate-900">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-600 text-sm font-bold shadow-sm">1</span>
              Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Welcome to <strong>Command & Palette</strong>. We believe that trust is the foundation of any digital partnership. This policy outlines our commitment to protecting the personal information you share with us via <strong>command-palette.co</strong>.
            </p>
          </div>

          {/* Section 2: Data Collection */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-4 text-slate-900">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 text-purple-600 text-sm font-bold shadow-sm">2</span>
              Information We Collect
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Box 1 */}
              <div className="p-8 rounded-3xl bg-white/50 border border-white/60 hover:bg-white/70 transition-colors">
                <div className="text-3xl mb-4">✍️</div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg">You Provide</h3>
                <ul className="text-slate-600 space-y-2 list-disc list-inside">
                  <li>Name & Contact Info</li>
                  <li>Business Details</li>
                  <li>Project Requirements</li>
                </ul>
              </div>
              {/* Box 2 */}
              <div className="p-8 rounded-3xl bg-white/50 border border-white/60 hover:bg-white/70 transition-colors">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg">Auto-Collected</h3>
                <ul className="text-slate-600 space-y-2 list-disc list-inside">
                  <li><strong>Vercel Analytics:</strong> IP & Device Info</li>
                  <li>Browser Type & Version</li>
                  <li>Usage Behavior (Anonymized)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Usage & Sharing */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
             <h2 className="text-2xl font-bold mb-8 flex items-center gap-4 text-slate-900">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-100 text-pink-600 text-sm font-bold shadow-sm">3</span>
              How We Use Data
            </h2>
            
            <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 rounded-2xl bg-white/40 border border-white/50">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <p className="text-slate-700 leading-relaxed font-medium">To provide consultation and deliver your digital assets.</p>
                </div>
                <div className="flex gap-4 items-start p-4 rounded-2xl bg-white/40 border border-white/50">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <p className="text-slate-700 leading-relaxed font-medium">To improve our website performance through <strong>Vercel Analytics</strong>.</p>
                </div>
            </div>

            <div className="mt-10 p-8 bg-slate-100/80 rounded-3xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-lg">
                    🚫 We Do Not Sell Data
                </h3>
                <p className="text-slate-600">
                    Your personal information is never sold. We only share data with trusted infrastructure partners (like Vercel & Google) necessary to keep our services running.
                </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center pt-8">
            <p className="text-slate-500 mb-8 font-medium">
              Questions about your data? Email us at <a href="mailto:command.palette.th@gmail.com" className="text-blue-600 hover:underline font-bold">command.palette.th@gmail.com</a>
            </p>
            <Link href="/">
              <Button variant="outline" className="rounded-full px-8 h-12 text-base border-slate-300 bg-white/40 hover:bg-white/60 text-slate-700 backdrop-blur-sm">
                 Back to Home
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}