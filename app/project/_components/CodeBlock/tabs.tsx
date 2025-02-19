import CodeBlockAction from "../../../../api/project/codeBlock";
import ProjectAction from "../../../../api/project/project";
import { Skeleton } from "@/components/ui/skeleton";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useMutationData } from "@/hooks/useMutation";
import { useQueryData } from "@/hooks/useQueryData";
import {
  Cable,
  CirclePlus,
  PanelBottomClose,
  PanelBottomOpen,
  Trash,
  X,
} from "lucide-react";
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

type Props = {
  handleOpen: () => void;
  Open?: boolean;
  // BlockData: (data: any) => void;
};

const Tabs = (props: Props) => {
  const { isLoading, data } = useQueryData(
    "CodeBlockAction.getall",
    CodeBlockAction.getall
  );

  const { mutate: mutateDelete } = TabBlockAction.useDelete();
  const { setFallback } = useTabFallback();

  const HandleOpenIcon = (): React.JSX.Element => {
    return (
      <div
        className={cn(
          "absolute z-50 top-0 right-0 p-1 bg-red-500 rounded-md cursor-pointer hover:bg-red-500/50",
          props.Open === false &&
            "rotate-180 bg-green-500 hover:bg-green-500/50"
        )}
        onClick={props.handleOpen}
      >
        <PanelBottomClose />
      </div>
    );
  };

  const handleClose = (id: any) => {
    mutateDelete({
      _id: id,
    });
    setFallback(data.payload[0]._id);
  };

  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative w-full h-[36px] ">
      <HandleOpenIcon />
      <TabsList className="flex items-center justify-start gap-2 flex-wrap overflow-x-auto max-w-full">
        {isLoading && <Skeleton className="w-[500px] h-[40px] rounded-md" />}
        <div>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <div
                //     variant="secondary"
                //     role="combobox"
                //     aria-expanded={open}
                className="bg-white/10 p-1 rounded-md border border-white/20 cursor-pointer inline-flex items-center gap-2"
              >
                Add Tab <CirclePlus />
              </div>
            </PopoverTrigger>
            <ComboPopAPI open={open} setOpen={setOpen} />
          </Popover>
        </div>
        {data?.payload.map((item: any, index: number) => (
          <TabsTrigger
            value={item._id}
            key={index}
            className="relative bg-white/10 p-1 rounded-md border border-white/20 hover:bg-white/30 select-none inline-flex items-center gap-2"
            onClick={() => localStorage.setItem("currentStep", "0")}
          >
            <Cable className="size-5 bg-slate-600 rounded-md p-[2px]" />
            <span className="font-bold text-sm text-blue-400">{item.name}</span>
            <div className=" bg-red-600 rounded-md cursor-pointer p-[px]  hover:bg-red-600/50">
              <Popover>
                <PopoverTrigger>
                  <span className="">
                    <Trash className="size-4" />
                  </span>
                </PopoverTrigger>
                <PopoverContent className="w-fit text-sm flex flex-col gap-4 rounded-md">
                  <div>
                    Are You Sure <br />
                    You Want To Delete
                    <span className="p-2 text-md  font-bold text-red-500 underline">
                      {item.name}
                    </span>
                    Tab ?
                  </div>
                  <div className="w-full flex justify-between">
                    <Button variant={"secondary"}>Cancel</Button>
                    <Button
                      onClick={() => handleClose(item._id)}
                      className="bg-red-600 rounded-md cursor-pointer hover:bg-red-600/50"
                      variant={"destructive"}
                    >
                      Delete
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
};

export default Tabs;
