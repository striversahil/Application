"use client";
import { getUserInfo } from "@actions/user";
import { redirect } from "next/navigation";
import React from "react";
import useBackend from "../../hooks/useBackend";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  // const { data: rawdata, isLoading } = getUserInfo();
  // if (!isLoading) {
  //   return <div>{rawdata}</div>;
  // }
  return <div suppressHydrationWarning>{children}</div>;
}
