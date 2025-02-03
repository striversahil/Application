"use client";
import React from "react";
import Sidebar from "../../_components/Sidebar";
import {
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@components/ui/Sidebar/sidebar";
import CodeBlock from "../../_components/CodeBlock";
import ConfigFolder from "../../_components/Config";
import { DndContext } from "@dnd-kit/core";

type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => {
  return (
    <div>
      <DndContext>
        <SidebarProvider>
          <div className="flex w-full bg-slate-950 gap-1">
            <Sidebar />
            <main className="relative flex-1 w-full">
              <SidebarTrigger />
              <SidebarRail />

              {props.children}
              <CodeBlock />
              <ConfigFolder />
            </main>
          </div>
        </SidebarProvider>
      </DndContext>
    </div>
  );
};

export default RootLayout;
