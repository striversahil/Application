"use client";
import Editor from "../../_components/Editor";

import React, { useState } from "react";
import Sidebar from "../../_components/Sidebar";
import {
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@components/ui/Sidebar/sidebar";
import CodeBlock from "../../_components/CodeBlock";
import ConfigFolder from "../../_components/Config";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

type Props = {};

interface ComponentData {
  id: number;
  x: number;
  y: number;
  content: string;
  // Add more configurable properties as needed
}

const test: ComponentData[] = [
  {
    id: 1,
    content: "Component 1",
    x: 1274,
    y: 415,
  },
  {
    id: 2,
    content: "Component 2",
    x: 574,
    y: 1175,
  },
  {
    id: 3,
    content: "Component 3",
    x: 18,
    y: 822,
  },
  {
    id: 4,
    content: "Component 4",
    x: 877,
    y: 14259,
  },
  {
    id: 5,
    content: "Component 5",
    x: 154,
    y: 421,
  },
];

const page = (props: Props) => {
  const [Data, setData] = useState<ComponentData[]>(test);
  const [activeId, setActiveId] = useState<string>("");
  const [IsDropped, setIsDropped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );
  return (
    <DndContext
      onDragEnd={() => {
        setActiveId("");
        setIsDropped(true);
        setIsDragging(false);
      }}
      onDragStart={(event) => {
        setActiveId(event.active.id as string);
        setIsDropped(false);
        setIsDragging(true);
      }}
      sensors={sensors}
    >
      <div className="relative flex min-h-screen bg-slate-950">
        <SidebarProvider>
          <div className="flex w-full bg-slate-950 gap-1">
            <Sidebar />
            <main className="relative flex-1 w-full">
              <SidebarTrigger />
              <SidebarRail />
              {/* Drag Overlay will act as Our Drag Preview */}
              {/* {isDragging ? (
                <div className="fixed w-screen h-screen bg-black">Dragging</div>
              ) : null} */}
              <div></div>
              <Editor data={Data} />
              <CodeBlock />
              <ConfigFolder />
            </main>
          </div>
        </SidebarProvider>
      </div>
    </DndContext>
  );
};

export default page;
