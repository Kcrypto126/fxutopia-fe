import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Inter } from "next/font/google";
import "./globals.css";

import React from "react";
import Provider from "@/providers";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import PageLayout from "@/components/layouts/PageLayout";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FX Utopia",
  description: "AI Power Trading Community Platform",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "X-UA-Compatible": "IE=edge",
    "format-detection": "telephone=no",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="dark">
      <body
        className={`font-satoshi ${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} antialiased`}
      >
        <Provider>
          <Header />
          <PageLayout>{children}</PageLayout>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
