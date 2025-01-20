import React from "react";
import Protected_Route from "../../_protected";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <Protected_Route>
      <div suppressHydrationWarning>{children}</div>
    </Protected_Route>
  );
}
