import CodeBlockAction from "@/actions/project/codeBlock";

import { useQueryData } from "@/hooks/useQueryData";
import { useClickOutside } from "@mantine/hooks";
import React from "react";
import HeaderChange from "./_components/HeaderChange";
import { useMutationData } from "@/hooks/useMutation";
import { PlusCircle } from "lucide-react";
import { useaddSteps } from "../../_hooks/useaddSteps";

type Props = {
  value?: any;
};

const Steps = (props: Props) => {
  console.log(props.value);

  const { mutate } = useaddSteps();

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
              <div
                className="w-full flex justify-center cursor-pointer"
                onClick={() =>
                  mutate({
                    metadata: { _id: props.value._id, step: index + 1 },
                    slug: {
                      name: "Python",
                      code: 'console.log("Hello World")',
                      language: "javascript",
                      output: "Hello World",
                    },
                  })
                }
              >
                <PlusCircle className="size-2 hover:size-6 duration-200 active:rotate-90" />
              </div>
            </div>
          );
        })}
        <div
          className="w-full flex justify-center cursor-pointer"
          onClick={() =>
            mutate({
              metadata: {
                _id: props.value._id,
                step: props.value.steps.length,
              },
              slug: {
                name: "JavaScrip",
                code: 'console.log("Hello World")',
                language: "javascript",
                output: "Hello World",
              },
            })
          }
        >
          <PlusCircle className="size-6 duration-200 active:rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default Steps;
