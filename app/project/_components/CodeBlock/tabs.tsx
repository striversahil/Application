import { cn } from "@/lib/utils";
import { PanelBottomClose, PanelBottomOpen } from "lucide-react";
import React from "react";

type Props = {
  handleOpen: () => void;
  Open?: boolean;
};

const Tabs = (props: Props) => {
  return (
    <div
      className={cn(
        "relative w-full h-[3vh]  bg-white/10",
        props.Open === true && "hidden"
      )}
    >
      <div
        className="absolute z-50 top-0 right-0 p-1 bg-black/50 rounded-md cursor-pointer hover:bg-white/10"
        onClick={props.handleOpen}
      >
        {props.Open === false ? <PanelBottomOpen /> : <PanelBottomClose />}
      </div>
    </div>
  );
};

export default Tabs;
