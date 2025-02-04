"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const RootLayout = (props: Props) => {
  return <div suppressHydrationWarning>{props.children}</div>;
};

export default RootLayout;
