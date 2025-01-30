import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@components/ui/dropdown-menu";
import {
  ChartBarIncreasing,
  Expand,
  LucideArrowUpDown,
  RedoDot,
} from "lucide-react";
import React from "react";
import Dropdown from "./Dropdown";

type Props = {
  className?: string;
};

const Highlights = (props: Props) => {
  return (
    <div className="relative w-full h-fit ">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="bg-blue-500/50 m-1 cursor-pointer  flex items-center justify-center  p-3 rounded-xl">
            <div className="w-8">
              <ChartBarIncreasing />
            </div>

            <div className="flex-1 flex flex-col pr-10 justify-center w-full">
              <span className="font-bold text-left text-xl text-white capitalize ">
                Your Name
              </span>
              <span className=" text-left text-sm text-white/50">
                Your Email
              </span>
            </div>
            <div className=" h-full ">
              <LucideArrowUpDown />
            </div>
          </div>
        </DropdownMenuTrigger>
        <Dropdown />
      </DropdownMenu>
    </div>
  );
};

export default Highlights;
