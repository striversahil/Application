"use client";
import React from "react";
import Components from "./Sidebar/Components";
import Sidebar from "./Sidebar";
import { Editor } from "./Editor";
import { DndContext } from "@dnd-kit/core";

type Props = {};

export const DragDropZone = (props: Props) => {
  function handleDragEnd(event: any) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }
  const [isDropped, setIsDropped] = React.useState(false);
  // const draggableMarkup = <Draggable>Drag me</Draggable>;`
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="w-full h-full flex">
        <Sidebar />
        <Editor isDropped={isDropped} />
      </div>
    </DndContext>
  );
};

// import React, { useState } from "react";

// import { Droppable } from "./Droppable";
// import { Draggable } from "./Draggable";

// function App() {

//   return (
//     <DndContext onDragEnd={handleDragEnd}>
//       {!isDropped ? draggableMarkup : null}
//       <Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
//     </DndContext>
//   );

// }
