import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} className="bg-gray-600 w-full">
      {props.children}
      <div>{isOver ? "👍" : "👎"}</div>
    </div>
  );
}
