"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Instagram, Facebook, Linkedin } from "lucide-react"; // สมมติว่ามี icon

export default function Footer() {
  // 🟢 1. เรียกใช้ Translation 2 หมวด
  const t = useTranslations("Footer"); // สำหรับคำที่อยู่ใน Footer โดยเฉพาะ (Privacy, Terms)
  const navT = useTranslations("Navbar"); // สำหรับเมนู (About, Process, Works) จะได้ตรงกับข้างบนเป๊ะๆ
  
  const locale = useLocale();

  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-800 to-black rounded-lg flex items-center justify-center shadow-inner text-white font-bold text-sm">
                CP
              </div>
              <span className="text-lg font-bold text-slate-800 tracking-tight">
                Command & Palette
              </span>
            </Link>
            <p className="text-slate-500 max-w-sm font-light">
              {t("description")}
            </p>
          </div>

          {/* Column 2: Sitemap (แก้ตรงนี้ให้ใช้ navT) */}
          <div>
            <h3 className="font-bold text-slate-800 mb-6 tracking-wide">Sitemap</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li>
                <Link href={`/${locale}/about`} className="hover:text-purple-600 transition-colors">
                  {navT("about")} {/* 🟢 ใช้คำแปลจากหมวด Navbar */}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/process`} className="hover:text-purple-600 transition-colors">
                  {navT("process")} {/* 🟢 ใช้คำแปลจากหมวด Navbar */}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/works`} className="hover:text-purple-600 transition-colors">
                  {navT("works")} {/* 🟢 ใช้คำแปลจากหมวด Navbar */}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="hover:text-purple-600 transition-colors">
                  {navT("services")} {/* 🟢 ใช้คำแปลจากหมวด Navbar */}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal (ใช้อันเดิมจาก Footer) */}
          <div>
            <h3 className="font-bold text-slate-800 mb-6 tracking-wide">Legal</h3>
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
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-800 transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="text-slate-400 hover:text-slate-800 transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="text-slate-400 hover:text-slate-800 transition-colors"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}