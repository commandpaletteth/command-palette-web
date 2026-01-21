import type { Metadata } from "next";
import { Inter } from "next/font/google"; // ✅ ใช้ Google Font แทน (กันเหนียว)
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

// เรียกใช้ฟอนต์ Inter
const inter = Inter({ subsets: ["latin"] });

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
  // 👇 จุดใส่รหัส Google (อย่าลืมแก้ตรงนี้นะครับ!)
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
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}