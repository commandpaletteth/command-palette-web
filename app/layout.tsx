import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
