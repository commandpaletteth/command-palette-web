import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terms of Service | Command & Palette",
  description: "Rules and regulations for using Command & Palette website.",
};

export default function TermsPage() {
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
              Terms of <span className="text-green-500">Service</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-xs font-medium text-zinc-300 border border-zinc-800 mt-4">
              Effective: January 2026
            </div>
          </div>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="space-y-8">
          
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-800 text-zinc-300 text-sm">1</span>
              Agreement to Terms
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              These Terms of Service constitute a legally binding agreement made between you and <strong>Command & Palette</strong> concerning your access to and use of the <strong>command-palette.co</strong> website. By accessing the Site, you agree that you have read, understood, and agreed to be bound by all of these Terms of Service.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-800 text-zinc-300 text-sm">2</span>
              Intellectual Property Rights
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-800 text-zinc-300 text-sm">3</span>
              Prohibited Activities
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means.</li>
                <li>Use the Site to advertise or offer to sell goods and services.</li>
            </ul>
          </div>

          <div className="text-center pt-8 pb-12">
            <p className="text-sm text-zinc-500 mb-8">
              Questions? Email us at <a href="mailto:command.palette.th@gmail.com" className="text-green-500 hover:underline">command.palette.th@gmail.com</a>
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