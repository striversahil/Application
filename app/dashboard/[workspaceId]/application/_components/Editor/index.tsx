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
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
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
      className="bg-white rounded shadow-md touch-none w-fit text-black"
    >
      {/* Your content here */}
      {content}
    </div>
  );
};

const Editor = ({ data }: Props) => {
  const testRef = React.useRef<HTMLDivElement>(null);

  // This whole Component is a drag and drop zone
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  return (
    <div ref={testRef}>
      <div
        className={
          `w-full min-h-screen` +
          (isOver ? " border-[3px] border-green-500" : "")
        }
        ref={setNodeRef}
      >
        <div className="relative w-full h-full">
          {data.map((item) => (
            <Draggable key={item.id} {...item}></Draggable>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Editor;
