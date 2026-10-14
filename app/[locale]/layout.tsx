import type { Metadata } from "next";
import { Manrope, IBM_Plex_Sans_Thai } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope',
  display: 'swap',
});

const ibmThai = IBM_Plex_Sans_Thai({
  // Only the weights the site actually uses (font-light … font-bold)
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-ibm-thai',
  display: 'swap',
});

export const metadata: Metadata = {
  // ✅ เติมบรรทัดนี้: ใส่ Domain จริงของ Command & Palette 
  // (ถ้ามี Env แนะนำให้ดึงจาก process.env.NEXT_PUBLIC_BASE_URL แทนเพื่อความชัวร์ในแต่ละ Environment)
  metadataBase: new URL('https://www.command-palette.co'), 
  
  title: "Command & Palette | Websites that bring customers to you",
  description: "Fast, modern websites for growing businesses. Fixed price from $1,750, live in 1 to 3 weeks.",
  openGraph: {
    siteName: "Command & Palette",
    type: "website",
    images: [{ url: "/opengraph-image?v=3", width: 1200, height: 630, alt: "Command & Palette" }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image?v=3"] },
  icons: {
    icon: '/favicon.svg',
  },
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
          
          {/* Navbar ถูกเรียกใช้ตรงนี้ แปลว่าต้องไปแก้โลโก้ในไฟล์ components/Navbar.tsx ครับ */}
          <Navbar /> 
          
          <main className="flex-grow">
            {children}
          </main>

          <Footer />

          {/* Analytics: GA4 loads in production, but only starts measuring after the visitor accepts cookies (PDPA).
              CP_DEV_MODE=true in localStorage still blocks it on our own machines. */}
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
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = gtag;
                  gtag('consent', 'default', {
                    analytics_storage: 'denied',
                    ad_storage: 'denied',
                    ad_user_data: 'denied',
                    ad_personalization: 'denied'
                  });
                  window.cpStartAnalytics = function () {
                    if (window.cpAnalyticsStarted) return;
                    var isDevMode = false;
                    try { isDevMode = localStorage.getItem('CP_DEV_MODE') === 'true'; } catch (e) {}
                    if (isDevMode) { console.log('GA4 blocked by CP_DEV_MODE'); return; }
                    window.cpAnalyticsStarted = true;
                    gtag('consent', 'update', { analytics_storage: 'granted' });
                    gtag('js', new Date());
                    gtag('config', 'G-PH07GMS7JG');
                  };
                  var consent = null;
                  try { consent = localStorage.getItem('cp_cookie_consent'); } catch (e) {}
                  if (consent === 'granted') window.cpStartAnalytics();
                `}
              </Script>
            </>
          )}

          <CookieConsent />

        </NextIntlClientProvider>
      </body>
    </html>
  );
}