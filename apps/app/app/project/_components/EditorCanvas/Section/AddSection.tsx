import SectionAction from "../../../../../actions/project/section";
import {
  TooltipContent,
  TooltipTrigger,
} from "../../../../../components/ui/Tooltip/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";
import { PlusCircleIcon } from "lucide-react";
import React from "react";

type Props = {};

const AddSection = (props: Props) => {
  const { mutate } = SectionAction.create();
  return (
    <div className="flex justify-center items-center py-2">
      <Tooltip>
        <TooltipTrigger>
          <PlusCircleIcon
            onClick={() => mutate({})}
            className="cursor-pointer hover:text-blue-500 duration-300"
          />
        </TooltipTrigger>
        <TooltipContent>Add Section</TooltipContent>
      </Tooltip>
    </div>
  );
};

export default AddSection;
