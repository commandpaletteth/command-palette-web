import type { Metadata } from "next";
import { Manrope, IBM_Plex_Sans_Thai } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // ✅ 1. Import Footer เข้ามา

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
      {/* ✅ 2. เพิ่ม flex flex-col min-h-screen ที่ body เพื่อจัด layout ให้เต็มจอเสมอ */}
      <body className={`${manrope.variable} ${ibmThai.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar /> 
          
          {/* ✅ 3. เอาเนื้อหาเว็บ (children) ใส่ใน main และสั่ง flex-grow เพื่อดัน Footer ลงล่าง */}
          <main className="flex-grow">
            {children}
          </main>

          <Footer /> {/* ✅ 4. วาง Footer ตรงนี้ มันจะโชว์ทุกหน้าอัตโนมัติครับ */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}