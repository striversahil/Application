import { cn } from "@/lib/utils";
import { PanelBottomClose, PanelBottomOpen } from "lucide-react";
import React from "react";

type Props = {
  handleOpen: () => void;
  Open?: boolean;
};

const Tabs = (props: Props) => {
  const handleOpen = () => {
    if (props.Open === false) {
      props.handleOpen();
    }
  };
  const HandleOpenIcon = (): React.JSX.Element => {
    return (
      <div
        className="absolute z-50 top-0 right-0 p-1 bg-red-500 rounded-md cursor-pointer hover:bg-red-500/50"
        onClick={props.handleOpen}
      >
        {props.Open === false ? <PanelBottomOpen /> : <PanelBottomClose />}
      </div>
    );
  };

  return (
    <div
      className={cn(
        "relative w-full h-[3vh] bg-black",
        props.Open === false && "cursor-pointer"
      )}
      onClick={handleOpen}
    >
      <HandleOpenIcon />
      <div>Tabs</div>
    </div>
  );
};

export default Tabs;
