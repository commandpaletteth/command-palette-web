import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google"; // 👈 พระเอกของเรา
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

// โหลดฟอนต์ Space Grotesk จาก Google
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // เอามาครบทุกน้ำหนัก
});

export const metadata: Metadata = {
  title: "Command & Palette | High-Performance Digital Agency",
  description: "We engineer digital assets that work for you while you sleep. Specialized in Next.js, AI Automation, and Data-Driven Design.",
  keywords: ["Digital Agency", "Web Development", "Next.js", "AI Automation", "Thailand", "Software House"],
  openGraph: {
    title: "Command & Palette | Stop Renting, Start Owning",
    description: "Building high-performance websites and AI automation for modern businesses.",
    url: "https://www.command-palette.co",
    siteName: "Command & Palette",
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "ZpDC40aeaVvnFoMIrQS_jWJoi0ClcZiqJEU2A8KYPH0", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* เรียกใช้ฟอนต์ตรงนี้ */}
      <body className={`${spaceGrotesk.className} antialiased bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}