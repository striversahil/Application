import CodeBlockAction from "../../../../api/project/codeBlock";

import { useQueryData } from "@/hooks/useQueryData";
import { useClickOutside } from "@mantine/hooks";
import React from "react";
import HeaderChange from "./_components/HeaderChange";
import { useMutationData } from "@/hooks/useMutation";
import { PlusCircle } from "lucide-react";
import { Popover } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { ComboPopAPI } from "./_components/PopOverSelect";
import InStepPopOver from "./_components/InStepPopOver";

type Props = {
  value?: any;
};
// Space Left Because Wanna Introduce Drag n Drop Feature here

const handleClick = (index: number) => {
  window.localStorage.setItem("currentStep", JSON.stringify(index));
};

const Steps = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className=" border-r border-slate-500 w-full h-full">
      <HeaderChange value={props.value} />
      <div className="flex flex-col overflow-y-scroll items-center justify-start w-full h-full gap-2 p-2">
        {props.value.steps.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="w-full"
              onClick={() => handleClick(index)}
            >
              <InStepPopOver value={item} id={props.value._id} index={index} />
            </div>
          );
        })}
        {props.value.steps.length === 0 && (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger className=" flex flex-col justify-center items-center cursor-pointer bg-white/20 rounded-lg px-5">
              Click to Add First API
              <PlusCircle className=" size-6 duration-200 active:rotate-90" />
            </PopoverTrigger>
            <ComboPopAPI
              setOpen={setOpen}
              _id={props.value._id}
              step={props.value.steps.length}
            />
          </Popover>
        )}
      </div>
    </div>
  );
};

export default Steps;
