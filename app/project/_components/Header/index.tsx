"use client";
import ProjectAction from "@/actions/project/project";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useQueryData } from "@/hooks/useQueryData";
import React from "react";
import { useClickOutsideEnter } from "../../_hooks/useClickOutsideEnter";
import { useMutationData } from "@/hooks/useMutation";

type Props = {};

const Header = (props: Props) => {
  const { isLoading, data } = useQueryData("project", ProjectAction.getOne);

  const { mutate } = useMutationData(
    ["ProjectAction.updatename"],
    ProjectAction.updatename,
    "project"
  );

  const { ref, mount, setMount, EnterClick, ValueChange, value } =
    useClickOutsideEnter(() => mutate({ name: value }), data?.payload.name);
  ref.current?.focus();

  return (
    <div className="relative top-0 w-full h-[5vh] bg-slate-900 text-center flex justify-center">
      <h1
        className="flex items-center text-3xl text-white font-bold text-center"
        onClick={() => setMount(true)}
      >
        {isLoading && <Skeleton className="w-[500px] h-[40px] rounded-md" />}

        {!isLoading && !mount && (
          <span className="font-bold text-2xl">{data?.payload.name}</span>
        )}
        {!isLoading && mount && (
          <Input
            className="w-[200px] h-[40px] bg-inherit rounded-md"
            ref={ref}
            value={value}
            autoFocus
            onChange={ValueChange}
            onKeyDown={EnterClick}
          />
        )}
      </h1>
    </div>
  );
};

export default Header;
