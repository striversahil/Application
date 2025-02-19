import { Skeleton } from "@/components/ui/skeleton";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Cable, CirclePlus, PanelBottomClose, Trash } from "lucide-react";
import React from "react";
import useTabFallback from "../utils/TabFallback";
import { cn } from "@/lib/utils";
import { ComboPopAPI } from "./_components/PopOverSelect";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import TabBlockAction from "@/actions/project/tabBlock";
import ProjectAction from "@/actions/project";
import DeleteTab from "./_components/DeleteTab";

type Props = {
  handleOpen: () => void;
  Open?: boolean;
  // BlockData: (data: any) => void;
};

const Tabs = (props: Props) => {
  const { isLoading, data } = ProjectAction.getCodeBlocks();

  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex h-[36px] mx-1">
      <TabsList className="relative flex flex-1 items-center justify-start gap-2 flex-wrap overflow-y-scroll max-w-full">
        {isLoading && <Skeleton className="w-[500px] h-[40px] rounded-md" />}
        <div>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <div className="bg-white/10 p-1 rounded-md border border-white/20 cursor-pointer inline-flex items-center gap-2">
                Add Tab <CirclePlus />
              </div>
            </PopoverTrigger>
            <ComboPopAPI setOpen={setOpen} />
          </Popover>
        </div>
        {data &&
          data.payload.map((item: any, index: number) => (
            <TabsTrigger
              value={item._id}
              key={index}
              className="relative bg-white/10 p-1 rounded-md border border-white/20 hover:bg-white/30 select-none inline-flex items-center gap-2"
              onClick={() => localStorage.setItem("currentStep", "0")}
            >
              <Cable className="size-5 bg-slate-600 rounded-md p-[2px]" />
              <span className="font-bold text-sm text-blue-400">
                {item.name}
              </span>
              <div className=" bg-red-600 rounded-md cursor-pointer p-[px]  hover:bg-red-600/50">
                <DeleteTab item={item} />
              </div>
            </TabsTrigger>
          ))}
      </TabsList>
      <div
        className={cn(
          " bg-red-500 p-1 rounded-md cursor-pointer hover:bg-red-500/50",
          props.Open === false &&
            "rotate-180 bg-green-500 hover:bg-green-500/50"
        )}
        onClick={props.handleOpen}
      >
        <PanelBottomClose />
      </div>
    </div>
  );
};

export default Tabs;
