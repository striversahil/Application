import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "../_app";

export const metadata: Metadata = {
  title: "Apotza",
  description: "Apotza Internal Tooling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <link rel="icon" href="apotzalogo.jpg" />
      </head>
      <Providers>
        <body suppressHydrationWarning>{children}</body>
      </Providers>
    </html>
  );
}
