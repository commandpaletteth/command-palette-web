"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
        // เปลี่ยน Logic: ให้มองว่าเป็น Desktop เมื่อจอใหญ่กว่า 1024px (lg) 
        // เพราะ Tablet แนวนอน (md) พื้นที่มักจะไม่พอวางเมนู
        const isDesktop = window.innerWidth >= 1024; 

        if (isMobileMenuOpen) return;

        if (currentScrollY > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

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
        className={`fixed top-4 md:top-6 inset-x-4 md:inset-x-6 z-50 transition-transform duration-500 ${
          isVisible || isMobileMenuOpen ? 'translate-y-0' : '-translate-y-32'
        }`}
      >
        <div 
            className={`
                max-w-7xl mx-auto h-16 pl-4 pr-2 md:px-6 flex items-center justify-between rounded-full 
                transition-all duration-500
                ${isScrolled 
                    ? 'bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg shadow-black/5' 
                    : 'bg-white/40 backdrop-blur-xl border border-white/30 shadow-sm' 
                }
                ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}
            `}
        >
          
          {/* ✅ Logo Section: ปรับให้ยืดหยุ่นและไม่แตกแถว */}
          <Link href={`/${locale}`} className="flex items-center gap-2 md:gap-3 group shrink-0">
            {/* Icon */}
            <div className="relative">
                <Image
                src="/favicon.svg"
                alt="Logo"
                width={40}
                height={40}
                priority
                className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:rotate-12"
                />
            </div>

            {/* Text: 
                - whitespace-nowrap: ห้ามตัดคำลงบรรทัดใหม่เด็ดขาด 
                - text-base: ในมือถือเอาแค่ขนาดปกติพอ (จะได้ไม่เบียด)
                - md:text-xl: จอใหญ่ค่อยขยาย
            */}
            <div className="flex flex-col justify-center">
                <span className="font-extrabold text-slate-800 tracking-tight leading-none text-base md:text-xl whitespace-nowrap">
                Command <span className="text-indigo-600">&</span> Palette
                </span>
            </div>
          </Link>

          {/* ✅ Desktop Menu: เปลี่ยนจาก md:flex เป็น lg:flex (โชว์เฉพาะจอใหญ่จริงๆ Tablet ให้ใช้ Burger) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-700"> 
            <Link href={`/${locale}/about`} className="hover:text-slate-900 transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">{t("about")}</Link>
            <Link href={`/${locale}/process`} className="hover:text-slate-900 transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">{t("process")}</Link>
            <Link href={`/${locale}/works`} className="hover:text-slate-900 transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">{t("works")}</Link>
            <Link href={`/${locale}/services`} className="hover:text-slate-900 transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">{t("services")}</Link>
            <Link href={`/${locale}/contact`} className="hover:text-slate-900 transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">Contact</Link>
          </nav>

          {/* ✅ Right Section: รวมปุ่มต่างๆ ไว้ใน div เดียวกันเพื่อคุม layout */}
          <div className="flex items-center gap-1 md:gap-3 shrink-0">
            
            {/* Hamburger: โชว์ที่ lg (1024px) ลงมา */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-white/40 -mr-2 md:mr-0 order-3" // order-3 เพื่อให้มันอยู่ขวาสุดเสมอใน mobile
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-slate-800" />
            </Button>

            {/* Call Button: ซ่อนใน Mobile (hidden) โชว์เฉพาะ Desktop (lg:flex) */}
            {/* เพราะใน Mobile พื้นที่ไม่พอ และมันมีปุ่มใหญ่ใน Menu Drawer อยู่แล้ว */}
            <a href="https://calendly.com/command-palette-th/45min" target="_blank" rel="noopener noreferrer" className="hidden lg:flex order-1">
              <Button className="bg-slate-900/90 hover:bg-slate-800 text-white rounded-full px-5 md:px-6 shadow-lg shadow-slate-900/10 backdrop-blur-sm border border-slate-800/50 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {t("consult")}
              </Button>
            </a>

            {/* Language Switcher */}
            <Button
              onClick={switchLanguage}
              variant="ghost"
              size="sm"
              className="rounded-full w-9 h-9 md:w-10 md:h-10 p-0 text-slate-700 hover:text-slate-900 hover:bg-white/40 text-xs md:text-sm font-bold tracking-wide border border-transparent hover:border-white/50 transition-all drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)] order-2"
            >
              {locale === "en" ? "TH" : "EN"}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu (เหมือนเดิม) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-2xl lg:hidden animate-in slide-in-from-right-10 fade-in duration-300 flex flex-col">
            <div className="h-20 md:h-24 px-6 flex items-center justify-between border-b border-slate-100/50">
                <Button 
                    variant="ghost" 
                    className="gap-2 text-slate-600 pl-2 hover:bg-slate-100 rounded-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <ArrowLeft className="w-5 h-5" /> Back
                </Button>
                <div className="flex items-center gap-2 opacity-50 grayscale">
                     <Image 
                        src="/favicon.svg" 
                        alt="CP Logo" 
                        width={32} 
                        height={32} 
                        className="w-8 h-8"
                     />
                </div>
            </div>

            <nav className="flex-grow flex flex-col justify-center gap-6 md:gap-8 px-8 pb-20">
                <Link href={`/${locale}/about`} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-slate-800 tracking-tight hover:text-purple-600 transition-colors">{t("about")}</Link>
                <Link href={`/${locale}/process`} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-slate-800 tracking-tight hover:text-purple-600 transition-colors">{t("process")}</Link>
                <Link href={`/${locale}/works`} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-slate-800 tracking-tight hover:text-purple-600 transition-colors">{t("works")}</Link>
                <Link href={`/${locale}/services`} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-slate-800 tracking-tight hover:text-purple-600 transition-colors">{t("services")}</Link>
                <Link href={`/${locale}/contact`} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-slate-800 tracking-tight hover:text-purple-600 transition-colors">Contact Us</Link>
                
                {/* ✅ เพิ่มปุ่ม Book a call ใน Mobile Menu (เพราะเราซ่อนจาก Navbar) */}
                <div className="pt-4">
                     <a href="https://calendly.com/command-palette-th/45min" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-slate-900 text-white rounded-full py-6 text-lg shadow-xl flex items-center justify-center gap-3">
                            <Calendar className="w-5 h-5" /> {t("consult")}
                        </Button>
                    </a>
                </div>
            </nav>
        </div>
      )}
    </>
  );
}