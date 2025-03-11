import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "react-redux";
import ReactQueryProvider from "../providers/react_query,";
import { Toaster } from "sonner";
import Protected_Route from "../_protected";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Apotza | Into the Realm of Automation",
  description: "Apotza Internal Tooling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // redirect("/dashboard");

  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <link rel="icon" href="/apotzalogo.jpg" />
      </head>
      <body suppressHydrationWarning>
        <ReactQueryProvider>
          {children}

          <Toaster />
          {/* <Protected_Route> */}
          {/* </Protected_Route> */}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
