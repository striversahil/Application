import { PanelBottomClose } from "lucide-react";
import React from "react";

type Props = {
  handleOpen: () => void;
};

const Tabs = (props: Props) => {
  return (
    <div className="relative w-full h-[3vh]  bg-white/10">
      <div
        className="absolute z-50 top-0 right-0 p-1 bg-black/50 rounded-md cursor-pointer hover:bg-white/10"
        onClick={props.handleOpen}
      >
        <PanelBottomClose />
      </div>
    </div>
  );
};

export default Tabs;
