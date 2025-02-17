"use client";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  Sidebar as SidebarLayout,
} from "@/components/ui/Sidebar/sidebar";
import React, { useState } from "react";
import Highlights from "./Highlight/Highlights";
import Subitems from "./Subitems";

const Sidebar = () => {
  return (
    <div className="bg-blue-800">
      <SidebarLayout className="h-fill">
        <SidebarHeader className="">
          <Highlights />
        </SidebarHeader>
        <SidebarContent className="">
          <button className="w-full flex items-center justify-center hover:bg-gray-700 p-2 rounded">
            Toggle Sidebar
          </button>
          <Subitems />
        </SidebarContent>
        <SidebarFooter className="">
          <Highlights />
        </SidebarFooter>
      </SidebarLayout>
    </div>
  );
};

export default Sidebar;
