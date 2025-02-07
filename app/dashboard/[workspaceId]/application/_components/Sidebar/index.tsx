import React, { useRef } from "react";
import CompSidebar from "./Component";
import { LaptopMinimal, PanelLeftClose, Component } from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@components/ui/Tooltip/tooltip";

type Props = {};

const Reference = [
  {
    title: "Component",
    icon: <Component />,
  },
  {
    title: "Workflow",
    icon: <LaptopMinimal />,
  },
  {
    title: "Preview",
    icon: <LaptopMinimal />,
  },
];

// Add no. of Sidebar as per need
const Navigators = Array(3).fill(false);

const Sidebar = (props: Props) => {
  const [State, setState] = React.useState(Navigators);

  const handleClick = (index: number) => {
    const newState = [...Navigators];
    if (!index || !State[index]) {
      newState[index] = !newState[index];
    }
    setState(newState);
  };

  return (
    <div className="flex z-10 duration-1000">
      <TooltipProvider>
        <div className="w-fit h-full bg-inherit flex-col bg-slate-900 space-y-10">
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
          {Reference.map((item, index) => (
            <div key={index} className="w-full flex justify-center">
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className="w-fit justify-center cursor-pointer hover:bg-white/10 p-2 duration-200 rounded-md"
                    onClick={() => handleClick(index)}
                  >
                    {State[index] ? <PanelLeftClose /> : item.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>{item.title}</TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>
        {/* Add Custom Sidebar's for Different Usecases */}
      </TooltipProvider>
      <div className="absolute top-[10%] left-[3%] h-[70vh] rounded-md">
        {State[0] && <CompSidebar />}
        {State[1] && <CompSidebar />}
        {State[2] && <CompSidebar />}
        {State.includes(true) && (
          <div
            className="absolute top-0 -right-10 p-2 bg-black/50 rounded-xl cursor-pointer hover:bg-white/10"
            onClick={() => handleClick(Number.MAX_SAFE_INTEGER)}
          >
            <PanelLeftClose />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
