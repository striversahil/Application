"use client";
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

type Props = {
  children: React.ReactNode;
};

function DraggableItemOverlay({ id }: any) {
  return (
    <div className="draggable-item-overlay">Draggable Overlay for {id}</div>
  );
}
const RootLayout = (props: Props) => {
  const [activeId, setActiveId] = useState<string>("");
  const [IsDropped, setIsDropped] = useState(false);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );
  return (
    <div>
      <DndContext
        onDragEnd={() => setActiveId("")}
        onDragStart={(event) => setActiveId(event.active.id as string)}
        sensors={sensors}
      >
        <SidebarProvider>
          <div className="flex w-full bg-slate-950 gap-1">
            <Sidebar />
            <main className="relative flex-1 w-full">
              <SidebarTrigger />
              <SidebarRail />
              <DragOverlay>
                {activeId ? <DraggableItemOverlay id={activeId} /> : null}
              </DragOverlay>
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
