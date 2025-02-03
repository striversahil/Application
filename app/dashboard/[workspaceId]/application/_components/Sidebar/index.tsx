"use client";
import { Input } from "@components/ui/input";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  Sidebar as SidebarLayout,
} from "@components/ui/Sidebar/sidebar";
import { useDraggable } from "@dnd-kit/core";
import React, { useState } from "react";

const test = [
  {
    id: 11,
    name: "Dashboard",
    icon: "📊",
    description: "View and manage your analytics and reports.",
  },
  {
    id: 21,
    name: "CRM",
    icon: "📇",
    description: "Manage customer relationships and interactions.",
  },
  {
    id: 31,
    name: "Project Management",
    icon: "📅",
    description: "Organize and track your projects and tasks.",
  },
  {
    id: 41,
    name: "Marketing",
    icon: "📢",
    description: "Plan and execute marketing campaigns.",
  },
  {
    id: 51,
    name: "Dashboard",
    icon: "📊",
    description: "View and manage your analytics and reports.",
  },
  {
    id: 61,
    name: "CRM",
    icon: "📇",
    description: "Manage customer relationships and interactions.",
  },
  {
    id: 71,
    name: "Project Management",
    icon: "📅",
    description: "Organize and track your projects and tasks.",
  },
  {
    id: 81,
    name: "Marketing",
    icon: "📢",
    description: "Plan and execute marketing campaigns.",
  },
];

// Draggable Component
const Draggable = ({ id, name, icon, description }: any) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: {
      type: "item",
    },
  });
  return (
    <div
      ref={setNodeRef}
      style={{
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : undefined,
      }}
      {...attributes}
      {...listeners}
      className="bg-white/20 p-2 rounded-lg text-center"
    >
      {name}
    </div>
  );
};

const Sidebar = () => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "sidebar",
    data: {
      type: "sidebar",
    },
  });

  return (
    <div className="bg-blue-800">
      <SidebarLayout className="h-fill">
        <SidebarHeader className="h-[100px] flex items-center justify-center">
          <Input
            className=" text-white bg-white/20 p-2 rounded-lg w-full "
            placeholder="Search ..."
          ></Input>
        </SidebarHeader>
        <SidebarContent className="flex flex-col py-[10%]">
          <div className="grid grid-cols-2 gap-y-6">
            {test.map((item) => (
              <Draggable {...item} key={item.id} />
            ))}
          </div>
        </SidebarContent>
        <SidebarFooter className=""></SidebarFooter>
      </SidebarLayout>
    </div>
  );
};

export default Sidebar;
