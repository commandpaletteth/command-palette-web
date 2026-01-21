import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy | Command & Palette",
  description: "How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      
      {/* 1. Hero Header */}
      <div className="border-b border-zinc-800 pt-20 pb-16 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/" className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-8 transition-colors">
              ← Back to Home
          </Link>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              Privacy <span className="text-green-500">Policy</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Transparency is our code. Here is exactly how we handle and protect your data.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-xs font-medium text-zinc-300 border border-zinc-800 mt-4">
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
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20">1</span>
              Introduction
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Welcome to <strong>Command & Palette</strong>. We believe that trust is the foundation of any digital partnership. This policy outlines our commitment to protecting the personal information you share with us via <strong>command-palette.co</strong>.
            </p>
          </div>

          {/* Section 2: Data Collection */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 text-sm border border-purple-500/20">2</span>
              Information We Collect
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Box 1 */}
              <div className="p-6 rounded-xl bg-black border border-zinc-800">
                <div className="text-2xl mb-3">✍️</div>
                <h3 className="font-semibold text-white mb-2">You Provide</h3>
                <ul className="text-sm text-zinc-400 space-y-2 list-disc list-inside">
                  <li>Name & Contact Info</li>
                  <li>Business Details</li>
                  <li>Project Requirements</li>
                </ul>
              </div>
              {/* Box 2 */}
              <div className="p-6 rounded-xl bg-black border border-zinc-800">
                <div className="text-2xl mb-3">🤖</div>
                <h3 className="font-semibold text-white mb-2">Auto-Collected</h3>
                <ul className="text-sm text-zinc-400 space-y-2 list-disc list-inside">
                  <li><strong>Vercel Analytics:</strong> IP & Device Info</li>
                  <li>Browser Type & Version</li>
                  <li>Usage Behavior (Anonymized)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Usage & Sharing */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10">
             <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 text-sm border border-orange-500/20">3</span>
              How We Use Data
            </h2>
            
            <div className="space-y-4">
                <div className="flex gap-4 items-start">
                    <div className="mt-1 h-5 w-5 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0 text-xs border border-green-500/20">✓</div>
                    <p className="text-zinc-400 text-sm leading-relaxed">To provide consultation and deliver your digital assets.</p>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="mt-1 h-5 w-5 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0 text-xs border border-green-500/20">✓</div>
                    <p className="text-zinc-400 text-sm leading-relaxed">To improve our website performance through <strong>Vercel Analytics</strong>.</p>
                </div>
            </div>

            <div className="mt-8 p-6 bg-zinc-950 rounded-xl border border-zinc-800">
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    🚫 We Do Not Sell Data
                </h3>
                <p className="text-sm text-zinc-500">
                    Your personal information is never sold. We only share data with trusted infrastructure partners (like Vercel & Google) necessary to keep our services running.
                </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center pt-8 pb-12">
            <p className="text-sm text-zinc-500 mb-8">
              Questions about your data? Email us at <a href="mailto:command.palette.th@gmail.com" className="text-green-500 hover:underline">command.palette.th@gmail.com</a>
            </p>
            <Link href="/">
              <Button variant="outline" className="rounded-full px-8 border-zinc-700 text-white hover:bg-zinc-800 hover:text-white bg-transparent">Back to Home</Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}