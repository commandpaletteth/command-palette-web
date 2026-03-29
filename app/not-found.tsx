import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Ghost } from "lucide-react";
import "@/app/globals.css";
// ✅ เพิ่มบรรทัดนี้ เพื่อดึง Tailwind เข้ามาใช้งานในหน้านี้โดยเฉพาะ


export default function NotFound() {
  return (
    // เพิ่ม Font Variables เข้าไปที่ className ด้วยเพื่อให้ Font IBM/Manrope แสดงผลถูกต้อง
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-100/50 overflow-hidden relative flex flex-col items-center justify-center">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center px-6">
        {/* 404 Text */}
        <h1 className="text-[10rem] md:text-[12rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-transparent select-none">
          404
        </h1>

        {/* Card Content */}
        <div className="bg-white/40 backdrop-blur-xl border border-white/50 p-8 rounded-[2.5rem] shadow-2xl -mt-12 md:-mt-16">
          <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Ghost className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Lost in the Void?
          </h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">
            This page doesn&apos;t exist — it may have been moved, deleted, or the URL is incorrect.
          </p>

          <Link href="/">
            <Button size="lg" className="rounded-full px-8 h-12 bg-slate-900 hover:bg-slate-800 text-white shadow-xl group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}