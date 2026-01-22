import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, PenTool, Code, Key, HelpCircle, ChevronDown } from "lucide-react";

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
      
      {/* === 1. Ambient Background === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] animate-pulse-slow mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] animate-pulse-slow delay-700 mix-blend-multiply" />
      </div>

      {/* Navbar Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
            <Button variant="ghost" className="bg-white/40 backdrop-blur-md hover:bg-white/60 rounded-full gap-2 text-slate-700 border border-white/50 shadow-sm">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
        </Link>
      </div>

      {/* === 2. Header === */}
      <section className="relative z-10 pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Work</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Simple, transparent, and focused on results. <br/>
            From our first chat to handing over the keys.
        </p>
      </section>

      {/* === 3. The 4-Step Process === */}
      <section className="relative z-10 container mx-auto px-6 max-w-5xl pb-24">
        <div className="grid md:grid-cols-2 gap-8">
            
            {/* Step 1 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-[2.5rem] shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 bg-blue-100 text-blue-600 font-bold px-6 py-4 rounded-bl-[2.5rem] text-xl">01</div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                    <Search className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Discovery</h3>
                <p className="text-slate-600 mb-4">We start with a 45-min consultation (Free). We listen to your business goals, bottlenecks, and vision. No technical jargon.</p>
                <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">Goal: Understand the &quot;Why&quot;</div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-[2.5rem] shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 bg-purple-100 text-purple-600 font-bold px-6 py-4 rounded-bl-[2.5rem] text-xl">02</div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                    <PenTool className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Strategy & Blueprint</h3>
                <p className="text-slate-600 mb-4">We design the solution—not just the visuals, but the data structure and AI workflows. You approve the plan before we write a single line of code.</p>
                 <div className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">Goal: Clear Roadmap</div>
            </div>

            {/* Step 3 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-[2.5rem] shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 bg-pink-100 text-pink-600 font-bold px-6 py-4 rounded-bl-[2.5rem] text-xl">03</div>
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mb-6">
                    <Code className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Build & Automate</h3>
                <p className="text-slate-600 mb-4">The engineering phase. We build your site using Next.js for speed and integrate AI agents. We work in 2-week sprints to keep you updated.</p>
                 <div className="text-sm font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full inline-block">Goal: High-Performance Asset</div>
            </div>

            {/* Step 4 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-[2.5rem] shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 bg-green-100 text-green-600 font-bold px-6 py-4 rounded-bl-[2.5rem] text-xl">04</div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                    <Key className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Launch & Handover</h3>
                <p className="text-slate-600 mb-4">We deploy your site globally. Then, we hand over everything—code, accounts, and credentials. You own it 100%.</p>
                 <div className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">Goal: 100% Ownership</div>
            </div>

        </div>
      </section>

      {/* === 4. FAQ Section (Native HTML - No Install Needed) === */}
      <section className="relative z-10 container mx-auto px-6 max-w-3xl pb-24">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center justify-center gap-2">
                <HelpCircle className="w-8 h-8 text-slate-400" /> Frequently Asked Questions
            </h2>
        </div>

        <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 shadow-sm">
            
            {/* FAQ Item 1 */}
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-semibold text-lg hover:text-purple-600 outline-none">
                    Do I have to pay monthly fees?
                    <ChevronDown className="w-5 h-5 text-slate-500 transition group-open:rotate-180" />
                </summary>
                <div className="mt-4 text-slate-600 text-base leading-relaxed group-open:animate-in group-open:fade-in group-open:slide-in-from-top-2">
                     <strong className="text-slate-900">No.</strong> Unlike Wix or Shopify, we build your site on platforms like Vercel or Netlify, which often have generous free tiers for standard usage. You pay us once for the development. You only pay for your domain name (approx. $10/year) and any specific third-party API usage (if needed).
                </div>
            </details>
            
            <div className="h-px bg-slate-200 my-6" />

            {/* FAQ Item 2 */}
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-semibold text-lg hover:text-purple-600 outline-none">
                     Can I edit the content myself?
                    <ChevronDown className="w-5 h-5 text-slate-500 transition group-open:rotate-180" />
                </summary>
                <div className="mt-4 text-slate-600 text-base leading-relaxed group-open:animate-in group-open:fade-in group-open:slide-in-from-top-2">
                     <strong className="text-slate-900">Yes.</strong> We connect your website to a modern CMS (Content Management System). It looks and feels just like editing a Facebook post. You can change text, upload images, and add blog posts without touching a line of code.
                </div>
            </details>

            <div className="h-px bg-slate-200 my-6" />

            {/* FAQ Item 3 */}
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-semibold text-lg hover:text-purple-600 outline-none">
                    What if the website breaks?
                    <ChevronDown className="w-5 h-5 text-slate-500 transition group-open:rotate-180" />
                </summary>
                <div className="mt-4 text-slate-600 text-base leading-relaxed group-open:animate-in group-open:fade-in group-open:slide-in-from-top-2">
                     Our websites are &quot;Static Generated,&quot; which makes them incredibly stable and nearly impossible to &quot;crash&quot; from high traffic. However, if you need technical adjustments or want to add new features later, we offer maintenance packages, or you can hire any standard React/Next.js developer to help you. You are not locked in with us.
                </div>
            </details>

            <div className="h-px bg-slate-200 my-6" />

            {/* FAQ Item 4 */}
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-semibold text-lg hover:text-purple-600 outline-none">
                     How long does it take?
                    <ChevronDown className="w-5 h-5 text-slate-500 transition group-open:rotate-180" />
                </summary>
                <div className="mt-4 text-slate-600 text-base leading-relaxed group-open:animate-in group-open:fade-in group-open:slide-in-from-top-2">
                     For a standard high-performance corporate website, it typically takes <strong className="text-slate-900">4-6 weeks</strong> from Discovery to Launch. More complex projects with deep AI integration may take 8-10 weeks.
                </div>
            </details>

        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative z-10 py-12 text-center">
        <p className="text-slate-500 mb-6">Still have questions?</p>
        <a href="mailto:command.palette.th@gmail.com">
             <Button variant="outline" className="rounded-full px-8 border-slate-300 text-slate-700 hover:bg-white/60">
                Email Us
             </Button>
        </a>
      </section>

    </div>
  );
}