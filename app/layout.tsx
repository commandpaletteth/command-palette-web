import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
  // 👇 จุดสำคัญ! เอาโค้ดจาก Google มาวางแทนข้อความในฟันหนูข้างล่างนี้ครับ
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}