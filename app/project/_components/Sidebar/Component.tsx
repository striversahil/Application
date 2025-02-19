"use client";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/Tooltip/tooltip";
import { Input } from "@/components/ui/input";
import { useDraggable } from "@dnd-kit/core";
import React, { useState } from "react";
import { ReferenceSidebarComponents } from "@/packages/common/referenceSidebarComponents";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Component } from "lucide-react";

type SidebarProps = {
  children?: React.ReactNode;
};

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
const Draggable = ({ id, title, target }: any) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
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
      className={cn(
        "bg-white/20 p-2 rounded-lg text-center",
        isDragging ? "cursor-grabbing" : "cursor-grab"
      )}
    >
      <div>{isDragging ? "Dragging Right Now 🌿" : title}</div>
    </div>
  );
};

const CompSidebar = ({ children }: SidebarProps) => {
  const [open, setOpen] = React.useState(false);
  console.log("Rendered CompSidebar");
  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <Tooltip>
          <PopoverTrigger>
            <TooltipTrigger>
              <div
                className="w-fit justify-center cursor-pointer hover:bg-white/10 p-2 duration-200 rounded-md"
                onClick={() => setOpen(!open)}
              >
                <Component />
              </div>
            </TooltipTrigger>
          </PopoverTrigger>
          <TooltipContent>Components</TooltipContent>
        </Tooltip>
        <PopoverContent className="w-full h-full z-50">
          <div className="bg-gray-800 w-full h-full rounded-md">
            <div className="flex items-center justify-center">
              <Input
                className=" text-white bg-white/20 p-2 rounded-lg w-full "
                placeholder="Search ..."
              ></Input>
            </div>
            <div className="flex flex-col py-[10%]">
              <div className="grid grid-cols-2 gap-5 mx-2">
                {ReferenceSidebarComponents.map(
                  (item: Record<string, any>, index: number) => (
                    <Draggable {...item} key={index} />
                  )
                )}
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CompSidebar;
