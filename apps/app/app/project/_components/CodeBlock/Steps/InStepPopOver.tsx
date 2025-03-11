import { Popover } from "../../../../../components/ui/popover";
import {
  PopoverContent,
  PopoverTrigger,
} from "../../../../../components/ui/popover";
import { AlignJustify, Copy, PlusCircle, Trash2 } from "lucide-react";
import React, { useEffect } from "react";
import { ComboPopAPI } from "../utils/PopOverSelect";
import StepsBlockAction from "../../../../../actions/project/stepsBlock";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../../../components/ui/Tooltip/tooltip";

type Props = {
  value: any;
  index: number;
  id: string;
};
import languages from "@/packages/common/Json/languages.json";
import Image from "next/image";
import { TabsTrigger } from "@radix-ui/react-tabs";

const InStepPopOver = (props: Props) => {
  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);

  const { mutate } = StepsBlockAction.useduplicate(props.id);

  const { mutate: mutateDelete } = StepsBlockAction.usedelete(props.id);

  const languageHref =
    (props.value.language &&
      languages.find((item) => item.value === props.value.language)
        ?.icon_href) ||
    "/assets/languages/mysql.svg";

  return (
    <div>
      <div className="bg-white/20 w-full p-2 rounded-md flex items-center justify-center">
        <TabsTrigger className="w-full" value={props.value._id}>
          <div className="font-bold flex-1 flex w-full text-center cursor-pointer">
            <Image
              src={languageHref}
              width={25}
              height={25}
              alt="Image"
              className="p-[1px] shadow-2xl hover:bg-white/50 bg-white/30 rounded-md"
            />
            <div className="text-sm flex-1 text-center  ">
              {props.value.name}
            </div>
          </div>
        </TabsTrigger>
        <Popover open={open2} onOpenChange={setOpen2}>
          <PopoverTrigger className="">
            <AlignJustify className="size-4 " />
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <div className="flex flex-col p-2 rounded-md gap-2">
              <div
                className="bg-white/40 flex items-center hover:bg-white/20 p-1 rounded-md cursor-pointer"
                onClick={() => {
                  setOpen2(false);
                  mutate({
                    metadata: {
                      codeBlock_id: props.id,
                      stepBlock_id: props.value._id,
                    },
                  });
                }}
              >
                <Copy className="size-4" />
                <div className="text-sm ml-2 border-l border-l-gray-200 pl-2">
                  Duplicate Step
                </div>
              </div>
              <div
                className="bg-red-800 text-sm flex items-center hover:bg-red-900 p-1 rounded-md cursor-pointer"
                onClick={() => {
                  setOpen2(false);
                  mutateDelete({
                    metadata: {
                      codeBlock_id: props.id,
                      stepBlock_id: props.value._id,
                    },
                  });
                }}
              >
                <Trash2 className="size-4" />
                <div className="text-sm ml-2 border-l border-l-gray-200 pl-2">
                  Delete Step
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="w-full flex justify-center cursor-pointer">
          <Tooltip>
            <TooltipTrigger>
              <PlusCircle className="size-4 hover:size-6 duration-200 active:rotate-90" />
            </TooltipTrigger>
            <TooltipContent>
              <span className="text-sm">Add Step</span>
            </TooltipContent>
          </Tooltip>
        </PopoverTrigger>
        <ComboPopAPI
          setOpen={setOpen}
          id={props.id}
          step_id={props.value._id}
        />
      </Popover>
    </div>
  );
};

export default InStepPopOver;
