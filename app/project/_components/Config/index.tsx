import React from "react";
import { PanelRightClose, PanelRightOpen } from "lucide-react";

type Props = {
  handleOpen: () => void;
  children?: React.ReactNode;
};

const ConfigFolder = ({ handleOpen, children }: Props) => {
  return (
    <div className="relative w-full h-full bg-slate-900 border-l border-slate-500 ">
      <div
        className="absolute z-50 top-2 right-0 p-2 bg-black/50 rounded-md cursor-pointer hover:bg-white/10"
        onClick={handleOpen}
      >
        <PanelRightClose />
      </div>
      ConfigFolder
      {children}
      {/* I will make the handle change configuration as ones and will update it based on the click outside and update*/}
    </div>
  );
};

export default ConfigFolder;
