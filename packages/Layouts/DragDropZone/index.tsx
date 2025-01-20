"use client";
import React from "react";
import Components from "./Sidebar/Components";
import Sidebar from "./Sidebar";
import { Editor } from "./Editor";
import { DndContext } from "@dnd-kit/core";

type Props = {};

export const DragDropZone = (props: Props) => {
  const [isDropped, setIsDropped] = React.useState(false);
  const [SelectedChilderen, setSelectedChildren] = React.useState<
    React.ReactNode[]
  >([]);

  function handleDragEnd(event: any) {
    // We are setting event active id's when item is dropped i.e. event.over

    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
      setSelectedChildren([event.active.id]);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="w-full h-full flex">
        <Sidebar />
        <Editor isDropped={isDropped} children={SelectedChilderen} />
      </div>
    </DndContext>
  );
};
