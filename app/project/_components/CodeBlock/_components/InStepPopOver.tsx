import { Popover } from "@/components/ui/popover";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { AlignJustify, PlusCircle } from "lucide-react";
import React from "react";
import { ComboPopAPI } from "./PopOverSelect";
import { useMutationData } from "@/hooks/useMutation";
import CodeBlockAction from "@/actions/project/codeBlock";

type Props = {
  value: any;
  index: number;
  id: string;
};

const InStepPopOver = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const { mutate } = useMutationData(
    ["CodeBlockAction.duplicateStep"],
    CodeBlockAction.duplicateStep,
    "CodeBlockAction.getall"
  );

  const { mutate: mutateDelete } = useMutationData(
    ["CodeBlockAction.deleteStep"],
    CodeBlockAction.deleteStep,
    "CodeBlockAction.getall"
  );

  const handleClick = () => {
    window.localStorage.setItem("currentStep", JSON.stringify(props.index));
  };

  return (
    <div>
      <div className="bg-white/20 w-full p-2 rounded-md flex items-center justify-center">
        <div
          className="font-bold flex-1 w-full text-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-sm ">{props.value.name}</span>
        </div>
        <Popover>
          <PopoverTrigger className="">
            <AlignJustify className="size-4 " />
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <div className="flex flex-col p-2 rounded-md gap-2">
              <div
                className="bg-white/40 text-sm hover:bg-white/20 p-1 rounded-md cursor-pointer"
                onClick={() => mutate({ id: props.id, step: props.index })}
              >
                Duplicate Step
              </div>
              <div
                className="bg-red-800 text-sm hover:bg-red-900 p-1 rounded-md cursor-pointer"
                onClick={() =>
                  mutateDelete({ id: props.id, step: props.index })
                }
              >
                Delete Step
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="w-full flex justify-center cursor-pointer">
          <PlusCircle className="size-2 hover:size-6 duration-200 active:rotate-90" />
        </PopoverTrigger>
        <ComboPopAPI
          setOpen={setOpen}
          open={open}
          _id={props.id}
          step={props.index + 1}
        />
      </Popover>
    </div>
  );
};

export default InStepPopOver;
