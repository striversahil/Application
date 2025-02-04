"use client";
import React, { useEffect, useState } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable, useDroppable } from "@dnd-kit/core";

interface ComponentData {
  id: number;
  x: number;
  y: number;
  content: string;
  // Add more configurable properties as needed
}
type Props = {
  data: ComponentData[];
};

// create array of nested id's of components1

const Draggable = ({ id, content, x, y }: ComponentData) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    position: "absolute" as const,
    left: x,
    top: y,
    opacity: isDragging ? 0.5 : 1,
    background: isDragging ? "lightgreen" : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white rounded shadow-md touch-none"
    >
      {/* Your content here */}
      {content}
    </div>
  );
};

const Editor = ({ data }: Props) => {
  return (
    <div className="w-full h-full">
      <div>
        {data.map((item) => (
          <Draggable key={item.id} {...item}></Draggable>
        ))}
      </div>
    </div>
  );
};

export default Editor;

// const Droppable = ({ id, children }: any) => {
//   const { isOver, setNodeRef } = useDroppable({
//     id: "droppable",
//   });
//   const style = {
//     color: isOver ? "green" : undefined,
//   };
//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       className="bg-white/20 w-full h-full p-2 rounded-lg text-center"
//     >
//       {children}
//     </div>
//   );
// };
