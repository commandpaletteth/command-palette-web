"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
// ❌ ลบ import icon ที่ไม่ได้ใช้ออกแล้วครับ

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

          {/* Column 2: Sitemap */}
          <div>
            <h3 className="font-bold text-slate-800 mb-6 tracking-wide">Sitemap</h3>
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

        {/* Bottom Bar: เอา icon ออก เหลือแค่ Copyright */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-medium">
            © 2026 Command & Palette Agency. All rights reserved.
          </p>
          
          {/* ✅ ลบ Social Icons ออกเรียบร้อยครับ */}
        </div>
      </div>
    </footer>
  );
}