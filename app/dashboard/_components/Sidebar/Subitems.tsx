import {
  SidebarMenu,
  SidebarMenuSub,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarMenuSkeleton,
} from "@/components/ui/Sidebar/sidebar";
import React from "react";

type Props = {};

const Subitems = (props: Props) => {
  return (
    <SidebarMenu>
      {Array.from({ length: 5 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton />
          <SidebarMenuSub>
            <SidebarMenuSubItem>
              <SidebarMenuSkeleton />
            </SidebarMenuSubItem>
          </SidebarMenuSub>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export default Subitems;
