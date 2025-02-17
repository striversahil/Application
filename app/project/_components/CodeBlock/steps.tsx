import CodeBlockAction from "@/actions/project/codeBlock";

import { useQueryData } from "@/hooks/useQueryData";
import { useClickOutside } from "@mantine/hooks";
import React from "react";
import HeaderChange from "./_components/HeaderChange";
import { useMutationData } from "@/hooks/useMutation";

type Props = {
  value?: any;
};

const Steps = (props: Props) => {
  const { mutate } = useMutationData(
    ["CodeBlockAction.addstep"],
    () => CodeBlockAction.addstep(props.value._id),
    "CodeBlockAction.getall"
  );

  return (
    <div className=" border-r border-slate-500 w-full h-full">
      <HeaderChange value={props.value} />
      <div className="flex flex-col items-center justify-start w-full h-full gap-2 p-2">
        {props.value.steps.map((item: any, index: number) => {
          return (
            <div key={index} className="w-full">
              <div className="bg-white/20 w-full p-2 rounded-md flex items-center justify-center">
                <div className="font-bold">
                  <span className="text-sm">{item.name}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
