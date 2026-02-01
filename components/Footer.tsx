"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const navT = useTranslations("Navbar");
  
  const locale = useLocale();

  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href={`/${locale}`} className="inline-flex items-center gap-3 mb-6 group">
              {/* 1. Logo Icon: ใช้ favicon.svg */}
              <div className="relative w-10 h-10 transition-transform group-hover:scale-110 duration-300">
                 <Image 
                    src="/favicon.svg" 
                    alt="Command & Palette Logo" 
                    width={40}
                    height={40}
                    className="object-contain"
                 />
              </div>

              {/* 2. Text: ปรับสี & ให้เป็น text-indigo-600 (เหมือน Navbar) */}
              <span className="text-xl font-bold text-slate-900 tracking-tight whitespace-nowrap">
                Command <span className="text-indigo-600">&</span> Palette
              </span>
            </Link>
            
            <p className="text-slate-500 max-w-sm font-light leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Column 2: Sitemap */}
          <div>
            <h3 className="font-bold text-slate-800 mb-6 tracking-wide text-sm uppercase">Sitemap</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li>
                <Link href={`/${locale}/about`} className="hover:text-purple-600 transition-colors">
                  {navT("about")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/process`} className="hover:text-purple-600 transition-colors">
                  {navT("process")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/works`} className="hover:text-purple-600 transition-colors">
                  {navT("works")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="hover:text-purple-600 transition-colors">
                  {navT("services")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-bold text-slate-800 mb-6 tracking-wide text-sm uppercase">Legal</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li>
                <Link href={`/${locale}/privacy`} className="hover:text-purple-600 transition-colors">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="hover:text-purple-600 transition-colors">
                  {t("terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-medium">
            © 2026 Command & Palette Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}