import { cn } from "@/lib/utils";
import { useDroppable } from "@dnd-kit/core";
import React from "react";
import { Resizable } from "re-resizable";
import ResizableBox from "./_components/ResizableBox";

type Props = {
  value?: any;
};

const Section = (props: Props) => {
  const { isOver, setNodeRef, rect, active } = useDroppable({
    id: props.value._id,
  });

  return (
    <ResizableBox>
      <div
        ref={setNodeRef}
        className={cn(
          "w-full h-full border border-pink-400 flex items-center justify-center",
          active && "bg-pink-400",
          isOver && "bg-green-400"
        )}
      >
        Sample with default size
      </div>
    </ResizableBox>
  );
};

export default Section;
