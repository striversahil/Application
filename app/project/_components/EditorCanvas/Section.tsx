import { cn } from "@/lib/utils";
import { useDroppable } from "@dnd-kit/core";
import React from "react";
import { Resizable } from "re-resizable";

type Props = {
  value?: any;
};

const Section = (props: Props) => {
  const { isOver, setNodeRef, rect, active } = useDroppable({
    id: props.value._id,
  });

  return (
    <Resizable
      defaultSize={{
        width: 320,
        height: 10,
      }}
      minHeight={100}
      minWidth={100}
      snap={{
        x: [10, 20],
        y: [10, 20],
      }}
      snapGap={10}
      className={cn(
        "w-full h-[200px] border border-pink-400 flex items-center justify-center",
        active && "bg-pink-400",
        isOver && "bg-green-400"
      )}
    >
      <div ref={setNodeRef} className="w-full h-full">
        Sample with default size
      </div>
      ;
    </Resizable>
  );
};

export default Section;
