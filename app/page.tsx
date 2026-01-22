import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Command, Search, Sparkles, Layers, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100/50 overflow-hidden relative">
      
      {/* === 1. Ambient Background Layers (พื้นหลังแบบ Fluid Gradient) === */}
      {/* นี่คือส่วนสำคัญที่ทำให้กระจกดู "ฉ่ำ" ครับ มันคือลูกบอลแสงเบลอๆ ที่ซ้อนอยู่ข้างหลัง */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Orb 1: สีฟ้าอ่อน มุมซ้ายบน */}
        <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] animate-pulse-slow mix-blend-multiply" />
        {/* Orb 2: สีม่วงอ่อน มุมขวาล่าง */}
        <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] animate-pulse-slow delay-700 mix-blend-multiply" />
        {/* Orb 3: สีชมพูอ่อน ตรงกลาง */}
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-pink-200/20 blur-[100px] animate-pulse-slow delay-1000 mix-blend-multiply" />
      </div>


      {/* === 2. Floating Glass Navbar === */}
      <header className="fixed top-6 inset-x-6 z-50">
        <div className="max-w-5xl mx-auto h-16 px-6 flex items-center justify-between 
                        rounded-full bg-white/40 backdrop-blur-xl border border-white/50 shadow-sm
                        supports-[backdrop-filter]:bg-white/40">
          
          {/* Logo: เรียบหรู ดูแพง */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-inner border border-white/20">
              <Command className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-slate-800 tracking-tight">
              Command Palette
            </span>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="#" className="hover:text-slate-900 transition-colors">Features</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Developers</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Pricing</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex text-slate-600 hover:bg-white/50 rounded-full">Sign In</Button>
            <Button className="bg-slate-900/90 hover:bg-slate-800 text-white rounded-full px-6 shadow-lg shadow-slate-900/10 backdrop-blur-sm border border-slate-800/50">
              Get Started
            </Button>
          </div>
        </div>
      </header>


      {/* === 3. Hero Section (The Liquid Glass Centerpiece) === */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20">
        
        {/* Headline: สะอาดตา เน้น Typography */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-slate-700">The new standard for command interfaces.</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700">
            Master your workflow. <br/>
            <span className="">At the speed of thought.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A next-generation command palette for your applications. Designed to be fluid, intuitive, and incredibly fast.
          </p>
        </div>

        {/* The "Liquid Glass" Command Palette Simulation */}
        <div className="w-full max-w-2xl relative group">
          {/* Glow Effect หลังกล่อง (เพื่อให้ดูมีพลังงาน) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70"></div>
          
          {/* The Main Glass Container */}
          <div className="relative rounded-[2rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-2xl shadow-blue-900/5 overflow-hidden p-2 transition-all duration-500 hover:scale-[1.01] hover:bg-white/50">
            
            {/* The Input Field Area (เหมือนสลักลงไปในเนื้อแก้ว) */}
            <div className="flex items-center gap-4 px-6 h-16 rounded-[1.5rem] bg-white/40 shadow-inner border border-white/30 focus-within:bg-white/60 transition-all">
              <Search className="w-6 h-6 text-slate-400" />
              <input 
                type="text" 
                placeholder="What do you want to do next?" 
                className="w-full bg-transparent border-none outline-none text-xl text-slate-800 placeholder:text-slate-400/80 font-medium"
                autoFocus
              />
               <div className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/50 border border-white/40 text-xs font-semibold text-slate-500 shadow-sm">
                <span className="text-lg leading-none">⌘</span> K
              </div>
            </div>

            {/* Simulated Results (Optional: ให้เห็นภาพว่าเปิดออกมาแล้วเป็นไง) */}
            {/* <div className="px-4 py-4 space-y-2 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
               <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/40 transition-colors cursor-pointer">
                 <div className="w-8 h-8 rounded-lg bg-blue-100/50 flex items-center justify-center text-blue-600"><Zap className="w-4 h-4"/></div>
                 <span className="text-slate-700 font-medium">Create new project...</span>
               </div>
               <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/40 transition-colors cursor-pointer">
                 <div className="w-8 h-8 rounded-lg bg-purple-100/50 flex items-center justify-center text-purple-600"><Layers className="w-4 h-4"/></div>
                 <span className="text-slate-700 font-medium">Search documentation...</span>
               </div>
            </div> */}

          </div>
        </div>

      </section>

      {/* === 4. Features Section (Glass Tiles) === */}
      <section className="relative z-10 py-24 px-6">
        <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8">
                {/* Feature Glass Tile 1 */}
                <div className="p-8 rounded-[2rem] bg-white/30 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-400 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 mb-6">
                        <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Built for speed. Instant results, zero latency. Feel the flow state.
                    </p>
                </div>
                 {/* Feature Glass Tile 2 */}
                 <div className="p-8 rounded-[2rem] bg-white/30 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-400 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20 mb-6">
                        <Layers className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Deeply Integrated</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Connects with your entire stack. A unified interface for everything.
                    </p>
                </div>
                 {/* Feature Glass Tile 3 */}
                 <div className="p-8 rounded-[2rem] bg-white/30 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-400 to-pink-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/20 mb-6">
                        <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Fluid Design</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Beautiful liquid glass aesthetics that elevate your app's user experience.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* พื้นที่ว่างด้านล่างเพื่อให้เห็น Background ชัดๆ */}
      <div className="h-40 relative z-10"></div>
    </div>
  );
}