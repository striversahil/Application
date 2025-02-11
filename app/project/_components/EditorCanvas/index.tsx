"use client";
import React, { useEffect, useState } from "react";
import { useDraggable, useDroppable } from "@dnd-kit/core";

interface ComponentData {
  id: number;
  x: number;
  y: number;
  payload: any;
  // Add more configurable properties as needed
}
type Props = {
  data: ComponentData[];
};

// create array of nested id's of components1

const Draggable = ({ id, payload, x, y }: ComponentData) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id,
    });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    position: "absolute" as const,
    left: x || "auto",
    top: y || "auto",
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
      {payload}
    </div>
  );
};

const EditorCanvas = ({ data }: Props) => {
  // This whole Component is a drag and drop zone
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  return (
    <div className="w-full overflow-auto">
      <div
        className={`w-full min-h-screen h-full` + (isOver ? " bg-white/5" : "")}
        ref={setNodeRef}
      >
        <div className="relative w-full h-full">
          {data.map((item, index) => (
            <Draggable key={index} {...item}></Draggable>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorCanvas;
