// Worker for Sidebar
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { data } from "@repo/common/Json";

type DraggableToolboxProp = {
  id: string;
  Component: string;
  href: string;
};

const DraggableToolboxItem = ({
  id,
  Component,
  href,
}: DraggableToolboxProp) => {
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

  return (
    <div
      ref={setNodeRef}
      className={`border p-4  ${isDragging ? "absolute w-fit opacity-50 border-green-500 rounded-xl cursor-grab" : "cursor-grab"}`}
      {...listeners}
      {...attributes}
      style={style}
    >
      {renderComponent()}
    </div>
  );
};
export default DraggableToolboxItem;
