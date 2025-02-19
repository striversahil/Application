import React, { useRef } from "react";
import CompSidebar from "./Component";
import { LaptopMinimal, PanelLeftClose, Component } from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/Tooltip/tooltip";
import {
  PopoverContent,
  PopoverTrigger,
  Popover,
} from "@radix-ui/react-popover";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="flex z-10 duration-1000">
      <div className="w-fit h-full bg-inherit flex-col bg-slate-900 space-y-10 border-r border-slate-700">
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={"/apotzalogo.jpg"}
              width={50}
              height={50}
              alt="brand_pic"
              className="m-2 bg-white/20 rounded-xl cursor-pointer hover:animate-pulse"
              onClick={() => window.location.reload()}
            />
          </TooltipTrigger>
          <TooltipContent>Apotza</TooltipContent>
        </Tooltip>
        {/* Todo : Add Navigations as per need */}
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <CompSidebar />
          <CompSidebar />
          <CompSidebar />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

{
  /* Add Custom Sidebar's for Different Usecases */
}
{
  /* {State.includes(true) && (
    <div className="absolute top-[10%] left-[3%] h-[70vh] w-[20%] border-outline p-5 bg-slate-800 outline-blue-300 shadow-lg   rounded-md">
      {State[0] && <CompSidebar />}
      {State[1] && <CompSidebar />}
      {State[2] && <CompSidebar />}
      <div
        className="absolute top-0 -right-[12%] p-2 bg-black/50 rounded-md cursor-pointer hover:bg-white/10"
        onClick={() => handleClick(undefined)}
      >
        <PanelLeftClose />
      </div>
    </div>
  )} */
}
