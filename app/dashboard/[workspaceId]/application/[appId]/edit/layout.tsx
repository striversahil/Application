"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const RootLayout = (props: Props) => {
  return (
    <div suppressHydrationWarning suppressContentEditableWarning>
      {props.children}
    </div>
  );
};

export default RootLayout;
