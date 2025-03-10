"use client";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return <div suppressHydrationWarning>{children}</div>;
}
