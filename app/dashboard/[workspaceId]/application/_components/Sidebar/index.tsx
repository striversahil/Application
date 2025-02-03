"use client";
import { Input } from "@components/ui/input";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  Sidebar as SidebarLayout,
} from "@components/ui/Sidebar/sidebar";
import React, { useState } from "react";

const Sidebar = () => {
  return (
    <div className="bg-blue-800">
      <SidebarLayout className="h-fill">
        <SidebarHeader className="">
          <Input
            className=" text-white bg-white/20 p-2 rounded-lg w-full translate-y-10"
            placeholder="Search ..."
          ></Input>
        </SidebarHeader>
        <SidebarContent className=""></SidebarContent>
        <SidebarFooter className=""></SidebarFooter>
      </SidebarLayout>
    </div>
  );
};

export default Sidebar;
