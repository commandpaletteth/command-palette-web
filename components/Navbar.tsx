"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, Mail, Calendar, ArrowLeft } from "lucide-react";
import { useTranslations, useLocale } from "next-intl"; // ✅ 1. เพิ่ม useLocale

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale(); // ✅ 2. ใช้ Hook ดึงภาษาที่ถูกต้อง (จะได้ค่า 'en' หรือ 'th' เสมอ)
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = () => {
    const newLocale = locale === "en" ? "th" : "en";
    // Logic ใหม่: แทนที่ภาษาใน URL ให้ถูกต้องแม่นยำกว่าเดิม
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <>
      <header className="fixed top-6 inset-x-6 z-50">
        <div className={`max-w-6xl mx-auto h-16 px-6 flex items-center justify-between rounded-full bg-white/40 backdrop-blur-xl border border-white/50 shadow-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-slate-800 to-black rounded-xl flex items-center justify-center shadow-inner border border-white/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">CP</span>
            </div>
            <span className="text-lg font-semibold text-slate-800 tracking-tight">
              Command & Palette
            </span>
          </Link>

          {/* Desktop Menu: ใช้ค่า locale ที่ถูกต้องแล้ว ลิงก์จะไม่เพี้ยนครับ */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href={`/${locale}/about`} className="hover:text-slate-900 transition-colors">{t("about")}</Link>
            <Link href={`/${locale}/process`} className="hover:text-slate-900 transition-colors">{t("process")}</Link>
            <Link href={`/${locale}/works`} className="hover:text-slate-900 transition-colors">{t("works")}</Link>
            <Link href={`/${locale}/services`} className="hover:text-slate-900 transition-colors">{t("services")}</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5 text-slate-700" />
            </Button>

            <a href="mailto:command.palette.th@gmail.com">
              <Button variant="ghost" size="icon" className="hidden md:inline-flex text-slate-600 hover:bg-white/50 rounded-full">
                <Mail className="w-5 h-5" />
              </Button>
            </a>

            <a href="https://calendly.com/command-palette-th/45min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-slate-900/90 hover:bg-slate-800 text-white rounded-full px-6 shadow-lg shadow-slate-900/10 backdrop-blur-sm border border-slate-800/50 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {t("consult")}
              </Button>
            </a>

            <Button
              onClick={switchLanguage}
              variant="ghost"
              size="sm"
              className="rounded-full px-3 ml-1 hover:bg-slate-200/50 text-lg border border-transparent hover:border-slate-300/50 transition-all"
              title={locale === "en" ? "Switch to Thai" : "Switch to English"}
            >
              {locale === "en" ? "🇹🇭" : "🇬🇧"}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-2xl md:hidden animate-in slide-in-from-right-10 fade-in duration-300 flex flex-col">
            <div className="h-24 px-6 flex items-center justify-between border-b border-slate-100">
                <Button 
                    variant="ghost" 
                    className="gap-2 text-slate-600 pl-2 hover:bg-slate-100 rounded-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <ArrowLeft className="w-5 h-5" /> Back
                </Button>
                <div className="flex items-center gap-2 opacity-50 grayscale">
                     <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center">
                        <span className="text-slate-500 font-bold text-sm">CP</span>
                     </div>
                </div>
            </div>

            <nav className="flex-grow flex flex-col justify-center gap-8 px-8 pb-20">
                <Link href={`/${locale}/about`} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-slate-800 tracking-tight hover:text-purple-600 transition-colors">{t("about")}</Link>
                <Link href={`/${locale}/process`} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-slate-800 tracking-tight hover:text-purple-600 transition-colors">{t("process")}</Link>
                <Link href={`/${locale}/works`} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-slate-800 tracking-tight hover:text-purple-600 transition-colors">{t("works")}</Link>
                <Link href={`/${locale}/services`} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-slate-800 tracking-tight hover:text-purple-600 transition-colors">{t("services")}</Link>
                <hr className="border-slate-200 my-4" />
                <a href="mailto:command.palette.th@gmail.com" className="text-lg font-medium text-slate-500 flex items-center gap-3 hover:text-slate-800">
                    <Mail className="w-5 h-5" /> command.palette.th@gmail.com
                </a>
            </nav>
        </div>
      )}
    </>
  );
}