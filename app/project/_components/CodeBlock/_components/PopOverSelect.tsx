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

export function ComboPopAPI() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const { mutateAdd } = useAddTab();

  return (
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
                      setOpen(false);
                      mutateAdd({ name: `API : ${framework.label}` });
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
    </Popover>
  );
}
