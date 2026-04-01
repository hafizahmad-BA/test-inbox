import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InboxWarm - Ensure Your Emails Land in the Inbox, Every Time",
  description: "Improve email deliverability with AI-powered automatic warm-up. Boost sender reputation, prevent spam placement, and increase your cold email ROI.",
  keywords: ["email warmup", "email deliverability", "warm up email domain", "avoid spam emails", "cold email tool"],
  openGraph: {
    title: "InboxWarm - Ensure Your Emails Land in the Inbox",
    description: "The AI-powered email warmup tool that actually works. Stop landing in spam securely and automatically.",
    type: "website",
  }
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
