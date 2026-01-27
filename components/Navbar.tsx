"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, Calendar, ArrowLeft } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false); // 🟢 เพิ่ม State เช็คว่าเลื่อนลงมาหรือยัง
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = () => {
    const newLocale = locale === "en" ? "th" : "en";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        const isDesktop = window.innerWidth >= 768; 

        if (isMobileMenuOpen) return;

        // 🟢 Logic 1: เช็คว่าเลื่อนลงมาเกิน 20px หรือยัง (เพื่อปรับความใสของกระจก)
        if (currentScrollY > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        // Logic 2: ซ่อน/แสดง Navbar (เหมือนเดิม)
        if (isDesktop) {
          setIsVisible(true);
        } else {
          if (currentScrollY < 10) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    window.addEventListener('resize', controlNavbar);
    
    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('resize', controlNavbar);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-6 inset-x-6 z-50 transition-transform duration-500 ${
          isVisible || isMobileMenuOpen ? 'translate-y-0' : '-translate-y-32'
        }`}
      >
        <div 
            className={`
                max-w-6xl mx-auto h-16 px-6 flex items-center justify-between rounded-full 
                transition-all duration-500
                ${isScrolled 
                    ? 'bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl shadow-black/5' // ตอนเลื่อนลง: ขุ่นขึ้นให้อ่านง่าย
                    : 'bg-transparent backdrop-blur-none border border-transparent shadow-none' // ตอนอยู่บนสุด: ใสวิ้ง 100%
                }
                ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}
            `}
        >
          
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center shadow-inner border border-white/10 group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">CP</span>
            </div>
            {/* 🟢 ใช้ mix-blend-difference กับ Logo Text */}
            <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-slate-800' : 'text-slate-800 mix-blend-difference text-white'}`}>
              Command & Palette
            </span>
          </Link>

          {/* Desktop Menu */}
          {/* 🟢 Menu: ใช้ Logic สลับสี
              - ถ้ายังไม่ Scrolled (อยู่บนสุด): ใช้ mix-blend-difference (กลับสีตามพื้นหลัง)
              - ถ้า Scrolled แล้ว (พื้นหลังขุ่น): ใช้สีดำปกติ (slate-700)
          */}
          <nav className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${
              isScrolled ? 'text-slate-700' : 'text-white mix-blend-difference'
          }`}> 
            <Link href={`/${locale}/about`} className="hover:opacity-70 transition-opacity">{t("about")}</Link>
            <Link href={`/${locale}/process`} className="hover:opacity-70 transition-opacity">{t("process")}</Link>
            <Link href={`/${locale}/works`} className="hover:opacity-70 transition-opacity">{t("works")}</Link>
            <Link href={`/${locale}/services`} className="hover:opacity-70 transition-opacity">{t("services")}</Link>
            <Link href={`/${locale}/contact`} className="hover:opacity-70 transition-opacity">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-white/20"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className={`w-5 h-5 ${isScrolled ? 'text-slate-700' : 'text-white mix-blend-difference'}`} />
            </Button>

            <a href="https://calendly.com/command-palette-th/45min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 shadow-lg border border-slate-800/50 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {t("consult")}
              </Button>
            </a>

            <Button
              onClick={switchLanguage}
              variant="ghost"
              size="sm"
              className={`
                rounded-full w-10 px-0 ml-1 text-sm font-bold tracking-wide transition-all
                ${isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white mix-blend-difference hover:bg-white/20'}
              `}
              title={locale === "en" ? "Switch to Thai" : "Switch to English"}
            >
              {locale === "en" ? "TH" : "EN"}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu (เหมือนเดิม) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-2xl md:hidden animate-in slide-in-from-right-10 fade-in duration-300 flex flex-col">
            <div className="h-24 px-6 flex items-center justify-between border-b border-slate-100/50">
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
                <Link href={`/${locale}/contact`} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-slate-800 tracking-tight hover:text-purple-600 transition-colors">Contact Us</Link>
            </nav>
        </div>
      )}
    </>
  );
}