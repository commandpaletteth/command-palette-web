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
        
        // เช็คขนาดหน้าจอก่อน
        const isDesktop = window.innerWidth >= 768; 

        if (isMobileMenuOpen) return;

        // Logic การซ่อน/แสดง
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
        className={`fixed top-6 inset-x-6 z-50 transition-transform duration-300 ${
          isVisible || isMobileMenuOpen ? 'translate-y-0' : '-translate-y-32'
        }`}
      >
        {/* 🟢 แก้ตรงนี้: ปรับ Class ให้เป็น Glassmorphism แบบใสวิ้ง (iOS 26 Style) 
            - bg-white/20: ใสขึ้นเยอะ (เห็นพื้นหลัง)
            - backdrop-blur-md: เบลอพองาม ไม่มัวจนมองไม่รู้เรื่อง
            - border-white/30: ขอบจางๆ เหมือนกระจก
            - shadow-lg: ลอยมีมิติ
        */}
        <div className={`max-w-6xl mx-auto h-16 px-6 flex items-center justify-between rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg shadow-black/5 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-slate-800 to-black rounded-xl flex items-center justify-center shadow-inner border border-white/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">CP</span>
            </div>
            <span className="text-lg font-semibold text-slate-800 tracking-tight">
              Command & Palette
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700"> {/* ปรับสี Text ให้เข้มขึ้นนิดนึงเพราะพื้นหลังใส */}
            <Link href={`/${locale}/about`} className="hover:text-slate-900 transition-colors drop-shadow-sm">{t("about")}</Link>
            <Link href={`/${locale}/process`} className="hover:text-slate-900 transition-colors drop-shadow-sm">{t("process")}</Link>
            <Link href={`/${locale}/works`} className="hover:text-slate-900 transition-colors drop-shadow-sm">{t("works")}</Link>
            <Link href={`/${locale}/services`} className="hover:text-slate-900 transition-colors drop-shadow-sm">{t("services")}</Link>
            <Link href={`/${locale}/contact`} className="hover:text-slate-900 transition-colors drop-shadow-sm">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-white/20"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5 text-slate-700" />
            </Button>

            <a href="https://calendly.com/command-palette-th/45min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-slate-900/90 hover:bg-slate-800 text-white rounded-full px-6 shadow-lg shadow-slate-900/10 backdrop-blur-sm border border-slate-800/50 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {t("consult")}
              </Button>
            </a>

            <Button
              onClick={switchLanguage}
              variant="ghost"
              size="sm"
              className="rounded-full w-10 px-0 ml-1 text-slate-700 hover:text-slate-900 hover:bg-white/30 text-sm font-bold tracking-wide border border-transparent hover:border-white/50 transition-all"
              title={locale === "en" ? "Switch to Thai" : "Switch to English"}
            >
              {locale === "en" ? "TH" : "EN"}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white/90 backdrop-blur-xl md:hidden animate-in slide-in-from-right-10 fade-in duration-300 flex flex-col">
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