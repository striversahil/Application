"use client";
import React, { useEffect, useState } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable, useDroppable } from "@dnd-kit/core";

type Props = {};

// create array of nested id's of components1

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
    x: 174,
    y: 415,
  },
  {
    id: 2,
    content: "Component 2",
    x: 574,
    y: 475,
  },
  {
    id: 3,
    content: "Component 3",
    x: 18,
    y: 72,
  },
  {
    id: 4,
    content: "Component 4",
    x: 877,
    y: 459,
  },
  {
    id: 5,
    content: "Component 5",
    x: 154,
    y: 421,
  },
];

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

const page = (props: Props) => {
  return (
    <div className="w-full h-full">
      <div>
        {test.map((item) => (
          <Draggable key={item.id} {...item}></Draggable>
        ))}
      </div>
    </div>
  );
};

export default page;

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
