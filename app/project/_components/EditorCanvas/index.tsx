"use client";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import ProjectAction from "@/actions/project";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Section from "./Section";

export interface ComponentInterface {
  name: string;
  _id: string;
  payload: string; // Here my Component Payload i.e. Data will Come
  configuration: object; // This will Contain Component Configuration
  coordinates: number[];
}

const Draggable = ({ _id, payload, coordinates }: ComponentInterface) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: _id,
    });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    position: "absolute" as const,
    left: coordinates[0],
    top: coordinates[1],
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "bg-white rounded shadow-md touch-none px-1 w-fit text-black  outline",
        isDragging
          ? "cursor-grabbing outline-green-300"
          : "cursor-grab  outline-pink-400"
      )}
    >
      {/* Your content here */}
      <div>{_id}</div>
    </div>
  );
};

const EditorCanvas = () => {
  const [Sections, setSections] = useState<any>([]);
  const { isLoading, data } = ProjectAction.getSections();

  useEffect(() => {
    if (data) {
      setSections(data.payload.sections);
    }
  }, [data]);

  if (!Sections) return null;

  // console.log(components);

  // This whole Component is a drag and drop zone
  return (
    <div className="relative w-full p-1 pb-[200px] flex flex-col gap-[200px] overflow-hidden">
      {Sections.map((item: any, index: number) => (
        <Section key={index} value={item} />
      ))}
      {/* <div
        className={`w-full min-h-screen h-full` + (isOver ? " bg-white/5" : "")}
        ref={setNodeRef}
      >
        <div className="relative w-full h-full">
          {components.map((item: any, index: number) => (
            <Draggable key={index} {...item}></Draggable>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default EditorCanvas;
