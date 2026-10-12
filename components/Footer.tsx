"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Mail, Linkedin } from "lucide-react";

const CONTACT_EMAIL = "info@command-palette.co";
const LINKEDIN_URL = "https://www.linkedin.com/in/warutchaijaraspong/";

export default function Footer() {
  const t = useTranslations("SiteFooter");
  const locale = useLocale();

  const columns = [
    {
      title: t("col_company"),
      links: [
        { href: "/founder", label: t("about") },
        { href: "/works", label: t("work") },
        { href: "/process", label: t("process") },
        { href: "/contact", label: t("contact") },
      ],
    },
    {
      title: t("col_services"),
      links: [
        { href: "/services", label: t("services") },
        { href: "/pricing", label: t("pricing") },
        { href: "/clinics", label: t("clinics") },
      ],
    },
    {
      title: t("col_legal"),
      links: [
        { href: "/privacy", label: t("privacy") },
        { href: "/terms", label: t("terms") },
      ],
    },
  ];

  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link href={`/${locale}`} className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 transition-transform group-hover:scale-110 duration-300">
                <Image src="/favicon.svg" alt="Command & Palette Logo" width={40} height={40} className="object-contain" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight whitespace-nowrap">
                Command <span className="text-indigo-600">&</span> Palette
              </span>
            </Link>
            <p className="text-slate-500 max-w-sm font-light leading-relaxed mb-6">{t("tagline")}</p>
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-600">
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 hover:text-purple-600 transition-colors">
                <Mail className="w-4 h-4" /> {CONTACT_EMAIL}
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-purple-600 transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-bold text-slate-800 mb-6 tracking-wide text-sm uppercase">{col.title}</h3>
              <ul className="space-y-4 text-sm font-medium text-slate-600">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={`/${locale}${l.href}`} className="hover:text-purple-600 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-medium">
            © {new Date().getFullYear()} Command &amp; Palette. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
