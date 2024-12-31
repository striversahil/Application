"use client";
import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Editor(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-gray-900  flex-grow ${isOver ? "border-[3px] border-green-500" : ""}`}
    >
      {props.children}
    </div>
  );
}
