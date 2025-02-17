"use client";

import * as React from "react";
import { Check, ChevronsUpDown, CirclePlus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { useAddTab } from "@/app/project/_hooks/useOptimizedtab";
import { useaddSteps } from "@/app/project/_hooks/useaddSteps";

type PopOver = {
  setOpen: (open: boolean) => void;
  open: boolean;
  _id?: string;
  step?: number;
};

const frameworks = [
  {
    value: "python",
    label: "Python",
    icon_href: "/assets/languages/python.svg",
  },
  {
    value: "javascript",
    label: "JavaScript",
    icon_href: "/assets/languages/javascript.svg",
  },
  {
    value: "typescript",
    label: "TypeScript",
    icon_href: "/assets/languages/typescript.svg",
  },
  {
    value: "graphql",
    label: "GraphQL",
    icon_href: "/assets/languages/graphql.svg",
  },
  {
    value: "mysql",
    label: "SQL",
    icon_href: "/assets/languages/mysql.svg",
  },
  {
    value: "restapi",
    label: "REST API",
    icon_href: "/assets/languages/restapi.svg",
  },
];

export function ComboPopAPI(props: PopOver) {
  const [value, setValue] = React.useState("");

  const { mutateAdd } = useAddTab();

  const { mutateStepAdd } = useaddSteps();

  return (
    <PopoverContent className="w-[200px] p-0 ">
      <Command className="bg-slate-800">
        <CommandInput placeholder="Search Provider..." />
        <CommandList>
          <CommandEmpty>No API Provider found.</CommandEmpty>
          <CommandGroup className="">
            <div className="flex flex-col ">
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue: any) => {
                    setValue(currentValue === value ? "" : currentValue);
                    props.setOpen(false);
                    if (props._id) {
                      console.log(props.step);
                      mutateStepAdd({
                        metadata: {
                          _id: props._id,
                          step: props.step,
                        },
                        slug: {
                          name: "Lodash",
                          code: 'console.log("Hello World")',
                          language: "javascript",
                          output: "Hello World",
                        },
                      });
                    }
                    if (!props._id) {
                      mutateAdd({ name: `API : ${framework.label}` });
                    }
                  }}
                  className=" p-1 py-2 rounded-md border-none cursor-pointer flex items-center gap-2"
                >
                  <Image
                    src={framework.icon_href}
                    alt={framework.label}
                    width={20}
                    height={20}
                  />
                  <span className="w-full text-left">{framework.label}</span>
                </CommandItem>
              ))}
            </div>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  );
}
