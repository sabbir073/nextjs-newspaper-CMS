"use client";

import { SessionProvider } from "next-auth/react";
import "./globals.css";
import localFont from "next/font/local";
import { ReactNode } from "react";

const solaiman = localFont({
  src: [{ path: "./fonts/SolaimanLipi.ttf", weight: "400" }],
  variable: "--solaiman",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <SessionProvider>
      <html lang="en" className={`${solaiman.variable} font-solaiman`}>
        <body>{children}</body>
      </html>
    </SessionProvider>
  );
}
