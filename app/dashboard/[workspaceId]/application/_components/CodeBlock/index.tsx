import { PanelBottomClose, PanelBottomOpen } from "lucide-react";
import React from "react";

type Props = {};

const CodeBlock = (props: Props) => {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full h-full">
      <div
        className="fixed bottom-2 right-[50%] p-2 bg-black/50 rounded-xl cursor-pointer hover:bg-white/10"
        onClick={handleOpen}
      >
        <PanelBottomOpen />
      </div>
      {open && (
        <div className="relative border border-white bg-slate-800 w-full h-full">
          <div
            className="absolute z-50 top-2 right-0 p-2 bg-black/50 rounded-xl cursor-pointer hover:bg-white/10"
            onClick={handleOpen}
          >
            <PanelBottomClose />
          </div>
          CodeBlock
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
