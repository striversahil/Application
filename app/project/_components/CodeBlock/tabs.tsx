import CodeBlockAction from "@actions/project/codeBlock";
import ProjectAction from "@actions/project/project";
import { Skeleton } from "@components/ui/skeleton";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useMutationData } from "@hooks/useMutation";
import { useQueryData } from "@hooks/useQueryData";
import {
  Cable,
  CirclePlus,
  PanelBottomClose,
  PanelBottomOpen,
  Trash,
  X,
} from "lucide-react";
import React from "react";
import { useAddTab, useDeleteTab } from "@app/project/_hooks/useOptimizedtab";
import useTabFallback from "../utils/TabFallback";
import { cn } from "@/lib/utils";

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

  const { mutateAdd } = useAddTab();
  const { mutateDelete } = useDeleteTab();
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

  const handleAdd = () => {
    mutateAdd({ name: `API ${data.payload.length + 1}` });
    setFallback(`Tab ${data.payload.length + 1}`);
  };

  return (
    <div className="relative w-full h-[36px] ">
      <HandleOpenIcon />
      <TabsList className="flex items-center justify-start gap-2 flex-wrap overflow-y-auto max-w-full">
        {isLoading && <Skeleton className="w-[500px] h-[40px] rounded-md" />}
        <div
          className="bg-white/10 p-1 rounded-md border border-white/20 cursor-pointer inline-flex items-center gap-2"
          onClick={handleAdd}
        >
          Add Tab <CirclePlus />
        </div>
        {data?.payload.map((item: any, index: number) => (
          <TabsTrigger
            value={item._id}
            key={index}
            className="relative bg-white/10 p-1 rounded-md border border-white/20 hover:bg-white/30 select-none inline-flex items-center gap-2"
          >
            <Cable className="size-6 bg-slate-600 rounded-md p-1" />
            <span className="font-bold text-blue-400">{item.name}</span>
            <span
              className=" bg-red-600 rounded-md cursor-pointer p-1"
              onClick={() => handleClose(item._id)}
            >
              <Trash className="size-4" />
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
};

export default Tabs;
