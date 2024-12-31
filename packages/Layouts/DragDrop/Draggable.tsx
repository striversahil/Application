import React from "react";
import { useDraggable } from "@dnd-kit/core";

function DraggableToolboxItem({ id, label }: any) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`border border-red-500  p-4 cursor-grab ${isDragging ? "opacity-50" : ""}`}
      {...listeners}
      {...attributes}
    >
      {label}
    </div>
  );
}

export function Toolbox() {
  const tools = [
    { id: "button", label: "Button" },
    { id: "text-field", label: "Text Field" },
    { id: "image", label: "Image" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h3>Toolbox</h3>
      {tools.map((tool) => (
        <DraggableToolboxItem key={tool.id} id={tool.id} label={tool.label} />
      ))}
    </div>
  );
}
