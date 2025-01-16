import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../store";

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
        <link rel="icon" href="/apotzalogo.jpeg" />
      </head>
      <Provider store={store}>
        <body suppressHydrationWarning>{children}</body>
      </Provider>
    </html>
  );
}
