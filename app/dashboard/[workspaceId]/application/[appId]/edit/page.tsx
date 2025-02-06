"use client";
import Editor from "../../_components/Editor";

import React, { useEffect, useState } from "react";
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
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const filterOperation = (event: any, mouseX: number, mouseY: number) => {
    const { active } = event;
    // Check if the active item is already in the array
    const Presence_array = Data.filter((item) => item.id === Number(active.id));
    const filtered_array = Data.filter((item) => item.id !== Number(active.id));

    // If the active item is not in the array, add it
    if (Presence_array.length === 0) {
      setData((initialData) => [
        ...initialData,
        {
          id: initialData.length + 144,
          content: "Component " + (initialData.length + 144),
          x: mouseX,
          y: mouseY, // Fixed typo here
        },
      ]);
      return null;
      // Else We are modifying it from the Array
    } else {
      const newData = [
        ...filtered_array,
        {
          id: Presence_array[0]?.id ?? 0,
          content: Presence_array[0]?.content ?? "",
          x: event.delta.x + Presence_array[0]?.x,
          y: event.delta.y + Presence_array[0]?.y,
        },
      ];
      setData(newData);
    }
  };

  const handleDragEnd = (event: any) => {
    if (event.over?.id === "droppable") {
      const mouseX = event.activatorEvent.clientX;
      const mouseY = event.activatorEvent.clientY;
      filterOperation(event, mouseX, mouseY);
      setIsDropped(true);
    }
    setIsDragging(false);
    setActiveId("");
  };

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      onDragStart={(event) => {
        setActiveId(event.active.id as string);
        setIsDropped(false);
        setIsDragging(true);
      }}
      sensors={sensors}
    >
      <div className="relative flex min-h-screen bg-slate-950">
        <div className="flex w-full  gap-1">
          <SidebarProvider>
            <Sidebar />
            <main className="relative flex-1 w-full">
              <SidebarTrigger className="absolute" />
              <SidebarRail />
              {/* Drag Overlay will act as Our Drag Preview */}
              {/* {isDragging ? (
                <div className="fixed w-screen h-screen bg-black">Dragging</div>
              ) : null} */}
              <div></div>
              <Editor data={Data} />
              <ConfigFolder />
              <CodeBlock />
            </main>
          </SidebarProvider>
        </div>
      </div>
    </DndContext>
  );
};

export default page;
