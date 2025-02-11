"use client";
import EditorCanvas from "../../_components/EditorCanvas";

import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import {
  PanelBottomClose,
  PanelBottomOpen,
  PanelRightOpen,
} from "lucide-react";

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
import Header from "../../_components/Header";
import Tabs from "../../_components/CodeBlock/tabs";

type Props = {};

interface ComponentData {
  id: number;
  x: number;
  y: number;
  payload: any;
  // Add more configurable properties as needed
}

const test: ComponentData[] = [];

const page = (props: Props) => {
  // Data will be query from DB
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
          id: Date.now(),
          payload: "Component " + Date.now(),
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
          payload: Presence_array[0]?.payload ?? "",
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

  const [openCode, setOpenCode] = React.useState(true);
  const [openConfig, setOpenConfig] = React.useState(true);

  const handleOpenCode = () => {
    setOpenCode(!openCode);
    console.log(openCode);
  };

  const handleOpenConfig = () => {
    setOpenConfig(!openConfig);
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
        <Sidebar />
        <Header />
        <main className="relative flex-1 w-full">
          {/* Main Resizable Pannel Start's Here */}
          <PanelGroup direction="horizontal">
            <Panel defaultSize={80} minSize={40}>
              <PanelGroup direction="vertical">
                <Panel defaultSize={80}>
                  <EditorCanvas data={Data} />
                </Panel>
                {openCode && (
                  <PanelResizeHandle className="p-[2px] cursor-row-resize hover:bg-blue-500" />
                )}
                {openCode && (
                  <Panel
                    defaultSize={40}
                    minSize={20}
                    collapsible
                    onCollapse={handleOpenCode}
                  >
                    <CodeBlock handleOpen={handleOpenCode} />
                  </Panel>
                )}
                {!openCode && (
                  <Tabs handleOpen={handleOpenCode} Open={openCode} />
                )}
              </PanelGroup>
            </Panel>
            {openConfig && (
              <PanelResizeHandle className="p-[2px] cursor-row-resize hover:bg-blue-500" />
            )}
            {openConfig && (
              <Panel
                defaultSize={20}
                minSize={10}
                collapsible
                onCollapse={handleOpenConfig}
                maxSize={40}
              >
                <ConfigFolder handleOpen={handleOpenConfig}>
                  {/* Add Here Config Individual component with   
                  selectedItem={items.find((item) => item.id === selectedId) || null}
                  updateItem={updateItem}
                  
                  */}
                </ConfigFolder>
              </Panel>
            )}
          </PanelGroup>
          {!openConfig && (
            <div
              className="fixed top-2 right-0 p-2 bg-black/50 rounded-md cursor-pointer hover:bg-white/10"
              onClick={handleOpenConfig}
            >
              <PanelRightOpen />
            </div>
          )}
        </main>
      </div>
    </DndContext>
  );
};

export default page;

{
  /* Drag Overlay will act as Our Drag Preview */
}
{
  /* {isDragging ? (
  <div className="fixed w-screen h-screen bg-black">Dragging</div>
) : null} */
}
