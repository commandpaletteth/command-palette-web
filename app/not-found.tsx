import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Ghost } from "lucide-react";
import "./globals.css"; // ดึง Style ของทั้งเว็บมาใช้

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-100/50 overflow-hidden relative flex flex-col items-center justify-center">
        
        {/* === Ambient Background === */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] animate-pulse-slow mix-blend-multiply" />
            <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] animate-pulse-slow delay-700 mix-blend-multiply" />
        </div>

        {/* === Content === */}
        <div className="relative z-10 text-center px-6">
            
            {/* 404 Number */}
            <h1 className="text-[10rem] md:text-[12rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-transparent select-none">
                404
            </h1>

            {/* Message Box */}
            <div className="bg-white/40 backdrop-blur-xl border border-white/50 p-8 rounded-[2.5rem] shadow-2xl -mt-12 md:-mt-16 animate-in slide-in-from-bottom-10 duration-700">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Ghost className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                    Lost in the Void?
                </h2>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                    ไม่พบหน้าที่คุณค้นหา... หน้าเว็บนี้อาจถูกย้าย ลบ หรือคุณอาจจะพิมพ์ลิงก์ผิดครับ
                </p>

                <Link href="/">
                    <Button size="lg" className="rounded-full px-8 h-12 bg-slate-900 hover:bg-slate-800 text-white shadow-xl group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Button>
                </Link>
            </div>

        </div>

      </body>
    </html>
  );
}