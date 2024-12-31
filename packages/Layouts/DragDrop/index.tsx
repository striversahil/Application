"use client";
import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";

export default function Whiteboard() {
  const [components, setComponents] = useState<
    { id: string; position: { x: number; y: number } }[]
  >([]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (over?.id === "whiteboard") {
      setComponents((prev) => [
        ...prev,
        { id: active.id, position: { x: 100, y: 100 } },
      ]);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div
        id="whiteboard"
        style={{
          width: "100%",
          height: "500px",
          border: "2px dashed #ccc",
          position: "relative",
        }}
      >
        {components.map((comp, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: comp.position.y,
              left: comp.position.x,
              padding: "8px",
              backgroundColor: "#fff",
              border: "1px solid black",
            }}
          >
            {comp.id}
          </div>
        ))}
      </div>
    </DndContext>
  );
}
