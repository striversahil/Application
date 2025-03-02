"use client";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import ProjectAction from "@/actions/project";
import { useEffect, useState } from "react";

export interface ComponentInterface {
  name: string;
  dnd_id: string;
  payload: string; // Here my Component Payload i.e. Data will Come
  configuration: object; // This will Contain Component Configuration
  coordinates: {
    x: number;
    y: number;
  };
}

const Draggable = ({ dnd_id, payload, coordinates }: ComponentInterface) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: dnd_id,
    });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    position: "absolute" as const,
    left: coordinates?.x || 10,
    top: coordinates?.y || 10,
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
      <div>Hello There</div>
    </div>
  );
};

const EditorCanvas = () => {
  const [components, setComponents] = useState<ComponentInterface[]>([]);
  const { isLoading, data } = ProjectAction.getComponents();
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  // useEffect(() => {
  //   if (data) {
  //     setComponents(Array<ComponentInterface>(data));
  //   }
  // });

  if (isLoading) return null;
  // This whole Component is a drag and drop zone
  return (
    <div className="w-full overflow-auto">
      <div
        className={`w-full min-h-screen h-full` + (isOver ? " bg-white/5" : "")}
        ref={setNodeRef}
      >
        <div className="relative w-full h-full">
          {components.map((item, index) => (
            <Draggable key={index} {...item}></Draggable>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorCanvas;
