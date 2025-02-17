import { Popover } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { PlusCircle } from "lucide-react";
import React from "react";
import { ComboPopAPI } from "./PopOverSelect";

type Props = {
  value: any;
  index: number;
  id: string;
};

const InStepPopOver = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <div className="bg-white/20 w-full p-2 rounded-md flex items-center justify-center">
          <div className="font-bold">
            <span className="text-sm">{props.value.name}</span>
          </div>
        </div>
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
