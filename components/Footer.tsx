"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();

  return (
    <footer className="relative z-10 bg-white/80 backdrop-blur-xl border-t border-white/50 pt-16 pb-8 px-6 mt-auto">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold tracking-tighter text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-mono text-sm">CP</div>
                Command & Palette
            </div>
            <p className="text-slate-500 max-w-xs leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Menu</h4>
            <ul className="space-y-4 text-slate-600">
              <li><Link href={`/${locale}/about`} className="hover:text-blue-600 transition-colors">About</Link></li>
              <li><Link href={`/${locale}/works`} className="hover:text-blue-600 transition-colors">Works</Link></li>
              <li><Link href={`/${locale}/services`} className="hover:text-blue-600 transition-colors">Services</Link></li>
              <li><Link href={`/${locale}/process`} className="hover:text-blue-600 transition-colors">Process</Link></li>
            </ul>
          </div>

          {/* Contact & Legal Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact & Legal</h4>
            <ul className="space-y-4 text-slate-600">
              {/* ลิงก์ไปหน้า Contact Us ใหม่ */}
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-blue-600 transition-colors font-medium">
                  Contact Us
                </Link>
              </li>
              <li><Link href={`/${locale}/privacy`} className="hover:text-blue-600 transition-colors">{t('privacy')}</Link></li>
              <li><Link href={`/${locale}/terms`} className="hover:text-blue-600 transition-colors">{t('terms')}</Link></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 pt-8 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Command & Palette. All rights reserved.
        </div>
      </div>
    </footer>
  );
}