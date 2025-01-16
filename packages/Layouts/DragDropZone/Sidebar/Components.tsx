"use client";
import React, { useEffect } from "react";

import { Reference } from "@repo/common/Json/Reference";
import { data } from "@repo/common/Json";

import { useDraggable } from "@dnd-kit/core";

type Props = {};

function DraggableToolboxItem({ id, Component, href }: any) {
  const { attributes, listeners, setNodeRef, isDragging, transform } =
    useDraggable({
      id: id,
    });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  const renderComponent = (): JSX.Element => {
    if (isDragging) {
      // If the component is being dragged, render the usage component
      return data[href]?.usage || <></>;
    } else {
      // If the component is not being dragged, render the component name
      return <div>{Component}</div>;
    }
  };
  useEffect(() => {
    // console.log(transform);
  }, [transform]);

  return (
    <div
      ref={setNodeRef}
      className={`border p-4 cursor-grab ${isDragging ? "absolute w-fit opacity-50 border-green-500 rounded-xl" : ""}`}
      {...listeners}
      {...attributes}
      style={style}
    >
      {renderComponent()}
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
            id={item.href}
            Component={item.title}
            href={item.href}
          />
        </div>
      ))}
    </div>
  );
};

export default Components;
