"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const STORAGE_KEY = "cp_cookie_consent"; // "granted" | "denied"
const CHANGE_EVENT = "cp-consent-change";

declare global {
  interface Window {
    cpStartAnalytics?: () => void;
  }
}

// Fallback for browsers that block localStorage: remember the choice for this page view.
let memoryChoice: string | null = null;

function readChoice(): string | null {
  if (memoryChoice) return memoryChoice;
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

export default function CookieConsent() {
  const t = useTranslations("Consent");
  const locale = useLocale();
  // On the server there is no choice to read, so the banner stays hidden until the browser decides.
  const choice = useSyncExternalStore(subscribe, readChoice, () => "server");

  const choose = (value: "granted" | "denied") => {
    memoryChoice = value;
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore: memoryChoice covers this page view
    }
    if (value === "granted") window.cpStartAnalytics?.();
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  if (choice === "server" || choice === "granted" || choice === "denied") return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md z-[70] bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-2xl p-5 md:p-6"
    >
      <p className="text-sm text-slate-600 leading-relaxed">
        {t("text")}{" "}
        <Link href={`/${locale}/privacy`} className="font-semibold text-slate-900 underline underline-offset-2">
          {t("learn_more")}
        </Link>
      </p>
      <div className="mt-4 flex gap-3 justify-end">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="px-5 h-10 rounded-full border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
        >
          {t("decline")}
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="px-5 h-10 rounded-full bg-slate-900 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
        >
          {t("accept")}
        </button>
      </div>
    </div>
  );
}
