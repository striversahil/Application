"use client";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import ProjectAction from "../../../../actions/project";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Section from "./Section";

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
    <div className="relative w-full p-1 pb-[200px] flex flex-col gap-2 overflow-hidden">
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
