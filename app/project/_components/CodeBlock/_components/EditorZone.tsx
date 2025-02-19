import React from "react";
import IDEeditor from "./IDEeditor";

type Props = {
  value?: any;
};

export const EditorZone = (props: Props) => {
  return (
    <div className="relative w-full h-full">
      <IDEeditor />
      <div className="absolute w-12 h-full z-10 top-0  right-0 bg-[#1e1e1e]"></div>
    </div>
  );
};
