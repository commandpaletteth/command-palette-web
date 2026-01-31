"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ 1. เพิ่ม import Image
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, Calendar, ArrowLeft } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
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

        // Logic 1: Scrolled check
        if (currentScrollY > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        // Logic 2: Visibility check
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
                    ? 'bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg shadow-black/5' 
                    : 'bg-white/30 backdrop-blur-xl border border-white/30 shadow-sm' 
                }
                ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}
            `}
        >
          
          {/* ✅ Logo ใหม่ (ใช้ Image component) */}
          <Link href={`/${locale}`} className="flex items-center gap-2 md:gap-3 group">
  
  {/* 1. ส่วนไอคอน (ใช้ Favicon.svg) */}
  <div className="relative">
    <Image
      src="/favicon.svg"
      alt="Command & Palette Logo"
      width={40}
      height={40}
      priority
      // Mobile: 32px (h-8) | Desktop: 40px (h-10)
      className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:rotate-12"
    />
  </div>

  {/* 2. ส่วนตัวหนังสือ (เขียนด้วย Code) */}
  <div className="flex flex-col justify-center">
    <span className="font-extrabold text-slate-800 tracking-tight leading-none text-lg md:text-xl">
      Command <span className="text-indigo-600">&</span> Palette
    </span>
  </div>

</Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700"> 
            <Link href={`/${locale}/about`} className="hover:text-slate-900 transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">{t("about")}</Link>
            <Link href={`/${locale}/process`} className="hover:text-slate-900 transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">{t("process")}</Link>
            <Link href={`/${locale}/works`} className="hover:text-slate-900 transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">{t("works")}</Link>
            <Link href={`/${locale}/services`} className="hover:text-slate-900 transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">{t("services")}</Link>
            <Link href={`/${locale}/contact`} className="hover:text-slate-900 transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-white/40"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5 text-slate-800" />
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
              className="rounded-full w-10 px-0 ml-1 text-slate-700 hover:text-slate-900 hover:bg-white/40 text-sm font-bold tracking-wide border border-transparent hover:border-white/50 transition-all drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]"
              title={locale === "en" ? "Switch to Thai" : "Switch to English"}
            >
              {locale === "en" ? "TH" : "EN"}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
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
                     {/* ✅ ใช้ Favicon เป็นลายน้ำตรงมุมขวาเมนูมือถือ */}
                     <Image 
                        src="/favicon.svg" 
                        alt="CP Logo" 
                        width={32} 
                        height={32} 
                        className="w-8 h-8"
                     />
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