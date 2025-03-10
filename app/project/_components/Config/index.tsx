import React from "react";
import { PanelRightClose, PanelRightOpen } from "lucide-react";
import ConfigRoute from "./ConfigRoute";

type Props = {
  handleOpen: () => void;
  selectedItem?: any;
};

// Selected Component == Object Detect and pass as Value

const ConfigFolder = ({ handleOpen }: Props) => {
  return (
    <div className="relative w-full h-full bg-slate-900 border-l border-slate-500 ">
      <div
        className="absolute z-50 top-2 right-0 p-2 bg-black/50 rounded-md cursor-pointer hover:bg-white/10"
        onClick={handleOpen}
      >
        <PanelRightClose />
      </div>
      ConfigFolder
      <ConfigRoute value={Object} />
      {/* I will Set the Config route with that Object Access which to Rendered */}
    </div>
  );
};

export default ConfigFolder;
