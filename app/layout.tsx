import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
  // 👇 อย่าลืมแก้รหัส Google ตรงนี้อีกรอบนะครับ
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
      {/* ใช้ font-sans มาตรฐาน ปลอดภัยไร้บั๊ก */}
      <body className="antialiased font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}