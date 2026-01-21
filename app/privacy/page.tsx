import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy | Command & Palette",
  description: "How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-20 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/">
          <Button variant="ghost" className="pl-0 text-zinc-400 hover:text-white">
            ← Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold tracking-tighter">Privacy Policy</h1>
        <p className="text-zinc-400">Last Updated: January 2026</p>

        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              Welcome to <strong>Command & Palette</strong> ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data:</strong> Includes information about how you use our website, products, and services.</li>
              <li><strong>Analytics Data:</strong> We use <strong>Vercel Analytics</strong> to understand how our website is used. This service collects technical data such as IP addresses, browser types, and device information to help us improve performance. This data is processed anonymously.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we use your personal data to improve our website performance, analyze user behavior via Vercel Analytics, and enhance user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:command.palette.th@gmail.com" className="text-blue-400 hover:underline">command.palette.th@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}