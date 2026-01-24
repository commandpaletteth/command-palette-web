import type { Metadata } from "next";
import { Manrope, IBM_Plex_Sans_Thai } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className={`${manrope.variable} ${ibmThai.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar /> 
          
          <main className="flex-grow">
            {children}
          </main>

          <Footer />

          {/* ✅ ส่วนที่เพิ่มใหม่: Logic กัน Data Pollution */}
          {/* ทำงานเฉพาะตอนขึ้น Production เท่านั้น (Localhost จะไม่โหลดเลย) */}
          {process.env.NODE_ENV === 'production' && (
            <>
              <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-PH07GMS7JG"
              />
              <Script
                id="google-analytics"
                strategy="afterInteractive"
              >
                {`
                  // Secret Key Check: เช็คว่ามีกุญแจลับชื่อ 'CP_DEV_MODE' ไหม?
                  // ถ้าเจอกุญแจนี้ ให้บล็อก GA ทันที แม้จะอยู่บนเว็บจริง
                  const isDevMode = localStorage.getItem('CP_DEV_MODE') === 'true';

                  if (!isDevMode) {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-PH07GMS7JG');
                  } else {
                    console.log('🚫 GA4 blocked by CP_DEV_MODE (Command & Palette Internal)');
                  }
                `}
              </Script>
            </>
          )}

        </NextIntlClientProvider>
      </body>
    </html>
  );
}