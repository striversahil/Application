"use client";
import React from "react";

import { Reference } from "@repo/common/Json/Reference";
import { useDraggable } from "@dnd-kit/core";

type Props = {};

function DraggableToolboxItem({ id, Component }: any) {
  const { attributes, listeners, setNodeRef, isDragging, transform } =
    useDraggable({
      id: id,
    });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      className={`border border-red-500  p-4 cursor-grab ${isDragging ? "opacity-50" : ""}`}
      {...listeners}
      {...attributes}
      style={style}
    >
      {Component}
    </div>
  );
}

const Components = (props: Props) => {
  return (
    <div className="grid grid-cols-2">
      {Reference.map((item, index) => (
        <div key={index} className="m-5 bg-slate-400 rounded-md gap-10">
          <DraggableToolboxItem
            className=""
            id={item.id}
            Component={item.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Components;
