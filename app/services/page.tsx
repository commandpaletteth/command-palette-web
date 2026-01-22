import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, LineChart, Cpu, Globe } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100/50 overflow-hidden relative">
       {/* Background Layers (เหมือนหน้า Home ให้ Theme เดียวกัน) */}
       <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] mix-blend-multiply" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Navbar Back Button */}
        <div className="mb-12">
            <Link href="/">
                <Button variant="ghost" className="hover:bg-white/50 rounded-full gap-2 text-slate-600">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Button>
            </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Our Services</h1>
            <p className="text-xl text-slate-600">
                We combine design, technology, and strategy to build digital assets that grow with you.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Service Card 1 */}
            <div className="bg-white/40 backdrop-blur-xl border border-white/50 p-8 rounded-[2rem] shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                    <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Custom Web Development</h3>
                <p className="text-slate-600 mb-6">High-performance websites built with Next.js. SEO-optimized, fast, and fully owned by you.</p>
                <ul className="space-y-2 text-sm text-slate-500">
                    <li>• Corporate Websites</li>
                    <li>• E-Commerce Solutions</li>
                    <li>• Web Applications</li>
                </ul>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white/40 backdrop-blur-xl border border-white/50 p-8 rounded-[2rem] shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                    <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">AI & Automation</h3>
                <p className="text-slate-600 mb-6">Streamline your operations with custom AI agents and workflow automation.</p>
                 <ul className="space-y-2 text-sm text-slate-500">
                    <li>• Customer Support AI</li>
                    <li>• Workflow Automation (n8n/Zapier)</li>
                    <li>• Data Analysis</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}