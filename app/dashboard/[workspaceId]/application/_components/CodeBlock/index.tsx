import { PanelBottomClose, PanelBottomOpen } from "lucide-react";
import React from "react";

type Props = {
  handleOpen: () => void;
};

const CodeBlock = ({ handleOpen }: Props) => {
  return (
    <div className="w-full h-full">
      <div className="relative  bg-slate-800 w-full h-full">
        <div
          className="absolute z-50 top-2 right-0 p-2 bg-black/50 rounded-md cursor-pointer hover:bg-white/10"
          onClick={handleOpen}
        >
          <PanelBottomClose />
        </div>
        CodeBlock
      </div>
    </div>
  );
};

export default CodeBlock;
