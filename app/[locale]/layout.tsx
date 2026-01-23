import type { Metadata } from "next";
import { Manrope, IBM_Plex_Sans_Thai } from "next/font/google";
import Script from "next/script"; // ✅ 1. เพิ่มบรรทัดนี้เพื่อใช้ Script
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from "@/components/Navbar";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope',
  display: 'swap',
});

const ibmThai = IBM_Plex_Sans_Thai({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-ibm-thai',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Command & Palette | Digital Asset Agency",
  description: "High-Performance Web & AI Automation Agency based in Bangkok.",
  // ✅ 2. Google Site Verification (เพื่อยืนยันความเป็นเจ้าของเว็บกับ Google)
  verification: {
    google: "ZpDC40aeaVvnFoMIrQS_jWJoi0ClcZiqJEU2A8KYPH0", 
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* ✅ 3. Google Analytics (GA4) Script: G-PH07GMS7JG */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-PH07GMS7JG`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PH07GMS7JG');
          `}
        </Script>
      </head>
      <body className={`${manrope.variable} ${ibmThai.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar /> 
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}