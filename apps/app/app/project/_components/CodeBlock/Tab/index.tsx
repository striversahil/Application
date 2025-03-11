import { Skeleton } from "../../../../../components/ui/skeleton";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  Cable,
  CirclePlus,
  PanelBottomClose,
  Trash,
  UnplugIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ComboPopAPI } from "../utils/PopOverSelect";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../../components/ui/popover";
import ProjectAction from "../../../../../actions/project";
import DeleteTab from "./DeleteTab";

type Props = {
  handleOpen: () => void;
  Open?: boolean;
  // BlockData: (data: any) => void;
};

const Tabs = (props: Props) => {
  const { isLoading, data } = ProjectAction.getCodeBlocks();
  const [currentTab, setCurrentTab] = useState("0");

  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex h-[36px] mx-1 ">
      <TabsList className="relative flex flex-1 items-center justify-start gap-2  overflow-y-scroll max-w-full bg-transparent">
        {isLoading && <Skeleton className="w-[500px] h-[40px] rounded-md" />}
        <div className="sticky left-0">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <div className="bg-white/10 w-32 p-1  rounded-md border border-white/20 cursor-pointer inline-flex items-center gap-2">
                <CirclePlus size={20} />
                <span className="text-sm font-bold"> Add New API</span>
              </div>
            </PopoverTrigger>
            <ComboPopAPI setOpen={setOpen} />
          </Popover>
        </div>
        {data &&
          data.payload.map((item: any, index: number) => (
            <div
              className={cn(
                `flex bg-white/10 p-1 rounded-md border  border-white/20 hover:bg-white/30  select-none cursor-pointer items-center gap-2`,
                currentTab === index.toString() &&
                  "bg-white/20 font-bold text-blue-400 border-b-[3px] border-l-[3px] border-blue-700"
              )}
              key={index}
            >
              <TabsTrigger
                value={index.toString()}
                className="inline-flex items-center gap-2"
                onClick={() => {
                  setCurrentTab(index.toString());
                }}
              >
                <UnplugIcon className="size-4 ml-1" />
                <span className=" text-[13px] ">{item.name}</span>
              </TabsTrigger>
              <div className="ml-auto">
                <DeleteTab item={item} />
              </div>
            </div>
          ))}
      </TabsList>
      <div
        className={cn(
          "  cursor-pointer p-2 hover:bg-white/20 rounded-md duration-200",
          props.Open === false && "rotate-180 "
        )}
        onClick={props.handleOpen}
      >
        <PanelBottomClose />
      </div>
    </div>
  );
};

export default Tabs;
