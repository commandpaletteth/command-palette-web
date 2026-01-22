import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Command & Palette",
  description: "Rules and regulations for using Command & Palette website.",
};

export default function TermsPage() {
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
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
            
            {/* Effective Date Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/60 text-sm font-medium text-slate-600 shadow-sm mt-4">
              Effective: January 2026
            </div>
          </div>
        </div>
      </section>

      {/* === 3. Content Section (Glass Cards) === */}
      <div className="relative z-10 container mx-auto px-6 pb-24 max-w-4xl">
        <div className="space-y-8">
          
          {/* Section 1 */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4 text-slate-900">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-600 text-sm font-bold shadow-sm">1</span>
              Agreement to Terms
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              These Terms of Service constitute a legally binding agreement made between you and <strong>Command & Palette</strong> concerning your access to and use of the <strong>command-palette.co</strong> website. By accessing the Site, you agree that you have read, understood, and agreed to be bound by all of these Terms of Service.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4 text-slate-900">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 text-purple-600 text-sm font-bold shadow-sm">2</span>
              Intellectual Property Rights
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4 text-slate-900">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-100 text-pink-600 text-sm font-bold shadow-sm">3</span>
              Prohibited Activities
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-lg">
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-slate-600 text-lg">
                <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means.</li>
                <li>Use the Site to advertise or offer to sell goods and services.</li>
            </ul>
          </div>

          {/* Footer Note */}
          <div className="text-center pt-8">
            <p className="text-slate-500 mb-8 font-medium">
              Questions? Email us at <a href="mailto:command.palette.th@gmail.com" className="text-blue-600 hover:underline font-bold">command.palette.th@gmail.com</a>
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