import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy | Command & Palette",
  description: "How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden font-sans">
      {/* Background Gradients (ให้ดูมีมิติเหมือนหน้าแรก) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-32">
        {/* Header Section */}
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="pl-0 text-muted-foreground hover:text-primary mb-8 group">
              <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> 
              Back to Command Center
            </Button>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Transparency is part of our code. Here's how we handle your data.
          </p>
          <div className="mt-4 inline-block px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs text-muted-foreground">
            Last Updated: January 2026
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-12 text-muted-foreground leading-relaxed md:text-lg">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <span className="text-green-500">01.</span> Introduction
            </h2>
            <p>
              Welcome to <strong>Command & Palette</strong>. We believe in "Privacy by Design." We respect your personal data and are committed to protecting it. This policy outlines how we look after your data when you visit our digital assets.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <span className="text-green-500">02.</span> Data We Collect
            </h2>
            <p>
              We act as a Controller for the data you provide directly, and a Processor for technical data collected automatically:
            </p>
            <div className="grid gap-4 mt-4 pl-4 border-l-2 border-border/50">
              <div className="bg-secondary/20 p-4 rounded-r-lg">
                <strong className="text-foreground block mb-1">📡 Technical Data</strong>
                Includes IP address, browser type, device info, and OS. This is collected automatically via <strong>Vercel Analytics</strong> to help us optimize performance across different devices.
              </div>
              <div className="bg-secondary/20 p-4 rounded-r-lg">
                <strong className="text-foreground block mb-1">📊 Usage Data</strong>
                Information about how you navigate our site, which helps us improve UX/UI.
              </div>
              <div className="bg-secondary/20 p-4 rounded-r-lg">
                <strong className="text-foreground block mb-1">🔍 Analytics Disclosure</strong>
                We use <strong>Vercel Analytics</strong>. The data is processed anonymously and used solely for performance monitoring. We do not sell this data to third parties.
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <span className="text-green-500">03.</span> How We Use Your Data
            </h2>
            <p>
              We strictly use your data for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improving website performance and loading speeds.</li>
              <li>Analyzing user behavior to enhance UX design.</li>
              <li>Complying with legal obligations.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <span className="text-green-500">04.</span> Contact Us
            </h2>
            <p>
              Questions about our privacy practices? Reach out directly to our team:
            </p>
            <a href="mailto:command.palette.th@gmail.com" className="inline-flex items-center gap-2 text-foreground hover:text-green-400 transition-colors border-b border-green-500/30 pb-0.5">
              command.palette.th@gmail.com
            </a>
          </section>

        </div>
        
        {/* Footer decoration */}
        <div className="mt-20 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground/50">
          Command & Palette Co., Ltd. &copy; 2026
        </div>
      </div>
    </div>
  );
}