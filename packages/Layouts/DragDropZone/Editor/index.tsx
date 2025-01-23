"use client";
import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { data } from "@packages/common/Json";

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
      className={`bg-gray-900  flex-grow ${isOver && "border-[3px] border-green-500 bg-gray-900/80 "}`}
    >
      {props.children.map((child: any, index: any) => (
        <div
          key={index}
          className="flex w-full justify-center items-center h-full"
        >
          {data[child]?.usage || <></>}
        </div>
      ))}
    </div>
  );
}
